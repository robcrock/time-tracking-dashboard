import { ActivityCard } from "@/components/fem-activity-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import icon_work from "@/../public/images/icon-work.svg";
import icon_play from "@/../public/images/icon-play.svg";
import icon_study from "@/../public/images/icon-study.svg";
import icon_exercise from "@/../public/images/icon-exercise.svg";
import icon_social from "@/../public/images/icon-social.svg";
import icon_self_care from "@/../public/images/icon-self-care.svg";

type TTimeFrame = {
  current: number;
  previous: number;
};

type TActivity = {
  title: string;
  icon: keyof typeof iconMap;
  timeframes: {
    daily: TTimeFrame;
    weekly: TTimeFrame;
    monthly: TTimeFrame;
  };
};

const iconMap = {
  icon_work: icon_work,
  icon_play: icon_play,
  icon_study: icon_study,
  icon_exercise: icon_exercise,
  icon_social: icon_social,
  icon_self_care: icon_self_care,
};

export default async function Home() {
  const getData = async (): Promise<TActivity[]> => {
    const res = await fetch("http://localhost:3000/api/");
    return res.json();
  };

  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Card - Personal */}
      <div className="grid grid-cols-4 gap-[30px]">
        <Card>
          <CardHeader>
            <p> Report for</p>
            <CardTitle>Jeremy Robson</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </CardContent>
        </Card>
        <div className="col-span-3 grid grid-cols-subgrid gap-[30px]">
          {data.map((activity, index) => {
            const title = activity?.title;
            const icon = activity?.icon;
            const timeframes = activity?.timeframes;
            const timeframe = "monthly";

            console.log("activity", activity);
            return (
              <ActivityCard
                key={index}
                title={title}
                icon={iconMap[icon]}
                timeframes={timeframes}
                timeframe={timeframe}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
