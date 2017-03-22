var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
var dt = require('datatables.net')();

require('datatables.net-bs');

require('css/app.css');

$('#doit').click(function (){
  $('#response').html('Button was pressed');
     var t = $('#example').DataTable();
            t.row.add( [
            'joebloggs',
            'joebloggs'
        ] ).draw( false );
});
