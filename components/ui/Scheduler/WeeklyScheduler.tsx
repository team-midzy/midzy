"use client";

import Card from "@/components/ui/Card/Card";
import List from "@/components/ui/List/List";
import ListItem from "@/components/ui/List/ListItem";
import Twinzy from "@/components/ui/Members/Twinzy";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { useState } from "react";
import { twJoin } from "tailwind-merge";

const WeeklyScheduler = ({ className }: WeeklySchedulerProps) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // TODO: 현재 날짜 기준으로 주간 스케줄 페칭
  const weeklySchedulesMockup: Schedule[] = [
    {
      date: "2024-09-29",
      schedules: [
        {
          id: 526,
          member: "yeji",
          time: "17:26",
          schedule: "예지시",
        },
      ],
    },
    {
      date: "2024-09-30",
      schedules: [
        {
          id: 721,
          member: "lia",
          time: "19:21",
          schedule: "리아시",
        },
      ],
    },
    {
      date: "2024-10-01",
      schedules: [
        {
          id: 417,
          member: "ryujin",
          time: "16:17",
          schedule: "류진시",
        },
      ],
    },
    {
      date: "2024-10-02",
      schedules: [
        {
          id: 605,
          member: "chaeryeong",
          time: "18:05",
          schedule: "채령시",
        },
      ],
    },
    {
      date: "2024-10-03",
      schedules: [
        {
          id: 1209,
          member: "yuna",
          time: "12:09",
          schedule: "유나시",
        },
      ],
    },
    {
      date: "2024-10-04",
      schedules: [
        {
          id: 212,
          member: "itzy",
          time: "02:12",
          schedule: "있지시",
        },
        {
          id: 708,
          member: "itzy",
          time: "19:08",
          schedule: "믿지시",
        },
      ],
    },
    {
      date: "2024-10-05",
    },
  ];

  const wednesday = currentDate.startOf("week").add(3, "day");
  const startOfMonth = wednesday.startOf("month");

  // 해당 월의 첫 번째 날이 속한 주의 요일
  const firstDayOfWeek = startOfMonth.day();

  // 수요일 기준으로 월의 몇 번째 주인지 계산
  const dayOfMonth = wednesday.date();
  const weekOfMonth = Math.ceil((dayOfMonth + firstDayOfWeek) / 7);

  // 수요일이 속한 월
  const month = wednesday.month() + 1;

  // 현재 날짜의 스케줄
  const { schedules, date: scheduleDate } =
    weeklySchedulesMockup.find(
      ({ date }) => date === currentDate.format("YYYY-MM-DD")
    ) ?? {};

  const scheduleDateTime = (time: TimeString) => `${scheduleDate} ${time}`;

  return (
    <Card className={className}>
      <header className="flex items-center justify-between px-1">
        <h6 className="font-medium">{`${month}월 ${weekOfMonth}주차`}</h6>

        <div className="flex gap-4 text-neutral-300">
          <div className="h-6 w-6 text-center">
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </div>

          <div className="h-6 w-6 text-center">
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div>
        </div>
      </header>

      <section className="grid grid-cols-7 place-items-center gap-1 py-3">
        {weeklySchedulesMockup.map(({ date }) => (
          <div
            key={date}
            className={twJoin(
              "aspect-square w-8 text-center leading-8",
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

      {schedules?.length && (
        <section className="grid gap-4 p-2">
          <div className="flex items-center justify-between">
            <figure>
              <Twinzy member={schedules[0].member} size={60} />
            </figure>

            <div>
              <time
                className="mb-2 flex justify-end"
                dateTime={scheduleDateTime(schedules[0].time)}
              >
                <span className="text-4xl font-bold leading-none">
                  {dayjs(scheduleDateTime(schedules[0].time)).format("h:mm")}
                </span>

                <span className="ml-0.5 text-sm text-neutral-500">
                  {dayjs(scheduleDateTime(schedules[0].time)).format("A")}
                </span>
              </time>

              <div className="rounded-full bg-slate-200 bg-opacity-70 px-2">
                <span className="mr-1 text-xs leading-5 text-itzy-200">
                  D-12
                </span>
                <span className="text-sm text-neutral-400">19:02:12</span>
              </div>
            </div>
          </div>

          <h5 className="py-2 text-lg">{schedules[0].schedule}</h5>
        </section>
      )}

      {schedules?.length && (
        <section>
          <List className="-mx-2 grid gap-2 py-4">
            {schedules.map(({ id, member, time, schedule }) => (
              <ListItem key={id} className="w-full overflow-hidden">
                <time
                  dateTime={scheduleDateTime(time)}
                  className="rounded-full bg-primary-300 px-2 py-1 text-sm"
                >
                  {time}
                </time>

                <Twinzy member={member} />

                <span className="max-w-full truncate">{schedule}</span>
              </ListItem>
            ))}
          </List>
        </section>
      )}
    </Card>
  );
};

export default WeeklyScheduler;
