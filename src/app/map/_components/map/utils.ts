import type { WheelEvent } from "react";

export const zoom = (
  event: WheelEvent<HTMLDivElement>,
  size: 0.4 | 0.8 | 1.2 | 1.6 | 2
): 0.4 | 0.8 | 1.2 | 1.6 | 2 => {
  const new_size = size + -event.deltaY / 250;
  return new_size > 2
    ? 2
    : new_size < 0.4
    ? 0.4
    : Math.round(new_size * 10) / 10;
};
