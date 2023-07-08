"use client";
import { StatsRingCard } from "@/components/statsRingCard";
import StatsRingCardProps from "@/model/statsRingCardProps";
import React, { useEffect, useState } from "react";
import {
  SegmentedControl,
  Group,
  Center,
  Box,
  Modal,
  Drawer,
} from "@mantine/core";
import {
  IconLock,
  IconMotorbike,
  IconHomeHeart,
  IconPlaneTilt,
  IconStethoscope,
  IconCar,
  IconActivity,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import { mono } from "@/lib/fonts";

function SegmentedToggle({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (tab: string) => void;
}) {
  return (
    <Group position="center" my="xl" className="w-full">
      <SegmentedControl
        className="w-full"
        value={tab}
        onChange={(value: "profile" | "my-tune") => setTab(value)}
        data={[
          {
            value: "profile",
            label: (
              <Center>
                {/* <IconSun size="1rem" stroke={1.5} /> */}
                <Box ml={10}>Profile</Box>
              </Center>
            ),
          },
          {
            value: "my-tune",
            label: (
              <Center>
                {/* <IconMoon size="1rem" stroke={1.5} /> */}
                <Box ml={10}>My Tune</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}

function Profile() {
  const stats: StatsRingCardProps[] = [
    {
      title: "Health Screening",
      balance: 300,
      total: 500,
      stats: [
        {
          value: 200,
          label: "Utilization",
        },
        {
          value: 500,
          label: "Total Limit",
        },
      ],
    },
    {
      title: "Inpatient Medical",
      balance: 19200,
      total: 20000,
      stats: [
        {
          value: 800,
          label: "Utilization",
        },
        {
          value: 20000,
          label: "Total Limit",
        },
      ],
    },
    {
      title: "Outpatient Medical",
      balance: 900,
      total: 1000,
      stats: [
        {
          value: 100,
          label: "Utilization",
        },
        {
          value: 1000,
          label: "Total Limit",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-center m-2">
        <div className="bg-[url('/images/medcard1.jpg')] bg-opacity-0 bg-cover block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-tune:bg-gray-800 my-tune:border-gray-700 my-tune:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-tune:text-white">
            Medical Card
          </h5>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            DC Logistics Sdn Bhd.
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Name: Ali Imran
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Member ID: 123456789
          </p>
          <div className="flex justify-end">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/logo.png"
              alt="Article"
              className="w-10 h-10 mb-4 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="m-4">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-tune:text-white">
          Remaining Coverage
        </h4>
        {stats.map((item, index) => (
          <div key={index} className="mb-2">
            <StatsRingCard key={index} {...item} />
          </div>
        ))}
      </div>
    </>
  );
}

function MyTune() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  });
  // const [opened, { open, close }] = useDisclosure(false);
  // const [clickedInsurance, setClickedInsurance] = useState<string>("");

  // const handleClick = () => {
  //   setClickedInsurance("Health Screening");
  //   open();
  // };

  return (
    <>
      <div className="flex m-4 mb-6">
        <img
          className="object-cover w-20 h-20 mr-6 rounded-full"
          src="./images/1.jpg"
          alt="Rounded avatar"
        />
        <div>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            DC Logistics Sdn Bhd.
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Name: Ali Imran
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Member ID: 123456789
          </p>
        </div>
      </div>
      <div className="m-4">
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 my-tune:text-white">
          My Tune Protection
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {hydrated && (
            <>
              <Dialog>
                <DialogTrigger>
                  <div
                    className={clsx(
                      mono.className,
                      "flex flex-col items-center"
                    )}
                  >
                    <button className="p-2 mb-2 border rounded-2xl">
                      <IconStethoscope className="w-10 h-10 text-red-500" />
                    </button>
                    <p className="ml-2 text-center">PRO-Health Medical</p>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex w-full p-3 mb-2 border">
                    <IconMotorbike className="w-10 h-10 m-3 text-red-500" />
                    <div>
                      <p>Home Easy</p>
                      <p>10x Tune Coin earn rate</p>
                    </div>
                  </div>
                  <p>
                    When you have higher earn rate, you can earn more coins
                    after completing a quest. If a quest rewards user with 1
                    coin, you can earn 10 coins!
                  </p>
                </DialogContent>
              </Dialog>

              <div className="flex flex-col items-center">
                <button className="p-2 mb-2 border rounded-2xl bg-slate-200">
                  <IconLock className="w-10 h-10 text-gray-600" />
                </button>
                <p className="ml-2 text-center">Bike Easy</p>
              </div>
              {/* <div className="flex flex-col items-center">
            <button className="p-2 mb-2 border rounded-2xl bg-slate-200">
              <IconMotorbike className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Bike Easy</p>
          </div> */}
              <div className="flex flex-col items-center">
                <button className="p-2 mb-2 border rounded-2xl bg-slate-200">
                  <IconLock className="w-10 h-10 text-gray-600" />
                </button>
                <p className="ml-2 text-center">Critical Safe+</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="p-2 mb-2 border rounded-2xl bg-slate-200">
                  <IconLock className="w-10 h-10 text-gray-600" />
                </button>
                <p className="ml-2 text-center">Home Easy</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="p-2 mb-2 border rounded-2xl bg-slate-200">
                  <IconLock className="w-10 h-10 text-gray-600" />
                </button>
                <p className="ml-2 text-center">COVID Travel Pass+</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="p-2 mb-2 border rounded-2xl bg-slate-200">
                  <IconLock className="w-10 h-10 text-gray-600" />
                </button>
                <p className="ml-2 text-center">Motor</p>
              </div>
            </>
          )}
          {/* <div className="flex flex-col items-center">
            <button className="p-2 mb-2 border rounded-2xl bg-slate-200">
              <IconMotorbike className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Bike Easy</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 mb-2 border rounded-2xl">
              <IconActivity className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">Critical Safe+</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 mb-2 border rounded-2xl">
              <IconHomeHeart className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">Home Easy</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 mb-2 border rounded-2xl">
              <IconPlaneTilt className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">COVID Travel Pass+</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="p-2 mb-2 border rounded-2xl">
              <IconCar className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">Motor</p>
          </div> */}
        </div>
      </div>
      <div className="flex p-3 mb-2 border w-96">
        <IconMotorbike className="w-10 h-10 m-3 text-red-500" />
        <div>
          <p>Home Easy</p>
          <p>10x Tune Coin earn rate</p>
        </div>
      </div>
      <p>
        When you have higher earn rate, you can earn more coins after completing
        a quest. If a quest rewards user with 1 coin, you can earn 10 coins!
      </p>
    </>
  );
}

export default function Page() {
  const [tab, setTab] = useState("my-tune");

  return (
    <div className="flex-col mb-32 layout">
      <SegmentedToggle tab={tab} setTab={setTab} />
      {tab === "profile" ? <Profile /> : <MyTune />}
    </div>
  );
}
