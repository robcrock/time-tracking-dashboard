"use client";
import React, { useState } from "react";
import { ProfileCard } from "./fem-profile-card";
import { ActivityCard } from "./fem-activity-card";
import icon_work from "@/../public/images/icon-work.svg";
import icon_play from "@/../public/images/icon-play.svg";
import icon_study from "@/../public/images/icon-study.svg";
import icon_exercise from "@/../public/images/icon-exercise.svg";
import icon_social from "@/../public/images/icon-social.svg";
import icon_self_care from "@/../public/images/icon-self-care.svg";

export const iconMap = {
  icon_work: icon_work,
  icon_play: icon_play,
  icon_study: icon_study,
  icon_exercise: icon_exercise,
  icon_social: icon_social,
  icon_self_care: icon_self_care,
};

export const CardGrid = ({ data }: { data: any }) => {
  const [activeTimeframe, setActiveTimeframe] = useState("daily");

  const handleSelection = (activeTimeframe: string) =>
    setActiveTimeframe(activeTimeframe);

  return (
    <div className="grid grid-cols-4 gap-[30px]">
      <ProfileCard
        activeTimeframe={activeTimeframe}
        handleSelection={handleSelection}
      />
      <div className="col-span-3 grid grid-cols-subgrid gap-[30px]">
        {data.map((activity: any, index: number) => {
          const title = activity?.title;
          const icon: keyof typeof iconMap = activity?.icon;
          const timeframes = activity?.timeframes;
          const timeframe = "monthly";

          return (
            <ActivityCard
              key={index}
              title={title}
              icon={iconMap[icon]}
              timeframes={timeframes}
              timeframe={activeTimeframe}
              handleSelection={handleSelection}
            />
          );
        })}
      </div>
    </div>
  );
};
