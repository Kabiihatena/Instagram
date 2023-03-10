;/*FB_PKG_DELIM*/

__d("CometLoadingAnimation.react",["cssVar","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=38,k=62,l=42,m=2,n=3,o=4,p=j/2,q=k/2,r=l/2,s=p-2,t=q-2,u=r-2;function a(a){var b=a.animationPaused;b=b===void 0?!1:b;a=a.size;var c,d,e;switch(a){case 36:c=j;d=p;e=s;break;case 40:c=l;d=r;e=u;break;case 60:default:c=k;d=q;e=t;break}return i.jsx("svg",{className:"x10l6tqk"+(a===40?" x1150agl x1e0gzzx":""+(a===60?" x1150agl x1e0gzzx":""+(a===36?" x1150agl x1e0gzzx":""))),height:c,width:c,children:i.jsx("g",{className:"xeaay5l xa4qsjk xnjvcao x1esw782 x1bndym7"+(b?" xorstpt":""),children:i.jsx("circle",{className:"x1bndym7"+((a===60?" xeo85xg xeaay5l xa4qsjk x1esw782 xm4p48w x17ld789":""+(a===40?" xeo85xg xeaay5l xa4qsjk x1esw782 x62hu5v xqjr0vm":""+(a===36?" xeo85xg xeaay5l xa4qsjk x1esw782 xq0anyh xvlca1e":" xeo85xg x7s8090 xa4qsjk x1esw782")))+(b?" xorstpt":""+(a===60?"":""+(a===40?"":""+(a===36?"":""))))),cx:d,cy:d,fill:"none",r:e,stroke:"#1877F2",strokeWidth:a===36?m:a===40?n:o})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometObjectFitContainer.react",["cr:964538","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={inner:{height:"x5yr21d",position:"x1n2onr6",width:"xh8yej3",$$css:!0},innerWithAspectRatio:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},outer:{height:"x5yr21d",position:"x1n2onr6",width:"xh8yej3",$$css:!0},outerWithAspectRatio:{height:"xt7dq6l",$$css:!0}};function j(a){var b=a.children,d=a.debugRole;d=a.innerInlineStyle;var e=a.innerXStyle,f=a.outerInlineStyle,g=a.outerRef,j=a.outerXStyle;a=a.testid;var k=a!=null&&a!==""?a+"-outer":void 0;k=a!=null&&a!==""?a+"-inner":void 0;return h.jsx("div",babelHelpers["extends"]({},{},{className:c("stylex")(i.outer,j),"data-testid":void 0,ref:g,style:f,children:h.jsx("div",babelHelpers["extends"]({},{},{className:c("stylex")(i.inner,e),"data-testid":void 0,style:d,children:b}))}))}j.displayName=j.name+" [from "+f.id+"]";function a(a,b){var d=a.children,e=a.contentAspectRatio,f=a.debugRole,g=a.objectFitMode;g=g===void 0?"CONTAINER_SIZE":g;a=a.testid;a=16/9;e=e!=null&&isFinite(e)&&e>0?e:a;if(g==="CONTAINER_WIDTH_BASED_ASPECT_RATIO"){a=isFinite(e)&&e>0?100/e:100;e={paddingBottom:a.toFixed(5)+"%"};return h.jsx(j,{children:d,debugRole:f,innerXStyle:i.innerWithAspectRatio,outerInlineStyle:e,outerRef:b,outerXStyle:i.outerWithAspectRatio,testid:void 0})}else if(g==="CONTAINER_SIZE")return h.jsx(j,{children:d,debugRole:f,outerRef:b,testid:void 0});else throw c("unrecoverableViolation")("Unsupported objectFitMode "+g,"comet_ui")}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("useCometSize_DO_NOT_USE",["CometThrottle","ExecutionEnvironment","FBLogger","HiddenSubtreePassiveContext","react","useLayoutEffect_SAFE_FOR_SSR","useResizeObserver","useStable","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect,j=b.useRef,k=b.useState;function l(a){var b=a.setBoxStateStable,d=null,e=function(a){var c;if(((c=d)==null?void 0:c.height)===a.height&&((c=d)==null?void 0:c.width)===a.width)return;d=a;b(a)};a=function(a){a=a.getBoundingClientRect();var b=a.height;a=a.width;e({height:b,width:a})};var f=c("CometThrottle")(function(a){var b=a.height;a=a.width;if(b===0&&a===0)return;e({height:b,width:a})},200,{leading:!0,trailing:!0});return{measure:a,onResizeThrottled:f}}function a(){if(!c("ExecutionEnvironment").canUseDOM)throw c("FBLogger")("comet_ssr").blameToPreviousFile().mustfixThrow("useCometSize is not compatible with Server Rendering. This will break SSR! See https://fburl.com/wiki/xrzohrqb");var a=j(null),b=k(null),d=b[0],e=b[1],f=h(c("HiddenSubtreePassiveContext")),g=c("useStable")(function(){return l({setBoxStateStable:e})}),m=c("useResizeObserver")(g.onResizeThrottled),n=j(m);c("useLayoutEffect_SAFE_FOR_SSR")(function(){n.current=m},[m]);b=c("useUnsafeRef_DEPRECATED")(function(b){b!==a.current&&(a.current=b,b!=null&&g.measure(b)),n.current(a.current)});i(function(){if(!f.getCurrentState().hidden)return;var b=f.subscribeToChanges(function(c){!c.hidden&&a.current!=null&&(g.measure(a.current),b.remove())});return function(){return b.remove()}},[f,g]);i(function(){return function(){g.onResizeThrottled.cancel()}},[g]);return[b.current,d]}g["default"]=a}),98);
__d("VideoPlayerAudioAvailabilityInfo",["recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.audioAvailability;a=a.mutedSegmentsUnsanitized;a=a.map(function(a){return a.muteStartTimeInSec!=null&&a.muteEndTimeInSec!=null&&a.muteEndTimeInSec>a.muteStartTimeInSec?{muteEndTimeInSec:a.muteEndTimeInSec,muteStartTimeInSec:a.muteStartTimeInSec}:null}).filter(Boolean);return{audioAvailability:b,mutedSegments:a}}function b(a,b){var d=a.audioAvailability;a=a.mutedSegments;var e=b.playheadPosition,f;b=!1;var g=!1;switch(d){case"AVAILABLE_BUT_MUTED":a.length>0?(b=e!=null&&a.some(function(a){return a.muteStartTimeInSec<=e&&e<=a.muteEndTimeInSec}),b?(f="VOLUME_COPYRIGHT_PARTIAL_SILENCED",g=!0):f="VOLUME_COPYRIGHT_PARTIAL_NOT_SILENCED"):(f="VOLUME_COPYRIGHT_FULL",g=!0);break;case"AVAILABLE_BUT_SILENT":case"UNAVAILABLE":f="VOLUME_SILENT";g=!0;break;case"AVAILABLE":case"UNKNOWN":case null:case void 0:f="VOLUME_DEFAULT";break;default:c("recoverableViolation")("Unhandled audio availability: "+d,"comet_video_player");f="VOLUME_DEFAULT";break}return{isPlayheadWithinMutedSegment:b,isSilentAtPlayhead:g,volumeControlState:f}}d=a({audioAvailability:null,mutedSegmentsUnsanitized:[]});g.makeVideoPlayerAudioAvailabilityInfo=a;g.makeVideoPlayerAudioAvailabilityAtPlayheadInfo=b;g.VideoPlayerAudioAvailabilityInfoDefault=d}),98);
__d("CoreVideoPlayerImplementationCallbacks",["VideoPlayerAudioAvailabilityInfo","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";d("react");e=d("react");var h=e.useCallback,i=e.useEffect,j=e.useRef;function a(a){var b=a.coreVideoPlayerMetaData,c=a.dimensions,e=a.instanceKey,f=a.isFullscreen,g=a.onCoreVideoStatesChanged,i=a.renderWithCoreVideoStates,j=a.videoPlayerPassiveViewabilityInfo;a=h(function(a){var h,k=a.implementationController;a=a.implementationExposedState;h={adClientToken:b.adClientToken,audioAvailabilityInfo:(h=b.audioAvailabilityInfo)!=null?h:d("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault,autoplayGatingResult:b.autoplayGatingResult!=null?b.autoplayGatingResult:"unknown",autoplaySetting:b.autoplaySetting,broadcastStatus:b.broadcastStatus,canAutoplay:b.canAutoplay!=null?b.canAutoplay:"allow",controller:k,dimensions:c,duration:a.duration,initialTracePolicy:b.initialTracePolicy,instanceKey:e,isDesktopPictureInPicture:a.isDesktopPictureInPicture,isFullscreen:f,isNCSR:Boolean(b.isNCSR),isPremiumMusicVideo:Boolean(b.isPremiumMusicVideo),lastMuteReason:a.lastMuteReason,lastPauseReason:a.lastPauseReason,lastPlayReason:a.lastPlayReason,loopCount:a.loopCount,loopCurrent:a.loopCurrent,videoFBID:b.videoFBID,videoPixelsAspectRatio:b.videoPixelsAspectRatio,videoPlayerPassiveViewabilityInfo:j,videoState:a,volumeSetting:b.volumeSetting};g&&g(h);return i(h)},[b.adClientToken,b.audioAvailabilityInfo,b.autoplayGatingResult,b.autoplaySetting,b.broadcastStatus,b.canAutoplay,b.initialTracePolicy,b.isNCSR,b.isPremiumMusicVideo,b.videoPixelsAspectRatio,b.videoFBID,b.volumeSetting,c,e,f,j,g,i]);return{onExposedStateChanged:void 0,renderWithExposedState:a}}function b(a){var b=a.coreVideoPlayerMetaData,c=a.dimensions,e=a.instanceKey,f=a.isFullscreen,g=a.onCoreVideoStatesChanged,k=a.renderWithCoreVideoStates,l=a.videoPlayerPassiveViewabilityInfo,m=h(function(a){var g,h=a.implementationController;a=a.implementationExposedState;g={adClientToken:b.adClientToken,audioAvailabilityInfo:(g=b.audioAvailabilityInfo)!=null?g:d("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault,autoplayGatingResult:b.autoplayGatingResult!=null?b.autoplayGatingResult:"unknown",autoplaySetting:b.autoplaySetting,broadcastStatus:b.broadcastStatus,canAutoplay:b.canAutoplay!=null?b.canAutoplay:"allow",controller:h,dimensions:c,duration:a.duration,initialTracePolicy:b.initialTracePolicy,instanceKey:e,isDesktopPictureInPicture:a.isDesktopPictureInPicture,isFullscreen:f,isNCSR:Boolean(b.isNCSR),isPremiumMusicVideo:Boolean(b.isPremiumMusicVideo),lastMuteReason:a.lastMuteReason,lastPauseReason:a.lastPauseReason,lastPlayReason:a.lastPlayReason,loopCount:a.loopCount,loopCurrent:a.loopCurrent,videoFBID:b.videoFBID,videoPixelsAspectRatio:b.videoPixelsAspectRatio,videoPlayerPassiveViewabilityInfo:l,videoState:a,volumeSetting:b.volumeSetting};return g},[b,c,e,f,l]);a=h(function(a){a=m(a);return k(a)},[k,m]);var n=j(null),o=h(function(a){n.current=a.implementationController;if(g){a=m(a);g(a)}},[g,m]);i(function(){var a=n.current;if(g&&a){a=m({implementationController:a,implementationExposedState:a.getCurrentState()});g(a)}},[g,m]);return{onExposedStateChanged:o,renderWithExposedState:a}}f=c("gkx")("52")?b:a;g.useImplementationCallbacks=f}),98);
__d("VideoPlayerOnViewability.react",["DOMRectIsEqual","DOMRectReadOnly","VideoPlayerViewabilityConstants","emptyFunction","react","useIntersectionObserver","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useMemo,k=b.useRef,l=10,m=[.25,.75,.99,1].concat(new Array(10).fill().map(function(a,b){return b/10}));function a(a){var b=a.viewportMargins,d=k(-1),e=k(-1),f=k(c("DOMRectReadOnly").fromRect({height:0,width:0,x:0,y:0})),g=k(null),n=k(null);b=-b.top+"px "+-b.right+"px "+-b.bottom+"px "+-b.left+"px";var o=a.onVideoPlayerViewabilityInfoChange||c("emptyFunction"),p=l,q=i(function(a){if(a.time>e.current&&!c("DOMRectIsEqual")(a.boundingClientRect,f.current)){var b=a.boundingClientRect,d=b.height,h=b.width,i=b.x;b=b.y;var j=g.current;d=c("DOMRectReadOnly").fromRect({height:d,width:h,x:i,y:b});f.current=d;e.current=a.time;if(j===null||j<=0)return;if(j<=c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE)return;o({positionToViewport:d,visiblePercentage:j})}},[f,g,o]),r=i(function(a){if(a.time>d.current&&(a.intersectionRatio!==g.current||!c("DOMRectIsEqual")(a.boundingClientRect,f.current))){var b=a.boundingClientRect,h=b.height,i=b.width,j=b.x;b=b.y;var k=a.intersectionRatio;h=c("DOMRectReadOnly").fromRect({height:h,width:i,x:j,y:b});i=n.current;j=i;b=!1;var l=Math.abs((i||0)*100-(k||0)*100);(k!==null&&l>=1||l>0&&k<(i||0))&&(j=k,n.current=k,b=!0);g.current=k;d.current=a.time;l=f.current;f.current=h;e.current=a.time;if(!b&&c("DOMRectIsEqual")(l,h))return;j!==null&&o({positionToViewport:h,visiblePercentage:j})}},[e,f,g,o,d]),s=j(function(){var b=[];for(var a=1;a<=p;a++)b.push("-"+(100-a/p*100)+"% 0% 0% 0%");return b},[p]),t=c("useUnsafeRef_DEPRECATED")([]);t.current=[];for(var u=0;u<s.length;u++)t.current.push(i(c("useIntersectionObserver")(q,{root:null,rootMargin:s[u],threshold:m}),[s[u],m,c("useIntersectionObserver")]));var v=t.current.length,w=i(function(a){for(var b=0;b<v;b++)t.current[b](a)},[v,t]),x=i(c("useIntersectionObserver")(r,{root:null,rootMargin:b,threshold:m}),[r,b,m,c("useIntersectionObserver")]);u=i(function(a){x(a),w(a)},[x,w]);return h.jsx("div",{className:"x5yr21d x1uhb9sk xh8yej3",ref:u,children:h.Children.only(a.children)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerViewabilityContexts",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a(null);c=a(!1);e=a(!1);f=a(null);g.VideoPlayerPassiveViewabilityInfoContext=b;g.VideoPlayerDesktopPictureInPictureContext=c;g.VideoPlayerFullscreenContext=e;g.VideoPlayerExtendedPassiveViewabilityInfoContext=f}),98);
__d("VideoPlayerContexts",["VideoPlayerAudioAvailabilityInfo","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a(null);c=a(!1);e=a("");f=a("");var h=a(null),i=a(0),j=a(0),k=a(!1),l=a(!1),m=a(!0),n=a(!1),o=a(!1),p=a(null),q=a(!1),r=a(!1),s=a(null),t=a(null),u=a(null),v=a(null),w=a([]),x=a("notselected"),y=a(""),z=a(null),A=a(!1),B=a(!1),C=a(null),D=a({setVolume:function(a){},volume:1}),E=a(!1),F=a(0),G=a(0),H=a(null),I=a(null),J=a(null),K=a(null),L=a(!1),M=a(!1),N=a(null),O=a("deny"),P=a(null),Q=a("unknown"),R=a(!1),S=a(!1),T=a({release:function(a){},reserve:function(a){return a}}),U=a([]),V=a(!1),W=a(0),X=a(0),Y=a(null),Z=a(!1);d=a(d("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault);var $=a(1),aa=a(!1),ba=a(!1),ca=a(null),da=a("normal");a=a([]);g.VideoFBIDContext=b;g.IsAbrEnabledContext=c;g.TargetAudioQualityContext=e;g.TargetVideoQualityContext=f;g.AdClientTokenContext=h;g.LoopCountContext=i;g.LoopCurrentContext=j;g.PlayingContext=k;g.StallingContext=l;g.PausedContext=m;g.EndedContext=n;g.InPlayStallingContext=o;g.ErrorContext=p;g.IsLiveContext=q;g.SeekingContext=r;g.ControllerContext=s;g.LastMuteReasonContext=t;g.LastPlayReasonContext=u;g.LastPauseReasonContext=v;g.AvailableVideoQualitiesContext=w;g.SelectedVideoQualityContext=x;g.CurrentVideoQualityContext=y;g.ActiveCaptionsContext=z;g.CaptionsVisibleContext=A;g.CaptionsLoadedContext=B;g.CaptionDisplayStyleContext=C;g.VolumeContext=D;g.MutedContext=E;g.DurationContext=F;g.BufferEndContext=G;g.InstanceKeyContext=H;g.VideoPixelsAspectRatioContext=I;g.DimensionsContext=J;g.PlayerImplementationNameContext=K;g.VideoPlayerMouseHoverContext=L;g.VideoPlayerMouseIdleContext=M;g.BroadcastStatusContext=N;g.CanAutoplayContext=O;g.VolumeSettingContext=P;g.AutoplayGatingResultContext=Q;g.InbandCaptionsAutogeneratedContext=R;g.IsExternalMediaContext=S;g.VideoPlayerCaptionsReservationActionsContext=T;g.VideoPlayerCaptionsReservationsContext=U;g.StreamInterruptedContext=V;g.WatchTimeContext=W;g.LastPlayedTimeContext=X;g.SeekableRangesContext=Y;g.IsLiveRewindActiveContext=Z;g.AudioAvailabilityInfoContext=d;g.PlaybackRateContext=$;g.IsNCSRContext=aa;g.IsPremiumMusicVideoContext=ba;g.InitialTracePolicyContext=ca;g.LatencyLevelContext=da;g.ActiveEmsgBoxesContext=a}),98);
__d("VideoPlayerHooks",["DOMRectIsEqual","VideoPlayerContexts","VideoPlayerViewabilityContexts","clearTimeout","react","removeFromArray","setTimeout","unrecoverableViolation","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=h.useContext,j=h.useEffect,k=h.useRef,l=h.useState;function a(a){var b=k(a);j(function(){b.current=a},[a]);return b}function m(){var a=i(d("VideoPlayerContexts").ControllerContext);if(a==null)throw c("unrecoverableViolation")("Empty ControllerContext. Are you rendering useController outside of VideoPlayerRelay/VideoPlayerX?","comet_video_player");return a}function b(){var a=i(d("VideoPlayerContexts").InstanceKeyContext);if(a==null)throw c("unrecoverableViolation")("Empty InstanceKeyContext. Are you rendering useInstanceKey outside of VideoPlayerRelay/VideoPlayerX?","comet_video_player");return a}function n(){var a=T();return a==="LIVE"}function e(){var a=T();return a==="LIVE"||a==="VOD_READY"}function f(){return i(d("VideoPlayerContexts").BufferEndContext)}function o(){return i(d("VideoPlayerContexts").DurationContext)}function p(){return i(d("VideoPlayerContexts").SeekingContext)}function q(){return i(d("VideoPlayerContexts").EndedContext)}function r(){return i(d("VideoPlayerContexts").ErrorContext)}function s(){return i(d("VideoPlayerContexts").PlayingContext)}function t(){var a=l(0),b=a[0],c=a[1],d=m();j(function(){var a=d.subscribe(function(){c(d.getPlayheadPosition())});c(d.getPlayheadPosition());return function(){return a.remove()}},[d]);return b}function u(a,b){var d=l(0),e=d[0],f=d[1],g=m(),h=k(null),i=k(e);j(function(){var d=g.subscribe(function(){i.current=b?b(g):g.getPlayheadPosition();if(h.current!=null)return;h.current=c("setTimeout")(function(){f(i.current),h.current=null},a)});f(g.getPlayheadPosition());return d.remove},[g,a]);j(function(){return function(){h.current!==null&&(c("clearTimeout")(h.current),h.current=null)}},[]);return e}function v(a){a===void 0&&(a=200);var b=l(0),d=b[0],e=b[1],f=m(),g=n(),h=k(null),i=k(d);j(function(){if(!g)return;var b=f.subscribe(function(){if(h.current!=null)return;h.current=c("setTimeout")(function(){f.getCurrentState().paused||(i.current+=a/1e3,e(i.current)),h.current=null},a)});e(0);return function(){return b.remove()}},[f,a,g]);j(function(){return function(){h.current!==null&&(c("clearTimeout")(h.current),h.current=null)}},[]);return!g?null:d}function w(){var a=m(),b=k([]),d=k(a.isFrozen()),e=c("useStable")(function(){return{getCurrentState:function(){return a.isFrozen()},subscribeToChanges:function(a){var d=b.current;d.push(a);return{remove:function(){return c("removeFromArray")(d,a)}}}}});j(function(){var c=a.subscribe(function(){var c=d.current,e=a.isFrozen();d.current=e;if(e!==c){c=b.current;c.forEach(function(a){return a(e)})}});return function(){c.remove()}},[a]);return e}function x(){return i(d("VideoPlayerContexts").WatchTimeContext)}function y(){return i(d("VideoPlayerContexts").LastPlayedTimeContext)}function z(){return i(d("VideoPlayerContexts").PausedContext)}function A(){return i(d("VideoPlayerContexts").StallingContext)}function B(){return i(d("VideoPlayerContexts").InPlayStallingContext)}function C(){return i(d("VideoPlayerContexts").LastMuteReasonContext)}function D(){return i(d("VideoPlayerContexts").LastPauseReasonContext)}function E(){return i(d("VideoPlayerContexts").LastPlayReasonContext)}function F(){return i(d("VideoPlayerContexts").AvailableVideoQualitiesContext)}function G(){return i(d("VideoPlayerContexts").CaptionsVisibleContext)}function H(){return i(d("VideoPlayerContexts").CaptionDisplayStyleContext)}function I(){return i(d("VideoPlayerContexts").ActiveCaptionsContext)}function J(){return i(d("VideoPlayerContexts").CurrentVideoQualityContext)}function K(){return i(d("VideoPlayerContexts").SelectedVideoQualityContext)}function L(){return i(d("VideoPlayerContexts").MutedContext)}function M(){return i(d("VideoPlayerContexts").VolumeContext).volume}function N(){return i(d("VideoPlayerContexts").VolumeContext).setVolume}function O(){return i(d("VideoPlayerViewabilityContexts").VideoPlayerDesktopPictureInPictureContext)}function P(){return i(d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext)}function Q(){return i(d("VideoPlayerContexts").DimensionsContext)}function R(){return i(d("VideoPlayerContexts").VideoPixelsAspectRatioContext)}function aa(){return i(d("VideoPlayerContexts").PlayerImplementationNameContext)}function ba(){return i(d("VideoPlayerContexts").CaptionsLoadedContext)}function ca(){return i(d("VideoPlayerContexts").IsAbrEnabledContext)}function da(){return i(d("VideoPlayerContexts").TargetVideoQualityContext)}function ea(){return i(d("VideoPlayerContexts").TargetAudioQualityContext)}function fa(){return i(d("VideoPlayerContexts").VideoPlayerMouseHoverContext)}function ga(){return i(d("VideoPlayerContexts").VideoPlayerMouseIdleContext)}function S(){return i(d("VideoPlayerViewabilityContexts").VideoPlayerPassiveViewabilityInfoContext)}function ha(){return i(d("VideoPlayerViewabilityContexts").VideoPlayerExtendedPassiveViewabilityInfoContext)}function ia(){var a=S(),b=l(null),d=b[0],e=b[1],f=k(d);j(function(){f.current=d},[d]);j(function(){if(a){var b=function(){var b=a.getCurrent();if(b){var d=b.positionToViewport;b=b.visiblePercentage;var g=f.current;(g==null||b!==g.visiblePercentage||!c("DOMRectIsEqual")(d,g.positionToViewport))&&e({positionToViewport:d,visiblePercentage:b})}},d=a.subscribe(function(){b()});return function(){return d.remove()}}},[e,a]);return d}function T(){return i(d("VideoPlayerContexts").BroadcastStatusContext)}function ja(){return i(d("VideoPlayerContexts").CanAutoplayContext)}function ka(){return i(d("VideoPlayerContexts").VolumeSettingContext)}function la(){return i(d("VideoPlayerContexts").AutoplayGatingResultContext)}function ma(){return i(d("VideoPlayerContexts").VideoFBIDContext)}function U(){return i(d("VideoPlayerContexts").AdClientTokenContext)}function V(){return i(d("VideoPlayerContexts").LoopCurrentContext)}function W(){return i(d("VideoPlayerContexts").LoopCountContext)}function na(){return i(d("VideoPlayerContexts").InbandCaptionsAutogeneratedContext)}function oa(){return i(d("VideoPlayerContexts").IsExternalMediaContext)}function pa(){return i(d("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext)}function qa(){return i(d("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext)}function ra(){return i(d("VideoPlayerContexts").StreamInterruptedContext)}function sa(){return i(d("VideoPlayerContexts").SeekableRangesContext)}function X(){return i(d("VideoPlayerContexts").IsLiveRewindActiveContext)}function Y(){var a=q(),b=V(),c=W();a=a&&(c===-1||c>0&&b<c);return a}function ta(){var a=q(),b=Y();return a&&!b}function ua(){return i(d("VideoPlayerContexts").PlaybackRateContext)}function va(){return i(d("VideoPlayerContexts").IsNCSRContext)}function Z(){return i(d("VideoPlayerContexts").IsPremiumMusicVideoContext)}function wa(){var a=U()!=null,b=n(),c=Z(),d=X();if(a||c)return!1;if(b)return d;else return!0}function xa(){return i(d("VideoPlayerContexts").InitialTracePolicyContext)}function ya(){return i(d("VideoPlayerContexts").LatencyLevelContext)}function za(){return i(d("VideoPlayerContexts").AudioAvailabilityInfoContext)}function Aa(){var a=U()!=null,b=n(),c=Z();return a||c||b?!1:!0}function $(a){a===void 0&&(a=!0);var b=m();j(function(){if(a){var c=b.registerEmsgObserver();return function(){b.unregisterEmsgObserver(c)}}},[b,a])}function Ba(){$();return i(d("VideoPlayerContexts").ActiveEmsgBoxesContext)}g.useLatestValueRef=a;g.useController=m;g.useInstanceKey=b;g.useIsLive=n;g.useIsVideoBroadcast=e;g.useBufferEnd=f;g.useDuration=o;g.useSeeking=p;g.useEnded=q;g.useError=r;g.usePlaying=s;g.useCurrentTime_DO_NOT_USE=t;g.useCurrentTimeThrottled=u;g.useLiveTimeElapsedThrottled=v;g.useIsFrozenPassive=w;g.useWatchTime=x;g.useLastPlayedTime=y;g.usePaused=z;g.useStalling=A;g.useInPlayStalling=B;g.useLastMuteReason=C;g.useLastPauseReason=D;g.useLastPlayReason=E;g.useAvailableVideoQualities=F;g.useCaptionsVisible=G;g.useCaptionDisplayStyle=H;g.useActiveCaptions=I;g.useCurrentVideoQuality=J;g.useSelectedVideoQuality=K;g.useMuted=L;g.useVolume=M;g.useSetVolume=N;g.useIsDesktopPictureInPicture=O;g.useIsFullscreen=P;g.useDimensions=Q;g.useVideoPixelsAspectRatio=R;g.usePlayerImplementationName=aa;g.useCaptionsLoaded=ba;g.useIsAbrEnabled=ca;g.useTargetVideoQuality=da;g.useTargetAudioQuality=ea;g.useIsHovering=fa;g.useIsMouseIdle=ga;g.useVideoPlayerPassiveViewabilityInfo=S;g.useVideoPlayerExtendedPassiveViewabilityInfo=ha;g.useVideoPlayerViewabilityInfo=ia;g.useBroadcastStatus=T;g.useCanAutoplay=ja;g.useVolumeSetting=ka;g.useAutoplayGatingResult=la;g.useVideoFbid=ma;g.useAdClientToken=U;g.useVideoPlayerCurrentLoop=V;g.useVideoPlayerTotalLoops=W;g.useInbandCaptionsAutogenerated=na;g.useIsExternalMedia=oa;g.useVideoPlayerCaptionsReservations=pa;g.useVideoPlayerCaptionsReservationActions=qa;g.useStreamInterrupted=ra;g.useSeekableRanges_DO_NOT_USE=sa;g.useIsLiveRewindActive=X;g.useIsTransitioningToNextLoop=Y;g.useVideoPlaybackEnded=ta;g.usePlaybackRate=ua;g.useIsNCSR=va;g.useIsPremiumMusicVideo=Z;g.useShouldShowPlaybackRateControl=wa;g.useVideoPlayerInitialTracePolicy=xa;g.useLatencyLevel=ya;g.useAudioAvailabilityInfo=za;g.useShouldPersistPlaybackRate=Aa;g.useEmsgObserver=$;g.useActiveEmsgBoxes=Ba}),98);
__d("createVideoStateHook",["VideoPlayerHooks","gkx","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useEffect,i=e.useRef,j=e.useState,k=new Set();function a(a){var b=new Map();k.add(b);function e(){var a=d("VideoPlayerHooks").useInstanceKey();b.has(a)||b.set(a,{consumers:new Set(),key:a,lastValue:void 0});var e=b.get(a);if(e==null)throw c("unrecoverableViolation")('createVideoStateHook useInstance missing instance by key "'+a+'"',"comet_video_player");return e}function f(a,b){a.consumers.add(b)}function g(a,b){a.consumers["delete"](b)}function l(a,b,c){a.lastValue=b,a.consumers.forEach(function(a){c!==a&&a(b)})}function m(a){var b=e(),c=i(b);c.current=b;a=b.lastValue!=null?b.lastValue:a;var d=i(a);d.current=a;a=j(a);var k=a[0],m=a[1];h(function(){m(d.current);f(b,m);return function(){g(b,m)}},[b]);h(function(){l(c.current,k,m)},[k]);return[k,m]}function a(a){a=m(a);a[0];a=a[1];return a}function n(a){a=m(a);var b=a[0];a[1];return b}return{setterHook:a,stateHook:m,valueHook:n}}function b(a){h(function(){return function(){k.forEach(function(b){b["delete"](a)})}},[a])}f=b;g.createVideoStateHook=a;g.useCleanupVideoStateHooks_INTERNAL=f}),98);
__d("renderVideoPlayerImplementation",["react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){if(a.typename==="VideoPlayerEmptyImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerOzImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerProgressiveImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerShakaImplementation")return h.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else throw c("unrecoverableViolation")('CoreVideoPlayer: Unrecognized implementation typename "'+a.typename+'".',"comet_video_player")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCreateVideoPlayerPassiveViewabilityInfo",["DOMRectReadOnly","react","removeFromArray"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(){var a=h(function(){var a=[],b={positionToViewport:c("DOMRectReadOnly").fromRect({height:0,width:0,x:0,y:0}),visiblePercentage:0};b=null;return{setVideoPlayerPassiveViewabilityInfo:function(c){b=c,a.forEach(function(a){return a()})},videoPlayerPassiveViewabilityInfo:{getCurrent:function(){return b},subscribe:function(b){a.push(b);return{remove:function(){c("removeFromArray")(a,b)}}}}}});a=a[0];var b=a.setVideoPlayerPassiveViewabilityInfo;a=a.videoPlayerPassiveViewabilityInfo;return{setVideoPlayerPassiveViewabilityInfo:b,videoPlayerPassiveViewabilityInfo:a}}g["default"]=a}),98);
__d("videoPlayerUniqueID",["guid"],(function(a,b,c,d,e,f,g){"use strict";function a(){return"id-vpuid-"+c("guid")()}g["default"]=a}),98);
__d("CoreVideoPlayer.react",["CometObjectFitContainer.react","CoreVideoPlayerImplementationCallbacks","ErrorMetadata","VideoPlayerOnViewability.react","VideoPlayerViewabilityContexts","createVideoStateHook","err","gkx","react","renderVideoPlayerImplementation","unrecoverableViolation","useCometSize_DO_NOT_USE","useCreateVideoPlayerPassiveViewabilityInfo","videoPlayerUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useRef,k=b.useState,l=584;function m(a){return a!=null&&isFinite(a)&&a>0?a:0}function n(a){if(a==="video_home_inline"||a==="inline")return{height:l,width:l};else return{height:1080,width:1920}}var o=function(a){var b=c("useCometSize_DO_NOT_USE")(),d=b[0];b=b[1];b=(b=b)!=null?b:n(a);return[b,function(a){return h.jsx(c("CometObjectFitContainer.react"),{debugRole:null,objectFitMode:"CONTAINER_SIZE",ref:d,children:a})}]};function a(a){var b=a.accessToken,e=a.expiredVideoUrlRefreshHandler,f=a.fullscreenController,g=a.implementations,l=a.isFullscreen,n=a.onCoreVideoStatesChanged,p=a.productAttribution,q=a.renderWithCoreVideoStates,r=a.trackingDataEncrypted,s=a.trackingNodes,t=a.viewportMarginsForViewability;a=babelHelpers.objectWithoutPropertiesLoose(a,["accessToken","expiredVideoUrlRefreshHandler","fullscreenController","implementations","isFullscreen","onCoreVideoStatesChanged","productAttribution","renderWithCoreVideoStates","trackingDataEncrypted","trackingNodes","viewportMarginsForViewability"]);var u=k(function(){return c("videoPlayerUniqueID")()});u=u[0];d("createVideoStateHook").useCleanupVideoStateHooks_INTERNAL(u);var v=j(0),w=c("useCreateVideoPlayerPassiveViewabilityInfo")(),x=w.setVideoPlayerPassiveViewabilityInfo;w=w.videoPlayerPassiveViewabilityInfo;var y=o(a.subOrigin),z=y[0];y=y[1];var A=i(function(a){x(a)},[x]);n=d("CoreVideoPlayerImplementationCallbacks").useImplementationCallbacks({coreVideoPlayerMetaData:a,dimensions:z,instanceKey:u,isFullscreen:l,onCoreVideoStatesChanged:n,renderWithCoreVideoStates:q,videoPlayerPassiveViewabilityInfo:w});q=n.onExposedStateChanged;n=n.renderWithExposedState;b={accessToken:b,coreVideoPlayerMetaData:a,dimensions:z,instanceKey:u,playerImplementationInstanceCountRef:v,productAttribution:p,trackingDataEncrypted:r,trackingNodes:s};if(g.length===0){if(!c("gkx")("1611172"))return null;u=c("err")("No implementations given to CoreVideoPlayer");u.metadata=new(c("ErrorMetadata"))();u.metadata.addEntry("COMET_VIDEO","VIDEO_ID",String(a.videoFBID));throw c("unrecoverableViolation")("No implementations given to CoreVideoPlayer","comet_video_player",{error:u})}v=Boolean(a.captionsUrl);p=Boolean(a.isLiveStreaming);u={VideoPlayerShakaPerformanceLoggerClass:a.VideoPlayerShakaPerformanceLoggerClass,alt:a.alt,alwaysShowCaptions:a.alwaysShowCaptions,areCaptionsAutogenerated:a.areCaptionsAutogenerated,audioOnly:a.audioOnly,broadcastLatencySensitivity:a.broadcastLatencySensitivity,bufferEndLimit:a.bufferEndLimit,captionDisplayStyle:a.captionDisplayStyle,captionsUrl:a.captionsUrl,dimensions:z,disableLogging:a.disableLogging===!0,expiredVideoUrlRefreshHandler:e,fullscreenController:f,graphQLVideoDRMInfo:(r=a.graphQLVideoDRMInfo)!=null?r:null,graphQLVideoP2PSettings:(s=a.graphQLVideoP2PSettings)!=null?s:null,inbandCaptionsExpected:p,initialDesiredLatencyMs:a.desiredLatencyMs,initialLatencyToleranceMs:a.latencyToleranceMs,initialRepresentationIds:a.initialRepresentationIds,isClientTriggeredTraceEnabled:a.isClientTriggeredTraceEnabled,loadSequence:a.loadSequence,loggingMetaData:b,loopCount:a.loopCount,onExposedStateChanged:q,preloadForProgressiveDisabled:a.preloadForProgressiveDisabled,renderWithExposedState:n,seoWebCrawlerVideoTracks:a.seoWebCrawlerVideoTracks,sideLoadCaptionsExpected:v,startTimestamp:m(a.startTimestamp),videoFBID:a.videoFBID,videoPlayerPassiveViewabilityInfo:w,videoPlayerShakaPerformanceLoggerBuilder:a.videoPlayerShakaPerformanceLoggerBuilder,wrapVideoPixels_EXPERIMENTAL:a.wrapVideoPixels_EXPERIMENTAL};z=g[0];e=c("renderVideoPlayerImplementation")(z,u);e!=null&&(e=h.jsx(d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext.Provider,{value:l,children:h.jsx(c("VideoPlayerOnViewability.react"),{onVideoPlayerViewabilityInfoChange:A,viewportMargins:t,children:e})}));return y(e)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("DOMContainer.react",["invariant","isNode","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.containerNode=null,c.setContainerNode=function(a){c.containerNode=a;var b=c.props.containerRef;typeof b==="function"&&b(a)},b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.getDOMChild=function(){var a=this.props.children;c("isNode")(a)||h(0,1533);return a};d.shouldComponentUpdate=function(a){return a.children!==this.props.children};d.componentDidMount=function(){var a=this.containerNode;a!=null&&a.appendChild(this.getDOMChild())};d.componentDidUpdate=function(a){a=this.containerNode;if(a==null)return;while(a.lastChild)a.removeChild(a.lastChild);a.appendChild(this.getDOMChild())};d.render=function(){var a=this.props,b=a.display;a=babelHelpers.objectWithoutPropertiesLoose(a,["display"]);b=b==="block"?"div":"span";return i.jsx(b,babelHelpers["extends"]({},a,{ref:this.setContainerNode,children:void 0}))};return b}(i.Component);a.defaultProps={display:"inline"};g["default"]=a}),98);
__d("CoreVideoPlayerFitParentContainer.react",["DOMContainer.react","cr:964538","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=h.forwardRef(function(a,b){var c=a.children;a=a.debugRole;return h.jsx("div",babelHelpers["extends"]({},null,{className:"x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z",ref:b,children:c}))});e=h.forwardRef(function(a,b){var d=a.debugRole;d=a.domElement;return h.jsx(c("DOMContainer.react"),babelHelpers["extends"]({},null,{className:"x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z",display:"block",ref:b,children:d}))});function a(a){a=a.debugRole;a=document.createElement("div");a.className="x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z";return a}g.CoreVideoPlayerFitParentContainer=b;g.CoreVideoPlayerFitParentDOMContainer=e;g.createFitParentContainerDiv=a}),98);
__d("VideoPlayerInteractionOverlay.react",["VideoPlayerHooks","createVideoStateHook","performanceNow","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback,j={hiddenCursor:{cursor:"xjfk50j",$$css:!0},pointer:{cursor:"x1ypdohk",$$css:!0},root:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};b=d("createVideoStateHook").createVideoStateHook(null);var k=b.setterHook;e=b.valueHook;function a(a,b){var e=a.children,f=a.pressInteraction,g=a.style;a=a.xstyle;var l=k(),m=i(function(a){a.preventDefault(),l({left:a.clientX,time:c("performanceNow")(),top:a.clientY})},[l]),n=f==null?void 0:f.handler,o=f==null?void 0:f.onPressStart,p=f==null?void 0:f.onMouseEnter;f=f==null?void 0:f.onMouseLeave;var q=d("VideoPlayerHooks").useIsFullscreen(),r=d("VideoPlayerHooks").useIsMouseIdle();return h.jsx("div",{className:c("stylex")(j.root,!!n&&j.pointer,q&&r&&j.hiddenCursor,a),onClick:n,onContextMenu:m,onMouseEnter:p,onMouseLeave:f,onPointerDown:o,ref:b,role:"presentation",style:g,children:e})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);f=e;g.VideoPlayerInteractionOverlay=b;g.useLastRightClick=f}),98);
__d("VideoPlayerPortalingPlaceInfoProvider.react",["emptyFunction","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");d=e.createContext;var i=e.useContext,j=e.useEffect,k=e.useMemo,l=d(null);function a(a){var b=a.children,c=a.currentPlaceID,d=a.currentVideoID,e=a.portalingEnabled,f=a.previousPlaceMetaData,g=a.thisPlaceID;a=k(function(){return{currentPlaceID:c,currentVideoID:d,portalingEnabled:e,previousPlaceMetaData:f,thisPlaceID:g}},[c,d,e,f,g]);return h.jsx(l.Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";var m=c("emptyFunction");function b(){var a=i(l);m(a);return a==null?{currentPlaceID:null,currentVideoID:null,portalingEnabled:!1,previousPlaceMetaData:null,thisPlaceID:null}:a}g.VideoPlayerPortalingPlaceInfoProvider=a;g.useVideoPlayerPortalingPlaceInfo=b}),98);
__d("GlobalVideoPortsRenderers.react",["CoreVideoPlayer.react","VideoPlayerContexts","VideoPlayerPortalingPlaceInfoProvider.react","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react"),j=i.useEffect,k=i.useState,l=c("emptyFunction").thatReturns(null);function a(a){var b=a.coreVideoPlayerMetaData,e=a.currentPlaceID,f=a.currentVideoID,g=a.fullscreenController,i=a.implementations,j=a.isFullscreen,k=a.onCoreVideoStatesChanged,m=a.previousPlaceMetaData,n=a.trackingDataEncrypted,o=a.trackingNodes;a=a.viewportMarginsForViewability;var p=l;return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:e,currentVideoID:f,portalingEnabled:!0,previousPlaceMetaData:m,thisPlaceID:e,children:h.jsx(c("CoreVideoPlayer.react"),babelHelpers["extends"]({},b,{fullscreenController:g,implementations:i,isFullscreen:j,onCoreVideoStatesChanged:k,renderWithCoreVideoStates:p,trackingDataEncrypted:n,trackingNodes:o,viewportMarginsForViewability:a}))})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.currentPlaceID,c=a.currentVideoID,e=a.previousPlaceMetaData,f=a.renderPlaceholder,g=a.thisPlaceID;a=a.videoPixelsAspectRatio;return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:b,currentVideoID:c,portalingEnabled:!0,previousPlaceMetaData:e,thisPlaceID:g,children:h.jsx(d("VideoPlayerContexts").VideoPixelsAspectRatioContext.Provider,{value:a,children:f!=null?f():null})})}b.displayName=b.name+" [from "+f.id+"]";function e(a){var b=a.currentPlaceID,c=a.currentVideoID,e=a.injectCoreVideoStatesRef,f=a.previousPlaceMetaData,g=a.renderComponents;a=a.thisPlaceID;var i=k(null),l=i[0],m=i[1];i=k(null);var n=i[0],o=i[1];j(function(){e.current=function(a,b){a!=null&&o(function(){return a}),m(b)};return function(){e.current=null}},[e]);if(a===b&&l!=null){if(n!=null)throw n;return h.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:b,currentVideoID:c,portalingEnabled:!0,previousPlaceMetaData:f,thisPlaceID:a,children:g(l)})}else return null}e.displayName=e.name+" [from "+f.id+"]";g.GlobalVideoPortsPlayerRenderer=a;g.GlobalVideoPortsPlaceholderRenderer=b;g.GlobalVideoPortsVideoComponentsRenderer=e}),98);
__d("getViewportDimensions",["UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){var a=null;return function(){var b=document.body;if(b==null)return null;(a==null||!b.contains(a))&&(a=document.createElement("div"),a.style.left=Number.MAX_SAFE_INTEGER+"px",a.style.width="100%",a.style.height="100%",a.style.position="fixed",b.appendChild(a));return a}}();function i(){var a;document.documentElement&&(a=document.documentElement.clientWidth);a==null&&document.body&&(a=document.body.clientWidth);return a||0}function j(){var a;document.documentElement&&(a=document.documentElement.clientHeight);a==null&&document.body&&(a=document.body.clientHeight);return a||0}function k(){return{width:window.innerWidth||i(),height:window.innerHeight||j()}}k.withoutScrollbars=function(){return c("UserAgent").isPlatform("Android")?k():{width:i(),height:j()}};k.layout=function(){var a,b=h();return{width:(a=b==null?void 0:b.clientWidth)!=null?a:i(),height:(a=b==null?void 0:b.clientHeight)!=null?a:j()}};g["default"]=k}),98);