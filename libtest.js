// ==UserScript==
//@include http://libanswers.utsa.edu/record.php*
//@author Marcus Jackson
//@editor Esteban Cantu
//@editor Caleb Mechem


var qbox = document.getElementById('qpreselect');
var qboxValue, text, client, qcombo, option, textByLine;


client = new XMLHttpRequest();
client.open('GET', 'https://cpmechem.github.io/libanswers/options.txt');
client.onreadystatechange = function() {
    if (client.readyState == 4 && client.status == 200){
        text = client.responseText.split('\n');
        createOptions(text);
    }
}
+client.send();

qbox.addEventListener('click', choiceListener);

function choiceListener() {
    qboxValue = qbox.value;
    //laptop/GIFM/Dibs/other tech
    if(qboxValue == 27251 || qboxValue == 27252 || qboxValue == 27249 || qboxValue == 27250 || 
      qboxValue == 27253)
    {
    	setFields(2, 1, 3, 1);
    }
    //course reserve
    else if(qboxValue == 27248)
    {
    	setFields(1, 1, 1, 1);
    }

}

function setFields(f1, f2, f3, f4) {
    document.getElementById('f1').value = f1;
    document.getElementById('f2').value = f2;
    document.getElementById('f3').value = f3;
    document.getElementById('f4').value = f4;
}

//generate new options
function createOptions(textByLine){  
    qcombo = document.getElementById('qpreselect');
    for(i=0; i < textByLine.length-1; i++){
        option = document.createElement('option');
        option.text = textByLine[i];
        option.value = i+1;
        qcombo.appendChild(option);
    }
}

function swapFields(){
    showPreDef();
    document.getElementById('qpreselect').value = 0;
}
