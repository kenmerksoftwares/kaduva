
document.getElementById("btn_id").onclick = function (e) {
    var c_name = document.getElementById("name_id").value;
    var number = document.getElementById("ph_no").value;
    var c_message = document.getElementById("message_id").value;
    var c_email = document.getElementById("e-mail_id").value;
    if (c_name === "" || number === "" || c_message === "" || c_email === "") {
    alert("Fill the details")
    } else {
      e.preventDefault();
  
      send_contact_mail(c_email, c_name, number, c_message);
    }
  };
  
  function send_contact_mail(c_email, c_name, number, c_message) {
  
    var templateParams = {
      from_name: c_name,
      email: c_email,
      message: c_message,
      number: number,
    };
  
    emailjs.send("service_xb9ujpn", "template_wxhztdl", templateParams).then(
      function (response) {
        document.getElementById("name_id").value = "";
        document.getElementById("ph_no").value = "";
        document.getElementById("message_id").value = "";
        document.getElementById("e-mail_id").value = "";
        window.alert("THANK YOU FOR YOUR VALUABLE MESSAGE");
  
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }