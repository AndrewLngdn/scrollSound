scrollSound
===========
A jQuery plugin for adding audio to specific y-locations on your page.

Demo:
http://andrewlngdn.herokuapp.com/scroll_sound

Useage: 
```
$('body').scrollSound("wind.mp3", 100); 
```
This will load and play the mp3 'wind', with a maximum gain when the user is scrolled to 100px below the top of the page. 
```                                    
$('div.my-div').scrollSound("rain.mp3, 2000, myAudioContext);
```
Use this when you've already got a WebAudio context on your page.


Note: because of the way webAudio loads audio files, you will need to be runnung a server to test this locally or you will get XHR errors.


The dropoff function for the sound amplitude looks like this:

http://www.wolframalpha.com/input/?i=2%5E%28-0.00007*%28x-0%29%5E2%29

Raising x to a higher, even power will result in a steeper cutoff. 


Uses:

1. Artistic web pages, like tall works of art, or audio/visual scultures
2. Tall pages that need sound for some reason 
3. Annoying your users like the MIDI days



Coming soon: 

1. A more user-friendly way of controlling the gain function
2. Seperately: a more general and useful version of this type of app, connecting webAudio and user interaction in a more modular way

