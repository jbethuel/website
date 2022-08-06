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
            <p>- Mac mini M1 2020 (256GB SSD, 16GB RAM)</p>
            <p>- Macbook Pro 2020 13&quot; (256GB SSD, 8GB RAM)</p>
          </Box>
        </section>
        <section>
          <h3>Peripherals</h3>
          <Box>
            <p>- Gigabyte G27Q (1440p, 144hz)</p>
            <p>- Keychron K2 (Gateron Brown)</p>
            <p>- Logitech M720</p>
            <p>- Beats Studio Buds</p>
            <p>- KZ EDX IEM</p>
          </Box>
        </section>
        <section>
          <h3>Gaming</h3>
          <Box>
            <p>- Xbox Series X</p>
            <p>- PXN V9</p>
          </Box>
        </section>
      </Content>
    </Fragment>
  );
}
