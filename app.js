/******/
//APP STATE
/******/

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {},
    which: true
}

let questions = []

/*********** */
//Main DOM Element
/*********** */

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player-1 h4")
const $p2score = $("#player-2 h4")

/*********** */
//Function
/*********** */


const chooseAnswer = (event, question) => {
    console.log(event)
    if (event.target.innerText === question.answer){
        if (state.which){
            $("#error-msg").text("")
            state.player1++
            state.which =!state.which
        } else {
            $("#error-msg").text("")
            state.player2++
            state.which =!state.which
        }
        setBoard(questions)
    } else {
        setBoard(questions)
        state.which =!state.which
        $("#error-msg").text("WRONG, NEXT PLAYER'S TURN").css("color", "red")
    }
}

const restartGame = () =>{
    setBoard(questions)
    state.player1 = 0
    state.player2 = 0
    state.which = true
    $("#error-msg").text("")
}
 

const playerTexts = () =>{
    if (state.which){
        $("#player-turn").text("one")
    } else if (state.which =!state.which){
        $("#player-turn").text("nope")
    }
}

playerTexts()

const setBoard = (q) => {
    //Getting a random question
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    //update players scores
    $p1score.text(state.player1)
    $p2score.text(state.player2)

    playerTexts()
    
    $("li").off()
    $("li").on("click", (event)=>{
        chooseAnswer(event, randomQuestion)
    })     

    $("#restart").on("click", (event)=>{
        restartGame(event)
        $p1score.text("0")
        $p2score.text("0")
    })

} 



const URL = "https://cdn.contentful.com/spaces/fjqzeesozto5/environments/master/entries?access_token=CQ2_DeawViiarL0EFip65aLzs-NMdd7GYTSFUEWNjl4&content_type=triviaq"
$.ajax(URL)
.then((data) =>{
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

    setBoard(questions)
}) 