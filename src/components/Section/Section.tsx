import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

import { sectionStyles } from "./Section.styles";

export type SectionProps = PropsWithChildren<{}>;

export const Section = ({ children }: SectionProps) => (
  <Box component="section" sx={sectionStyles.container}>
    <Box sx={sectionStyles.content}>{children}</Box>
  </Box>
);
