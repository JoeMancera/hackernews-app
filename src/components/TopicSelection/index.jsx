import React, { useRef } from "react";
import reactIcon from "assets/img/react.png";
import "./TopicSelection.css";

export default function TopicSelection({ onChange }) {
  const selectRef = useRef(localStorage.getItem("hna-lastFilter"));
  return (
    <select
      ref={selectRef}
      id="topic"
      placeholder="Select your news..."
      onChange={onChange}
    >
      <option value=""></option>
      <option
        style={{
          backgroundImage: `url(${reactIcon})`,
        }}
        className="selectIcon reactjs"
        value="reactjs"
      >
        ReactJS
      </option>
      <option className="selectIcon angulajs" value="angularjs">
        AngularJS
      </option>
      <option className="selectIcon vuejs" value="vuejs">
        VueJS
      </option>
    </select>
  );
}
