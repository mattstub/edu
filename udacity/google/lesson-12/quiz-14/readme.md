If you're like me, finding the right size t-shirt can sometimes be a challenge. What size am I? What's the difference between S (small), M (medium), and L (large)? I usually wear L, but what if I need an XL (extra large)?  
  
Thankfully, our friends at Teespring have got us covered because they've created a sizing chart to make things a lot easier.  

## Directions:
![sizing chart](http://video.udacity-data.com.s3.amazonaws.com/topher/2017/January/586e969e_tshirt-guide/tshirt-guide.png)  

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.  

For example, if...  
```js
var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)
```

`Then print L to the console.`  
  
_Hint_: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve. For example, if the shirt's width is at least 20", but no more than 22", then the t-shirt should be medium (M) — as long as the other values for the shirt's length and sleeve measurements match up.  
  
If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print N/A to the console. 

For example, if...
```js
var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
``` 
  
`Then print N/A to the console because the measurements don't all match up with one particular size.`  
  
_TIP_: Make sure to test your code with different values. For example,

`If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21, then S should be printed to the console.`    
`If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63, then 2XL should be printed to the console.`    
`If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47, then N/A should be printed to the console.` 

### Versions
- [Version 1](app1.js)
- [Version 2](app2.js)
- [Version 3](app3.js) **This Quiz Passed all Necessary Requirements**
