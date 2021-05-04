const cars = [
  {
    id: 1,
    model: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    sellerId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    model: "React: The Big Picture",
    slug: "react-big-picture",
    sellerId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    model: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    sellerId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    model: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    sellerId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    model: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    sellerId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    model: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    sellerId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    model: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    sellerId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    model: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    sellerId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    model: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    sellerId: 1,
    category: "Career"
  },
  {
    id: 10,
    model: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    sellerId: 1,
    category: "HTML5"
  }
];

const sellers = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCar = {
  id: null,
  model: "",
  sellerId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCar,
  cars,
  sellers
};
