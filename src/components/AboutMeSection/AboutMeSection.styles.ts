import { SxProps } from "@mui/material";

export const aboutMeSectionStyles: Record<
  "container" | "avatar" | "content" | "description",
  SxProps
> = {
  container: {
    display: "flex",
    gap: "1.5rem",
  },
  avatar: {
    width: "25rem",
    height: "25rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  description: {
    marginTop: "2rem",
  },
};
