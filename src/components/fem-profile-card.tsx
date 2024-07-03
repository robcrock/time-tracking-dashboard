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
    <Card className="relative flex w-[255px] flex-col rounded-[15px] border-none bg-dark-blue text-white">
      <CardHeader className="z-10 flex min-h-[354px] flex-col gap-[43px] rounded-[15px] bg-blue px-[37px] py-[32px]">
        <Avatar className="h-[78px] w-[78px] border-2 border-white">
          <AvatarImage src="https://raw.githubusercontent.com/robcrock/time-tracking-dashboard/main/public/images/image-jeremy.png" />
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-light text-pale-blue">Report for</p>
          <CardTitle className="w-full text-wrap text-[40px] font-extralight leading-tight">
            Jeremy Robson
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="absolute flex h-full w-full flex-col items-start justify-end rounded-[15px] bg-dark-blue text-left font-light text-white">
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
