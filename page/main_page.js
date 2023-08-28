const OrangeEvent = document.getElementById("orange");
const Orange2 = document.getElementById("orange_2");
const PurpleEvent = document.getElementById("purple");
const Purple2 = document.getElementById("purple_2");
const OneEvent = document.getElementById("one");

/*병원검색*/
const OrangeMouseOver = () => {
  document.getElementById("orange").style.cursor = "pointer";
  Orange2_MouseOver();
  OrangeBack();
  OneMouseOver();
};

const OrangeMouseOut = () => {
  document.getElementById("orange_2").style.display = "none";
  document.getElementById("orange_1").style.display = "";
  document.getElementById("p1").style.display = "";
  document.getElementById("mini_box1").style.display = "";
  document.getElementById("mini_box2").style.display = "";
  document.getElementById("mini_box3").style.display = "none";
  document.getElementById("mini_box4").style.display = "none";
  OrangeBackTwo();
  OneMouseOut();
};

function Orange2_MouseOver() {
  document.getElementById("orange_2").style.display = "";
  document.getElementById("orange_1").style.display = "none";
  document.getElementById("p1").style.display = "none";
  document.getElementById("mini_box1").style.display = "none";
  document.getElementById("mini_box2").style.display = "none";
  document.getElementById("mini_box3").style.display = "";
  document.getElementById("mini_box4").style.display = "";
}

function OrangeBack() {
  const Orangebg = document.getElementById("orange");
  Orangebg.style.setProperty(
    "background",
    "rgba(0, 0, 0, 0) url(../assets/images/hospital.jpg)"
  );
}

function OrangeBackTwo() {
  const OrangebgTwo = document.getElementById("orange");
  OrangebgTwo.style.setProperty(
    "background",
    "rgba(0, 0, 0, 0.85) url(../assets/images/hospital.jpg)"
  );
}

function OrangeClick() {
  window.location = "https://dbking.co.kr/hospitals/hospital_list/";
}

/*개원검색*/
const PurpleMouseOver = () => {
  document.getElementById("purple").style.cursor = "pointer";
  Purple2_MouseOver();
  PurpleBack();
  OneMouseOver();
};

const PurpleMouseOut = () => {
  document.getElementById("purple_1").style.display = "";
  document.getElementById("purple_2").style.display = "none";
  document.getElementById("p2").style.display = "";
  document.getElementById("mini_box5").style.display = "";
  document.getElementById("mini_box6").style.display = "none";
  PurpleBackTwo();
  OneMouseOut();
};

function Purple2_MouseOver() {
  document.getElementById("purple_2").style.display = "";
  document.getElementById("purple_1").style.display = "none";
  document.getElementById("p2").style.display = "none";
  document.getElementById("mini_box5").style.display = "none";
  document.getElementById("mini_box6").style.display = "";
}

function PurpleBack() {
  const Purplebg = document.getElementById("purple");
  Purplebg.style.setProperty(
    "background",
    "rgba(0, 0, 0, 0) url(../assets/images/gewon3.jpg)"
  );
}

function PurpleBackTwo() {
  const PurplebgTwo = document.getElementById("purple");
  PurplebgTwo.style.setProperty(
    "background",
    "rgba(0, 0, 0, 0.85) url(../assets/images/gewon3.jpg)"
  );
}

function PurpleClick() {
  window.location = "https://dbking.co.kr/hospitals/open_hospital_list/";
}

const OneMouseOver = () => {
  document.getElementById("one").style.backgroundColor = "white";
  document.getElementById("one").style.color = "black";
};

const OneMouseOut = () => {
  document.getElementById("one").style.backgroundColor = "black";
  document.getElementById("one").style.color = "white";
};

/*const OneMouseDefalut = () => {
  document.getElementById("one").style.backgroundColor = "black";
  document.getElementById("one").style.color = "white";
};*/

OrangeEvent.addEventListener("click", OrangeClick);
OrangeEvent.addEventListener("mouseover", OrangeMouseOver);
OrangeEvent.addEventListener("mouseout", OrangeMouseOut);
PurpleEvent.addEventListener("click", PurpleClick);
PurpleEvent.addEventListener("mouseover", PurpleMouseOver);
PurpleEvent.addEventListener("mouseout", PurpleMouseOut);
OneEvent.addEventListener("mouseover", OneMouseOver);
OneEvent.addEventListener("mouseout", OneMouseOut);
