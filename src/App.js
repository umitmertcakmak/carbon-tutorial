import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import ClaimAssessment from './content/ClaimAssessment';
import ClaimResult from './content/ClaimResult';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={ClaimAssessment} />
            <Route path="/claimassessment" component={ClaimAssessment} />
            {/*<Route path="/claimresult" component={ClaimResult} />*/}
            {/*<Route path="/repos" component={RepoPage} />*/}
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
