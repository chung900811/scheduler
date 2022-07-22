import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props){
  
  const interviewerList = props.interviewers.map((list) => {
    const {value, onChange} = props;
    return (
      <InterviewerListItem
      key = {list.id}
      name = {list.name}
      avatar = {list.avatar}
      selected = {list.id === value}
      setInterviewer = {() => onChange(list.id)}
      />
    
    )
  })

  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
      {interviewerList}
    </ul>
    </section>
  )}


// <section className="interviewers">
//   <h4 className="interviewers__header text--light">Interviewer</h4>
//   <ul className="interviewers__list"></ul>
// </section>