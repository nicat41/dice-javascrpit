let run = document.querySelector("#run")



count1 = 0;
count2 = 0;
count3 = 0;

let countspan1 = document.querySelector("#countspan1")
let countspan2 = document.querySelector("#countspan2")
let countspan3 = document.querySelector("#countspan3")



run.addEventListener("click", function() {

    let user1 = Math.floor(Math.random() * 6) + 1;
    let user2 = Math.floor(Math.random() * 6) + 1;

    elementrandom1 = document.querySelector("#random1")
    elementrandom2 = document.querySelector("#random2")

    elementrandom1.src = "./dice.imges/" + user1 + ".png";
    elementrandom2.src = "./dice.imges/" + user2 + ".png";

    if(user1 > user2) {
      count1 += 1;
    }
    else  if(user2 > user1) {
        count2 += 1;
      }
      else if (user1 == user2) {
       count3 += 1;
      }

      countspan1.innerText = count1;
      countspan2.innerText = count2;
      countspan3.innerText = count3;

      

})