Hour = (new Date()).getHours();	
if ( Hour <= 5 ) Message = "こんばんは~!";	
else if ( Hour <= 11 ) Message = "おはようございます~!";	
else if ( Hour <= 18 ) Message = "こんにちは~!";	
else if ( Hour <= 23 ) Message = "こんばんは~!";	
document.write( Message );