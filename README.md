# React Calculator

A simple React calculator that maintains a running result while applying addition, subtraction, multiplication, and division to a single input value. It includes separate controls to clear the input and reset the result.

## Requirements

- Node.js and npm

## Run locally

```bash
npm install
npm start
```

The development server normally opens at http://localhost:3000.

## Included functionality

- React `useState` to maintain the running result
- React `useRef` to read and clear the input field
- Separate `plus`, `minus`, `times`, and `divide` handlers
- Division-by-zero and empty-input validation
- Separate Reset Input and Reset Result buttons
