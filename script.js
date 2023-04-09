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




let resBtn=document.querySelector("#endButton");

resBtn.addEventListener("click",result);


function result(){
    let arr=document.querySelectorAll("span");

    let max=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i].innerHTML>max){
            max=arr[i].innerHTML;
        }
    }


    let maxScorePlayer=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i].innerHTML==max){
            // console.log((arr[i].id));
            console.log("resulting...");
            maxScorePlayer.push(arr[i].id);
        }
    }



    
    let a=document.querySelectorAll("input");
    // console.log("Winner:"+ maxScorePlayer)
    let winners=[];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<maxScorePlayer.length;j++){
            if(a[i].className==maxScorePlayer[j]){
                let winner=a[i].value;
                winners.push(winner);
            }
        }
    }
    console.log(winners)
    let final=winners.join();
    document.querySelector("#winMessage").innerHTML="Winner is: "+final;

}
