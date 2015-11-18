

$(document).ready(function(){
  page.init();
});


var page= {
  init: function(){
    page.event();
  },

  event: function(){
    page.cycleBckg();
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


};
