import { Box, List } from "@mantine/core";
import { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

interface Gear {
  title: string;
  details: string[];
}

const gears: Gear[] = [
  {
    title: "Workstation",
    details: [
      "Mac mini M1 2020 (256GB SSD, 16GB RAM)",
      "Macbook Pro 2020 13&quot; (256GB SSD, 8GB RAM)",
    ],
  },
  {
    title: "Peripherals",
    details: [
      "Gigabyte G27Q (1440p, 144hz)",
      "Keychron K2 (Gateron Brown)",
      "Logitech MX Anywhere 3",
      "Logitech M720",
      "Beats Studio Buds",
      "KZ EDX IEM",
    ],
  },
  {
    title: "Gaming",
    details: ["Xbox Series X", "PXN V9"],
  },
];

export default function Gear() {
  return (
    <Fragment>
      <Header />
      <Content>
        <List>
          {gears.map((item, index) => (
            <Box key={index} sx={{ marginBottom: 10 }}>
              <List.Item>{item.title}</List.Item>

              <List withPadding>
                {item.details.map((detail, index) => (
                  <List.Item key={index}>{detail}</List.Item>
                ))}
              </List>
            </Box>
          ))}
        </List>
      </Content>
    </Fragment>
  );
}
