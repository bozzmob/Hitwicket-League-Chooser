for(i=1; i<=2;i++)
{
  var division = "http://hitwicket.com/league/show/v-"+i;
$.get( division, function( resp ) {
//  if($('div').hasClass('.redColor')){
    //var success =  $($.parseHTML(resp)).filter(".bot_team_name").length; 
  var success =  $(resp).hasClass(".bot_team_name"); 
    //var numItems = $('.bot_team_name').length;
    i;
    success;
});
}

//var numItems = $('.bot_team_name').length;
//numItems;