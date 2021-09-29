function isTriangle() {
  debugger;
  var angle1 = document.getElementById("angle1").value;
  var angle2 = document.getElementById("angle2").value;
  var angle3 = document.getElementById("angle3").value;
  if (angle1 == "" || angle2 == "" || angle3 == "") {
    alert("Please enter all the values to proceed..");
    return false;
  }
  var sum = parseFloat(angle1) + parseFloat(angle2) + parseFloat(angle3);
  if (sum == 180) {
    document.getElementById("resultId").innerText =
      "Yes you can make a triangle out of it.";
  } else {
    document.getElementById("resultId").innerText =
      "No try again woth some other input";
  }
}

function calculateHypotenuse() {
  var baseValue = document.getElementById("baseId").value;
  var heightValue = document.getElementById("heightId").value;
  if (baseValue == "" || heightValue == "") {
    alert("Please enter all the values to proceed..");
    return false;
  }
  var hypotenuse = Math.sqrt(baseValue * baseValue + heightValue * heightValue);
  document.getElementById("resultId").innerText =
    "Hypotenuse value : " + hypotenuse;
}

function calculateArea() {
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;
  var semiperimeter = parseInt(
    (parseInt(side1) + parseInt(side2) + parseInt(side3)) / 2
  );
  if (side1 == "" || side2 == "" || side3 == "") {
    alert("Please enter all the values to proceed..");
    return false;
  }
  var area = Math.sqrt(
    semiperimeter *
      (semiperimeter - parseInt(side1)) *
      (semiperimeter - parseInt(side2)) *
      (semiperimeter - parseInt(side3))
  );
  document.getElementById("resultId").innerText = "Area value : " + area;
}

function calculateScore() {
  debugger;
  const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "a + b + c",
    "45°",
  ];
  var fromQuiz = document.querySelector(".formQuiz");
  const formResults = new FormData(fromQuiz);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value == correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  document.getElementById("resultId").innerText = "The score is " + score;
}
