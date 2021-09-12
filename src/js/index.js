import '../scss/index.scss'
import '../js/jquery.maskedinput.min.js'


var langArray = [];
$('.picker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><span>'+ text +'</span><img src="'+ img +'" alt="" value="'+value+'"/></li>';
  langArray.push(item);
})

$('#selectList').html(langArray);
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'RU');
$('#selectList li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><span>'+ text +'</span><img src="'+ img +'" alt="" /></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $("select option:selected").removeAttr('selected');
  $("select option[value=" + value + "]").attr('selected', 'true');
  $("#tel").mask($("select option:selected").attr('data-mask'));
  $(".select").toggle();
});

$(".btn-select").click(function(){
        $(".select").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}



