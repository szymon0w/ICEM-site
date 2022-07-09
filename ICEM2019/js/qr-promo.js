var called = false;

function codegen(length) {
  if(localStorage.getItem('code') !== null){
      result = "You have already received your code! In case you don't remember: "+localStorage.getItem('code');
  }
  else{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      if(i === 3){
        rand = Math.random();
        if(rand > 0.3){
          result+="V";
        }
        else if (rand > 0.7){
          result+="v";
        }
        else{
          result+="5";
        }
      }
      else{
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    }
    localStorage.setItem('code',result);
    result = "Your promo code: "+result;
  }
   document.getElementById("code").innerHTML = result;
}
