import { motion } from "motion/react";
import Image from "next/image";

interface IPointProps {
  coord: {
    x: number;
    y: number;
  };
  color: string;
  parentSize: number;
  id: number;
}

export const Point = ({ coord, parentSize, id, color }: IPointProps) => {
  const size =
    parentSize >= 5
      ? 0.3
      : parentSize >= 4
      ? 0.4
      : parentSize >= 3
      ? 0.5
      : parentSize >= 2
      ? 0.6
      : 1;

  return (
    <motion.div
      style={{
        width: 60,
        height: 60,
        borderRadius: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: coord.y,
        left: coord.x,
        backgroundColor: color,
      }}
      animate={{ scale: size }}
      whileHover={{ scale: size + 0.2 }}
      onClick={() => console.log(id)}
    >
      <Image width={24} height={24} src={"/points/probe.png"} alt="pin" />
    </motion.div>
  );
};
