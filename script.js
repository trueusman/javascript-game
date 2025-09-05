let prize = 9;

function game() {

  let r = Math.floor(Math.random() * 10) + 1;

    document.getElementById("b").innerHTML =
    " Your Number: <strong>" + r + "</strong>";

 
  if (r === prize) {
    document.getElementById("a").innerHTML =
      "<span style='color:#ff006e; font-size:1.4rem;'>CONGRATULATIONS!</span> <br> You won the prize ";
    
    document.getElementById("a").style.color = "#28a745";
    document.getElementById("a").style.animation = "pop 0.6s ease-in-out";

  } else {
    document.getElementById("a").innerHTML =
      " Better luck next time...";
    document.getElementById("a").style.color = "#e91e63";
  }
}
