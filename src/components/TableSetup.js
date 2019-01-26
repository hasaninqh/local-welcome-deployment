
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import data from '../data/tableSetting.json';

class TableSetup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       activeIndex: 0 ,
       currentStep: 1,
       translateValue: 0,
       fadeIn: true,
       appear: false,
       modal: false
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === data.length? data.length: this.state.activeIndex + 1;

    this.setState({ activeIndex: nextIndex });
    //let currentIndex = index <= data.length?(index+1):(index=data.length+1)
    //console.log(nextIndex);
    let modal = nextIndex == data.length? this.handleModal() : null;
  
    return modal;
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? data.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
 

  handleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  // handleNextClick = index => {
  
  //   //  if (index<=data.length+1){
  //   //index = index + 1;
  //   let currentIndex = index <= data.length?(index+1):(index=data.length+1)
  //   let modal = currentIndex == data.length + 1 ? this.handleModal() : null;
  
  //   return modal;
  //   // if (index <= data.length) {
  //   //   this.setState(() => ({
  //   //     currentStep: index,
  //   //     translateValue: this.state.translateValue - this.slideWidth(),
  //   //   }));
  //   // } else {
  //   //   index = data.length + 1;
  //   //   console.log(index);
  //   //   console.log(index);
  //   //   let modal = index == data.length + 1 ? this.handleModal() : null;
  
  //   //   return modal;
  //   // }
  // }


  render() {
    const { activeIndex } = this.state;

    const slides = data.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.url}
          className="carousel-inner item"
        >
           <h3 className="caption">{item.title}</h3>
           <img src={item.url} alt={item.title} className="picture" />
         
          {/* <CarouselCaption captionText={item.title} captionHeader={item.title} /> */}
        </CarouselItem>
      );
    });

    return (
      <div>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
      
        <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        
      </Carousel>
      <div>
            <Modal
              isOpen={this.state.modal}
              modalTransition={{ timeout: 700 }}
              backdropTransition={{ timeout: 1300 }}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle} className="head-title">Local Welcome</ModalHeader>
              <ModalBody>
                
                  {' '}
               
                  <h1>
                    <p>You have completed this stage successfully.</p>
                    <p>You are now ready to move to the recipe preperation stage.</p>
                  </h1> 
              
              </ModalBody>
               <ModalFooter>
                <Button color="primary" onClick={this.props.setStepTo2}>
                  Next 
                </Button>{' '}
                
              </ModalFooter>
            </Modal>
          </div>
        </div>
    );
  }
}


export default TableSetup;
