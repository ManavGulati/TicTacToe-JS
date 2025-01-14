let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn")
let msg=document.querySelector("#win");
let msgCont=document.querySelector(".winner");
let TurnO = true;
let count = 0;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(TurnO===true){
            box.innerText="O";
            TurnO=false;
        }
        else{
            box.innerText="X";
            TurnO=true;
        }
        box.disabled=true;
        checkWinner();
        count++;
    })
});

const showWinner = (w)=>{
    msg.innerText=`Winner is ${w}`;
    msgCont.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const draw= ()=>{
    msg.innerText="Match Drawn";
    msgCont.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const checkWinner= ()=>{
    for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val != "" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                showWinner(pos1val);
            }
            else if(count=9 && pos1val!=pos2val && pos2val!=pos3val){draw();}
                
        }
    
}}
newBtn.addEventListener("click",()=>{
  boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled=false;
  })
  msgCont.classList.add("hide");
})