const  string = `
  .skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .skin *::after,
  .skin *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .skin {
    background-color: #FFE600;    
    min-height: 50vh;
    position: relative;
  }

  .nose {
    width: 0;
    height: 0;
    border: 10px solid #000;
    border-bottom: none;
    border-color: #000 transparent transparent;
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -10px;
    z-index: 5;
  }
  .nose::before {
    content: '';
    display: block;
    width: 20px;
    height: 6px;
    border-top-left-radius: 10px 6px;
    border-top-right-radius: 10px 6px;
    background: #000;
    position: absolute;
    top: -16px;
    left: -10px;
  }

  @keyframes move {
    0% {
      transform: rotate(0);
    }
    33% {
      transform: rotate(-5deg);
    }
    66% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    animation: move 200ms infinite linear;
    transform-origin: center bottom;
  }

  .eye {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    border: 2px solid #000;
    background-color: #2e2e2e;
    border-radius: 50%;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .eye::after {
    content: '';
    display: block;
    border: 3px solid #000;
    width: 26px;
    height: 26px;
    background-color: #fff;
    position: absolute;
    left: 4px;
    top: 2px;
    border-radius: 50%;
  }

  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 170px;
    left: 50%;
    margin-left: -100px;
  }


  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 2;
  }

  .mouth .up .lip {
    width: 100px;
    height: 30px;
    border: 3px solid #000;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -50px;
    background-color: #FFE600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-top: none;
    border-right: none;
    transform: rotate(-15deg) translateX(-53px);
  }

  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-top: none;
    border-left: none;
    transform: rotate(15deg) translateX(53px);
  }

  .mouth .up .line {
    width: 100px;
    height: 10px;
    position: absolute;
    top: 5px;
    left: -2px;
    background: #FFE600;
    transform: rotate(-15deg);
  }

  .mouth .down {
    width: 100%;
    height: 180px;
    position: absolute;
    top: 5px;
    left: 0;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid #000;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #6e0013;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    background-color: #fb3d56;
    border-radius: 100px;
  }

  .face {
    width: 88px;
    height: 88px;
    border: 3px solid #000;
    background-color: red;
    position: absolute;
    top: 220px;
    left: 50%;
    margin-left: -44px;
    border-radius: 50%;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left {
    transform: translateX(-170px);
    
  }
  .face.left > img {
    transform-origin: 0 0;
    transform: rotateY(180deg);
  }
  .face.right {
    transform: translateX(170px);
  }
`

export default string