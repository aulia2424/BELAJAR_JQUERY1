/* Effect Pada JQuery
 1. Show fungsinya untuk menampilkan sebuah element
 2. Hide fungsinya untuk menyembungikan element

 Effect Fading
 - FadeIn
 - FadeOut
 - FadeToggle
 - FadeTo

 Effect Sliding
 - SlideUp
 - SlideDown
 - SlideToggle

 Effect Custom
 - Animate
 - ClearQueue
 - Delay
 - Dequeue
 - Queue
 - Stop
*/

$(document).ready(function () {
  //Effect hide
  // jadi kita panggil selektor yang akan di manipulasi lalu diberi function click lalu kita panggil class kotak terus kasih function hide agar ketika kita menekan button hide maka kotak yang ada di halaman website akan hilang akan hilang dengan durasi 1 detik. 1000ms.
  $("#hide").click(function () {
    $("#kotak").hide(1000);
  });

  //Effect show
  // fungsinya untuk memunculkan element kotak
  $("#show").click(function () {
    $("#kotak").show(1000);
  });

  //Effect fadeOut
  $("#fadeOut").click(function () {
    $(".box1").fadeOut();
    $(".box2").fadeOut();
    $(".box3").fadeOut();
  });

  //Effect fadeIn
  $("#fadeIn").click(function () {
    $(".box1").fadeIn();
    $(".box2").fadeIn();
    $(".box3").fadeIn();
  });

  //Effect fadeToggle
  // fungsinya untuk jika classnya ada maka toggle akan menghilangkan classnya tapi jika class belum ada maka toggle akan menambahkan
  $("#fadeToggle").click(function () {
    $(".box1").fadeToggle();
    $(".box2").fadeToggle();
    $(".box3").fadeToggle();
  });

  //Effect fadeTo
  // untuk membuat object hilangnya secara transparant menggunakan opacity jika opacitynya satu maka objectnya tidak hilang.
  $("#fadeTo").click(function () {
    $(".box1").fadeTo("slow", 0.2);
    $(".box2").fadeTo("slow", 0.3);
    $(".box3").fadeTo("slow", 0.4);
  });

  //Effect slideUp
  // untuk menghilangkan kotak dengan gaya slide ke atas
  $("#slideUp").click(function () {
    $(".slide").slideUp();
  });

  //Effect slideDown
  //untuk memunculkan kotak dengan gaya slide ke bawah
  $("#slideDown").click(function () {
    $(".slide").slideDown();
  });

  //Effect slideToggle
  // fungsinya untuk jika classnya ada maka toggle akan menghilangkan classnya tapi jika class belum ada maka toggle akan menambahkan, jika slide down maka akan slide up.
  $("#slideToggle").click(function () {
    $(".slide").slideToggle();
  });

  //Effect animate
  // jadi fungdinya untuk memberi animasi geser ke kiri dan kanan maksutnya adalah js tolong carikan section id kiri lalu beri function di id animatebox beri animasi geser ke kiri sebesar - 50 dan pergerakannya slow.
  $("#kiri").click(function () {
    $("#animate-box").animate({ left: "-=50px" }, "slow");
  });
  $("#kanan").click(function () {
    $("#animate-box").animate({ right: "-=150px" }, "slow");
  });

  //Effect clearQueue
  // fungsinya untuk membersihkan / menghilangkan function yg sebelumnya di perintahkan
  $("#start").click(function () {
    $("#clearQueue-Box").animate({ left: "+=1000px" }, 4000);
    $("#clearQueue-Box").queue(function () {});
  }); // memberi function start jadi akan menggeser ke kanan sebesar1000px

  $("#stop").click(function () {
    $("#clearQueue-Box").clearQueue();
    $("#clearQueue-Box").stop();
  }); // memberi function bersihkan function/ clearqueue lalu kita beri function stop agar ketika ketika kita mengklik button stop pergeseran kotaknya berhenti.

  //Effect delay
  $("#delay").click(function () {
    $("#kotak-satu").slideUp(1000).delay(1000).fadeIn(1000); // delay untuk memberhentikan sesaat/ memberi jeda.
    $("#kotak-dua").slideUp(1000).fadeIn(1000);
  });
});
