onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = (
      "I met you internet. I little knew you. I barely recognised the tone of your voice. I have no idea how comfortable your touch is. But I've fallen in love with you. I fell in love with our talk. I fell in love with their depth and the way you described how you believe the world."
    ).split(""); // Split the text into individual characters
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index] === "." ? ".<br><br>" : titles[index]; // Add line breaks after periods
        index++;
        setTimeout(appendTitle, 50); // Adjust delay for smoother animation
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};