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
function MakeArray(n) {this.length = n ; return this}
//
var Days = new MakeArray(7)
var Months = new MakeArray(12)
Days[1]="Sunday"
Days[2]="Monday"
Days[3]="Tuesday"
Days[4]="Wednesday"
Days[5]="Thursday"
Days[6]="Friday"
Days[7]="Saturday"
Months[1]="January"
Months[2]="February"
Months[3]="March"
Months[4]="April"
Months[5]="May"
Months[6]="June"
Months[7]="July"
Months[8]="August"
Months[9]="September"
Months[10]="October"
Months[11]="November"
Months[12]="December"
var lastMod = new Date()
var today = new Date()
var year = (today.getYear()+1900)
if (year >= 2100) {
 year = (year - 1900)
}
function getDate(theDate) {
 return Days[theDate.getDay()+1] + " " + theDate.getDate() + " " +
 Months[theDate.getMonth()+1] + " " + [theDate.getYear()] + "."
}

lastMod.setTime(Date.parse(document.lastModified))
document.write('<P ALIGN="CENTER">')
document.write('<FONT SIZE="-1" COLOR="#000000" FACE="arial,geneva">')
document.write('© Copyright 1996 - ' + year + ' by ')
document.write('<b>BARGHOUTI.COM</b> - All Rights Reserved.')
document.write('</FONT></P>')
document.write('<BR><BR></B></CENTER>')
//-- end hiding -->


}
/*
     FILE ARCHIVED ON 15:44:10 Sep 19, 2000 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:41:59 Nov 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.495
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 25.506
  LoadShardBlock: 105.809 (3)
  PetaboxLoader3.datanode: 731.053 (4)
  load_resource: 709.634
  PetaboxLoader3.resolve: 68.534
*/