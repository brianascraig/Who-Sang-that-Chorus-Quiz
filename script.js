let question = 0;
let score = 0;

//The question store will house the data for the question screen and the answer results screen for each question.
const questionStore = [
  {
    question: 1,
    questionText: "What's a sunny day without you?</br>Just another twenty-four that passes by</br>What's a sunny day without you?</br>Just another twenty-four that passes by</br>",
    answer: ['Prince', 'Beyonce', 'Brandy', 'Demi Lovato'],
    correctAnswer: 'Brandy',
    correctResult: 'Brandy sang this chorus in her song "Sunny Day". Great guess!',
    wrongResult: 'Brandy sang this chorus in her song "Sunny Day". Sorry, but nice try!',
    musicVidSrc: 'https://www.youtube.com/embed/Nn1DQAmCQ4A',
    musicVidTitle: "Music video of Brandy's song Sunny Day"
  },

  {
    question: 2,
    questionText: "They try to shut us down, and it ain't gone slide</br>Only thing I fear is God and he on my side</br>That's the confidence of God, cause he got me</br>That's why I really feel like</br></br>You can't stop me</br>That's all you got? Come on with it</br>That's all you got?</br>You can't stop me</br></br>(You) don't got the power, (can't) shut me down</br>(Stop) that's not an option, (me) I'm my biggest problem</br>(You) don't got the power, (can't) shut me down</br>(Stop) that's not an option</br>You can't stop me",
    answer: ['Drake', 'Andy Mineo', 'Lauryn Hill', 'TLC'],
    correctAnswer: 'Andy Mineo',
    correctResult: 'Andy Mineo sang this chorus in his song "You Can\'t Stop Me". Great guess!',
    wrongResult: 'Andy Mineo sang this chorus in his song "You Can\'t Stop Me". Sorry, but nice try!',
    musicVidSrc: 'https://www.youtube.com/embed/WopyrETP-CU',
    musicVidTitle: "Music video of Andy Mineo's song 'You Can\'t Stop Me'"
  },

  {
    question: 3,
    questionText: "No</br>You'll never be alone</br>When darkness comes, I'll light the night with stars</br>Hear my whispers in the dark</br>No</br>You'll never be alone</br>When darkness comes, you know I'm never far</br>Hear my whispers in the dark",
    answer: ['Red', 'Toby Lightman', 'Bob Marley', 'Skillet'],
    correctAnswer: 'Skillet',
    correctResult: 'Skillet sang this chorus in their song "Whispers in the Dark". Great guess!',
    wrongResult: 'Skillet sang this chorus in their song "Whispers in the Dark". Sorry, but nice try!',
    musicVidSrc: 'https://www.youtube.com/embed/B58OBfM-8A4',
    musicVidTitle: "Music video of Skillet's song 'Whispers in the Dark'"
  },

  {
    question: 4, 
    questionText: "You ask yourself there's got to be more than what</br>I'm living for (what I'm living for)</br>You ask yourself there's got to be something else,</br>something more, more, more</br></br>Well let the sun shine on your face</br>And don't let your life go to waste</br>Now is the time, got to make up your mind</br>Let it shine on you, let it shine on you",
    answer: ['Laura Izibor', 'Taylor Swift', 'Jill Scott', 'Michael Jackson'],
    correctAnswer: 'Laura Izibor',
    correctResult: 'Laura Izibor sang this chorus in her song "Shine". Great guess!',
    wrongResult: 'Laura Izibor sang this chorus in her song "Shine". Sorry, but nice try!',
    musicVidSrc: 'https://www.youtube.com/embed/equvoqUT1VM',
    musicVidTitle: "Music video of Laura Izibor's song 'Shine'"
  },

  {
    question: 5,
    questionText: "You can't move it, you can't shake it</br>You can't beat it, you can't take it</br>It's unchanging, heavy love</br>It ain't changing, heavy love</br>So much power, so much patience</br>It's a love, so amazing</br>It ain't moving, heavy love</br>It ain't breaking, heavy love",
    answer:['Usher', 'Justin Timberlake', 'Mali Music', 'Jojo'],
    correctAnswer: 'Mali Music',
    correctResult: 'Mali Music sang this chorus in his song "Heavy Love". Great guess!',
    wrongResult: 'Mali Music sang this chorus in his song "Heavy Love". Sorry, but nice try!',
    musicVidSrc: 'https://www.youtube.com/embed/0WIzi47iijg',
    musicVidTitle: "Music video of Mali Music's song 'Heavy Love'"
  },

  {
    question: 6,
    questionText: "Lamb of God who take away</br>The sin of the world</br>We are sinners gone astray</br>Have mercy Lord</br>Lamb of God who takes away</br>The sin of the world</br>We are sinners gone astray</br>Have mercy Lord",
    answer: ['The City Harmonic', 'Lauren Daigle', 'Kanye West', 'Faith Evans'],
    correctAnswer: 'The City Harmonic',
    correctResult: 'The City Harmonic sang this chorus in their song "Confession". Great guess!',
    wrongResult: 'The City Harmonic sang this chorus in their song "Confession". Sorry, but nice try!',
    musicVidSrc: 'https://www.youtube.com/embed/XCPeRfM8QH4',
    musicVidTitle: "Music video of The City Harmonic's song Confession"
  },

  {
    question: 7,
    questionText: "I have died everyday waiting for you</br>Darling don't be afraid I have loved you</br>For a thousand years</br>I'll love you for a thousand more",
    answer: ['Monica', 'Avril Lavigne', 'Jimmy Needham', 'Christina Perri'],
    correctAnswer: 'Christina Perri',
    correctResult: 'Christina Perri sang this chorus in her song "A Thousand Years". Great guess!',
    wrongResult: 'Christina Perri sang this chorus in her song "A Thousand Years". Sorry, but nice try!',
    musicVidSrc: 'https://www.youtube.com/embed/rtOvBOTyX00',
    musicVidTitle: "Music video of Christina Perri's song 'A Thousand Years'"
  }
];

function questionTemplate () {
  //This function will insert the song excerpt, radio answer choices, and submit button for the question form.
  $('.songExcerpt').append(`${questionStore[question].questionText}`);

  $('.js-answerChoicesContainer').html(`<div class="answerChoice ansChoice1"><input class="answerInput" type="radio" id="${questionStore[question].answer[0]}" value="${questionStore[question].answer[0]}" name="artist" required><label for="${questionStore[question].answer[0]}">${questionStore[question].answer[0]}</label></br></div><div class="answerChoice ansChoice2"><input class="answerInput" type="radio" id="${questionStore[question].answer[1]}" value="${questionStore[question].answer[1]}" name="artist" required>  <label for="${questionStore[question].answer[1]}">${questionStore[question].answer[1]}</label></div><div class="answerChoice ansChoice3"><input class="answerInput" type="radio" id="${questionStore[question].answer[2]}" value="${questionStore[question].answer[2]}" name="artist" required><label for="${questionStore[question].answer[2]}">${questionStore[question].answer[2]}</label></br></div><div class="answerChoice ansChoice4"><input class="answerInput" type="radio" id="${questionStore[question].answer[3]}" value="${questionStore[question].answer[3]}" name="artist" required><label for="${questionStore[question].answer[3]}">${questionStore[question].answer[3]}</label></div><button type="submit" name="submitButton" class="submitButton js-submitButton">Submit</button>`);
}

function startQuizClicked (question) {
  //This function will start the quiz when the start quiz button is clicked. The first screen (besides the header) will be hidden. The quiz form will be unhidden. The question will be incremented so the appropriate information from the question will be inserted into the question template when it is called here. 
  question= question++;
  $('.js-startButton').on('click', function (event){
    $('.js-startQuiz').toggleClass('hidden');
    $('.js-quizQuestionsForm').toggleClass('hidden');
    handleNextQuestion();
    questionTemplate();
  });
}

function resultsTemplate (answerPicked) {
  //This function will evaluate the answer and display the appropriate results for right or wrong answers.  
  if (answerPicked == questionStore[question].correctAnswer) {
    $('.js-answerExplanation').text(`${questionStore[question].correctResult}`);
    $('.rightWrongStatement').text("You're Right!");
    score++;
    displayScore();
  }
  else {
    $('.js-answerExplanation').text(`${questionStore[question].wrongResult}`);
    $('.rightWrongStatement').text("You're Wrong!");
  }

  //This will add a video to the template with the corresponding title attribute and video source.
  $('.js-videoContainer').append(`<iframe title="${questionStore[question].musicVidTitle}"
    width="40%" class="js-video" height="315 px" src="${questionStore[question].musicVidSrc}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
}

function submitClicked (question) {
  //This function will store the answer input in answerPicked when the submit button is clicked. Also, the quiz form will be hidden. The answer results section and 'next' button will be unhidden. The results template will be called with the information from answerPicked.
  $('.js-quizForm').on('submit', function (event) {
    event.preventDefault();
    let answerPicked = $('input:checked').val();
    $('.js-quizQuestionsForm').toggleClass('hidden');
    $('.js-answerResults').toggleClass('hidden');
    $('.js-nextQuestionButton').toggleClass('hidden');
    resultsTemplate(answerPicked);
  });
}

function nextQuestionClicked () {
  //This function will display the next consecutive question screen after submit. If the question is not the last question, it will perform the if statement: increment the question; unhide the quiz form; hide the answer results; hide the 'next' button; remove thw video frame; and run the template for the question's information.
  $('.js-nextQuestionButton').on('click',  function (event){
    if (question < 6) {
      question++;
    $('.js-questionNumber').text(`Question: ${question +1}/7`);
    $('.js-quizQuestionsForm').toggleClass('hidden');
    $('.js-answerResults').toggleClass('hidden');
    $('.js-nextQuestionButton').toggleClass('hidden');
    $('.js-videoContainer').empty();
    var myDiv = document.getElementById('songExcerptContainer');
    myDiv.scrollTop = 0;
    $('.songExcerpt').empty();
    questionTemplate(question);
  }      
    else if (question === 6) {
      //This statement will run if the question is the last question. It will hide the answer results, reveal the start over button, hide the 'next' button, and remove the video frame.
      $('.js-answerResults').toggleClass('hidden');
      $('.js-startQuizOver').toggleClass('hidden');
      $('.js-nextQuestionButton').toggleClass('hidden');
      $('.js-videoContainer').empty();
    }  
  });
}

function handleNextQuestion (question) {
  //This function will handle changing to the next consecutive question.
  for (let i = 0; i < questionStore.length; i++) {
      question++;
  }
 }

function displayScore () {
  //This function will insert the updated score to the header.
  $('.js-score').text(`Score: ${score}/7`);
}

function handleQuestionNumber () {
  //This function will handle changing the displayed question number. The question number will increment when the start button is clicked and when the next button is clicked. The question number will reset to 0 when the start over button is clicked.
  $('.js-questionNumber').text(`Question: ${question}/7`);
  $('.js-startQuiz').on('click', function (event){
    $('.js-questionNumber').text(`Question: ${question +1}/7`);
  });
}

function handleRestartQuiz () {
  //This function will handle the restart and reset of the quiz. The score will be reset to 0 and displayed. The start over button will be hidden. The start quiz section will be unhidden.
  $('.js-startOverButton').on('click', function (event) {
    score = 0;
    displayScore();
    question = 0;
    $('.js-questionNumber').text(`Question: ${question}/7`);
    $('.js-startQuizOver').toggleClass('hidden');
    $('.js-startQuiz').toggleClass('hidden');
  });
}


function handleQuiz () {
  startQuizClicked();
  submitClicked();
  displayScore();
  nextQuestionClicked();
  handleQuestionNumber();
  handleRestartQuiz();
}

$(handleQuiz);
