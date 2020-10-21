
// The two functions are to keep hidden and then pop up an image depending on mouse over or mouse out events. 
function hideImage () {
    document.getElementById("popupLinkContainer").style.visibility = "hidden";    
}

function showImage (link) {
    document.getElementById("popupLink").innerHTML = "<img src='" + link + "' width=200 height=100 />";
    document.getElementById("popupLinkContainer").style.visibility = "visible";
}

// Here we check if the typed number in negative or positive. If the user puts a negative number, he gets alerted with an alert window and a red border of the field. The function loops all the fields of the table.

function validateForm() {
// The function loops all the fields of the table.
    for (let i = 0; i < document.forms.length - 1; i++) {
        if ((i + 1) % 7 == 0 ) {
            continue;
        }
        const value = parseInt(document.forms[i].inputTime.value);
        // checking if the input is not a number or less than 0
        if (isNaN(value) || value < 0) {
            alert("Number of minutes can't be below zero. Type correct number!");
            document.forms[i].inputTime.style.borderColor = "red";            

            return false;
        }      
        document.forms[i].inputTime.style.borderColor = "";
    }
}


// In this function we add the user input values from each field.

var getSum = function (numArray) {

    var totalNum = 0

    for(i=0; i<numArray.length; i++) {

        if(!isNaN(numArray[i]) || numArray[i] > 0) {
            totalNum += parseInt(numArray[i])
        } 
    }
    return totalNum > 0 ? totalNum : 0;
}



// Summing up and displaying the values from the first row.

var add1 = function() {
    var i1 =  parseInt(document.getElementById('inputTime1').value)
    var i2 =   parseInt(document.getElementById('inputTime2').value)
    var i3 =   parseInt(document.getElementById('inputTime3').value)
    var i4 =   parseInt(document.getElementById('inputTime4').value)
    var i5 =   parseInt(document.getElementById('inputTime5').value)
    var i6 =   parseInt(document.getElementById('inputTime6').value)

    document.getElementById('week1').innerHTML = getSum([i1,i2,i3,i4,i5,i6]) 
}

//Summing up and displaying the values from the second row.

var add2 = function() {
    var i7 =  parseInt(document.getElementById('inputTime7').value)
    var i8 =   parseInt(document.getElementById('inputTime8').value)
    var i9 =   parseInt(document.getElementById('inputTime9').value)
    var i10 =   parseInt(document.getElementById('inputTime10').value)
    var i11 =   parseInt(document.getElementById('inputTime11').value)
    var i12 =   parseInt(document.getElementById('inputTime12').value)
    document.getElementById('week2').innerHTML = getSum([i7,i8,i9,i10,i11,i12]) 
}

//Summing up and displaying the values from the third row.

var add3 = function() {
    var i13 =  parseInt(document.getElementById('inputTime13').value)
    var i14 =   parseInt(document.getElementById('inputTime14').value)
    var i15 =   parseInt(document.getElementById('inputTime15').value)
    var i16 =   parseInt(document.getElementById('inputTime16').value)
    var i17 =   parseInt(document.getElementById('inputTime17').value)
    var i18 =   parseInt(document.getElementById('inputTime18').value)
    document.getElementById('week3').innerHTML = getSum([i13,i14,i15,i16,i17,i18]) 
}

//Summing up and displaying the values from the forth row.

var add4 = function() {
    var i19 =  parseInt(document.getElementById('inputTime19').value)
    var i20 =   parseInt(document.getElementById('inputTime20').value)
    var i21 =   parseInt(document.getElementById('inputTime21').value)
    var i22 =   parseInt(document.getElementById('inputTime22').value)
    var i23 =   parseInt(document.getElementById('inputTime23').value)
    var i24 =   parseInt(document.getElementById('inputTime24').value)
    document.getElementById('week4').innerHTML = getSum([i19,i20,i21,i22,i23,i24]) 
}

// Summing up and displaying the values from the all yoga column.

var yogaSum = function() {
var y1 =  parseInt(document.getElementById('inputTime1').value)
var y2 =   parseInt(document.getElementById('inputTime7').value)
var y3 =   parseInt(document.getElementById('inputTime13').value)
var y4 =   parseInt(document.getElementById('inputTime19').value)

document.getElementById('allYoga').innerHTML = getSum([y1,y2,y3,y4])
}

// Summing up and displaying the values from all fast run column.

var fastRunSum = function() {
    var y5 =  parseInt(document.getElementById('inputTime2').value)
    var y6 =   parseInt(document.getElementById('inputTime8').value)
    var y7 =   parseInt(document.getElementById('inputTime14').value)
    var y8 =   parseInt(document.getElementById('inputTime20').value)
    
    document.getElementById('allRunning').innerHTML = getSum([y5,y6,y7,y8]) 
}

// Summing up and displaying the values from all swimming column.

var swimmingSum = function() {
    var y9 =  parseInt(document.getElementById('inputTime3').value)
    var y10 =   parseInt(document.getElementById('inputTime9').value)
    var y11 =   parseInt(document.getElementById('inputTime15').value)
    var y12 =   parseInt(document.getElementById('inputTime21').value)
        
    document.getElementById('allSwimming').innerHTML = getSum([y9,y10,y11,y12]) 
}

 //Summing up and displaying the values from the all biking column.

 var bikingSum = function() {
    var y13 =  parseInt(document.getElementById('inputTime4').value)
    var y14 =   parseInt(document.getElementById('inputTime10').value)
    var y15 =   parseInt(document.getElementById('inputTime16').value)
    var y16 =   parseInt(document.getElementById('inputTime22').value)
    
    document.getElementById('allBiking').innerHTML = getSum([y13,y14,y15,y16]) 
}

//Summing up and displaying the values from the all gym column.

var gymSum = function() {
    var y17 =  parseInt(document.getElementById('inputTime5').value)
    var y18 =   parseInt(document.getElementById('inputTime11').value)
    var y19 =   parseInt(document.getElementById('inputTime17').value)
    var y20 =   parseInt(document.getElementById('inputTime23').value)
            
    document.getElementById('allGym').innerHTML = getSum([y17,y18,y19,y20]) 
}

//Summing up and displaying the values from the all long run column.

var longRunSum = function() {
    var y21 =  parseInt(document.getElementById('inputTime6').value)
    var y22 =   parseInt(document.getElementById('inputTime12').value)
    var y23 =   parseInt(document.getElementById('inputTime18').value)
    var y24 =   parseInt(document.getElementById('inputTime24').value)
            
    document.getElementById('allLongRun').innerHTML = getSum([y21,y22,y23,y24]) 
}

               