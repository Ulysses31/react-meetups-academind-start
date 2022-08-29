import { useContext, useEffect } from "react";
import AppContext from "../store/context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favorites() {
  const context = useContext(AppContext);
  const { getFavorites, favoritesList, totalFavorites } = context.favorites;

  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content;
  if (totalFavorites === 0) {
    content = "You got no favorites yet.";
  } else {
    content = <MeetupList meetups={favoritesList} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
