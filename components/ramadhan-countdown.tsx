"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useRamadhanCountdown } from "@/hooks/useRamadhanCountdown";

export function RamadhanCountdown() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const timeRemaining = useRamadhanCountdown(currentTime);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!timeRemaining) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Ramadhan Mubarak</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Ramadhan Telah Tiba. Semoga Bulan Suci ini Membawa Kedamaian dan
            Berkah
          </p>
        </CardContent>
      </Card>
    );
  }

  const { targetDate, days, hours, minutes, seconds } = timeRemaining;

  const formatDate = (date: Date) => {
    return date.toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          Hitung Mundur Menuju Ramadhan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">Perkiraan Awal Ramadhan:</p>
          <p className="text-md">{formatDate(targetDate)}</p>
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { label: "Hari", value: days },
            { label: "Jam", value: hours },
            { label: "Menit", value: minutes },
            { label: "Detik", value: seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="text-4xl font-bold">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm uppercase">{label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
