function isSelected(dropdown) {
  if (dropdown.selectedIndex == 0) {
    dropdown.className = "err_lb_border";
    return false;
  } else {
    dropdown.className = "listbox";
    return true;
  }
}
function validate_dropdown2() {
  var year = document.getElementById("birthday_year");
  var month = document.getElementById("birthday_month");
  var day = document.getElementById("birthday_day");

  var error = 0;

  if (!isSelected(year)) {
    error++;
  }
  if (!isSelected(month)) {
    error++;
  }
  if (!isSelected(day)) {
    error++;
  }

  if (
    parseInt(year[year.selectedIndex].value) % 4 == 0 &&
    parseInt(month[month.selectedIndex].value) == 2 &&
    parseInt(day[day.selectedIndex].value) > 29
  ) {
    day.className = "err_lb_border";
    error++;
  } else if (
    parseInt(month[month.selectedIndex].value) == 2 &&
    parseInt(day[day.selectedIndex].value) > 28
  ) {
    day.className = "err_lb_border";
    error++;
  }
  if (error > 0) {
    alert("Please select your birthday correctly");
    return false;
  } else {
    return true;
  }
}
function isName() {
  var regName = /^[a-zA-Z]+$/;
  var name = document.getElementById("name").value;
  if (!regName.test(name)) {
    alert("Please enter valid login name");
    document.getElementById("name").focus();
    return false;
  }
}
function isPass() {
  var pw = document.getElementById("pswd").value;
  //check empty password field
  if (pw == "") {
    document.getElementById("message").innerHTML =
      "Password field should not be empty!";
    return false;
  }

  //minimum password length validation
  if (pw.length < 6) {
    document.getElementById("message").innerHTML =
      "**Password length must be atleast 6 characters";
    return false;
  }
  const pswrd_1 = document.querySelector("#pswrd_1");
  const pswrd_2 = document.querySelector("#pswrd_2");
  btn.onclick = function () {
    if (pswrd_1.value != pswrd_2.value) {
      errorText.style.display = "block";
      errorText.classList.remove("matched");
      errorText.textContent = "Error! Confirm Password Not Match";
      return false;
    } else {
      errorText.style.display = "block";
      errorText.classList.add("matched");
      errorText.textContent = "Nice! Confirm Password Matched";
      return false;
    }
  };
}
function isFullName() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  if (fname == "") {
    document.getElementById("fname_message").innerHTML =
      "Password field should not be empty!";
    return false;
  }
  if (lname == "") {
    document.getElementById("lname_message").innerHTML =
      "Password field should not be empty!";
    return false;
  }
}
function isCountry() {
  if (document.getElementById("country").selectedIndex == 0) {
    document.getElementById("country_message").innerHTML =
      "please select country!";
    return false;
  }
  return true;
}
function isHintQueAns() {
  if (document.getElementById("hint_que").selectedIndex == 0) {
    alert("Please select que");
    return false;
  }
  if (
    document.getElementById("hint_ans").options[
      document.getElementById("hint_ans").selectedIndex
    ].value == ""
  ) {
    alert("Please select hint answer");
    return false;
  }
  return true;
}
function isCity() {
  if (document.getElementById("city").selectedIndex == 0) {
    document.getElementById("city").innerHTML = "please select city!";
    return false;
  }
  return true;
}
