scrollSound
===========

Add audio to specific y-locations on your page. 

Useage: 

$('body').scrollSound("wind.mp3", 100); 

This will load and play the mp3 'wind', with a maximum gain when the user is scrolled to 100px below the top of the page. 
                                    
$('div.my-div').scrollSound("rain.mp3, 2000, myAudioContext);

Use this when you've already got a WebAudio context on your page.


The dropoff function for the sound amplitude looks like this:
http://www.wolframalpha.com/input/?i=2%5E%28-0.00007*%28x-0%29%5E2%29
Raising x to a higher, even power will result in a steeper cutoff. 


Uses:
1. Artistic web pages, like tall works of art, or audio/visual scultures
2. Annoying your users like it's the 90s


Coming soon: 
1. A more user-friendly way of controlling the gain function
2. Seperately: a more general and useful version of this type of app, connecting webAudio and user interaction in a more modular way
