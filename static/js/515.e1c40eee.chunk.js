"use strict";(self.webpackChunkcheckers_online_frontend=self.webpackChunkcheckers_online_frontend||[]).push([[515],{2940:function(e,n,a){var o=a(1413),s=a(2791),i=a(7689),r=a(9434),l=a(3880),t=a(7633),c=a(5171),d=a(184);n.Z=function(e){return function(n){var a=(0,r.v9)(l.c7),m=(0,r.v9)(l.rK),u=(0,r.I0)();return(0,c.GL)()!==m?(u((0,l.rG)()),(0,d.jsx)(i.Fg,{to:"/login"})):(s.useEffect((function(){m&&!a&&u((0,l.x$)(m))})),m&&!a?(0,d.jsx)(t.Z,{}):a?(0,d.jsx)(e,(0,o.Z)({},n)):(0,d.jsx)(i.Fg,{to:"/login"}))}}},1515:function(e,n,a){a.r(n),a.d(n,{default:function(){return ne}});var o=a(2791),s=a(2940),i=a(1413),r=a(2777),l=a(3211),t=a(9529),c="ProfilePage_userPhotoAndLoginBlock__1JfNh",d="ProfilePage_nameBlock__pHmDX",m="ProfilePage_copy__PNjWm",u="ProfilePage_loader__ZSVJl",x="ProfilePage_gameCardBlock__jzv5s",j="ProfilePage_gamesBlockHeader__Z2CI4",f="ProfilePage_gameCard__xuvKm",g="ProfilePage_win__ywIdB",p="ProfilePage_lose__VoJT8",h="ProfilePage_waiting__6+o21",_="ProfilePage_ready__jbGYu",Z="ProfilePage_user__-XiU2",v="ProfilePage_gameId__-KLAl",C=a(5507),P=a(9439),G=a(9538),k=a(50),y=a(8409),M=a(5278),N=a(532),b=a(3281),T=a(8301),I=a(6202),O=a(106),L=a(2892),B=a(7027),w=a(7309),F=a(3020),K=a(3317),E=a(3414),S=a(184),z=F.Z.Text,W=function(e){var n=e.messageApi,a=e.createdGameId,o=e.onCreateNewGameModalClose,s=e.isCreateGameModalOpen;return(0,S.jsx)(K.Z,{title:"\u0418\u0433\u0440\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430",open:s,closable:!1,centered:!0,onCancel:o,footer:[(0,S.jsx)(w.Z,{type:"primary",onClick:o,children:"OK"},"okButton")],children:(0,S.jsxs)("div",{children:[(0,S.jsx)(z,{children:"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u0433\u0440\u044b \u0432\u0430\u0448 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f\xbb \u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0438\u0433\u0440\u044b:"}),(0,S.jsx)("br",{}),(0,S.jsx)(z,{children:"id: "}),(0,S.jsx)(L.Z,{title:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",children:(0,S.jsxs)(z,{code:!0,onClick:function(){navigator.clipboard.writeText(String(a)).then((function(){n.open({type:"success",content:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e",duration:2})}))},className:m,children:[a,"\xa0",(0,S.jsx)(E.Z,{})]})})]})})},q=a(7038),A=a(3288),X=a(7689),D=F.Z.Text,H=function(e){var n=e.isConnectGameModalOpen,a=e.isConnectGameLoading,s=e.connectedGameId,i=e.connectGameError,r=e.setConnectToGameModalOpened,l=e.onConnectToGameModalFormSubmit,t=q.Z.useForm(),c=(0,P.Z)(t,1)[0],d=(0,X.s0)();(0,o.useEffect)((function(){s&&(r(!1),d("/game/"+s))}),[s]);var m=function(){c.resetFields(),r(!1)};return(0,S.jsx)(K.Z,{title:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0438\u0433\u0440\u0435",open:n,centered:!0,onCancel:m,footer:[(0,S.jsx)(w.Z,{type:"default",onClick:m,children:"\u041e\u0442\u043c\u0435\u043d\u0430"},"cancel"),(0,S.jsx)(w.Z,{type:"primary",onClick:function(){return c.submit()},loading:a,children:"OK"},"ok")],children:(0,S.jsxs)("div",{children:[(0,S.jsx)(D,{children:"\u0414\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0438\u0433\u0440\u0435 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0451 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440"}),(0,S.jsx)("br",{}),(0,S.jsx)(q.Z,{onFinish:function(){l(c.getFieldValue("gameId"))},form:c,requiredMark:!1,children:(0,S.jsx)(q.Z.Item,{label:"id",name:"gameId",validateStatus:i?"error":"success",help:i,rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0438\u0433\u0440\u044b"}],children:(0,S.jsx)(A.Z,{size:"small",min:1})})})]})})},J=a(1087),R=a(7633),V=function(e){var n,a,o=e.game,s=o.status;return s===G.Bh?(s="\u041e\u0436\u0438\u0434\u0430\u0435\u043c \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430",n=(0,S.jsx)(k.Z,{}),a=h):s===G.pe&&o.playerColor===I.Rq||s===G.fO&&o.playerColor===I.tD?(s="\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438",n=(0,S.jsx)(y.Z,{}),a=g):s===G.pe||s===G.fO?(s="\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438",n=(0,S.jsx)(M.Z,{}),a=p):s===G.Ru&&o.playerColor===I.Rq||s===G.BO&&o.playerColor===I.tD?(s="\u0412\u0430\u0448 \u0445\u043e\u0434",n=(0,S.jsx)(N.Z,{}),a=_):(s="\u0425\u043e\u0434 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430",n=(0,S.jsx)(k.Z,{}),a=h),(0,S.jsx)(J.OL,{to:"/game/"+o.id,children:(0,S.jsxs)(O.Z,{className:f+" "+a,children:[n,"\xa0\xa0",o.opponentId&&(0,S.jsxs)(L.Z,{title:"id: "+o.opponentId,children:[(0,S.jsx)("span",{className:Z,children:o.opponentLogin}),"\xa0"]}),(0,S.jsx)("span",{children:s}),"\xa0",(0,S.jsxs)("span",{className:v,children:["(id: ",o.id,")"]})]})})},Q=function(e){var n=e.games,a=e.isGamesListLoading,o=e.isCreateGameLoading,s=e.onCreateNewGameButtonClick,r=e.setConnectToGameModalOpened,l=e.createGameModalProps,t=e.connectToGameModalProps,c=B.ZP.useMessage(),d=(0,P.Z)(c,2),m=d[0],f=d[1],g=[];return!a&&n&&n!==[]&&(g=n.map((function(e){return(0,S.jsx)(V,{game:e},e.id)}))),(0,S.jsxs)("div",{children:[f,(0,S.jsxs)("div",{className:j,children:[(0,S.jsx)(C.Z,{level:2,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0430\u0440\u0442\u0438\u0439"}),(0,S.jsxs)("div",{children:[(0,S.jsx)(w.Z,{loading:o,type:"text",icon:(0,S.jsx)(b.Z,{}),onClick:s,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),(0,S.jsx)(w.Z,{type:"text",icon:(0,S.jsx)(T.Z,{}),onClick:function(){return r(!0)},children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})]})]}),a?(0,S.jsx)("div",{className:u,children:(0,S.jsx)(R.Z,{message:"\u041f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435",size:"medium"})}):(0,S.jsx)("div",{className:x,children:g}),(0,S.jsx)(W,(0,i.Z)({messageApi:m},l)),(0,S.jsx)(H,(0,i.Z)({},t))]})},U=function(e){var n=e.login;return(0,S.jsxs)("div",{className:c,children:[(0,S.jsx)(l.C,{size:100,icon:(0,S.jsx)(t.Z,{})}),(0,S.jsx)("div",{className:d,children:(0,S.jsx)(C.Z,{level:2,children:n})})]})},Y=function(e){var n=e.login,a=e.gamesBlockProps;return(0,S.jsxs)(r.Z,{children:[(0,S.jsx)(U,{login:n}),(0,S.jsx)(Q,(0,i.Z)({},a))]})},$=a(9434),ee=a(3880),ne=(0,s.Z)((function(){var e=(0,$.v9)(ee.KN),n=(0,$.v9)(G.NN),a=(0,$.v9)(G.cE),s=(0,$.v9)(G.WT),i=(0,$.v9)(G.Pf),r=(0,$.v9)(G.XT),l=(0,$.v9)(G.fg),t=(0,$.v9)(G.kr),c=(0,$.v9)(G.h4),d=(0,$.v9)(G.FF),m=(0,$.I0)();(0,o.useEffect)((function(){null===n&&m((0,G.ns)())}));var u=function(e){m((0,G.bk)(e))},x={games:n,isGamesListLoading:a,isCreateGameLoading:s,onCreateNewGameButtonClick:function(){m((0,G.ae)())},setConnectToGameModalOpened:u,createGameModalProps:{createdGameId:i,onCreateNewGameModalClose:function(){m((0,G.av)(!1)),m((0,G.ns)())},isCreateGameModalOpen:r},connectToGameModalProps:{isConnectGameModalOpen:l,isConnectGameLoading:t,connectedGameId:c,connectGameError:d,setConnectToGameModalOpened:u,onConnectToGameModalFormSubmit:function(e){m((0,G.Ls)(e))}}};return(0,S.jsx)(Y,{login:e,gamesBlockProps:x})}))},2777:function(e,n,a){a.d(n,{Z:function(){return f}});a(2791);var o=a(9529),s=a(8961),i=a(8586),r=a(9356),l="TemplatePageWithMenu_wrapper__ixbQB",t="TemplatePageWithMenu_sidebar__yXlI7",c="TemplatePageWithMenu_content__Mc3IK",d=a(7689),m=a(9434),u=a(1347),x=a(184),j=[{label:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",icon:(0,x.jsx)(o.Z,{}),key:"/profile"},{label:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0438\u0433\u0440\u044b",icon:(0,x.jsx)(s.Z,{}),key:"games",children:[{label:"\u0418\u0433\u0440\u0430",icon:(0,x.jsx)(i.Z,{}),key:"/game"},{label:"\u0418\u0433\u0440\u0430",icon:(0,x.jsx)(i.Z,{}),key:"/game/1"},{label:"\u0418\u0433\u0440\u0430",icon:(0,x.jsx)(i.Z,{}),key:"/game/2"}]}],f=function(e){var n=e.children,a=(0,d.s0)(),o=(0,d.TH)().pathname,s=(0,m.v9)(u.Ew),i=(0,m.I0)();return(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("div",{className:t,children:(0,x.jsx)(r.Z,{mode:"inline",defaultSelectedKeys:[o],defaultOpenKeys:s,items:j,onSelect:function(e){a(e.key)},onOpenChange:function(e){i((0,u.xz)(e))}})}),(0,x.jsx)("section",{className:c,children:n})]})}}}]);
//# sourceMappingURL=515.e1c40eee.chunk.js.map