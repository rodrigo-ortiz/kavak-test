function cleanEmail(emails)
{
  var sEmailOutput = '';
  var aEmails = [];
  emails.map(function(email, index){
    
    var aParts = email.split("@");
    var sName = aParts[0];
    var sEmail = aParts[1];
    

    var aPartsName = sName.split("+")
    var aPartsEmails = sEmail.split("+")
    
    aPartsName = aPartsName[0].split(".");

    var sNameR = '';
    aPartsName.map(function(name, i){
      sNameR += name;
      
    });
    
    sEmailOutput = sNameR+'@'+sEmail
    aEmails.push(sEmailOutput);

  });
  
  var contador = {};
  for(var i=0;i< aEmails.length;i++)
  {
    var iKey = aEmails[i];
    contador[iKey] = (contador[iKey])? contador[iKey] + 1 : 1 ;
    
  }
  
  console.log(contador)
}



var emails = [
  "test.ema.il+alex@kavak.com",
  "test.e.ma.il+bob.cathy@kavak.com",
  ".t.estemail+david@ka.vak.com",
  "test.e.ma.il+bob.cathy@kavak.com",
  "roni+bob.cathy@kavak.com",
  "roni_gem@hotmail.com",
  "roni_.g.em@hotmail.com",
];


cleanEmail(emails);