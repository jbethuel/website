import React from "react";
import Head from "@/components/head";
import useDarkMode from "use-dark-mode";

export default function Home() {
  const darkMode = useDarkMode(false);
  return (
    <>
      <Head />
      <button onClick={() => darkMode.toggle()}>hello</button>
    </>
  );
}
