import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import colors from "../../data/colors";
import "./index.scss";

export const SnakeGame = (props) => {
  const [isLoop, setLoop] = useState(false);
  const canvasRef = useRef(null);
  let canvas = canvasRef.current;

  const size = 7;
  const cellSize = props.height / size;

  const HEAD = "h";
  const BODY = "b";
  const FOOD = "f";
  const EMPTY = " ";
  const DEFAULT_GAME_SPEED = 350;
  const DEFAULT_SNAKE = [
    { x: 1, y: Math.floor(size / 2) },
    { x: 0, y: Math.floor(size / 2) },
    { x: -1, y: Math.floor(size / 2) },
  ];
  const DEFAULT_DIRECTION = { x: 1, y: 0 };

  let gameSpeed = DEFAULT_GAME_SPEED;
  let gameScore = 0;
  let gameMaxScore = 0;
  let pause = true;

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [hasStartedPlaying, setStartedPlaying] = useState(false);

  let fields = [];
  let snake = [...DEFAULT_SNAKE];
  let food;
  let direction = { ...DEFAULT_DIRECTION };

  const renderFields = () => {
    fields = [];
    for (let i = 0; i < size; i++) {
      let arr = [];
      for (let j = 0; j < size; j++) {
        for (let k = 1; k < snake.length; k++) {
          if (j === snake[k].x && i === snake[k].y) {
            arr.push(BODY);
          }
        }
        if (j === snake[0].x && i === snake[0].y) {
          arr.push(HEAD);
        } else if (j === food.x && i === food.y) {
          arr.push(FOOD);
        } else if (arr.length <= j) {
          arr.push(EMPTY);
        }
      }
      fields.push(arr);
    }
  };

  const isInFields = (x, y) => {
    if (x >= 0 && y >= 0 && x < size && y < size) {
      return true;
    } else {
      return false;
    }
  };

  const doesTouchBody = (x, y) => {
    for (let i = 1; i < snake.length; i++) {
      if (x == snake[i].x && y == snake[i].y) {
        return true;
      }
    }
    return false;
  };

  const generateFood = () => {
    food = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size),
    };

    if (
      food.x === snake[0].x + 1 ||
      food.x === snake[0].x - 1 ||
      food.y === snake[0].y + 1 ||
      food.y === snake[0].y ||
      food.y === snake[0].y - 1
    ) {
      generateFood();
      return;
    }
    for (let i = 1; i < snake.length; i++) {
      if (food.x === snake[i].x && food.y === snake[i].y) {
        generateFood();
        return;
      }
    }
  };

  const setGameScore = (score) => {
    gameScore = score;
    setScore(score);
    setMaxScore(localStorage.getItem("maxScore"));
    if (score > gameMaxScore) {
      gameMaxScore = score;
      setMaxScore(gameMaxScore);
      localStorage.setItem("maxScore", score);
    }
  };

  const onEat = () => {
    food = { x: -1, y: -1 };
    generateFood();
    snake.push(snake[snake.length - 1]);
    setGameScore(gameScore + 5);
  };

  const findNewHead = () => {
    const newHead = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y,
    };
    if (
      isInFields(newHead.x, newHead.y) &&
      !doesTouchBody(newHead.x, newHead.y)
    ) {
      return newHead;
    } else {
      return null;
    }
  };

  const renderSnake = () => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (fields[i][j] === HEAD) {
          if (findNewHead()) {
            if (food.x == j && food.y == i) {
              onEat();
            }
            for (let k = snake.length - 1; k >= 1; k--) {
              snake[k] = snake[k - 1];
            }
            snake[0] = findNewHead();
          }
        }
      }
    }
    renderFields();
  };

  const getInputs = (evt) => {
    evt = evt || window.event;
    let currentDirection =
      evt.code === "KeyA" && direction.x != 1
        ? { x: -1, y: 0 }
        : evt.code === "KeyW" && direction.y != 1
        ? { x: 0, y: -1 }
        : evt.code === "KeyD" && direction.x != -1
        ? { x: 1, y: 0 }
        : evt.code === "KeyS" && direction.y != -1
        ? { x: 0, y: 1 }
        : null;
    if (currentDirection) {
      direction = currentDirection;
    }
  };

  const drawSquare = (x, y, color, context) => {
    context.fillStyle = color;
    context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
  };

  const drawCanvas = (context) => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (fields[i][j] == FOOD) {
          drawSquare(j, i, colors.$hover, context);
        } else if (fields[i][j] == HEAD || fields[i][j] == BODY) {
          drawSquare(j, i, colors.$text, context);
        } else {
          drawSquare(j, i, colors.$bg, context);
        }
      }
    }
    context.strokeStyle = colors.$element;
    for (var x = 0.5; x < props.width; x += cellSize) {
      context.moveTo(x, 0);
      context.lineTo(x, props.height);
    }
    for (var y = 0.5; y < props.height; y += cellSize) {
      context.moveTo(0, y);
      context.lineTo(props.width, y);
    }
    context.stroke();
  };

  const restartGame = () => {
    gameSpeed = DEFAULT_GAME_SPEED;
    direction = { ...DEFAULT_DIRECTION };
    setGameScore(0);
    snake = [...DEFAULT_SNAKE];
    generateFood();
  };

  const game = (context) => {
    if (!findNewHead()) {
      restartGame();
    } else {
      renderSnake();
      drawCanvas(context);
    }
  };

  generateFood();
  renderFields();

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (
        event.code === "KeyA" ||
        event.code === "KeyW" ||
        event.code === "KeyS" ||
        event.code === "KeyD"
      ) {
        pause = false;
        setStartedPlaying(true);
      }
      else if (event.code === "KeyP") {
        pause = !pause;
      }
      getInputs(event);
    };

    document.addEventListener("keydown", keyDownHandler);

    canvas = canvasRef.current;
      setLoop(true);
      if (isLoop) return;
      const context = canvas.getContext("2d");
      gameMaxScore = localStorage.getItem("maxScore");
      restartGame();
      drawCanvas(context);
      game(context);

      setInterval(() => {
        if (!pause) {
          drawCanvas(context);
          game(context);
        }
      }, gameSpeed);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  // useLayoutEffect(
  //   () => async () => {
  //     canvas = canvasRef.current;
  //     setLoop(true);
  //     if (isLoop) return;
  //     const context = canvas.getContext("2d");
  //     gameMaxScore = localStorage.getItem("maxScore");
  //     restartGame();
  //     drawCanvas(context);
  //     game(context);

  //     setInterval(() => {
  //       if (!pause) {
  //         drawCanvas(context);
  //         game(context);
  //       }
  //     }, gameSpeed);
  //   },
  //   []
  // );

  return (
    <div className="SnakeGame">
      <div className="SnakeGame__Controlls">
        {hasStartedPlaying ? "Press P to pause" : "Use WASD to control snake"}
      </div>
      <div className="SnakeGamePlayground">
        <div className="SnakeGameScore">
          <div className="SnakeGameScore__Current">
            {hasStartedPlaying ? score : "SCORE"}
          </div>
          <div className="SnakeGameScore__Max">
            {hasStartedPlaying ? maxScore : "RECORD"}
          </div>
        </div>
        <canvas ref={canvasRef} className="SnakeGame__Canvas" {...props} />
      </div>
    </div>
  );
};
