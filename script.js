function getComputerChoice(){
    let result=Math.floor(Math.random() *3) 
    let choice
    if (result === 0){
        choice = 'rock'
    }
    else if (result === 1){
        choice = 'scissors'
    }
    else {
        choice = 'paper'
    }
    return choice
}

console.log(getComputerChoice())