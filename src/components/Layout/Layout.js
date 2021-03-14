import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import transition from "./transitionStyles.module.css";
import { CSSTransition } from "react-transition-group";
export default function Layout({ title }) {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, []);
  return (
    <>
      <CSSTransition in={inProp} classNames={transition} timeout={500}>
        <h1 className={styles.title}>{title}</h1>
      </CSSTransition>
    </>
  );
}
Layout.propTypes = {
  title: PropTypes.string,
};
Layout.defaultProps = {
  title: "",
};
