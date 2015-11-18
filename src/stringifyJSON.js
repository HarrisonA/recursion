// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) { 
  if (obj === undefined) return;  // undefined - DO NOT stringify 
  if (typeof obj === "function") return;  //functions - DO NOT stringify

	if (Array.isArray(obj)){               //obj is an array
     if (obj.length === 0){return "[]";} //empty erray

     if (obj.length === 1){   //array of a single element
        var text = "\[";
        text += stringifyJSON(obj[0]);
        text += "\]";
        return text;
     }
		    
    var text = "";
    for (var i=0; i<obj.length; i++){
      if (i===0) {   // the first element needs the open bracket
        text +="\[";
        text += stringifyJSON(obj[i]); //recursive call 

      } else if (i===obj.length-1){    //the last element of the array
        text += "\,";  // add a comma before this element
        text += stringifyJSON(obj[i]); //recursive call
        text += "\]";  //last elements needs a close bracket
        return text;

      } else {  
          text +="\,"; //add a comma before this element
          text += stringifyJSON(obj[i]);  //recursive
      }

    } 

	   //end of array code
	} else if ((obj !== null) && (typeof obj === 'object')){  
            //obj is an object, but NOT a null
    
    if(jQuery.isEmptyObject(obj)){  //empty object
      return "{}";  //empty object
    }

    var text = "\{";  // start string with "{"
    var skipTheSlice = true;  //only slice stringable elements 
    for (var member in obj){  //loop through all objects items
      if ( (obj[member] === null) || ((obj[member] != undefined)  && (typeof obj[member] !="function"))  ){ 
        skipTheSlice = false;
        text += stringifyJSON(member);
        text += "\:";
        text += stringifyJSON(obj[member]);
        text += "\,";
      }
    }

    if (skipTheSlice === false) 
      {text = text.slice(0,-1);}  // remove the last char of 
                                  // the string...i.e. the extra comma (,) at the end
    text += "\}";  // close the string with "}"
    return text; 

    // end of obj code
	} else if (typeof obj === 'string'){  //obj is a string
		var myString = "\"";  myString += obj;  myString += "\"";
		return myString;

	} else { 
		var text = "";
		text += obj;
		return text;
	}
	
};  // end of stringifyJSON function


