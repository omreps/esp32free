function t347_setHeight(recid){var el=$('#rec'+recid);var div=el.find(".t347__table");var height=div.width()*0.5625;div.height(height)}
window.t347showvideo=function(recid){$(document).ready(function(){var el=$('#rec'+recid);var videourl='';var youtubeid=$("#rec"+recid+" .t347__video-container").attr('data-content-popup-video-url-youtube');if(youtubeid>''){videourl='https://www.youtube.com/embed/'+youtubeid}
$("#rec"+recid+" .t347__video-container").removeClass("t347__hidden");$("#rec"+recid+" .t347__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t347__iframe\" width=\"100%\" height=\"100%\" src=\""+videourl+"?autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen></iframe>")})}
window.t347hidevideo=function(recid){$(document).ready(function(){$("#rec"+recid+" .t347__video-container").addClass("t347__hidden");$("#rec"+recid+" .t347__video-carier").html("")})}
function t391_checkSize(recid){var el=$("#rec"+recid);var cover=el.find('.t-cover');var carrier=el.find('.t-cover__carrier');var filter=el.find('.t-cover__filter');var height=el.find('.t391__firstcol').height()+el.find('.t391__secondcol').height();if(window.matchMedia('(max-width: 960px)').matches&&height>0){cover.css('height',height);carrier.css('height',height);filter.css('height',height)}}
function t509_setHeight(recid){var t509__el=$("#rec"+recid);var t509__image=t509__el.find(".t509__blockimg");t509__image.each(function(){var t509__width=$(this).attr("data-image-width");var t509__height=$(this).attr("data-image-height");var t509__ratio=t509__height/t509__width;var t509__padding=t509__ratio*100;$(this).css("padding-bottom",t509__padding+"%")});if($(window).width()>960){var t509__textwr=t509__el.find(".t509__textwrapper");var t509__deskimg=t509__el.find(".t509__desktopimg");t509__textwr.each(function(){$(this).css("height",t509__deskimg.innerHeight())})}}
function t776__init(recid){setTimeout(function(){t_prod__init(recid);t776_initPopup(recid);t776__updateLazyLoad(recid)},500)}
function t776__updateLazyLoad(recid){var scrollContainer=$("#rec"+recid+" .t776__container_mobile-flex");var curMode=$(".t-records").attr("data-tilda-mode");if(scrollContainer.length&&curMode!="edit"&&curMode!="preview"){scrollContainer.bind('scroll',t_throttle(function(){t_lazyload_update()},500))}}
function t776_initPopup(recid){var rec=$('#rec'+recid);rec.find('[href^="#prodpopup"]').one("click",function(e){e.preventDefault();var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');t_sldsInit(recid+' #t776__product-'+lid_prod+'')});rec.find('[href^="#prodpopup"]').click(function(e){e.preventDefault();t776_showPopup(recid);var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');el_popup.find('.js-product').css('display','none');var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]')
el_fullprod.css('display','block');var analitics=el_popup.attr('data-track-popup');if(analitics>''){var virtTitle=el_fullprod.find('.js-product-name').text();if(!virtTitle){virtTitle='prod'+lid_prod}
Tilda.sendEventToStatistics(analitics,virtTitle)}
var curUrl=window.location.href;if(curUrl.indexOf('#!/tproduct/')<0&&curUrl.indexOf('http://esp32:demo@esp32free.tilda.ws/%23!/tproduct/')<0){if(typeof history.replaceState!='undefined'){window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod)}}
t776_updateSlider(recid+' #t776__product-'+lid_prod+'');if(window.lazy=='y'){t_lazyload_update()}});if($('#record'+recid).length==0){t776_checkUrl(recid)}
t776_copyTypography(recid)}
function t776_checkUrl(recid){var curUrl=window.location.href;var tprodIndex=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&tprodIndex<0){tprodIndex=curUrl.indexOf('http://esp32:demo@esp32free.tilda.ws/%23!/tproduct/')}
if(tprodIndex>=0){var curUrl=curUrl.substring(tprodIndex,curUrl.length);var curProdLid=curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);var rec=$('#rec'+recid);if(curUrl.indexOf(recid)>=0&&rec.find('[data-product-lid='+curProdLid+']').length){rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click')}}}
function t776_updateSlider(recid){var el=$('#rec'+recid);t_slds_SliderWidth(recid);var sliderWrapper=el.find('.t-slds__items-wrapper');var sliderWidth=el.find('.t-slds__container').width();var pos=parseFloat(sliderWrapper.attr('data-slider-pos'));sliderWrapper.css({transform:'translate3d(-'+(sliderWidth*pos)+'px, 0, 0)'});t_slds_UpdateSliderHeight(recid);t_slds_UpdateSliderArrowsHeight(recid)}
function t776_showPopup(recid){var el=$('#rec'+recid);var popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show');if(window.lazy=='y'){t_lazyload_update()}},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').click(function(e){if(e.target==this){t776_closePopup()}});el.find('.t-popup__close, .t776__close-text').click(function(e){t776_closePopup()});$(document).keydown(function(e){if(e.keyCode==27){t776_closePopup()}})}
function t776_closePopup(){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');var curUrl=window.location.href;var indexToRemove=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&indexToRemove<0){indexToRemove=curUrl.indexOf('http://esp32:demo@esp32free.tilda.ws/%23!/tproduct/')}
curUrl=curUrl.substring(0,indexToRemove);setTimeout(function(){$(".t-popup").scrollTop(0);$('.t-popup').not('.t-popup_show').css('display','none');if(typeof history.replaceState!='undefined'){window.history.replaceState('','',curUrl)}},300)}
function t776_removeSizeStyles(styleStr){if(typeof styleStr!="undefined"&&(styleStr.indexOf('font-size')>=0||styleStr.indexOf('padding-top')>=0||styleStr.indexOf('padding-bottom')>=0)){var styleStrSplitted=styleStr.split(';');styleStr="";for(var i=0;i<styleStrSplitted.length;i++){if(styleStrSplitted[i].indexOf('font-size')>=0||styleStrSplitted[i].indexOf('padding-top')>=0||styleStrSplitted[i].indexOf('padding-bottom')>=0){styleStrSplitted.splice(i,1);i--;continue}
if(styleStrSplitted[i]==""){continue}
styleStr+=styleStrSplitted[i]+";"}}
return styleStr}
function t776_copyTypography(recid){var rec=$('#rec'+recid);var titleStyle=rec.find('.t776__title').attr('style');var descrStyle=rec.find('.t776__descr').attr('style');rec.find('.t-popup .t776__title').attr("style",t776_removeSizeStyles(titleStyle));rec.find('.t-popup .t776__descr, .t-popup .t776__text').attr("style",t776_removeSizeStyles(descrStyle))}
function t780_init(recid){if($("#rec"+recid+" .t-slds").length){t_sldsInit(recid)}
setTimeout(function(){t_prod__init(recid)},500);$('#rec'+recid).find('.t780').bind('displayChanged',function(){t_slds_updateSlider(recid)})}