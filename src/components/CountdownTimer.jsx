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
      <div className="relative flex md:flex-row flex-col md:mb-0 mb-16 items-center justify-center font-[Neue]">
        <div className=" md:absolute  flex items-center justify-center rounded-full bg-[#0e2930] px-4 py-4 text-white  md:space-x-8 md:px-8 md:py-4">
          <div className="flex items-center space-x-11 md:space-x-8">
            <div>
              <p className="text-left text-xs uppercase md:text-lg">
                See you in
              </p>
              <hr className="w-20 md:w-28" />
            </div>
            <div className="flex items-center space-x-4 text-center">
              <div>
                <p className="font-[Thunder] text-2xl font-bold md:text-4xl">
                  {timeLeft.days}
                </p>
                <p className="text-[8px] md:text-xs">DAYS</p>
              </div>
              <div>
                <p className="font-[Thunder] text-2xl font-bold md:text-4xl">
                  {timeLeft.hours}
                </p>
                <p className="text-[8px] md:text-xs">HOURS</p>
              </div>
              <div>
                <p className="font-[Thunder] text-2xl font-bold md:text-4xl">
                  {timeLeft.minutes}
                </p>
                <p className="text-[8px] md:text-xs">MINUTES</p>
              </div>
              <div>
                <p className="font-[Thunder] text-2xl font-bold md:text-4xl">
                  {timeLeft.seconds}
                </p>
                <p className="text-[8px] md:text-xs">SECONDS</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex">
            <a
              href="https://bit.ly/3zbql94"
              className="rounded-full bg-[#2f6e00] px-3 py-2 text-xs text-white md:px-5 md:py-3 md:text-lg"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="block md:hidden mt-10">
          <a
            href="https://bit.ly/3zbql94"
            target="_blank"
            className="mt-6 rounded-full border-2 border-[#2f6e00] px-28 py-8 text-[#2f6e00]"
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  );
}

export default CountdownTimer;
