import React, { Component } from 'react';
import RecipeWelcomePage from './RecipeWelcomePage.js';
import item1 from '../data/chickPeaSaladSlides.json';
import item2 from '../data/tabboulehSlides.json';
import item3 from '../data/potatoRostisSlides.json';

import data from '../data/recipePreparation.json';
import { Col, Row, CardImg ,Button} from 'reactstrap';

class RecipePreparation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSelected: false
    };
  }

  render() {
   
    const filteredValue = data.filter(item => item.id);

    return this.state.recipeSelected === true ? (
      <RecipeWelcomePage slides={this.state.items} setStepTo3={this.props.setStepTo3} mainStep={this.props.mainStep} />
    ) : (
      <div>
        <Row className >
        <Col sm={{ size: 'auto'}} className="list-item">
            <CardImg top width="100%" src={filteredValue[0].url} />
            <Button
              className="item-list-view-btn"
              onClick={() =>
                this.setState({
                  recipeSelected: true,
                  items: item1,
                })
              }
            >
              {filteredValue[0].title}
            </Button>
          </Col>

          <Col sm={{ size: 'auto'}} className="list-item">
            <CardImg top width="100%" src={filteredValue[1].url} />
            <Button
              className="item-list-view-btn"
              onClick={() =>
                this.setState({
                  recipeSelected: true,
                  items: item2,
                })
              }
            >
              {filteredValue[1].title}
            </Button>
          </Col>

          <Col sm={{ size: 'auto'}}  className="list-item" >
            <CardImg top width="100%" src={filteredValue[2].url} />
            <Button
             className="item-list-view-btn"
              onClick={() =>
                this.setState({
                  recipeSelected: true,
                  items: item3,
                })
              }
            >
              {filteredValue[2].title}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RecipePreparation;

// <Link to="recipe">{filteredValue[0].title}</Link>
