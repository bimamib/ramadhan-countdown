export function calcualteTimeUntilRamadhan(currentDate: Date): {
  targetDate: Date;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null {
  const ramadhanStart = new Date("2026-02-19T00:04:42+07:00");

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
