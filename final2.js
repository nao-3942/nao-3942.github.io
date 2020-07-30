myH = (new Date()).getHours();	
if ( myH <= 5 ) myMes = "こんばんは~!";	
else if ( myH <= 11 ) myMes = "おはようございます~!";	
else if ( myH <= 18 ) myMes = "こんにちは~!";	
else if ( myH <= 24 ) myMes = "こんばんは~!";	
document.write( myMes );