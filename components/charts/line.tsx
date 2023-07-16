import {
  Card,
  Metric,
  Text,
  AreaChart,
  BadgeDelta,
  Flex,
  DeltaType,
  Grid,
} from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    "Total Applications": 2890,
    "Total Hired": 2400,
    "Total Quest Completed": 4938,
  },
  {
    Month: "Feb 22",
    "Total Applications": 1890,
    "Total Hired": 1398,
    "Total Quest Completed": 2938,
  },
  // ...
  {
    Month: "Jul 23",
    "Total Applications": 3490,
    "Total Hired": 4300,
    "Total Quest Completed": 2345,
  },
];

const categories: {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
  color: string | any;
}[] = [
  {
    title: "Total Applications",
    metric: "45",
    metricPrev: "38",
    delta: "34.3%",
    deltaType: "moderateIncrease",
    color: "green",
  },
  {
    title: "Total Hired",
    metric: "82",
    metricPrev: "68",
    delta: "18.1%",
    deltaType: "moderateIncrease",
    color: "green",
  },
  {
    title: "Total Hired",
    metric: "90",
    metricPrev: "143",
    delta: "12.3%",
    deltaType: "moderateDecrease",
    color: "red",
  },
];

export default function Example() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <Text>{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex
            className="space-x-3 truncate"
            justifyContent="start"
            alignItems="baseline"
          >
            <Metric>{item.metric}</Metric>
            <Text>from {item.metricPrev}</Text>
          </Flex>
          <AreaChart
            className="mt-6 h-28"
            data={data}
            index="Month"
            // valueFormatter={(number: number) =>
            //   `$ ${Intl.NumberFormat("us").format(number).toString()}`
            // }
            categories={[item.title]}
            colors={[item.color]}
            showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={false}
            showLegend={false}
          />
        </Card>
      ))}
    </Grid>
  );
}
