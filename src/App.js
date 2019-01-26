import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DashboardPage from './components/pages/DashboardPage';
import FormikEnhancer from './components/FormikEnhancer';
import users from './data/login.json';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
      this.state = {
        isLoggedIn: false,
         modal: false
      };
        this.toggle = this.toggle.bind(this);
   }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return this.state.isLoggedIn ? (
      <DashboardPage />
    ) : (
      <div className="App">
         <h2 className="head-title">
          Hello, we are Local Welcome
         </h2>
          <p className="first-info">
           You are now ready to start the ritual eating event.
          </p>
          <p className="first-info">
            Please click on the button below to login
          </p>
           <Button color="success" onClick={this.toggle}>Login</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
               <ModalHeader toggle={this.toggle} style={{'color':'#8ac43f'}}>Local Welcome</ModalHeader>
               <ModalBody>
                 <FormikEnhancer handleLogin={this.handleLogin} />
               </ModalBody>
            </Modal>
           
     
      </div>
    );
  }
}

export default App;
