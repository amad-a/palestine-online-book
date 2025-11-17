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
  document.writeln("<img border=\"0\" style=\"display:none\" src=\"http://visit.geocities.com/visit.gif?"+z+"\">");
  ycsdone=1;
}

}
/*
     FILE ARCHIVED ON 08:05:03 Apr 16, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:36:10 Nov 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.977
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.014
  esindex: 0.015
  cdx.remote: 8.838
  LoadShardBlock: 224.143 (6)
  PetaboxLoader3.datanode: 166.215 (7)
  PetaboxLoader3.resolve: 133.828 (3)
  load_resource: 119.022
*/