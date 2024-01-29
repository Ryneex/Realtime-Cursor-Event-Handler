# Realtime Cursor Position

This project solves a common problem a lot of frontend developers encounters when creating hover animations. this project tries to solve that problem.

## Problem

hover over the div. when it becomes blue, try to scroll the site, even tho when your cursor isn't on top of the div, it still stays blue for some time. Sadly it is intentinal for high performance.

[Preview the problem](https://ryneex.github.io/Realtime-Cursor-Event/problem.html)

## Usage / Examples

First of all import the function inside your script

```js
import cursorEvent from "./cursorEvent.js";
```

### MouseMove event

You need to call the **Cursor** function and pass an object to it, it needs two properties, event type and a callback function, it will return the cursor position

```js
const parameter = {
    event: "mousemove",
    callback: (e) => {
        console.log(e); // it will log the cursor position every time it changes
    },
};

cursorEvent(parameter);
```

### MouseOver event

You need to call the **Cursor** function and pass an object to it, it needs three properties, event type, elem that the cursor should hover on and a callback function, it will return true or false when cursor is hovered over the element.

```js
const element = document.querySelector(".element");

const parameter = {
    event: "mouseover",
    elem: element, // elem is required this time
    callback: (e) => {
        /*this callback function will execute every time the cursors position changes
         * even when you scroll */
        console.log(e);
    },
};

cursorEvent(parameter);
```

## Demo

In this demo i solved the problem i mentioned above by using a little bit of javascript, try to hover over the div and scroll

```js
import cursor from "./cursorEvent.js";

const div = document.querySelector("div");
cursor({
    event: "mouseover",
    elem: div,
    callback: (e) => {
        if (e) {
            div.style.backgroundColor = "rgb(185, 185, 255)";
        } else {
            div.style.backgroundColor = "transparent";
        }
    },
});
```

[Preview the solution](https://ryneex.github.io/Realtime-Cursor-Event)