export function calcualteTimeUntilRamadhan(currentDate: Date): {
  targetDate: Date;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null {
  const ramadhanStart = new Date("2025-03-01T00:00:00+07:00");

  if (currentDate >= ramadhanStart) {
    return null;
  }

  const timeRemaining = ramadhanStart.getTime() - currentDate.getTime();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { targetDate: ramadhanStart, days, hours, minutes, seconds };
}
