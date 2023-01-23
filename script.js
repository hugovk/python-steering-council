function drawChart(rows) {
  // https://developers.google.com/chart/interactive/docs/gallery/timeline
  let container = document.getElementById("chart_div");
  let chart = new google.visualization.Timeline(container);
  let dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: "string", id: "Name" });
  dataTable.addColumn({ type: "string", id: "Term" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });

  dataTable.addRows(rows);

  let options = {
    timeline: { colorByRowLabel: true },
  };

  chart.draw(dataTable, options);
}
