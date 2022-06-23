import React from "react";

import { ReactComponent as AddFavoritesButtonIcon } from "../../images/favoritebutton/save3d.svg";
import { ReactComponent as AddFavoritesButtonIconMarked } from "../../images/favoritebutton/save+.svg";
import { ReactComponent as RemoveFavoritesButtonIcon } from "../../images/favoritebutton/delete.svg";

function FavoritesButton({ className, onClick, locationPathname, isMarked }) {
  return (
    <button className={className} onClick={onClick}>
      {locationPathname === "/saved-movies" ? (
        <RemoveFavoritesButtonIcon />
      )
      :
      locationPathname === "/movies" && isMarked ? (
        <AddFavoritesButtonIconMarked />
      ) : (
        <AddFavoritesButtonIcon />
      )}
    </button>
  )
}

export default FavoritesButton;
