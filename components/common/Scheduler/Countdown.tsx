"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

const calculateDday = (targetDate: string): DdayCountdown => {
  const now = dayjs();
  const target = dayjs(targetDate);

  const isEnd = now.isAfter(target);
  if (isEnd) return { days: 0, hours: 0, minutes: 0, seconds: 0, isEnd };

  const days = target.diff(now, "day");
  const hours = target.diff(now, "hour") % 24;
  const minutes = target.diff(now, "minute") % 60;
  const seconds = target.diff(now, "second") % 60;

  return { days, hours, minutes, seconds, isEnd };
};

const formatTime = ({ hours, minutes, seconds }: DdayCountdown): string =>
  `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;

const padTime = (time: number) => String(time).padStart(2, "0");

const Countdown = ({ targetDate, onEnd }: CountdownProps) => {
  const [ddayCountdown, setDdayCountdown] = useState<DdayCountdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnd: false,
  });

  useEffect(() => {
    const dday = calculateDday(targetDate);
    setDdayCountdown(dday);

    if (dday.isEnd) return;

    const countdown = setInterval(() => {
      setDdayCountdown((prevDday) => {
        let { days, hours, minutes, seconds } = prevDday;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;

          if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(countdown);

          setTimeout(() => {
            onEnd();
          }, 1000);

          return { days: 0, hours: 0, minutes: 0, seconds: 0, isEnd: true };
        }

        return { days, hours, minutes, seconds, isEnd: false };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate, onEnd]);

  return (
    <div className="float-end w-max rounded-full bg-slate-200 bg-opacity-70 px-2">
      <span
        aria-label={`D-Day ${ddayCountdown.days}`}
        className="mx-1 text-xs leading-5 text-itzy-500"
      >
        {`D-${ddayCountdown.days}`}
      </span>

      <time className="inline-block min-w-[60px] text-sm text-neutral-600">
        {formatTime(ddayCountdown)}
      </time>
    </div>
  );
};

export default Countdown;
