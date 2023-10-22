let textarea = document.getElementById("textarea");
let tagsEl = document.getElementById("tag");
textarea.focus()


textarea.addEventListener('keyup', (event)=>{
   createT(event.target.value);
   if(event.key == 'Enter'){
    setTimeout(()=>{
        event.target.value = '';
    },10)
   
    randomSelect();
   }
})

function createT(input) {
    let tags = input.split(',').filter( (tag) => tag.trim()
     !== '').map(tag => tag.trim());
     tagsEl.innerHTML = '';
   
    tags.forEach( tag => {
        let tagEl = document.createElement("span");
        tagEl.innerText = tag;
        tagEl.classList.add('tag');
        tagsEl.appendChild(tagEl);
    })

}
function randomSelect() {
    
    let inter = setInterval(()=>{
        let randTag = pickRandom();
        highlightTag(randTag);

        setTimeout(()=>{
            unhighlightTag(randTag);
        },100);


    },100)

    setTimeout(()=>{
        clearInterval(inter);

        setTimeout(()=>{
            let r = pickRandom();
            highlightTag(r);
        },800);

    },9000);

}
function pickRandom() {
   let tag = document.querySelectorAll(".tag");
   return tag[Math.floor(Math.random() * tag.length)];
}

function highlightTag(rand) {
    rand.classList.add('high');
}
function unhighlightTag(rand) {
    rand.classList.remove('high');
}
