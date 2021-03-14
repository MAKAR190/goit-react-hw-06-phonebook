import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import transition from "./transition.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";
class ContactList extends React.Component {
  static propTypes = {
    deleteContact: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  };
  render() {
    const { deleteContact, list } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {list.map((contact) => (
          <CSSTransition key={contact.id} classNames={transition} timeout={250}>
            <ContactItem deleteFunction={deleteContact} contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
const mapDispatchToProps = {
  deleteContact: deleteContact,
};
export default connect(null, mapDispatchToProps)(ContactList);
