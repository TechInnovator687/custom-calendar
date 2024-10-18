import { useEffect, useState } from "react";

type CalendarRange = [string, string] | null;

const useDateController = (
  onDateRangeChange: (calendarRange: CalendarRange, weekendDates: string[]) => void
) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());

  const checkWeekday = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  const formatCalendarDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleCalendarDateClick = (date: Date) => {
    if (!checkWeekday(date)) return;

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate) {
      if (date >= selectedStartDate) {
        setSelectedEndDate(date);
      } else {
        setSelectedStartDate(date);
      }
    }
  };

  const getWeekendDatesInRange = (start: Date, end: Date): string[] => {
    const weekendDates: string[] = [];
    let current = new Date(start);

    while (current <= end) {
      if (!checkWeekday(current)) {
        weekendDates.push(formatCalendarDate(current));
      }
      current.setDate(current.getDate() + 1);
    }

    return weekendDates;
  };

  useEffect(() => {
    if (selectedStartDate && selectedEndDate) {
      const formattedStart = formatCalendarDate(selectedStartDate);
      const formattedEnd = formatCalendarDate(selectedEndDate);
      const weekendDates = getWeekendDatesInRange(selectedStartDate, selectedEndDate);

      onDateRangeChange([formattedStart, formattedEnd], weekendDates);
    }
  }, [selectedStartDate, selectedEndDate, onDateRangeChange]);

  return {
    activeMonth,
    setActiveMonth,
    activeYear,
    setActiveYear,
    selectedStartDate,
    setSelectedStartDate,
    selectedEndDate,
    setSelectedEndDate,
    formatCalendarDate,
    checkWeekday,
    handleCalendarDateClick,
  };
};

export default useDateController;
