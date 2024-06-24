import { useRef, useState, useEffect } from "react";
import { BallManager } from "../game/classes/ballManager";
import { pad } from "../game/padding";
import { WIDTH } from "../game/constant";

export const Simulate = () => {
  const canvasRef = useRef<any>();
  const [outcomes, setOutcomes] = useState<{ [index: number]: number[] }>({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
  });
  const [ballManager, setBallManger] = useState<BallManager>();

  async function simulate(ballManager: BallManager) {
    let i = 0;
    while (true) {
      i++;
      ballManager.addBall(pad(WIDTH / 2 + 20 * (Math.random() - 0.5)));
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef as unknown as HTMLCanvasElement,
        (index: number, startX: number) => {
          setOutcomes({
            ...outcomes,
            [index]: [...(outcomes[index] as number[]), startX],
          });
        }
      );
      setBallManger(ballManager);
    }
    simulate(ballManager!);

    return () => {
      ballManager?.stop();
    };
  }, [canvasRef]);

  return (
    <div className="flex flex-col justify-center items-center">
      <canvas width="800" height="800" ref={canvasRef}></canvas>
    </div>
  );
};
