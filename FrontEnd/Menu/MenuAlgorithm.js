//document.getElementById("count-el").innerText=5
let count = 0
let counter = 0;
var posX = 0;
var posY = 0;
function increment(){
    console.log("The button was clicked");
    counter++
    document.getElementById("count-el").innerText=counter;
}   
function decrement(){
    console.log("The button was clicked");
    counter--;
    count++;
    console.log(counter);
    document.getElementById("count-el").innerText=counter;
    switch (count){
        case 1: 
            document.getElementById("decrement-btn").innerText="You click wrong, right???";
            break;
        case 2:
            document.getElementById("decrement-btn").innerText="This is a 'No', did you know that";
            break;
        default:
            Move();
            break
    }
}
let id =null;
//
function Move(){
    var elem = document.getElementById("decrement-btn");   
    
    var Dir =Math.floor(Math.random()*10);
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame(){
        if (posX >= 400 || posY >= 450||posX <= -150||posY <=-550) {
            // clearInterval(id);
            // myMove();
            Dir = Math.floor(Math.random()*10);
            
            Direction();
        } 
        else {
            Direction();
            
        }
        
    }
    function Direction(){
        switch (Dir){
            case 0: 
                posX++;
                break;
            case 1: 
                posX--; 
                break;
            case 2: 
                posY++; 
                break;
            case 3: 
                posY--; 
                break;
            case 4:
                posX++;
                posY++;
                break;
            case 5:
                posX++;
                posY--;
                break;
            case 6:
                posX--;
                posY++;
                break;
            default:
                posX--;
                posY--;
                break;
        }
        elem.style.top = posX + 'px'; 
        elem.style.left = posY + 'px'; 
    }
}

