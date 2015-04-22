//load JQuery if needed
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
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
    	whiteList=['weibo'];
		blackList=['bdstatic.com','cb.baidu.com','pos.baidu.com'];
		function removeIframes(){
			for(var whiteKey in whiteList){
				if ($(this).attr('src') && $(this).attr('src').indexOf(whiteKey)>-1) {
					console.log('Skip iFrame with src:'+$(this).attr('src'))
					return;
				};
			}
			$(this).remove();
		}
		function removeImgContainKeyinBlackList(){
			for(var key in blackList){
				if($(this).attr('src').indexOf(key)>-1){
					$(this).remove();
					return;
				}
			}
		}
		$('iframe').each(removeIframes);
		$('img').each(removeImgContainKeyinBlackList);
    });
})();