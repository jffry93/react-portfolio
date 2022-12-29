## Instructions for utils folder 🪛

This folder is for storing all utility functions such as formatters

Only store pure functions in this folder since if a utility function has side effects then it is most likely not just a simple utility function

### Zero closure over here 💔

ex. function calculateTax(price, taxRate) {
return price \* taxRate
}
