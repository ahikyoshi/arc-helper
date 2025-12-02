"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { motion, useDragControls } from "motion/react";
import { zoom } from "./utils";
import Zoom from "./_components/Zoom";
import Panel from "./_components/Panel";
import { TFiltres, TMaps } from "../../page";
import { mapSizes, points } from "./data";
import { Point } from "./_components/Points";

interface IMapProps {
  map: TMaps;
  filtres: TFiltres;
}

export default function Map({ map, filtres }: IMapProps) {
  const [size, setSize] = useState<0.4 | 0.8 | 1.2 | 1.6 | 2>(0.4);
  const [isInfo, setIsInfo] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const realX = clickX / size - 30;
    const realY = clickY / size - 30;
    console.log(`cords: {x: ${Math.round(realX)}, y: ${Math.round(realY)}},`);
  };

  const getFilter = () => {
    return filtres.depot
      ? "depot"
      : filtres.probe
      ? "probe"
      : filtres.plant
      ? "plant"
      : "false";
  };

  return (
    <Box
      sx={{ overflow: "hidden", width: 950, height: 950, position: "relative" }}
      onWheel={(event) => {
        setSize(zoom(event, size));
      }}
      border={"1px solid silver"}
    >
      <motion.div
        initial={{ scale: 0.4 }}
        animate={{ scale: size }}
        transition={{ duration: 0.2 }}
        style={{
          width: mapSizes[map].width,
          height: mapSizes[map].height,
          backgroundImage: `url("/maps/${map}.png")`,
          cursor: isInfo ? "help" : "grab",
        }}
        onClick={(event) => {
          setIsInfo(false);
          if (isInfo) {
            handleClick(event);
          }
        }}
        drag={!isInfo}
      >
        {points[map][getFilter()].map((point, index) => (
          <Point
            coord={point.cords}
            color={point.color}
            id={point.id}
            parentSize={size}
            key={index}
          />
        ))}
        {/* {points[map][].map((point, index) => (
          <Point
            coord={point.cords}
            color={point.color}
            id={point.id}
            parentSize={size}
            key={index}
          />
        ))} */}
      </motion.div>
      <Zoom size={size} setSize={setSize} />
      <Panel isInfo={isInfo} setIsInfo={setIsInfo} />
    </Box>
  );
}
