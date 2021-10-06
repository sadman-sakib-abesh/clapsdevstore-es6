const emailExistence=require('email-existence')
emailExistence.check('email@domain.com', function(error, response){
    console.log('res: '+response);
});