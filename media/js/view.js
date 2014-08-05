function GetTableData () {
	var text = JSON.parse(data_table);
	var data = "";

	var myTable = document.getElementById("myTable");

	data = "<thead><tr><th>CROP</th>" +
			"<th>CITY PRICE</br>(Php)</th>" +
			"<th>PREVAILING </br>PRICE</br>(Php)</th>" +
			"</tr></thead><tbody>";

	for (var i = 0; i < text.length; i++) {
		data += "<tr><td>" + text[i].crop + "</br>" + text[i].viscrop + "</td>" +
				"<td>" + text[i].city_price + "/kg</td>" +
				"<td>" + text[i].asp + "/kg</td>" +
				"</tr> ";
	}

	data += "</tbody>";

	myTable.innerHTML = data;
};

// Start of clock //
tday  =new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");

var tempDate;

function GetClock(){
	d = new Date();
	nday   = d.getDay();
	nmonth = d.getMonth();
	ndate  = d.getDate();
	nyear = d.getYear();
	nhour  = d.getHours();
	nmin   = d.getMinutes();
	nsec   = d.getSeconds();
	
	if(nyear<1000) nyear=nyear+1900;

		 if(nhour ==  0) {ap = " AM";nhour = 12;} 
	else if(nhour <= 11) {ap = " AM";} 
	else if(nhour == 12) {ap = " PM";} 
	else if(nhour >= 13) {ap = " PM";nhour -= 12;}

	if(nmin <= 9) {nmin = "0" +nmin;}
	if(nsec <= 9) {nsec = "0" +nsec;}
	
	document.getElementById('clock').innerHTML="<p style=\"color:white\">"+nhour+":"+nmin+" ET</p><p style=\"color:#82ADC6\">"+ndate+" "+tmonth[nmonth]+"</p>";

	setTimeout("GetClock()", 1000);
}
// End of clock //

window.onload = GetClock();
window.onload = GetTableData();