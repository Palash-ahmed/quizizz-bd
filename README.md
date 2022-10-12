<h1>React is a JavaScript library for building user interfaces.</h1>

   <p> Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.</p>
   <p> Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.</P>
   <p> Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
    <p></p>

<h1>Quizizz-cheat</h1>

<h3>There are two methods for retrieving answers.</h3>

   <p> Fetching Quizizz API </p>
    Sending answers as someone else (old method)

<h1>You can load this script automatically using a browser extension.</h1>

   <h3> Using Tampermonkey </h3>

Methods
Fetching Quizizz API

<h3>It should work in Test and Classic mode.</h3>

    Join Quiz
    Open console and paste this

<p>fetch("https://raw.githubusercontent.com/gbaranski/quizizz-cheat/master/dist/bundle.js")
.then((res) => res.text()
.then((t) => eval(t)))</p>

    You can now close the console. The good answers should be highlighted by background opacity.

Sending answers as someone else

An alternative method is more invasive. Instead of fetching Quizizz API, it sends a random answer to a current question as a different user (consuming his answer); as a response, Quizizz returns a valid answer, which is then displayed to the user.

    Join quiz, wait for first question, and open console
    Paste this code to the console

fetch("https://raw.githubusercontent.com/gbaranski/quizizz-cheat/oldmethod/dist/bundle.js")
.then((res) => res.text()
.then((t) => eval(t)))

    Enter the user name of any other player (the user won't get points even if they sent a valid answer).
    Go to step 2

Load automatically using Tampermonkey

    Install the browser extension on https://www.tampermonkey.net/
    Create a new user script and paste the contents of scripts/tampermonkey-alternative-method.js
    The script should now be automatically loaded every time you enter a quizizz.

As we can see on this screenshot, the answer www.quizizz.com has the highest opacity, indicating a valid answer. 
