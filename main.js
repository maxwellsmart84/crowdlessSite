

$(document).ready(function(){
  page.init();
});


var page= {
  init: function(){
    page.event();
  },

  event: function(){
    page.cycleBckg();
    page.modalSubmit();
  },

  cycleBckg: function(){
    $('#bckImg').cycle({
      fx: 'fade',
      pager: '#smallnav',
      pause: 5,
      speed: 3600,
      timeout: 3800
    });
  },
  modalSubmit: function (){
    $('body').on('submit','#betaSignUp', function(event){
      event.preventDefault();
      var formData = {
        email: $('#inputEmail').val(),
        firstName: $('#inputFirstName').val(),
        lastName: $('#inputLastName').val()
      };
      console.log(formData);
      $.ajax({
        type: 'POST',
        url: 'https://sheetsu.com/apis/f799279e',
        crossDomain: true,
        jsonp: false,
        data: formData,
        dataType: "json"
      });
    });
  }

};
