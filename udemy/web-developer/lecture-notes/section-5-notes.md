# Introduction to CSS

## Objectives
- Define CSS and the role that it plays in Web Dev
- View websites before and after CSS has been added
- Understand the general rule for CSS syntax

## Cascading Style Sheets
The Adjectives or the skin of a webpage and can change a page drastically from style to style depending on how you utilize it.

### The General Rule

```css
selector {
    property: value;
    anotherProperty: value;
}
```

#### Examples

```css
/* Make all H1's Purple and increase the size to 56 pixels */
h1 {
    color: purple;
    font-size: 56px;
}

/* Give all images a 3 pixel red border */
img {
    border-color: red;
    border-width: 3px;
}
```

### Where can you write styles?
- Inline tags (the most specific approach)
  - Hard to refactor and time consuming to code
- Embedded style in HTML
  - Hard for uniform project
- Stand alone style sheets
  - Reusable and clean approach  


### Colors in CSS
There are a lot of built in colors with names, but it is not required to remember all of these. However with RGB, RGBA, CMYK properties the color patterns are much more numerous.
- Named colors are generically used for debugging purposes
- Hexadecimal(Base16) - # + String of 6 hexidecimal numbers (from 0-F)
  - Is used because it gets us a lot of choices, and keeping names short
  - First two numbers correspond to red
  - Second two number correspond to green
  - Third two numbers correspond to blue
- RGB(Base10) - 3 colors: Red, Green, Blue. Each ranges from 0-255
- RGBA - works just like RGB, except the 4th channel is transparency
  - The alpha channel (4th) ranges from 0 to 1

###### Hexadecimal  
```css
h1 { color: #000000; } - Black
h2 { color: #4B0082; } - Purple
h3 { color: #FF1493; } - Pink
```

###### RGB
```css
h1 { color: rgb(0,255,0); }     - Neon Green
h2 { color: rgba(100,0,100); }  - Purple
h3 { color: rgb(11,99,150); }   - Shade of Blue
```

###### RGBA
```css
h1 { color: rgba(11,99,150,1); }     - Full Blue
h2 { color: rgba(11,99,150,0.6); }   - Partially opaque
h3 { color: rgba(11,99,150,0.2); }   - Very opaque
```

### Backgrounds
- Can be set to generic colors with all styles
- Can be set as an image using the 'url' tag

### CSS Selectors
The Basics: Elements, Classes & IDs

#### Element Selector
Select all isntances of a given element
```css
div {
  background: purple;
}
```

#### ID Selector
Selects an element with a given ID, only one per page!
```html
<div id="special">What's Up!</div>
```
```css
#special {
  color: yellow;
}
```

#### Class Selector
Selects al elements with a given class
```html
<div class="highlight">What's Up!</div>
<p class="highlight">Not Much!</p>
```
```css
.highlight {
  color: white;
}
```

### Advanced Selectors
- Article on [Advanced Selectors](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
- Star: this selects everything
```css
*{
  border: 1px solid lightgrey;
}
```
- Descendant Selector: take two or more selectors and chains them together
```css
li a {
  text-decoration: line-through'
}
```
- Adjacent Selector: selects siblings on the pages
```css
h4 + ul {
  color: red;
}
```
- Attribute Selector: way to select elements based off any element
```css
input[type="checkbox"] {
  background: yellow;
}
```
- nth of type: takes a number,selects that number 'nth' of the element
```css
ul:nth-of-type(3) {
  background: purple;
}
```

## Introduction to Chrome Inspector
- Can view page source
- Can review each page element and what styles are applied to them
- Just like the console, you can change styles and add them to see how they will look
- Changes are not made to the files, just to inspect their feel

## CSS Specificity
- When css sees that there are 3 or 4 different colors, it runs a calculation based on an inherent value passed to each selector.
- The more specific the selector the higher inheritance
- [Specificity](specificity.keegan.st) is an online resource to calculate specificity
- Inline are most specific
- ID's are second most specific
- Classes, attributes and pseudo-classes are third most specific
- Elements and pseudo-elements are last in specificity