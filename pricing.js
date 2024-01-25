const plus = document.querySelector(".section3-contain__imgbox-img");
const minus = document.querySelector(".section3-contain__imgbox-img-minus");
const text = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");
const text6 = document.querySelector(".text6");
const imgbox = document.querySelector('.section3-contain__imgbox');
const imgbox1 = document.querySelector('.js-imgbox1');
const imgbox2 = document.querySelector('.js-imgbox2');
const imgbox3 = document.querySelector('.js-imgbox3');
const imgbox4 = document.querySelector('.js-imgbox4');
const imgbox5 = document.querySelector('.js-imgbox5');
const plus2 = document.querySelector(".js-plus1");
const plus3 = document.querySelector(".js-plus2");
const plus4 = document.querySelector(".js-plus3");
const plus5 = document.querySelector(".js-plus4");
const plus6 = document.querySelector(".js-plus5");
const minus2 = document.querySelector(".js-minus1");
const minus3 = document.querySelector(".js-minus2");
const minus4 = document.querySelector(".js-minus3");
const minus5 = document.querySelector(".js-minus4");
const minus6 = document.querySelector(".js-minus5");


minus.style.display = "none";
text.style.display = "none";
text2.style.display = "none";
text3.style.display = "none";
text4.style.display = "none";
text5.style.display = "none";
text6.style.display = "none";

const elements = [minus, text, plus,];
const elements2 = [minus2, text2, plus2,];
const elements3 = [minus3, text3, plus3,];
const elements4 = [minus4, text4, plus4,];
const elements5 = [minus5, text5, plus5,];
const elements6 = [minus6, text6, plus6,];

function showElements() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
  plus.style.display = "none";
  minus.style.display = "block";
}

function changeColorToBlue() {
  imgbox.style.backgroundColor = 'blue';
  imgbox.style.padding = "9px";
  imgbox.style.borderRadius = "5px";
}

function hideElements() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  plus.style.display = "block";
  imgbox.style.backgroundColor = "none";
}

function changeColorToWhite() {
  imgbox.style.backgroundColor = '#F7F7FB';
  imgbox.style.padding = "9px";
  imgbox.style.borderRadius = "5px";
}

plus.addEventListener("click", () => {
  showElements();
  changeColorToBlue();
});


minus.addEventListener("click", () => {
  hideElements();
  changeColorToWhite();
});

function showElements2() {
    for (let i = 0; i < elements2.length; i++) {
      elements2[i].style.display = "block";
    }
    plus2.style.display = "none";
    minus2.style.display = "block";
  }
  
  function changeColorToBlue2() {
    imgbox1.style.backgroundColor = 'blue';
    imgbox1.style.padding = "9px";
    imgbox1.style.borderRadius = "5px";
  }
  
  function hideElements2() {
    for (let i = 0; i < elements2.length; i++) {
      elements2[i].style.display = "none";
    }
    plus2.style.display = "block";
    imgbox1.style.backgroundColor = "none";
  }
  
  function changeColorToWhite2() {
    imgbox1.style.backgroundColor = '#F7F7FB';
    imgbox1.style.padding = "9px";
    imgbox1.style.borderRadius = "5px";
  }
  
  plus2.addEventListener("click", () => {
    showElements2();
    changeColorToBlue2();
  });
  
  
  minus2.addEventListener("click", () => {
    hideElements2();
    changeColorToWhite2();
  });
  
  
  
  function showElements3() {
    for (let i = 0; i < elements3.length; i++) {
      elements3[i].style.display = "block";
    }
    plus3.style.display = "none";
    minus3.style.display = "block";
  }
  
  function changeColorToBlue3() {
    imgbox2.style.backgroundColor = 'blue';
    imgbox2.style.padding = "9px";
    imgbox2.style.borderRadius = "5px";
  }
  
  function hideElements3() {
    for (let i = 0; i < elements3.length; i++) {
      elements3[i].style.display = "none";
    }
    plus3.style.display = "block";
    imgbox2.style.backgroundColor = "none";
  }
  
  function changeColorToWhite3() {
    imgbox2.style.backgroundColor = '#F7F7FB';
    imgbox2.style.padding = "9px";
    imgbox2.style.borderRadius = "5px";
  }
  
  plus3.addEventListener("click", () => {
    showElements3();
    changeColorToBlue3();
  });
  
  
  minus3.addEventListener("click", () => {
    hideElements3();
    changeColorToWhite3();
  });
  
  
  
  
  
  function showElements4() {
    for (let i = 0; i < elements4.length; i++) {
      elements4[i].style.display = "block";
    }
    plus4.style.display = "none";
    minus4.style.display = "block";
  }
  
  function changeColorToBlue4() {
    imgbox3.style.backgroundColor = 'blue';
    imgbox3.style.padding = "9px";
    imgbox3.style.borderRadius = "5px";
  }
  
  function hideElements4() {
    for (let i = 0; i < elements4.length; i++) {
      elements4[i].style.display = "none";
    }
    plus4.style.display = "block";
    imgbox3.style.backgroundColor = "none";
  }
  
  function changeColorToWhite4() {
    imgbox3.style.backgroundColor = '#F7F7FB';
    imgbox3.style.padding = "9px";
    imgbox3.style.borderRadius = "5px";
  }
  
  plus4.addEventListener("click", () => {
    showElements4();
    changeColorToBlue4();
  });
  
  
  minus4.addEventListener("click", () => {
    hideElements4();
    changeColorToWhite4();
  });
  
  
  
  
  function showElements5() {
    for (let i = 0; i < elements5.length; i++) {
      elements5[i].style.display = "block";
    }
    plus5.style.display = "none";
    minus5.style.display = "block";
  }
  
  function changeColorToBlue5() {
    imgbox4.style.backgroundColor = 'blue';
    imgbox4.style.padding = "9px";
    imgbox4.style.borderRadius = "5px";
  }
  
  function hideElements5() {
    for (let i = 0; i < elements5.length; i++) {
      elements5[i].style.display = "none";
    }
    plus5.style.display = "block";
    imgbox4.style.backgroundColor = "none";
  }
  
  function changeColorToWhite5() {
    imgbox4.style.backgroundColor = '#F7F7FB';
    imgbox4.style.padding = "9px";
    imgbox4.style.borderRadius = "5px";
  }
  
  plus5.addEventListener("click", () => {
    showElements5();
    changeColorToBlue5();
  });
  
  
  minus5.addEventListener("click", () => {
    hideElements5();
    changeColorToWhite5();
  });
  
  
  
  
  function showElements6() {
    for (let i = 0; i < elements6.length; i++) {
      elements6[i].style.display = "block";
    }
    plus6.style.display = "none";
    minus6.style.display = "block";
  }
  
  function changeColorToBlue6() {
    imgbox5.style.backgroundColor = 'blue';
    imgbox5.style.padding = "9px";
    imgbox5.style.borderRadius = "5px";
  }
  
  function hideElements6() {
    for (let i = 0; i < elements6.length; i++) {
      elements6[i].style.display = "none";
    }
    plus6.style.display = "block";
    imgbox5.style.backgroundColor = "none";
  }
  
  function changeColorToWhite6() {
    imgbox5.style.backgroundColor = '#F7F7FB';
    imgbox5.style.padding = "9px";
    imgbox5.style.borderRadius = "5px";
  }
  
  plus6.addEventListener("click", () => {
    showElements6();
    changeColorToBlue6();
  });
  
  
  minus6.addEventListener("click", () => {
    hideElements6();
    changeColorToWhite6();
  });
  
