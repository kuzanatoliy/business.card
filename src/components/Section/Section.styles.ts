import { SxProps } from "@mui/material";

export const sectionStyles: Record<"container" | "content", SxProps> = {
  container: {
    padding: `0 calc((100% - 1024px) / 2)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    padding: "1.5rem",
  },
};
