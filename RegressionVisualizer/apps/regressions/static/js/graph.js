

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


  function drawHistogram() {
        var data = google.visualization.arrayToDataTable([
          ['Dinosaur', 'Length'],
          ['Acrocanthosaurus (top-spined lizard)', 12.2],
          ['Albertosaurus (Alberta lizard)', 9.1],
          ['Allosaurus (other lizard)', 12.2],
          ['Apatosaurus (deceptive lizard)', 22.9],
          ['Archaeopteryx (ancient wing)', 0.9],
          ['Argentinosaurus (Argentina lizard)', 36.6],
          ['Baryonyx (heavy claws)', 9.1],
          ['Brachiosaurus (arm lizard)', 30.5],
          ['Ceratosaurus (horned lizard)', 6.1],
          ['Coelophysis (hollow form)', 2.7],
          ['Compsognathus (elegant jaw)', 0.9],
          ['Deinonychus (terrible claw)', 2.7],
          ['Diplodocus (double beam)', 27.1],
          ['Dromicelomimus (emu mimic)', 3.4],
          ['Gallimimus (fowl mimic)', 5.5],
          ['Mamenchisaurus (Mamenchi lizard)', 21.0],
          ['Megalosaurus (big lizard)', 7.9],
          ['Microvenator (small hunter)', 1.2],
          ['Ornithomimus (bird mimic)', 4.6],
          ['Oviraptor (egg robber)', 1.5],
          ['Plateosaurus (flat lizard)', 7.9],
          ['Sauronithoides (narrow-clawed lizard)', 2.0],
          ['Seismosaurus (tremor lizard)', 45.7],
          ['Spinosaurus (spiny lizard)', 12.2],
          ['Supersaurus (super lizard)', 30.5],
          ['Tyrannosaurus (tyrant lizard)', 15.2],
          ['Ultrasaurus (ultra lizard)', 30.5],
          ['Velociraptor (swift robber)', 1.8]]);

        var options = {
          title: 'Lengths of dinosaurs, in meters',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_div_histogram'));
        chart.draw(data, options);
      }
