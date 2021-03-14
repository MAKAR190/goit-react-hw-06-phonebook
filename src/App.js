import React from "react";
import "./App.css";
import "./animations.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ConatctList";
import Filter from "./components/Filter/Filter";
import Layout from "./components/Layout/Layout";
import Alert from "./components/Alert/Alert";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { addContact } from "./redux/actions";

class App extends React.Component {
  state = {
    alert: false,
  };
  deleteAlert = () => [
    setTimeout(() => {
      this.setState({
        alert: false,
      });
    }, 3000),
  ];
  setAlert = () => {
    this.setState(
      {
        alert: true,
      },
      () => this.deleteAlert()
    );
  };
  handleSubmit = (contact) => {
    if (
      this.props.contacts.find(
        (el) => el.name === contact.name && el.number === contact.number
      )
    ) {
      this.setAlert();
    } else {
      this.props.addContact(contact);
    }
  };
  render() {
    const { alert } = this.state;

    return (
      <>
        <Layout title="Phonebook" />
        <ContactForm submit={this.handleSubmit} />
        <Filter />
        <CSSTransition
          classNames="fade"
          timeout={250}
          in={this.props.contacts.length > 0}
          unmountOnExit
        >
          <ContactList list={this.props.contacts} />
        </CSSTransition>
        <Alert alert={alert} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
