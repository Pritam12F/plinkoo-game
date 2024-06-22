import { Obstacle, Sink } from "../objects";
import { Ball } from "./ball";

export class BallManager {
  private balls: Ball[];
  private canvasRef: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private obstacles: Obstacle[];
  private sinks: Sink[];
  private requestId?: number;
  private onFinish?: (index: number, startX?: number) => void;

  constructor(
    canvasRef: HTMLCanvasElement,
    onFinish?: (index: number, startX?: number) => void
  ) {
    this.onFinish = onFinish;
    this.canvasRef = canvasRef;
  }
}
