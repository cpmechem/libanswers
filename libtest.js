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
    if(qboxValue == 36023 || qboxValue == 36024 || qboxValue == 36025 || qboxValue == 36026 || qboxValue == 36027 || qboxValue == 36028 || qboxValue == 36029 || qboxValue == 36030 || qboxValue == 36031 || qboxValue == 36034 || qboxValue == 36035 || qboxValue == 36036)
    {
    	setFields(2, 1, 1, 1, 0);
    }
    //REFERENCE/reserves/reference
    else if(qboxValue == 36022 || qboxValue == 36032)
    {
    	setFields(1, 1, 1, 1, 0);
    }
    //TECHNICAL/tech support
    else if(qboxValue == 36033)
    {
        setFields(3, 1, 1, 1, 0)
    }
    //FEEDBACK/feedback
    else if(qboxValue == 36037)
    {
        setFields(0, 0, 0, 0, 0)
    }
}

function setFields(f1, f2, f3, f4, f5) {
    document.getElementById('f1').value = f1;
    document.getElementById('f2').value = f2;
    document.getElementById('f3').value = f3;
    document.getElementById('f4').value = f4;
    document.getElementByID('f5').value = f5;

}

function swapFields(){
    showPreDef();
    document.getElementById('qpreselect').value = 0;
}
