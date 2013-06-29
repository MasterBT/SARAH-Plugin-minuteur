exports.action = function(data, callback, config, SARAH){

// on regarde que la variable temps n'est pas vide
if(!data.temps){
  return callback({'tts':"Désolé je n'ai pas compris"})};

// on récupére le temps et on l'imprime pour le debug
var temps = data.temps
var tempsname = data.tempsname
console.log(temps)


// on créer la fonction  pour le mp3
    var minut =  function(msg){
    SARAH.play('./plugins/minuteur/sample/trompette1.mp3');
             
  };

// on fait appel à la fonction minuteur
setTimeout(function() {minut('Fini')}, temps);
callback({'tts':"je lance le minuteur pour"+ tempsname}); 
};


