import { useContext } from "react";
import AppContext from "../store/context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favorites() {
  const context = useContext(AppContext);
  const { favoritesList, totalFavorites } = context.favorites;

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
