import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
    const dayClass = classNames("day-list__item",{
        "day-list__item--selected": props.selected,
        "day-list__item--full": props.spots===0,
    })

    return (
      <li className={dayClass} onClick={props.setDay} selected={props.selected}>
        <h2 className={dayClass}>{props.name}</h2> 
        <h3 className={dayClass}>{props.spots} spots remaining</h3>
      </li>
    );
  }



 