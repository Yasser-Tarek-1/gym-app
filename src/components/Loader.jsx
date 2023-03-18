import React from "react";
import { Stack } from "@mui/system";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      alignContent="center"
      justifyContent="center"
      width="100%"
      my="50px"
    >
      <RotatingLines
        strokeColor="#f06d22"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Stack>
  );
};

export default Loader;
