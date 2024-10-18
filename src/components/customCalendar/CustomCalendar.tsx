import useDateController from "./useCalendarManager";
import buildCalendarGrid from "../../utils/buildCalendarGrid";
import { CalendarComponentProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CustomCalendar = ({ onChange, predefinedRanges = [] }: CalendarComponentProps) => {
  const {
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
  } = useDateController(onChange);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="calendar flex flex-col w-[35%] rounded-xl p-5 bg-primary-10">
        <div className="flex justify-between items-center mb-5">
          <button className="h-9 w-9 bg-primary-20 border-none text-white p-1 rounded-full text-base cursor-pointer transition duration-300 hover:bg-primary-40" onClick={() => setActiveYear(activeYear - 1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="font-bold mx-3 akaya-kanadaka-regular text-3xl text-primary-30">{activeYear}</span>
          <button className="h-9 w-9 bg-primary-20 border-none text-white p-1 rounded-full text-base cursor-pointer transition duration-300 hover:bg-primary-40" onClick={() => setActiveYear(activeYear + 1)}>
          <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button className="h-9 w-9 bg-primary-20 border-none text-white p-1 rounded-full text-base cursor-pointer transition duration-300 hover:bg-primary-40" onClick={() => setActiveMonth((activeMonth + 11) % 12)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="font-bold mx-3 akaya-kanadaka-regular text-3xl text-primary-30">
            {new Date(activeYear, activeMonth).toLocaleString("default", {
              month: "long",
            })}
          </span>
          <button className="h-9 w-9 bg-primary-20 border-none text-white p-1 rounded-full text-base cursor-pointer transition duration-300 hover:bg-primary-40" onClick={() => setActiveMonth((activeMonth + 1) % 12)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="grid grid-cols-7 mb-2.5 px-1.5">
          <div className="flex items-center justify-center font-bold h-10 m-2 rounded-md text-sm uppercase bg-primary-50 border border-primary-60 text-primary-70 cursor-not-allowed">Sun</div>
          <div className="flex items-center justify-center font-bold h-10 text-primary-80 bg-primary-20 m-2 rounded-md text-sm uppercase">Mon</div>
          <div className="flex items-center justify-center font-bold h-10 text-primary-80 bg-primary-20 m-2 rounded-md text-sm uppercase">Tue</div>
          <div className="flex items-center justify-center font-bold h-10 text-primary-80 bg-primary-20 m-2 rounded-md text-sm uppercase">Wed</div>
          <div className="flex items-center justify-center font-bold h-10 text-primary-80 bg-primary-20 m-2 rounded-md text-sm uppercase">Thu</div>
          <div className="flex items-center justify-center font-bold h-10 text-primary-80 bg-primary-20 m-2 rounded-md text-sm uppercase">Fri</div>
          <div className="flex items-center justify-center font-bold h-10 m-2 rounded-md text-sm uppercase bg-primary-50 border border-primary-60 text-primary-70 cursor-not-allowed">Sat</div>
        </div>
        <div className="calendar-grid grid grid-cols-7 gap-2 px-1.5">
          {buildCalendarGrid({
            activeYear,
            activeMonth,
            selectedStartDate,
            selectedEndDate,
            formatCalendarDate,
            checkWeekday,
            handleCalendarDateClick,
          })}
        </div>
        <div className="flex flex-row mt-5 gap-2.5">
          {predefinedRanges.map((range, idx) => (
            <button
            className="bg-primary-20 border-none text-black py-2 px-4 rounded-lg text-base flex-grow cursor-pointer transition-all duration-300 transform hover:bg-primary-90 hover:scale-105"
              key={idx}
              onClick={() => {
                if (range.range && range.range[0] && range.range[1]) {
                  setSelectedStartDate(new Date(range.range[0]));
                  setSelectedEndDate(new Date(range.range[1]));
                } else toast.error(`Invalid range provided: ${range}`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                });
              }}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default CustomCalendar;
