var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
<!--hide script from old browsers
//No Click! - version 0.6 - Main programme
//Copyright © 1997 - 1999 by Enigma ® Designs and Kallback Africa. All rights reserved
//Simply -  http://www.kallbackafrica.com/simply
//mirror at http://www.kallback.co.za/simply
//Programmed by Michel van Baalen - michel@kallback.co.za
//This script may not be used without permission
//
// DO NOT change ANY of the following code !!!
//
BroW = parseInt(navigator.appVersion)
if (BroW >= 4) {Vs = true} else {Vs = false}
if (Vs == true) {
  Wid = screen.availWidth - 30
  Hei = screen.availHeight + 50
  Left = Math.floor((Wid - 350) / 2) ; Top = Math.floor((Hei - 100) / 2)
  if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN)
  }
  document.onmousedown = noClick
}
//
function noClick (e) {
  flag = false
  if (document.layers) {which = e.which ; if (which == 3) {flag = true}
  } else {which = event.button ; if (which == 2) {flag = true}}
  if (flag) {
    alert('Sorry, but the copying of images from this site is forbidden.\nPlease obtain permission from the webmaster to use\nour images!')
    return false
  }
}
//
//-- end hiding --> 

}
/*
     FILE ARCHIVED ON 15:15:44 Oct 21, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:42:04 Nov 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.395
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 120.816
  LoadShardBlock: 163.854 (3)
  PetaboxLoader3.datanode: 185.244 (4)
  PetaboxLoader3.resolve: 724.017 (2)
  load_resource: 763.878
*/