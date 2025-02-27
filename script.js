const Questions = [
    {
        q: "What year did the first superbowl take place?",
        a: [{text: "2005", isCorrect: false},
            {text: "1789", isCorrect: false},
            {text: "1967", isCorrect: true},
            {text: "1999.", isCorrect: false},
           ]
    },
    {
        q: "Who is the Packers current quarterback?",
        a: [{text: "Dak Prescott", isCorrect: false},
            {text: "Jordan Love", isCorrect: true},
            {text: "Brock Purdy", isCorrect: false},
            {text: "Aaron Rodgers", isCorrect: false},
           ]
    },
    {
        q: "Who wears #8 on the Packers?",
        a: [{text: "Josh Jacobs", isCorrect: true},
            {text: "Jordan Love", isCorrect: false},
            {text: "Cristan Watson", isCorrect: false},
            {text: "Jaylen Reed", isCorrect: false},
           ]
    },
    {
        q: "What team did the GreenBay Packers face in the first superbowl?",
        a: [{text: "New England Patriots", isCorrect: false},
            {text: "Pittsburgh Steelers", isCorrect: false},
            {text: "Oakland Raiders", isCorrect: false},
            {text: "Kansas City Chiefs", isCorrect: true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
