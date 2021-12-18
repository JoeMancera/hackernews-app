import React from "react";
import favoriteActiveIcon from "assets/icons/favorite-active.svg";
import timeIcon from "assets/icons/time-icon.svg";
import "./CardNews.css";

export default function CardNews({ newsInfo }) {
  return (
    <div className="card">
      <a
        className="card-body"
        href={newsInfo.story_url}
        target="_blank"
        rel="noreferrer"
      >
        <span className="card-author">
          <img className="icon-date" src={timeIcon} alt="Date:" />
          {newsInfo.difDate} by {newsInfo.author}
        </span>
        <h4 className="card-title">{newsInfo.story_title}</h4>
      </a>
      <button className="favorite-button">
        <img src={favoriteActiveIcon} alt="favorite" />
      </button>
    </div>
  );
}
