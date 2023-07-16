"use client";
import { useState } from 'react';
import { Stepper, Button, Group, Paper } from '@mantine/core';
import { mono, satoshi } from "@/lib/fonts";
import clsx from "clsx";
import { LayoutDashboard } from "lucide-react";
import SuggestionPaper from "@/components/suggestion";

const Application = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main className={clsx(["pb-10 pt-5 flex flex-col max-w-5xl mx-auto px-2", satoshi.className])}>
      <section className="w-full space-y-10">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="text-[#01a9a0] w-5 h-5" />
          <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#01a9a0]">Application</span>
            <span>Details</span>
          </p>
        </div>

        <Stepper active={active} onStepClick={setActive} breakpoint="sm" className={satoshi.className}>
          <Stepper.Step
            label="First step"
            description="Create an account"
            className={clsx([mono.className, satoshi.className])}
          >
            Step 1 content: Create an account
          </Stepper.Step>
          <Stepper.Step
            label="Second step"
            description="Verify email"
            className={clsx([mono.className, satoshi.className])}
          >
            <SuggestionPaper />
          </Stepper.Step>
          <Stepper.Step
            label="Final step"
            description="Get full access"
            className={clsx([mono.className, satoshi.className])}
          >
            Step 3 content: Get full access
          </Stepper.Step>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep} className={mono.className}>
            Back
          </Button>
          <Button onClick={nextStep} className={mono.className}>
            Next step
          </Button>
        </Group>
      </section>
    </main>
  );
};

export default Application;

