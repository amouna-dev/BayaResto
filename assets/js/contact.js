$(document).ready(function() {

    function emailSend(){
        var params = {
            "subject": $("#subject").val(),
            "name": $("#name").val(),
            "email": $("#email").val(),
            "message": $("#message").val()
        }
        const serviceID = "service_varynsb";
        const templateID = "template_jxfkyk1";

        if($("#name").val()=='')  $("#contact_form .name_validate").show(); else $("#contact_form .name_validate").hide();
        if($("#email").val()=='')  $("#contact_form .email_validate").show(); else $("#contact_form .email_validate").hide();
        if($("#subject").val()=='') $("#contact_form .subject_validate").show(); else $("#contact_form .subject_validate").hide();
        if($("#message").val()=='') $("#contact_form .message_validate").show(); else $("#contact_form .message_validate").hide();
        
        if($("#name").val()!='' && $("#email").val()!='' && $("#subject").val()!='' && $("#message").val()!='') {
            emailjs.send(serviceID, templateID, params)
            .then(
                (response) => {
                    $("#contact_form").trigger("reset");
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Your message is sent successfully!!")
                },
                (error) => {
                console.log('FAILED...', error);
                
                },
            );
        }
    }

    
    
    
    $('#sendMail').on('click', function(event) {
        event.preventDefault();
        emailSend();
        
    })
});