jQuery(function(){
    jQuery('.wallet-amount').each(function(){
      text = jQuery(this).text();
      textSplit = text.split('.');
      jQuery(this).text(textSplit[0]);
  });
});
