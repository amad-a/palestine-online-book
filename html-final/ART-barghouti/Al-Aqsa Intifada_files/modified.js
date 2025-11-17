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
     FILE ARCHIVED ON 17:05:12 Dec 08, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:35:56 Nov 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 25.398
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 85.257
  LoadShardBlock: 416.795 (3)
  PetaboxLoader3.datanode: 370.616 (4)
  PetaboxLoader3.resolve: 48.208
  load_resource: 30.46
*/