import 'bootstrap';
// import './formInfo'
import "./import-jquery";
import '@fortawesome/fontawesome-free/css/all.css';
import './main.scss';

export default () => {

  function pegarInfo() {

    var currentDate = new Date()

		var day = currentDate.getDay();
		var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var date = new Date(2016, 6, 27, 13, 30, 0);

    var data = year + "-" +(month + 1) + "-" + day;
    var horario = hours + ":" + minutes + ":" + seconds;
    var dateString = data + " " + horario;
    document.querySelector(".date-hidden").value = dateString;
    console.log(dateString);


    $.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
      var ip = data.ip;
      document.querySelector(".ip-hidden").value = ip
      console.log(ip);
    });
  }

  pegarInfo();
};