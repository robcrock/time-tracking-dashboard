import {
  ActivityCard,
  TActivityCardProps,
} from "@/components/fem-activity-card";

type TTimeFrame = {
  current: number;
  previous: number;
};

type TActivity = {
  title: string;
  timeframes: {
    daily: TTimeFrame;
    weekly: TTimeFrame;
    monthly: TTimeFrame;
  };
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
      Report for Jeremy Robson Daily Weekly Monthly
      {data.map((activity, index) => {
        const title = activity.title;
        const timeframes = activity.timeframes;
        const timeframe = "monthly";

        return (
          <ActivityCard
            key={index}
            title={title}
            timeframes={timeframes}
            timeframe={timeframe}
          />
        );
      })}
    </main>
  );
}
