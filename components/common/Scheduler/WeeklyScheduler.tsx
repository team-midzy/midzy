"use client";

import Countdown from "@/components/common/Scheduler/Countdown";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/Button/IconButton";
import Card from "@/components/ui/Card/Card";
import List from "@/components/ui/List/List";
import ListItem from "@/components/ui/List/ListItem";
import Member from "@/components/ui/Members/Member";
import Twinzy from "@/components/ui/Members/Twinzy";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import dayjs, { type Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";

const weeklySchedulesMockup: Schedule[] = [
  {
    id: 526,
    dateTime: "2024-09-29 17:26",
    member: "yeji",
    schedule: "예지시",
  },
  {
    id: 721,
    dateTime: "2024-09-30 19:21",
    member: "lia",
    schedule: "리아시",
  },
  {
    id: 417,
    dateTime: "2024-10-01 16:17",
    member: "ryujin",
    schedule: "류진시",
  },
  {
    id: 605,
    dateTime: "2024-10-02 18:05",
    member: "chaeryeong",
    schedule: "채령시",
  },
  {
    id: 1209,
    dateTime: "2024-10-03 12:09",
    member: "yuna",
    schedule: "유나시",
  },
  {
    id: 212,
    dateTime: "2024-10-04 02:12",
    member: "itzy",
    schedule: "있지시",
  },
  {
    id: 708,
    dateTime: "2024-10-04 19:08",
    member: "itzy",
    schedule: "믿지시",
  },
];

const getWeekOfMonth = (targetDate: Dayjs): WeekInfo => {
  const weekDates: DateString[] = [];

  const startOfWeek = targetDate.startOf("week");
  for (let i = 0; i < 7; i++) {
    weekDates.push(
      startOfWeek.add(i, "day").format("YYYY-MM-DD") as DateString
    );
  }

  // 수요일 (주차의 기점)
  const wednesday = startOfWeek.add(3, "day");
  const startOfMonth = wednesday.startOf("month");

  // 해당 월의 첫 번째 날이 속한 주의 요일
  const firstDayOfWeek = startOfMonth.day();

  // 수요일 기준으로 월의 몇 번째 주인지 계산
  const dayOfMonth = wednesday.date();
  const week = Math.ceil((dayOfMonth + firstDayOfWeek) / 7);

  // 수요일이 속한 월
  const month = wednesday.month() + 1;

  return { month, week, weekDates };
};

const WeeklyScheduler = ({ className }: WeeklySchedulerProps) => {
  // 선택 된 날짜
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  // 현재 주차 정보
  const [weekInfo, setWeekInfo] = useState<WeekInfo>(
    getWeekOfMonth(currentDate)
  );

  // TODO: 현재 날짜 기준으로 주간 스케줄 페칭
  const [weeklySchedules, setWeeklySchedules] = useState<Schedule[]>(
    weeklySchedulesMockup
  );

  // 현재 날짜의 스케줄
  const [schedules, setSchedules] = useState<Schedule[]>(
    weeklySchedules.length
      ? weeklySchedules.filter(({ dateTime }) =>
          currentDate.isSame(dateTime, "date")
        )
      : []
  );

  // 선택 된 스케줄
  const [currentSchedule, setCurrentSchedule] = useState<Schedule | null>(
    schedules.length ? schedules[0] : null
  );

  useEffect(() => {
    setWeekInfo((prevWeekInfo) => {
      const newWeekInfo = getWeekOfMonth(currentDate);

      if (
        prevWeekInfo.month !== newWeekInfo.month ||
        prevWeekInfo.week !== newWeekInfo.week
      ) {
        setWeeklySchedules(weeklySchedulesMockup);
      }

      return newWeekInfo;
    });

    const dateSchedules = weeklySchedules.filter(({ dateTime }) =>
      currentDate.isSame(dateTime, "date")
    );

    setSchedules(dateSchedules);

    if (dateSchedules.length) {
      setCurrentSchedule(dateSchedules[0]);
    } else {
      setCurrentSchedule(null);
    }
  }, [currentDate, weeklySchedules]);

  const moveWeek = (direction: "prev" | "next") => {
    setCurrentDate(currentDate.add(direction === "next" ? 7 : -7, "day"));
  };

  return (
    <Card className={className}>
      <header className="flex items-center justify-between px-1">
        <h6 className="font-medium">{`${weekInfo.month}월 ${weekInfo.week}주차`}</h6>

        <div className="flex text-neutral-400">
          {!dayjs().isSame(currentDate, "date") && (
            <Button
              variant="text"
              size="sm"
              className="mr-1 text-xs"
              onClick={() => setCurrentDate(dayjs())}
            >
              TODAY
            </Button>
          )}

          <IconButton
            icon={faChevronLeft}
            size="sm"
            className="mr-3"
            onClick={() => moveWeek("prev")}
          />
          <IconButton
            icon={faChevronRight}
            size="sm"
            onClick={() => moveWeek("next")}
          />
        </div>
      </header>

      <section className="grid grid-cols-7 place-items-center gap-1 py-3">
        {weekInfo.weekDates.map((date) => (
          <div
            key={date}
            className={twJoin(
              "aspect-square w-8 cursor-pointer text-center leading-8",
              currentDate.isSame(date, "date") &&
                "rounded-full bg-primary-500 font-semibold text-white",
              !currentDate.isSame(date, "date") && "text-neutral-400"
            )}
            onClick={() => setCurrentDate(dayjs(date))}
          >
            {dayjs(date).format("D")}
          </div>
        ))}
      </section>

      <section className="grid gap-4 p-2">
        {currentSchedule ? (
          <>
            <div className="flex items-center justify-between">
              <figure>
                <Member member={currentSchedule.member} size={68} />
              </figure>

              <div>
                <time
                  className="mb-2 flex justify-end"
                  dateTime={currentSchedule.dateTime}
                >
                  <span className="text-4xl font-bold leading-none">
                    {dayjs(currentSchedule.dateTime).format("h:mm")}
                  </span>

                  <span className="ml-0.5 text-sm text-neutral-500">
                    {dayjs(currentSchedule.dateTime).format("A")}
                  </span>
                </time>

                <Countdown targetDate={currentSchedule.dateTime} />
              </div>
            </div>

            <h5 className="py-2 text-lg">{currentSchedule.schedule}</h5>
          </>
        ) : (
          <div className="h-36 w-full text-center leading-[9rem]">
            <span className="align-middle text-lg font-semibold">
              믿지 만날 준비 중🥰
            </span>
          </div>
        )}
      </section>

      {schedules.length ? (
        <section>
          <List className="-mx-2 grid gap-2 py-4">
            {schedules.map(({ id, dateTime, member, schedule }) => (
              <ListItem
                key={id}
                className="w-full cursor-pointer overflow-hidden"
                onClick={() =>
                  setCurrentSchedule({ id, dateTime, member, schedule })
                }
              >
                <time
                  dateTime={dateTime}
                  className="rounded-full bg-primary-300 px-2 py-1 text-sm"
                >
                  <span>{dayjs(dateTime).format("hh:mm")}</span>

                  <span className="ml-0.5 text-xs text-neutral-500">
                    {dayjs(dateTime).format("A")}
                  </span>
                </time>

                <Twinzy member={member} />

                <span className="max-w-full truncate">{schedule}</span>
              </ListItem>
            ))}
          </List>
        </section>
      ) : null}
    </Card>
  );
};

export default WeeklyScheduler;
