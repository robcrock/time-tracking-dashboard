import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TTimeFrame = {
  current: number;
  previous: number;
};

export type TActivityCardProps = {
  title: string;
  timeframe: TTimeFrame;
};

const generateCurrLabel = (
  timeframes: any,
  timeframe: "daily" | "weekly" | "monthly",
): string | undefined => {
  const suffix = timeframes[timeframe].current === 1 ? "hr" : "hrs";
  return `${timeframes[timeframe].current}${suffix}`;
};

const generatePrevLabel = (
  timeframes: any,
  timeframe: "daily" | "weekly" | "monthly",
): string | undefined => {
  let prefix = "";
  if (timeframe === "daily") {
    prefix = "Yesterday -";
  }
  if (timeframe === "weekly") {
    prefix = `Last week -`;
  }
  if (timeframe === "monthly") {
    prefix = `Last month -`;
  }

  return `${prefix} ${timeframes[timeframe].previous}`;
};
export const ActivityCard = ({ title, timeframe, timeframes }: any) => {
  const currLabel = generateCurrLabel(timeframes, timeframe);
  const prevLabel = generatePrevLabel(timeframes, timeframe);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p>{currLabel}</p>
        <p>{prevLabel}</p>
      </CardContent>
    </Card>
  );
};
