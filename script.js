function getFormvalue(event) {
  event.preventDefault(); // Stop the form from submitting

  const fname = document.forms[0].fname.value.trim();
  const lname = document.forms[0].lname.value.trim();

  const fullName = fname + " " + lname;

  if (fname || lname) {
    alert(fullName);
  } else {
    alert("Please enter your name.");
  }
}
