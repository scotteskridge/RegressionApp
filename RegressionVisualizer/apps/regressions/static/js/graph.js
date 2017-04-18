

function drawScatter(scatterInput) {
  var scatterData = new google.visualization.DataTable();
    scatterData.addColumn('number', 'Date');
    scatterData.addColumn('number', 'price');
    scatterData.addRows(scatterInput);

  var scatter_options = {
    title: 'Date vs. Price comparison',

    // hAxis: {title: 'Date', minValue: 0, maxValue: 15},
    // vAxis: {title: 'Price', minValue: 0, maxValue: 15},
    legend: { position: 'bottom' }
  };

  var scatter_chart = new google.visualization.ScatterChart(document.getElementById('scatter_div'));

  scatter_chart.draw(scatterData, scatter_options);
}

function drawCurveChart() {

      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'Revenue'],
        ['2004',  1000,      400,      600],
        ['2005',  1170,      460,      710],
        ['2006',  660,       1400,      -740],
        ['2007',  1030,      540,      490]
      ]);


      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }


function submitForm(form){
  var url = form.attr("action");
  var formData = $(form).serializeArray();
  $.post(url, formData).done(function (data) {
      alert(data);
  });
}
