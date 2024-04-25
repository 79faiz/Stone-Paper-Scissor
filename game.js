let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const resetgame = document.querySelector("#reset-btn");

resetgame.addEventListener("click",()=>{
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
})

const gencompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame = () =>
{
    console.log("game was drawn");
    msg.innerText = "Game was draw! Play Again.";
    msg.style.backgroundColor = "black";
};

const showwinner = (userwin,userchoice,compchoice) =>
{
    if(userwin){
        console.log("you win");
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;

    }
    else{
        console.log("you lose");
        msg.innerText = `you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
}
const playgame = (userchoice)=>{

    console.log("user choice",userchoice);

    const compchoice =  gencompchoice();

    console.log("comp choice" , compchoice)

    if(userchoice === compchoice)
    {
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock")
        {
            userwin = compchoice === "paper" ? false:true;
        }
        else if(userchoice === "paper")
        {
            userwin = compchoice === "scissors" ? false:true;
        }
        else if(userchoice === "scissors")
        {
            userwin = compchoice === "rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>
    {
        const userchoice = choice.getAttribute('id');
        playgame(userchoice);
    })

});