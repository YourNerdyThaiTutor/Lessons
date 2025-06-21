function printTable(name){
             
    var table = document.getElementById(name);

    var s = "";
  for (var i = 1;i< table.rows.length; i++) {
     s+=table.rows[i].firstElementChild.textContent+",";  
  }
    var url = "./Handwriting.html?product="+s;
    window.open(url, '_blank').focus();
}

function findCurrentLetter(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('product');
    return product;
}
function ShowPage(){
    var curr = findCurrentLetter();
    var practice = document.getElementById("practice");
    var l = curr.split(",");
    for(let j = 0; j< l.length;j++){
        for(let i=0;i<50;i++){
        practice.innerHTML += l[j]+"  ";
        }
    }
    
    window.print();
}

