window.onload = () => {
  function playPosition() {
    let position = document.querySelector("#headerMain").clientHeight / 2;
    console.log(`top-[${position}px]`);
    const playBtn = document.querySelector(".play-btn");
    let playHeight = playBtn.clientHeight / 2;
    playBtn.style.top = `${position - playHeight}px`;
  }
  // playPosition();
};
