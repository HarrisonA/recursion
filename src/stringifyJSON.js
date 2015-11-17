// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) { 
	console.log("current obj is: ",obj);
	if (Array.isArray(obj)){  //obj is an array
	
		

	
	} else if ((obj !== null) && (typeof obj === 'object')){  //obj is an object not null


	} else if (typeof obj === 'string'){  //obj is a string
		var myString = "\"";  myString += obj;  myString += "\"";
		//console.log ("...Return this string:", myString);
		return myString;

	} else { 
		var text = "";
		text += obj;
		console.log(text);
		return text;
	}
	// SOLA	right this algorithm on paper
	// psuedo code it   
	// THEN code it

	// Don't forget, what is the base case, termination case and recursion

  /* parameter "obj" will be either:
  one value 
  an array of values  (which may be other arrays)
  an object that contains arrays or other objects
  
  // your code goes here
  // Psuedocode

  // go thru each element of the array and stringify it
  // HOW???  

  // check is it an array, object, null, a literal, etc
	// if an array, then go through each element
		// and add it to the string
		/* example:  
		//   var text ="";
		//   for (var member in list) {
        //	  text += list[member];
		//   } 


  	obj.forEach(function(objToStringify){
	 

   });
  // 
*/

};


/*
var stringifiableObjects = [
  9,
  null,
  true,
  false,
  "Hello world",
  [],
  [8],
  ["hi"],
  [8, "hi"],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[],3,4]],
  [[[["foo"]]]],
  {},
  {"a": "apple"},
  {"foo": true, "bar": false, "baz": null},
  {"boolean, true": true, "boolean, false": false, "null": null },
  // basic nesting
  {"a":{"b":"c"}},
  {"a":["b", "c"]},
  [{"a":"b"}, {"c":"d"}],
  {"a":[],"c": {}, "b": true}
];

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
unstringifiableValues = [
  {
    'functions': function(){},
    'undefined': undefined
  }
];
 */