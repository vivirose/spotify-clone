(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(8),i=s.n(a),r=(s(25),s(2)),o=(s(26),s(27),function(){return window.location.hash.substring(14).split("&")[0]}),l="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("0e25f14500c1485d9e1a7deda23dcac1","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),j=s(0);var u=function(){return Object(j.jsxs)("div",{className:"Login",children:[Object(j.jsx)("img",{className:"Login__logo",src:"https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg",alt:"Spotify logo"}),Object(j.jsx)("a",{className:"Login__link",href:l,children:"LOGIN WITH SPOTIFY"})]})},b=s(11),d=s.n(b),m=o(),O=null;m&&((O=new d.a).setAccessToken(m),console.log("spotify",O));s(29);var h=function(e){var t=e.title,s=e.Icon;return Object(j.jsx)("div",{className:"sidebarOption",children:s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s,{className:"sidebarOption__icon"}),Object(j.jsx)("h4",{children:t})]}):Object(j.jsx)("p",{children:t})})},f=s(17),p=s.n(f),x=s(19),g=s.n(x),_=s(58);s(30);var v=function(e){var t=e.onSelectPlaylist,s=n.a.useState([]),a=Object(r.a)(s,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){O.getUserPlaylists().then((function(e){o(e.items)}))}),[]),Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("img",{className:"sidebar__logo",src:"https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg",alt:"Spotify logo"}),Object(j.jsxs)("div",{className:"sidebar__itemList",children:[Object(j.jsx)(h,{title:"Home",Icon:p.a}),Object(j.jsx)(h,{title:"Search",Icon:g.a}),Object(j.jsx)(h,{title:"Your Library",Icon:_.a}),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(j.jsx)("hr",{}),i.map((function(e){return Object(j.jsxs)("p",{className:"sidebar__playlist",onClick:function(){return t(e.id,e.name)},children:[" ",e.name]})}))]})]})},y=s(6),N=s.n(y),k=s(13);s(37);var S=function(e){var t=e.trackId,s=void 0===t?"0iifbrIaoCheb4HbbH4bwP":t,n=Object(c.useState)({}),a=Object(r.a)(n,2),i=a[0],o=a[1],l=Object(c.useState)(),u=Object(r.a)(l,2),b=u[0],d=u[1],m=Object(c.useState)(!1),h=Object(r.a)(m,2),f=h[0],p=h[1];function x(){return(x=Object(k.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=10;break}return p(!1),O.pause(),e.next=5,O.getMyCurrentPlayingTrack();case 5:t=e.sent,console.log("info",t),d(t),e.next=12;break;case 10:O.play({context_uri:i.album.uri,offset:{position:i.track_number-1},position_ms:(null===b||void 0===b?void 0:b.progress_ms)||0}),p(!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=Object(k.a)(N.a.mark((function e(t){var s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("next"!=t){e.next=5;break}return e.next=3,O.skipToNext();case 3:e.next=7;break;case 5:return e.next=7,O.skipToPrevious();case 7:return e.next=9,O.getMyCurrentPlayingTrack();case 9:s=e.sent,o(s.item);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("track",i),console.log("trackid",s),Object(c.useEffect)((function(){O.getTrack(s).then((function(e){o(e)}))}),[s]),Object(j.jsx)("div",{className:"footer",children:i.album?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"footer__left",children:[Object(j.jsx)("img",{src:i.album.images[1].url,className:"footer__albumCover"}),Object(j.jsxs)("div",{className:"footer__songInfo",children:[Object(j.jsx)("h4",{children:i.name}),Object(j.jsx)("p",{children:i.artists[0].name})]})]}),Object(j.jsxs)("div",{className:"footer__center",children:[Object(j.jsx)("button",{onClick:function(){return g("previous")},children:Object(j.jsx)("i",{className:"material-icons md-light",children:"skip_previous"})}),Object(j.jsx)("button",{onClick:function(){return x.apply(this,arguments)},children:f?Object(j.jsx)("i",{className:"material-icons md-light",children:"pause_circle"}):Object(j.jsx)("i",{className:"material-icons md-light",children:"play_circle_outline"})}),Object(j.jsx)("button",{onClick:function(){return g("next")},children:Object(j.jsx)("i",{className:"material-icons md-light",children:"skip_next"})})]})]}):Object(j.jsx)("p",{children:"'loading'"})})},w=s.p+"static/media/vivien.5052eaa5.png";s(38);function I(e){var t=e.query,s=e.setQuery;return Object(j.jsx)("input",{className:"header__search",type:"search",placeholder:"Artists, songs, or podcasts",value:t,onChange:function(e){return s(e.target.value)}})}var C=function(e){var t=e.query,s=e.setQuery;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(I,{query:t,setQuery:s}),Object(j.jsxs)("div",{className:"header__profile",children:[Object(j.jsx)("img",{className:"header__profilePicture",src:w,alt:"profile photo"}),Object(j.jsx)("p",{children:"Vivien Rose"})]})]})};s(39);var P=function(e){var t=e.styleName,s=e.songs,c=e.onSelectSong,n=e.playlistName;return Object(j.jsxs)("div",{className:t,children:[Object(j.jsx)("h1",{className:"songlist__title",children:n||"Songs"}),s.map((function(e){var t=e.track,s=t||e;return Object(j.jsxs)("div",{className:"songlist__songs",onClick:function(){return c(s.id)},children:[Object(j.jsx)("img",{className:"songlist__cover",src:s.album.images[2].url}),Object(j.jsxs)("div",{className:"songlist__info",children:[Object(j.jsx)("p",{className:"songlist__track",children:s.name}),Object(j.jsx)("p",{className:"songlist__artist",children:s.artists[0].name})]}),Object(j.jsx)("p",{className:"songlist__album",children:s.album.name})]})}))]})};s(40),s(41);var T=function(e){var t=e.artist;return Object(j.jsxs)("div",{className:"artist",children:[Object(j.jsx)("img",{className:"artist__photo",src:t.images[1].url}),Object(j.jsx)("h1",{className:"artist__name",children:t.name}),Object(j.jsx)("h5",{children:"ARTIST"})]})};var L=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)("37i9dQZF1DWVmps5U8gHNv"),i=Object(r.a)(a,2),o=i[0],l=i[1],u=Object(c.useState)(""),b=Object(r.a)(u,2),d=b[0],m=b[1],h=Object(c.useState)([]),f=Object(r.a)(h,2),p=f[0],x=f[1],g=Object(c.useState)(),_=Object(r.a)(g,2),y=_[0],N=_[1],k=Object(c.useState)("Essential Folk"),w=Object(r.a)(k,2),I=w[0],L=w[1];return Object(c.useEffect)((function(){O.getPlaylistTracks(o).then((function(e){var t=e.items;x(t)}))}),[o]),Object(c.useEffect)((function(){""!=s?O.search(s,["track","artist"]).then((function(e){console.log("result",e),x(e.tracks.items.slice(0,5)),m(e.artists.items[0])})):m("")}),[s]),Object(j.jsxs)("div",{className:"player",children:[Object(j.jsx)(C,{query:s,setQuery:n}),Object(j.jsx)(v,{onSelectPlaylist:function(e,t){l(e),L(t),m("")}}),d?Object(j.jsxs)("div",{className:"searchResults",children:[Object(j.jsx)(T,{artist:d}),Object(j.jsx)(P,{styleName:"searchResults__songlist",songs:p,onSelectSong:N})]}):Object(j.jsx)(P,{styleName:"songlist",playlistName:I,songs:p,onSelectSong:N}),Object(j.jsx)(S,{trackId:y})]})},F={token:o()},E=Object(c.createContext)(F),H=o();var Q=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){console.log("token",H),window.location.hash="",H&&n(H)}),[]),Object(j.jsx)(E.Provider,{value:F,children:Object(j.jsx)("div",{className:"app",children:s?Object(j.jsx)(L,{}):Object(j.jsx)(u,{})})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,59)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root")),q()}},[[42,1,2]]]);
//# sourceMappingURL=main.372ed545.chunk.js.map