"use strict";(self.webpackChunkcheckers_online_frontend=self.webpackChunkcheckers_online_frontend||[]).push([[515],{584:function(e,n,o){o.d(n,{Z:function(){return x}});var a=o(1413),s=(o(2791),o(7689)),r=o(9434),i=o(2730),t=o(4692),l="LoadingPage_loadingContainer__karst",c="LoadingPage_loader__Z4Isg",d=o(184),m=function(){var e=(0,r.v9)(i.c7),n=(0,r.v9)(i.rK),o=(0,r.I0)();return n&&!e&&o((0,i.x$)(n)),(0,d.jsx)("div",{className:l,children:(0,d.jsx)(t.Z,{tip:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",size:"large",className:c})})},u=o(5171),x=function(e){return function(n){var o=(0,r.v9)(i.c7),t=(0,r.v9)(i.rK),l=(0,r.I0)(),c=(0,s.TH)().pathname.split("/")[1];return(0,u.GL)()!==t?(l((0,i.rG)()),(0,d.jsx)(s.Fg,{to:"/login"})):t&&!o?(0,d.jsx)(m,{}):"login"===c?o?(0,d.jsx)(s.Fg,{to:"/"}):(0,d.jsx)(e,(0,a.Z)({},n)):o?(0,d.jsx)(e,(0,a.Z)({},n)):(0,d.jsx)(s.Fg,{to:"/login"})}}},1515:function(e,n,o){o.r(n),o.d(n,{default:function(){return $}});o(2791);var a=o(584),s=o(1413),r=o(3704),i=o(3211),t=o(9529),l="ProfilePage_userPhotoAndLoginBlock__1JfNh",c="ProfilePage_nameBlock__pHmDX",d="ProfilePage_copy__PNjWm",m="ProfilePage_gameCardBlock__jzv5s",u="ProfilePage_gamesBlockHeader__Z2CI4",x="ProfilePage_gameCard__xuvKm",g="ProfilePage_win__ywIdB",j="ProfilePage_lose__VoJT8",p="ProfilePage_waiting__6+o21",f="ProfilePage_ready__jbGYu",_="ProfilePage_user__-XiU2",h="ProfilePage_gameId__-KLAl",v=o(5507),Z=o(9439),C=o(9538),P=o(50),G=o(8409),k=o(5278),N=o(532),M=o(3281),I=o(8301),y=o(6202),L=o(1243),T=o(2892),O=o(7027),b=o(7309),F=o(4692),B=o(3020),w=o(3317),K=o(3414),q=o(184),z=B.Z.Text,A=function(e){var n=e.messageApi,o=e.createdGameId,a=e.onCreateNewGameModalClose,s=e.isCreateGameModalOpen;return(0,q.jsx)(w.Z,{title:"\u0418\u0433\u0440\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430",open:s,closable:!1,footer:[(0,q.jsx)(b.Z,{type:"primary",onClick:a,children:"OK"})],children:(0,q.jsxs)("div",{children:[(0,q.jsx)(z,{children:"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u0433\u0440\u044b \u0432\u0430\u0448 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f\xbb \u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0438\u0433\u0440\u044b:"}),(0,q.jsx)("br",{}),(0,q.jsx)(z,{children:"id: "}),(0,q.jsx)(T.Z,{title:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",children:(0,q.jsxs)(z,{code:!0,onClick:function(){navigator.clipboard.writeText(String(o)).then((function(){n.open({type:"success",content:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e",duration:2})}))},className:d,children:[o,"\xa0",(0,q.jsx)(K.Z,{})]})})]})})},S=o(7038),D=o(3288),E=o(7689),H=B.Z.Text,R=function(e){var n=e.isConnectGameModalOpen,o=e.isConnectGameLoading,a=e.connectedGameId,s=e.connectGameError,r=e.setConnectToGameModalOpened,i=e.onConnectToGameModalFormSubmit,t=S.Z.useForm(),l=(0,Z.Z)(t,1)[0];if(a)return r(!1),(0,q.jsx)(E.Fg,{to:"/game"});return(0,q.jsx)(w.Z,{title:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0438\u0433\u0440\u0435",open:n,footer:[(0,q.jsx)(b.Z,{type:"default",onClick:function(){l.resetFields(),r(!1)},children:"\u041e\u0442\u043c\u0435\u043d\u0430"},"cancel"),(0,q.jsx)(b.Z,{type:"primary",onClick:function(){return l.submit()},loading:o,children:"OK"},"ok")],children:(0,q.jsxs)("div",{children:[(0,q.jsx)(H,{children:"\u0414\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0438\u0433\u0440\u0435 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0451 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440"}),(0,q.jsx)("br",{}),(0,q.jsx)(S.Z,{onFinish:function(){i(l.getFieldValue("gameId"))},form:l,requiredMark:!1,children:(0,q.jsx)(S.Z.Item,{label:"id",name:"gameId",validateStatus:s?"error":"success",help:s,rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0438\u0433\u0440\u044b"}],children:(0,q.jsx)(D.Z,{size:"small",min:1})})})]})})},X=function(e){var n,o,a=e.game,s=a.status;return s===C.Bh?(s="\u041e\u0436\u0438\u0434\u0430\u0435\u043c \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430",n=(0,q.jsx)(P.Z,{}),o=p):s===C.pe&&a.playerColor===y.Rq||s===C.fO&&a.playerColor===y.tD?(s="\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438",n=(0,q.jsx)(G.Z,{}),o=g):s===C.pe||s===C.fO?(s="\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438",n=(0,q.jsx)(k.Z,{}),o=j):s===C.Ru&&a.playerColor===y.Rq||s===C.BO&&a.playerColor===y.tD?(s="\u0412\u0430\u0448 \u0445\u043e\u0434",n=(0,q.jsx)(N.Z,{}),o=f):(s="\u0425\u043e\u0434 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430",n=(0,q.jsx)(P.Z,{}),o=p),(0,q.jsxs)(L.Z,{className:x+" "+o,children:[n,"\xa0\xa0",a.opponentId&&(0,q.jsxs)(T.Z,{title:"id: "+a.opponentId,children:[(0,q.jsx)("span",{className:_,children:a.opponentLogin}),"\xa0"]}),(0,q.jsx)("span",{children:s}),"\xa0",(0,q.jsxs)("span",{className:h,children:["(id: ",a.id,")"]})]})},J=function(e){var n=e.games,o=e.isGamesListLoading,a=e.isCreateGameLoading,r=e.onCreateNewGameButtonClick,i=e.setConnectToGameModalOpened,t=e.createGameModalProps,l=e.connectToGameModalProps,c=O.ZP.useMessage(),d=(0,Z.Z)(c,2),x=d[0],g=d[1],j=[];return!o&&n&&n!==[]&&(j=n.map((function(e){return(0,q.jsx)(X,{game:e},e.id)}))),(0,q.jsxs)("div",{children:[g,(0,q.jsxs)("div",{className:u,children:[(0,q.jsx)(v.Z,{level:2,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0430\u0440\u0442\u0438\u0439"}),(0,q.jsxs)("div",{children:[(0,q.jsx)(b.Z,{loading:a,type:"text",icon:(0,q.jsx)(M.Z,{}),onClick:r,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),(0,q.jsx)(b.Z,{type:"text",icon:(0,q.jsx)(I.Z,{}),onClick:function(){return i(!0)},children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})]})]}),o?(0,q.jsx)(F.Z,{tip:"\u041f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435"}):(0,q.jsx)("div",{className:m,children:j}),(0,q.jsx)(A,(0,s.Z)({messageApi:x},t)),(0,q.jsx)(R,(0,s.Z)({},l))]})},V=function(e){var n=e.login;return(0,q.jsxs)("div",{className:l,children:[(0,q.jsx)(i.C,{size:100,icon:(0,q.jsx)(t.Z,{})}),(0,q.jsx)("div",{className:c,children:(0,q.jsx)(v.Z,{level:2,children:n})})]})},W=function(e){var n=e.login,o=e.gamesBlockProps;return(0,q.jsxs)(r.Z,{children:[(0,q.jsx)(V,{login:n}),(0,q.jsx)(J,(0,s.Z)({},o))]})},U=o(9434),Y=o(2730),$=(0,a.Z)((function(){var e=(0,U.v9)(Y.KN),n=(0,U.v9)(C.NN),o=(0,U.v9)(C.cE),a=(0,U.v9)(C.WT),s=(0,U.v9)(C.Pf),r=(0,U.v9)(C.XT),i=(0,U.v9)(C.fg),t=(0,U.v9)(C.kr),l=(0,U.v9)(C.h4),c=(0,U.v9)(C.FF),d=(0,U.I0)();null===n&&d((0,C.ns)());var m=function(e){d((0,C.bk)(e))},u={games:n,isGamesListLoading:o,isCreateGameLoading:a,onCreateNewGameButtonClick:function(){d((0,C.ae)())},setConnectToGameModalOpened:m,createGameModalProps:{createdGameId:s,onCreateNewGameModalClose:function(){d((0,C.av)(!1)),d((0,C.ns)())},isCreateGameModalOpen:r},connectToGameModalProps:{isConnectGameModalOpen:i,isConnectGameLoading:t,connectedGameId:l,connectGameError:c,setConnectToGameModalOpened:m,onConnectToGameModalFormSubmit:function(e){d((0,C.Ls)(e))}}};return(0,q.jsx)(W,{login:e,gamesBlockProps:u})}))}}]);
//# sourceMappingURL=515.02682d39.chunk.js.map