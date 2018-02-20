// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
    $('#sizePicker').submit(function makeGrid(grid) {
        $('table tr').remove();
        var rows = $('#inputHeight').val();
        var cols = $('#inputWeight').val();
        for (var i = 1; i <= rows; i++) {
            $('table').append('<tr></tr>');
            for (var j = 1; j <= cols; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        }
        grid.preventDefault();

        $('.cells').click(function(event) {
            var paint = $('#colorPicker').val();
            $(event.target).css('background-color', paint);
        })

    });
});