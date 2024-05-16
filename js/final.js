document.addEventListener('DOMContentLoaded', function(){
    loadXMLDoc();
})

function loadXMLDoc() {
    const url='https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496';
    //const url = "./xml/sample-1.xml";

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let xmlDoc = this.responseXML;
            printData(xmlDoc);
        }
    }

    xmlhttp.open("GET", url);
    xmlhttp.send();
};

function printData(xmlDoc){
    let objectData = xmlDoc.getElementsByTagName("spatiaUnity");

    for (let i = 0; i < objectData.length; i++) {
        let newRow = document.createElement("tr");
        newRow.id = 'row'+i;
        document.getElementById("myTableBody").appendChild(newRow);
        let newCol01 = document.createElement('td');
        newCol01.getElementById("row"+i).appendChild(newCol01);

        let newCol02 = document.createElement('td');
        newCol02.innerHTML = objectData[i].children[4].children[1].children[1].innerHTML;
        document.getElementById("row"+i).appendChild(newCol02);
    }
};
