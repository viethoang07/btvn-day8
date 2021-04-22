console.log(document);
 

// const app= document.getElementById(`app`);
// console.log(app);
// const name =document.getElementsByClassName(`div-1`);
// console.log(name[0]);
// const divList = document.getElementsByTagName(`div`);
// console.log(divList);
// const query = document.querySelector(`app`);
// console.log(query);
// const queryall =document.querySelectorAll(`div-1`);
// console.log(queryall);


// //importion properties
// console.dir(app);
// //text and content
// console.log(app.innerHTML);
// app.innerHTML = `<b>ggggggg</b>`;
// console.log(app.innerText);
// app.innerText = `<b>con cho nay</b>`;
// console.log(app.textContent);


// console.log(app.style);
// console.log(app.style.backgroundColor);
// app.style.backgroundColor = `orange`;
// const a = document.querySelector(".test");
//  console.log(a);

// a.style.backgroundColor = "orange";
// console.log(test);

// //children /parent element
// const ul = document.getElementById(`list`);
// console.log(ul);
// console.log(ul.children[0]);

// const li = ul.children[0];
// console.log(li.parentElement);

// ////////////classlist //id
// console.log(ul.id);
// console.log(ul.classList);

// /////////////// ad class
// ul.classList.add(`cl3`);
// console.log(ul);

// //method : remove createElement  apentChirld;
// const ul =document.getElementById(`list`);
// const li = ul.children[0];
// console.log(li);
// li.remove();
// const newLi = document.createElement(`li`);
// ul.appendChild(newLi);
// newLi.innerHTML = `cccccc`;


// //event and click event
// const btn = document.getElementById(`btr`);
// // console.log(btn);
// btn.onclick = function(event){
// alert(`hello`);}

// cho 1 thẻ div và button , khi click thì thay đổi nội dung cỡ chữ màu sác của thẻ div
// cho 1 list danh sách li ,1 button add , 1button remove;click btn add thì thêm 1 phần tử , click remove thì xóa 1 phần tử đầu tiên
const btr = document.getElementById(`btr`);
const tet =document.getElementById(`tet`);
btr.onclick = function(){
tet.style.backgroundColor = `yellow`;
tet.innerHTML = `<p>please đổi đi </p>`;
tet.style.fontSize = `50px`;

};

const ul =document.getElementById(`list`);
const add = document.getElementById(`add`);
const del = document.getElementById(`remove`);

add.onclick = function(){
    const newLi = document.createElement(`li`);
    ul.appendChild(newLi);
    newLi.innerHTML = `đi`;

};
del.onclick = function(){
  const li = ul.children[0];
    li.remove();
}
