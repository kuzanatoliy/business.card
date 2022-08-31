import { Typography } from "@mui/material";

import { Section } from "../Section";

// import { aboutMeSectionStyles } from "./AboutMeSection.styles";

/* const educationRu = [
  {
    institution:
      "Гомельский государственный технический университет имени П.О. Сухого",
    faculty: "Автоматизированных и информационных систем",
    department: "Информационные системы",
    specialty:
      "Информационные системы и технологии в производстве и проектировании",
    degree: "Специалист",
    from: 2009,
    to: 2014,
  },
  {
    institution:
      "Гомельский государственный технический университет имени П.О. Сухого",
    faculty: "Автоматизированных и информационных систем",
    department: "Информационные системы",
    specialty:
      "Математическое моделирование, численные методы и комплексы программ",
    degree: "Магистр",
    from: 2014,
    to: 2015,
  },
  {
    institution:
      "Гомельский государственный технический университет имени П.О. Сухого",
    faculty: "Автоматизированных и информационных систем",
    department: "Информационные системы",
    specialty:
      "Математическое моделирование, численные методы и комплексы программ",
    degree: "Магистр",
    from: 2014,
    to: 2015,
  },
  {
    institution:
      "Гомельский государственный технический университет имени П.О. Сухого",
    faculty: "Факультет иновационного менеджмента и иноваций",
    department: "N/A",
    specialty: "Веб-технологии",
    degree: "Магистр",
    from: 2016,
    to: 2018,
  },
]; */

export const EducationSection = () => (
  <Section>
    <Typography variant="h3">Education</Typography>
    <Typography variant="h4">
      Pavel Sukhoi State Technical University of Gomel
    </Typography>
    <Typography variant="body1">
      Faculty: Automated And Information System
    </Typography>
    <Typography variant="body1">Department: Information Systems</Typography>
    <Typography variant="body1">
      Specialty: Information systems and technologies in production and design
    </Typography>
    <Typography variant="body1">Degree: Specialist</Typography>
    <Typography variant="body1">Form 2009 to 2014</Typography>
    <Typography variant="h4">
      Pavel Sukhoi State Technical University of Gomel
    </Typography>
    <Typography variant="body1">
      Faculty: Automated And Information System
    </Typography>
    <Typography variant="body1">Department: Information Systems</Typography>
    <Typography variant="body1">
      Specialty: Mathematical modeling, numerical methods and software packages
    </Typography>
    <Typography variant="body1">Degree: Master</Typography>
    <Typography variant="body1">Form 2014 to 2015</Typography>
    <Typography variant="h4">
      Saint Petersburg National Research University of Information Technologies,
      Mechanics and Optics
    </Typography>
    <Typography variant="body1">
      Faculty: Faculty of Technological Management and Innovations
    </Typography>
    <Typography variant="body1">Department: N/A</Typography>
    <Typography variant="body1">Specialty: Web-technologies</Typography>
    <Typography variant="body1">Degree: Master</Typography>
    <Typography variant="body1">Form 2016 to 2018</Typography>
  </Section>
);
