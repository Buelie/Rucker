import './api'
export function col_info(info){
	try{
		var date = new Date().toLocaleString();
		console.log("["+date+" | INFO]:"+date);
		return 0;
	}
	catch(eor){
		var date = new Date().toLocaleString();
		console.log("["+date+" | ERROR]:"+eor);
		return 100;
	}
	finally{
		return 900;
	}
}
