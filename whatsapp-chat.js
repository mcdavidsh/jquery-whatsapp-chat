
var bt_icon = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css';
var scriptElem = document.createElement('link');
scriptElem.setAttribute('href', bt_icon);
document.head.appendChild(scriptElem);
$(document).ready( function () {

    $(".open-chat, .btn-get-started").on('click', function (e) {

            $(".body-chat, #close-chat").css('display', 'block');
            $('#open-chat').css('display', 'none')

        $(this).css('animation', 'none')

        if ($(e.target).attr('id') == 'close-chat') {
            $('#open-chat').css('display', 'block')
            $(".body-chat, #close-chat").css('display', 'none');
            $(this).css('animation', 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite 1.5s')
        }
    })





})


function startchat(phonenumber) {

    var htmlChat = ' <div class="body-chat">'
        htmlChat+='<div class="form-header">'

    htmlChat+='<div class="chat-profile">'
    htmlChat+=' <img src="core/assets/img/chat/latte.jpeg">'
    htmlChat+='    <span class="chat-online"></span>'
    htmlChat+='    </div>'
    htmlChat+='  <h6>Let\'s Chat</h6>'
    htmlChat+=' </div>'
    htmlChat+='<div class="text-center p-2 text-desc"> <span>Typically replies in seconds</span> </div>'

    htmlChat+='      <div class="chat-form">'
    htmlChat+='   <form>'
    htmlChat+=' <div class="form-body">'
    htmlChat+='   <input type="text" class="form-control form-field" placeholder="Full Name" name="fullname" id="fullname">'
    htmlChat+='  <input type="text" class="form-control form-field" placeholder="Subject" name="subject" id="subject">'
    htmlChat+='<textarea class="form-control form-field" placeholder="Your Text Message" name="messgase" id="message" rows="4"></textarea>'
    htmlChat+='<button type="button" class="btn btn-success btn-block chat-btn" name="send" id="send">Start Chat</button> </div>'
    htmlChat+='   </form>'
    htmlChat+=' </div>'
    htmlChat+='  </div>'
    htmlChat+='<div class="chat-wrapper">'
    htmlChat+='  <div class="open-chat"><i class="bi bi-whatsapp" id="open-chat"></i>'
    htmlChat+='  <i class="bi bi-x-circle" style="display: none" id="close-chat"></i>'
    htmlChat+='    </div>'
    htmlChat+='</div>'
   $('body').append(htmlChat)

    document.querySelector('#send').addEventListener('click',  () => {
        var fullname =   document.getElementById('fullname').value.toUpperCase();
        var subject = document.getElementById('subject').value.toLocaleUpperCase();
        var message = document.getElementById('message').value.toLocaleUpperCase();

        if (fullname.length !== 0 && subject.length !== 0 && message.length !== 0){
            var whatsMsg = 'CUSTOMER ENQUIRY'+`%0a`;
            whatsMsg +='------------------------'+`%0a`;
            whatsMsg +=    'Full Name: '+fullname+''+`%0a`;
            whatsMsg +='------------------------'+`%0a`;
            whatsMsg += 'Subject: '+subject+''+`%0a`;
            whatsMsg += '------------------------'+`%0a`;
            whatsMsg += 'Message: '+message+''+`%0a`;
            var param = 'https://api.whatsapp.com/send/?phone='+phonenumber+'&text='+whatsMsg+'';
            var start_url = window.open(param, 'popup', 'toolbar=yes,scrollbars=no,resizable=yes, height=600, width=600,top=100, left=300')
            start_url.focus();
        }
        else if (fullname.length == 0) {
                alert('Please enter fullname and try again')
            }
          else  if (subject.length == 0) {
                alert('Please enter subject and try again')
            }
           else if (message.length == 0) {
                alert('Please enter message and try again')
            }
        else {
            alert('Please enter fields and try again')
        }
    })
}


