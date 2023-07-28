"use client";

import { LineWave } from "react-loader-spinner";
import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <LineWave
        color="#22c55e"
        height="100"
        width="100"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </Box>
  );
};

export default Loading;
