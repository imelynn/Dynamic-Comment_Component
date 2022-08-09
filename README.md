# Dynamic-Comment_Component
Simple Dynamic Custom Element

In this assignment, you’ll be enhancing last week’s assignment to let you dynamically add comments! You’ll practice using forms and adding elements to the page with JavaScript to create a comment form. You’ll coordinate this using a state manager: a tool that controls how an application is displayed based on a given context. Changing the context, in this case adding a comment in the form, should change the application, in this case display a new comment on the page. Applications use state managers so every change that may happen to every connected component doesn’t need to be individually connected; instead they run through the state manager like an air traffic controller at an airport.


To complete the assignment, please do the following:
1. Create a new local project that uses Vite, Prettier, and ESLint
2. Create a branch from last week’s assignment for this week’s work
3. Update the page to display an image and add a comment form. The comment form should include:
     a. A name, email address, and large body input
     b. A checkbox to agree to have the comment posted
     c. A submit button
4. All three comment fields should be required and be valid before being submitted
5. When submitted, they should be displayed using a reusable comment component, that also includes the time and date the comment was submitted
6. Comments should be managed by a state manager; whenever a new comment is added, it should trigger the state manager that then updates the displayed comments on the site
7. Comments should always be displayed in the order they were submitted
8.The HTML, CSS, and JavaScript for the web page should be separate files. Use JavaScript module syntax (ES Modules) for your JavaScript. HTML and CSS defined as part of a custom element do not need to be in a separate file.
9. Submit your code by pushing it to GitHub, ensuring that there are no Prettier or ESLint errors
