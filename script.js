/* Mengenal JQUERY JQUERY merupakan Pustaka JS yang diban gun untuk mempercepat, memperingkas serta menyederhanakan manipulasi dokumen HTML, penenganan event, animasi dan interaksi AJAX mempercepet pengembangan web. YANG AKAN DI PELAJARI 1.
DASAR-DASAR JQUERY 2. SELECTOR DAN FILTER 3. MANIPULASI DOM 4. EVENT HANDLE 5. EFEK DENGAN JQUERY 6. AJAX PADA JQUERY 7. MEMBUAT PLUGIN SENDIRI Syntax JQUERY -bentuk umum penulisan JQUERY $(selector).action() JQuery(selector).action();

Keterangan :
 - $ = simbol dolar mendefinisikan fungsi JQuery. 
 - selector = menunjukan element yang dipilih, bisa berupa nama tag, nama class atau id element.
 - action = merupakan aksi yang akan diberikan terhadap element yang dipilih. 

 SELECTOR JQUERY
 1.Selector Tag
 (h1,p,div,span)
 $("h1").css("color", "red");

 2.SELECTOR CLASS
 (.text .paragraf .judul)
 $("h1 .judul #text").css("background-color", "red");

 3.SELECTOR ID
 (#text #paragraf #judul)
 $("#text").css("backgroun-color", "red");

 4.SELECTOR GABUNGAN
 (tag,class,id)
 $("h1 .judul #text").css("backgorund-color", "red");
*/

$(document).ready(function () {
  // Selector Tag jadi pertama kita panggil selectornya lalu kita sambungkan ke css beri property dan beri value.
  $("h1").css("color", "lightpink");
  $("h2").css("color", "salmon");
  $("h3").css("color", "darkgray");

  // Slector Class
  $(".judul").css("color", "lightblue");
  $(".paragraf").css("color", "#B667F1");

  // Selector Id
  $("#judul").css("color", "#BAABDA ");
  $("#paragraf").css("color", "#6867AC");

  // Selector type Input
  $("input:submit").css("background-color", "pink");
  $("input:button").css("background-color", "pink");
});

/* 
 - document fungsinya untuk menyeleksi yang ada di halaman html.
 - ready adalah function dari jQuery yang fungsinya untuk mengeksekusi fungsi setelah dokumen setelah di load.
*/

/* Selector	Example	Selects
 | *	$("*")	All elements |
 | #id	$("#lastname")	The element with id="lastname" |
 | .class	$(".intro")	All elements with class="intro"
 | .class,.class	$(".intro,.demo")	All elements with the class "intro" or "demo"
 | element	$("p")	All <p> elements
 | el1,el2,el3	$("h1,div,p")	All <h1>, <div> and <p> elements
 	 	 
 | :first	$("p:first")	The first <p> element
 | :last	$("p:last")	The last <p> element
 | :even	$("tr:even")	All even <tr> elements
 | :odd	$("tr:odd")	All odd <tr> elements
 	 	 
 | :first-child	$("p:first-child")	All <p> elements that are the first child of their parent
 | :first-of-type	$("p:first-of-type")	All <p> elements that are the first <p> element of their parent
 | :last-child	$("p:last-child")	All <p> elements that are the last child of their parent
 | :last-of-type	$("p:last-of-type")	All <p> elements that are the last <p> element of their parent
 | :nth-child(n)	$("p:nth-child(2)")	All <p> elements that are the 2nd child of their parent
 | :nth-last-child(n)	$("p:nth-last-child(2)")	All <p> elements that are the 2nd child of their parent, counting from the last child
 | :nth-of-type(n)	$("p:nth-of-type(2)")	All <p> elements that are the 2nd <p> element of their parent
 | :nth-last-of-type(n)	$("p:nth-last-of-type(2)")	All <p> elements that are the 2nd <p> element of their parent, counting from the last child
 | :only-child	$("p:only-child")	All <p> elements that are the only child of their parent
 | :only-of-type	$("p:only-of-type")	All <p> elements that are the only child, of its type, of their parent
 	 	 
 | parent > child	$("div > p")	All <p> elements that are a direct child of a <div> element
 | parent descendant	$("div p")	All <p> elements that are descendants of a <div> element
 | element + next	$("div + p")	The <p> element that are next to each <div> elements
 | element ~ siblings	$("div ~ p")	All <p> elements that appear after the <div> element
 	 	 
 | :eq(index)	$("ul li:eq(3)")	The fourth element in a list (index starts at 0)
 | :gt(no)	$("ul li:gt(3)")	List elements with an index greater than 3
 | :lt(no)	$("ul li:lt(3)")	List elements with an index less than 3
 |:not(selector)	$("input:not(:empty)")	All input elements that are not empty
 	 	 
 | :header	$(":header")	All header elements <h1>, <h2> ...
 | :animated	$(":animated")	All animated elements
 | :focus	$(":focus")	The element that currently has focus
 | :contains(text)	$(":contains('Hello')")	All elements which contains the text "Hello"
 | :has(selector)	$("div:has(p)")	All <div> elements that have a <p> element
 | :empty	$(":empty")	All elements that are empty
 | :parent	$(":parent")	All elements that are a parent of another element
 | :hidden	$("p:hidden")	All hidden <p> elements
 | :visible	$("table:visible")	All visible tables
 | :root	$(":root")	The document's root element
 | :lang(language)	$("p:lang(de)")	All <p> elements with a lang attribute value starting with "de"
 	 	 
 | [attribute]	$("[href]")	All elements with a href attribute
 | [attribute=value]	$("[href='default.htm']")	All elements with a href attribute value equal to "default.htm"
 | [attribute!=value]	$("[href!='default.htm']")	All elements with a href attribute value not equal to "default.htm"
 | [attribute$=value]	$("[href$='.jpg']")	All elements with a href attribute value ending with ".jpg"
 | [attribute|=value]	$("[title|='Tomorrow']")	All elements with a title attribute value equal to 'Tomorrow', or starting with 'Tomorrow' followed by a hyphen
 | [attribute^=value]	$("[title^='Tom']")	All elements with a title attribute value starting with "Tom"
 | [attribute~=value]	$("[title~='hello']")	All elements with a title attribute value containing the specific word "hello"
 | [attribute*=value]	$("[title*='hello']")	All elements with a title attribute value containing the word "hello"
 	 	 
 | :input	$(":input")	All input elements
 | :text	$(":text")	All input elements with type="text"
 | :password	$(":password")	All input elements with type="password"
 | :radio	$(":radio")	All input elements with type="radio"
 | :checkbox	$(":checkbox")	All input elements with type="checkbox"
 | :submit	$(":submit")	All input elements with type="submit"
 | :reset	$(":reset")	All input elements with type="reset"
 | :button	$(":button")	All input elements with type="button"
 | :image	$(":image")	All input elements with type="image"
 | :file	$(":file")	All input elements with type="file"
 | :enabled	$(":enabled")	All enabled input elements
 | :disabled	$(":disabled")	All disabled input elements
 | :selected	$(":selected")	All selected input elements
 | :checked	$(":checked")	All checked input elements
*/
