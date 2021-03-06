jQuery(document).ready(function () {
  $.ajax({
    // url: "https://myfxmarkets.com/1eb7daee5f804bd6b3698ba6a11aa41d/index.php/Jsontest",
    url: "http://localhost:3000/test",
    crossDomain: true,
    method: "GET",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      displayTable(data);
    },
    error: function (error) {
      console.log(error);
    },
  });
});

function displayTable(data) {
  //console.log(Object.keys(data.data.data));
  var tableBody = "";
  var odd_even = false;
  $.each(data.data.data, function () {
    var table_row = "";
    $.each(this, function (k, v) {
      table_row += "<td>" + v + "</td>";
    });
    tableBody +=
      '<tr class="' + (odd_even ? "odd" : "even") + '">' + table_row + "</tr>";
    odd_even = !odd_even;
  });
  $("#tbody").html(tableBody);
}
