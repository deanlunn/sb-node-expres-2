### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  * JSON Web Token
  
- What is the signature portion of the JWT?  What does it do?
  * It is a component that ensures the authenticity of the token.
 
- If a JWT is intercepted, can the attacker see what's inside the payload?
  * Yes, as it is using Base64URL which is reversible encoding.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  * As a middleware component we use authentication to verify a users identity to access routes within the site using special tokens as a means of a handshake.

- Compare and contrast unit, integration and end-to-end tests.
  * Unit testing is done to validate separate components within the code.
  * Integration testing is done to make sure that certain components work together.
  * End to End testing is done to validate the entire app as a whole.

- What is a mock? What are some things you would mock?
  * A mock is an object that imitates the nature of components within the code, it is used to test certain components without relying on full implementation of other components.

- What is continuous integration?
  * It is a process that integrates multiple code changes from multiple developers into a repository. The goal being to address issues as early as possible to alleviate bugs within the code.

- What is an environment variable and what are they used for?
  * It is a named object that contains information like configuration settings, system paths, credentials and other parameters.

- What is TDD? What are some benefits and drawbacks?
  * Test Driven Development, It can be used to write better test coverage so there are less bugs, it promotes better code design, leads to faster debugging, and helps ease the pain of refactoring and making changes. It does require more initial time invested in the beginning, it has quite the learning curve, developers can become overinvested in the testing phase and disregard other aspects of performance, it also requires an ongoing effort to keep the tests up to date with the code.

- What is the value of using JSONSchema for validation?
  * JSONSchema promotes data integrity, facilitates data exchange, enhances documentation, and improves the overall quality of JSON based systems.

- What are some ways to decide which code to test?
  * Business requirements, Complexity, Edge Cases, Customer feedback, Security, Code Coverage

- What does `RETURNING` do in SQL? When would you use it?
  * it is used to retrieve the value of an SQL statement, allowing you to specify which columns you want to retrieve and return the corresponding values as part of the result.

- What are some differences between Web Sockets and HTTP?
  * Web sockets allow for real time updates, and HTTP works off of request and response interactions. Web sockets are more flexible in their use, but as they are newer older systems may not support them.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  * Neither lol, but if I had to choose one, it would be Express, as its in the Javascript ecosystem. Flask was far easier to debug and fix as far as dependencies go for me, but Express was less prone to those kinds of errors, although when I did have errors in Express, I usually had a much harder time finding them and fixing them as I didn't know exactly where I was looking or what to look for. Although now that I have run thru some of the problems it will probably be more apparent to me as to where to look. Flask was just constant problems with every project, and the icing on the cake was Warbler not running properly because of the version of python being used, it ran, but it had odd errors with a newer version of Python, which i could never figure out, and simply downgrading was the only option. Thats probably one thing i despise most about any part of coding, new versions don't run older code, its like going back to 2002 where you buy a new gaming system that won't run your old games.