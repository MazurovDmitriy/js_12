
$(function(){

  $('.carousel').carousel({
    elementsShow: 3,
    margin: 25,
    width: 150,
  });

  var dataObject = {
    data:[
    {
      name:"Украинские паралимпийцы взяли два золота в фехтовании", 
      text:"Золотые медали в фехтовании на колясках выиграли Антон Дацко и Андрей Демчук",
      date:"13.09.2016"
    },
    {
      name:"Украина на Паралимпийских играх завоевала уже более 50 медалей", 
      text:"Вечером 12 сентября в соревнованиях на Паралимпийских играх украинцы завоевали одно золото и одно серебро",
      date:"12.09.2016"
    },
    {
      name:"НОК Украины выплатил премии медалистам Олимпиады 2016", 
      text:"Награды получили и тренеры призеров Игр в Рио, заявили в олимпийском комитете",
      date:"11.09.2016"
    },
    ]
  }; // -> End of dataObject

  var news = document.getElementById("news");
  news.innerHTML = tmpl("news_template", dataObject);

})
