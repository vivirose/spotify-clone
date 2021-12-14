export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = window.location.origin;
const clientId = '0e25f14500c1485d9e1a7deda23dcac1'; // hotmail'208553d2bcaa4aa5b5938b3e5d5adbeb'; // vivien.marconlin@gmail"0e25f14500c1485d9e1a7deda23dcac1";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  
  export const getTokenFromUrl=() => {
      return window.location.hash
      .substring(14)
      .split('&')[0]    
  }
  
  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

