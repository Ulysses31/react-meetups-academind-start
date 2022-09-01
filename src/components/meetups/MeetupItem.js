// import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import AppContext from "../../store/context";

export default function MeetupItem(props) {
  const { id, image, title, address, description } = props;
  const context = useContext(AppContext);
  const itemIsFavorite = context.favorites.itemIsFavorite(id);

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      context.favorites.removeFavorite(id);
    } else {
      context.favorites.addFavorite({ id, image, title, address, description });
    }
  };

  const meetupDeleteHandler = (id) => {
    context.meetups.removeMeetup(id);
  };

  return (
    <Card>
      <figure className="m-5 md:flex md:max-w-2xl bg-slate-100 rounded-xl p-10 md:p-0 dark:bg-slate-800 shadow-lg">
        <img
          className="w-36 h-36 md:w-64 md:h-auto md:rounded-none rounded-full mx-auto"
          src={image}
          alt=""
          width="450"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{description}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{title}</div>
            <div className="text-slate-700 dark:text-slate-500">{address}</div>
          </figcaption>
          <div className="flex">
            <button
              type="submit"
              className="w-full justify-center ml-2 mr-2 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md"
              onClick={toggleFavoritesStatusHandler}
            >
              {itemIsFavorite ? "Not In Favorites" : "To Favorites"}
            </button>
            <button
              type="submit"
              className="w-full justify-center ml-2 mr-2 rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 shadow-md"
              onClick={() => meetupDeleteHandler(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </figure>
    </Card>
  );
}
