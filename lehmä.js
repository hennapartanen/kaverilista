var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var form1 = document.getElementById('addForm1');
var itemList1 = document.getElementById('items1');

var filter = document.getElementById('filter');






form.addEventListener('submit', addItem);

form1.addEventListener('submit', addItem1);

filter.addEventListener('keyup', filterItems1);

itemList1.addEventListener('click', removeItem1);








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



    var deleteBtn = document.createElement('button');
   
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      deleteBtn.appendChild(document.createTextNode('X'));
      li.appendChild(deleteBtn);
      itemList1.appendChild(li);

}

      function removeItem1(e){
        if(e.target.classList.contains('delete')){
          if(confirm('Oletko varma')){
            var li = e.target.parentElement;
            itemList1.removeChild(li);
          }
        }
      }


      function filterItems1(e){
     
        var text1 = e.target.value.toLowerCase();
       
        var items1 = itemList1.getElementsByTagName('li');
      
        Array.from(items1).forEach(function(item1){
          var itemName = item1.firstChild.textContent;
          if(itemName.toLowerCase().indexOf(text1) != -1){
            item1.style.display = 'block';
          } else {
            item1.style.display = 'none';
          }
        })};
