# $(function)
A function passed into the jQuery object runs on document.ready, which occurs after the DOM has been loaded.

### Why is this useful?
External JavaScript files in the `<head>` of a document are generally downloaded earlier than JavaScript files included in the `<body>`. JavaScript files are also executed immediately at their location in the document, which means they can't access any DOM elements that come after their `<script>` tag in the DOM. This leads to some interesting situations.  
  
Imagine you're building a website and you've got a script you want to run against some DOM elements in the page. If you include your script in the `<head>` normally, it will run as soon as it's downloaded, which will occur before the DOM has built the elements you want your script to run against. So your script wouldn't be able to do anything.  
  
You could include your script at the bottom of the `<body>`, but that would mean that the download could potentially start later in the load process, slowing down the initial page render.  
  
#### So what can you do?
Pass your function into the jQuery object, like so:
```js
function someFunction() {
    // Do interesting things
}
$(someFunction)
or

$(function(){
    // Do interesting things
})
```
Now, you can include your script in the `<head>` and it won't run until the DOM has been built and the elements that you want to manipulate are on the page.  
  
To try this technique out, I've included a zip file of a sample website in the Downloadables section. Click "Continue to Quiz" to try this technique for yourself!  

### Start Quiz
You can download the jQuery-Sample-Site.zip [here](https://www.udacity.com/api/nodes/3356958537/supplemental_media/jquery-sample-sitezip/download?_ga=1.260066762.672083044.1467344711).   
  
For this quiz, can you use this script, which is linked in the of index.html, to change the boring placeholder image to a picture of a cute animal?  
  
Remember, you'll need to pass a function into the jQuery object to run when the document is ready.  
  
Good luck!  
  
Note: It looks like placepuppy.it is no longer available. Here are two other image URLs that can be used:
- http://placekitten.com/350/150
- http://lorempixel.com/350/150/animals/

[Passing a function (callback) to the jQuery object](http://api.jquery.com/jquery/#jQuery3)  
In case you were curious, the reason you're downloading the website and running it locally instead of running it in the classroom like before is because of the way the Udacity classroom works.  
  
With the way the `<iframe>` with your modified site loads in the classroom, $(someFunction)'s behavior is exactly the same as simply calling someFunction() like normal. So there isn't really a reason to ask you to try it here.
