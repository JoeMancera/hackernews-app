import React from "react";
import reactIcon from "assets/img/react.png";
import "./TopicSelection.css";

export default function TopicSelection() {
  return (
    <select id="topic">
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
