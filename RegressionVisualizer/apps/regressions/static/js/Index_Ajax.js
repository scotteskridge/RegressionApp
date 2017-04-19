function packData(formID){
  //make a new variable to pass back
  formData = {};
  //for each element in formID add dynamic key values to the formData
    //formData['my forms name'] = $('input[name ="my forms name"]').val();
  //dictionary.add({ string(formID[element] : formID[element])})
  return formData;

}

function submitForm(form){
  var url = form.attr("action");
  var formData = $(form).serializeArray();
  $.post(url, formData).done(function (data) {
      alert(data);
  });
}

// make 3 seperate display charts
// have 2 3 or 4 input fields in each charts
//make a function that will grab all and/or any of the input fields and package that into a return data
//make a function that will return data for any of the submit buttons
//should have 6 to 9 buttons but only 3 or 4 functions to handle all of the varied input


$(document).ready(function () {



  $('#update_scatter_chart').click(function(event){
    $('#message').html("<h2>Submitting a new random value </h2>");
    formData = {};
    formData['csrfmiddlewaretoken'] = $('input[name ="csrfmiddlewaretoken"]').val();
    formData['element_variance'] = $('#element_variance').val();
    formData['element_total_count'] = $('#element_total_count').val() ;
    formData['element_selection_count'] = $('#element_selection_count').val() ;
    $.ajax({
                type:"POST",
                url:"/ajaxRandom",
                data: formData,
                success: function(jsonreponse){
                    $('#message').html('<h2>Contact Form Submitted with ' + $('#element_selection_count').val() + ' random values out of ' + $('#element_total_count').val() + ' possible values </h2>')

                    drawScatter(jsonreponse["ScatterInput"]);
                    drawComboChart(jsonreponse["ScatterInput"]);

                }
           });
           return false; //<---- move it here
      });
});
