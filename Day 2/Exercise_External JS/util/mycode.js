//This is an example of named function - internal JS
function anubhavIsHere(){
    //alert('welcome to JS');
    //document.write("<h1 style='color:red'>Login Successful</h1>"); 
    //var oUser = document.getElementById("idFn");
    //chaining in java script
    //var sVal = document.getElementById("idFn").value;
    console.log(document.getElementById("idFn").value);
}
function onLogin(){
    //step 1: read the value of user name field object from DOM 
    var oUser = document.getElementById("idFn");
    //Step 2: Since its input we get its value in another variable
    var sUserName = oUser.value;
    var sPassword = document.getElementById("idPwd").value;
    //Step 3: change the DOM using the name
    if(sUserName === sPassword){
        document.write('Welcome ' + sUserName + "!!");
    }else{
        //4th oputput function
        var oMsg = document.getElementById("msg");
        oMsg.innerHTML = "Please correct credentials!!";
    }
    
}

function onMagic(){
	//step 1: get all the elements with class name box-title ---> array 
	var aBoxTitle = document.getElementsByClassName("box-title");
	//step 2: loop over the array elements (ui) --> inside each loop pass, we will process
	for(var i=0; i<aBoxTitle.length; i++){
		//Step 3: each loop pass, we get access to individual elements one by one
		var oTitleElement = aBoxTitle[i];
		oTitleElement.style.backgroundColor = "black";
		oTitleElement.style.color = "white";
	}
	
}

function addElement(){

    //Step 2: Create text node which hold free text
    var aNames = document.getElementById("idFn").value.split(",");
    for(var i=0;i<aNames.length;i++){
        var sName = aNames[i];
        //Step 1: Create a brand new element of type h3 tag
        var oElement = document.createElement("h3");
        var sText = document.createTextNode(sName);
        //Step 3: add the text node inside a new element
        oElement.appendChild(sText);
        //Step 4: Refer to a canvas on screen
        var oHolder = document.getElementById("canvas");
        //Step 5: Add the newly created element on the page
        oHolder.appendChild(oElement);
    }
    

}

