import React from "react";
import DayListItem from "components/DayListItem";


export default function DayList(props){
  console.log(props)
  const dayList = props.days.map(list => {

    return (
      <DayListItem
      key = {list.id}
      name = {list.name}
      spots = {list.spots}
      selected = {list.name === props.value}
      setDay = {() => props.onChange(list.name)}
      />
    )
  })

  return (
    <ul>
      {dayList}
    </ul>
  )}

