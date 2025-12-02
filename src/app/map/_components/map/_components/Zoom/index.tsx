"use client";

import React from "react";
import { Box, Slider, Stack } from "@mui/material";

interface IZoomProps {
  size: 0.4 | 0.8 | 1.2 | 1.6 | 2;
  setSize: React.Dispatch<React.SetStateAction<0.4 | 0.8 | 1.2 | 1.6 | 2>>;
}

export default function Zoom({ size, setSize }: IZoomProps) {
  const marks = [
    { value: 0.4, label: 0.4 },
    { value: 0.8, label: 0.8 },
    { value: 1.2, label: 1.2 },
    { value: 1.6, label: 1.6 },
    { value: 2, label: 2 },
  ];

  const handleChange = (event: Event, newValue: number) => {
    if (
      newValue === 0.4 ||
      newValue === 0.8 ||
      newValue === 1.2 ||
      newValue === 1.6 ||
      newValue === 2
    ) {
      setSize(newValue);
    }
  };
  return (
    <Box sx={{ position: "absolute", right: 40, top: 20, height: 200 }}>
      <Stack
        spacing={2}
        direction="column"
        sx={{ alignItems: "center", mb: 1, height: 200 }}
      >
        <Slider
          aria-label="Volume"
          value={size}
          onChange={handleChange}
          orientation="vertical"
          defaultValue={1.2}
          step={0.4}
          marks={marks}
          min={0.4}
          max={2}
        />
      </Stack>
    </Box>
  );
}
