import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/ballManager";
import axios from "axios";
import { Button } from "./ui";

export function Game() {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div className="flex items-center gap-x-32">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <Button
        onClick={async () => {
          const response = await axios.post(process.env.BACKEND_API, {
            data: 1,
          });
          if (ballManager) {
            ballManager.addBall(response.data.point);
          }
        }}
      >
        Add ball
      </Button>
    </div>
  );
}
