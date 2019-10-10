import 'bootstrap'
// import './formInfo'
import '@fortawesome/fontawesome-free/css/all.css'
import './main.scss';

export default () => {

  function pegarInfo() {

		var currentDate = new Date();
		var date = currentDate.getDate();
		var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var ip = "";
		var dateString = date + "-" +(month + 1) + "-" + year + " " + hours + ":" + minutes + ":" + seconds;

		ip = geoplugin_request();
		document.querySelector(".date-hidden").value = dateString;
    document.querySelector(".ip-hidden").value = ip;

    console.log(currentDate);
    console.log(dateString);
    console.log(ip);
  }

  pegarInfo();
};