import React from "react";
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>1.</strong>&nbsp;
        How are you?
      </span>
      <small>1 of 12</small>
    </p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
)

export default ActiveQuiz;