"use strict";(self.webpackChunkhamchance=self.webpackChunkhamchance||[]).push([[702],{"./node_modules/@mui/material/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Link_Link});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiLink",slot)}const Link_linkClasses=(0,generateUtilityClasses.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("./node_modules/@mui/system/esm/style.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator.js");const colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Link_getTextDecoration=({theme,ownerState})=>{const transformedColor=(color=>colorTransformations[color]||color)(ownerState.color),color=(0,style.Yn)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.Yn)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.X4)(color,.4)};var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],LinkRoot=(0,styled.Ay)(Typography.A,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.A)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme,ownerState})=>(0,esm_extends.A)({},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===ownerState.underline&&(0,esm_extends.A)({textDecoration:"underline"},"inherit"!==ownerState.color&&{textDecorationColor:Link_getTextDecoration({theme,ownerState})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===ownerState.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiLink"}),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.A)(),[focusVisible,setFocusVisible]=react.useState(!1),handlerRef=(0,useForkRef.A)(ref,focusVisibleRef),ownerState=(0,esm_extends.A)({},props,{color,component,focusVisible,underline,variant}),classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.A)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.A)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,(0,esm_extends.A)({color,className:(0,clsx.A)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)},ref:handlerRef,ownerState,variant,sx:[...Object.keys(colorTransformations).includes(color)?[]:[{color}],...Array.isArray(sx)?sx:[sx]]},other))}))},"./node_modules/@mui/material/utils/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js").A},"./node_modules/@mui/material/utils/useIsFocusVisible.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>utils_useIsFocusVisible});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useTimeout=__webpack_require__("./node_modules/@mui/utils/esm/useTimeout/useTimeout.js");let hadKeyboardEvent=!0,hadFocusVisibleRecently=!1;const hadFocusVisibleRecentlyTimeout=new useTimeout.E,inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function handleKeyDown(event){event.metaKey||event.altKey||event.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){"hidden"===this.visibilityState&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function isFocusVisible(event){const{target}=event;try{return target.matches(":focus-visible")}catch(error){}return hadKeyboardEvent||function focusTriggersKeyboardModality(node){const{type,tagName}=node;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||node.readOnly)||"TEXTAREA"===tagName&&!node.readOnly||!!node.isContentEditable}(target)}const utils_useIsFocusVisible=function useIsFocusVisible(){const ref=react.useCallback((node=>{null!=node&&function prepare(doc){doc.addEventListener("keydown",handleKeyDown,!0),doc.addEventListener("mousedown",handlePointerDown,!0),doc.addEventListener("pointerdown",handlePointerDown,!0),doc.addEventListener("touchstart",handlePointerDown,!0),doc.addEventListener("visibilitychange",handleVisibilityChange,!0)}(node.ownerDocument)}),[]),isFocusVisibleRef=react.useRef(!1);return{isFocusVisibleRef,onFocus:function handleFocusVisible(event){return!!isFocusVisible(event)&&(isFocusVisibleRef.current=!0,!0)},onBlur:function handleBlurVisible(){return!!isFocusVisibleRef.current&&(hadFocusVisibleRecently=!0,hadFocusVisibleRecentlyTimeout.start(100,(()=>{hadFocusVisibleRecently=!1})),isFocusVisibleRef.current=!1,!0)},ref}}},"./node_modules/@mui/utils/esm/setRef/setRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}__webpack_require__.d(__webpack_exports__,{A:()=>setRef})},"./node_modules/@mui/utils/esm/useForkRef/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_setRef__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/setRef/setRef.js");function useForkRef(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>refs.every((ref=>null==ref))?null:instance=>{refs.forEach((ref=>{(0,_setRef__WEBPACK_IMPORTED_MODULE_1__.A)(ref,instance)}))}),refs)}},"./node_modules/@mui/utils/esm/useTimeout/useTimeout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Timeout,A:()=>useTimeout});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const UNINITIALIZED={};const EMPTY=[];class Timeout{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Timeout}start(delay,fn){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,fn()}),delay)}}function useTimeout(){const timeout=function useLazyRef(init,initArg){const ref=react.useRef(UNINITIALIZED);return ref.current===UNINITIALIZED&&(ref.current=init(initArg)),ref}(Timeout.create).current;return function useOnMount(fn){react.useEffect(fn,EMPTY)}(timeout.disposeEffect),timeout}},"./src/libs/ui/ExternalLink/ExternalLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"ui/ExternalLink",component:__webpack_require__("./src/libs/ui/ExternalLink/ExternalLink.component.tsx").G,args:{href:"https://storybook.js.org/",prefetch:!1,children:"Storybook"}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/libs/ui/ExternalLink/ExternalLink.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ExternalLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ExternalLink(_ref){var href=_ref.href,children=_ref.children;return __jsx(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__.A,{href,color:"inherit",underline:"none",target:"_blank",rel:"noopener noreferrer"},children)}ExternalLink.displayName="ExternalLink";try{ExternalLink.displayName="ExternalLink",ExternalLink.__docgenInfo={description:"",displayName:"ExternalLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/libs/ui/ExternalLink/ExternalLink.component.tsx#ExternalLink"]={docgenInfo:ExternalLink.__docgenInfo,name:"ExternalLink",path:"src/libs/ui/ExternalLink/ExternalLink.component.tsx#ExternalLink"})}catch(__react_docgen_typescript_loader_error){}}}]);