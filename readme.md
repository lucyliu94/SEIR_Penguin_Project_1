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

I tried to find ways to add indicators on which player was going but didn't quite figure it out. 
It ended up leaving the colours on. 

```js

const chooseAnswer = (event, question) => {
    console.log(event)
    if (event.target.innerText === question.answer){
        (event.target).css("background-color", "purple")
        if (state.which){
            state.player1++
            state.which =!state.which
        } else {
            state.player2++
            state.which =!state.which
        }
        setBoard(questions)
    } else {

        setBoard(questions)
        state.which =!state.which
    }
}
```

I also tried making another function but it also broke other pieces of the game so I ended up removing it as well. 

```js
const player = () =>{
    if (state.which){
        $("#error-msg").text("one")
    } else if (state.which = !state.which){
        $("#error-msg").text("two")
    }
}

player()
```

## Learnings

I ended up learning that you can also attached gif's in the img src tag which worked well for me in my header.

```html

<img src="https://c.tenor.com/fXB_pZGFK8kAAAAC/cat-jam.gif">

```

It was my first time trying to make everything responsive so I learned more about using em, vh and wh to keep fonts responsive and aligned within my div's. I listed an example below. 

```cs

#player-1, #player-2 {
    width: 80wh;
    border-radius: 20px;
}
```

