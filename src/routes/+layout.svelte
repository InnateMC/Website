<header>
  <nav>
    <a href="/" id="homelink">
      <div id="titlediv">
        <img src="favicon.png" alt="logo" />
        <p id="title">InnateMC</p>
      </div>
    </a>

    <div id="links">
      <a href="news">News</a>
      <a href="docs">Docs</a>
      <a href="https://github.com/InnateMC/InnateMC/releases">Releases</a>
      <a href="https://github.com/InnateMC/InnateMC">Contribute</a>
    </div>
  </nav>
</header>
<div style="position:absolute; left:0; top:0; width:100%; height:100%; overflow:hidden;">
  <img src="logo.png" id="background" alt="background" />
</div>
<slot />

<style>
  #homelink {
    text-decoration: none;
  }
  header {
    z-index: 4;
  }
  nav {
    z-index: 3;
    width: calc(100%);
    color: #f5f5f7;
    height: 52px;
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);

    position: fixed;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(29, 29, 31, 0.72);
    box-shadow: 0 1px 0 0 hsla(0, 0%, 100%, 0.24);
  }
  #title {
    width: 80px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2em;
    text-align: center;
  }

  #links {
    display: flex;
    justify-content: space-evenly;
    padding-right: 15px;
  }
  @media only screen and (max-width: 600px) {
    #links {
      flex-direction: column;
    }
    nav {
      flex-direction: column;
      align-items: start;
    }
    #titlediv {
      justify-self: start;
      height: 52px;
    }
  }
  #links a {
    width: 80px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    font-size: 0.8em;
    text-align: center;
  }
  #links a:hover {
    color: #2997ff;
  }
  #background {
    position: absolute;
    top: 0px;
    -webkit-filter: blur(120px) saturate(180%);
    height: 500px;
    width: 500px;
    animation: moverandomly 100s infinite ease-in-out;
    -webkit-animation: webkit-moverandomly 100s infinite ease-in-out;
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
  }
  @keyframes moverandomly {
    0% {
      transform: translate(0%, 0%) scale(1);
    }
    30% {
      transform: translate(20%, 100%) scale(1.3);
    }
    50% {
      transform: translate(40%, 80%) scale(1);
    }
    70% {
      transform: translate(100%, 0%) scale(3);
    }
    90% {
      transform: translate(20%-20%) scale(2);
    }
    100% {
      transform: translate(0%, 0%) scale(1);
    }
  }
  @-webkit-keyframes webkit-moverandomly {
    0% {
      transform: translate(0%, 0%) scale(1);
    }
    30% {
      transform: translate(20%, 100%) scale(1.3);
    }
    50% {
      transform: translate(40%, 80%) scale(1);
    }
    70% {
      transform: translate(100%, 0%) scale(3);
    }
    90% {
      transform: translate(20%-20%) scale(2);
    }
    100% {
      transform: translate(0%, 0%) scale(1);
    }
  }
  #titlediv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #titlediv img {
    height: 30px;
    width: 30px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
