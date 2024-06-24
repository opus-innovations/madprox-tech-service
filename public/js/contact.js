(function ($) {
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var body = "Hi MadProx Tech Service, Myself " + name + " reaching out your firm regarding the following: " + message;
        var url = "https://mail.google.com/mail/?view=cm&fs=1&to=info@madprox.co.in&cc=sales@madprox.co.in&bcc=sales@madprox.co.in&su=" + subject + "&body=" + body;
        window.open(url, '_blank').focus();        
      });

})(jQuery);

