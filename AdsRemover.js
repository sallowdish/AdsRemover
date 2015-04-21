whiteList=['weibo']
blackList=['bdstatic'];
function removeIframes(){
	for(var whiteKey in whiteList){
		if ($(this).attr('src').indexOf(whiteKey)>-1) {
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