# js-polyfill-indexOf-v4
Array.prototype.indexOf

	/*
	;(function($){

	var P=$.Array.prototype,M=$.Math;
	P.indexOf||(P.indexOf=function(a,b){
	 var i,e=Object(this),l=e.length>>>0,r=-1;
	 if(l>0){i=M.abs(+b||0);if(i<l){for(i=M.max(0<=i?i:l-i,0);i<l;++i){if(i in e && e[i]===a){r=i;break}}}};
	 return r;
	});

	})(window);
	*/

	(function($){
	 var o=$.Array.prototype,p='indexOf';
	 if(!(p in o && o[p])){
		o[p]=function(a,b){var i,e=p(this),l=e.length>>>0,r=-1;if(l>0){i=o.abs(+b||0);if(i<l){for(i=o.max(0<=i?i:l-i,0);i<l;++i){if(i in e && e[i]===a){r=i;break}}}};return r};
		o=$.Math,p=$.Object;
	 }
	})(window);







//#
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0



//#
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);// [0, 2, 4]


//#
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log("New veggies collection is : " + veggies);
  } else {
    if (veggies.indexOf(veggie) > -1) {
      console.log(veggie + " already exists in the veggies collection.");
    }
  }
}
var veggies = ["potato", "tomato", "chillies", "green-pepper"];
updateVegetablesCollection(veggies, 'spinach'); 
// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach'); 
// spinach already exists in the veggies collection.
