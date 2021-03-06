/*
* CiteDrag v0.1.0.1
*
* 2009-10-01
*
* By Eli Grey, http://eligrey.com
*
* Adds citations to dragged content using the HTML5 drag & drop API.
*
* Licensed under the MIT License
*   See https://github.com/eligrey/CiteDrag/blob/master/LICENSE.md
*/

/*! @source http://purl.eligrey.com/github/CiteDrag/blob/master/citedrag.js*/

var CiteDrag = (function() {
	var
	doc          = document,
	loc          = location,
	text         = "text/",
	textType     = text + "plain",
	htmlType     = text + "html",
	uriType      = text + "uri-list",
	mozUrlType   = text + "x-moz-url",
	origHtmlType = text + "x-original-html",
	origTextType = text + "x-original-text",
	enabled      = false,
	
	CiteDrag = {
		dragHandler: function (evt) {
		
			if (typeof evt.dataTransfer != "undefined") {
				var dt = evt.dataTransfer,
				originName = (document.title || loc.hostname);
			
				// If website already uses CiteDrag (or offers a text/x-original- data type), restore data to original state if given
				if (dt.getData(origHtmlType))
					dt.setData(htmlType, dt.getData(origHtmlType));
				else // no text/x-original-html, set it
					dt.setData(origHtmlType, dt.getData(htmlType));
			
				if (dt.getData(origTextType))
					dt.setData(textType, dt.getData(origTextType));
				else // no text/x-original-plain, set it
					dt.setData(origTextType, dt.getData(textType));
			
				// WebKit thinks a page shouldn't be allowed to access dt.getData of a drag originating FROM THE SAME PAGE
				// https://bugs.webkit.org/show_bug.cgi?id=23695
			
				var
				textData = dt.getData(textType),
				htmlData = dt.getData(htmlType),
				uriList  = dt.getData(uriType),
				mozUrl   = dt.getData(mozUrlType);
			
				if (uriList) { // dragged an image or link
			
					if (mozUrl) { // mozilla link list format; supports #comments
						var uriCitation = "\n# via " + originName + " ( " + loc + " )",
						uriList = mozUrl
							.replace(/\n#.*/g, "") // remove comments
							.split("\n").join(uriCitation) + uriCitation; // add citations as comments
						dt.setData(mozUrlType, uriList);
						/* example:
						http://foo.example/
						http://bar.example/
				
						becomes:
						http://foo.example/
						# via site ( uri )
						http://bar.example/
						# via site ( uri )
						*/
					}
				
					if (htmlData)
						dt.setData(htmlType, // link via <a href={uri}>site</a>
							htmlData + ' via <a href="' +loc + '" title="' + loc.hostname + '">' + originName + "</a>"
						);
				
					if (textData)
						dt.setData(textType, // uri via site ( uri )
							textData + " via " + originName + ' ( ' + loc + ' )'
						);
				} else if (textData) { // dragged html or plain text
				
					if (htmlData)
						dt.setData(htmlType, // <blockquote.../> - <a href={uri}>site</a>
							'<blockquote cite="' + loc + '">' + htmlData + '</blockquote> \u2015 <a title="' + loc.host + '" href="' + loc + '">' + originName + "</a>"
						);
				
					if (textData)
						dt.setData(textType, // "content" - site ( uri )
							"\u201C" + textData + "\u201D\n	\u2015 " + originName + " ( " + loc + " )"
						);
				}
			}
		},
		
		enable: function () {
			if (!enabled) {
				if (doc.addEventListener)
					doc.addEventListener("dragstart", CiteDrag.dragHandler, false);
			
				else if (doc.attachEvent)
					doc.attachEvent("ondragstart", CiteDrag.dragHandler);
				
				enabled = !enabled;
			}
		},
		
		disable: function () {
			if (enabled) {
				if (doc.removeEventListener)
					doc.removeEventListener("dragstart", CiteDrag.dragHandler, false);
			
				else if (doc.detachEvent)
					doc.detachEvent("ondragstart", CiteDrag.dragHandler);
				
				enabled = !enabled;
				}
			}
		};
		
		CiteDrag.enable();
		
		return CiteDrag;
}());
