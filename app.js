let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const message = document.querySelector("#msg");


const updateResult = (userWin, userChoice, compChoice) =>{

    if(userWin === null){
        console.log("Draw");
        message.innerText = "Game was a Draw";
        message.style.backgroundColor = "black";
    }

    else if(userWin){
        console.log("User Won");
        message.innerText = `You Won!! Your ${userChoice} beat ${compChoice}`;
        message.style.backgroundColor = "green";
        userScorePara.innerText = ++userScore;
    }
    else{
        console.log("User Lost");
        message.innerText = `You Lost!! ${compChoice} beat your ${userChoice}`;
        message.style.backgroundColor = "red";
        compScorePara.innerText = ++compScore;
    }
}

const decideWinner = (userChoice, compChoice) =>{
    let userWin = true;

    if(userChoice === compChoice){
        // returns null when draw
        userWin = null;
    }

    else{
        if(userChoice === 'rock'){
            // comp can select paper or scissors
            userWin = (compChoice === 'paper')? false:true;
        }

        else if(userChoice === 'paper'){
            // comp can select rock, scissors
            userWin = (compChoice === 'scissors')? false:true;
        }

        else{
            // user chose scissors 
            // comp can select paper, rock
            userWin = (compChoice === 'rock')? false:true;
        }
    }

    updateResult(userWin, userChoice, compChoice);
}

const playGame = (userChoice)=>{
    // comp chooses rock, paper, scissors
    const choices = ['rock', 'paper', 'scissors'];
    
    const rndIdx = Math.floor(Math.random() * 3);
    
    console.log(`Computer selected: ${choices[rndIdx]}`);

    decideWinner(userChoice, choices[rndIdx]);
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");

        console.log(`User chose ${userChoice}`);
        playGame(userChoice);
    });
});
