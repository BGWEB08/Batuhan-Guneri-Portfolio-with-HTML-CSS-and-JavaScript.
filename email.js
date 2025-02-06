function emailSend() {
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    var messageBody =
      "Full Name" + fullName +
      "<br/> Email" +
      email +
      "<br/> Subject" +
      subject +
      "<br/> Message" +
      message;
  
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "...",
      Password: "...",
      To: "...",
      From: "from",
      Subject: "This is the subject",
      Body: messageBody,
    }).then((message) => {
      if (message === "OK") {
          swal("Successful", "You clicked the button!", "success");
      } else {
          swal("Error", "Out of service. Please send an email!", "error");
      }
  });
  
  }