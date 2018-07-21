(function(w,d,$){if(!$){conole.log('jquery not initialized');return!1}
if(w.tilda_stat_callbacks&&w.tilda_stat_callbacks.length>0){}
var tildaParams={};function generateUniqID(){var d=new Date();var uniq='';var random=Math.floor(Math.random()*(999999-100000))+100000;uniq=''+d.getTime()+'.'+random;return uniq}
function getCookie(name){var str,matches=d.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));try{str=decodeURIComponent(matches[1])}catch(e){str=undefined}
return matches?str:undefined}
function setCookie(name,value,options){options=options||{};var expires=options.expires;if(typeof expires=="number"&&expires){var d=new Date();d.setTime(d.getTime()+expires*1000);expires=options.expires=d}
if(expires&&expires.toUTCString){options.expires=expires.toUTCString()}
value=encodeURIComponent(value);var updatedCookie=name+"="+value;for(var propName in options){updatedCookie+="; "+propName;var propValue=options[propName];if(propValue!==!0){updatedCookie+="="+propValue}}
document.cookie=updatedCookie}
var userid=getCookie('tildauid');var sessionid=getCookie('tildasid');w.tildastat=function(event,params){var staturl='https:'+'//stat'+'.tildacdn.'+'com/event/';if(!event){return!1}
if(params){$.extend(tildaParams,params)}
if(!userid){userid=generateUniqID()}
if(!sessionid){sessionid=generateUniqID()}
switch(event){case 'create':var tmp=w.location.hostname;if(tmp.substring(0,4)=='www.'){tmp=tmp.substring(4)}
tildaParams.page=tmp+w.location.pathname;tildaParams.referrer=d.referrer||'';tildaParams.userid=userid;tildaParams.sessionid=sessionid;tildaParams.user_agent=w.navigator.userAgent;tildaParams.user_language=w.navigator.userLanguage||w.navigator.language;tildaParams.projectid=$('#allrecords').data('tilda-project-id')||'0';tildaParams.pageid=$('#allrecords').data('tilda-page-id')||'0';tildaParams.pagealias=$('#allrecords').data('tilda-page-alias')||'';tildaParams.formskey=$('#allrecords').data('tilda-formskey')||'';tildaParams.params={};try{tmp=decodeURIComponent(w.location.search)}catch(e){tmp=w.location.search}
if(tmp>'?'){tildaParams.pagequery=(tmp).substring(1).toLowerCase();if(tildaParams.pagequery.indexOf('utm_')!=-1){var key,arPair,arParams=tildaParams.pagequery.split('&');for(key in arParams){if(arParams[key]){arPair=(arParams[key]).split('=');if(arPair.length>1){tildaParams.params[arPair[0]]=arPair[1]}else{tildaParams.params[arPair[0]]=''}}}}}
var isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile=!0}
tildaParams.ismobile=isMobile;if($('#tildastatscript').length==1){tildaParams.tildastatcode=$('#tildastatscript').get(0).key}
var expiriesDate=new Date();try{if(w.tildaStat_UserExpiriesDays&&w.tildaStat_UserExpiriesDays>0){expiriesDate.setDate(expiriesDate.getDate()+parseInt(w.tildaStat_UserExpiriesDays))}else{expiriesDate.setDate(expiriesDate.getDate()+90)}}catch(e){expiriesDate.setDate(expiriesDate.getDate()+90)}
setCookie('tildauid',userid,{expires:expiriesDate,path:'/'});setCookie('tildasid',sessionid,{expires:1800,path:'/'});break;case 'pageview':if(!tildaParams.page){console.log('TildaStat: Cannot view unknown page');return!1}
if(window.location.protocol!='http:'&&window.location.protocol!='https:'){console.log('TildaStat: cannot work on local page');return!1}
tildaParams.tildautm=getCookie('TILDAUTM')||'';if(tildaParams.referrer==''){tildaParams.referrer=getCookie("previousUrl")||''}
if(tildaParams.page.substring(0,1)=='/'){tildaParams.page=w.location.hostname+tildaParams.page}
if(tildaParams.user_agent>''&&tildaParams.user_agent.indexOf('bot')!=-1){break}
$.ajax({type:"POST",url:staturl,data:tildaParams,dataType:"text",success:function(text){},fail:function(data){console.log('TildaStat: fail pageview');console.log(data)},timeout:3*1000});tildaParams.referrer=tildaParams.page;setCookie("previousUrl",tildaParams.page,{path:"/"});tildaParams.page='';w.tildastatload=!0;break;default:break}};w.tildastat('create');w.setTimeout(function(){w.tildastat('pageview')},2000)})(window,document,jQuery)