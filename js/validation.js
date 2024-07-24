$('#subbtn').click(function(){
    // console.log($('#name').val());
    let name = $('#name').val();
    let email = $('#email').val();
    let sub = $('#subject').val();
    let msg = $('#message').val();
    let mobile = $('#mobile').val();
    if(msg.length() < 15){
        alert("طول پیام باید حداقل 10 حرف باشد");
    }
    if(mobile.length != 11){
        alert("شماره موبایل نامعتبر است");
    }
    if(mobile[0]!='0' && mobile[1]!=9){
        alert("شماره موبایل نامعتبر است");
    }
    if(!validateEmail(email)){
        alert("ایمیل نامعتبر است");
    }
    if(sub.length() < 5){
        alert("طول موضوع باید حداقل 10 حرف باشد");
    }
})

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};