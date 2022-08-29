import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AppContext from "../../store/context";

export default function MainNavigation() {
  const context = useContext(AppContext);
  const { totalFavorites } = context.favorites;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites
            <span className={classes.badge}>{totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
