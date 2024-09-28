import { ITZY } from "@/components/common";
import dayjs from "dayjs";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

const Calendar = () => {
  const now = dayjs();

  const startDay = dayjs().startOf("month").day();
  const daysInMonth = dayjs().daysInMonth();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const sunday = dayjs().set("day", 0);
  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    weekdays.push(sunday.add(i, "day").format("ddd"));
  }

  const cellStyle = "w-28 px-2 py-1";

  return (
    <table>
      <caption className="px-2 py-1 text-left font-bold">
        <time dateTime={now.format("YYYY-MM")}>{now.format("YYYY.MM")}</time>
      </caption>

      <thead className="text-sm">
        <tr className="border-b border-slate-200">
          {weekdays.map((day, index) => (
            <th
              key={day}
              scope="col"
              className={twJoin(
                "text-left font-bold",
                cellStyle,
                index === 0 && "text-red-500"
              )}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="text-sm">
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex} className="border-b border-slate-200">
            {week.map((day, dayIndex) => (
              <td
                key={dayIndex}
                className={twJoin(
                  "h-20 align-baseline",
                  cellStyle,
                  !day && "invisible",
                  dayIndex === 0 && "text-red-500"
                )}
              >
                <div className="flex h-full flex-col justify-between pb-2">
                  <time
                    dateTime={
                      day
                        ? dayjs().set("date", day).format("YYYY-MM-DD")
                        : undefined
                    }
                    className={twJoin(
                      day &&
                        dayjs().set("date", day).isSame(now, "date") &&
                        "font-bold text-primary-500"
                    )}
                  >
                    {day}
                  </time>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <ITZY className="w-5" />

                    <Image
                      src="/images/kkengee.webp"
                      alt="예지"
                      width={20}
                      height={20}
                    />

                    <Image
                      src="/images/li-li.webp"
                      alt="리아"
                      width={20}
                      height={20}
                    />

                    <Image
                      src="/images/ryujji.webp"
                      alt="류진"
                      width={20}
                      height={20}
                    />

                    <Image
                      src="/images/ryeowoo.webp"
                      alt="채령"
                      width={20}
                      height={20}
                    />

                    <Image
                      src="/images/naong.webp"
                      alt="유나"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
