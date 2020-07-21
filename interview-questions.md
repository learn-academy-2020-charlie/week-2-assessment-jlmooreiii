# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: You woul duse the mtheod super() whne you want to import either components or methods from the parent class that the currect class derives from. It saves the developer time from having to retype code for multiple realted classes.

  Researched answer: Actually, super() only calls the parents constructors. You need super.method to call the parent's methods.



2. What is a virtual DOM?

  Your answer: The virtual DOM is basically the blank page that the react code renders to.

  Researched answer: I think the virtual DOM is what gioves React its ability to update only some elements at a time on the webpage. The virtualy DOM is like a soft, unrendered copy of the DOM. When a single elemet is changed, instead of reloading the entire DOM, like older JS framewokrs used to do, only the virtual DOM is changed. The virtual DOM is compared to actual DOM, and then only the chaged elements are updated. This is much faster than the older method. The analogy that the website gave me is that the virtual DOM is like a blueprint, while the DOM is like the physical building with its rooms. Instead of building a new building every time, you are just changing the blueprint, and then updating accordingly.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: You will need the HTML dive that your React code is rendered to. You need to import react and {Components}, declare class that extends components, have a render method, return, and then your JSX header tag and code. Finally, you will need a few lines of code that handles exporting your class to the domContainer. 

  Researched answer: After researching, it seems that it's common to not make stateless react components using the class style like we would for state components. But we have been using class style for both



4. What is JSX?

  Your answer: JSX is a coding language native to react. It essentially looks like a combination of HTML and JS.

  Researched answer: JSX stands for JavaScript XML and it allows fr us to write HTML in React. JSX allows you to avoid methods like createElement() and apendChild().



5. What is state in React?

  Your answer: State is the current rendition of the page. As the user continues to interact with smart components, the state of those components will update and be rendered on the screen.

  Researched answer: State is an aboject that determines how a component renders. An analogy is like how solid and liquid are two states to water. Same component, but diffent states.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I have no idea.

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods: Every compoennt in React has a lifecycle involving initialization, mounting, updating, then unmounting. Lifecycle methods help coordiante the transtions to these different stages.
- event.preventDefault(): This method keeps a component element from updating until a specified about of time. An example is a form. YOu don't want the page to rerender every time the user inserts a character. You don't want it to update until the user hits the submit button. Not all events are cancelable though. 
- DOM events: Example, a button click. They are events that happen to the DOM and are usually linked to a function. 
- React props: Similar to fucntion arguments in JS or attributes in HTML. 
- onChange: A DOM event in Readct that detects whenn the value of an input elemetn changes.
