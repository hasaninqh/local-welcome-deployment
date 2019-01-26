import React, { Component } from 'react';
import RecipeSlides from './RecipeSlides.js';
import { Col, Button } from 'reactstrap';
import items from '../data/cleaningUpStep.json';

class CleaningUpWelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToCleaningStep: false,
    };
  }
  render() {
    return this.state.goToCleaningStep === true ? (
      <RecipeSlides
        items={items}
        mainStep={this.props.mainStep}
        setStepTo0={this.props.setStepTo0}
        setStepTo3={this.props.setStepTo3}
      />
    ) : (
      <Col sm={{ size: 'auto'}}>
        <div className="welcomeWrapper" style={{ textAlign: 'center' }}>
          <h1>Ready to clean up?</h1>
          <h2>Follow these instructions to find out how.</h2>

          <Button
            className="start-btn"
            onClick={() =>
              this.setState({
                goToCleaningStep: true,
              })
            }
          >
            Start
          </Button>
        </div>
      </Col>
    );
  }
}

export default CleaningUpWelcomePage;
