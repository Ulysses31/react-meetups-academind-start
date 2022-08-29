import classes from "./MeetupItem.module.css";
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
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
          <button onClick={() => meetupDeleteHandler(id)}>Delete</button>
        </div>
      </Card>
    </li>
  );
}
