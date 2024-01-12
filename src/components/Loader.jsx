import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html className="flex justify-center items-center flex-col">
      <span className="canvas-loader"></span>
      <p className="text-[14px] text-[#F1F1F1] font-extrabold t-40 mt-8">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
