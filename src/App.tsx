import { Bounce, toast, ToastContainer } from 'react-toastify';
import CustomCalendar from './components/customCalendar/CustomCalendar';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const calculatePreviousDays = (days: number): [string, string] => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    let count = 0;
    
    while (count < days) {
      startDate.setDate(startDate.getDate() - 1);
      count++;
    }
    
    const reformatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    return [reformatDate(startDate), reformatDate(endDate)];
  };

  const predefinedRanges = [
    { label: "Previous 7 Days", range: calculatePreviousDays(7) },
    { label: "Previous 30 Days", range: calculatePreviousDays(30) }
  ];

  const handleDateSelectionChange = (selectedRange: [string, string] | null, weekendDays: string[]) => {
    if (selectedRange) { 
      toast.info(`Selected range: ${selectedRange}`, {
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
      toast.info(`Weekends : ${weekendDays.length > 0 ? weekendDays.join(', ') : 'No weekends in this range'}`, {
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
    } else {
      toast.error(`No date range selected`, {
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
    }
  };

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] overflow-hidden">
      <h1 className="text-sky-600 akaya-kanadaka-regular text-center mt-9 m-6 font-extrabold text-4xl tracking-wider transition-all duration-500 ease-in-out hover:scale-110 animate-fadeIn">
        A Modern, Intuitive Calendar for Date Range Selection
      </h1>
      <CustomCalendar
        onChange={handleDateSelectionChange}
        predefinedRanges={predefinedRanges}
      />
      <ToastContainer/>
    </div>
  );
};

export default App
