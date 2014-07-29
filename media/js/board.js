// Start of bar graph//
//var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

// Returns the current month and the previous 5 months //
var month = function () {
	tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	d = new Date();
	month = d.getMonth();
	var temp = 0, mon = [];

	for ( var i = 5, j = 0; i >=0; i--, j++ ) {
		if(month - i >= 0) {
			mon[j] = tmonth[month - i];
		} else {
			var num = i - month;
			mon[j] = tmonth[12 - num];
		}
	}
	
	return mon;
};

// Returns the read data from text file //
var data = function () {
	var text = JSON.parse(data_graph);
	var num = [];
	
	for ( i = 0; i < text.length; i++ ) {
		num[i] = parseInt(text[i]);
	}
	
	return num;
};

var barChartData = {
	labels : month(),
	datasets : [
		{
			fillColor : "rgba(0,0,255,0)",
			strokeColor : "rgba(0,0,255,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data : data()
		}
	]
};

function GetBarGraph(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive : true,
		bezierCurve : false
	});
	
	setTimeout("GetBarGraph()", 86400000);
}
// End of bar graph //

// Start of clock //
tday  =new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

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
	
	document.getElementById('clock').innerHTML=""+tday[nday]+"&nbsp;&nbsp;&nbsp;"+tmonth[nmonth]+" "+ndate+", "+nyear+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+nhour+":"+nmin+":"+nsec+ap+"";
	setTimeout("GetClock()", 1000);
	
	if(tempDate != nhour) {
		tempDate = nhour;
		window.onLoad = GetBarGraph();
	}
}
// End of clock //

window.onload = GetClock();