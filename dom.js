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
var abc=document.getElementsByClassName('list-group')
console.log(abc.items.children);
abc.items.children[4].style.fontWeight='bold';

//by tagname
var xyz=document.getElementsByTagName('li');
xyz[4].style.fontWeight='bold';


