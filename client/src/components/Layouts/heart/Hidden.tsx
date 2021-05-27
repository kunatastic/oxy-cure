import { Box } from "@chakra-ui/layout";
import React from "react";
import DrawMap from "../../Maps/DrawMap";
// import HiddenNav from "./HiddenNav";

export default function Hidden() {
  return (
    <>
      <Box
        height="100vh"
        bg="blue.900"
        color="blue.200"
        border="2"
        borderColor="pink"
      >
        {/* <HiddenNav /> */}
        <DrawMap />
      </Box>
    </>
  );
}