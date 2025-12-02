"use client";

import { Box, Button, ButtonGroup } from "@mui/material";

interface IPanelProps {
  isInfo: boolean;
  setIsInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Panel({ isInfo, setIsInfo }: IPanelProps) {
  return (
    <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
      <ButtonGroup variant="contained" disabled={isInfo}>
        <Button onClick={() => setIsInfo((prev: boolean) => !prev)}>
          Get coordinate
        </Button>
      </ButtonGroup>
    </Box>
  );
}
