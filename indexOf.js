(function($){
 var o=$.Array.prototype,p='indexOf';
 if(!(p in o && o[p])){
	o[p]=function(a,b){var i,e=p(this),l=e.length>>>0,r=-1;if(l>0){i=o.abs(+b||0);if(i<l){for(i=o.max(0<=i?i:l-i,0);i<l;++i){if(i in e && e[i]===a){r=i;break}}}};return r};
	o=$.Math,p=$.Object;
 }
})(window);
