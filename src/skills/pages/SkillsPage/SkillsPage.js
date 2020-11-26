import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import { SkillPaper } from '../../components';

import { useIndentStyles } from '../../../common';

const useStyles = makeStyles({
  root: {
    padding: '3rem'
  }
});

export function SkillsPage() {
  const classes = useStyles();
  const indentClasses = useIndentStyles();

  const createGreedItem = ({ id, title, level, firstUsed, lastUsed }) => (
    <Grid key={ id } item md={ 3 } sm={ 4 } xl={ 2 } xs={ 12 } lg={ 2 }>
      <SkillPaper title={ title } level={ level } firstUsed={ firstUsed } lastUsed={ lastUsed }/>
    </Grid>
  );

  const skillList = [{
    firstUsed: 2018,
    id: 1,
    lastUsed: 2020,
    level: 50,
    title: 'Kanban'
  }, {
    firstUsed: 2018,
    id: 2,
    lastUsed: 2020,
    level: 50,
    title: 'Scrum'
  }, {
    firstUsed: 2018,
    id: 3,
    lastUsed: 2018,
    level: 40,
    title: 'MongoDB'
  }, {
    firstUsed: 2015,
    id: 4,
    lastUsed: 2017,
    level: 60,
    title: 'Drupal'
  }, {
    firstUsed: 2014,
    id: 5,
    lastUsed: 2015,
    level: 60,
    title: 'Joomla'
  }, {
    firstUsed: 2013,
    id: 6,
    lastUsed: 2017,
    level: 60,
    title: 'Java'
  }, {
    firstUsed: 2018,
    id: 7,
    lastUsed: 2019,
    level: 80,
    title: 'Swagger'
  }, {
    firstUsed: 2013,
    id: 8,
    lastUsed: 2017,
    level: 60,
    title: 'Java SE'
  }, {
    firstUsed: 2013,
    id: 9,
    lastUsed: 2017,
    level: 60,
    title: 'C#'
  }, {
    firstUsed: 2013,
    id: 10,
    lastUsed: 2017,
    level: 50,
    title: 'MS Visual Studio'
  }, {
    firstUsed: 2011,
    id: 11,
    lastUsed: 2020,
    level: 50,
    title: 'Linux'
  }, {
    firstUsed: 2011,
    id: 12,
    lastUsed: 2020,
    level: 60,
    title: 'MS Windows'
  }, {
    firstUsed: 2009,
    id: 13,
    lastUsed: 2020,
    level: 50,
    title: 'MS Word'
  }, {
    firstUsed: 2009,
    id: 14,
    lastUsed: 2020,
    level: 50,
    title: 'MS Excel'
  }, {
    firstUsed: 2016,
    id: 15,
    lastUsed: 2017,
    level: 40,
    title: 'React Native'
  }, {
    firstUsed: 2015,
    id: 16,
    lastUsed: 2020,
    level: 70,
    title: 'Git'
  }, {
    firstUsed: 2017,
    id: 17,
    lastUsed: 2018,
    level: 70,
    title: 'GitLab'
  }, {
    firstUsed: 2016,
    id: 18,
    lastUsed: 2020,
    level: 70,
    title: 'GitHub'
  }, {
    firstUsed: 2018,
    id: 19,
    lastUsed: 2020,
    level: 70,
    title: 'Bitbucket'
  }, {
    firstUsed: 2014,
    id: 20,
    lastUsed: 2020,
    level: 90,
    title: 'AJAX'
  }, {
    firstUsed: 2018,
    id: 21,
    lastUsed: 2019,
    level: 30,
    title: 'nginx'
  }, {
    firstUsed: 2015,
    id: 22,
    lastUsed: 2020,
    level: 80,
    title: 'ECMAScript'
  }, {
    firstUsed: 2015,
    id: 23,
    lastUsed: 2020,
    level: 80,
    title: 'JavaScript'
  }, {
    firstUsed: 2019,
    id: 24,
    lastUsed: 2020,
    level: 60,
    title: 'Angular'
  }, {
    firstUsed: 2018,
    id: 25,
    lastUsed: 2020,
    level: 60,
    title: 'AngularJS'
  }
];

  return (
    <div className={ `${ indentClasses.main } ${ classes.root }` }>
      <Grid container spacing={ 3 }>
        { skillList.map(createGreedItem) }
      </Grid>
    </div>
  );
}
