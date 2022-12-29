/* Event JQuery
 - Event adalah sebuah method atau aksi yang dilakukan jQuery...
 - Event merupakan aksi lanjutan setelah menetapkan selector.

 Method Event
 1) .bind()
 2) .blur()
 3) .change()
 4) .click()
 5) .contextmenu()
 6) .dblclick()
 7) .delegate()
 8) .die()
 9) .unload()
 10) .undelegate()
 11) .error()
 12) event.currentTarget
 13) event.data
 14) event.delegateTarget
 15) event.isDefaultPrevent()
 16) event.isImmaediateProgationStopped()
 17) event.isPropagationStopped()
 18) event.metaKey
 19) event.namespace
 20)...dst

 Jenis Jenis Event
 1) keyup() => Fungsinya adalah mendeteksi ketika tombol keyboard ditekan .

 2) keydown() => Mendeteksi ketika tombol keyboard dilepas .

 3) keypress() => Mendeteksi ketika tombol keyboard ditekan dan posisi kursor sedang fokus pada sebuah form .

 4) mousedown() => Digunakan untuk mendeteksi ketika tombol mouse ditekan .

 5) mousemove() => Fungsinya mendeteksi ketika mouse dipindah .

 6) mouseup() => Fungsinya adalah mendeteksi ketika tombol mouse dilepas .

 7) mouseenter() => Mendeteksi ketika mouse masuk ke dalam sebuah elemen. Seperti efek hover CSS, tetapi tidak dengan ini yang didalamnya merupakan function .

 8) mouseleave() => Berbeda terbalik dengan mousenter(), mouseleave mendeteksi ketika mouse keluar dari sebuah elemen .

 9) hover() => Merupakan gabungan dari event mouseenter() dan mouseleave() .

 10) mouseover() => Digunakan untuk mendeteksi ketika pointer mouse melintasi sebuah elemen .

 11) focus() => Mendeteksi ketika sebuah form sedang fokus .

 12) focusin() => Hampir sama dengan event focus(), tetapi event ini mendeteksi ketika mouse diklik pada sebuah input pada sebuah form .

 13) focusout() => Hampir sama dengan focusin(), pada event ini mendeteksi ketika mouse diklik pada input lain setelah sebelumnya fokus pada salah satu input .

 14) change() => Mendeteksi ketika sebuah input form diubah .

 15) select() => Mendeteksi ketika sebuah pilihan / option pada form terpilih ( dipilih ) .

 16) blur() => Digunakan pada sebuah input form tidak sedang fokus ( keadaan normal ) .

 17) submit() => Mendeteksi ketika tombol form submit ditekan .

 18) click() => Event ini sering banyak digunakan, fungsinya yaitu mendeteksi ketika salah satu elemen diklik .

 19) dbclick() => Sama dengan event click, tetapi event dbclick() akan menjalankan fungsinya ketika sebuah elemen diklik dua kali / ganda

 20)  scroll() => Mendeteksi ketika scroll bar digulung .
*/
$(document).ready(function () {
  // Event hover
  $(".h1").hover(function () {
    $(this).css("color", "#9C51E0");
  });
  // Event click
  $("#click").click(function () {
    alert("Selamat Datang Di Materi Event!");
  });

  // Event dblclick
  $("#dblclick").dblclick(function () {
    prompt("Siapa Nama Anda?");
  });

  // Event mouseleave
  //function mouseleave dijalankan ketika cursornya telah melewati class yg kita menipulasi.
  $(".mouse").mouseleave(function () {
    $(this).css("color", "#789395");
  });

  // Event mouseenter
  // function akan berjalan ketika kursor berada pas di class yg kita manipulasi warnanya berubah.
  $(".enter").mouseenter(function () {
    $(this).css("color", "#495371");
  });

  //Event keydown
  // fungsinya untuk memunculkan data yg kita tulis di halaman web yang tadinya berada di dalam box menjadi di luar yang tepatnya textnya berada di bawah.
  // kekurangannya kita harus menekan tombol enter agar data yg keluer valuenya lengkap
  // val() fungsinya untuk mengambil data yg telah di input
  $("#keydown").keydown(function () {
    $("#pesan_keydown").text($(this).val());
  });

  //Event keyup
  // mirip dengan keydown tetapi keyup tidak perlu menekan enter agar lengkap , keyup otomatis lengkap data dengan valuenya.
  $("#keyup").keyup(function () {
    $("#pesan_keyup").text($(this).val());
  });
});
