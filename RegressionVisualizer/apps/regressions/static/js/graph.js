function setKeytoString(list_of_lists){
    KeysAsStrings = []
    KeysAsStrings.push(['Name' , 'Value']);
    for (var i = 0; i < list_of_lists.length; i ++ ){
      KeysAsStrings.push([(list_of_lists[i][0]).toString(), list_of_lists[i][1]]);
    }
    return KeysAsStrings
}



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






function drawComboChart(scatterInput) {
    // Some raw data (not necessarily accurate)
    var data = new google.visualization.DataTable();
    // var data = google.visualization.arrayToDataTable([]);
    data.addColumn('number', 'Date');
    data.addColumn('number', 'price');
    data.addRows(scatterInput);
    data.addRows(scatterInput);
    // data.addRows(scatterInput);
    // data.addRows(scatterInput);
    // data.addRows(scatterInput);

    var options = {
      title : 'Date vs Price',
      vAxis: {title: 'Price'},
      hAxis: {title: 'Date'},
      // seriesType: 'bars',
      series:{
        0 : {
          type: 'line',
          color: 'blue'
        },
        // 1: {
        //   type: 'bars',
        //   color: 'blue'
        // },

      },
    }


    var chart = new google.visualization.ComboChart(document.getElementById('combo_div'));
    chart.draw(data, options);
  }


  function drawHistogram(HistogramInput) {
      var processedInput = setKeytoString(HistogramInput);
      var data = google.visualization.arrayToDataTable(processedInput);

      //   [
      //       ["date" , "price"],
      //       ['1'      ,     15],
      //       ['2 '     ,     15],
      //       ['3'      ,     12],
      //       ['4'      ,     5],
      //       ['5'      ,     10],
      //       ['6'      ,     10],
      //       ['7'      ,     10],
      //       ['8'      ,     10],
      //       ['9'      ,     10],
      //       ['10 '    ,     10],
      //       ['11'     ,     10],
      // ]


        // data += google.visualization.arrayToDataTable([HistogramInput]);

        var options = {
    title: 'Distribution of Data',
    legend: { position: 'none' },
    colors: ['#4285F4'],

    chartArea: { width: 401 },
    hAxis: {
      ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
    },
    bar: { gap: 0 },

    histogram: {
      bucketSize: 0.02,
      maxNumBuckets: 200,
      minValue: -1,
      maxValue: 1
    }
  };

        var chart = new google.visualization.Histogram(document.getElementById('chart_div_histogram'));
        chart.draw(data, options);
      }
