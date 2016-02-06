# one-page-windows

---

A handy, loosely-coupled jQuery plugin for full-screen scrolling windows.
Written originally by [nick-jonas](https://github.com/nick-jonas/nick-jonas.github.com/tree/master/windows)

## Usage

Include the latest jQuery and `dist/windows.min.js` in your HTML page.

#### html

```html
<section class="window"></section>
<section class="window"></section>
<section class="window"></section>
<section class="window"></section>
<section class="window"></section>
```

#### js

```javascript
$(document).ready(function(){

    $('.window').windows({
        snapping: true,
        snapSpeed: 500,
        snapInterval: 1100,
        onScroll: function(scrollPos){
            // scrollPos:Number
        },
        onSnapComplete: function($el){
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    })

});
```

## In the Wild

* [Example Site](http://nick-jonas.github.com/windows)
