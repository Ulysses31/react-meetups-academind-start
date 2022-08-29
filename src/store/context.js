import { createContext, useReducer } from "react";
import AppReducer from "./reducer";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 15, 145 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!"
  }
];

const initialState = {
  meetups: {
    meetupsList: DUMMY_DATA || [],
    totalMeetups: 0,
    getMeetups: () => {},
    addMeetup: (meetup) => {},
    updateMeetup: (id, meetup) => {},
    removeMeetup: (id) => {}
  },
  favorites: {
    favoritesList: [],
    totalFavorites: 0,
    getFavorites: () => {},
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (id) => {},
    itemIsFavorite: (id) => {}
  }
};

const AppContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const [userMeetups, setUserMeetups] = useState(DUMMY_DATA);

  //##### Meetups #####//
  const getMeetupsHandler = () => {
    dispatch({
      type: "MEETUPS_LIST",
      payload: state.meetups.meetupsList
    });
  };

  const addMeetupHandler = (meetup) => {
    dispatch({
      type: "MEETUPS_INSERT",
      payload: meetup
    });
  };

  const updateMeetupHandler = (id, meetup) => {
    setUserMeetups((prevUserMeetups) => {
      return prevUserMeetups.map((item) => {
        if (item.id === id) {
          return meetup;
        } else {
          return item;
        }
      });
    });
  };

  const removeMeetupHandler = (id) => {
    dispatch({
      type: "MEETUPS_DELETE",
      payload: id
    });
  };
  //##### Meetups #####//

  //##### Favourites #####//
  const getFavoritesHandler = () => {
    dispatch({
      type: "FAVORITES_LIST",
      payload: state.favorites.favoritesList
    });
  };

  const addFavoriteHandler = (favoriteMeetup) => {
    dispatch({
      type: "FAVORITES_INSERT",
      payload: favoriteMeetup
    });
  };

  const removeFavoriteHandler = (id) => {
    dispatch({
      type: "FAVORITES_DELETE",
      payload: id
    });
  };

  const itemIsFavoriteHandler = (id) => {
    return state.favorites.favoritesList.some((meetup) => meetup.id === id);
  };
  //##### Favourites #####//

  const context = {
    meetups: {
      meetupsList: state.meetups.meetupsList,
      totalMeetups: state.meetups.meetupsList.length,
      getMeetups: getMeetupsHandler,
      addMeetup: addMeetupHandler,
      updateMeetup: updateMeetupHandler,
      removeMeetup: removeMeetupHandler
    },
    favorites: {
      favoritesList: state.favorites.favoritesList,
      totalFavorites: state.favorites.favoritesList.length,
      getFavorites: getFavoritesHandler,
      addFavorite: addFavoriteHandler,
      removeFavorite: removeFavoriteHandler,
      itemIsFavorite: itemIsFavoriteHandler
    }
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
