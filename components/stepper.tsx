import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { mono, satoshi } from '@/lib/fonts';
import clsx from 'clsx';

const StepperComponent = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
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
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          className={clsx([mono.className, satoshi.className])}
        >
          Step 3 content: Get full access
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
