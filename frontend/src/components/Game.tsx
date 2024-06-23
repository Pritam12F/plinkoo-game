import { useState, useRef, useEffect } from "react";
import { BallManager } from "../game/classes/ballManager";
import axios from "axios";

export const AddBall = () => {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <button
        onClick={async () => {
          const res = await axios.post("http://localhost:3000/game");
          if (ballManager) {
            ballManager.addBall(res.data.point);
          }
        }}
      >
        Add ball
      </button>
    </div>
  );
};
