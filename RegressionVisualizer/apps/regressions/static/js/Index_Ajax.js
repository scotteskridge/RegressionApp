
$(document).ready(function () {

  $('#update_scatter_chart').click(function(event){
    $('#message').html("<h2>Submitting a new random value </h2>");
    $.ajax({
                type:"POST",
                url:"/ajaxRandom",
                data: {
                      'csrfmiddlewaretoken' : $('input[name ="csrfmiddlewaretoken"]').val(),
                      'element_variance' : $('#element_variance').val(),
                       'element_count': $('#element_count').val() // from form
                       },
                success: function(jsonreponse){
                    $('#message').html('<h2>Contact Form Submitted with ' + $('#element_count').val() + ' random values</h2>')

                    drawScatter(jsonreponse["ScatterInput"]);

                }
           });
           return false; //<---- move it here
      });
});
