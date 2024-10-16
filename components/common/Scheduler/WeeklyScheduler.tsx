"use client";

import Countdown from "@/components/common/Scheduler/Countdown";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/Button/IconButton";
import Card from "@/components/ui/Card/Card";
import List from "@/components/ui/List/List";
import ListItem from "@/components/ui/List/ListItem";
import Member from "@/components/ui/Members/Member";
import Twinzy from "@/components/ui/Members/Twinzy";
import scheduleData from "@/config/schedules.json";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import dayjs, { type Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";

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

const getWeeklyData = (date: Dayjs) =>
  scheduleData.filter(({ dateTime }) =>
    date.isSame(dayjs(dateTime), "week")
  ) as Schedule[];

const getCurrentSchedule = (
  schedules: Schedule[],
  currentSchedule?: Schedule | null
) => {
  if (!schedules.length) return null;

  return (
    schedules.find(({ dateTime }) =>
      dayjs().isBefore(dayjs(dateTime), "second")
    ) ??
    currentSchedule ??
    schedules[0]
  );
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
    getWeeklyData(currentDate)
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
    getCurrentSchedule(schedules)
  );

  useEffect(() => {
    setWeekInfo((prevWeekInfo) => {
      const newWeekInfo = getWeekOfMonth(currentDate);

      if (
        prevWeekInfo.month !== newWeekInfo.month ||
        prevWeekInfo.week !== newWeekInfo.week
      ) {
        setWeeklySchedules(getWeeklyData(currentDate));
      }

      return newWeekInfo;
    });

    const dateSchedules = weeklySchedules.filter(({ dateTime }) =>
      currentDate.isSame(dateTime, "date")
    );

    setSchedules(dateSchedules);
    setCurrentSchedule(getCurrentSchedule(dateSchedules));
  }, [currentDate, weeklySchedules]);

  const moveWeek = (direction: "prev" | "next") => {
    setCurrentDate(currentDate.add(direction === "next" ? 7 : -7, "day"));
  };

  const endCountdownHandler = () => {
    setCurrentSchedule(getCurrentSchedule(schedules, currentSchedule));
  };

  return (
    <Card className={className}>
      <header className="flex items-center justify-between px-1">
        <h5 className="text-xl font-bold">
          {`${weekInfo.month}월 ${weekInfo.week}주차`} 📅
        </h5>

        <div className="flex items-center text-neutral-400">
          {!dayjs().isSame(currentDate, "date") && (
            <Button
              variant="text"
              size="xs"
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
              "h-8 w-8 cursor-pointer rounded-full text-center leading-8 transition-all duration-200 ease-in-out hover:bg-primary-300 hover:text-white",
              currentDate.isSame(date, "date") &&
                "bg-primary-500 font-semibold text-white",
              !currentDate.isSame(date, "date") && "text-neutral-400",
              !currentDate.isSame(date, "date") &&
                dayjs().isSame(date, "date") &&
                "border border-itzy-200"
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
                <Member member={currentSchedule.member} size={80} />
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

                <Countdown
                  targetDate={currentSchedule.dateTime}
                  onEnd={endCountdownHandler}
                />
              </div>
            </div>

            <h5 className="py-2 text-lg font-semibold">
              {currentSchedule.schedule}
            </h5>
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
                className="grid w-full cursor-pointer grid-cols-[auto_auto_1fr] gap-2 overflow-hidden"
                onClick={() =>
                  setCurrentSchedule({ id, dateTime, member, schedule })
                }
              >
                <time
                  dateTime={dateTime}
                  className="w-[66px] rounded-full bg-primary-400 px-2 py-1 text-center text-xs"
                >
                  <span className="text-white">
                    {dayjs(dateTime).format("hh:mm")}
                  </span>

                  <span className="ml-0.5 text-[0.625rem]">
                    {dayjs(dateTime).format("A")}
                  </span>
                </time>

                <Twinzy member={member} size={20} />

                <span className="truncate text-sm">{schedule}</span>
              </ListItem>
            ))}
          </List>
        </section>
      ) : null}
    </Card>
  );
};

export default WeeklyScheduler;
