var STATE = true;
// 연산자를 누르면 false 로 바뀌고 다음줄로 넘어감

function keypress(e) {
  if (STATE == true && e !== "+" && e !== "-" && e !== "*" && e !== "/" && e !== "=" ) {
    var input = document.getElementById("input1");
    if (input.value == "") {
      input.value = e;
    } else {
      input.value += e;
    }
  } else if (STATE == false && e !== "+" && e !== "-" && e !== "*" && e !== "/" && e !== "=") {
    var input = document.getElementById("input2");
    if (input.value == "") {
      input.value = e;
    } else {
      input.value += e;
    }
  }
  calcpress(e);
}

function calcpress(calc_operator) {
  if (calc_operator == "+" ||calc_operator == "-" ||calc_operator == "*" ||calc_operator == "/") {
    document.getElementById("calc-h1").innerHTML = calc_operator;
    STATE = false;
  } else if (calc_operator == "C") {
    document.getElementById("calc-h1").innerHTML = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result-h1").innerHTML = "";
    STATE = true;
  } else if (calc_operator == "=") {
    document.getElementById("result-h1").innerHTML = eval(document.getElementById("input1").value + document.getElementById("calc-h1").innerHTML + document.getElementById("input2").value);
  }
  // 연산자가 눌러졌을때 state를 flase로 만든다
  // 연산자 누르면 연산자 불러와서 h1에 뿌려줌
}

console.log("calculator opned!");
