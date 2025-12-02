export interface ITrials {
  title: string;
  icon: string;
  key: "probe" | "plant" | "depot" | "husk";
}

export const trials: ITrials[] = [
  {
    title: "ARC Probe",
    icon: "/points/probe.png",
    "key": "probe",
  },
  {
    title: "Plants",
    icon: "/points/plants.png",
    "key": "plant",
  },
  {
    title: "Field Depot",
    icon: "/points/depot.png",
    "key": "depot",
  },
    {
    title: "Arc Husk",
    icon: "/points/depot.png",
    "key": "husk",
  },
];
