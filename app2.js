const btr_1 = document.getElementById(`btr-1`);
const b1 =document.getElementById(`bai-1`);
b1.style.backgroundColor = `yellow`;
b1.style.width = `100px`;
b1.style.height = `100px`;
btr_1.onclick = function(){
    if(b1.style.display=== `none`){
     b1.style.display = "block";   
    }
    else{
  b1.style.display = `none`;
    }
};
let color =[`yellow`,`blue`,`red`,`violet`,`brown`,`orange`,`red`,`black`,`green`,`pink`];
const btr_2 = document.getElementById(`btr-2`);
const b2 =document.getElementById(`bai-2`);
b2.style.backgroundColor = `yellow`;
b2.style.width = `100px`;
b2.style.height = `100px`;
btr_2.onclick = function(){
  var random = color[Math.floor(Math.random()*color.length)];
  b2.style.backgroundColor = random ;
};
const btr_3 = document.getElementById(`btr-3`);
const doi_1 =document.getElementById(`doi-1`);
const doi_2 =document.getElementById(`doi-2`);
doi_1.style.backgroundColor = `green`;
doi_1.style.width = `50px`;
doi_1.style.height = `50px`;
doi_2.style.backgroundColor = `violet`;
doi_2.style.width = `50px`;
doi_2.style.height = `50px`;
btr_3.onclick = function(){
 doi_1.innerHTML = [doi_2.innerHTML , doi_2.innerHTML = doi_1.innerHTML][0];
}
const btr_4 = document.getElementById(`btr-4`);
const b4 =document.getElementById(`bai-4`);
b4.style.backgroundColor = `yellow`;
b4.style.width = `300px`;
b4.style.height = `300px`;
b4.style.fontSize = `14px`;
let b=1;
btr_4.onclick = function(){
b4.style.fontSize = 14 + b + `px` ;
b++;
}

