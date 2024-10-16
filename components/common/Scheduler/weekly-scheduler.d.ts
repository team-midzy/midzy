interface Schedule {
  readonly id: number;
  readonly dateTime: DateTimeString;
  readonly member: Member;
  readonly schedule: string;
}

interface WeeklySchedulerProps {
  readonly className?: string;
}

interface WeekInfo {
  month: number;
  week: number;
  weekDates: DateString[];
}

interface CountdownProps {
  readonly targetDate: DateTimeString;
  readonly onEnd: () => void;
}

interface DdayCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnd: boolean;
}
