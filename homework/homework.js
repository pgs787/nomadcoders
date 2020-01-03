function sayHi() {
  alert("안녕하세요");
}

function currentTime() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth();
  const date = currentTime.getDate();
  let day = currentTime.getDay();
  if (day === 0) {
    day = "일요일";
  } else if (day === 1) {
    day = "월요일";
  } else if (day === 2) {
    day = "화요일";
  } else if (day === 3) {
    day = "수요일";
  } else if (day === 4) {
    day = "목요일";
  } else if (day === 5) {
    day = "금요일";
  } else if (day === 6) {
    day = "토요일";
  }
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  alert(`현재 날짜 : ${year}/${month + 1}/${date} ${day}
현재 시각 : ${hours}:${minutes}:${seconds}`);
}

function checkFile() {
  var parent = document.querySelector(".check_btn");
  var check = document.querySelector(".check").value;
  var p = document.createElement("p");

  if (check.indexOf("hwp") !== -1) {
    parent.after(p);
    p.innerText = "hwp 파일이 맞습니다!";
  } else {
    parent.after(p);
    p.innerText = "hwp 파일이 아닙니다!";
  }
}
function checkFileEnter() {
  if (event.keyCode === 13) {
    checkFile();
  }
}

function checkiden() {
  var birsday = prompt("주민번호를 입력하세요", "ex)940521-1XXXXXX");
  var year = birsday.slice(0, 2);
  var month = birsday.slice(2, 4);
  var day = birsday.slice(4, 6);
  alert(`당신의 생년월일은 ${year}년 ${month}월 ${day}일 입니다`);
}

function checkgrade() {
  const grade = document.querySelector(".grade").value;
  if (grade >= 90) {
    alert("당신의 학점은 A입니다");
  } else if (grade >= 80) {
    alert("당신의 학점은 B입니다");
  } else if (grade >= 70) {
    alert("당신의 학점은 C입니다");
  } else if (grade >= 60) {
    alert("당신의 학점은 D입니다");
  } else {
    alert("당신의 학점은 F입니다");
  }
}

function checkgradeEnter() {
  if (event.keyCode === 13) {
    checkgrade();
  }
}

function numberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}

function checkphone(e) {
  const text = e.target.value;
  if (text.indexOf("010") !== -1) {
    alert("010입니다");
  } else if (text.indexOf("011") !== -1) {
    alert("011입니다");
  } else if (text.indexOf("016") !== -1) {
    alert("016입니다");
  } else if (text.indexOf("017") !== -1) {
    alert("017입니다");
  } else if (text.indexOf("018") !== -1) {
    alert("018입니다");
  } else if (text.indexOf("019") !== -1) {
    alert("019입니다");
  } else {
    alert("해당되는 국번이 없습니다");
  }
}

function checkphoneEnter() {
  if (event.keyCode === 13) {
    checkphone(event);
  }
}
function phonenumberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}

function multipleEnter() {
  if (event.keyCode === 13) {
    multiple(event);
  }
}
function multiple(event) {
  var number = event.target.value;
  var ex = number.split(",");
  var result = ex[0] * ex[1];
  var p = document.createElement("p");
  var multi = document.querySelector(".multi");
  multi.after(p);
  p.innerText = result;
}
function check() {
  event.preventDefault();
  var p = document.createElement("p");
  var form1 = document.querySelector(".form1");
  var sel_hobby = "";
  var hobby_type = document.form1.hobby;
  console.log(hobby_type);

  for (var i = 0; i < hobby_type.length; i++) {
    if (hobby_type[i].checked == true) {
      sel_hobby = sel_hobby + hobby_type[i].value + "\n";
      form1.after(p);
      p.innerText = sel_hobby;
    } else {
      form1.after(p);
      p.innerText = "선택사항이 없습니다";
    }
  }
}

function jsonDate() {
  var h1 = document.querySelector("h1");
  var h2 = document.querySelector("h2");
  var key = [];
  var value = [];
  var products = [
    { name: "mp3", price: "1000" },
    { name: "pc", price: "2000" },
    { name: "smart phone", price: "3000" }
  ];

  for (name in products) {
    key.push(products[name].name);
    value.push(products[name].price);
  }
  h1.innerText = key;
  h2.innerText = value;
}

jsonDate();
