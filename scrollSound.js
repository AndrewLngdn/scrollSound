	(function($){
		window.onload = init;
		var context;
		var sources = [];
		var gainNodes = [];
		var scrollSoundInstance;
		var audioAnalyser;
		var count = 0;


		function init() {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			context = new AudioContext();
			$(window).trigger("scrollHeightContextLoaded");
		}

		function loadBuffer(url, offset) {
			var request = new XMLHttpRequest();
			request.open("GET", url, true);
			request.responseType = "arraybuffer";

			request.onload = function() {

				context.decodeAudioData(
					request.response,
					function(buffer) {
						if (!buffer) {
							alert('error decoding file data: ' + url);
							return;
						}
						finishedLoading(buffer, offset);
					},
					function(error) {
						console.error('decodeAudioData error', error);
					}
				);
			};


			request.onerror = function() {
				alert('BufferLoader: XHR error');
			}

			request.send();
		}
		

		function createSource(buffer, offset) {
			var source = context.createBufferSource();
			var gainNode = context.createGain();
			source.buffer = buffer;
			source.loop = true;
			source.connect(gainNode);
			gainNode.connect(context.destination);
			gainNode.gain.value = 0.0;

			attachScrollListener(gainNode, offset);

			return {
				source: source,
				gainNode: gainNode
			};
		}
		function attachScrollListener(gainNode, offset){
			var offset = offset;
			scrollSoundInstance.scroll(function(){

				var scrollHeight = $(this).scrollTop();
					var gain = Math.max(1 - 0.0000005*Math.pow(scrollHeight-offset,2), 0);
					gainNode.gain.value = gain;
			});
		}

		function finishedLoading(buffer, offset) {
			var response = createSource(buffer, offset);
			var gainNode = response.gainNode;
			var source = response.source;
			gainNodes.push(gainNode);
			sources.push(source);
			source.start(0);

			return {
				source: source,
				gainNode: gainNode
			};
		}

		$.fn.scrollSound = function(url, height) {
			scrollSoundInstance = this;
			$(window).on('scrollHeightContextLoaded', function(){
				loadBuffer(url, height);

			})
			return this;
		}
	})(jQuery);