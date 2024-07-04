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
    <main className="md:p-none flex min-h-screen items-center justify-center p-6">
      {/* Card - Personal */}
      <CardGrid data={data} />
    </main>
  );
}
