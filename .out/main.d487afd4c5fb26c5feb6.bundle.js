(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{289:function(module,exports,__webpack_require__){},300:function(module,exports,__webpack_require__){__webpack_require__(301),__webpack_require__(451),module.exports=__webpack_require__(452)},367:function(module,exports){},452:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(292);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(642)],module)}.call(this,__webpack_require__(232)(module))},642:function(module,exports,__webpack_require__){var map={"./article.stories.js":666,"./stories/0-Welcome.stories.js":658,"./stories/1-Button.stories.js":665};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=642},658:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(297),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64);__webpack_exports__.default={title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome};var ToStorybook=function ToStorybook(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};ToStorybook.story={name:"to Storybook"},ToStorybook.__docgenInfo={description:"",methods:[],displayName:"ToStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\0-Welcome.stories.js"]={name:"ToStorybook",docgenInfo:ToStorybook.__docgenInfo,path:"src\\stories\\0-Welcome.stories.js"})},665:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(63),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64);__webpack_exports__.default={title:"Button",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button};var Text=function Text(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")},Emoji=function Emoji(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))};Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\1-Button.stories.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src\\stories\\1-Button.stories.js"}),Emoji.__docgenInfo={description:"",methods:[],displayName:"Emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\1-Button.stories.js"]={name:"Emoji",docgenInfo:Emoji.__docgenInfo,path:"src\\stories\\1-Button.stories.js"})},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"articleData",(function(){return articleData})),__webpack_require__.d(__webpack_exports__,"actionsData",(function(){return actionsData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return article_stories_Default})),__webpack_require__.d(__webpack_exports__,"addNew",(function(){return article_stories_addNew})),__webpack_require__.d(__webpack_exports__,"seached",(function(){return article_stories_seached}));var objectSpread2=__webpack_require__(14),react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(63),react_dom=(__webpack_require__(289),__webpack_require__(74)),react_dom_default=__webpack_require__.n(react_dom),defineProperty=__webpack_require__(118),classCallCheck=__webpack_require__(293),createClass=__webpack_require__(294),inherits=__webpack_require__(299),createSuper=__webpack_require__(298);var es=__webpack_require__(119);function validate(title,desc){return{title:0===title.length,desc:0===desc.length}}var App_App=function(_Component){Object(inherits.a)(App,_Component);var _super=Object(createSuper.a)(App);function App(props){var _this;return Object(classCallCheck.a)(this,App),(_this=_super.call(this,props)).submitData=function(){if(console.log("keyword"),_this.canBeSubmitted()){var newArticle={id:Math.floor(900*Math.random()+100),title:_this.state.title,desc:_this.state.desc};_this.props.addArticle(newArticle),_this.clearData()}},_this.clearData=function(){_this.setState({id:0,title:"",desc:""})},_this.searchTitle=function(event){var keyword=event.target.value;_this.setState({search:keyword}),_this.props.searchArticle({keyword:keyword})},_this.handleTitleChange=function(e){_this.setState({title:e.target.value})},_this.handleDecChange=function(e){_this.setState({desc:e.target.value})},_this.handleBlur=function(field){return function(evt){_this.setState({touched:Object(objectSpread2.a)(Object(objectSpread2.a)({},_this.state.touched),{},Object(defineProperty.a)({},field,!0))})}},_this.state={id:0,title:"",desc:"",search:"",touched:{title:!1,desc:!1}},_this}return Object(createClass.a)(App,[{key:"componentDidMount",value:function componentDidMount(){this.props.getActricle()}},{key:"canBeSubmitted",value:function canBeSubmitted(){var errors=validate(this.state.title,this.state.desc);return!Object.keys(errors).some((function(x){return errors[x]}))}},{key:"render",value:function render(){var _this2=this,applyFilter=function applyFilter(searchTerm){return function(article){return article.title.toLowerCase().includes(searchTerm.toLowerCase())}},errors=validate(this.state.title,this.state.desc),isDisabled=Object.keys(errors).some((function(x){return errors[x]})),shouldMarkError=function shouldMarkError(field){var hasError=errors[field],shouldShow=_this2.state.touched[field];return!!hasError&&shouldShow};return react_default.a.createElement("div",{className:"App"},react_default.a.createElement("header",{className:"App-header"},react_default.a.createElement("input",{type:"text",placeholder:"Enter item to be searched",onChange:function onChange(e){return _this2.searchTitle(e)}})),react_default.a.createElement("article",{className:"App-intro container"},react_default.a.createElement("div",{className:"article-hearder"},react_default.a.createElement("h3",{className:"newpost"},"New Post"),react_default.a.createElement("h3",{className:"newpost"},"Published Post")),react_default.a.createElement("div",{className:"leftsection"},"Article Title : ",react_default.a.createElement("input",{className:shouldMarkError("title")?"error":"",onChange:this.handleTitleChange,onBlur:this.handleBlur("title"),value:this.state.title,type:"text",placeholder:"Article Title "})," ",react_default.a.createElement("br",null),"Article Desc :  ",react_default.a.createElement("textarea",{className:shouldMarkError("desc")?"error":"",onChange:this.handleDecChange,value:this.state.desc,onBlur:this.handleBlur("desc"),placeholder:"Article Description",rows:"10",cols:"50"}),react_default.a.createElement("br",null),react_default.a.createElement("button",{onClick:this.submitData,disabled:isDisabled,className:"button"},react_default.a.createElement("span",null,"PUBLISH")),react_default.a.createElement("button",{onClick:this.clearData,className:"button"},react_default.a.createElement("span",null,"CLEAR"))),react_default.a.createElement("div",{className:"rightsection"},this.props.articles.filter(applyFilter(this.state.search))&&this.props.articles.filter(applyFilter(this.state.search)).map((function(data,index){return react_default.a.createElement("ul",{className:"data-list"},react_default.a.createElement("li",{key:data.id,className:"block-"+data.id},react_default.a.createElement("div",null,data.title),react_default.a.createElement("div",null,data.desc)))})))))}}]),App}(react.Component);App_App.__docgenInfo={description:"",methods:[{name:"canBeSubmitted",docblock:null,modifiers:[],params:[],returns:null},{name:"submitData",docblock:null,modifiers:[],params:[],returns:null},{name:"clearData",docblock:null,modifiers:[],params:[],returns:null},{name:"searchTitle",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"handleTitleChange",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleDecChange",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleBlur",docblock:null,modifiers:[],params:[{name:"field",type:null}],returns:null}],displayName:"App",props:{articles:{type:{name:"array"},required:!0,description:""},getActricle:{type:{name:"func"},required:!0,description:""},addActricle:{type:{name:"func"},required:!0,description:""},searchArticle:{type:{name:"func"},required:!0,description:""}}};var src_App_0=Object(es.b)((function mapStateToProps(state){return{articles:state.articles}}),{getActricle:function getActricle(){return function(dispatch){return dispatch({type:"GET_ARTICLE"})}},addArticle:function addArticle(data){return function(dispatch){return dispatch({type:"ADD_ARTICLE",payload:data})}},searchArticle:function searchArticle(value){return function(dispatch){return dispatch({type:"SEARCH_ARTICLE",payload:value})}}})(App_App);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\App.js"]={name:"App",docgenInfo:App_App.__docgenInfo,path:"src\\App.js"});var redux=__webpack_require__(92),redux_thunk_es=__webpack_require__(296);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var INITIAL_STATE={articles:[{id:"0",title:"Over and Above after Corona ",desc:"Newsdesk"},{id:"1",title:"Over and Above after Corona ",desc:"Newsdesk"},{id:"2",title:"Over and Above after Corona ",desc:"Newsdesk"},{id:"3",title:"Over and Above after Corona ",desc:"Newsdesk"},{id:"4",title:"Over and Above after Corona ",desc:"Newsdesk"},{id:"5",title:"Over and Above after Corona ",desc:"Newsdesk"},{id:"6",title:"Over and Above after Corona ",desc:"Newsdesk"}],searchTerm:""};var reducers_articleReducer=function articleReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:INITIAL_STATE,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"GET_ARTICLE":return Object(objectSpread2.a)({},state);case"ADD_ARTICLE":return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{articles:state.articles.concat(action.payload)});case"SEARCH_ARTICLE":return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{searchTerm:action.searchTerm});default:return state}},store=Object(redux.c)(reducers_articleReducer,Object(redux.a)(redux_thunk_es.a));react_dom_default.a.render(react_default.a.createElement(es.a,{store:store},react_default.a.createElement(src_App_0,null)),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(registration){registration.unregister()})).catch((function(error){console.error(error.message)}))}();__webpack_exports__.default={component:void 0,title:"News"};var articleData={id:"1",title:"Test Task",desc:"TASK_INBOX"},actionsData={getActricle:Object(dist.action)("getActricle"),addArticle:Object(dist.action)("addArticle"),searchArticle:Object(dist.action)("searchArticle")},article_stories_Default=function Default(){return react_default.a.createElement(void 0,Object.assign({task:Object(objectSpread2.a)(Object(objectSpread2.a)({},articleData),{},{state:"GET_ARTICLE"})},actionsData))},article_stories_addNew=function addNew(){return react_default.a.createElement(void 0,Object.assign({task:Object(objectSpread2.a)(Object(objectSpread2.a)({},articleData),{},{state:"ADD_ARTICLE"})},actionsData))},article_stories_seached=function seached(){return react_default.a.createElement(void 0,Object.assign({task:Object(objectSpread2.a)(Object(objectSpread2.a)({},articleData),{},{state:"SEARCH_ARTICLE"})},actionsData))};article_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\article.stories.js"]={name:"Default",docgenInfo:article_stories_Default.__docgenInfo,path:"src\\article.stories.js"}),article_stories_addNew.__docgenInfo={description:"",methods:[],displayName:"addNew"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\article.stories.js"]={name:"addNew",docgenInfo:article_stories_addNew.__docgenInfo,path:"src\\article.stories.js"}),article_stories_seached.__docgenInfo={description:"",methods:[],displayName:"seached"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\article.stories.js"]={name:"seached",docgenInfo:article_stories_seached.__docgenInfo,path:"src\\article.stories.js"})}},[[300,1,2]]]);
//# sourceMappingURL=main.d487afd4c5fb26c5feb6.bundle.js.map