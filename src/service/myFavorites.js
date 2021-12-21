/**
 * 
 * @param {Object} favorite 
 */
export function addNewsToFavorite({ favorite }){
  if(localStorage.getItem('hna-myfavorites')){
    const favorites = JSON.parse(localStorage.getItem('hna-myfavorites'));
    favorites.push(favorite);
    localStorage.setItem('hna-myfavorites', JSON.stringify(favorites));
  } else {
    localStorage.setItem('hna-myfavorites', JSON.stringify([favorite]));
  }
}

export function removeNewsFormFavorite({ favorite }){
  if(localStorage.getItem('hna-myfavorites')){
    const favorites = JSON.parse(localStorage.getItem('hna-myfavorites'));
    const index = favorites.findIndex(f => f.story_id === favorite.story_id);
    favorites.splice(index, 1);
    localStorage.setItem('hna-myfavorites', JSON.stringify(favorites));
  }
}

export function isNewsFavorite({ story_id}){
  if(localStorage.getItem('hna-myfavorites')){
    const favorites = JSON.parse(localStorage.getItem('hna-myfavorites'));
    return favorites.some(f => f.story_id === story_id);
  }
  return false;
}

export function getFavorites(){
  if(localStorage.getItem('hna-myfavorites')){
    return JSON.parse(localStorage.getItem('hna-myfavorites'));
  }
  return [];
}