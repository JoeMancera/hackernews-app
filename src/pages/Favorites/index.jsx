import React, { useEffect } from "react";
import { getFavorites } from "service/myFavorites";
import NewsList from "components/NewsList";

export default function Favorites() {
  const [favorites, setFavorites] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setFavorites(getFavorites());
    setLoading(false);
  }, []);

  return (
    <>
      <NewsList
        newsList={favorites}
        loading={loading}
        loadingNextPage={loading}
      />
    </>
  );
}
