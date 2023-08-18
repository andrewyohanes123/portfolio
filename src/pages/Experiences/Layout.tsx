import { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Timeline,
  Title,
  Text,
  createStyles,
} from "@mantine/core";
import { experiences } from "consts";
import dayjs from "dayjs";

const useStyles = createStyles((theme) => ({
  timelineContainer: {
    padding: `${theme.spacing.xl} ${theme.spacing.md}`,
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
  },
}));

const Layout: FC = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <Box component="section" px="xl">
      <Container py="xl">
        <Title order={3}>Experiences</Title>
        <Box my="xl" className={classes.timelineContainer}>
          <Timeline active={experiences.length}>
            {experiences.map((experience, index) => (
              <Timeline.Item
                key={`timeline-item-${index}-${experience.instance}`}
                title={experience.instance}
              >
                <Title order={5}>{experience.role}</Title>
                <Text>{experience.description}</Text>
                <Text color="dimmed" size="sm">
                  {`${dayjs(experience.year[0]).format("MM/YYYY")} - ${dayjs(
                    experience.year[1]
                  ).format("MM/YYYY")}`}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
