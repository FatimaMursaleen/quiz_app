var quiz_question = [
    {
        question: "What is Your name?",
        options: ["Hashir", "Fatima", "Sidra", "Mursaleen"],
        answer: 1,
    },

    {
        question: "What is Your name?",
        options: ["Hashir", "Fatima", "Sidra", "Mursaleen"],
        answer: 0,
    },

    {
        question: "What is Your name?",
        options: ["Hashir", "Fatima", "Sidra", "Mursaleen"],
        answer: 2,
    },

    {
        question: "What is Your name?",
        options: ["Hashir", "Fatima", "Sidra", "Mursaleen"],
        answer: 3,
    },

    {
        question: "What is Your name?",
        options: ["Hashir", "Fatima", "Sidra", "Mursaleen"],
        answer: 1,
    },
]

document.querySelector('.quiz_length').innerHTML = quiz_question.length

var question_array = []
var option_array = []
var show_question;
var question = document.querySelector('.questions')
var optionList = document.querySelector('.option_list')
var quiz_counter = 0
var right = 0
var wrong = 0

function push_question() {
    for (var i = 0; i < quiz_question.length; i++) {
        question_array.push(quiz_question[i])
    }
}

function set_question() {

    document.querySelector('.question_counter').innerHTML = `Question ${quiz_counter + 1} of ${quiz_question.length}`

    var qindex = question_array[Math.floor(Math.random() * question_array.length)]
    show_question = qindex
    question.innerHTML = show_question.question

    question_array.splice(question_array.indexOf(qindex), 1)

    var optlen = qindex.options.length

    for (var i = 0; i < optlen; i++) {
        option_array.push(i)
    }

    optionList.innerHTML = " ";

    for (var i = 0; i < optlen; i++) {
        var optindex = option_array[Math.floor(Math.random() * option_array.length)]

        option_array.splice(option_array.indexOf(optindex), 1)

        var opttag = document.createElement("li");
        var opttext = document.createTextNode(qindex.options[optindex]);
        opttag.id = optindex;
        opttag.appendChild(opttext);
        opttag.setAttribute("onclick", "checkli(this)")
        optionList.appendChild(opttag)
    }
    quiz_counter++
}

start = () => {
    document.querySelector('.start_game').classList.add('hidden')
    document.querySelector('.quiz_section').classList.remove('hidden')
    push_question()
    set_question()
}

next = () => {
    if (quiz_counter == quiz_question.length) {
        quizend()
    } else {
        set_question()
    }
}

checkli = li => {
    if (li.id == show_question.answer) {
        li.style.backgroundColor = "green"
        right++;
    } else {
        li.style.backgroundColor = "red"
        wrong++;
    }
    restrict_user()
}

restrict_user = () => {
    for (var i = 0; i < optionList.children.length; i++) {
        optionList.children[i].style.pointerEvents = "none"
    }
}

quizend = () => {
    document.querySelector('.quiz_section').classList.add('hidden')
    document.querySelector('.end_quiz').classList.remove('hidden')

    document.querySelector('#col1').innerHTML = quiz_question.length
    document.querySelector('#col2').innerHTML = right
    document.querySelector('#col3').innerHTML = wrong
}