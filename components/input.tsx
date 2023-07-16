import { createStyles, rem, Select, TextInput } from '@mantine/core';
import { DatePickerInput, DateTimePicker } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },
  input2: {
    height: rem(100),
    paddingTop: rem(18),
  },

  

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div>
      <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />

      
      <DateTimePicker
        mt="md"
        popoverProps={{ withinPortal: true }}
        label="Choice 1 - Interview Availability Date & Time"
        placeholder="Select your availability"
        classNames={classes}
        clearable={false}
      />

<DateTimePicker
        mt="md"
        popoverProps={{ withinPortal: true }}
        label="Choice 2 - Interview Availability Date & Time"
        placeholder="Select your availability"
        classNames={classes}
        clearable={false}
      />


<DateTimePicker
        mt="md"
        popoverProps={{ withinPortal: true }}
        label="Choice 3 - Interview Availability Date & Time"
        placeholder="Select your availability"
        classNames={classes}
        clearable={false}
      />

      
<TextInput
  mt="md" // Set the desired margin-top value
  label="Interviewer Notes"
  placeholder="This candidate displayed a strong capability in Problem Solving"
  classNames={classes} // Use input2 class for larger text input
/>



<Select
        mt="md"
        withinPortal
        data={['Approved', 'Rejected', 'Pending Approval']}
        placeholder="Pick one"
        label="Do you approve this candidate?"
        classNames={classes}
      />
    </div>
  );
}