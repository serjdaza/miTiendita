const body = document.getElementsByTagName("body");
const section = body.getElementsByTagName("section");
const form = body.getElementsByTagName("form");

document.getElementsByClassName("item_qty").addEventListener("change", countItems);

function countItems() {
    var rows = document.getElementById("products").rows.length;
    var items = [];
    for (let i = 0; i < rows; i ++){
        let item_num = "item_" + i;
        items.push(item_num);
    }
    for (i in items) {
        document.getElememtById

    }
    
}

function totalize(qty, val) {

    return 
}