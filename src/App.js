import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import './App.css'
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Person from './Components/Person';
import Navlink from './Components/Navlink';
function App() {
  return (
  <>
  <div className='App'>
{/* <Navlink/> */}
    <Router>
    <Header/>
    <Routes>

      {/* <Route path='/' element={<Home />}/> */}
      <Route path='/Home' element={<Home/>}/>
      <Route path='./Navlink' element={<Navlink/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Student' element={<Student/>}/>
    </Routes>
    </Router>
    <h2>Question 2</h2>
    <h3>How do you pass data from parent to child ?</h3>
<Person info="child"/>
<h2>Question-3</h2>
<h3>What is lazy loading in react ?</h3>
<p>Lazy loading is the practice of delaying the load or initialization od resources or objects,
<br />until, they are actually needed to improve the performance or save the resources.
The benefits of using lazy loading is that 
<br/>it loads the minimal code to the browser that will render the page.
<br/>Example:An example of image lazy-loading can be found on the popular publishing platform Medium, which loads lightweight placeholder images at page load, and replaces them with lazily-loaded images as they're scrolled into the viewport. An example of image lazy-loading in action.

Benefits: The benefits of lazy loading include: Reduces initial load time – Lazy loading a webpage reduces page weight, allowing for a quicker page load time. Bandwidth conservation – Lazy loading conserves bandwidth by delivering content to users only if it's requested.

<h2>Question-4</h2>
<h3>Difference b/w Stateful and stateless Component ?</h3>
<table border="1">
 
  <tr>
  <th>Stateful Components</th>
    <th>Stateless Components</th>
  </tr>

   

  <tr>
    <td>
      1. Stateful Components are those Components that holds some states.
    </td>
    <td>
      1. Stateful Components are those Components that holds no states.
    </td>
   
  </tr>
  <tr>
    <td>
      2. It has lifecycle methods such as Mounting,Unmounting and Updating.
    </td>
    <td>
      2. It has no lifecycle methods.
    </td>
  </tr>
    <tr>
      <td>
        3. Requires a server to save information about the session.
      </td>
      <td>
        3. It doesn't require a server to save information about the session.
      </td>
    </tr>
    <tr>
      <td>
        4. Stateful components because they implement logic and state.
      </td>
      <td>
      4.they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
      </td>
    </tr>
</table>

</p>
<h2>Question-5</h2>
<h3>What is the package name you are using for routing ?</h3>
<p>We are using three packages they are
<ol>
  <li>React-Router</li>
  <li>React-Router-Dom</li>
  <li>React-Router-Native</li>
</ol></p>
<h2>Question-6</h2>
<h3>How do you switch one component to another, Conditional Rendering ?</h3>
<ul>
  <li>
  link
  <br/>
  link  is used to manage the navigation and it worked as an anchor tag. 
  </li>

<li>
  Navlink
  <br/>
NavLink NavLink behaves the same as Link but in addition, it comes with a new attribute called “activeClassName” which helps us to add the class to the anchor tag when page url will match.
</li>


</ul>

  </div>
  </> 
  
  );
}

export default App;
