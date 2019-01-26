import React, { Component } from 'react';
import RecipeSlides from './RecipeSlides';
import {Button} from 'reactstrap';


class RecipeWelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToRecipeStep: false,
    };
  }

  render() {
    

    return this.state.goToRecipeStep === true ? (
      <RecipeSlides items={this.props.slides} setStepTo3={this.props.setStepTo3} setStepTo0={this.props.setStepTo0} mainStep={this.props.mainStep}/>
    ) : (
      <div className="welcomeWrapper">

<h4>Thanks for agreeing to lead a table. </h4>

<h4>We're going to cook a deliciously simple meal together in pairs.</h4>

<h4>All you need to do is read out the instructions to your guests. </h4>

<h4>As you follow each recipe step, we'd like everyone to answer some simple questions. It's a fun way to practice speaking english and chance to think about our goals for the future.</h4>

<h4>On the table in front of you should be all you need to follow the recipe, including one big metal bowl for dirty utensils, and another for all the waste.</h4>

          
            <Button className="start-btn"  onClick={()=>this.setState({goToRecipeStep:true})}>Start</Button>
      </div>
    );
  }
}

export default RecipeWelcomePage;