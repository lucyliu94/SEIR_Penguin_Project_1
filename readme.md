# Project 1 Documentation 
## by Lucy Liu

## Introduction

My unit 1 project is to make a trivia game which fulls from a Headless CMS. In this case, I pulled trivia questions that I created in contentful. 

## Technologies Used
- Html
- CSS
- JS
- jQuery 

## Challenges
#### I have trouble with resetting the state of my game. I can change the numbers back to 0 but I also wanted to shuffle the questions. 

My code looked like this 

```js

const restartGame = () =>{
    $p1score.text("0")
    $p2score.text("0")
}

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
    
    $("li").off()
    $("li").on("click", (event)=>{
        chooseAnswer(event, randomQuestion)
    })     

    $("#restart").on("click", (event)=>{
        restartGame(event)
    })
} 
 
```

I finally figured it out by looking at my past code. It got fixed when I added the below to my restartGame function. 

```js
const restartGame = () =>{
    setBoard(questions)
    state.player1 = 0
    state.player2 = 0
}

```

### Example Table
| Column1 | Column2 |
|---------|---------|
| thing1 | thing2 |
| yadda1 | yadda2 |