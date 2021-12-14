export const initialState = {
  user: null,
  playlists:[],
  playing : false,
  item: null,
  // Gotta remove the token after developing
  // token: "BQA8TsH6QPKbJX2an2C07zDRpk8kC4tM8h9L0sBkTAKNIZ-hsRpA8jfpDSOE06GZqcEJjl7uRerSMsZTCWeuAbhVXXAlMSF-77jq4Y7nZVmNYmK8BCkMidlX0SGn3XhEc38zEpPMOIF_wn8nzdsvIJr5oehPv7UZmPtytn4B7WZJddgZ8F55",
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type){
    case "SET_USER":
      return{
        ...state,
        user: action.user,
      };

      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly: action.discover_weekly,
        };
      default:
        return state;
  }
}

export default reducer;