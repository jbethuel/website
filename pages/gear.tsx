import { Box } from "@mantine/core";
import React, { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

export default function Gear() {
  return (
    <Fragment>
      <Header />
      <Content>
        <section>
          <h3>Workstation </h3>
          <Box>
            <Box>- Mac mini M1 2020 (256GB SSD, 16GB RAM)</Box>
            <Box>- Macbook Pro 2020 13&quot; (256GB SSD, 8GB RAM)</Box>
          </Box>
        </section>
        <section>
          <h3>Peripherals</h3>
          <Box>
            <Box>- Gigabyte G27Q (1440p, 144hz)</Box>
            <Box>- Keychron K2 (Gateron Brown)</Box>
            <Box>- Logitech M720</Box>
            <Box>- Beats Studio Buds</Box>
            <Box>- KZ EDX IEM</Box>
          </Box>
        </section>
        <section>
          <h3>Gaming</h3>
          <Box>
            <Box>- Xbox Series X</Box>
            <Box>- PXN V9</Box>
          </Box>
        </section>
      </Content>
    </Fragment>
  );
}
