"use client";
import { useState } from 'react';
import { Stepper, Button, Group, Paper, Image, Card, Grid } from '@mantine/core';
import { mono, satoshi } from "@/lib/fonts";
import clsx from "clsx";
import { LayoutDashboard } from "lucide-react";
import SuggestionPaper from "@/components/suggestion";
import { StatsGrid } from '@/components/statsGrid';
import { ContainedInputs } from '@/components/input';
import { GeneralCard } from '@/components/generalCard';
import { ProgressCard } from '@/components/progressCard';

const statsData = [
  {
    title: 'Users',
    icon: 'user' as const,
    value: '100',
    diff: 10,
  },
  {
    title: 'Discounts',
    icon: 'discount' as const,
    value: '50',
    diff: -5,
  },
  {
    title: 'Receipts',
    icon: 'receipt' as const,
    value: '200',
    diff: 20,
  },
  {
    title: 'Coins',
    icon: 'coin' as const,
    value: '500',
    diff: 25,
  },
];



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
];
const Application = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main className={clsx(["pb-10 pt-5 flex flex-col max-w-6xl mx-auto px-2", satoshi.className])}>
      <section className="w-full space-y-10">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="text-[#01a9a0] w-8 h-8" />
          <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#01a9a0]">Application</span>
            <span>Details</span>
          </p>
        </div>

        <Stepper active={active} onStepClick={setActive} breakpoint="sm" className={satoshi.className}>
          <Stepper.Step
            label="1st Stage"
            description="Applicants Resume Matching"
            className={clsx([mono.className, satoshi.className])}
          >
            <Grid>
              <Grid.Col span={8}>
              <p className={clsx(["text-xl font-bold", mono.className, "mb-4"])}>
               <span className="text-[#01a9a0]">Applicant ID: PX0002</span>
              </p>

                <Image src="/images/resume.png" alt="Resume" width={500} height={500} />
              </Grid.Col>
              {/* <StatsGrid data={statsData} /> */}

              {/* <SuggestionPaper /> */}
              <Grid.Col span={4}>
  <GeneralCard
    title="Software Engineer"
    num={70}
    numShow="70%"
    description="Strong alignment with job requirements, showcasing relevant technical skills and industry experience. Matching score of 70% indicates a substantial match to the position."
  />
  <GeneralCard
    title="Frontend Developer"
    num={50}
    numShow="50%"
    description="Moderate alignment with job requirements, possessing a solid foundation in frontend technologies and some web development experience."
  />
  <GeneralCard
    title="Backend Developer"
    num={20}
    numShow="20%"
    description="Relatively low alignment with job requirements, limited experience and expertise in backend technologies."
  />
</Grid.Col>

            </Grid>
            <p className={clsx(["text-xl font-bold mt-4 mb-4", mono.className])}>
            <span className="text-[#01a9a0]">Applicant Compatibility</span>
            </p>

            <Grid>
              <Grid.Col span={6}>
                <ProgressCard title="Github" main="Repository" mainNum={35} progress="A+" progressValue={89} progressText="Score" stats={[{ value: 50, label: "Stars" }]}></ProgressCard>
              </Grid.Col>
              <Grid.Col span={6}>
                <ProgressCard title="LeetCode" main="Repository" mainNum={90} progress="A" progressValue={80} progressText="Score" stats={[{ value: 40, label: "Level" }]}></ProgressCard>
              </Grid.Col>
            </Grid>
          </Stepper.Step>
          <Stepper.Step
            label="2nd Stage"
            description="HR Interview"
            className={clsx([mono.className, satoshi.className])}
          >
            <div className="mb-4">
              <Card shadow="sm" padding="lg">
                <p className={clsx(["text-xl font-bold", mono.className])}>
                  <span className="text-[#01a9a0]">Assigned Interviewer: En Azad</span>
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Candidate Name: Oscar Ling
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Role: Software Engineer
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Current Stage: Stage 2
                </p>
                <Button variant="default" onClick={nextStep} className={mono.className}>
                  View Resume
                </Button>
              </Card>
            </div>

            <ContainedInputs />
          </Stepper.Step>
          <Stepper.Step
            label="3rd Stage"
            description="Team Manager Interview"
            className={clsx([mono.className, satoshi.className])}
          >
            <div className="mb-4">
              <Card shadow="sm" padding="lg">
                <p className={clsx(["text-xl font-bold", mono.className])}>
                  <span className="text-[#01a9a0]">Assigned Interviewer: Ms Vinslet</span>
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Candidate Name: Oscar Ling
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Role: Software Engineer
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Current Stage: Stage 3
                </p>
                <Button variant="default" onClick={nextStep} className={mono.className}>
                  View Resume
                </Button>
              </Card>
            </div>

            <ContainedInputs />
          </Stepper.Step>
          <Stepper.Step
            label="4th Stage"
            description="Leadership Team Interview"
            className={clsx([mono.className, satoshi.className])}
          >
            <div className="mb-4">
              <Card shadow="sm" padding="lg">
                <p className={clsx(["text-xl font-bold", mono.className])}>
                  <span className="text-[#01a9a0]">Assigned Interviewer: Pn Rohaizal</span>
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Candidate Name: Oscar Ling
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Role: Software Engineer
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Current Stage: Stage 4
                </p>
                <Button variant="default" onClick={nextStep} className={mono.className}>
                  View Resume
                </Button>
              </Card>
            </div>

            <ContainedInputs />
          </Stepper.Step>
          <Stepper.Step
            label="Final Stage"
            description="Approval Stage"
            className={clsx([mono.className, satoshi.className])}
          >
            <div className="mb-4">
              <Card shadow="sm" padding="lg">
                <p className={clsx(["text-xl font-bold", mono.className])}>
                  <span className="text-[#01a9a0]">Assigned Interviewer: En Ahmad</span>
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Candidate Name: Oscar Ling
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Role: Software Engineer
                </p>
                <p className="font-normal text-gray-700 my-tune:text-gray-400 mb-2">
                  Current Stage: Stage 5
                </p>
                <Button variant="default" onClick={nextStep} className={mono.className}>
                  View Resume
                </Button>
              </Card>
            </div>

            <ContainedInputs />
          </Stepper.Step>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep} className={mono.className}>
            Back
          </Button>
          <Button variant="default" onClick={nextStep} className={mono.className}>
            Submit
          </Button>


        </Group>
      </section>
    </main>
  );
};

export default Application;

