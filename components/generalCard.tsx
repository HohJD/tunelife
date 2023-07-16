import { Text, Progress, Card } from '@mantine/core';

interface generalCardProps {
    title: string;
    num: number;
    numShow: string;
    description: string;
  }

  
export function GeneralCard({title, num, numShow, description}: generalCardProps) {
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {title}
      </Text>
      <Text fz="lg" fw={500}>
        {numShow}
      </Text>
      <Progress value={num} mt="md" size="lg" radius="xl" />
      <Text fz="xs" c="dimmed">
        {description}
      </Text>
    </Card>
  );
}