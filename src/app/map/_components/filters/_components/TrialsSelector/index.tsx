import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import Image from "next/image";
import { trials } from "./data";
import { TFiltres } from "@/app/map/page";

interface ITrialsSelectorProps {
  filtres: TFiltres;
  setFiltres: React.Dispatch<React.SetStateAction<TFiltres>>;
}

export default function TrialsSelector({
  filtres,
  setFiltres,
}: ITrialsSelectorProps) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <List>
        {trials.map((trial, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <Image
                  width={24}
                  height={24}
                  src={trial.icon}
                  alt={trial.title}
                />
              </ListItemIcon>
              <ListItemText>{trial.title}</ListItemText>
              <Switch
                checked={filtres[trial.key]}
                onClick={() =>
                  setFiltres((prev) => ({
                    ...prev,
                    [trial.key]: !prev[trial.key],
                  }))
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
