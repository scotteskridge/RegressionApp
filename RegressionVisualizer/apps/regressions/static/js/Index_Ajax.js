function packData(formID){
  //make a new variable to pass back
  formData = {};
  //for each input_field in formID add dynamic key values to the formData
    //formData['my forms name'] = $('input[name ="my forms name"]').val();
  //dictionary.add({ string(formID[input_field] : formID[input_field])})
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
  google.charts.load('current', {'packages':['corechart']});
  formData = {};

  $.ajax({
    type:"GET",
    url:"/startPage",
    data: formData,
    success: function(jsonreponse){
      google.charts.setOnLoadCallback(
          function() { // Anonymous function that calls drawChart1 and drawChart2
             drawScatter(jsonreponse["LineInput"]);
             drawComboChart(jsonreponse["LineInput"]);
             drawCurveChart(jsonreponse["CurveChartInput"]);

             drawHistogram(jsonreponse["LineInput"]);
             drawMultiLineChart();

            });
    }
   });

$('#update_scatter_chart').click(function(event){
  $('#message').html("<h2>Submitting a new random value </h2>");
  formData = {};
  formData['csrfmiddlewaretoken'] = $('input[name ="csrfmiddlewaretoken"]').val();
  formData['scatter_variance'] = $('#scatter_variance').val();
  formData['scatter_total_count'] = $('#scatter_total_count').val() ;
  formData['scatter_selection_count'] = $('#scatter_selection_count').val() ;
  $.ajax({
              type:"POST",
              url:"/ajaxRandomScatterChart",
              data: formData,
              success: function(jsonreponse){
                  $('#message').html('<h2>Contact Form Submitted with ' + $('#scatter_selection_count').val() + ' random values out of ' + $('#scatter_total_count').val() + ' possible values </h2>')

                  drawScatter(jsonreponse["ScatterInput"]);
                  // drawComboChart(jsonreponse["ScatterInput"]);

              }
         });
         return false; //<---- move it here
});

$('#update_combo_chart').click(function(event){
  $('#message').html("<h2>Submitting a new random value </h2>");
  formData = {};
  formData['csrfmiddlewaretoken'] = $('input[name ="csrfmiddlewaretoken"]').val();
  formData['combo_variance'] = $('#combo_variance').val();
  formData['combo_total_count'] = $('#combo_total_count').val() ;
  formData['combo_selection_count'] = $('#combo_selection_count').val() ;
  $.ajax({
              type:"POST",
              url:"/ajaxRandomComboChart",
              data: formData,
              success: function(jsonreponse){
                  $('#message').html('<h2>Contact Form Submitted with ' + $('#combo_selection_count').val() + ' random values out of ' + $('#combo_total_count').val() + ' possible values </h2>')

                  // drawScatter(jsonreponse["ScatterInput"]);
                  drawComboChart(jsonreponse["ComboInput"]);

              }
         });
         return false; //<---- move it here
    });

$('#update_histogram_chart').click(function(event){
  $('#message').html("<h2>Submitting a new random value </h2>");
  formData = {};
  formData['csrfmiddlewaretoken'] = $('input[name ="csrfmiddlewaretoken"]').val();
  formData['histogram_variance'] = $('#histogram_variance').val();
  formData['histogram_total_count'] = $('#histogram_total_count').val() ;
  formData['histogram_selection_count'] = $('#histogram_selection_count').val() ;
  $.ajax({
              type:"POST",
              url:"/ajaxRandomHistogramChart",
              data: formData,
              success: function(jsonreponse){
                  $('#message').html('<h2>Contact Form Submitted with ' + $('#histogram_selection_count').val() + ' random values out of ' + $('#histogram_total_count').val() + ' possible values </h2>')

                  // drawScatter(jsonreponse["ScatterInput"]);
                  drawHistogram(jsonreponse["HistogramInput"]);

              }
         });
         return false; //<---- move it here
    });

$('#update_curve_chart').click(function(event){
  $('#message').html("<h2>Submitting a new random value </h2>");
  formData = {};
  formData['csrfmiddlewaretoken'] = $('input[name ="csrfmiddlewaretoken"]').val();
  formData['curve_variance'] = $('#curve_variance').val();
  formData['curve_total_count'] = $('#curve_total_count').val() ;
  formData['curve_selection_count'] = $('#curve_selection_count').val() ;
  $.ajax({
              type:"POST",
              url:"/ajaxRandomHistogramChart",
              data: formData,
              success: function(jsonreponse){
                  $('#message').html('<h2>Contact Form Submitted with ' + $('#curve_selection_count').val() + ' random values out of ' + $('#curve_total_count').val() + ' possible values </h2>')

                  // drawScatter(jsonreponse["ScatterInput"]);
                  drawCurveChart(jsonreponse["CurveInput"]);

              }
         });
         return false; //<---- move it here
    });


});
