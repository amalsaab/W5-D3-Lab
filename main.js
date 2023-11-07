const questions = [
    {
      questionTitle: "ماهي عاصمه السعوديه؟",
      options: ["الرياض", "جدة", "القصيم", "الكويت"],
      keyAnswer: "الرياض",
      typeAnswer: "Multiple Choice"
    },
    {
      questionTitle: "افضل نادي فالعالم",
      options: ["الاهلي", "النصر", "الهلال", "التعاون"],
      keyAnswer: "الهلال",
      typeAnswer: "Multiple Choice"

    },
    {
      questionTitle: "ماهو افضل لون",
      options: ["احمر", "اصفر", "ازرق", "وردي"],
      keyAnswer: "ازرق",
      typeAnswer: "Multiple Choice"

    },
    {
      questionTitle: "ماهو ناتج ضرب 5*13",
      options: ["70", "60", "65", "55"],
      keyAnswer: "65",
      typeAnswer: "Multiple Choice"
    },
    {
      questionTitle: "ماهي عاصمه السعوديه؟",
      options: [],
      keyAnswer: "الرياض",
      typeAnswer: "Textfield"

    },
    {
      questionTitle: "ماهي عاصمه السعوديه؟",
      options: [],
      keyAnswer: "الرياض",
      typeAnswer: "Textfield"

    },
  ];
  
  const qustionsCont = document.getElementById("qustions-cont");
  const qustionsText = document.getElementById("qustions-text");
  const options = document.getElementById("options");
  const timeLeft = document.getElementById("time-left");
  const resultCont = document.getElementById("result-cont");
  const resultText = document.getElementById("result-text");
  
  let currentIndex = 0;
  let score = 0;
  let timer = 10;
  let countDown;
  
  function showQuestion(index) {
    const questin = questions[index];
    qustionsText.innerText = questin.questionTitle;
    options.innerHTML = "";
    switch (questions[index].typeAnswer) {
        case "Multiple Choice":
            questin.options.forEach((option) => {
                const b = document.createElement("button");
                b.textContent = option;
                options.appendChild(b);
        
                b.addEventListener("click", () => {
                    checkAnswer(option, questin.keyAnswer);
                });
                // options.insertAdjacentHTML("afterbegin", `<button>${option}</button>`);
            });
            break;
        case "Textfield":
            const input = document.createElement("input");
            input.type = "text"
            input.placeholder = "enter your answer";
            options.appendChild(input);
            const submit = document.createElement("button");
            submit.textContent = "submit";
            options.appendChild(submit);
            submit.addEventListener("click", () => {
                checkAnswer(input.value, questin.keyAnswer);
            });
        default:
            break;
    }
    
  }
  
  function showTimer() {
    countDown = setInterval(function () {
      timer--;
      timeLeft.textContent = timer;
      if (timer <= 0) {
        clearInterval(countDown);
        checkAnswer("", null);
      }
    }, 1000);
  }
  
  showQuestion(currentIndex);
  showTimer();
  
  function checkAnswer(myAnswer, correctAnswer) {
    currentIndex++;
    clearInterval(countDown);
  
    if (myAnswer === correctAnswer) {
      score++;
    }
  
    if (currentIndex < questions.length) {
      showQuestion(currentIndex);
      timer = 10;
      timeLeft.textContent = timer;
      showTimer();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    qustionsCont.style.display = "none";
    resultCont.style.display = "flex";
    resultText.textContent = `Your Score is ${score} of ${questions.length}`;
  }