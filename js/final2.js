function loadXMLDoc() {
    const url='https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496';

    fetch(url)
    .then(response => response.text())
    .then(xmlData => {
        const parser = new DOMparser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
        
        let objectData = xmlDoc.getElementsByTagName("spatialUnit");


    for (let i = 0; i < objectData.length; i++) {
        let newRow = document.createElement("tr");
        newRow.id = 'row'+i;
        document.getElementById("myTableBody").appendChild(newRow);
        let newCol01 = document.createElement('td');
        newCol01.innerHTML = objectData[i].children[0].children[0].innerHTML;
        document.getElementById("row"+i).appendChild(newCol01);
        console.log(objectData[i].children[0].children[0].innerHTML);

        let newCol02 = document.createElement('td');
        newCol02.innerHTML = objectData[i].children[4].children[1].children[1].innerHTML;
        document.getElementById("row"+i).appendChild(newCol02);
        console.log(newCol02);
    }})
}
