import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { EducationPaper } from '../../components';

import { useIndentStyles } from '../../../common';

const useStyles = makeStyles({
  root: {
    '& > div': {
      margin: '1rem 0'
    },
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem'
  }
});

export function EducationPage() {
  const classes = useStyles();
  const indentClasses = useIndentStyles();

  return (
    <div className={ `${ indentClasses.main } ${ classes.root }` }>
      <EducationPaper
        title='Saint Petersburg National Research University of Information Technologies, Mechanics and Optics'
        faculty='Faculty of Technological Management and Innovations'
        degree='Master'
        specialty='Web-technologies'
        startYear={ 2016 }
        endYear={ 2018 }
      />
      <EducationPaper
        title='Pavel Sukhoi State Technical University of Gomel'
        faculty='Automated And Information System'
        degree='Master'
        specialty='Mathematical modeling, numerical methods and program complexes'
        startYear={ 2014 }
        endYear={ 2015 }
      />
      <EducationPaper
        title='Pavel Sukhoi State Technical University of Gomel'
        faculty='Automated And Information System'
        degree='Specialist'
        specialty='Information technology, Information systems and technologies (in design and production)'
        startYear={ 2009 }
        endYear={ 2014 }
      />
    </div>
  );
};
