var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function showClock(obj){

//Aded by Takeshi Sugimoto on 2008/05/01 for SSL
var str = '';

if(obj.ssl == '1'){
	str = '<embed src="https://web.archive.org/web/20090416132125/https://secure.clocklink.com/clocks/';
}
else{
	str = '<embed src="https://web.archive.org/web/20090416132125/http://www.clocklink.com/clocks/';
}
//--

	str += obj.clockfile;
	str += "?";
		
	for( prop in obj ) {
		if( 'clockfile' == prop 
			|| 'width' == prop
			|| 'height' == prop
			|| 'wmode' == prop
			|| 'type' == prop
		) continue;
	
		//Added by takeshi on 2007/01/29 (to display mutibyte chars by using URL encoding)
		if(prop == "Title" || prop == "Message"){
			str += ( prop + "=" + obj[prop] + "&" );
		}
		else{
			str += ( prop + "=" + _escape(obj[prop]) + "&" );
		}
		//--
	}
	str += '" ';
	str += ' width="' + obj.width + '"';
	str += ' height="' + obj.height + '"';
	str += ' wmode="' + obj.wmode + '"';
	str += ' type="application/x-shockwave-flash">';
	
	document.write( str );
}

function _escape(str){
	str = str.replace(/ /g, '+');
	str = str.replace(/%/g, '%25');
	str = str.replace(/\?/, '%3F');
	str = str.replace(/&/, '%26');
	return str;
}

function showBanner(BannerLink){
	document.write(BannerLink);
}

}
/*
     FILE ARCHIVED ON 13:21:25 Apr 16, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:36:05 Nov 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.815
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 10.291
  LoadShardBlock: 88.362 (6)
  PetaboxLoader3.datanode: 102.693 (7)
  load_resource: 148.671
  PetaboxLoader3.resolve: 109.237
*/