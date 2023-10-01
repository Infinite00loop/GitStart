console.dir(document);
document.title='Module';
console.log(document.all);
console.log(document.getElementById('main-header'));
var title=document.getElementById('header-title');
// console.log(title);
// title.innerText='Testing';
// console.log(title);
title.innerHTML='<h2>MY HEADING<\h2>';
var titli=document.getElementById('main-header');
titli.style.borderBottom='solid 3px #000';
var abc=document.getElementById('add');
abc.style.fontWeight='bold';
abc.style.color='green';


