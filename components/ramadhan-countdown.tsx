"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useRamadhanCountdown } from "@/hooks/useRamadhanCountdown";
import { ThemeToggle } from "./theme.toggle";
import { CountdownSkeleton } from "./countdown-skeleton";

export function RamadhanCountdown() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const timeRemaining = useRamadhanCountdown(currentTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1000); // Menampilkan skeleton selama 1 detik untuk demonstrasi

    const intervalTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalTimer);
    };
  }, []);

  if (!mounted) {
    return <CountdownSkeleton />;
  }

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

  const formatFooterDate = (date: Date) => {
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

  if (!timeRemaining) {
    return (
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-center flex-grow">
            Ramadhan Mubarak!
          </CardTitle>
          <ThemeToggle />
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Ramadhan Telah Tiba. Semoga Bulan Suci ini Membawa Kedamaian dan
            Berkah.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center items-center text-sm text-muted-foreground">
          <p>&copy; Bimss, {formatFooterDate(currentTime)}</p>
        </CardFooter>
      </Card>
    );
  }

  const { targetDate, days, hours, minutes, seconds } = timeRemaining;

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <CardTitle className="text-center sm:text-left text-xl sm:text-2xl flex-grow">
          Hitung Mundur Menuju Ramadhan
        </CardTitle>
        <ThemeToggle />
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <p className="text-lg font-semibold mb-1">Perkiraan awal Ramadhan:</p>
          <p className="text-md">{formatDate(targetDate)}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
          {[
            { label: "Hari", value: days },
            { label: "Jam", value: hours },
            { label: "Menit", value: minutes },
            { label: "Detik", value: seconds },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-2 bg-secondary rounded-lg h-24 sm:h-28"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold truncate w-full">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center text-sm text-muted-foreground">
        <p>&copy; Bimss, {formatFooterDate(currentTime)}</p>
      </CardFooter>
    </Card>
  );
}
