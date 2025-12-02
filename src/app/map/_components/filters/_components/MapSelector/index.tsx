"use client";

import { TMaps } from "@/app/map/page";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface IMapSelectorProps {
  map: TMaps;
  changeMap: React.Dispatch<React.SetStateAction<TMaps>>;
}

export default function MapSelector({ map, changeMap }: IMapSelectorProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>{map}</InputLabel>
      <Select
        label={map}
        onChange={(event: SelectChangeEvent<TMaps>) => changeMap(event.target.value)}
      >
        <MenuItem value="Dam battlegrounds">Dam battlegrounds</MenuItem>
        <MenuItem value="Spaceport">Spaceport</MenuItem>
        <MenuItem value="Buried city">Buried city</MenuItem>
        <MenuItem value="Blue gate">Blue gate</MenuItem>
      </Select>
    </FormControl>
  );
}
