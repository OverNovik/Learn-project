import React from "react";
import classes from './AnswersList.module.css';
import AnswersItem from "./AnswersItem/AnswersItem";

const AnswersList = props => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswersItem
            state={props.state ? props.state[answer.id] : null}
            key={index} 
            answer={answer}
            onAnswerClick={props.onAnswerClick}
          />
        )  
      })}
    </ul>
  )
}

export default AnswersList;