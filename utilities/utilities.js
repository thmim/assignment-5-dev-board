function getInputValueById(Id){
    const values = document.getElementById(Id).innerText;
    const convertedValue = parseInt(values);
    return convertedValue;
 }

 function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText=value;
 }