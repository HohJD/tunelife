"use client";
import Coin from "@/components/3d/coin";
import { mono, satoshi } from "@/lib/fonts";
import clsx from "clsx";
import { Gift, MoveDownRight, MoveUpRight, Swords } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { StatsGrid } from "@/components/statsGrid";

const tabs = ["Recommended", "All", "Health", "Workout", "Relax", "Eat"];

const rewards = [
  {
    id: 1,
    category: "Health",
    img: "https://group.bphealthcare.com/wp-content/uploads/2022/09/cropped-logo-1.png",
    title: "Free Health Screening",
    description: "Get your free health screening now with BPLab",
    coins: 100,
  },
  {
    id: 2,
    category: "Health",
    img: "https://www.pathlab.com.my/sites/default/files/New-2019-Pathlab-Logo.jpg",
    title: "Free Health Screening",
    description: "Schedule your free health screening now with Pathlab",
    coins: 200,
  },
  {
    id: 3,
    category: "Health",
    img: "https://mmha.org.my/images/mmha-logo-text.png",
    title: "Mental Health Consultation",
    description:
      "Access to professional therapists or counselors for confidential discussions and support",
    coins: 150,
  },
  {
    id: 4,
    category: "Health",
    img: "https://caring2u.com/wp-content/uploads/2019/03/Header-CARiNG-Logo-01.jpg",
    title: "Supplements Discount",
    description:
      "Get up to 60% off for your favourite supplements at any Caring Pharmacy nearest to you",
    coins: 200,
  },
  {
    id: 5,
    category: "Health",
    img: "https://logos-download.com/wp-content/uploads/2017/01/Watsons_logo_logotype.png",
    title: "Supplements Discount",
    description:
      "Get up to 50% off for your favourite supplements at any Watsons Pharmacy nearest to you",
    coins: 300,
  },
  {
    id: 6,
    category: "Workout",
    img: "https://images.askmen.com/deals/health_deals/daily_deal_classpass_09042019.png",
    title: "Free 1x ClassPass",
    description:
      "Sign up to your favourite class with a 1x Free Pass at Class Pass app",
    coins: 600,
  },
  {
    id: 7,
    category: "Workout",
    img: "https://www.celebrityfitness.com.my/-/media/project/evolution-wellness/celebrity-fitness/south-east-asia/malaysia/misc/cf-logo.png",
    title: "Celebrity Fitness",
    description: "Get 1 day pass at any Celebrity Fitness near you",
    coins: 300,
  },
  {
    id: 8,
    category: "Workout",
    img: "https://static.wixstatic.com/media/b0e6a6_e2e246f1627c49748666e2f6886384b3~mv2.png/v1/fill/w_221,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Flyproject%20Logo-4.png",
    title: "FlyProject.co",
    description: "Get 2x cycle class sessions at any FlyProject near you",
    coins: 200,
  },
  {
    id: 9,
    category: "Workout",
    img: "https://images.squarespace-cdn.com/content/v1/5d4a428c7f8c8d000152060a/68df61b0-5915-426a-bfe3-4573dd58b4e3/symbol-r.png?format=1500w",
    title: "Tribe Boxing Studio",
    description: "Get 1x workout sessions at any Tribe Boxing Studio near you",
    coins: 250,
  },
  {
    id: 10,
    category: "Workout",
    img: "data:image/png;base64,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",
    title: "Anytime Fitness",
    description: "Get 1 day pass at any Anytime Fitness near you",
    coins: 300,
  },
  {
    id: 11,
    category: "Relax",
    img: "https://images.squarespace-cdn.com/content/v1/503264b0e4b0dbdecd41e3f6/1603822768742-6JQUUTWFQG6J1F72HD78/2020_yoga_studio_logo_2400x390%5B2%5D.png?format=1500w",
    title: "Yoga Class",
    description:
      "Access to 1x session of free yoga class at any time during the week",
    coins: 200,
  },
  {
    id: 12,
    category: "Relax",
    img: "https://www.thaiodyssey.com/assets/images/thai_logo.png",
    title: "Massage",
    description: "Get a 3 hours free massage at any Thai Odyssey near you",
    coins: 500,
  },
  {
    id: 13,
    category: "Relax",
    img: "https://www.ozmosis.com.my/wp-content/uploads/2022/09/cropped-Ozmosis-Wellness-Spa-Logo.png",
    title: "Spa Session",
    description: "Get a free spa session at any Ozmosis Wellness near you",
    coins: 200,
  },
  {
    id: 14,
    category: "Relax",
    img: "https://hairdoc.com.my/wp-content/uploads/2020/05/HairDoc-Logo.png",
    title: "Hair Treatment",
    description: "Get a free hair treatment session at any HairDoc near you",
    coins: 500,
  },
  {
    id: 15,
    category: "Relax",
    img: "https://loudspeakerktv.my/wp-content/uploads/2021/11/logo.png",
    title: "Karaoke Session",
    description:
      "Access to professional therapists or counselors for confidential discussions and support",
    coins: 500,
  },
  {
    id: 16,
    category: "Eat",
    img: "https://d2wu471yepgs9e.cloudfront.net/new-website/common/popmeals+purple+logo.svg",
    title: "PopMeals",
    description: "Get 2x Free meals from any PopMeals near you",
    coins: 400,
  },
  {
    id: 17,
    category: "Eat",
    img: "https://thefishbowl.my/wp-content/uploads/2023/04/Website-Header-Logo-with-Icon.png",
    title: "Fishbowl",
    description: "Get 1x Poke Bowl from any stores",
    coins: 200,
  },
  {
    id: 18,
    category: "Eat",
    img: "https://www.boostjuicebars.com.my/img/boost-juice-logo.png",
    title: "Boost Juice",
    description: "Get 3x cups of Boost Juice from any stores nearby",
    coins: 450,
  },
  {
    id: 19,
    category: "Eat",
    img: "https://juiceworks.com.my/webv2/wp-content/uploads/logo-new.png",
    title: "Juice Works",
    description: "Get 3x cups of Juice Works from any stores nearby",
    coins: 300,
  },
  {
    id: 20,
    category: "Eat",
    img: "https://www.bmsorganics.com/data/editor/BMS%20Organics%20Logo_2023_RGB-02.jpg",
    title: "Free Healthy Meal",
    description: "Get 1x free healthy meal at any BMS Organics nearby",
    coins: 500,
  },
  {
    id: 22,
    category: "Recommended",
    img: "https://www.pathlab.com.my/sites/default/files/New-2019-Pathlab-Logo.jpg",
    title: "Free Health Screening",
    description: "Schedule your free health screening now with Pathlab",
    coins: 200,
    match: 98,
  },
  {
    id: 21,
    category: "Recommended",
    img: "https://group.bphealthcare.com/wp-content/uploads/2022/09/cropped-logo-1.png",
    title: "Free Health Screening",
    description: "Get your free health screening now with BPLab",
    coins: 100,
    match: 93,
  },
  {
    id: 23,
    category: "Recommended",
    img: "https://mmha.org.my/images/mmha-logo-text.png",
    title: "Mental Health Consultation",
    description:
      "Access to professional therapists or counselors for confidential discussions and support",
    coins: 150,
    match: 91,
  },
  {
    id: 24,
    category: "Recommended",
    img: "https://caring2u.com/wp-content/uploads/2019/03/Header-CARiNG-Logo-01.jpg",
    title: "Supplements Discount",
    description:
      "Get up to 60% off for your favourite supplements at any Caring Pharmacy nearest to you",
    coins: 200,
    match: 89,
  },
  {
    id: 25,
    category: "Recommended",
    img: "https://logos-download.com/wp-content/uploads/2017/01/Watsons_logo_logotype.png",
    title: "Supplements Discount",
    description:
      "Get up to 50% off for your favourite supplements at any Watsons Pharmacy nearest to you",
    coins: 300,
    match: 84,
  },
];

export default function Page() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <main className={clsx(["pb-10 pt-5 layout", satoshi.className])}>
      <section className="w-full">
        <div className="flex items-center gap-3 mb-8">
          <Gift className="text-[#ff0000] w-5 h-5" />
          <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#ff0000]">Rewa</span>
            <span>rds</span>
          </p>
        </div>
        {/* Tab */}
        <div className="flex w-full gap-4 overflow-x-auto text-sm font-medium no_scrollbar">
          {tabs?.map((t, i) => (
            <button
              key={i}
              disabled={t === "All"}
              type="button"
              onClick={() => {
                setTab(t);
              }}
              className={clsx([
                "px-3 py-1 transition-all border-2 flex items-center gap-3 cursor-pointer rounded-2xl hover:border-primary-red hover:text-white hover:bg-primary-red/80",
                tab === t && "bg-primary-red text-white border-primary-red",
                t === "All" && "cursor-not-allowed opacity-40",
              ])}
            >
              <span>{t}</span>
              <span>
                {t === "All"
                  ? rewards?.length
                  : rewards?.filter((r) => r?.category === t)?.length}
              </span>
            </button>
          ))}
        </div>
        <div className="grid grid-rows-1 gap-4 mt-10">
          {rewards
            ?.filter((r) => (tab === "All" && true) || r?.category === tab)
            ?.map((r, i) => (
              <div
                key={i}
                className="flex items-center w-full gap-5 p-3 border rounded-lg hover:ring-2 hover:ring-red-300"
              >
                <Image
                  src={r?.img}
                  width={80}
                  height={80}
                  className="object-cover rounded-lg"
                  alt={r?.img}
                />
                <div className="py-2">
                  <h3 className="!font-bold">{r?.title}</h3>
                  <h6 className="font-medium text-justify line-clamp-2">
                    {r?.description}
                  </h6>
                  {r?.match && (
                    <div className="mt-2 text-xs font-medium">
                      Matching rate: {r?.match}%
                    </div>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    <p className="flex items-center gap-2 text-xs font-medium text-red-500">
                      <MoveDownRight className="w-3 h-3" /> {r?.coins}
                    </p>
                    <div className="w-6 h-6">
                      <Coin />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
