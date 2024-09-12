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
      <div className="relative font-[Neue] flex items-center justify-center">
        <div className="absolute flex items-center justify-center md:space-x-8 rounded-full bg-[#0e2930] px-8 py-4 text-white">
          <div>
            <p className="text-left text-lg uppercase">
              See you in
            </p>
            <hr className="w-28" />
          </div>
          <div className="flex space-x-4 text-center">
            <div>
              <p className="text-4xl font-bold font-[Thunder]">{timeLeft.days}</p>
              <p className="text-xs">DAYS</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-[Thunder]">{timeLeft.hours}</p>
              <p className="text-xs">HOURS</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-[Thunder]">{timeLeft.minutes}</p>
              <p className="text-xs">MINUTES</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-[Thunder]">{timeLeft.seconds}</p>
              <p className="text-xs">SECONDS</p>
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






