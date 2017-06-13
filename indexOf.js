;(function($){
	var P=$.Array.prototype,M=$.Math;
	P.indexOf||(P.indexOf=function(a,b){
	 var i,e=Object(this),l=e.length>>>0,r=-1;
	 if(l>0){i=M.abs(+b||0);if(i<l){for(i=M.max(0<=i?i:l-i,0);i<l;++i){if(i in e && e[i]===a){r=i;break}}}};
	 return r;
	});
})(window);
