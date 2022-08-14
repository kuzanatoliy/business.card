import { Box, Avatar, Typography } from "@mui/material";

import { Section } from "../Section";

import { aboutMeSectionStyles } from "./AboutMeSection.styles";

export const AboutMeSection = () => (
  <Section>
    <Box sx={aboutMeSectionStyles.container}>
      <Avatar
        src="/assets/images/avatar.jpg"
        sx={aboutMeSectionStyles.avatar}
      />
      <Box sx={aboutMeSectionStyles.content}>
        <Typography variant="h2">Anatoli Kuzmiankou</Typography>
        <Typography variant="subtitle1">(Full stack developer)</Typography>
        <Typography variant="body1" sx={aboutMeSectionStyles.description}>
          I am a full stack (NodeJS/React) developer from more than 6 years
          production experience. I have development experience with back-end and
          frontend technologies. My current focus is NodeJS/Express/React/Redux
          development. During my career path I played NodeJS, Front end
          developer roles. Besides, I have mentor experience too. During my
          career path I have been joined as mentor more than 11 mentoring
          programs. And play team lead role in a few academic projects.
        </Typography>
      </Box>
    </Box>
  </Section>
);
