(function(a){a.mapKey=function(c,d,b){var e=a.extend({},a.fn.mapKey.defaults,b);a.fn.mapKey.storeBinding(c,d,e.direction)};a.fn.mapKey=function(c,b){var d=a.extend({},a.fn.mapKey.defaults,b);return this.each(function(){var g=a(this);var h=a.meta?a.extend({},d,g.data()):d;var e="";var f;if(h.trigger){f=function(){g.trigger(h.trigger)}}else{if(g.is("a[href]")){f=function(){window.location=g.attr("href")}}}a.fn.mapKey.storeBinding(c,f,h.direction)})};a.fn.mapKey.storeBinding=function(b,d,f){if(typeof b=="number"){if(f=="up"){a.fn.mapKey.bindings.up[b]=d}else{a.fn.mapKey.bindings.down[b]=d}}else{var c=a.fn.mapKey.keys[b];if(typeof c=="number"){if(f=="up"){a.fn.mapKey.bindings.up[c.toString()]=d}else{a.fn.mapKey.bindings.down[c.toString()]=d}}else{if(typeof c=="object"){a.each(c,function(g,e){if(f=="up"){a.fn.mapKey.bindings.up[e.toString()]=d}else{a.fn.mapKey.bindings.down[e.toString()]=d}})}}}};a.fn.mapKey.kdown=function(d){if(a.fn.mapKey.enabled){var b=d.charCode?d.charCode:d.keyCode?d.keyCode:0;if(!a(d.target).is("input, textarea, select")){var c=a.fn.mapKey.bindings.down[b];if(c){if(typeof c=="string"){window.location=c}else{if(typeof c=="function"){c()}}d.preventDefault()}if(a.fn.mapKey.bindings.up[b]!=undefined){d.preventDefault()}}}};a.fn.mapKey.kup=function(d){if(a.fn.mapKey.enabled){if(!a(d.target).is("input, textarea, select")){var b=d.charCode?d.charCode:d.keyCode?d.keyCode:0;var c=a.fn.mapKey.bindings.up[b];if(c){if(typeof c=="string"){window.location=c}else{if(typeof c=="function"){c()}}d.preventDefault()}}}};a.fn.mapKey.enable=function(){a.fn.mapKey.enabled=true};a.fn.mapKey.disable=function(){a.fn.mapKey.enabled=false};a.fn.mapKey.defaults={trigger:undefined,direction:"up"};a.fn.mapKey.enabled=true;a.fn.mapKey.bindings={up:{},down:{}};a.fn.mapKey.keys={back:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,opt:18,pause:19,caps:20,esc:27,space:32,pgup:33,pgdown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,del:46,top0:48,top1:49,top2:50,top3:51,top4:52,top5:53,top6:54,top7:55,top8:56,top9:57,"0":[48,96],"1":[49,97],"2":[50,98],"3":[51,99],"4":[52,100],"5":[53,101],"6":[54,102],"7":[55,103],"8":[56,104],"9":[57,105],a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,lwindows:91,rwindows:92,windows:[91,92],lcmd:91,rcmd:92,cmd:[91,92],select:93,num0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,multiply:106,add:107,subtract:109,decimalpt:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,backslash:220,"]":221,singlequote:222};a(document).bind("keyup",a.fn.mapKey.kup);a(document).bind("keydown",a.fn.mapKey.kdown)})(jQuery);

$(".btn-new-issue").mapKey("c");
$("a[highlight='issues']").mapKey("o");

if ( /\/issues\/new$/.test(document.location.href) ) {
  $("#issue_title:first").focus();
}



