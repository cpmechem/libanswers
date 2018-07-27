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
client.send();

qbox.addEventListener('click', choiceListener);

function choiceListener() {
    qboxValue = qbox.value;
    //DIRECTIONAL
    if(qboxValue == 27251 || qboxValue == 27249 || qboxValue == 27252 || qboxValue == 00001 || qboxValue == 00001 || qboxValue == 00003 || qboxValue == 00004 || qboxValue == 00005 || qboxValue == 00006 || qboxValue == 00007 || qboxValue == 00008 || qboxValue == 00009 || qboxValue == 00010)
    {
    	setFields(2, 1, 1, 1);
    }
    //REFERENCE/reserves/reference
    else if(qboxValue == 27248 || qboxValue == 00011)
    {
    	setFields(1, 1, 1, 1);
    }
    //TECHNICAL/tech support/FORTESTOTHERTECH
    else if(qboxValue == 27250)
    {
        setFields(3, 1, 1, 1)
    }
    //FEEDBACK/feedback/FORTESTSUPPLY
    else if(qboxValue == 27253)
    {
        setFields(4, 1, 1, 1)
    }
}

function setFields(f1, f2, f3, f4) {
    document.getElementById('f1').value = f1;
    document.getElementById('f2').value = f2;
    document.getElementById('f3').value = f3;
    document.getElementById('f4').value = f4;

}

function swapFields(){
    showPreDef();
    document.getElementById('qpreselect').value = 0;
}
