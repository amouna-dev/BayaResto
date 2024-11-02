$(document).ready(function() {

    function reserveTable(){
        var params = {
            "name_client": $("#name_client").val(),
            "email_client": $("#email_client").val(),
            "phone": $("#phone").val(),
            "date": $("#date").val(),
            "time": $("#time").val(),
            "people": $("#people").val(),
            "message_client": $("#message_client").val()
        }
        const serviceID = "service_varynsb";
        const templateID = "template_mi4459g";

        if($("#name_client").val()=='')  $("#reservation_form .name_validate").show(); else $("#reservation_form .name_validate").hide();
        if($("#email_client").val()=='')  $("#reservation_form .email_validate").show(); else $("#reservation_form .email_validate").hide();
        if($("#phone").val()=='') $("#reservation_form .phone_validate").show(); else $("#reservation_form .phone_validate").hide();
        if($("#date").val()=='') $("#reservation_form .date_validate").show(); else $("#reservation_form .date_validate").hide();
        if($("#time").val()=='') $("#reservation_form .time").addClass('time_error'); else $("#reservation_form .time").removeClass("time_error");
        if($("#people").val()=='') $("#reservation_form .people_validate").show(); else $("#reservation_form .people_validate").hide();
        if($("#message_client").val()=='') $("#reservation_form .message_validate").show(); else $("#reservation_form .message_validate").hide();
        
        if($("#name_client").val()!='' && $("#email_client").val()!='' && $("#phone").val()!='' && $("#date").val()!='' && $("#time").val()!='' && $("#people").val()!='') {
            emailjs.send(serviceID, templateID, params)
            .then(
                (response) => {
                    $("#reservation_form").trigger("reset");
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Reservation has been successfully booked! We will contact you for confirmation !! \n Thank you for choosing our restaurant. You will never regret it !")
                },
                (error) => {
                console.log('FAILED...', error);
                
                },
            );
        }
    }

    
    
    
    $('#bookTable').on('click', function(event) {
        event.preventDefault();
        reserveTable();
        
    })
});