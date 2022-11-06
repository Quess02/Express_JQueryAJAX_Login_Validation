

$(document).ready(function(){
    $('.ajaxForm').on('submit',(e)=>{
        e.preventDefault();
        var form=$('.ajaxForm')
        var action = form.attr('action');
        var alertObj=document.getElementById('alert');
        var btn=document.getElementById('send');
       
        var formdata=form.serialize()
        console.log(formdata);
        $.ajax({
            url:action,
            type:'POST',
            data:formdata,
            beforeSend:function() {
                btn.innerText='Loading...'
            },
            complete:function() {
                btn.innerText='Sign in'
            },
            success:(data)=>{
                if(!data.success){
                    alertObj.innerHTML=`<div id="alert" class=" alert alert-danger">${data.msg}</div>`
                }else{
                 //redirecting from here
                 window.location.href='/home'
                }
               
            },
            error:function(){
                console.log('error occured');
            }
        });
    });
});
