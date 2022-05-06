let adres2 = "https://api.majcherski.com/pdobrowolskicom/?currentstate=true";

function getValue(){
    var value= $.ajax({ 
       url: adres2, 
       async: false
    }).responseText;
    return JSON.parse(value);
 }

 let dupa = getValue();
 let statusstrony = dupa[0].status;

 function check(){
     if(statusstrony=="DOWN"){
         if((confirm("Mój skrypt wykrył, że serwer patryka jest wyłączony. Przekierować mimo to?")) == true){
            window.open('https://pdobrowolski.com', '_blank');
         }
     }else{
        window.open('https://pdobrowolski.com', '_blank');
     }
 }





