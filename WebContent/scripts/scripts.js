$(function() {
   $(window).scroll(function() {
      var top = $(window).scrollTop();
      
      if (top > 0) {
         $('#header').addClass('inverted');
      } else {
         $('#header').removeClass('inverted');
      }
   });
   $(window).trigger('scroll');
   
   var dpFrom = $('#from').datepicker({
      dateFormat: 'yy-mm-dd',
      minDate: 0,  
      onSelect: function() {
         dpTo.datepicker('option','minDate',dpFrom.datepicker('getDate'));
    }
   });
   dpFrom.datepicker('setDate',new Date());
   
   var dpTo = $('#to').datepicker({
      dateFormat: 'yy-mm-dd',
      minDate:0
   
   });
   dpTo.datepicker('setDate',4);
   
   $('#form-search').submit(function(e){
      e.preventDefault();
      
      var from = $('#from').val();
      var to = $('#to').val();
      
      search(from, to);
   });
});
function search(from, to){
   var url ='https://javascript-basic.appspot.com/searchLocation';
   
   $.getJSON(url,{
      from: from,
      to: to
   }, function(r){
      console.log(r);
   });
}