//document.getElementsByClassName("tableRow")[0].children[0].style.display =
//"none";
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
$(document).ready(function () {
  var form = new FormData();

  var settings = {
    url: "https://odev.zertel.net/api/list/",
    method: "GET",
    timeout: 0,

    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    let _data = JSON.parse(response);

    var _row = document
      .getElementsByClassName("tableRow")[0]
      .children[0].cloneNode(true);

    for (var i = 0; i < _data.length; i++) {
      _row.children[0].innerHTML = _data[i].ad;
      _row.children[1].innerHTML = _data[i].soyad;
      _row.children[2].innerHTML = _data[i].eposta;
      _row.children[3].innerHTML = _data[i].telefon;
      document.getElementsByClassName("tableRow")[0].appendChild(_row);
      _row = document
        .getElementsByClassName("tableRow")[0]
        .children[i + 1].cloneNode(true);
    }
  });
});

$("#save").click(function () {
  var form = new FormData();
  let _ad = document.getElementsByName("ad")[0].value;
  let _soyad = document.getElementsByName("soyad")[0].value;
  let _eposta = document.getElementsByName("eposta")[0].value;
  let _tel = document.getElementsByName("telefon")[0].value;
  form.append("ad", _ad);
  form.append("soyad", _soyad);
  form.append("eposta", _eposta);
  form.append("telefon", _tel);

  var settings = {
    url: "https://odev.zertel.net/api/create/",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    var data = JSON.parse(response);
    let dataRow = document
      .getElementsByClassName("tableRow")[0]
      .children[0].cloneNode(true);

    dataRow.children[0].innerHTML = data.ad;
    dataRow.children[1].innerHTML = data.soyad;
    dataRow.children[2].innerHTML = data.eposta;
    dataRow.children[3].innerHTML = data.telefon;
    document.getElementsByClassName("tableRow")[0].appendChild(dataRow);
    $("#myForm").hide();
  });
});
