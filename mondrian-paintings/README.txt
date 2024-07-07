In this example, we will learn a fun technique: 

# Recursion

Recursion is a way to break drawing a shape into smaller, nested copies of itself. You do this by creating a function that describes the shape you want covering the whole canvas - then, within the function itself, you have it call itself with smaller widths and heights.

In this example, the `partition()` function illustrates recursion. `partition()` either produces a square, or makes more calls to `partition()`, one to cover the left and one to cover the right. Because `partition()` can randomly decide when to do this, it allows for interesting shapes to emerge. 