import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [prevProgress, setPrevProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: `${progress}%` });
    setPrevProgress(progress);
  }, [progress, controls]);

  return (
    <div className="flex w-full h-4 bg-pure-white dark:bg-navy rounded-full">
      <motion.div
        className="bg-purple h-2 m-1 rounded-full"
        style={{ width: `${prevProgress}%` }}
        animate={controls}
      />
    </div>
  );
};

export default ProgressBar;
