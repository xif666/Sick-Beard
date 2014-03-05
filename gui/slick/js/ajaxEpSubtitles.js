(function(){
	$.fn.ajaxEpSubtitlesSearch = function(){
		$('.epSubtitlesSearch').click(function(){
			var subtitles_td = $(this).parent().siblings('.subtitles_column');
			var subtitles_search_link = $(this);
			// fill with the ajax loading gif
			subtitles_search_link.empty();
			subtitles_search_link.append($("<img/>").attr({"src": sbRoot+"/images/loading16_dddddd.gif", "alt": "", "title": "loading"}));
			$.getJSON($(this).attr('href'), function(data){
				if (data.result != "failure" && data.result != "No subtitles downloaded") {
				// clear and update the subtitles column with new informations
				var subtitles = data.subtitles.split(',');
				subtitles_td.empty()
				$.each(subtitles,function(index, language){
					if (language != "" && language != "und") {
						if (index != subtitles.length - 1) {
							subtitles_td.append($("<img/>").attr({"src": sbRoot+"/images/flags/"+language+".png", "alt": language, "width": 16, "height": 11}).css({'padding-right' : '6px','padding-bottom' : '4px'}));
					  	} else {
					  		subtitles_td.append($("<img/>").attr({"src": sbRoot+"/images/flags/"+language+".png", "alt": language, "width": 16, "height": 11}).css({'padding-bottom' : '4px'}));
					  	}
					}
				});			
				// don't allow other searches
				subtitles_search_link.remove();
				} else {
					subtitles_search_link.remove();
				}
			});
			
			// don't follow the link
			return false;
		});
	};
})();
