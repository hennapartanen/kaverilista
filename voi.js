var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var form1 = document.getElementById('addForm1');
var itemList1 = document.getElementById('items1');

var filter = document.getElementById('filterForm');



form.addEventListener('submit', addItem);

form1.addEventListener('submit', addItem1);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);


function addItem(e) {
    e.preventDefault();


    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list.group-item';
    li.appendChild(document.createTextNode(newItem));

   
    itemList.appendChild(li);
}







function addItem1(a) {
    a.preventDefault();


    var newItem1 = document.getElementById('item1').value;
    var li = document.createElement('li');
    li.className1 = 'list.group-item1';
    li.appendChild(document.createTextNode(newItem1));

   
    itemList1.appendChild(li);
}

function removeItem(e) {
    var removeItem = document.getElementById().value;
    
}

function filterItems(e){

    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
