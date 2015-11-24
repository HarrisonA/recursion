var getElementsByClassName = function(className){ 
	var returnArray = [];  
  	var actualRecursiveFunction = function (className, startingPoint){  //startingPoint is an array of child nodes

  		if (startingPoint === undefined){  //true only for the first getElementsByClassName function call
  			if($(document.body).hasClass(className)){  //jQuery  check if the body has className
  				returnArray.push(document.body);  
  			}

  			var nodes = document.body.childNodes;  // returns an array of all childnodes of <body> 
  			var length = nodes.length;

  		} else {   //startingPoint was passed in

  			var nodes = startingPoint.childNodes;  //returns an array of childnodes of startingPoint
  			var length = nodes.length;
  		}

		for (var i=0; i<length; i++){  		
  			if ($(nodes[i]).hasClass(className)){   // jQuery check the class of each childNode
  				returnArray.push(nodes[i]);     	// push the match into the array 
  			} 
  		
  			actualRecursiveFunction(className, nodes[i]);  //recursive call on that child to check its children
	  		 		
  		}

		return returnArray;    
	} // end of actualRecursiveFunction 
	
	return actualRecursiveFunction(className);  //returns the complete returnArray after all recursive calls finish

};  //end of getElementsByClassName 



/*

# Basic Requirements

- [ ] Implement `getElementsByClassName` with your own function in `src/getElementsByClassName.js`, and make the specs pass.
- [ ] You should use `document.body`, `element.childNodes`, and `element.classList`

*/