type CalendarProps = {
  activeYear: number;
  activeMonth: number;
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  formatCalendarDate: (date: Date) => string;
  checkWeekday: (date: Date) => boolean;
  handleCalendarDateClick: (date: Date) => void;
};

const buildCalendarGrid = ({
  activeYear,
  activeMonth,
  selectedStartDate,
  selectedEndDate,
  formatCalendarDate,
  checkWeekday,
  handleCalendarDateClick,
}: CalendarProps) => {
  const firstDayOfMonth = new Date(activeYear, activeMonth, 1);
  const daysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();
  const startDay = firstDayOfMonth.getDay();
  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="flex items-center justify-center h-11 rounded-lg cursor-pointer text-sm transition-all duration-300 invisible" />);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(activeYear, activeMonth, i);
    const isSelected =
      (selectedStartDate && formatCalendarDate(date) === formatCalendarDate(selectedStartDate)) ||
      (selectedEndDate && formatCalendarDate(date) === formatCalendarDate(selectedEndDate));

    const isWithinRange =
      selectedStartDate &&
      selectedEndDate &&
      date >= selectedStartDate &&
      date <= selectedEndDate;

    const className = `flex items-center justify-center h-11 rounded-lg cursor-pointer text-sm transition-all duration-300 ${checkWeekday(date) ? "bg-blue-100 border border-blue-300 hover:bg-blue-200 hover:transform hover:scale-105" : "bg-primary-50 border border-primary-60 text-primary-70 cursor-not-allowed"} ${isSelected ? "bg-blue-600 text-red-700 border-blue-800 animate-pulse" : ""} ${
      isWithinRange && checkWeekday(date) ? "bg-blue-200 border border-blue-300" : ""
    }`;

    days.push(
      <div
        key={i}
        className={className}
        onClick={() => handleCalendarDateClick(date)}
      >
        {i}
      </div>
    );
  }

  return days;
};

export default buildCalendarGrid;
