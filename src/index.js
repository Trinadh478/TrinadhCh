// Create a new component. This component should produce some HTML


//We cannot make reference to variales which are in other files or folders
// because of zero contact. So to access them we need to import the
//Components. Here it is React from react library
//Transpiler will take care of access to React based on the import statement

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//Youtube API key

const API_KEY = 'AIzaSyDfFVgqDOUSyiRHMyEztwpJL9xh-S-bqfw';

const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
	); // JSX
}
//Refer notes to explain why we use App and container arguments inside the DOM parenthesis 
ReactDOM.render(<App/>, document.querySelector('.container')); // Render the element to the DOM

// Take this component's generated HTML and put it
//on the page (in the DOM)

// Above code from ES6 to ES 5 converted code

//var App = function App() {
//	return React.createElement(
//		"div",
//		null,
//		"Hi!"
//	);
//};