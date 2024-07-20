"use client";

import { Timeline, Text } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import '@mantine/core/styles.css';

export default function TimeLine() {
  return (
    <Timeline active={2} bulletSize={40} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={20} />} title="Secondary">
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Sharda Vidhya Mandir
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          2018
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<IconGitCommit size={20} />}
        title="Senior Secondary"
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Tagore Public School
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          2020
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Graduation"
        bullet={<IconGitPullRequest size={20} />}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Teerthanker Mahaveer University
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          2024
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
