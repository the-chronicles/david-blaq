import { useState, useEffect } from "react";

function CountdownTimer() {
  const targetDate = new Date("2024-09-22T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute flex items-center justify-center md:space-x-8 rounded-full bg-[#0e2930] px-8 py-4 text-white">
          <div>
            <p className="text-left text-lg font-semibold uppercase">
              See you in
            </p>
            <hr className="w-28" />
          </div>
          <div className="flex space-x-4 text-center">
            <div>
              <p className="text-3xl font-bold">{timeLeft.days}</p>
              <p className="text-sm">DAYS</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.hours}</p>
              <p className="text-sm">HOURS</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.minutes}</p>
              <p className="text-sm">MINUTES</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.seconds}</p>
              <p className="text-sm">SECONDS</p>
            </div>
          </div>
          <a
            href="https://bit.ly/3zbql94"
            target="_blank"
            className="rounded-full bg-[#2f6e00] px-4 py-2  text-white"
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  );
}

export default CountdownTimer;






// import { useState, useEffect } from "react";

// function CountdownTimer() {
//   const targetDate = new Date("2024-09-22T00:00:00").getTime();

//   const calculateTimeLeft = () => {
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor(
//           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//         ),
//         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((difference % (1000 * 60)) / 1000),
//       };
//     } else {
//       timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <div className="relative flex items-center justify-center">
//         <div className="absolute flex items-center justify-center space-x-0 sm:space-x-8 rounded-full bg-[#0e2930] px-2 sm:px-4 sm:py-4 text-white ">
//           <div className="flex items-center justify-center space-y-2 sm:space-y-0 space-x-2 sm:space-x-4">
//             <div>
//               <p className="text-left text-[10px] sm:text-lg uppercase sm:text-left">
//                 See you in
//               </p>
//               <hr className="w-16 sm:w-28" />
//             </div>
//             <div className="flex space-x-4 text-center sm:space-x-8">
//               <div>
//                 <p className="text-[16px] sm:text-3xl font-bold">{timeLeft.days}</p>
//                 <p className="text-[10px] sm:text-sm">DAYS</p>
//               </div>
//               <div>
//                 <p className="text-[16px] sm:text-3xl font-bold">{timeLeft.hours}</p>
//                 <p className="text-[10px] sm:text-sm">HOURS</p>
//               </div>
//               <div>
//                 <p className="text-[16px] sm:text-3xl font-bold">{timeLeft.minutes}</p>
//                 <p className="text-[10px] sm:text-sm">MINUTES</p>
//               </div>
//               <div>
//                 <p className="text-[16px] sm:text-3xl font-bold">{timeLeft.seconds}</p>
//                 <p className="text-[10px] sm:text-sm">SECONDS</p>
//               </div>
//             </div>
//           </div>
//           <a
//             href="(link unavailable)"
//             target="_blank"
//             className="rounded-full bg-[#2f6e00] px-2 py-2 sm:px-4 sm:py-4 text-xs sm:text-2xl text-white"
//           >
//             Register Now
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }


// export default CountdownTimer;
