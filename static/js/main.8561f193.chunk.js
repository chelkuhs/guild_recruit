(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(77)},51:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var i=a(1),l=a.n(i),n=a(24),o=a.n(n),s=(a(51),a(15)),r=a(16),c=a(19),d=a(17),u=a(9),g=a(18),h=a(32),m=a.n(h);m.a.initializeApp({apiKey:"AIzaSyCfRNMojIm31NBzNqvRpyrtgXBV4l3NpLM",authDomain:"guild-recruit.firebaseapp.com",databaseURL:"https://guild-recruit.firebaseio.com",projectId:"guild-recruit",storageBucket:"guild-recruit.appspot.com",messagingSenderId:"39854529631",appId:"1:39854529631:web:84a8510aaaa11a1f"}),m.a.database();var f=m.a,p=a(78),E=a(79),b=a(80),v=a(81),y=a(82),S=a(83),k=a(41),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).checkUserLoggedIn=a.checkUserLoggedIn.bind(Object(u.a)(a)),a.state={userLoggedIn:!1},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.checkUserLoggedIn()}},{key:"checkUserLoggedIn",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){t?e.setState({userLoggedIn:!0}):e.setState({userLoggedIn:!1})})}},{key:"render",value:function(){return l.a.createElement(p.a,{sm:"4"},l.a.createElement(E.a,{body:!0,inverse:!0,className:"the-boxes",style:{backgroundColor:"#333",borderColor:"#FFF"}},l.a.createElement(b.a,{className:"guild-box"},l.a.createElement(v.a,{className:this.props.faction},this.props.guildname),l.a.createElement(y.a,{className:"text-muted"},this.props.server),l.a.createElement("hr",{className:"hr-divider"}),l.a.createElement(S.a,null,this.props.desc),this.state.userLoggedIn?[l.a.createElement(k.a,null,"Apply"),l.a.createElement(k.a,{className:"btn-spacing"},"Contact")]:" ")))}}]),t}(l.a.Component),N=a(31),O=a(84),C=a(85),D=a(105),j=a(86),R=a(87),M=a(88),G=a(89),F=a(90),A=a(91),w=a(92),I=a(93),T=a(94),P=a(95),L=a(96),x=a(97),H=a(45),B=a(98),W=a(99),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).logout=a.logout.bind(Object(u.a)(a)),a.toggleProfile=a.toggleProfile.bind(Object(u.a)(a)),a.updateUsername=a.updateUsername.bind(Object(u.a)(a)),a.setUserProfile=a.setUserProfile.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.getUserInfo=a.getUserInfo.bind(Object(u.a)(a)),a.getUserEmail=a.getUserEmail.bind(Object(u.a)(a)),a.toggleAddGuild=a.toggleAddGuild.bind(Object(u.a)(a)),a.toggleManageGuild=a.toggleManageGuild.bind(Object(u.a)(a)),a.addGuildToDB=a.addGuildToDB.bind(Object(u.a)(a)),a.toggleRegionSelect=a.toggleRegionSelect.bind(Object(u.a)(a)),a.toggleFactionSelect=a.toggleFactionSelect.bind(Object(u.a)(a)),a.setEditDisabled=a.setEditDisabled.bind(Object(u.a)(a)),a.setRegionEU=a.setRegionEU.bind(Object(u.a)(a)),a.setRegionNA=a.setRegionNA.bind(Object(u.a)(a)),a.setFactionA=a.setFactionA.bind(Object(u.a)(a)),a.setFactionH=a.setFactionH.bind(Object(u.a)(a)),a.checkData=a.checkData.bind(Object(u.a)(a)),a.ucFirst=a.ucFirst.bind(Object(u.a)(a)),a.getGuildInfo=a.getGuildInfo.bind(Object(u.a)(a)),a.state={profileModal:!1,addGuildModal:!1,manageGuildModal:!1,editDisabled:!0,profileUsername:"",profileEmail:"",profileDiscord:"",profileUid:"",guildName:"",guildNameError:"",guildRegion:"",guildRegionError:"",guildServer:"",guildServerError:"",guildDesc:"",guildDescError:"",guildFaction:"",guildFactionError:"",factionColor:"secondary",regionSelect:!1,factionSelect:!1,userHasGuild:!1},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getUserEmail()}},{key:"logout",value:function(){f.auth().signOut()}},{key:"updateUsername",value:function(e){this.setState({profileUsername:e})}},{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"ucFirst",value:function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}},{key:"setRegionEU",value:function(){this.setState({guildRegion:"EU"})}},{key:"setRegionNA",value:function(){this.setState({guildRegion:"NA"})}},{key:"setFactionA",value:function(){this.setState({guildFaction:"Alliance"}),this.setState({factionColor:"primary"})}},{key:"setFactionH",value:function(){this.setState({guildFaction:"Horde"}),this.setState({factionColor:"danger"})}},{key:"setEditDisabled",value:function(){this.setState(function(e){return{editDisabled:!e.editDisabled}})}},{key:"toggleProfile",value:function(){this.setState(function(e){return{profileModal:!e.profileModal}})}},{key:"toggleAddGuild",value:function(){this.setState(function(e){return{addGuildModal:!e.addGuildModal}})}},{key:"toggleManageGuild",value:function(){this.setState(function(e){return{manageGuildModal:!e.manageGuildModal}})}},{key:"toggleRegionSelect",value:function(){this.setState(function(e){return{regionSelect:!e.regionSelect}})}},{key:"toggleFactionSelect",value:function(){this.setState(function(e){return{factionSelect:!e.factionSelect}})}},{key:"checkData",value:function(){this.setState({guildDescError:"",guildNameError:"",guildRegionError:"",guildServerError:"",guildFactionError:"",successfulGuildLog:!1}),this.state.guildName?this.state.guildRegion?this.state.guildFaction?this.state.guildServer?this.state.guildDesc?this.state.guildName.length<3||this.state.guildName.length>24?this.setState({guildNameError:"Error in Guild Name length!"}):this.state.guildDesc.length>140?this.setState({guildDescError:"Description is too long!"}):this.state.guildDesc.length<10?this.setState({guildDescError:"Description is too short!"}):this.addGuildToDB():this.setState({guildDescError:"Description is blank!"}):this.setState({guildServerError:"Server is blank!"}):this.setState({guildFactionError:"Faction isn't chosen!"}):this.setState({guildRegionError:"Region isn't chosen!"}):this.setState({guildNameError:"Guild Name is empty!"})}},{key:"getUserEmail",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileEmail:t.email}),e.setState({profileUid:a}),f.firestore().collection("users").doc(e.state.profileUid).get().then(function(t){if(t.exists){var a=JSON.stringify(t.data()),i=JSON.parse(a);e.setState({profileUsername:i.username})}}),f.firestore().collection("guilds").doc(e.state.profileUid).get().then(function(t){t.exists?e.setState({userHasGuild:!0}):console.log("No guild exists for this user!")})}else t||console.log("No user!")})}},{key:"getUserInfo",value:function(){var e=this;f.firestore().collection("users").doc(this.state.profileUid).get().then(function(t){if(t.exists){var a=JSON.stringify(t.data()),i=JSON.parse(a);e.setState({profileUsername:i.username}),e.setState({profileDiscord:i.discord})}else console.log("No such document")}).catch(function(e){console.log("Error getting document from DB: ",e)})}},{key:"getGuildInfo",value:function(){var e=this;f.firestore().collection("guilds").doc(this.state.profileUid).get().then(function(t){if(t.exists){var a=JSON.stringify(t.data()),i=JSON.parse(a);e.setState({guildName:i.guildName,guildFaction:i.guildFaction,guildRegion:i.guildRegion,guildServer:i.guildServer,guildDesc:i.guildDesc}),console.log(i.guildFaction),console.log(i.guildRegion),console.log(i.guildServer),console.log(i.guildDesc)}else console.log("No such document!")}).catch(function(e){console.log("Error getting info from DB: ",e)})}},{key:"setUserProfile",value:function(){f.firestore().collection("users").doc(this.state.profileUid).set({username:this.state.profileUsername,discord:this.state.profileDiscord,email:this.state.profileEmail}).then(function(){console.log("Written to Firestore")}).catch(function(e){console.log("Error writing to DB: ",e)})}},{key:"addGuildToDB",value:function(){var e=this;f.firestore().collection("guilds").doc(this.state.profileUid).set({guildName:this.state.guildName,guildRegion:this.state.guildRegion,guildServer:this.ucFirst(this.state.guildServer),guildDesc:this.ucFirst(this.state.guildDesc),guildFaction:this.ucFirst(this.state.guildFaction)}).then(function(){console.log("Successfully written to Firestore"),e.toggleAddGuild(),e.setState({userHasGuild:!0})}).catch(function(e){console.log("Error writing to DB: ",e)})}},{key:"render",value:function(){var e=this;return[l.a.createElement(O.a,null,l.a.createElement(C.a,{href:"#",onClick:function(){e.toggleProfile(),e.getUserInfo()}}," ",this.state.profileUsername?this.state.profileUsername:"Loading.."," "),l.a.createElement(D.a,{isOpen:this.state.profileModal,toggle:this.toggleProfile},l.a.createElement(j.a,null,l.a.createElement(R.a,null,l.a.createElement(M.a,null,l.a.createElement(G.a,{style:{color:"#000"},for:"username"},"Username"),l.a.createElement(F.a,{type:"username",name:"profileUsername",value:this.state.profileUsername,onChange:this.handleChange,disabled:this.state.editDisabled})),l.a.createElement(M.a,null,l.a.createElement(G.a,{style:{color:"#000"},for:"email"},"Email"),l.a.createElement(F.a,{type:"email",name:"email",value:this.state.profileEmail,disabled:!0})),l.a.createElement(M.a,null,l.a.createElement(G.a,{style:{color:"#000"},for:"discord"},"Discord"),l.a.createElement(F.a,{type:"text",name:"profileDiscord",value:this.state.profileDiscord,onChange:this.handleChange,disabled:this.state.editDisabled}),l.a.createElement(A.a,{color:"muted"},"Example: chelk#4281")),l.a.createElement(k.a,{className:"btn-float-r btn-spacing",color:"secondary",onClick:this.toggleProfile},"Close"),this.state.editDisabled?l.a.createElement(k.a,{className:"btn-float-r btn-spacing",color:"info",onClick:this.setEditDisabled},"Edit"):l.a.createElement(k.a,{className:"btn-float-r btn-spacing",color:"success",onClick:function(){e.setEditDisabled(),e.setUserProfile(),e.toggleProfile()}},"Update"))))),l.a.createElement(w.a,{nav:!0,inNavbar:!0},l.a.createElement(I.a,{nav:!0,caret:!0},"Options"),l.a.createElement(T.a,{right:!0},this.state.userHasGuild?l.a.createElement(P.a,{onClick:function(){e.getGuildInfo(),e.toggleManageGuild()}}," Manage Guild "):l.a.createElement(P.a,{onClick:this.toggleAddGuild},"Add Guild"),l.a.createElement(D.a,{isOpen:this.state.manageGuildModal,toggle:this.toggleManageGuild},l.a.createElement(j.a,null,l.a.createElement(R.a,null,l.a.createElement(M.a,null,l.a.createElement(G.a,{style:{color:"#000"},for:"guildName"},"Guild Name"),l.a.createElement(F.a,{className:"info-font",type:"text",name:"guildName",defaultValue:this.state.guildName,disabled:!0})),l.a.createElement(M.a,null,l.a.createElement(G.a,{style:{color:"#000"},for:" guild"},"Guild Server"),l.a.createElement(L.a,null,l.a.createElement(x.a,{addonType:"prepend"},l.a.createElement(H.a,{className:"info-font"},this.state.guildFaction),l.a.createElement(H.a,{className:"info-font"},this.state.guildRegion)),l.a.createElement(F.a,{className:"info-font",type:"text",name:"guildName",defaultValue:this.state.guildServer,disabled:!0}))),l.a.createElement(M.a,null,l.a.createElement(G.a,{style:{color:"#000"},for:"guildDesc"},"Guild Description"),l.a.createElement(F.a,{className:"info-font",type:"text",name:"guildDesc",defaultValue:this.state.guildDesc,disabled:!0})),l.a.createElement(k.a,{className:"btn-float-r btn-spacing",color:"secondary",onClick:this.toggleManageGuild},"Close")))),l.a.createElement(D.a,{isOpen:this.state.addGuildModal,toggle:this.toggleAddGuild},l.a.createElement(j.a,null,l.a.createElement(R.a,null,l.a.createElement(M.a,null,l.a.createElement(B.a,{color:"danger",className:"badge-spacing visible"},this.state.guildNameError),l.a.createElement(F.a,{type:"text",name:"guildName",value:this.state.guildName,onChange:this.handleChange,placeholder:"Guild Name"})),l.a.createElement(M.a,null,l.a.createElement(B.a,{color:"danger",className:"badge-spacing visible"},this.state.guildFactionError,this.state.guildRegionError,this.state.guildServerError),l.a.createElement(L.a,null,l.a.createElement(W.a,{addonType:"append",isOpen:this.state.factionSelect,toggle:this.toggleFactionSelect},l.a.createElement(I.a,{color:this.state.factionColor},this.state.guildFaction?this.state.guildFaction:"Faction"),l.a.createElement(T.a,null,l.a.createElement(P.a,{onClick:this.setFactionA},"Alliance"),l.a.createElement(P.a,{onClick:this.setFactionH},"Horde"))),l.a.createElement(W.a,{addonType:"append",isOpen:this.state.regionSelect,toggle:this.toggleRegionSelect},l.a.createElement(I.a,null,this.state.guildRegion?this.state.guildRegion:"Region"),l.a.createElement(T.a,null,l.a.createElement(P.a,{onClick:this.setRegionEU},"EU"),l.a.createElement(P.a,{onClick:this.setRegionNA},"NA"))),l.a.createElement(F.a,{type:"text",name:"guildServer",value:this.state.guildServer,onChange:this.handleChange,placeholder:"Server Name"}))),l.a.createElement(M.a,null,l.a.createElement(B.a,{color:"danger",className:"badge-spacing visible"},this.state.guildDescError),l.a.createElement(F.a,{type:"text",name:"guildDesc",value:this.state.guildDesc,onChange:this.handleChange,placeholder:"Description"}),l.a.createElement(A.a,{color:this.state.guildDesc.length>140?"danger":"muted"},"Character count: ",this.state.guildDesc.length," / 140")),l.a.createElement(k.a,{className:"btn-float-r btn-spacing",color:"secondary",onClick:this.toggleAddGuild},"Close"),l.a.createElement(k.a,{className:"btn-float-r",color:"success",onClick:function(){e.state.successfulGuildLog,e.checkData()}},"Add")))),this.state.userHasGuild?l.a.createElement(P.a,null," Show Applicants"):l.a.createElement(P.a,null," Show Applications"),l.a.createElement(P.a,{divider:!0}),l.a.createElement(P.a,{onClick:this.logout},"Log Out")))]}}]),t}(l.a.Component),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).login=a.login.bind(Object(u.a)(a)),a.signup=a.signup.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.toggleLoginModal=a.toggleLoginModal.bind(Object(u.a)(a)),a.toggleRegisterModal=a.toggleRegisterModal.bind(Object(u.a)(a)),a.state={loginModal:!1,registerModal:!1,username:"",discord:"",email:"",password:"",uid:""},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"login",value:function(e){f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).catch(function(e){console.log(e)})}},{key:"signup",value:function(e){var t=this;f.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(){var e=f.auth().currentUser.uid;t.setState({uid:e}),f.firestore().collection("users").doc(t.state.uid).set({username:t.state.username,discord:t.state.discord,email:t.state.email}).then(function(){console.log("Document successfully written")}).catch(function(e){console.log(e)})})}},{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"toggleLoginModal",value:function(){this.setState(function(e){return{loginModal:!e.loginModal}})}},{key:"toggleRegisterModal",value:function(){this.setState(function(e){return{registerModal:!e.registerModal}})}},{key:"render",value:function(){var e=this;return[l.a.createElement(O.a,null,l.a.createElement(C.a,{href:"#",onClick:this.toggleRegisterModal}," Register "),l.a.createElement(D.a,{isOpen:this.state.registerModal,toggle:this.toggleRegisterModal},l.a.createElement(j.a,null,l.a.createElement(R.a,null,l.a.createElement(M.a,null,l.a.createElement(F.a,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),l.a.createElement(M.a,null,l.a.createElement(F.a,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})),l.a.createElement(M.a,null,l.a.createElement(F.a,{type:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username"})),l.a.createElement(M.a,null,l.a.createElement(F.a,{type:"text",name:"discord",value:this.state.discord,onChange:this.handleChange,placeholder:"Discord"}),l.a.createElement(A.a,{color:"muted"},"Example: chelk#4281"))),l.a.createElement(k.a,{className:"btn-float-r btn-spacing",color:"danger",onClick:this.toggleRegisterModal},"Close"),l.a.createElement(k.a,{className:"btn-float-r",color:"success",onClick:function(){e.signup(),e.toggleRegisterModal()}}," Register ")))),l.a.createElement(O.a,null,l.a.createElement(C.a,{href:"#",onClick:this.toggleLoginModal}," Login "),l.a.createElement(D.a,{isOpen:this.state.loginModal,toggle:this.toggleLoginModal},l.a.createElement(j.a,null,l.a.createElement(R.a,null,l.a.createElement(M.a,null,l.a.createElement(F.a,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),l.a.createElement(M.a,null,l.a.createElement(F.a,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"}))),l.a.createElement(k.a,{className:"btn-float-r btn-spacing",color:"danger",onClick:this.toggleLoginModal},"Close"),l.a.createElement(k.a,{className:"btn-float-r",color:"success",onClick:function(){e.login(),e.toggleRegisterModal()}}," Log in "),l.a.createElement("p",{className:"error-message",color:"danger"},this.props.error))))]}}]),t}(l.a.Component),V=a(100),z=a(101),q=a(102),K=a(103),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).toggleNav=a.toggleNav.bind(Object(u.a)(a)),a.authListener=a.authListener.bind(Object(u.a)(a)),a.state={isOpen:!1,user:{}},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"toggleNav",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"authListener",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"render",value:function(){return l.a.createElement(V.a,{className:"main-nav",color:"dark",dark:!0,expand:"md",sticky:"top"},l.a.createElement(z.a,{onClick:this.toggleNav}),l.a.createElement(q.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(K.a,{className:"ml-auto",navbar:!0},this.state.user?l.a.createElement(J,null):l.a.createElement(Q,null))))}}]),t}(l.a.Component),$=a(104),Y=(a(75),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getUserUID=a.getUserUID.bind(Object(u.a)(a)),a.guildInfo=a.guildInfo.bind(Object(u.a)(a)),a.state={profileUid:""},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.getUserUID(),this.guildInfo()}},{key:"getUserUID",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileUid:a})}})}},{key:"guildInfo",value:function(){f.firestore().collection("guilds").get().then(function(e){var t=e.docs.map(function(e){return e.data()});console.log(t);for(var a=0;a<t.length;a++)console.log(t[a].guildName)})}},{key:"render",value:function(){var e="guild-name -alliance",t="guild-name -horde";return l.a.createElement("div",{className:"main-div"},l.a.createElement($.a,null,l.a.createElement(U,{key:4,guildname:"HelloP",faction:e,server:"US-Sargeras",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:5,guildname:"WorldQ",faction:t,server:"US-Aerie Peak",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:6,guildname:"Test",faction:e,server:"EU-Ravenholdt",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"})),l.a.createElement(X,null),l.a.createElement($.a,null,l.a.createElement(U,{key:1,guildname:"HelloP",faction:e,server:"US-Sargeras",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:2,guildname:"WorldQ",faction:t,server:"US-Aerie Peak",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:3,guildname:"Test",faction:e,server:"EU-Ravenholdt",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"})),l.a.createElement($.a,null,l.a.createElement(U,{key:7,guildname:"HelloP",faction:e,server:"US-Sargeras",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:8,guildname:"WorldQ",faction:t,server:"US-Aerie Peak",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:9,guildname:"Test",faction:e,server:"EU-Ravenholdt",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"})),l.a.createElement($.a,null,l.a.createElement(U,{key:10,guildname:"HelloP",faction:e,server:"US-Sargeras",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:11,guildname:"WorldQ",faction:t,server:"US-Aerie Peak",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:12,guildname:"Test",faction:e,server:"EU-Ravenholdt",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"})),l.a.createElement($.a,null,l.a.createElement(U,{key:13,guildname:"HelloP",faction:e,server:"US-Sargeras",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:14,guildname:"WorldQ",faction:t,server:"US-Aerie Peak",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:15,guildname:"Test",faction:e,server:"EU-Ravenholdt",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"})),l.a.createElement($.a,null,l.a.createElement(U,{key:16,guildname:"HelloP",faction:e,server:"US-Sargeras",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:17,guildname:"WorldQ",faction:t,server:"US-Aerie Peak",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"}),l.a.createElement(U,{key:18,guildname:"Test",faction:e,server:"EU-Ravenholdt",desc:"This is a test description to tell you a little about our hardcore progressive raiding guild!"})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76);o.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.8561f193.chunk.js.map