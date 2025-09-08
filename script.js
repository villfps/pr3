function checkNumber() {
  let num = document.getElementById("userNumber").value;
  let result = "";

  if (num === "") {
    result = "Please enter a number.";
  } else if (num % 2 === 0) {
    result = num + " is EVEN";
  } else {
    result = num + " is ODD";
  }

  document.getElementById("result").innerText = result;
}
