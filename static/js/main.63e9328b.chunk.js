(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e){e.exports=[{id:1,server:"Atiesh"},{id:2,server:"Mankrik"},{id:3,server:"Myzrael"},{id:4,server:"Pagle"},{id:5,server:"Faerlina"},{id:6,server:"Fairbanks"},{id:7,server:"Herod"},{id:8,server:"Thalnos"},{id:9,server:"Whitemane"},{id:10,server:"Stalagg"},{id:11,server:"Blaumeux"},{id:12,server:"Skeram"},{id:13,server:"Bloodsail Buccaneers"},{id:14,server:"Grobbulus"},{id:15,server:"Ashkandi"},{id:16,server:"Azuresong"},{id:17,server:"Westfall"},{id:18,server:"Windseeker"},{id:19,server:"Bigglesworth"},{id:20,server:"Benediction"},{id:21,server:"Incendius"},{id:22,server:"Kirtonos"},{id:23,server:"Kurinaxx"},{id:24,server:"Kromcrush"},{id:25,server:"Rattlegore"},{id:26,server:"Smolderweb"},{id:27,server:"Sulfuras"},{id:28,server:"Thunderfury"},{id:29,server:"Deviant Delight"}]},47:function(e,t,a){e.exports=a(76)},52:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var l=a(1),i=a.n(l),n=a(26),s=a.n(n),r=(a(52),a(10)),o=a(11),c=a(14),d=a(12),u=a(4),g=a(13),h=a(32),m=a.n(h);m.a.initializeApp({apiKey:"AIzaSyCfRNMojIm31NBzNqvRpyrtgXBV4l3NpLM",authDomain:"guild-recruit.firebaseapp.com",databaseURL:"https://guild-recruit.firebaseio.com",projectId:"guild-recruit",storageBucket:"guild-recruit.appspot.com",messagingSenderId:"39854529631",appId:"1:39854529631:web:84a8510aaaa11a1f"}),m.a.database();var f=m.a,p=a(103),b=a(77),E=a(78),v=a(79),y=a(80),O=a(81),S=a(44),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).sendData=a.sendData.bind(Object(u.a)(a)),a.state={},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"sendData",value:function(){this.props.callback(!1)}},{key:"render",value:function(){return i.a.createElement(p.a,{isOpen:this.props.isShow,toggle:this.sendData},i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"username"},"Username"),i.a.createElement(O.a,{type:"username",name:"playerUsername",value:this.state.playerUsername,disabled:!0})),i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"email"},"Guild"),i.a.createElement(O.a,{type:"text",name:"guild",value:this.state.playerGuild,disabled:!0})),i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"discord"},"Discord"),i.a.createElement(O.a,{type:"text",name:"playerDiscord",value:this.state.playerDiscord,disabled:!0})),i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"secondary",onClick:this.sendData},"Close"))))}}]),t}(i.a.Component),j=a(82),D=a(83),M=a(84),U=a(85),C=a(86),N=a(87),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getUserInfo=a.getUserInfo.bind(Object(u.a)(a)),a.applyUserToGuild=a.applyUserToGuild.bind(Object(u.a)(a)),a.togglePublicProfile=a.togglePublicProfile.bind(Object(u.a)(a)),a.closePublicProfileModal=a.closePublicProfileModal.bind(Object(u.a)(a)),a.state={userLoggedIn:!1,publicProfileModal:!1,playerUid:"",didPlayerApply:"Apply",buttonDisabled:!1},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"getUserInfo",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){t?e.setState({userLoggedIn:!0,playerUid:f.auth().currentUser.uid}):e.setState({userLoggedIn:!1})}),console.log(this.state.userLoggedIn),f.firestore().collection("guilds").where("applicants","array-contains",this.state.playerUid).get().then(function(e){e.forEach(function(e){console.log(e.id,"=>",e.data())})}).catch(function(e){console.log("Error fetching: ",e)})}},{key:"applyUserToGuild",value:function(){var e=this,t=this.props.id,a=this.state.playerUid,l=f.firestore().collection("guilds").doc(t);l.get().then(function(t){t.exists?l.update({applicants:f.firestore.FieldValue.arrayUnion(a)}).then(function(){e.setState({didPlayerApply:"Applied",buttonDisabled:!0})}):console.log("No such document!")})}},{key:"togglePublicProfile",value:function(){this.setState(function(e){return{publicProfileModal:!e.publicProfileModal}})}},{key:"closePublicProfileModal",value:function(e){this.setState({publicProfileModal:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(j.a,{sm:"4"},i.a.createElement(D.a,{body:!0,inverse:!0,className:"the-boxes",style:{backgroundColor:"#333",borderColor:"#FFF"}},i.a.createElement(M.a,{className:"guild-box"},i.a.createElement(U.a,{className:this.props.guildFaction},this.props.guildName),i.a.createElement(C.a,{className:"ras text-muted"},this.props.guildRegion),i.a.createElement(C.a,{className:"ras text-muted"},this.props.guildServer),i.a.createElement(C.a,{className:"gm-spacing"},i.a.createElement("span",{className:"text-muted"},"GM:"),i.a.createElement("button",{id:this.props.id,href:"#",onClick:function(){return e.togglePublicProfile(),!1},className:this.props.gmStyle},this.props.guildMaster)),i.a.createElement(k,{key:"ppModal",callback:this.closePublicProfileModal,isShow:this.state.publicProfileModal}),i.a.createElement("hr",{className:"hr-divider"}),i.a.createElement(N.a,null,this.props.guildDesc),this.state.userLoggedIn?i.a.createElement(S.a,{id:this.props.id,onClick:this.applyUserToGuild,disabled:this.state.buttonDisabled},this.state.didPlayerApply):i.a.createElement("div",null))))}}]),t}(i.a.Component),G=a(18),P=a(88),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getUser=a.getUser.bind(Object(u.a)(a)),a.sendData=a.sendData.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.setEditDisabled=a.setEditDisabled.bind(Object(u.a)(a)),a.state={editDisabled:!0,profileUsername:"",profileEmail:"",profileDiscord:"",profileUid:""},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"sendData",value:function(){this.props.callback(!1)}},{key:"setEditDisabled",value:function(){this.setState(function(e){return{editDisabled:!e.editDisabled}})}},{key:"setUserProfile",value:function(){f.firestore().collection("users").doc(this.state.profileUid).set({username:this.state.profileUsername,discord:this.state.profileDiscord,email:this.state.profileEmail}).then(function(){console.log("Written to Firestore")}).catch(function(e){console.log("Error writing to DB: ",e)})}},{key:"getUser",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileEmail:t.email,profileUid:a}),f.firestore().collection("users").doc(e.state.profileUid).get().then(function(t){if(t.exists){var a=JSON.stringify(t.data()),l=JSON.parse(a);e.setState({profileUsername:l.username,profileDiscord:l.discord})}})}})}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{isOpen:this.props.isShow,toggle:this.sendData},i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"username"},"Username"),i.a.createElement(O.a,{type:"username",name:"profileUsername",value:this.state.profileUsername,onChange:this.handleChange,disabled:this.state.editDisabled})),i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"email"},"Email"),i.a.createElement(O.a,{type:"email",name:"email",value:this.state.profileEmail,disabled:!0})),i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"discord"},"Discord"),i.a.createElement(O.a,{type:"text",name:"profileDiscord",value:this.state.profileDiscord,onChange:this.handleChange,disabled:this.state.editDisabled}),i.a.createElement(P.a,{color:"muted"},"Example: chelk#4281")),i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"secondary",onClick:this.sendData},"Close"),this.state.editDisabled?i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"info",onClick:this.setEditDisabled},"Edit"):i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"success",onClick:function(){e.setEditDisabled(),e.setUserProfile(),e.sendData()}},"Update"))))}}]),t}(i.a.Component),R=a(34),A=a(89),x=a(90),I=a(91),L=a(105),T=a(104),B=a(92);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach(function(t){Object(G.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var W=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).closeModal=a.closeModal.bind(Object(u.a)(a)),a.ucFirst=a.ucFirst.bind(Object(u.a)(a)),a.toggleFactionSelect=a.toggleFactionSelect.bind(Object(u.a)(a)),a.toggleRegionSelect=a.toggleRegionSelect.bind(Object(u.a)(a)),a.toggleServerSelect=a.toggleServerSelect.bind(Object(u.a)(a)),a.setRegionEU=a.setRegionEU.bind(Object(u.a)(a)),a.setRegionUS=a.setRegionUS.bind(Object(u.a)(a)),a.setFactionA=a.setFactionA.bind(Object(u.a)(a)),a.setFactionH=a.setFactionH.bind(Object(u.a)(a)),a.getServers=a.getServers.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.checkGuildData=a.checkGuildData.bind(Object(u.a)(a)),a.addGuildToDB=a.addGuildToDB.bind(Object(u.a)(a)),a.getUser=a.getUser.bind(Object(u.a)(a)),a.state={profileUid:"",profileUsername:"",guildName:"",guildNameError:"",guildRegion:"",guildRegionError:"",guildServer:"",guildServerError:"",guildDesc:"",guildDescError:"",guildFaction:"",guildFactionError:"",factionColor:"secondary",regionSelect:!1,factionSelect:!1,serverSelect:!1},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getUser()}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"ucFirst",value:function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}},{key:"toggleFactionSelect",value:function(){this.setState(function(e){return{factionSelect:!e.factionSelect}})}},{key:"toggleRegionSelect",value:function(){this.setState(function(e){return{regionSelect:!e.regionSelect}})}},{key:"toggleServerSelect",value:function(){this.setState(function(e){return{serverSelect:!e.serverSelect}})}},{key:"closeModal",value:function(){this.props.callback(!1)}},{key:"setRegionEU",value:function(){this.setState({guildRegion:"EU"})}},{key:"setRegionUS",value:function(){this.setState({guildRegion:"US"})}},{key:"setFactionA",value:function(){this.setState({guildFaction:"Alliance"}),this.setState({factionColor:"primary"})}},{key:"setFactionH",value:function(){this.setState({guildFaction:"Horde"}),this.setState({factionColor:"danger"})}},{key:"getUser",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileUid:a})}f.firestore().collection("users").doc(e.state.profileUid).get().then(function(t){if(t.exists){var a=JSON.stringify(t.data()),l=JSON.parse(a);e.setState({profileUsername:l.username})}})})}},{key:"getServers",value:function(e){var t=JSON.stringify(R),a=JSON.parse(t),l=[];a.map(function(e){l.push(e)});var i=e.target.id,n=l[i-1];this.setState({guildServer:n.server})}},{key:"checkGuildData",value:function(){this.setState({guildDescError:"",guildNameError:"",guildRegionError:"",guildServerError:"",guildFactionError:""}),this.state.guildName?this.state.guildFaction?this.state.guildRegion?this.state.guildServer?this.state.guildDesc?this.state.guildName.length<3||this.state.guildName.length>24?this.setState({guildNameError:"Error in Guild Name length!"}):this.state.guildDesc.length>140?this.setState({guildDescError:"Description is too long!"}):this.state.guildDesc.length<10?this.setState({guildDescError:"Description is too short!"}):this.addGuildToDB():this.setState({guildDescError:"Description is blank!"}):this.setState({guildServerError:"Server isn't selected!"}):this.setState({guildRegionError:"Region isn't selected!"}):this.setState({guildFactionError:"Faction isn't selected!"}):this.setState({guildNameError:"Guild Name is empty!"})}},{key:"addGuildToDB",value:function(){f.firestore().collection("guilds").doc(this.state.profileUid).set({guildMaster:this.state.profileUsername,guildName:this.state.guildName,guildRegion:this.state.guildRegion+"-",guildServer:this.ucFirst(this.state.guildServer),guildDesc:this.ucFirst(this.state.guildDesc),guildFaction:this.ucFirst(this.state.guildFaction),applicants:[]}).then(function(){console.log("Successfully written to Firestore"),window.location.reload()}).catch(function(e){console.log("Error writing to DB: ",e)})}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{isOpen:this.props.isModalShow,toggle:this.closeModal},i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,null,i.a.createElement(A.a,{color:"danger",className:"badge-spacing visible"},this.state.guildNameError),i.a.createElement(O.a,{type:"text",name:"guildName",value:this.state.guildName,onChange:this.handleChange,placeholder:"Guild Name"})),i.a.createElement(v.a,null,i.a.createElement(A.a,{color:"danger",className:"badge-spacing visible"},this.state.guildFactionError,this.state.guildRegionError,this.state.guildServerError),i.a.createElement(x.a,null,i.a.createElement(I.a,{addonType:"append",isOpen:this.state.factionSelect,toggle:this.toggleFactionSelect},i.a.createElement(L.a,{color:this.state.factionColor},this.state.guildFaction?this.state.guildFaction:"Faction"),i.a.createElement(T.a,null,i.a.createElement(B.a,{onClick:this.setFactionA},"Alliance"),i.a.createElement(B.a,{onClick:this.setFactionH},"Horde"))),i.a.createElement(I.a,{addonType:"append",isOpen:this.state.regionSelect,toggle:this.toggleRegionSelect},i.a.createElement(L.a,null,this.state.guildRegion?this.state.guildRegion:"Region"),i.a.createElement(T.a,null,i.a.createElement(B.a,{onClick:this.setRegionEU},"EU"),i.a.createElement(B.a,{onClick:this.setRegionUS},"US"))),i.a.createElement(I.a,{addonType:"append",isOpen:this.state.serverSelect,toggle:this.toggleServerSelect},i.a.createElement(L.a,null,this.state.guildServer?this.state.guildServer:"Server"),i.a.createElement(T.a,{modifiers:{setMaxHeight:{enabled:!0,order:890,fn:function(e){return J({},e,{styles:J({},e.styles,{overflow:"auto",maxHeight:175})})}}}},R.map(function(t){return i.a.createElement(B.a,{key:t.id,id:t.id,onClick:e.getServers},t.server)}))))),i.a.createElement(v.a,null,i.a.createElement(A.a,{color:"danger",className:"badge-spacing visible"},this.state.guildDescError),i.a.createElement(O.a,{type:"textarea",name:"guildDesc",value:this.state.guildDesc,onChange:this.handleChange,placeholder:"Description"}),i.a.createElement(P.a,{color:this.state.guildDesc.length>140?"danger":"muted"},"Character count: ",this.state.guildDesc.length," / 140")),i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"secondary",onClick:this.closeModal},"Close"),i.a.createElement(S.a,{className:"btn-float-r",color:"success",onClick:this.checkGuildData},"Create"))))}}]),t}(i.a.Component),z=a(93),V=a(46),K=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).sendData=a.sendData.bind(Object(u.a)(a)),a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"sendData",value:function(){this.props.callback(!1)}},{key:"render",value:function(){return i.a.createElement(p.a,{isOpen:this.props.isShow,toggle:this.sendData},i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"guildName"},"Guild Name"),i.a.createElement(O.a,{className:"info-font",type:"text",name:"guildName",defaultValue:this.props.guildName,disabled:!0})),i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:" guild"},"Guild Server"),i.a.createElement(x.a,null,i.a.createElement(z.a,{addonType:"prepend"},i.a.createElement(V.a,{className:"info-font"},this.props.guildFaction),i.a.createElement(V.a,{className:"info-font"},this.props.guildRegion)),i.a.createElement(O.a,{className:"info-font",type:"text",name:"guildName",defaultValue:this.props.guildServer,disabled:!0}))),i.a.createElement(v.a,null,i.a.createElement(y.a,{style:{color:"#000"},for:"guildDesc"},"Guild Description"),i.a.createElement(O.a,{className:"info-font",type:"textarea",name:"guildDesc",defaultValue:this.props.guildDesc,disabled:!0})),i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"secondary",onClick:this.sendData},"Close"))))}}]),t}(i.a.Component),q=a(94),X=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).deleteUserGuild=a.deleteUserGuild.bind(Object(u.a)(a)),a.getUser=a.getUser.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.state={profileUid:"",deleteGuild:""},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value.toLowerCase()))}},{key:"getUser",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileUid:a})}})}},{key:"deleteUserGuild",value:function(){f.firestore().collection("guilds").doc(this.state.profileUid).delete().then(function(){console.log("Document deleted successfully"),window.location.reload()}).catch(function(e){console.log("Error deleting document: ",e)})}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{isOpen:this.props.isModalShow,toggle:this.props.callback},i.a.createElement(b.a,null,i.a.createElement("span",{className:"delete-font"},"Are you sure you want to permanently delete your guild? Doing so will delete the following:",i.a.createElement("ul",{className:"no-dots"},i.a.createElement("li",null," - Guild"),i.a.createElement("li",null," - Guild Applications")),"Type delete if you wish to proceed",i.a.createElement(O.a,{type:"delete",name:"deleteGuild",value:this.state.deleteGuild,onChange:this.handleChange}))),i.a.createElement(q.a,null,i.a.createElement(S.a,{color:"success",disabled:"delete"!==this.state.deleteGuild,onClick:function(){e.deleteUserGuild(),e.props.callback(!1)}},"Delete"),i.a.createElement(S.a,{color:"danger",onClick:this.props.callback},"Nevermind")))}}]),t}(i.a.Component),$=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getUser=a.getUser.bind(Object(u.a)(a)),a.closeModal=a.closeModal.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.deleteUserProfile=a.deleteUserProfile.bind(Object(u.a)(a)),a.state={profileUid:"",password:"",email:""},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"closeModal",value:function(){this.props.callback(!1)}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"getUser",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileUid:a,email:t.email})}})}},{key:"deleteUserProfile",value:function(){var e=this;f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(t){f.firestore().collection("guilds").doc(e.state.profileUid).get().then(function(t){t.exists&&(f.firestore().collection("guilds").doc(e.state.profileUid).delete(),console.log("Guild deleted (PROFILE DELETE METHOD)"))}),f.firestore().collection("users").doc(e.state.profileUid).delete().then(function(){console.log("Document deleted successfully"),f.auth().currentUser.delete().then(function(){console.log("User deleted successfully")}).catch(function(e){console.log("Error deleting user: ",e)})}).catch(function(e){console.log("Error deleting document: ",e)})}).catch(function(e){e&&console.log(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{isOpen:this.props.isModalShow,toggle:this.closeModal},i.a.createElement(b.a,null,i.a.createElement("span",{className:"delete-font"},"Are you sure you want to permanently delete your account? Doing so will delete the following:",i.a.createElement("ul",{className:"no-dots"},i.a.createElement("li",null," - Guild (If applicable)"),i.a.createElement("li",null," - Guild applications (If applicable)"),i.a.createElement("li",null," - Profile"))),i.a.createElement(y.a,{for:"password"},"Password"),i.a.createElement(O.a,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),i.a.createElement(q.a,null,i.a.createElement(S.a,{color:"success",onClick:function(){e.deleteUserProfile(),e.closeModal()},disabled:this.state.password.length<=0},"Delete"),i.a.createElement(S.a,{color:"danger",onClick:this.closeModal},"Nevermind")))}}]),t}(i.a.Component),Q=a(95),Y=a(96),Z=a(97),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).logout=a.logout.bind(Object(u.a)(a)),a.toggleProfile=a.toggleProfile.bind(Object(u.a)(a)),a.updateUsername=a.updateUsername.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.getUserEmail=a.getUserEmail.bind(Object(u.a)(a)),a.toggleAddGuild=a.toggleAddGuild.bind(Object(u.a)(a)),a.toggleManageGuild=a.toggleManageGuild.bind(Object(u.a)(a)),a.toggleDeleteProfileModal=a.toggleDeleteProfileModal.bind(Object(u.a)(a)),a.toggleDeleteGuildModal=a.toggleDeleteGuildModal.bind(Object(u.a)(a)),a.ucFirst=a.ucFirst.bind(Object(u.a)(a)),a.getGuildInfo=a.getGuildInfo.bind(Object(u.a)(a)),a.closeProfileModal=a.closeProfileModal.bind(Object(u.a)(a)),a.closeManageGuildModal=a.closeManageGuildModal.bind(Object(u.a)(a)),a.closeAddGuildModal=a.closeAddGuildModal.bind(Object(u.a)(a)),a.closeDeleteGuildModal=a.closeDeleteGuildModal.bind(Object(u.a)(a)),a.closeDeleteProfileModal=a.closeDeleteProfileModal.bind(Object(u.a)(a)),a.state={profileUid:"",profileUsername:"",profileModal:!1,addGuildModal:!1,manageGuildModal:!1,deleteGuildModal:!1,deleteProfileModal:!1,guildName:"",guildRegion:"",guildServer:"",guildDesc:"",guildFaction:"",userHasGuild:!1},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUserEmail()}},{key:"logout",value:function(){f.auth().signOut()}},{key:"updateUsername",value:function(e){this.setState({profileUsername:e})}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"ucFirst",value:function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}},{key:"toggleProfile",value:function(){this.setState(function(e){return{profileModal:!e.profileModal}})}},{key:"toggleAddGuild",value:function(){this.setState(function(e){return{addGuildModal:!e.addGuildModal}})}},{key:"toggleManageGuild",value:function(){this.setState(function(e){return{manageGuildModal:!e.manageGuildModal}})}},{key:"toggleDeleteGuildModal",value:function(){this.setState(function(e){return{deleteGuildModal:!e.deleteGuildModal}})}},{key:"toggleDeleteProfileModal",value:function(){this.setState(function(e){return{deleteProfileModal:!e.deleteProfileModal}})}},{key:"closeProfileModal",value:function(){this.setState({profileModal:!1})}},{key:"closeManageGuildModal",value:function(){this.setState({manageGuildModal:!1})}},{key:"closeAddGuildModal",value:function(){this.setState({addGuildModal:!1})}},{key:"closeDeleteGuildModal",value:function(){this.setState({deleteGuildModal:!1})}},{key:"closeDeleteProfileModal",value:function(){this.setState({deleteProfileModal:!1})}},{key:"getUserEmail",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileEmail:t.email,profileUid:a}),f.firestore().collection("users").doc(e.state.profileUid).get().then(function(t){if(t.exists){var a=JSON.stringify(t.data()),l=JSON.parse(a);e.setState({profileUsername:l.username})}}),f.firestore().collection("guilds").doc(e.state.profileUid).get().then(function(t){t.exists?e.setState({userHasGuild:!0}):console.log("No guild exists for this user!")})}else t||console.log("No user!")})}},{key:"getGuildInfo",value:function(){var e=this;f.firestore().collection("guilds").doc(this.state.profileUid).get().then(function(t){if(t.exists){var a=JSON.stringify(t.data()),l=JSON.parse(a);e.setState({guildName:l.guildName,guildFaction:l.guildFaction,guildRegion:l.guildRegion.slice(0,-1),guildServer:l.guildServer,guildDesc:l.guildDesc})}else console.log("No such document!")}).catch(function(e){console.log("Error getting info from DB: ",e)})}},{key:"render",value:function(){var e=this;return[i.a.createElement(Q.a,null,i.a.createElement(Y.a,{href:"#",onClick:this.toggleProfile}," ",this.state.profileUsername?this.state.profileUsername:"Loading.."," "),i.a.createElement(F,{key:"profileModal",callback:this.closeProfileModal,isShow:this.state.profileModal})),i.a.createElement(Z.a,{nav:!0,inNavbar:!0},i.a.createElement(L.a,{nav:!0,caret:!0},"Options"),i.a.createElement(T.a,{right:!0},this.state.userHasGuild?i.a.createElement(B.a,{onClick:function(){e.toggleManageGuild(),e.getGuildInfo()}}," Manage Guild "):i.a.createElement(B.a,{onClick:this.toggleAddGuild},"Create Guild"),i.a.createElement(K,{key:"manageGuildModal",callback:this.closeManageGuildModal,isShow:this.state.manageGuildModal,guildName:this.state.guildName,guildDesc:this.state.guildDesc,guildServer:this.state.guildServer,guildFaction:this.state.guildFaction,guildRegion:this.state.guildRegion}),i.a.createElement(W,{key:"addGuildModal",callback:this.closeAddGuildModal,isModalShow:this.state.addGuildModal,isRegionOpen:this.state.regionSelect,isFactionOpen:this.state.factionSelect}),this.state.userHasGuild?[i.a.createElement(B.a,null," Show Applicants"),i.a.createElement(B.a,{onClick:this.toggleDeleteGuildModal},"Delete Guild"),i.a.createElement(X,{key:"deleteGuildModal",callback:this.closeDeleteGuildModal,isModalShow:this.state.deleteGuildModal})]:i.a.createElement("div",null),i.a.createElement(B.a,{divider:!0}),i.a.createElement(B.a,{onClick:this.toggleDeleteProfileModal},"Delete Account"),i.a.createElement($,{key:"deleteProfileModal",callback:this.closeDeleteProfileModal,isModalShow:this.state.deleteProfileModal}),i.a.createElement(B.a,{onClick:this.logout},"Log Out")))]}}]),t}(i.a.Component),ee=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).checkPlayerData=a.checkPlayerData.bind(Object(u.a)(a)),a.sendData=a.sendData.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.state={isOpen:a.props.isShow,username:"",discord:"",email:"",password:"",usernameError:"",discordError:"",emailError:"",passwordError:""},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"signup",value:function(){var e=this;f.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(t){e.setState({uid:t.user.uid}),f.firestore().collection("users").doc(e.state.uid).set({username:e.state.username,discord:e.state.discord,email:e.state.email}).then(function(){console.log("Document successfully written")}).catch(function(e){console.log(e)})}).catch(function(t){switch(t.code){case"auth/weak-password":e.setState({passwordError:"The password is too weak"})}})}},{key:"checkPlayerData",value:function(){this.setState({usernameError:"",discordError:"",emailError:"",passwordError:""}),this.state.email?this.state.password?this.state.username?this.state.discord?this.state.username.length>14?this.setState({usernameError:"Username is too long!"}):this.state.username.length<3?this.setState({usernameError:"Username is too short!"}):this.signup():this.setState({discordError:"Discord field is empty!"}):this.setState({usernameError:"Username field is empty!"}):this.setState({passwordError:"Password field is empty!"}):this.setState({emailError:"Email field is empty!"})}},{key:"sendData",value:function(){this.props.callback(!1)}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{isOpen:this.props.isShow,toggle:this.sendData},i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,null,i.a.createElement(A.a,{color:"danger",className:"badge-spacing"},this.state.emailError),i.a.createElement(O.a,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),i.a.createElement(v.a,null,i.a.createElement(A.a,{color:"danger",className:"badge-spacing"},this.state.passwordError),i.a.createElement(O.a,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})),i.a.createElement(v.a,null,i.a.createElement(A.a,{color:"danger",className:"badge-spacing"},this.state.usernameError),i.a.createElement(O.a,{type:"username",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Username"})),i.a.createElement(v.a,null,i.a.createElement(A.a,{color:"danger",className:"badge-spacing"},this.state.discordError),i.a.createElement(O.a,{type:"text",name:"discord",value:this.state.discord,onChange:this.handleChange,placeholder:"Discord"}),i.a.createElement(P.a,{color:"muted"},"Example: chelk#4281"))),i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"danger",onClick:this.sendData},"Close"),i.a.createElement(S.a,{className:"btn-float-r",color:"success",onClick:function(){e.checkPlayerData()}}," Register ")))}}]),t}(i.a.Component),te=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(u.a)(a)),a.sendData=a.sendData.bind(Object(u.a)(a)),a.login=a.login.bind(Object(u.a)(a)),a.state={uid:"",email:"",password:""},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"login",value:function(){f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).catch(function(e){console.log(e)})}},{key:"sendData",value:function(){this.props.callback(!1)}},{key:"render",value:function(){return i.a.createElement(p.a,{isOpen:this.props.isShow,toggle:this.sendData},i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,null,i.a.createElement(O.a,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),i.a.createElement(v.a,null,i.a.createElement(O.a,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"}))),i.a.createElement(S.a,{className:"btn-float-r btn-spacing",color:"danger",onClick:this.sendData},"Close"),i.a.createElement(S.a,{className:"btn-float-r",color:"success",onClick:this.login}," Log in "),i.a.createElement("p",{className:"error-message",color:"danger"},this.props.error)))}}]),t}(i.a.Component),ae=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).toggleLoginModal=a.toggleLoginModal.bind(Object(u.a)(a)),a.toggleRegisterModal=a.toggleRegisterModal.bind(Object(u.a)(a)),a.closeRegisterModal=a.closeRegisterModal.bind(Object(u.a)(a)),a.closeLoginModal=a.closeLoginModal.bind(Object(u.a)(a)),a.state={loginModal:!1,registerModal:!1,uid:""},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"toggleLoginModal",value:function(){this.setState(function(e){return{loginModal:!e.loginModal}})}},{key:"toggleRegisterModal",value:function(){this.setState(function(e){return{registerModal:!e.registerModal}})}},{key:"closeRegisterModal",value:function(e){this.setState({registerModal:e})}},{key:"closeLoginModal",value:function(e){this.setState({loginModal:e})}},{key:"render",value:function(){return[i.a.createElement(Q.a,null,i.a.createElement(Y.a,{href:"#",onClick:this.toggleRegisterModal}," Register "),i.a.createElement(ee,{key:"registerModal",callback:this.closeRegisterModal,isShow:this.state.registerModal})),i.a.createElement(Q.a,null,i.a.createElement(Y.a,{href:"#",onClick:this.toggleLoginModal}," Login "),i.a.createElement(te,{key:"loginModal",callback:this.closeLoginModal,isShow:this.state.loginModal}))]}}]),t}(i.a.Component),le=a(98),ie=a(99),ne=a(100),se=a(101),re=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).toggleNav=a.toggleNav.bind(Object(u.a)(a)),a.authListener=a.authListener.bind(Object(u.a)(a)),a.renderLoginOptions=a.renderLoginOptions.bind(Object(u.a)(a)),a.state={isOpen:!1,user:{}},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"toggleNav",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"authListener",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"renderLoginOptions",value:function(){return this.state.user?i.a.createElement(_,null):i.a.createElement(ae,null)}},{key:"render",value:function(){return i.a.createElement(le.a,{className:"main-nav",color:"dark",dark:!0,expand:"md",sticky:"top"},i.a.createElement(ie.a,{onClick:this.toggleNav}),i.a.createElement(ne.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(se.a,{className:"ml-auto",navbar:!0},this.renderLoginOptions())))}}]),t}(i.a.Component),oe=a(102),ce=(a(74),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getUserUID=a.getUserUID.bind(Object(u.a)(a)),a.guildInfo=a.guildInfo.bind(Object(u.a)(a)),a.renderCards=a.renderCards.bind(Object(u.a)(a)),a.state={profileUid:"",guilds:[]},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.guildInfo(),this.getUserUID()}},{key:"getUserUID",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){if(t){var a=f.auth().currentUser.uid;e.setState({profileUid:a})}})}},{key:"guildInfo",value:function(){var e=this;f.firestore().collection("guilds").get().then(function(t){var a=[];t.forEach(function(e){a.push({id:e.id,guildDesc:e.data().guildDesc,guildFaction:e.data().guildFaction,guildName:e.data().guildName,guildRegion:e.data().guildRegion,guildServer:e.data().guildServer,guildMaster:e.data().guildMaster})}),e.setState({guilds:a})})}},{key:"renderCards",value:function(){var e,t,a=this.state.guilds.map(function(a){return"Alliance"===a.guildFaction?(e="guild-name -alliance",t="gm-link-text -alliance"):"Horde"===a.guildFaction&&(e="guild-name -horde",t="gm-link-text -horde"),i.a.createElement(w,{key:a.id,id:a.id,guildMaster:a.guildMaster,guildFaction:e,guildServer:a.guildServer,guildName:a.guildName,gmStyle:t,guildRegion:a.guildRegion,guildDesc:a.guildDesc})});return i.a.createElement(oe.a,null,a)}},{key:"render",value:function(){return i.a.createElement("div",{className:"main-div"},i.a.createElement(re,null),this.renderCards())}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);s.a.render(i.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.63e9328b.chunk.js.map