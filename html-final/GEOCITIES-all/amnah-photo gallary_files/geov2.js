var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var ycsdone;
function geovisit()
{
  var z;
  if (ycsdone)
    return;
  z="&r="+escape(document.referrer);
  z=z+"&b="+escape(navigator.appName+" "+navigator.appVersion);
  w=parseFloat(navigator.appVersion);
  if (w > 2.0) {
    z=z+"&s="+screen.width+"x"+screen.height;
    z=z+"&o="+navigator.platform;
    v="1.2";
    if (navigator.appName != "Netscape") {
      z=z+"&c="+screen.colorDepth;
    } else {
      z=z+"&c="+screen.pixelDepth
    }
    z=z+"&j="+navigator.javaEnabled();
  } else {
    v=1.0;
  }
  z=z+"&v="+v;
  document.writeln("<IMG BORDER=0 SRC=\"http://visit.geocities.com/visit.gif?"+z+"\">");
  ycsdone=1;
}

}
/*
     FILE ARCHIVED ON 19:39:26 Nov 08, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:45:45 Nov 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.681
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 26.182
  LoadShardBlock: 117.131 (3)
  PetaboxLoader3.datanode: 87.365 (4)
  PetaboxLoader3.resolve: 65.357 (2)
  load_resource: 71.783
*/