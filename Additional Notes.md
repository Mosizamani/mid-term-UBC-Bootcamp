Difficulties Encountered:

State Management for Notes: Managing the state for creating, editing, and deleting notes proved to be complex, especially when implementing real-time updates. The decision to use a more straightforward approach with vanilla JavaScript instead of a state management library added to the learning curve. (hard for me, still need to practise)

User Authentication: Implementing secure authentication with password hashing and managing user sessions required a deep dive into Passport.js and understanding middleware in Express.js. Debugging and handling redirects for authentication errors took longer than expected. (hard for me, still need to practise)

Cross-Origin Requests (CORS): Initially, there were issues with making API requests from the client-side code due to CORS restrictions. Setting up the CORS middleware properly was necessary to allow communication between the frontend and backend servers.

Dynamic CSS Loading: Implementing day and night modes required dynamically loading CSS files based on user preferences. This necessitated additional JavaScript logic and handling local storage to maintain user settings across sessions.

The reset password process was confusing for me. I still trying to find a way to solve the problem. 

The "Share" button presented some challenges. It was discovered that an email address, rather than a username, needed to be used. Furthermore, an HTML file had to be created, which the backend would send to the user's email address to facilitate a password reset. (hard for me, still need to practise)

Lessons Learned:

Importance of Error Handling: Thorough error handling on both the client and server sides is crucial. This prevents the app from crashing and provides a smoother user experience.

Understanding Async/Await: Properly handling asynchronous code with async and await in JavaScript is essential, especially when working with APIs and databases. It significantly simplified the code structure and made debugging easier.

Session Management: Learning how to properly handle user sessions, especially in terms of security (e.g., cookie settings, session expiration) and user experience (e.g., maintaining session state across different parts of the app), was invaluable.

Responsive Design Considerations: Implementing a responsive grid layout for notes was a practical learning experience in CSS Grid and Flexbox. Ensuring that the app was accessible and user-friendly on different devices was a key focus.

By overcoming these challenges, I gained a deeper understanding of full-stack development, particularly with Node.js and Express.js, and enhanced my ability to create robust, user-friendly applications.

I need to learn more!
