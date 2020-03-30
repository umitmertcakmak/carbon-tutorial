import React from 'react';

import { Tile } from 'carbon-components-react';

import { HBarChartComponent } from '../../components/ChartComponents';

class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <Tile>
          <h2 className="landing-page__subheading">Customer Information</h2>

          <p>Name: {this.props.name} </p>

          <p>Service Address: {this.props.serviceAddress}</p>

          <p>Primary Phone: {this.props.primaryPhone}</p>
        </Tile>
      </div>
    );
  }
}

class LikelyOutcome extends React.Component {
  render() {
    return (
      <div>
        <Tile>
          <h2 className="landing-page__subheading">Likely Outcome</h2>

          <p>{this.props.likelyoutcome} </p>
        </Tile>
      </div>
    );
  }
}

class Factors extends React.Component {
  render() {
    return (
      <div>
        <Tile>
          <h2 className="landing-page__subheading">Factors</h2>
          <HBarChartComponent />
        </Tile>
      </div>
    );
  }
}

class OpenScale extends React.Component {
  render() {
    return (
      <div>
        <Tile>
          <h2 className="landing-page__subheading">Compare to Bias Output</h2>
          <p>{this.props.bias}</p>
        </Tile>
      </div>
    );
  }
}

class ClaimResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'neils',
      serviceAddress: 'address line',
      primaryPhone: '122522',
      likelyoutcome: 'Approved',
      bias: 'Bias free',
    };
  }

  render() {
    return (
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row claim-assessment__padding" />

        <div className="bx--row claim-assessment__form-element">
          <div className="bx--col-lg-5">
            <CustomerInfo
              name={this.state.name}
              serviceAddress={this.state.serviceAddress}
              primaryPhone={this.state.primaryPhone}
            />
          </div>
          <div className="bx--col-lg-5">
            <LikelyOutcome likelyoutcome={this.state.likelyoutcome} />
          </div>
        </div>
        <div className="bx--row claim-assessment__form-element">
          <div className="bx--col-lg-5">
            <Factors />
          </div>
          <div className="bx--col-lg-5">
            <OpenScale bias={this.state.bias} />
          </div>
        </div>

        <div className="bx--row claim-assessment__padding" />

        {/*<InfoSection heading="The Principles" className="landing-page__r3">*/}
        {/*  <InfoCard*/}
        {/*    heading="Carbon is Open"*/}
        {/*    body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."*/}
        {/*    icon={<PersonFavorite32 />}*/}
        {/*  />*/}
        {/*  <InfoCard*/}
        {/*    heading="Carbon is Modular"*/}
        {/*    body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."*/}
        {/*    icon={<Application32 />}*/}
        {/*  />*/}
        {/*  <InfoCard*/}
        {/*    heading="Carbon is Consistent"*/}
        {/*    body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."*/}
        {/*    icon={<Globe32 />}*/}
        {/*  />*/}
        {/*</InfoSection>*/}
      </div>
    );
  }
}

export default ClaimResult;
