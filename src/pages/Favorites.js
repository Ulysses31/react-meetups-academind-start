import { useContext, useEffect } from "react";
import AppContext from "../store/context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favorites() {
  const context = useContext(AppContext);
  const { getFavorites, favoritesList, totalFavorites } = context.favorites;

  useEffect(() => {
    getFavorites();
  }, []);

  let content;
  if (totalFavorites === 0) {
    content = (
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        You got no favorites yet.
      </h2>
    );
  } else {
    content = <MeetupList meetups={favoritesList} />;
  }

  return (
    <section>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Favorites <span className="text-slate-500 bg-slate-200 text-2xl p-2 rounded-full">{totalFavorites}</span>
          </h1>
        </div>
      </header>
      {content}
    </section>
  );
}
