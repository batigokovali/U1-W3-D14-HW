function onLoadActions ()
{
    for (let bingo = 1; bingo <= 76; bingo++)
    {
        let bingoNode = document.createElement("div"); //created div for the bingo block
        bingoNode.classList.add("bingo"); //customized the bingo block
        bingoNode.innerText = bingo; //inserted the number to the bingo block
        // no need for an event listener (for now?)
        document.getElementById("bingo-board").appendChild(bingoNode) //appended the bingo block to the div
    }
    insertNumbersTonumbersArray ()

}

let numbersArray = [];

function insertNumbersTonumbersArray ()
{
    for (let i = 1; i <= 76; i++)
    {
        numbersArray.push(i);
    }
    return numbersArray;
}


function randomNoRepeats(numbersArray)
{
    var copy = numbersArray.slice(0);
    return function () {
        if (copy.length < 1)
        {   
            copy = numbersArray.slice(0);
        }
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index,1);
        return item;
    };
}

function randomInteger(max)
{
    return Math.floor(Math.random()*(max +1));
}


function randomRGBColor()
{
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}


var chooser = randomNoRepeats(numbersArray);

function highlightBingoBlock()
{
    let randomNumber = chooser();
    let allBingo = document.querySelectorAll(".bingo")
    for (let bingo of allBingo) // yasire teşekkür mektubu
    {
        if (randomNumber === parseInt(bingo.innerText))
        {
            bingo.style.backgroundColor = `rgb(${randomRGBColor()})`;
        }
    }
}

userBingoBoard = [];

function userBoard()
{
    var i = numbersArray.length;
    j = 0;
    let temp;
    
    while (i--)
    {
        j = Math.floor(Math.random()*(i+1)); // used math floor to round the number because math random return float
        temp = numbersArray[i];
        numbersArray[i] = numbersArray[j];
        numbersArray[j] = temp;
    }
    let arrayOf24 = [];
    for(let i = 0; i<24; i++)
    {
        arrayOf24[i] = numbersArray[i]
    }
    userBingoBoard = arrayOf24;
    return arrayOf24;
}

function userBingoCreate()
{
    for (let i = 0; i < 24; i++)
    {
        let bingoNode = document.createElement("div"); 
        bingoNode.classList.add("bingo"); 
        bingoNode.innerText = userBingoBoard[i].innerText; 
        document.getElementById("user-board")[i].appendChild(bingoNode)
    }
    return;
}




window.onload = onLoadActions;
