import logo from './logo.svg';
import React from "react";
import './App.css';



/*when functions are defined here; they need to be used in the return section*/

// App Section
const App = () => {
//inside the app component
  const stories = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];
  /*The search term is needed in App to filter the list before passing it to the List
   *component as props
   *lift state up from Search to App component to share the state with more components*/
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function(story) {
    return story.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories} />
    </div>
  );
};


/* function returns an array with two values, initial input in hook is empty string
* The first value (searchTerm) represents the current state;
* the second value is a function to update this state (setSearchTerm)*/
//FUNCTION DEFINITION used in the app part
//props are only passed downwards
const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };
  return (
    <div>
    <label htmlFor="search">Search: </label>
    <input
        id="search"
        type="text"
        value={props.search}
        onChange={props.onSearch} />
    </div>
  );
};
/*Function for a list iteration
* variable stories is called stories for the  app component
* access a list from the props object without having a global variable outside all functions*/
const List = props =>
  props.list.map(item => (
    <div key={item.objectID}>
    <span>
    <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    </div>
  ));

/*Curly brackets cna be left out when the body does not perform tasks but only displays
// with block body
count => {
// perform any task in between
return count + 1;
}
// with concise body
count =>
count + 1;
*/


export default App;
