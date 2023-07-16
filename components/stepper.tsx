import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { mono, satoshi } from '@/lib/fonts';
import clsx from 'clsx';

const StepperComponent = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 1 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step
          label="Step 1"
          description="Applicants Resume Matching"
          // className={clsx([mono.className, satoshi.className])}
        >
          Step 1: AI Resume Screening
        </Stepper.Step>
        <Stepper.Step
          label="Step 2"
          description="HR Interview"
          // className={clsx([mono.className, satoshi.className])}
        >
          Step 2: Schedule HR Interview
        </Stepper.Step>
        <Stepper.Step
          label="Step 3"
          description="Interview with Team's Manager"
          // className={clsx([mono.className, satoshi.className])}
        >
          Step 3: Schedule Manager Interview
        </Stepper.Step>
        <Stepper.Step
          label="Step 4"
          description="Final Interview by Leadership Team"
          // className={clsx([mono.className, satoshi.className])}
        >
          Step 4: Schedule Leadership Team Interview
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Application Decision"
          // className={clsx([mono.className, satoshi.className])}
        >
          Step 5: Decision
        </Stepper.Step>
      </Stepper>

      <div className={clsx([mono.className, satoshi.className])}>
        <Stepper.Completed>
          Completed, click back button to get to the previous step
        </Stepper.Completed>
      </div>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep} className={mono.className}>
          Back
        </Button>
        <Button onClick={nextStep} className={mono.className}>
          Next step
        </Button>
      </Group>
    </>
  );
};

export default StepperComponent;
