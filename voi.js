var form = document.getElementById('addForm');
var itemList = document.getElementById('kaverit');


form.addEventListener('submit', addKaveri);

kaveriList

function addKaveri(e) {
    e.preventDefault();


    var newKaveri = document.getElementById('kaveri');


    var li = document.createElement('li');

    li.className = 'list.group-kaveri';
    
    li.appendChild(document.createTextNode(newKaveri));

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-s float_right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn)

    kaveriList.appendChild(li);
}