"use client";

import { Box, Typography } from "@mui/material";
import MapSelector from "./_components/MapSelector";
import TrialsSelector from "./_components/TrialsSelector";
import { TFiltres, TMaps } from "../../page";

interface IFiltersProps{
  map: TMaps,
  filtres: TFiltres,
  changeMap: React.Dispatch<React.SetStateAction<TMaps>>,
  setFiltres: React.Dispatch<React.SetStateAction<TFiltres>>
}

export default function Filters({map, filtres, setFiltres, changeMap}: IFiltersProps) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Typography variant="h5">Arc Trials interactive map</Typography>
      <MapSelector map={map} changeMap={changeMap} />
      <TrialsSelector filtres={filtres} setFiltres={setFiltres} />
    </Box>
  );
}
