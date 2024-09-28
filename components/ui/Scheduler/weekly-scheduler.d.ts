interface ScheduleOfDate {
  readonly id: number;
  readonly member: Member;
  readonly time: TimeString;
  readonly schedule: string;
}

interface Schedule {
  readonly date: DateString;
  readonly schedules?: ScheduleOfDate[];
}

interface WeeklySchedulerProps {
  readonly className?: string;
}
