import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { EducationPage } from './education';
import { HomePage } from './home';
import { SkillsPage } from './skills';
import { SummaryPage } from './summary';
import { WorkExperiencePage } from './workExperience';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path='/education' exact component={ EducationPage } />
        <Route path='/home' exact component={ HomePage } />
        <Route path='/skills' exact component={ SkillsPage } />
        <Route path='/summary' exact component={ SummaryPage } />
        <Route path='/work-experience' exact component={ WorkExperiencePage } />
        <Redirect from='/*' to='/home'/>
      </Switch>
    </Router>
  );
}
