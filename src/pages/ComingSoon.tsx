import { useEffect, useMemo, useState } from "react";

export default function ComingSoon() {
  const launchDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(18, 0, 0, 0); // 6:00 PM
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(launchDate.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = launchDate.getTime() - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const formatTime = (ms: number) => {
    const total = Math.floor(ms / 1000);
    return {
      hours: String(Math.floor(total / 3600)).padStart(2, "0"),
      minutes: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
      seconds: String(total % 60).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black px-4 text-white">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          Coming Soon
        </h1>

        <p className="mt-3 text-sm sm:text-base text-gray-400">
          Launching tomorrow at <span className="text-white">6:00 PM</span>
        </p>

        {/* Countdown */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
          <TimeBox label="Hours" value={hours} />
          <TimeBox label="Minutes" value={minutes} />
          <TimeBox label="Seconds" value={seconds} />
        </div>

        <p className="mt-8 text-xs sm:text-sm text-gray-500">
          Stay tuned. We’re almost live.
        </p>
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl py-4 sm:py-5 flex flex-col items-center">
      <span className="text-2xl sm:text-3xl font-bold">{value}</span>
      <span className="mt-1 text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
