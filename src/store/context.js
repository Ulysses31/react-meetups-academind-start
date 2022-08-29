import { createContext, useState } from "react";

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

const AppContext = createContext({
  meetups: {
    meetupsList: [],
    totalMeetups: 0,
    addMeetup: (meetup) => {},
    updateMeetup: (id, meetup) => {},
    removeMeetup: (id) => {}
  },
  favorites: {
    favoritesList: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (id) => {},
    itemIsFavorite: (id) => {}
  }
});

export const ContextProvider = ({ children }) => {
  const [userMeetups, setUserMeetups] = useState(DUMMY_DATA);
  const [userFavorites, setUserFavorites] = useState([]);

  //##### Meetups #####//
  const addMeetupHandler = (meetup) => {
    setUserMeetups((prevUserMeetups) => {
      return prevUserMeetups.concat(meetup);
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
    setUserMeetups((prevUserMeetups) => {
      return prevUserMeetups.filter((meetup) => meetup.id !== id);
    });
  };
  //##### Meetups #####//

  //##### Favourites #####//
  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (id) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== id);
    });
  };

  const itemIsFavoriteHandler = (id) => {
    return userFavorites.some((meetup) => meetup.id === id);
  };
  //##### Favourites #####//

  const context = {
    meetups: {
      meetupsList: userMeetups,
      totalMeetups: userMeetups.length,
      addMeetup: addMeetupHandler,
      updateMeetup: updateMeetupHandler,
      removeMeetup: removeMeetupHandler
    },
    favorites: {
      favoritesList: userFavorites,
      totalFavorites: userFavorites.length,
      addFavorite: addFavoriteHandler,
      removeFavorite: removeFavoriteHandler,
      itemIsFavorite: itemIsFavoriteHandler
    }
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
