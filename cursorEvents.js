const cursorEvents = ({ event, elem, callback }) => {
    // Creating cursor variable that gets updated every time
    // the cursor position changes, it's only based on window.
    let cursor = { x: 0, y: 0 };

    // It's used to store full cursor
    // position including scrolling height, not based on only window
    let totalCursor = { x: 0, y: 0 };

    // This is used to store boolean value, it becomes true when
    // cursor is on top of given element
    let isMouseOverElement = false;

    // this listener listens for mousemove and updates the value
    // of cursor and totalCursor and then calls sendNewCursorPosition
    // function to run the callback function with the new cursor position
    document.addEventListener("mousemove", (e) => {
        cursor = { x: e.x, y: e.y };
        totalCursor = { x: scrollX + e.x, y: scrollY + e.y };
        handleEvent();
    });

    // this listener listens for scroll and calls sendNewCursorPosition
    // function to run the callback function with the new cursor position
    document.addEventListener("scroll", () => {
        totalCursor = { x: scrollX + cursor.x, y: scrollY + cursor.y };
        handleEvent();
    });

    // This function is used to call the callback function
    function handleEvent() {
        // checks the type of event and based on that it calls the callback function
        switch (event) {
            // it calls the callback function with totalCursor position
            case "mousemove":
                callback(totalCursor);
                break;
            // it calls the callback function when cursor is hovered over the element and not hovered
            case "mouseover":
                // this condition is checking if cursor is on top of the specified element
                if (elem.offsetTop < totalCursor.y && elem.offsetTop + elem.offsetHeight > totalCursor.y && elem.offsetLeft < totalCursor.x && elem.offsetLeft + elem.offsetWidth > totalCursor.x) {
                    // to prevent calling the callback function multiple times, I'm checking the last stored
                    // value of isMouseOverElement, if it's not the same then updating it's value and calling the
                    // callback function, else not updating it's value since it will be the same value
                    isMouseOverElement == false && (callback(true), (isMouseOverElement = true));
                } else {
                    isMouseOverElement == true && (callback(false), (isMouseOverElement = false));
                }
                break;
            default:
                throw new Error("Event type isn't specified, have you forgot to add event property ?");
        }
    }
};

export default cursorEvents;