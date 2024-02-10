const cursorEvents = ({ event, elem, callback }) => {
    let cursor = { x: 0, y: 0 }; // stores cursor position within window
    let totalCursor = { x: 0, y: 0 }; // stores cursor position including scrollY
    let isMouseOverElement = false; // cursor is on top of given element

    // Updates cursor position
    document.addEventListener("mousemove", (e) => {
        cursor = { x: e.x, y: e.y };
        totalCursor = { x: scrollX + e.x, y: scrollY + e.y };
        handleEvent();
    });

    // Updates cursor position
    document.addEventListener("scroll", () => {
        totalCursor = { x: scrollX + cursor.x, y: scrollY + cursor.y };
        handleEvent();
    });

    // This function is used to call the callback function
    function handleEvent() {
        // checks the type of event and based on that it calls the callback function
        switch (event) {
            case "mousemove":
                callback(totalCursor);
                break;
            case "mouseover":
                // cheking if mouse is inside the element
                if (elem.offsetTop < totalCursor.y && elem.offsetTop + elem.offsetHeight > totalCursor.y && elem.offsetLeft < totalCursor.x && elem.offsetLeft + elem.offsetWidth > totalCursor.x) {
                    // to prevent calling the callback function multiple times, I'm checking the last stored value
                    isMouseOverElement == false && (callback(true), (isMouseOverElement = true));
                } else {
                    isMouseOverElement == true && (callback(false), (isMouseOverElement = false));
                }
                break;
            default:
                console.error("Event type isn't specified, have you forgot to add event property ?");
        }
    }
};