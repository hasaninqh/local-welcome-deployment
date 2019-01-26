import React, { Component } from 'react';
import { Button } from 'reactstrap';
import TableSetup from '../TableSetup';
import RecipePreparation from '../RecipePreparation';
//import CleaningUp from '../CleaningUp';
import CleaningUpWelcomePage from '../CleaningUpWelcomePage';
import './DashboardPage.css';
export default class DashboardPage extends Component {
  state = {
    mainStep: 0,
  };
  setStepTo1 = () => this.setState({ mainStep: 1 });
  setStepTo2 = () => this.setState({ mainStep: 2 });
  setStepTo3 = () => this.setState({ mainStep: 3 });
  setStepTo0 = () => this.setState({ mainStep: 0 });
  currentComponent = step => {
    switch (this.state.mainStep) {
      case 1:
        return <TableSetup setStepTo2={this.setStepTo2} />;
      case 2:
        return (
          <RecipePreparation
            setStepTo3={this.setStepTo3}
            mainStep={this.state.mainStep}
          />
        );
      case 3:
        return (
          <CleaningUpWelcomePage
            setStepTo0={this.setStepTo0}
            setStepTo3={this.setStepTo3}
            mainStep={this.state.mainStep}
          />
        );
      default:
        return <h1> You are ready to start the event </h1>;
    }
  };
  render() {
    return (
      <div className="dashboardWrapper">
        {this.state.mainStep == 0 ? (
          <h1 className="head-title">Welcome to Cook and Eat Ritual!</h1>
        ) : null}
        {this.currentComponent(this.state.mainStep)}
        <div className="dashboard_btn_container">
          <Button
            onClick={this.setStepTo1}
            className={
              (this.state.mainStep === 1 ? 'active-class' : '') +
              ' dashboard mr-2 mt-2 mb-2'
            }
          >
            {' '}
            Table setup{' '}
          </Button>
          <Button
            id="table-setup"
            onClick={this.setStepTo2}
            className={
              (this.state.mainStep === 2 ? 'active-class' : '') +
              ' dashboard mr-2 mt-2 mb-2'
            }
            disabled={this.state.mainStep < 2}
          >
            {' '}
            Recipe preparation{' '}
          </Button>
          <Button
            onClick={this.setStepTo3}
            className={
              (this.state.mainStep === 3 ? 'active-class' : '') +
              ' dashboard mt-2 mb-2'
            }
            disabled={this.state.mainStep != 3}
          >
            Cleaning up
          </Button>
        </div>
      </div>
    );
  }
}
