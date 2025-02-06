import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CountdownSkeleton() {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <Skeleton className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700" />
        <Skeleton className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700" />
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <Skeleton className="h-6 w-2/3 mx-auto mb-2 bg-gray-300 dark:bg-gray-700" />
          <Skeleton className="h-4 w-1/2 mx-auto bg-gray-300 dark:bg-gray-700" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 bg-secondary rounded-lg h-24 sm:h-28"
            >
              <Skeleton className="h-12 w-20 mb-2 bg-gray-300 dark:bg-gray-700" />
              <Skeleton className="h-4 w-16 bg-gray-300 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Skeleton className="h-4 w-48 bg-gray-300 dark:bg-gray-700" />
      </CardFooter>
    </Card>
  );
}
