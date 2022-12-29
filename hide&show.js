$(document).ready(function () {
  $("#checkbox").click(function () {
    if ($(this).is(":checked")) {
      $("#password").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
    }
  });
});
// jadi kita memanggil id yg yaitu checkbox kemudian diberi function klik jika di checkbox di klik dan valuenya ceklis maka passwor akan di tampilkan, tapi jika celkisnya kita hilangkan maka yg kita beri type password.
