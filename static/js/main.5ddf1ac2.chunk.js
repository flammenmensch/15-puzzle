(this["webpackJsonp15-puzzle"]=this["webpackJsonp15-puzzle"]||[]).push([[0],{25:function(e,n,t){e.exports=t(35)},30:function(e,n,t){},31:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r,a=t(6),o=t.n(a),c=t(21),i=t.n(c),u=t(24),l=t(22),s=(t(30),o.a.memo((function(e){var n=e.style,t=e.onClick;return o.a.createElement("div",{className:"tile",onClick:t,style:n})}))),d=(t(31),function(e){var n=e.tileWidth,t=e.tileHeight,r=e.gap,a=e.rows,c=e.cols,i=e.onTileClick;return o.a.createElement("div",{className:"board"},e.board.slice(0,-1).map((function(e,u){var l=e[0]*n+r,d=e[1]*t+r,f=u%a*n+r,v=Math.floor(u/c)*t+r;return o.a.createElement(s,{key:u,onClick:function(){i&&i(u)},style:{top:l,left:d,backgroundPosition:"-".concat(f,"px -").concat(v,"px")}})})))});!function(e){e.UP="up",e.DOWN="down",e.LEFT="left",e.RIGHT="right"}(r||(r={}));var f=function(e,n){var t=e+Math.random()*(n+1-e);return Math.floor(t)},v=t(2),m=t(17),E=t(16),b=[r.UP,r.DOWN,r.LEFT,r.RIGHT],h=function(e,n){return new Array(e*n).fill(0).map((function(t,r){return[Math.floor(r/e),r%n]}))},p=function(e,n,t){return new Array(n).fill(0).reduce((function(e){var n,r=(n=b)[f(0,n.length-1)],a=y(e,r,t);return O(e,a,t)}),e)},g=function(e){return e.length},O=function(e,n,t){if(function(e,n){return n<0||n>=g(e)}(e,n))return e;if(!function(e,n,t){var r=e[n],a=e[t];return r[0]===a[0]?1===Math.abs(r[1]-a[1]):r[1]===a[1]&&1===Math.abs(r[0]-a[0])}(e,n,t))return e;var r=Object(E.a)(e[n]),a=Object(E.a)(e[t]),o=Object(E.a)(e);return o[t]=r,o[n]=a,o},y=function(e,n,t){for(var a=function(e,n){switch(n){case r.UP:return[e[0]+1,e[1]];case r.DOWN:return[e[0]-1,e[1]];case r.LEFT:return[e[0],e[1]+1];case r.RIGHT:return[e[0],e[1]-1];default:return e}}(e[t],n),o=0;o<g(e);o++)if(e[o][0]===a[0]&&e[o][1]===a[1])return o;return t},I=function(e,n,t){var r={key:"game",initial:"ready",context:{moves:0,board:[],originalBoard:h(e,n),emptyIndex:t},states:{ready:{on:{"":{target:"unsolved",actions:["SHUFFLE"]}}},unsolved:{on:{MOVE:[{target:"solved",cond:"isSolved"},{target:"unsolved",internal:!0,actions:["MOVE_BY_DIRECTION","INCREMENT_MOVES"]}],CLICK:[{target:"solved",cond:"isSolved"},{target:"unsolved",internal:!0,actions:["MOVE_BY_INDEX","INCREMENT_MOVES"]}]}},solved:{type:"final"}}},a={guards:{isSolved:function(e){return function(e,n){return t=n,e.every((function(e,n){return e[0]===t[n][0]&&e[1]===t[n][1]}));var t}(e.board,e.originalBoard)}},actions:{SHUFFLE:Object(v.b)({board:function(e){return p(e.originalBoard,f(60,80),e.emptyIndex)}}),MOVE_BY_DIRECTION:Object(v.b)({board:function(e,n){var t=y(e.board,n.direction,e.emptyIndex);return O(e.board,t,e.emptyIndex)}}),MOVE_BY_INDEX:Object(v.b)({board:function(e,n){return O(e.board,n.index,e.emptyIndex)}}),INCREMENT_MOVES:Object(v.b)({moves:function(e){return e.moves+1}})}};return Object(m.a)(r,a)}(4,4,15),M=function(){var e=Object(l.useMachine)(I),n=Object(u.a)(e,2),t=n[0],a=n[1],c=o.a.useCallback((function(e){a({type:"CLICK",index:e})}),[a]);o.a.useEffect((function(){var e=function(e){var n=function(e){switch(e){case 37:return r.LEFT;case 38:return r.UP;case 39:return r.RIGHT;case 40:return r.DOWN;default:return null}}(e.keyCode);n&&a({type:"MOVE",direction:n})};return window.addEventListener("keyup",e),function(){return window.removeEventListener("keyup",e)}}),[a]);var i=t.matches("ready")?t.context.originalBoard:t.context.board;return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game__header"},t.matches("unsolved")&&o.a.createElement("span",null,"Moves: ",t.context.moves),t.matches("solved")&&o.a.createElement("span",null,"Congratulations!")),o.a.createElement(d,{rows:4,cols:4,tileWidth:100,tileHeight:100,gap:5,board:i,onTileClick:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(34);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5ddf1ac2.chunk.js.map