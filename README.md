![ReactToDO](public/ReactToDO.png)



# My Awesome Project
This is a Simple React To-Do list application that allows you to keep track of things within a list as well as delete and fetch Fake JSON that is coming from a REST API .

## How It's Made:
This application is made with React.

## Optimizations.
I would like to style this better probably use Bootstrap and actually use a npm package called Postmark and receive a email when onClick.


## Lessons Learned:

No matter what my experience level, being an engineer means continuously learning. Every time I build something I always have those *whoa this is awesome* or *ahh ha moment*. During this project, I learned generate random ids with a plug in called UUID.

I learned how to use Axios to make request like Fetch API. Axios is promise-based and I could take advantage of async and await for more readable asynchronous code. This allowed me to fetch To-Do from JSON placeholders API so I wouldn't have to hard code it. I use componentDidMount() to make my request which was the first time for me .

I also learned how to do inline style in this application.

```import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1> TodoList </h1>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;

```
 and other fundamentals stuff such as components, state, props, JSX, events, etc.


## portfolio:

**WEBSITE:** https:/johnfleurimond.com

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `npm start`
