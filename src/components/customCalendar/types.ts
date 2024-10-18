type DateRange = [string, string] | null;

export type CalendarComponentProps = {
  onChange: (dateRange: DateRange, weekends: string[]) => void;
  predefinedRanges?: { label: string; range: DateRange }[];
}
