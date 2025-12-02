"use client";

import { Box, Container } from "@mui/material";
import Filters from "./_components/filters";
import Map from "./_components/map";
import { useState } from "react";

export type TMaps =
  | "Dam battlegrounds"
  | "Spaceport"
  | "Buried city"
  | "Blue gate";
export type TFiltres = {
  probe: boolean;
  plant: boolean;
  depot: boolean;
};
export default function Page() {
  const [currentMap, setCurrentMap] = useState<TMaps>("Dam battlegrounds");
  const [filtres, setFiltres] = useState<TFiltres>({
    probe: false,
    plant: true,
    depot: false,
  });

  return (
    <Container>
      <Box display={"flex"} gap={2} my={8}>
        <Filters
          map={currentMap}
          changeMap={setCurrentMap}
          filtres={filtres}
          setFiltres={setFiltres}
        />
        <Map map={currentMap} filtres={filtres} setFiltres={setFiltres} />
      </Box>
    </Container>
  );
}
