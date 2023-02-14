function validateForm() {
  let x = document.forms["form"]["name"].value;
  let flag = true;
  // console.log(x);
  if (x == "") {
    // alert("Name must be filled out");
    document.getElementById("name_validation").style.display = "block";
    flag = false;
  } else {
    console.log("JHI");
    document.getElementById("name_validation").style.display = "none";
  }
  let gender = document.forms["form"]["gender"].value;
  // console.log(gender);
  if (gender === "choose") {
    document.getElementById("gender_validation").style.display = "block";
    flag = false;
  } else {
    document.getElementById("gender_validation").style.display = "none";
  }

  let services = document.forms["form"]["services"].value;
  // console.log(services + "service");
  if (services === "services") {
    document.getElementById("services_validation").style.display = "block";
    flag = false;
  } else {
    document.getElementById("services_validation").style.display = "none";
  }
  let date = document.forms["form"]["date"].value;
  // console.log(date);
  if (date === "") {
    document.getElementById("date_validation").style.display = "block";
    flag = false;
  } else {
    document.getElementById("date_validation").style.display = "none";
  }

  let phone = document.forms["form"]["phone"].value;
  // console.log(phone);
  if (phone.length != 10) {
    document.getElementById("phone_validation").style.display = "block";
    flag = false;
  } else {
    document.getElementById("phone_validation").style.display = "none";
  }

  return flag;
}
