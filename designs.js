// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  var table = document.getElementById("pixel_canvas");
  var grid = '';

  // loop over each row
  for (var i = 0; i < height; i++){
    grid += '<tr class="row-' + i + '">'
    // loop for each cell
    for (var j = 0; j < width; j++){
      grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>'
    }
    grid += '</tr>'
  }

  // add grid into table element
  table.innerHTML = grid
}

// on submit of form #sizePicker:
  // height = value of #input_height
  // width = value of #input_width
  // makeGrid(height, width);

makeGrid(5, 5);
