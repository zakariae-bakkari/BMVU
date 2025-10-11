// LOADING







// !-----------------------------------------------shortcuts
document.addEventListener("keydown",function(e){
  if(e.ctrlKey && e.key === "t"){
    e.preventDefault();
    btn_testA.click();
  }
  if(e.ctrlKey && e.key === "s"){
    e.preventDefault();
    btn_semaphoreA.click();
  }
  if(e.ctrlKey && e.key === "a"){
    e.preventDefault();
    btn_annonceA.click();
  }
  if(e.ctrlKey && e.key === "b"){
    e.preventDefault();
    btn_blockA.click();
  }
  if(e.ctrlKey && e.key === "r"){
    e.preventDefault();
    btn_reditionA.click();
  }
  if(e.ctrlKey && e.key === "f"){
    e.preventDefault();
    btn_sonnerieA.click();
  }
  if (e.key === "b") {
    e.preventDefault();
    pedal1_block.click();

  }
  if (e.key === "v") {
    e.preventDefault();
    pedalB.click();

  }

  // shortcut station b
  if(e.altKey && e.key === "t"){
    e.preventDefault();
    btn_testB.click();
  }
  if(e.altKey && e.key === "s"){
    e.preventDefault();
    btn_semaphoreB.click();
  }
  if(e.altKey && e.key === "a"){
    e.preventDefault();
    btn_annonceB.click();
  }
  if(e.altKey && e.key === "b"){
    e.preventDefault();
    btn_blockB.click();
  }
  if(e.altKey && e.key === "r"){
    e.preventDefault();
    btn_reditionB.click();
  }
  if(e.altKey && e.key === "f"){
    e.preventDefault();
    btn_sonnerieB.click();
  }
    if (e.key === "x"  && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      pedal2_block.click();
  
    }
    if (e.key === "c" && !e.altKey && !e.ctrlKey && !e.shiftKey ) {
      e.preventDefault();
      pedalA.click();
  
    }

    // fullscreen
    if (e.key === "f" && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      btn_fullscreen.click();
    }
    // reload
    if (e.key === "r" && !e.altKey && !e.ctrlKey && !e.shiftKey ) {
      e.preventDefault();
      re.click();
    }
    if (e.key === "s" && !e.altKey && !e.ctrlKey && !e.shiftKey ) {
      e.preventDefault();
      shortcuts.click();
    }
})
// !-----------------------------------------------shortcuts list
const shortcuts = document.querySelector(".bi-keyboard-fill")
shortcuts.addEventListener("click",function(){
  let shortcutsbox=document.querySelector(".shortcuts-box");
  if (shortcutsbox.style.display == "none"
  ) {
  shortcutsbox.style.display="flex";
  }
  else{
  shortcutsbox.style.display="none";

  }
})
document.querySelector(".bi-x-circle").addEventListener("click",function(){
  let shortcutsbox=document.querySelector(".shortcuts-box");
  shortcutsbox.style.display="none";

})


let load = () => {
  window.addEventListener("load", function () {
    initialize();
    const preloader_container = document.getElementsByClassName(
      "preloader_container"
    )[0];

      preloader_container.style.display = "none";})
};
load();
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");
const shema1 = document.getElementById("shema1");
const shema2 = document.getElementById("shema2");
const shema3 = document.getElementById("shema3");
const imageContainer = document.getElementById("image-container");
const imageContent = document.getElementById("image-content-fullscreen");
const btncloseimagecontainer = document.getElementById(
  "btn-close-image-container"
);
let fullscreenImg = (imageURl) => {
  imageContainer.style.display = "flex";
  imageContent.src = imageURl;
};

btncloseimagecontainer.addEventListener("click", () => {
  imageContainer.style.display = "none";
  imageContent.src = "";
});


//  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function div(...divs) {
  divs.forEach((div) => {
    div.className = `border p-2 col-6 d-flex justify-content-center flex-column align-items-center relative ${div}`;
  });
}
function divFocus(...divs) {
  divs.forEach((div) => {
    div.className = `border_focus p-2 col-6 d-flex justify-content-center flex-column align-items-center relative ${div}`;
  });
}
function ActionOnFalse(...names) {
  names.forEach((name) => {
    name = false;
  });
}

// Function to remove 'clicked' class from multiple elements
function removeClicked(...elements) {
  elements.forEach((el) => {
    el.classList.remove("clicked");
  });
}

// Function to remove 'clickedB' class from multiple elements
function removeClickedB(...elements) {
  elements.forEach((el) => {
    el.classList.remove("clickedB");
  });
}
function removeclicked_active(...elements) {
  elements.forEach((el) => {
    el.classList.remove("clicked_active");
  });
}

function displayWarning(message, div) {
  message_warning_div.style.display = "block";
  message_warning_div.innerHTML = message;
  divFocus(div);
}

// dowload or see the shema

// audio

const sonnerie = new Audio("assets/audio/sonnerie.wav");
const sonnerie1 = new Audio("assets/audio/sonnerie.wav");
const trainSound = new Audio("assets/audio/train_sound.wav");
const notification1 = new Audio("assets/audio/notification1.wav");

sonnerie1.volume = 0.08;
sonnerie.volume = 0.08;
//  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// ----------------------------------------------------------------------------------
// Declarations(block coté) & initialisation
// ----------------------------------------------------------------------------------

// botton de block A
const btn_blockA = document.getElementById("btn-blockA");
const btn_annonceA = document.getElementById("btn-annonceA");
const led_annonceA = document.getElementById("led-annonceA");
const led_annonceA_fullscreen = document.getElementById(
  "led_annonceA_fullscreen"
);
const btn_reditionA = document.getElementById("btn-reditionA");
const btn_testA = document.getElementById("btn-testA");
const btn_sonnerieA = document.getElementById("btn-sonnerieA");
const led_semaphoreA = document.getElementById("led-semaphoreA");
const led_semaphoreA_fullscreen = document.getElementById(
  "led_semaphoreA_fullscreen"
);
const btn_semaphoreA = document.getElementById("btn-semaphoreA");

const div_sonnerieA = document.getElementById("div_sonnerieA");
const div_reditionA = document.getElementById("div_reditionA");
const div_annonceA = document.getElementById("div_annonceA");
const div_blockageA = document.getElementById("div_blockageA");
const div_testA = document.getElementById("div_testA");
const div_semaphoreA = document.getElementById("div_semaphoreA");
// etat initial des btns  block Cote A
let btn_blockA_activeOn = false;
let btn_annonceA_activeOn = false;
let led_annonceA_activeOn = false;
let btn_reditionA_activeOn = false;
let btn_testA_activeOn = false;
let btn_sonnerieA_activeOn = false;
let led_semaphoreA_activeOn = false;
let btn_semaphoreA_activeOn = false;
let btn_semaphoreA_activeoff = false;

// bottons block Cote B
const btn_blockB = document.getElementById("btn-blockB");
const btn_annonceB = document.getElementById("btn-annonceB");
const led_annonceB = document.getElementById("led-annonceB");
const led_annonceB_fullscreen = document.getElementById(
  "led_annonceB_fullscreen"
);
const btn_reditionB = document.getElementById("btn-reditionB");
const btn_testB = document.getElementById("btn-testB");
const btn_sonnerieB = document.getElementById("btn-sonnerieB");
const led_semaphoreB = document.getElementById("led-semaphoreB");
const led_semaphoreB_fullscreen = document.getElementById(
  "led_semaphoreB_fullscreen"
);
const btn_semaphoreB = document.getElementById("btn-semaphoreB");
const icon_sonnerieB = document.getElementById("icon_sonnerieB");
const icon_sonnerieA = document.getElementById("icon_sonnerieA");

const div_sonnerieB = document.getElementById("div_sonnerieB");
const div_reditionB = document.getElementById("div_reditionB");
const div_annonceB = document.getElementById("div_annonceB");
const div_blockageB = document.getElementById("div_blockageB");
const div_testB = document.getElementById("div_testB");
const div_semaphoreB = document.getElementById("div_semaphoreB");

// l'etat des btns block Cote B
let btn_blockB_activeOn = false;
let btn_blockB_on = false;
let btn_annonceB_activeOn = false;
let led_annonceB_activeOn = false;
let btn_reditionB_activeOn = false;
let btn_testB_activeOn = false;
let btn_sonnerieB_activeOn = false;
let led_semaphoreB_activeOn = false;
let btn_semaphoreB_activeOn = false;
let btn_semaphoreB_activeoff = false;

// ----------------------------------------------------------------------------------
// functions
// ----------------------------------------------------------------------------------

// les buttons de blockage

function blockage(
  button,
  btn_block_activeOn,
  btn_testoposite_activeOn,
  testStation,
  divTest,
  divAnnonce,
  divSemaphore,
  btn_annonce__opposite_activeOn,
  btn_semaphore__opposite_activeOn
) {
  // Initialize
  initializeBordureNormal();
  initializeAlert();
  if (button == btn_blockB) {
    button.classList.toggle("clickedB");
  } else if (button == btn_blockA) {
    button.classList.toggle("clicked");
  }
  // si les condition bien vérifier le btn blockage va activé
  if (
    !btn_block_activeOn &&
    !btn_testoposite_activeOn &&
    !btn_annonce__opposite_activeOn &&
    !btn_semaphore__opposite_activeOn
  ) {
    button.classList.add("clicked_active");

    btn_block_activeOn = true;
    notification1.play();
  } else {
    // si les condition n'est pas vérifier le btn blockage va desactivé et faire une message d'erreur
    if (btn_testoposite_activeOn) {
      displayWarning(
        `la gare ${testStation} déja prendre autorite de envoyer un train  <kbd>test</kbd>`,
        divTest
      );
      message_warning_div.style.display = "block";
      notification1.play(); //sound notification
      message_warning.innerHTML = `la gare ${testStation} déja prendre autorite de envoyer un train  <kbd>test</kbd>`;
      divTest.className =
        "border_focus p-2 col-6 d-flex justify-content-center flex-column align-items-center div_test";
    }
    if (btn_annonce__opposite_activeOn) {
      message_warning_div.style.display = "block";
      notification1.play(); //sound notification
      message_warning.innerHTML = `la gare ${testStation} déja est activé l' <kbd>Annonce</kbd>`;
      divAnnonce.className =
        "border_focus p-2 col-6 d-flex justify-content-center flex-column align-items-center div_test";
    }
    if (btn_semaphore__opposite_activeOn) {
      message_warning_div.style.display = "block";
      notification1.play(); //sound notification
      message_warning.innerHTML = `la gare ${testStation} déja est activé l' <kbd>semaphore</kbd>`;
      divSemaphore.className =
        "border_focus p-2 col-6 d-flex justify-content-center flex-column align-items-center div_test";
    }
    notification1.play();
    btn_block_activeOn = false;
    removeclicked_active(button);
  }

  // Return the updated btn_block_activeOn
  return btn_block_activeOn;
}

btn_blockA.onclick = function () {
  btn_blockA_activeOn = blockage(
    btn_blockA,
    btn_blockA_activeOn,
    btn_testB_activeOn,
    "B",
    div_testB,
    div_annonceB,
    div_semaphoreB,
    btn_annonceB_activeOn,
    btn_semaphoreB_activeOn
  );
};

btn_blockB.onclick = function () {
  btn_blockB_activeOn = blockage(
    btn_blockB,
    btn_blockB_activeOn,
    btn_testA_activeOn,
    "A",
    div_testA,
    div_annonceA,
    div_semaphoreA,
    btn_annonceA_activeOn,
    btn_semaphoreA_activeOn
  );
};

function semaphore(
  btnSemaphoreActiveOn,
  btnTestActiveOn,
  ledSemaphoreActiveOn,
  ledAnnonceActiveOn,
  ledAnnonce,
  ledAnnonceFullscreen,
  divSemaphore,
  signal1,
  btnSemaphore,
  pedal1lockPassed,
  gareName,
  divTest,
  btn_semaphore_activeoff,
  signal_1,
  led_annonce_fullscreen,
  led_annonce,
  led_semaphore,
  led_semaphore_fullscreen
) {
  // Initialisation
  initializeBordureNormal();
  initializeAlert();

  // Gestion des boutons cliqués
  if (btnSemaphore === btn_semaphoreA) {
    btnSemaphore.classList.toggle("clicked");
  } else if (btnSemaphore === btn_semaphoreB) {
    btnSemaphore.classList.toggle("clickedB");
  }

  // Conditions et gestion des états
  if (!btnSemaphoreActiveOn && btnTestActiveOn && !ledSemaphoreActiveOn) {
    btn_semaphore_activeoff = true;
    ledAnnonceActiveOn = true;
    btnSemaphoreActiveOn = true;
    btnSemaphore.classList.add("clicked_active");
    ledAnnonce.classList.add("clicked");
    ledAnnonceFullscreen.classList.add("clicked");
    notification1.play();
    div(divSemaphore);
    signal1.src = "assets/images/feu_verte.png";
  } else {
    btnSemaphoreActiveOn = false;
    ledSemaphoreActiveOn = true;
    removeclicked_active(btnSemaphore);

    div(divSemaphore);
    if (!btnTestActiveOn && !btn_semaphore_activeoff) {
      notification1.play();
      displayWarning(`Activer d'abord le <kbd>test</kbd>`, divTest);
      console.log("Avertissement: Activer d'abord le test");
    }
    if (btn_semaphore_activeoff) {
      notification1.play();
      setTimeout(function () {
        signal_1.src = "assets/images/feu_rouge.png";
        led_annonce_fullscreen.classList.remove("clicked");
        led_annonce.classList.remove("clicked");
        led_semaphore.classList.add("clicked");
        led_semaphore_fullscreen.classList.add("clicked");
      }, 500);
    }
  }

  return {
    btnSemaphoreActiveOn,
    ledAnnonceActiveOn,
    ledSemaphoreActiveOn,
    btn_semaphore_activeoff,
  };
}

// Gestionnaire de clic pour le bouton A
btn_semaphoreA.onclick = function () {
  const result = semaphore(
    btn_semaphoreA_activeOn,
    btn_testA_activeOn,
    led_semaphoreA_activeOn,
    led_annonceA_activeOn,
    led_annonceA,
    led_annonceA_fullscreen,
    div_semaphoreA,
    signal_left_1,
    btn_semaphoreA,
    pedal1BlockPassed,
    "A",
    div_testA,
    btn_semaphoreA_activeoff,
    signal_left_1,
    led_annonceA_fullscreen,
    led_annonceA,
    led_semaphoreA,
    led_semaphoreA_fullscreen
  );
  btn_semaphoreA_activeOn = result.btnSemaphoreActiveOn;
  led_annonceA_activeOn = result.ledAnnonceActiveOn;
  led_semaphoreA_activeOn = result.ledSemaphoreActiveOn;
  btn_semaphoreA_activeoff = result.btn_semaphore_activeoff;
};

// Gestionnaire de clic pour le bouton B
btn_semaphoreB.onclick = function () {
  const result = semaphore(
    btn_semaphoreB_activeOn,
    btn_testB_activeOn,
    led_semaphoreB_activeOn,
    led_annonceB_activeOn,
    led_annonceB,
    led_annonceB_fullscreen,
    div_semaphoreB,
    signal_right_2,
    btn_semaphoreB,
    pedal2BlockPassed,
    "B",
    div_testB,
    btn_semaphoreB_activeoff,
    signal_right_2,
    led_annonceB_fullscreen,
    led_annonceB,
    led_semaphoreB,
    led_semaphoreB_fullscreen
  );
  btn_semaphoreB_activeOn = result.btnSemaphoreActiveOn;
  led_annonceB_activeOn = result.ledAnnonceActiveOn;
  led_semaphoreB_activeOn = result.ledSemaphoreActiveOn;
  btn_semaphoreB_activeoff = result.btn_semaphore_activeoff;
};

// les buttons test

function test(
  btn_blockBA_activeOn,
  btn_annonceBA_activeOn,
  led_annonceBA_activeOn,
  btn_reditionBA_activeOn,
  btn_testBA_activeOn,
  led_semaphoreBA_activeOn,
  btn_semaphoreBA_activeOn,
  btn_testAB_activeOn,
  pedalBA,
  btn_testAB,
  div_testAB,
  pedal12_block,
  div_blockageBA,
  div_testBA,
  train1,
  div_semaphoreAB,
  garename,
  div_annonce
) {
  // initail
  initializeBordureNormal();
  initializeAlert();

  // Function to deactivate the button

  if (
    !btn_blockBA_activeOn &&
    !btn_annonceBA_activeOn &&
    !btn_testBA_activeOn &&
    !btn_semaphoreBA_activeOn
  ) {
    btn_testAB_activeOn = true; // etats true (active)
    pedalBA.disabled = false;
    pedal12_block.disabled = false;
    btn_testAB.classList.add("clicked");

    // Countdown timer function

    div_testAB.className =
      "border p-2 col-6 d-flex justify-content-center flex-column align-items-center div_test";
  } else {
    // If conditions are not met
    if (btn_blockBA_activeOn) {
      displayWarning(`la gare ${garename} active le blockage`, div_blockageBA);
    } else if (btn_testBA_activeOn) {
      displayWarning(`la gare ${garename} active le test déjà`, div_testBA);
    } else if (btn_semaphoreBA_activeOn) {
      displayWarning(
        `la gare ${garename} ouvrir le semaphore `,
        div_semaphoreAB
      );
    } else if (btn_annonceBA_activeOn) {
      displayWarning(`la gare ${garename} faire une annonce `, div_annonce);
    } else if (led_annonceBA_activeOn) {
      displayWarning(`la gare ${garename} led_annonceBA_activeOn`, div_annonce);
    }
    btn_testAB_activeOn = false;
    removeClicked(btn_testAB);
  }
  console.log(
    `
     btn_blockB_activeOn : ` +
      btn_blockB_activeOn +
      `
     btn_annonceB_activeOn : ` +
      btn_annonceB_activeOn +
      `   led_annonceB_activeOn : ` +
      led_annonceB_activeOn +
      `   btn_reditionB_activeOn : ` +
      btn_reditionB_activeOn +
      `   btn_testB_activeOn : ` +
      btn_testB_activeOn +
      `   btn_sonnerieB_activeOn : ` +
      btn_sonnerieB_activeOn +
      `
     led_semaphoreB_activeOn : ` +
      led_semaphoreB_activeOn +
      `
     btn_semaphoreB_activeOn : ` +
      btn_semaphoreB_activeOn
  );
  return btn_testAB_activeOn;
}



btn_testA.onclick = function () {
  btn_testA_activeOn = test(
    btn_blockB_activeOn,
    btn_annonceB_activeOn,
    led_annonceB_activeOn,
    btn_reditionB_activeOn,
    btn_testB_activeOn,
    led_semaphoreB_activeOn,
    btn_semaphoreB_activeOn,
    btn_testA_activeOn,
    pedalB,
    btn_testA,
    div_testA,
    pedal1_block,
    div_blockageB,
    div_testB,
    train,
    div_semaphoreB,
    "B",
    div_annonceB
  );
  // changer l'est de botton apres 60s
  if (btn_testA_activeOn) {
    function deactivateBtnTestA() {
      btn_testA_activeOn = false;
      removeClicked(btn_testA);
      btn_testA.innerHTML = ""; // reset button text
    }
    let countdown = 60; // countdown in seconds
    btn_testA.innerHTML = `<span class="countdown">${countdown}s</span>`;

    let interval = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        clearInterval(interval);
        deactivateBtnTestA();
        console.log(btn_testA_activeOn);
      } else {
        btn_testA.querySelector(".countdown").textContent = countdown;
      }
    }, 100);
  }
};

btn_testB.onclick = function () {
  btn_testB_activeOn = test(
    btn_blockA_activeOn,
    btn_annonceA_activeOn,
    led_annonceA_activeOn,
    btn_reditionA_activeOn,
    btn_testA_activeOn,
    led_semaphoreA_activeOn,
    btn_semaphoreA_activeOn,
    btn_testB_activeOn,
    pedalA,
    btn_testB,
    div_testB,
    pedal2_block,
    div_blockageA,
    div_testA,
    train,
    div_semaphoreA,
    "A",
    div_annonceA
  );

  if (btn_testB_activeOn) {
    function deactivateBtnTestB() {
      btn_testB_activeOn = false;
      removeClicked(btn_testB);
      btn_testB.innerHTML = ""; // reset button text
    }
    let countdown = 60; // countdown in seconds
    btn_testB.innerHTML = `<span class="countdown">${countdown}s</span>`;

    let interval = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        clearInterval(interval);
        deactivateBtnTestB();
        console.log(btn_testB_activeOn);
      } else {
        btn_testB.querySelector(".countdown").textContent = countdown;
      }
    }, 100);
  }
};

function Annonce(
  btn_annonce_activeOn,
  btn_semaphore_activeOn,
  btn_test_activeOn,
  led_semaphore_activeOn,
  icon_sonnerie,
  btn_annonce,
  div_sonnerie,
  div_annonce,
  div_sonnerie_opposite,
  sonnerie,
  pedalBlockPassed,
  pedalBlock,
  div_semaphore,
  div_test,
  btn_redition_activeOn,
  btn_redition,
  garename_op,
  btn_semaphore_activeoff
) {
  // initail
  initializeBordureNormal();
  initializeAlert();
  if (
    !btn_annonce_activeOn &&
    !btn_semaphore_activeOn &&
    led_semaphore_activeOn &&
    btn_semaphore_activeoff
  ) {
    icon_sonnerie.style.display = "block";
    message_warning_div.style.display = "none";
    message_information_div.style.display = "block";
    message_information.innerHTML = `
      <br>
      <i class="fa-solid fa-triangle-exclamation pe-2" style="color: #e20303;"></i>
      Pour Activer Annonce <kbd>Sonnerie + Annonce</kbd>
      <br>
      <i class="fa-solid fa-info pe-2" style="color: #000000;"></i>
      Cliquez sur <kbd>Sonnerie</kbd> pour arrêter la sonnerie
      <br>
      <i class="fa-solid fa-shoe-prints fa-rotate-by pe-2" style="color: #FFD43B; --fa-rotate-angle: -20deg;"></i>
      Étape suivante : clicker sur pedal de passage pour arriver <kbd>p${garename_op}</kbd>
    `;
    btn_annonce.classList.add("clicked");
    btn_redition.classList.add("clicked");
    btn_annonce_activeOn = true;
    btn_redition_activeOn = true;
    btn_semaphore_activeoff = false;
    div_sonnerie.className =
      "border_focus3 p-2 col-6 d-flex justify-content-center flex-column align-items-center relative div_sonnerie";
    div_annonce.className =
      "border_focus3 p-2 col-6 d-flex justify-content-center flex-column align-items-center div_annonce";
    div_sonnerie_opposite.className =
      "border_must_do p-2 col-6 d-flex justify-content-center flex-column align-items-center relative";
    sonnerie.play();
    sonnerie.loop = true;
  } else {
    if (btn_semaphore_activeOn) {
      message_warning_div.style.display = "block";
      notification1.play();
      message_warning.innerHTML = "Fermez d'abord le <kbd>sémaphore</kbd>";
      div_semaphore.className =
        "border_focus p-2 col-6 d-flex justify-content-center flex-column align-items-center div_semaphore";
    }
    if (!btn_semaphore_activeoff) {
      message_warning_div.style.display = "block";
      notification1.play();
      message_warning.innerHTML = "Ouvrir d'abord le <kbd>sémaphore</kbd>";
      div_semaphore.className =
        "border_focus p-2 col-6 d-flex justify-content-center flex-column align-items-center div_semaphore";
    }
    // } else if (!btn_test_activeOn) {
    //   message_warning_div.style.display = "block";
    //   notification1.play();
    //   message_warning.innerHTML = "Activez d'abord le <kbd>test</kbd>";
    //   div_semaphore.className =
    //     "border p-2 col-6 d-flex justify-content-center flex-column align-items-center div_semaphore";
    //   div_test.className =
    //     "border_focus p-2 col-6 d-flex justify-content-center flex-column align-items-center div_test";
    // }

    // else if (!led_semaphore_activeOn) {
    //   message_warning_div.style.display = "block";
    //   notification1.play();
    //   message_warning.innerHTML =
    //     "Activez d'abord la <kbd>LED de sémaphore</kbd>";
    //      led_semaphore.className =
    //        "border_ p-2 col-6 d-flex justify-content-center flex-column align-items-center div_semaphore";

    // }
    btn_annonce_activeOn = false;
    removeClicked(btn_annonce);
  }
  return {
    btn_annonce_activeOn,
    btn_redition_activeOn,
    btn_semaphore_activeoff,
  };
}
btn_annonceA.onclick = function () {
  const result = Annonce(
    btn_annonceA_activeOn,
    btn_semaphoreA_activeOn,
    btn_testA_activeOn,
    led_semaphoreA_activeOn,
    icon_sonnerieB,
    btn_annonceA,
    div_sonnerieA,
    div_annonceA,
    div_sonnerieB,
    sonnerie,
    pedal1BlockPassed,
    pedal1_block,
    div_semaphoreA,
    div_testA,
    btn_reditionB_activeOn,
    btn_reditionB,
    "B",
    btn_semaphoreA_activeoff
  );
  btn_annonceA_activeOn = result.btn_annonce_activeOn;
  btn_reditionB_activeOn = result.btn_redition_activeOn;
  btn_semaphoreA_activeoff = result.btn_semaphore_activeoff;
};

btn_annonceB.onclick = function () {
  const result = Annonce(
    btn_annonceB_activeOn,
    btn_semaphoreB_activeOn,
    btn_testB_activeOn,
    led_semaphoreB_activeOn,
    icon_sonnerieA,
    btn_annonceB,
    div_sonnerieB,
    div_annonceB,
    div_sonnerieA,
    sonnerie1,
    pedal2BlockPassed,
    pedal2_block,
    div_semaphoreB,
    div_testB,
    btn_reditionA_activeOn,
    btn_reditionA,
    "A",
    btn_semaphoreB_activeoff
  );
  btn_annonceB_activeOn = result.btn_annonce_activeOn;
  btn_reditionA_activeOn = result.btn_redition_activeOn;
  btn_semaphoreB_activeoff = result.btn_semaphore_activeoff;
};

// les buttons sonnerie
btn_sonnerieB.onclick = function () {
  initializeBordureNormal();
  initializeAlert();
  icon_sonnerieB.style.display = "none";
  if (sonnerie.play()) {
    sonnerie.pause();
    sonnerie.currentTime = 0;
  }
};
btn_sonnerieA.onclick = function () {
  initializeBordureNormal();
  initializeAlert();
  icon_sonnerieA.style.display = "none";
  if (sonnerie1.play()) {
    sonnerie1.pause();
    sonnerie1.currentTime = 0;
  }
};

function redition(
  btn_redition_activeOn,
  btn_redition,
  pedalPassed,
  btn_test_opposite_activeOn,
  btn_test_activeOn,
  icon_sonnerie,
  div_redition,
  div_sonnerie_opposite,
  div_sonnerie,
  sonnerie,
  pedal,
  btn_annonce__opposite,
  btn_annonce__opposite_activeOn,
  led_semaphore_opposet,
  led_semaphore_activeOn,
  led_semaphore_fullscreen_opposet
) {
  if (
    btn_redition_activeOn &&
    pedalPassed &&
    btn_annonce__opposite_activeOn &&
    !btn_test_activeOn
  ) {
    btn_annonce__opposite_activeOn = false;
    led_semaphore_activeOn = false;
    removeClicked(btn_annonce__opposite);
    removeClicked(btn_redition);
    removeClicked(led_semaphore_opposet);
    removeClicked(led_semaphore_fullscreen_opposet);

    icon_sonnerie.style.display = "block";
    message_information_div.style.display = "block";
    message_information.innerHTML = `
      <br>
      <i class="fa-solid fa-triangle-exclamation pe-2" style="color: #e20303;"></i>
      Pour Activer redition <kbd>Sonnerie + Redition</kbd>
      <br>
      <i class="fa-solid fa-info pe-2" style="color: #000000;"></i>
      Cliquez sur <kbd>Sonnerie</kbd> pour arrêter la sonnerie
      <br>
      <i class="fa-solid fa-shoe-prints fa-rotate-by pe-2" style="color: #FFD43B; --fa-rotate-angle: -20deg;"></i>
      Fin 😁</kbd>
    `;
    div_sonnerie.className =
      "border_focus3 p-2 col-6 d-flex justify-content-center flex-column align-items-center relative";
    div_redition.className =
      "border_focus3 p-2 col-6 d-flex justify-content-center flex-column align-items-center div_annonce";
    div_sonnerie_opposite.className =
      "border_must_do p-2 col-6 d-flex justify-content-center flex-column align-items-center relative div_sonnerie";
    sonnerie.play();
    sonnerie.loop = true;
    setTimeout(() => {
      initializeBordureNormal();
      initializeAlert();
    }, 6000);
  } else if (!pedalPassed && btn_test_opposite_activeOn) {
    message_information_div.style.display = "none";
    message_warning_div.style.display = "block";
    notification1.play();
    message_warning.innerHTML = `<i class="fa-solid fa-triangle-exclamation pe-2" style="color: #e20303;"></i> Le train n'arrive pas`;
    if (pedal == pedalB) {
      pedal.className = "block p1-2 border_focus_sm";
    }
    if (pedal == pedalA) {
      pedal.className = "block p1-1 border_focus_sm";
    }
  }

  return btn_annonce__opposite_activeOn;
}
btn_reditionB.onclick = function () {
  btn_annonceA_activeOn = redition(
    btn_reditionB_activeOn,
    btn_reditionB,
    pedalBPassed,
    btn_testA_activeOn,
    btn_testB_activeOn,
    icon_sonnerieA,
    div_reditionB,
    div_sonnerieA,
    div_sonnerieB,
    sonnerie1,
    pedalB,
    btn_annonceA,
    btn_annonceA_activeOn,
    led_semaphoreA,
    led_semaphoreA_activeOn,
    led_semaphoreA_fullscreen
  );
};
btn_reditionA.onclick = function () {
  btn_annonceB_activeOn = redition(
    btn_reditionA_activeOn,
    btn_reditionA,
    pedalAPassed,
    btn_testB_activeOn,
    btn_testA_activeOn,
    icon_sonnerieB,
    div_reditionA,
    div_sonnerieB,
    div_sonnerieA,
    sonnerie,
    pedalA,
    btn_annonceB,
    btn_annonceB_activeOn,
    led_semaphoreB,
    led_semaphoreB_activeOn,
    led_semaphoreB_fullscreen
  );
};
// ----------------------------------------------------------------------------------
// Declarations( screen ) & initialisation
// ----------------------------------------------------------------------------------

// initialisation etat de passage des pedals

let pedal1BlockPassed = false;
let pedal2BlockPassed = false;
let pedalAPassed = false;
let pedalBPassed = false;

// pedales and img
const pedal1_block = document.getElementById("pedal1_block");
const pedal2_block = document.getElementById("pedal2_block");
const pedalA = document.getElementById("pedal1");
const pedalB = document.getElementById("pedal2");
const train = document.getElementById("train");
const train1b = document.getElementById("train-1-b");
const signal = document.getElementById("signal");
const signal_left_1 = document.getElementById("signal-left-1");
const signal_left_2 = document.getElementById("signal-left-2");
const signal_right_1 = document.getElementById("signal-right-1");
const signal_right_2 = document.getElementById("signal-right-2");

// variable
let train1bArivage = false;
let trainArivage = false;
function pedalBlock(
  btn_semaphore_activeOn,
  led_semaphore_activeOn,
  pedalBlockPassed,
  led_annonce_activeOn,
  trainAB,
  signal_1,
  led_semaphore_fullscreen,
  led_semaphore,
  led_annonce,
  led_annonce_fullscreen,
  pedal_block,
  div_semaphore
) {
  // initail
  initializeBordureNormal();
  initializeAlert();
  if (btn_semaphore_activeOn) {
    led_semaphore_activeOn = true;
    pedalBlockPassed = true;
    led_annonce_activeOn = false;
    if (trainAB == train) {
      train.style.left = "40%";
    } else if (trainAB == train1b) {
      train1b.style.top = "47%";
      train1b.style.right = "40px";
      train1b.style.transition = "0.7s";
      train1b.style.right = "40%";
    }
    setTimeout(function () {
      signal_1.src = "assets/images/feu_rouge.png";
      led_annonce_fullscreen.classList.remove("clicked");
      led_annonce.classList.remove("clicked");
      led_semaphore.classList.add("clicked");
      led_semaphore_fullscreen.classList.add("clicked");
    }, 500);
    trainSound.play();
    trainSound.volume = 0.04;
    setTimeout(() => {
      trainSound.pause();
    }, 2900);
    pedal_block.disabled = true;
  } else {
    // initail
    initializeBordureNormal();
    initializeAlert();
    if (!btn_semaphore_activeOn) {
      message_warning_div.style.display = "block";
      notification1.play();
      message_warning.innerHTML =
        " il faut d'abord ouvrir le <kbd>semaphore</kbd>";
      div_semaphore.className =
        "border_focus2 p-2 col-6 d-flex justify-content-center flex-column align-items-center div_semaphore";
    }
  }
  // Return the updated pedalBlockPassed
  return pedalBlockPassed;
}

pedal1_block.onclick = function () {
  pedal1BlockPassed = pedalBlock(
    btn_semaphoreA_activeOn,
    led_semaphoreA_activeOn,
    pedal1BlockPassed,
    led_annonceA_activeOn,
    train,
    signal_left_1,
    led_semaphoreA_fullscreen,
    led_semaphoreA,
    led_annonceA,
    led_annonceA_fullscreen,
    pedal1_block,
    div_semaphoreA
  );
};
pedal2_block.onclick = function () {
  pedal2BlockPassed = pedalBlock(
    btn_semaphoreB_activeOn,
    led_semaphoreB_activeOn,
    pedal2BlockPassed,
    led_annonceB_activeOn,
    train1b,
    signal_right_2,
    led_semaphoreB_fullscreen,
    led_semaphoreB,
    led_annonceB,
    led_annonceB_fullscreen,
    pedal2_block,
    div_semaphoreB
  );
};
function pedalArivee() {}
pedalB.onclick = function () {
  // initail
  initializeBordureNormal();
  initializeAlert();
  if (
    pedal1BlockPassed &&
    btn_annonceA_activeOn &&
    !pedalBPassed &&
    btn_reditionB_activeOn
  ) {
    message_warning_div.style.display = "none";
    message_information_div.style.display = "none";
    pedalBPassed = true;
    const container = train.parentElement;
    const containerWidth = container.offsetWidth;
    const trainWidth = train.offsetWidth;
    const leftPosition = containerWidth - trainWidth; // 100 pixels less than the container width

    // Set the train's left position
    train.style.left = leftPosition + "px";
    // setTimeout(function () {
    //   signal_left_1.src = "assets/images/feu_rouge.png";
    //   led_semaphoreA.classList.add("clicked");
    //   led_semaphoreA_fullscreen.classList.add("clicked");
    // }, 500);
    setTimeout(function () {
      message_information_div.style.display = "block";
      notification1.play();
      message_information.innerHTML =
        "<br>Envoyer une Redition au gare A informer l'arrivage de train ";
    }, 200);
    // Disable pedal1 and pedal1_block once pedal1 is clicked
    pedalB.disabled = true;
    pedal1_block.disabled = true;
  } else {
    if (!btn_annonceA_activeOn && pedal1BlockPassed) {
      message_warning_div.style.display = "block";
      message_warning.innerHTML =
        " il Faut fermer <kbd>semaphore</kbd> puis  faire un annonce <kbd>SONNERIE + ANNONCE</kbd>";
    } else if (!pedal1BlockPassed) {
      message_warning_div.style.display = "none";
      message_warning_div.style.display = "block";
      message_warning_div.innerHTML = `clicker d'abord sur pedal de block de la gare A <kbd>B</kbd> 
          `;
    } else if (!btn_annonceA_activeOn) {
      message_warning_div.innerHTML = `il faut faire une annonce informer la gare B  <kbd>Annonce</kbd> 
          `;
    }
    // setTimeout(function () {
    //   message_warning_div.style.display = "none";
    // }, 10000);
  }
};
pedalA.onclick = function () {
  // initail
  initializeBordureNormal();
  initializeAlert();
  if (
    pedal2BlockPassed &&
    btn_annonceB_activeOn &&
    !pedalAPassed &&
    btn_reditionA_activeOn &&
    !trainArivage
  ) {
    trainArivage = true;
    message_warning_div.style.display = "none";
    message_information_div.style.display = "none";
    pedalAPassed = true;
    const container = train.parentElement;
    const containerWidth = container.offsetWidth;
    const trainWidth = train.offsetWidth;
    const rightPosition = containerWidth - trainWidth; // 100 pixels less than the container width
    // Set the train's left position
    train1b.style.right = rightPosition + "px";
    train1b.style.top = "34%";
    // setTimeout(function () {
    //   signal_left_1.src = "assets/images/feu_rouge.png";
    //   led_semaphoreA.classList.add("clicked");
    //   led_semaphoreA_fullscreen.classList.add("clicked");
    // }, 500);
    setTimeout(function () {
      message_information_div.style.display = "block";
      notification1.play();
      message_information.innerHTML =
        "<br>Envoyer une Redition au gare B informer l'arrivage de train ";
    }, 200);
    // Disable pedal1 and pedal1_block once pedal1 is clicked
    pedalA.disabled = true;
    pedal2_block.disabled = true;
  } else {
    if (!btn_annonceB_activeOn && pedal2BlockPassed) {
      message_warning_div.style.display = "block";
      message_warning.innerHTML =
        " il Faut fermer <kbd>semaphore</kbd> puis  faire un annonce <kbd>SONNERIE + ANNONCE</kbd>";
    } else if (!pedal2BlockPassed) {
      message_warning_div.style.display = "none";
      message_warning_div.style.display = "block";
      message_warning_div.innerHTML = `clicker d'abord sur pedal de block de la gare A <kbd>B</kbd> 
          `;
    } else if (!btn_annonceB_activeOn) {
      message_warning_div.innerHTML = `il faut faire une annonce informer la gare B  <kbd>Annonce</kbd> 
          `;
    }
    // setTimeout(function () {
    //   message_warning_div.style.display = "none";
    // }, 10000);
  }
};

// screen buttons  && message
const message_warning = document.getElementById("message_warning");
const message_warning_div = document.getElementsByClassName(
  "message_warning_div"
)[0];
const message_information = document.getElementById("message_information");
const message_information_div = document.getElementsByClassName(
  "message_information_div"
)[0];
const re = document.getElementById("re");
const blockCote = document.querySelectorAll(".block-cote");
const btn_fullscreen = document.getElementById("btn_fullscreen");
const screen = document.getElementsByClassName("screen")[0];

// functions
function fullscreen() {
  document.body.classList.toggle("fullscreen");
  if (screen.classList.contains("col-10")) {
    // Remove fullscreen classes
    screen.className = "col-6 screen h-100";

    blockCote.forEach((block) => {
      block.className = "col-3 block-cote h-100 d-flex flex-column ";
      block
        .querySelectorAll("span")
        .forEach((span) => (span.style.display = "block")); // Hide span elements
    });
  } else {
    // Add fullscreen classes
    screen.className = "col-10 screen h-100";
    blockCote.forEach((block) => {
      block.className = "col-1 block-cote h-100 d-flex flex-column";
      block
        .querySelectorAll("span")
        .forEach((span) => (span.style.display = "none")); // Hide span elements
    });
  }
}

function initializeBottons() {
  // Reset state variables
  // cote A
  btn_blockA_activeOn = false;
  btn_annonceA_activeOn = false;
  led_annonceA_activeOn = false;
  btn_reditionA_activeOn = false;
  btn_testA_activeOn = false;
  btn_sonnerieA_activeOn = false;
  led_semaphoreA_activeOn = false;
  btn_semaphoreA_activeOn = false;
  //  cote b
  btn_blockB_activeOn = false;
  btn_annonceB_activeOn = false;
  led_annonceB_activeOn = false;
  btn_reditionB_activeOn = false;
  btn_testB_activeOn = false;
  btn_sonnerieB_activeOn = false;
  led_semaphoreB_activeOn = false;
  btn_semaphoreB_activeOn = false;
  //  reset style
  btn_testA.classList.remove("clicked");
  btn_testB.classList.remove("clicked");
  btn_semaphoreA.classList.remove("clicked");
  btn_semaphoreB.classList.remove("clickedB");
  led_semaphoreA_fullscreen.classList.remove("clicked");
  led_semaphoreA.classList.remove("clicked");
  led_semaphoreB.classList.remove("clicked");
  btn_annonceA.classList.remove("clicked");
  btn_annonceB.classList.remove("clicked");
  btn_blockA.classList.remove("clicked");
  btn_blockB.classList.remove("clicked");
  btn_reditionB.classList.remove("clicked");
  btn_reditionA.classList.remove("clicked");
}

function initializeBordureNormal() {
  div(
    div_sonnerieA,
    div_annonceA,
    div_annonceB,
    div_sonnerieB,
    div_testA,
    div_testB,
    div_semaphoreB,
    div_semaphoreA,
    div_reditionA,
    div_reditionB
  );

  pedalB.className = "block p1-2 border";
  pedalA.className = "block p1-1 border";
  pedal1_block.className = "block b1 border";
  pedal2_block.className = "block b2 border";
}
function initializeAlert() {
  message_information_div.style.display = "none";
  message_warning_div.style.display = "none";
}

function initialize() {
  btn_testA.innerHTML = "";
  btn_testB.innerHTML = "";
  // Reset arivage de  train
  trainArivage = false;
  train1bArivage = false;
  // Reset state variables
  pedal1BlockPassed = false;
  pedalAPassed = false;
  pedalBPassed = false;
  // reset les bottons
  // Reset state variables
  // cote A
  ActionOnFalse(
    btn_blockA_activeOn,
    btn_annonceA_activeOn,
    led_annonceA_activeOn,
    btn_reditionA_activeOn,
    btn_testA_activeOn,
    btn_sonnerieA_activeOn,
    led_semaphoreA_activeOn,
    btn_semaphoreA_activeOn
  );
  //  cote b
  btn_blockB_activeOn = false;
  btn_annonceB_activeOn = false;
  led_annonceB_activeOn = false;
  btn_reditionB_activeOn = false;
  btn_testB_activeOn = false;
  btn_sonnerieB_activeOn = false;
  led_semaphoreB_activeOn = false;
  btn_semaphoreB_activeOn = false;
  //  reset style

  // Remove 'clicked' class from elements
  removeClicked(
    btn_testA,
    btn_semaphoreA,
    led_semaphoreA,
    led_semaphoreA_fullscreen,
    led_semaphoreB,
    led_semaphoreB_fullscreen,
    btn_annonceA,
    led_annonceA,
    led_annonceA_fullscreen,
    btn_annonceB,
    led_annonceB_fullscreen,
    led_annonceB,
    btn_blockA,
    btn_reditionA,
    btn_reditionB
  );

  // Remove 'clickedB' class from elements
  removeClickedB(btn_blockB, btn_semaphoreB);
  removeclicked_active(btn_blockB, btn_blockA, btn_semaphoreB, btn_semaphoreA);
  // Reset train position and signals
  train.style.left = "0px";
  train1b.style.right = "0px";
  train1b.style.top = "34%";
  signal_left_1.src = "assets/images/feu_rouge.png";

  // Re-enable all pedals
  pedal1_block.disabled = true;
  pedal2_block.disabled = true;
  pedalA.disabled = true;
  pedalB.disabled = true;

  // reset alert none
  message_information_div.style.display = "none";
  message_warning_div.style.display = "none";

  // pause audios
  notification1.pause();
  trainSound.pause();
  sonnerie1.pause();
  sonnerie.pause();

  div(
    div_sonnerieA,
    div_annonceA,
    div_annonceB,
    div_sonnerieB,
    div_testA,
    div_testB,
    div_semaphoreB,
    div_semaphoreA,
    div_reditionA,
    div_reditionB
  );
}
btn_fullscreen.onclick = function () {
  fullscreen();
};
re.onclick = function () {
  initialize();
};

//  downoader
function downloadPDF(pdfUrl) {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = pdfUrl.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
document.addEventListener("DOMContentLoaded", function () {
  const tooltips = document.querySelectorAll("[data_tooltip]");
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", function () {
      const tooltipId = this.getAttribute("data-tooltip");
      const tooltipElement = document.getElementById(tooltipId);
      tooltipElement.style.display = "block";
    });
    tooltip.addEventListener("mouseout", function () {
      const tooltipId = this.getAttribute("data-tooltip");
      const tooltipElement = document.getElementById(tooltipId);
      tooltipElement.style.display = "none";
    });
  });
});

//  timeout script
const bm_btn = document.querySelectorAll(".bm_btn");
bm_btn.forEach((button) =>
  button.addEventListener("click", function () {
    notification1.play();
    this.classList.add("active");
    setTimeout(() => {
      this.classList.remove("active");
    }, 6000);
  })
);

const date = new Date();

const days = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const day = days[date.getDay()];
const dayNumb = date.getDate();
const year = date.getFullYear();
const month = months[date.getMonth()];
const dayInfo = document.getElementById("date");
dayInfo.innerHTML = `${day} ${dayNumb} ${month} ${year}`;
// Thémes

// théme 1

const theme1 = () => {
  const bgvideo = document.getElementById("bg-video");
  bgvideo.src = "assets/video/4153409-uhd_3840_2160_25fps.mp4";
  document.body.classList.toggle("theme1");
  document.body.classList.remove("theme2");
};
const theme2 = () => {
  const bgvideo = document.getElementById("bg-video");
  bgvideo.src = "assets/video/bg3.mp4";
  document.body.classList.toggle("theme2");
  document.body.classList.remove("theme1");
};
