const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const speed = 500;

const gridElem = 40; // 20 * 20
let direction = "o";
const snake = [
    [9, 9],
    [8, 9],
    [7, 9]
 ];
let apple = [5, 5];

const drawMap = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 800);
};

const drawSnake = () => {
    ctx.fillStyle = "green";
    for (let body of snake) {
        ctx.fillRect(body[0] * gridElem, body[1] * gridElem, gridElem, gridElem);
    }
};

const drawApple = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(apple[0] * gridElem, apple[1] * gridElem, gridElem, gridElem);
};

window.addEventListener('keydown', (event) => {
    console.log(event);
    switch (event.key) {
        case 'ArrowUp' : {
            direction = "n";
            break;
        }
        case 'ArrowRight' : {
            direction = "e";
            break;
        }
        case 'ArrowDown' : {
            direction = "s";
            break;
        }
        case 'ArrowLeft' : {
            direction = "o";
            break;
        }
    }
})

const updateSnakePosition = () => {
    let head;
    switch (direction) {
        case 'e' : {
            head = [snake[0][0] + 1, snake[0][1]];
            break;
        }
        case 'o' : {
            head = [snake[0][0] - 1, snake[0][1]];
            break;
        }
        case 'n' : {
            head = [snake[0][0], snake[0][1] - 1];
            break;
        }
        case 's' : {
            head = [snake[0][0], snake[0][1] + 1];
            break;
        }
    }
    snake.unshift(head);
    snake.pop();
}

const move = () => {

drawMap();
    updateSnakePosition();
    drawSnake();
    drawApple();
    setTimeout(() => {
        requestAnimationFrame(move);
    }, 1000 - speed);
};

requestAnimationFrame(move);