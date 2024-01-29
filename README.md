
# Realtime Cursor Position

This project solves a common problem a lot of developer gets when creating hover animations. this project tries to solve that problem. I made a function that listens for mouse movement and scroll and then calls a callback function with current cursor position. let's go ahead and see what kind of problem it can solve.
## Problem
hover over the divs. when it becomes blue, try to scroll the site, you will see that it takes some time for the cursor position to update since it is intentinal for high performance.
