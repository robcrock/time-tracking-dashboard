import Image from "next/image";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TTimeFrame = {
  current: number;
  previous: number;
};

export type TActivityCardProps = {
  title: string;
  timeframe: TTimeFrame;
};

const generateBgColor = (title: string): string | undefined => {
  const colorMap: Record<string, string> = {
    Work: "bg-light-red-work",
    Play: "bg-soft-blue-play",
    Study: "bg-light-red-study",
    Exercise: "bg-lime-green-exercise",
    Social: "bg-violet-social",
    "Self Care": "bg-soft-orange-self-care",
  };

  return colorMap[title];
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
export const ActivityCard = ({ title, icon, timeframe, timeframes }: any) => {
  const bgColor = generateBgColor(title);
  const currLabel = generateCurrLabel(timeframes, timeframe);
  const prevLabel = generatePrevLabel(timeframes, timeframe);

  return (
    <div className="relative flex flex-col">
      <div
        className={cn(
          "relative h-[160px] overflow-hidden rounded-[15px] bg-light-red-work",
          bgColor,
        )}
      >
        <Image
          className="absolute -top-1 right-2"
          src={icon}
          alt={"Work Icon"}
        />
      </div>
      <Card className="relative z-10 -mt-[115px] h-[199px] rounded-[15px]">
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
    </div>
  );
};