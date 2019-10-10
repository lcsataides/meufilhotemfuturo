	function pegarInfo() {

		var currentDate = new Date();
		var date = currentDate.getDate();
		var month = currentDate.getMonth(); //Be careful! January is 0 not 1
		var year = currentDate.getFullYear();

		var ip = "";
		var dateString = date + "-" +(month + 1) + "-" + year;

		ip = geoplugin_request();
		document.querySelector("agoraVaiData")[0].innerText = dateString;
    document.querySelector("agoraVaiIP")[0].innerText = ip;

    console.log(dateString);
    console.log(ip);
	}