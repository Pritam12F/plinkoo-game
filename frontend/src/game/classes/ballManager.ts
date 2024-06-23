import { HEIGHT, WIDTH, ballRadius, obstacleRadius } from "../constant";
import { Obstacle, Sink, createObstacles, createSink } from "../objects";
import { pad, unpad } from "../padding";
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
    this.ctx = canvasRef.getContext("2d")!;
    this.obstacles = createObstacles();
    this.sinks = createSink();
    this.balls = [];
  }

  addBall(startX: number) {
    const newBall = new Ball(
      startX || pad(WIDTH / 2 - 13),
      pad(50),
      ballRadius,
      "red",
      this.ctx,
      this.obstacles,
      this.sinks,
      this.onFinish
        ? this.onFinish
        : (index) => {
            this.balls = this.balls.filter((ball) => ball !== newBall);
            this.onFinish?.(index, startX);
          }
    );

    this.balls.push(newBall);
  }

  drawObstacles() {
    this.ctx.fillStyle = "white";
    this.obstacles.forEach((obstacle) => {
      this.ctx.beginPath();
      this.ctx.arc(
        unpad(obstacle.x),
        unpad(obstacle.y),
        obstacleRadius,
        0,
        Math.PI * 2
      );
      this.ctx.fill();
      this.ctx.closePath();
    });
  }
}
