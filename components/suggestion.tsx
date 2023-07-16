import {
    Center,
    SegmentedControl,
    Box,
    Paper,
    Title,
    Text,
    Skeleton,
    TypographyStylesProvider
  } from "@mantine/core";
  import { IconArrowBigUpLine, IconArrowDown, IconGraph, IconHeartPlus } from "@tabler/icons-react";
  import { useState } from "react";
  import { insights } from "../mock/insights";
  import { useEffect } from "react";
  
  function SuggestionPaper(props: any) {
    const { loading } = props;
  
    const [selectedValue, setSelectedValue] = useState("cost");
    const [generatedAdvice, setGeneratedAdvice] = useState("");
  
    useEffect(()=>{
      if(selectedValue != "")
      setGeneratedAdvice(insights[selectedValue]);
    },[selectedValue])
  
    return (
      <Paper p="lg" shadow="sm">
        <Title order={5} mb="md">
          SC Advice
        </Title>
        <SegmentedControl
          mb="lg"
          value={selectedValue}
          onChange={(value) => setSelectedValue(value)}
          data={[
            {
              value: "cost",
              label: (
                <Center>
                  <IconArrowDown size="1rem" />
                  <Box ml={10}>Cost</Box>
                </Center>
              ),
            },
            {
              value: "revenue",
              label: (
                <Center>
                  <IconGraph size="1rem" />
                  <Box ml={10}>Revenue</Box>
                </Center>
              ),
            },
            {
              value: "health",
              label: (
                <Center>
                  <IconHeartPlus size="1rem" />
                  <Box ml={10}>Health</Box>
                </Center>
              ),
            },
            {
              value: "opportunity",
              label: (
                <Center>
                  <IconArrowBigUpLine size="1rem" />
                  <Box ml={10}>Opportunity</Box>
                </Center>
              ),
            },
          ]}
        />
        <Skeleton visible={loading}>
          <Paper withBorder p="lg">
          <TypographyStylesProvider>
          <div dangerouslySetInnerHTML={{ __html:generatedAdvice}} />
            
          </TypographyStylesProvider>
          </Paper>
        </Skeleton>
      </Paper>
    );
  }
  
  export default SuggestionPaper;
  