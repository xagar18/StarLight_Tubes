import { useEffect, useState } from "react";

export default function ComingSoon() {
  // Setting launch date: Tomorrow 6:00 PM IST
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 1);
  launchDate.setHours(18, 0, 0, 0); // 6:00 PM

  const [timeLeft, setTimeLeft] = useState(launchDate.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = launchDate.getTime() - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Coming Soon
        </h1>

        <p className="mt-4 text-gray-400">
          We go live tomorrow at{" "}
          <span className="text-white font-medium">6:00 PM</span>
        </p>

        {/* Countdown */}
        <div className="mt-10 flex justify-center gap-6">
          <TimeBox label="Hours" value={hours} />
          <TimeBox label="Minutes" value={minutes} />
          <TimeBox label="Seconds" value={seconds} />
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Stay tuned. Something exciting is coming.
        </p>
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl px-6 py-4 w-24">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}
