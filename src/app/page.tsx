import { CardGrid, iconMap } from "@/components/fem-card-grid";

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

export default async function Home() {
  const getData = async (): Promise<TActivity[]> => {
    const res = await fetch(`${process.env.NEXT_URL}/api/`);
    return res.json();
  };

  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:mt-[253px] md:p-24">
      {/* Card - Personal */}
      <CardGrid data={data} />
    </main>
  );
}
