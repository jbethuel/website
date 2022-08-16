import { Text, Timeline } from "@mantine/core";
import { Fragment } from "react";
import { FaHamburger, FaHandshake, FaMobileAlt } from "react-icons/fa";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

export default function Works() {
  return (
    <Fragment>
      <Header />
      <Content>
        <Timeline active={2} bulletSize={30} lineWidth={2}>
          <Timeline.Item
            bullet={<FaMobileAlt />}
            title="StreetBy - Mobile Developer"
          >
            <Text color="dimmed" size="sm">
              Mainly worked with a local startup Agila Innovations with a
              product called StreetBy. Maintained and improved &quot;Provider
              Mode&quot; of the app where the business owners/staff can manage
              the entity, products, and orders. Also worked on the backend
              features using hapijs and Paynamics as our payment gateway.
            </Text>
            <Text size="xs" mt={4}>
              Apr 2017 - Jul 2020
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Restoplus - Fullstack Developer"
            bullet={<FaHamburger />}
          >
            <Text color="dimmed" size="sm">
              Maintained and developed web application(react), order manager app
              (mobile). For tests, I&apos;ve done unit, integration and e2e.
              Also worked with Stripe Online Payments and CI/CD.
            </Text>
            <Text size="xs" mt={4}>
              Jul 2020 - Feb 2021
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Rise-x - React Developer"
            bullet={<FaHandshake />}
          >
            <Text color="dimmed" size="sm">
              Feb 2021 - current. A startup that aims to to operate, orchestrate
              and optimize the worlds largest and most interconnected industrial
              ecosystem. Software as a service: Enterprise Resource Planning,
              Business Ecosystem Planning.
            </Text>
            <Text size="xs" mt={4}>
              Feb 2021 - Current
            </Text>
          </Timeline.Item>
        </Timeline>
      </Content>
    </Fragment>
  );
}
