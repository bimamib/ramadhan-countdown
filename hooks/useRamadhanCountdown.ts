import { calcualteTimeUntilRamadhan } from "@/utils/calculateTimeUntilRamadhan";

export function useRamadhanCountdown(currentDate: Date) {
  return calcualteTimeUntilRamadhan(currentDate);
}
