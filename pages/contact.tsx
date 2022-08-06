import { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Content>
        Reach me out at: <br />
        jbethueldc@gmail.com
      </Content>
    </Fragment>
  );
}
