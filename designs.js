// Select color input

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

function formSubmission() {
    event.preventDefault()
    var height = document.getElementById('input_height').value
    var width = document.getElementById('input_width').value
    makeGrid(height, width);
}

// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function() {formSubmission()};

// Build a default 10x10 grid.
makeGrid(10,10)
