import {
  HEIGHT,
  MULTIPLIERS,
  NUM_SINKS,
  WIDTH,
  obstacleRadius,
  sinkWidth,
} from "./constant";
import { pad } from "./padding";

export interface Obstacle {
  x: number;
  y: number;
  radius: number;
}

export interface Sink {
  x: number;
  y: number;
  height: number;
  width: number;
  multiplier: number;
}

export const createObstacles = (): Obstacle[] => {
  const obstacles: Obstacle[] = [];
  const spacing = 36;
  const rows = 18;

  for (let row = 2; row < rows; row++) {
    const y = 0 + 35 * row;
    const obstaclesTemp = row + 1;
    for (let col = 0; col < obstaclesTemp; col++) {
      const x = WIDTH / 2 - spacing * (row / 2 - col);
      obstacles.push({ x: pad(x), y: pad(y), radius: obstacleRadius });
    }
  }

  return obstacles;
};

export const createSink = (): Sink[] => {
  const sinks: Sink[] = [];
  const sinkSpacing = obstacleRadius * 2;

  for (let sink = 0; sink < NUM_SINKS; sink++) {
    const x =
      WIDTH / 2 +
      sinkWidth * (sink - Math.floor(NUM_SINKS / 2)) -
      sinkSpacing * 1.5;
    const y = HEIGHT - 170;
    const width = sinkWidth;
    const height = width;
    sinks.push({ x, y, height, width, multiplier: MULTIPLIERS[sink + 1] });
  }

  return sinks;
};
