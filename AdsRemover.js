var whiteList=['weibo'];
var blackList=['bdstatic.com','cb.baidu.com','pos.baidu.com','baidustatic.com'];
//load JQuery if needed
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 100);
        }
    };

    // Start polling...
    checkReady(function($) {
		function removeIframes(){
			for(var i in whiteList){
				if ($(this).attr('src') && $(this).attr('src').substring(0,50).indexOf(whiteList[i])>-1) {
					console.log('Skip iFrame with src:'+$(this).attr('src').substring(0,50)+" contains whiteKey:"+whiteList[i]+" at:"+ $(this).attr('src').substring(0,50).indexOf(whiteList[i]));
					return;
				};
			}
			$(this).remove();
		}
		function removeImgContainKeyinBlackList(){
			for(var i in blackList){
				if($(this).attr('src').indexOf(blackList[i])>-1){
					$(this).remove();
					return;
				}
			}
		}
		$('iframe').each(removeIframes);
		$('img').each(removeImgContainKeyinBlackList);
    });
})();