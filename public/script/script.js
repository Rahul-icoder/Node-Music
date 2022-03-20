let musicContainer = document.querySelector(".music-container");
const URL = "https://1612-2405-204-329f-d546-5d72-b058-1c26-28a4.ngrok.io";
const stopMusic = () => {
  return new Promise((resolve, reject) => {
    fetch(`${URL}/stop`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

musicContainer.addEventListener("click", async (e) => {
  try {
    await stopMusic();
    fetch(`${URL}/play/${e.target.innerText}`, {
      method: "POST",
    });
  } catch (error) {
    console.log(error);
  }
});
