function packData(formID){
  //make a new variable to pass back
  formData = {};
  //for each element in formID add dynamic key values to the formData
    //formData['my forms name'] = $('input[name ="my forms name"]').val();
  //dictionary.add({ string(formID[element] : formID[element])})
  return formData;

}


$(document).ready(function () {

  $('#update_scatter_chart').click(function(event){
    $('#message').html("<h2>Submitting a new random value </h2>");
    formData = {};
    formData['csrfmiddlewaretoken'] = $('input[name ="csrfmiddlewaretoken"]').val();
    formData['element_variance'] = $('#element_variance').val();
    formData['element_count'] = $('#element_count').val() ;
    $.ajax({
                type:"POST",
                url:"/ajaxRandom",
                data: formData,
                success: function(jsonreponse){
                    $('#message').html('<h2>Contact Form Submitted with ' + $('#element_count').val() + ' random values</h2>')

                    drawScatter(jsonreponse["ScatterInput"]);

                }
           });
           return false; //<---- move it here
      });
});
