import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import elipsis from "@/../public/images/icon-ellipsis.svg";

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
    <div className="relative flex flex-col md:col-span-1">
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
      <Card className="relative z-10 -mt-[115px] flex h-[199px] flex-col justify-between rounded-[15px] border-none bg-dark-blue text-white">
        <CardHeader className="align-center -mr-2 -mt-[6px] flex h-[22px] flex-row justify-between">
          <CardTitle className="mt-[6px] w-max font-medium">{title}</CardTitle>
          <Button
            className="max-h-[22px] border-none bg-inherit"
            variant="outline"
            size="icon"
          >
            <Image
              className="fill-desaturated-blue"
              src={elipsis}
              alt={"Ellipsis Icon"}
            />
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="text-[56px] font-extralight leading-[64px]">
            {currLabel}
          </p>
          <p className="font-light text-pale-blue">{prevLabel}</p>
        </CardContent>
      </Card>
    </div>
  );
};
