import 'bootstrap';
// import './formInfo'
import "./import-jquery";
import '@fortawesome/fontawesome-free/css/all.css';
import './main.scss';

export default () => {

  function pegarInfo() {

    var currentDate = new Date();

		var day = currentDate.getDay();
		var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // função para deixar tudo com 2 dígitos
    function pad(n) {
      return n<10 ? '0'+n : n;
    }

    var data = year + "-" + pad((month + 1)) + "-" + pad(day);
    var horario = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
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