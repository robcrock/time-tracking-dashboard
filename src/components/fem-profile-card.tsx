import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const ProfileCard = ({
  activeTimeframe,
  handleSelection,
}: {
  activeTimeframe: string;
  handleSelection: (activeTimeframe: string) => void;
}) => {
  return (
    <Card className="relative flex h-[203px] w-full flex-col rounded-[15px] border-none bg-dark-blue text-white md:w-[255px]">
      <CardHeader className="z-10 flex h-[133px] flex-row items-center gap-5 rounded-[15px] bg-blue px-8 py-[32px] md:min-h-[354px] md:flex-col md:gap-[43px] md:px-[37px]">
        <Avatar className="h-[78px] w-[78px] border-2 border-white">
          <AvatarImage src="https://raw.githubusercontent.com/robcrock/time-tracking-dashboard/main/public/images/image-jeremy.png" />
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-light text-pale-blue">Report for</p>
          <CardTitle className="w-full text-wrap text-[24px] font-extralight leading-tight md:text-[40px]">
            Jeremy Robson
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="absolute flex h-full w-full flex-row items-end justify-between rounded-[15px] bg-dark-blue p-4 text-left font-light text-white md:flex-col md:items-start md:justify-end md:p-6">
        <Button
          className={cn(
            "bg-inherit text-[18px] font-light",
            activeTimeframe === "daily" ? "text-white" : "text-pale-blue",
          )}
          variant="link"
          onClick={() => handleSelection("daily")}
        >
          Daily
        </Button>
        <Button
          className={cn(
            "bg-inherit text-[18px] font-light",
            activeTimeframe === "weekly" ? "text-white" : "text-pale-blue",
          )}
          variant="link"
          onClick={() => handleSelection("weekly")}
        >
          Weekly
        </Button>
        <Button
          className={cn(
            "bg-inherit text-[18px] font-light",
            activeTimeframe === "monthly" ? "text-white" : "text-pale-blue",
          )}
          variant="link"
          onClick={() => handleSelection("monthly")}
        >
          Monthly
        </Button>
      </CardContent>
    </Card>
  );
};
