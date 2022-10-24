const furnitureBtn = document.getElementsByClassName("furitureBtn")
const bedBtn = document.getElementById("BEDBtn");
const chairBtn = document.getElementById("CHAIRBtn");
const prodList = document.getElementsByClassName("prod__box");

const handleClick = (event) => {
    console.log(event);
    if(event.target.classList[1] !=="clicked"){
        for(var i=0; i< furnitureBtn.length; i++){
            furnitureBtn[i].classList.remove("clicked");
        }
        event.target.classList.add("clicked");
        var id_by_class = document.getElementsByClassName('clicked')[0].id;
        for(var i=0; i<prodList.length; i++){
            prodList[i].style.display ='none';
        }
        if(id_by_class==='BEDBtn'){
            prodList[0].style.display = 'block';
        } else if (id_by_class==='CHAIRBtn'){
            prodList[1].style.display = 'block';
        } else if (id_by_class==='CUSHIONBtn'){
            prodList[2].style.display = 'block';
        } else if (id_by_class==='LAMPBtn'){
            prodList[3].style.display = 'block';
        } else if (id_by_class==='MIRRORBtn'){
            prodList[4].style.display = 'block';
        } else if (id_by_class==='SOFABtn'){
            prodList[5].style.display = 'block';
        } else if (id_by_class==='TABLE'){
            prodList[6].style.display = 'block';
        } 
        console.log(id_by_class);
    }
}

function init() {
    for(var i=0; i<furnitureBtn.length; i++){
        furnitureBtn[i].addEventListener("click", handleClick);
    }
}

if (furnitureBtn) {
    init();
}