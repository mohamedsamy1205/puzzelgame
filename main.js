
onload = function(){
    let parent = document.getElementById('drag');
    let frag = document.createDocumentFragment();
    while(parent.children.length){
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

let drag = null;
let imgs = document.querySelectorAll('.imgs');
let dropbox = document.querySelectorAll('.dropbox');

imgs.forEach(img => {
    img.addEventListener('dragstart', ()=>{
        drag = img;
    })
    img.addEventListener('dragend',()=>{
        drag = null;
    })
    dropbox.forEach(box=>{
        box.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })
        box.addEventListener('drop',()=>{
            box.appendChild(drag);
        })
    })
});