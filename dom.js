// console.dir(document);
// document.title='Module';
// console.log(document.all);
// console.log(document.getElementById('main-header'));
// var title=document.getElementById('header-title');
// // console.log(title);
// // title.innerText='Testing';
// // console.log(title);
// title.innerHTML='<h2>MY HEADING<\h2>';
// var titli=document.getElementById('main-header');
// titli.style.borderBottom='solid 3px #000';
// var abc=document.getElementById('add');
// abc.style.fontWeight='bold';
// abc.style.color='green';

// var xyz=document.getElementsByClassName('list-group-item');
// // console.log('xyz');
// xyz[2].style.backgroundColor='green';
// for(let i=0;i<xyz.length;i++){
//     xyz[i].style.fontWeight='bold';
// }

//by className
// var abc=document.getElementsByClassName('list-group')
// console.log(abc.items.children);
// abc.items.children[4].style.fontWeight='bold';

// //by tagname
// var xyz=document.getElementsByTagName('li');
// xyz[4].style.fontWeight='bold';

// var item=document.querySelector('.list-group-item:nth-child(2)');
// item.style.color='green';
// var item1=document.querySelector('.list-group-item:nth-child(2)');
// item1.style.display='none';

// var item2=document.querySelectorAll('.list-group-item');
// item2[1].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

// var item=document.querySelector('#items');
// console.log(item.parentNode.parentElement.parentElement);
// console.log(item.childNodes);
// console.log(item.children);
// console.log(item.firstElementChild);
// console.log(item.lastElementChild);
// console.log(item.firstChild);
// console.log(item.lastChild);
// console.log(item.nextSibling);
// console.log(item.nextElementSibling);
// console.log(item.previousSibling);
// console.log(item.previousElementSibling);
// var newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hola';
// newDiv.setAttribute('title','hello world');
// var text=document.createTextNode('hello');
// newDiv.appendChild(text);
// console.log(newDiv);
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// container.insertBefore(newDiv,h1);

// var item1=document.querySelector('.list-group-item');

// item.insertBefore(newDiv,item1);

var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter= document.getElementById('filter');
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup' ,filterItems);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure!')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item');
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem.value));
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    var editBtn=document.createElement('button');
    editBtn.className=' btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
}
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }

    });

}












