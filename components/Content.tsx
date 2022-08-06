import { Box } from "@mantine/core";
import { ReactElement, ReactNode } from "react";

export interface ContentProps {
  children: ReactNode | ReactElement;
}

export function Content(props: ContentProps) {
  const { children } = props;
  return (
    <Box
      component="main"
      sx={{
        margin: "20px",
      }}
    >
      {children}
    </Box>
  );
}
