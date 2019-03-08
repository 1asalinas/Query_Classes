
function green25(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("green25");
    }
}

function green50(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("green50");
    }
}


function green75(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("green75");
    }
}


function green100(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("green100");
    }
}


function regularToggle(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("boxes");
    }
}


function smallToggle(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("quarter_box");
    }
}


function mediumToggle(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("half_box");
    }
}


function largeToggle(){
    const doc = document;
    let boxes = doc.querySelectorAll(".boxes > div");
    for(let b=0; b<boxes.length; b++){
        boxes[b].classList.toggle("full_box");
    }
}
