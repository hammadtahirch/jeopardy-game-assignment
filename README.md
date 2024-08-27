# Jeopardy Game Interview Assignment

### Goal:
The goal is to spend (up to) 4 hours to create a simple interpretation of the [Jeopardy game board](https://en.wikipedia.org/wiki/Jeopardy!). What we are looking for is best practices in modern web development in all areas (scripting, HTML, and CSS), good use of the Vue framework and its features, as well as your creativity and problem solving. Preferred tech stack is Vue, but you can use the ones you are most comfortable with.

There is no expectation to have a perfect, beautiful app constructed. However, the app should run! Do the best you can, have fun, and please feel to reach out with any questions you may have.

### User Stories
```
As a User, When I run the App, I want to see the Game Board

AC's
- The Game Board has the approximate layout of the standard Jeopardy Game Board, with columns that have a header and list of question Tiles displaying the dollar value of the question
```

```
As a User, When I select a Question from the Game Board, I want to see the Question displayed with a list of possible answers.

AC's
- when a user clicks on a Tile, display the question associated with that Category and Value
- There are Answers displayed below the question
```

```
As a User, When I click on an answer, I am notified if whether I have chosen correctly or incorrectly.

AC's
- Each question can only be answered once
```

## Project setup
Run bellow command in your terminal to clone this project.

```
git clone https://github.com/hammadtahirch/jeopardy-game-assignment.git
```
After cloning the project, run bellow command in your terminal to install all the dependencies.
```
cd jeopardy-game-assignment
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### To run the test
```
npm test
```
![Images](https://github.com/hammadtahirch/jeopardy-game-assignment/blob/main/manual-test-screenshort/screenshot-localhost_8080-2024_08_27-17_12_42.png)
