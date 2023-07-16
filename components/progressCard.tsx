import { createStyles, Text, Card, RingProgress, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  label: {
    fontWeight: 700,
    lineHeight: 1,
  },

  lead: {
    fontWeight: 700,
    fontSize: rem(22),
    lineHeight: 1,
  },

  inner: {
    display: 'flex',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  ring: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'center',
      marginTop: theme.spacing.md,
    },
  },
}));

interface progressCardProps {
  title: string;
  mainNum: number;
  main: string;
  progress: string;
  progressValue: number;
  progressText: string;
  stats: {
    value: number;
    label: string;
  }[];
}

export function progressCard({ title, main, mainNum, progress, progressValue, progressText, stats }: progressCardProps) {
  const { classes, theme } = useStyles();
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            {title}
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              {mainNum}
            </Text>
            <Text fz="xs" color="dimmed">
              {main}
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value: progressValue, color: theme.primaryColor }]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {progress}
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  {progressText}
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}