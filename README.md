# Hello World
```js
const getCursorPosition = (callback) => {
    // Creating an empty variable that gets updated every time
    // the cursor position changes or during scrolling
    let cursorX = null;
    let cursorY = null;

    // this listener listens for mouse movement and updates the value
    // of cursorX and cursorY and then calls sendNewCursorPosition
    // function to run the callback function with the new cursor position
    document.addEventListener("mousemove", (e) => {
        cursorX = e.x;
        cursorY = e.y;
        sendNewCursorPosition();
    });

    // this listener listens for scroll and calls sendNewCursorPosition
    // function to run the callback function with the new cursor position
    document.addEventListener("scroll", sendNewCursorPosition);

    // This function is used to calculate the cursor height and
    // call the callback function with total heigth of cursor position including scroll
    function sendNewCursorPosition() {
        const cursor = {
            x: cursorX || 0,
            // calculates the total height of cursor including scroll position
            y: window.scrollY + cursorY || 0,
        };
        callback(cursor);
    }
};

export default getCursorPosition
```