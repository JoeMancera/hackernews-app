import React, { useState, useEffect } from "react";
import {
  addNewsToFavorite,
  removeNewsFormFavorite,
  isNewsFavorite,
} from "service/myFavorites";
import favoriteIcon from "assets/icons/favorite-inactive.svg";
import favoriteActiveIcon from "assets/icons/favorite-active.svg";
import "./FavoriteButton.css";

export default function FavoriteButton({ infoItem }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    if (isFavorite) {
      removeNewsFormFavorite({ favorite: infoItem });
    } else {
      addNewsToFavorite({ favorite: infoItem });
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(isNewsFavorite(infoItem));
  }, [infoItem, isFavorite]);

  return (
    <button className="favorite-button" onClick={handleClick}>
      <img
        src={isFavorite ? favoriteActiveIcon : favoriteIcon}
        alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
      />
    </button>
  );
}
