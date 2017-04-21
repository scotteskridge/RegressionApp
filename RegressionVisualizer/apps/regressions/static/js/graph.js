function setKeytoString(list_of_lists){
    KeysAsStrings = []
    KeysAsStrings.push(['Name' , 'Value']);
    for (var i = 0; i < list_of_lists.length; i ++ ){
      KeysAsStrings.push([(list_of_lists[i][0]).toString(), list_of_lists[i][1]]);
    }
    return KeysAsStrings
}

function headerToString(matrix){

  for (var j = 0; j < matrix[0].length; j ++){
    matrix[0][j] = matrix[0][j].toString();
    }
  return matrix
}



function drawScatter(scatterInput) {
    var scatterData = google.visualization.arrayToDataTable(scatterInput);
  // var scatterData = new google.visualization.DataTable();
  //   scatterData.addColumn('number', 'Date');
  //   scatterData.addColumn('number', 'price');
  //   scatterData.addRows(scatterInput);

  var scatter_options = {
    title: 'Date vs. Price comparison',

    // hAxis: {title: 'Date', minValue: 0, maxValue: 15},
    // vAxis: {title: 'Price', minValue: 0, maxValue: 15},
    legend: { position: 'bottom' }
  };

  var scatter_chart = new google.visualization.ScatterChart(document.getElementById('scatter_div'));

  scatter_chart.draw(scatterData, scatter_options);
}

function drawCurveChart(CurveChartInput) {
      //every column is a line ever row is the next step in time
      var data = google.visualization.arrayToDataTable(CurveChartInput);


      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }

function drawComboChart(ChartData) {
    var data = google.visualization.arrayToDataTable(ChartData);

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


  function drawHistogram(ChartData) {
    var data = google.visualization.arrayToDataTable(ChartData);
      // var processedInput = setKeytoString(HistogramInput);
      // var data = google.visualization.arrayToDataTable(processedInput);

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


function drawMultiLineChart() {
  var data = google.visualization.arrayToDataTable

  //so each column is a line and each row is the next value on that line
  ([['X', '1', '2', '3', '4', '5', '6'],
           [1, 2, 3, 4, 5, 6, 7],
           [2, 3, 4, 5, 6, 7, 8],
           [3, 4, 5, 6, 7, 8, 9],
           [4, 5, 6, 7, 8, 9, 10],
           [5, 6, 7, 8, 9, 10, 11],
           [6, 7, 8, 9, 10, 11, 12],
           [16, 17, 18, 19, 110, 51, 112],
           [18, 19, 20, 21, 112, 30, 115]
     ]);

  var options = {
    legend: 'none',
    curveType: 'function',
    series: {
      // 0: { color: '#e2431e' },
      // 1: { color: '#e7711b' },
      // 2: { color: '#f1ca3a' },
      // 3: { color: '#6f9654' },
      // 4: { color: '#1c91c0' },
      // 5: { color: '#43459d' },
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('multi_line_chart_div'));
  chart.draw(data, options);
}
