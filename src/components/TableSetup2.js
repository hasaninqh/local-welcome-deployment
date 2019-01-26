import React, { Component } from 'react';
import {
  Fade,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import data from '../data/tableSetting.json';
import TableSettingPagination from './TableSettingPagination.js';
import Next from './Next.js';
import Previous from './Previous.js';
class TableSetup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      translateValue: 0,
      fadeIn: true,
      appear: false,
      modal: false,
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleFade = this.handleFade.bind(this);
  }

  handleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  handleFade() {
    this.setState({
      fadeIn: !this.state.fadeIn,
    });
  }
  setCurrentStep = index => {
    //console.log(index);
    //let n = this.state.currentStep;
    this.setState({
      currentStep: index,
      appear: !this.state.appear,
      fadeIn: this.state.fadeIn,
    });
  };

  handleNextClick = index => {
    console.log(this.state.currentStep);
    //  if (index<=data.length+1){
    index = index + 1;
    //let currentIndex = index <= data.length?(index+1):(index=data.length+1)
    if (index <= data.length) {
      this.setState(() => ({
        currentStep: index,
        translateValue: this.state.translateValue - this.slideWidth(),
      }));
    } else {
      index = data.length + 1;
      console.log(index);
      console.log(index);
      let modal = index == data.length + 1 ? this.handleModal() : null;
  
      return modal;
    }
   
    //this.props.setStepTo2()
    // let modal= index == data.length+1 ? this.handleModal()  : null
  };

  //   this.props.setStepTo2();
  //   console.log(this.state.currentStep,currentIndex)

  //   let modal= currentIndex == data.length+1 ? this.handleModal()  : null
  //   console.log(modal)
  //  return modal

  //}

  handlePreviousClick = index => {
    let currentIndex = index > 1 ? index - 1 : (index = 1);
    //console.log(currentIndex)
    this.setState({
      currentStep: currentIndex,
      translateValue: this.state.translateValue + this.slideWidth(),
    });
  };

  slideWidth = () => {
    return document.querySelector('.picture').clientWidth;
  };
  render() {
    // console.log(data);

    const filteredItem = data.filter(
      image => image.id === this.state.currentStep
    );
    console.log(filteredItem);
    return (
      <Fade
        in={this.state.fadeIn}
        tag="h5"
        className="mt-3"
        onExiting={this.state.fadeIn}
      >
        <div>
          <h2>Welcome to Table setup</h2>
          {/* <div class="button-container"> */}
          <TableSettingPagination
            setCurrentStep={this.setCurrentStep}
            currentStep={this.state.currentStep}
          />
          {/* </div> */}
          <div className="middle">
            <div className="image-container">
              {data.map((image, i) => (
                <img
                  className="picture"
                  src={image.url}
                  alt={image.title}
                  style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s',
                  }}
                />
              ))}
              <Previous
                currentStep={this.state.currentStep}
                handlePreviousClick={this.handlePreviousClick}
              />
              <Next
                handleNextClick={this.handleNextClick}
                currentStep={this.state.currentStep}
                handleModal={
                  this.state.currentStep === data.length
                    ? this.handleModal
                    : null
                }
              />
            </div>

            <h1>
              {this.state.currentStep <= data.length
                ? filteredItem[0].title
                : null}
            </h1>
          </div>

          <div>
            <Modal
              isOpen={this.state.modal}
              modalTransition={{ timeout: 700 }}
              backdropTransition={{ timeout: 1300 }}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Local Welcome</ModalHeader>
              <ModalBody>
                <h1>
                  {' '}
                  Welcome to Cook and Eat Ritual! You complete this stage
                  successfully and you are ready to move to the second stage
                </h1>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.props.setStepTo2}>
                  Next Stage
                </Button>{' '}
                
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </Fade>
    );
  }
}

export default TableSetup2;
