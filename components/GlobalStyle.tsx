import { Global } from "@mantine/core";

export function GlobalStyles() {
  return (
    <Global
      styles={() => ({
        "#__next": {
          maxWidth: "820px",
          margin: "0 auto",
        },
        ":root": {
          "--light-background": "#fbfbfb",
          "--light-color": "#232b33",
          "--light-primary": "#a464c9",
          "--dark-background": "#001527",
          "--dark-color": "#eeeeee",
          "--dark-primary": "#446eae",
        },
        body: {
          "background-color": "var(--light-background)",
          color: "var(--light-color)",
        },
        "body.dark": {
          "background-color": "var(--dark-background)",
          color: "var(--dark-color)",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
      })}
    />
  );
}
