export default function AppReducer(state, action) {
  switch (action.type) {
    case "MEETUPS_LIST":
      console.log("MEETUPS_LIST", action);
      return {
        ...state,
        meetups: {
          meetupsList: action.payload
        }
      };
    case "MEETUPS_BYID":
      console.log("MEETUPS_BYID", action);
      return {
        ...state,
        meetups: {
          selectedMeetup: action.payload
        }
      };
    case "MEETUPS_INSERT":
      console.log("MEETUPS_INSERT", action);
      return {
        ...state,
        meetups: {
          meetupsList: [...state.meetups.meetupsList, action.payload]
        }
      };
    case "MEETUPS_UPDATE":
      break;
    case "MEETUPS_DELETE":
      console.log("MEETUPS_DELETE", action);
      return {
        ...state,
        meetups: {
          meetupsList: state.meetups.meetupsList.filter(
            (item) => item.id !== action.payload
          )
        }
      };
    case "FAVORITES_LIST":
      console.log("FAVORITES_LIST", action);
      return {
        ...state,
        favorites: {
          favoritesList: action.payload
        }
      };
    case "FAVORITES_BYID":
      console.log("FAVORITES_BYID", action);
      return {
        ...state,
        favorites: {
          selectedFavourite: action.payload
        }
      };
    case "FAVORITES_INSERT":
      console.log("FAVORITES_INSERT", action);
      return {
        ...state,
        favorites: {
          favoritesList: [...state.favorites.favoritesList, action.payload]
        }
      };
    case "FAVORITES_UPDATE":
      break;
    case "FAVORITES_DELETE":
      console.log("FAVORITES_DELETE", action);
      return {
        ...state,
        favorites: {
          favoritesList: state.favorites.favoritesList.filter(
            (item) => item.id !== action.payload
          )
        }
      };
    default:
      return state;
  }
}
