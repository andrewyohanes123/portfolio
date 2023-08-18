import { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Timeline,
  Title,
  Text,
  createStyles,
} from "@mantine/core";

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
          <Timeline>
            <Timeline.Item title="Pemerintah Kota Manado">
              <Text>Testing</Text>
              <Text color="dimmed" size="sm">
                2019
              </Text>
            </Timeline.Item>
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
