import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { EducationPage } from './education';
import { HomePage } from './home';
import { SkillsPage } from './skills';
import { SummaryPage } from './summary';
import { WorkExperiencePage } from './workExperience';

import {
  Header,
  Footer,
  ALL_ROUTE_PATH,
  HOME_ROUTE_PATH,
  SUMMARY_ROUTE_PATH,
  EDUCATION_ROUTE_PATH,
  SKILLS_ROUTE_PATH,
  WORK_EXPERIENCE_ROUTE_PATH,
  HOME_ROUTE_TITLE,
  SUMMARY_ROUTE_TITLE,
  EDUCATION_ROUTE_TITLE,
  SKILLS_ROUTE_TITLE,
  WORK_EXPERIENCE_ROUTE_TITLE
} from './common'
import { Height } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh'
  }
});

export function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={ classes.root }>
        <header>
          <Header>
            <Link to={ HOME_ROUTE_PATH }>{ HOME_ROUTE_TITLE }</Link>
            <Link to={ SUMMARY_ROUTE_PATH }>{ SUMMARY_ROUTE_TITLE }</Link>
            <Link to={ SKILLS_ROUTE_PATH }>{ SKILLS_ROUTE_TITLE }</Link>
            <Link to={ EDUCATION_ROUTE_PATH }>{ EDUCATION_ROUTE_TITLE }</Link>
            <Link to={ WORK_EXPERIENCE_ROUTE_PATH }>{ WORK_EXPERIENCE_ROUTE_TITLE }</Link>
          </Header>
        </header>
        <main>
          <Switch>
            <Route path={ EDUCATION_ROUTE_PATH } exact component={ EducationPage } />
            <Route path={ HOME_ROUTE_PATH } exact component={ HomePage } />
            <Route path={ SKILLS_ROUTE_PATH } exact component={ SkillsPage } />
            <Route path={ SUMMARY_ROUTE_PATH } exact component={ SummaryPage } />
            <Route path={ WORK_EXPERIENCE_ROUTE_PATH } exact component={ WorkExperiencePage } />
            <Redirect from={ ALL_ROUTE_PATH } to={ HOME_ROUTE_PATH } />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
