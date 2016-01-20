function leagueurlgen (division) {
	for(i=1; i<=2;i++)
	{
	  getDataFromHitwicket("http://hitwicket.com/league/show/v-"+i);
	}
}

function getDataFromHitwicket (leagueurl) {	
  var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", leagueurl, true);
xmlhttp.send();
}

function myFunction(arr) {
    // var out = "";
    // var i;
    // for(i = 0; i < arr.length; i++) {
    //     out += '<a href="' + arr[i].url + '">' + 
    //     arr[i].display + '</a><br>';
    // }
    document.getElementById("id01").innerHTML = arr;
}
//---

getDataFromHitwicket("http://hitwicket.com/league/show/vi-9");

function getDataFromHitwicket (leagueurl) {
  window.location.href = leagueurl;
  setTimeout( function () { var x = document.querySelectorAll(".bot_team_name");
console.log(x.length); alert(x.length); });

}
//var numItems = $('.bot_team_name').length;
//numItems;