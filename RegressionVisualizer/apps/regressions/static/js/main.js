

$(document).ready(function () {
  $('#update_scatter_chart').click(function(){
    alert(" Clicked on update_scatter_chart ")
    scatterInput = submitForm($("#random_count"));

    drawScatter(scatterInput);
  });
});
