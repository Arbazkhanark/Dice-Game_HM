let btns=document.querySelectorAll(".dice");

// console.log(btns);

for(let i of btns){
    i.addEventListener("click",roll);
}


function roll(event){
    console.log("rolling");
    let turn=event.target.id;
    // console.log(turn);
    let rand=parseInt(Math.random()*7);
    // console.log(rand);


    let spans=document.querySelectorAll("span");
    for(let i=1;i<spans.length;i++){
        if(turn.toLowerCase()==(spans[i].id).toLowerCase()){
            // console.log((spans[i].id).toLowerCase());
            document.querySelector(`#${spans[i].id}`).innerHTML=`${rand}`;
        }
    }


}