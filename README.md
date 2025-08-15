# React Native Coding Assignments

A collection of beginner-to-intermediate **React Native** exercises designed to strengthen core concepts such as **state management**, **props**, **event handling**, **styling**, and **performance optimization**.

---

## 📋 Assignments

### 1. Simple Counter App
**Problem Statement**  
Create a screen with:
- A number displayed in the center.
- Two buttons: **+** and **-**.
- Tapping the buttons increments or decrements the count.

**Concepts Practiced**  
- `useState`  
- Handling events  
- Basic styling  

---

### 2. Personalized Greeting Component
**Problem Statement**  
Build a `GreetingCard` component that:
- Takes **name** and **message** as props.
- Displays them inside a styled card.
- Render 3 `GreetingCard` components with different props.

**Concepts Practiced**  
- Props  
- Reusable components  
- JSX  

---

### 3. Toggle Visibility
**Problem Statement**  
Create a button that toggles the visibility of a text block:
- Button text alternates between “Show Details” and “Hide Details.”
- When visible, show some sample description text.

**Concepts Practiced**  
- `useState`  
- Conditional rendering  

---

### 4. Timer Component
**Problem Statement**  
Create a timer that:
- Starts counting seconds when the component mounts.
- Displays the elapsed time.
- Stops counting when the component unmounts.

**Concepts Practiced**  
- `useEffect`  
- Cleanup in `useEffect`  

---

### 5. Input Handling
**Problem Statement**  
Build a screen with:
- A `TextInput` for entering a name.
- A button to submit.
- When submitted, display: **"Hello, [name]!"**

**Concepts Practiced**  
- `useState` for input  
- Controlled components  

---

### 6. Todo List
**Problem Statement**  
Create a simple todo list:
- `TextInput` to enter a todo item.
- Button to add to the list.
- Display the list below.
- Each item should have a “Delete” button.

**Concepts Practiced**  
- `useState` with arrays  
- Mapping over data  
- Handling multiple actions  

---

### 7. Responsive Card Grid
**Problem Statement**  
Create a screen showing **6 cards** in a grid layout:
- Each card has a title and description.
- Cards wrap responsively based on screen width.

**Concepts Practiced**  
- Flexbox styling  
- Arrays of styles  

---

### 8. Memoized Component
**Problem Statement**  
Build a parent component that:
- Contains a counter and a text input.
- Passes props to a child component that displays the text.
- Uses `React.memo` to prevent the child from re-rendering when only the counter changes.

**Concepts Practiced**  
- `React.memo`  
- Props comparison  
- Performance optimization  

---

### 9. Custom Hook (`useFetch`)
**Problem Statement**  
Write a custom hook `useFetch` that:
- Takes a URL.
- Fetches data when mounted.
- Returns `loading`, `data`, and `error`.

**Usage Example**  
Fetch and display users from:  
`https://jsonplaceholder.typicode.com/users`

**Concepts Practiced**  
- Custom hooks  
- `useEffect` for side effects  
- API calls  

---

### 10. Dark Mode Toggle
**Problem Statement**  
Create a screen with:
- A toggle switch to turn dark mode on/off.
- Change background and text colors based on the toggle.

**Concepts Practiced**  
- `useState`  
- Dynamic styles  

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [React Native CLI](https://reactnative.dev/docs/environment-setup) or Expo installed
- Android Studio or Xcode set up for mobile development

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/react-native-coding-assignments.git

# Navigate to project folder
cd react-native-coding-assignments

# Install dependencies
npm install
# or
yarn install
```

### Running the App
```bash
# For iOS
npx react-native run-ios

# For Android
npx react-native run-android
```

---

## 🛠 Tech Stack
- **React Native** – Mobile UI framework
- **JavaScript (ES6+)** – Language
- **Expo** *(optional)* – Simplified development environment

---

## 📚 Learning Outcomes
By completing these assignments, you'll gain experience in:
- Component creation and composition
- State and props handling
- Event binding
- Side effects and cleanup
- Styling with Flexbox
- API integration
- Performance optimization with memoization

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
