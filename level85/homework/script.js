
const keySound = {
    w: "crash.mp3",
    a: "kick-bass.mp3",
    s: "snare.mp3",
    d: "tom-1.mp3",
    j: "tom-2.mp3",
    k: "tom-3.mp3",
    l: "tom-4.mp3",
  };
  
  let premiumUsed = false;

  function playSound(key) {
    const soundId = `sound-${key}`;     
    const audio = document.getElementById(soundId);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }
  
  

  document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", function () {
      const key = this.innerText.toLowerCase();
      if (key === "p") {
        triggerPremium();
      } else {
        playSound(key);
      }
    });
  });
  

  function triggerPremium() {
    if (!premiumUsed) {
      const audio = document.getElementById("premiumSound");
      audio.play();
      premiumUsed = true;
      alert("🎉 You used your one-time premium sound!");
    } else {
      alert("⚠️ Premium sound can only be used once!");
    }
  }
  