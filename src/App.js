import logo from './logo.svg';
import React from "react";
import './App.css';
import { Button } from '@material-ui/core';

//Documentation - Javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
//Documentation - React
// https://reactjs.org/docs/hello-world.html

/*when functions are defined here; they need to be used in the return section*/
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
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
   *lift state up from Search to App component to share the state with more components
   * Hooks dont re-initialize again, it takes the recent value (current state) */
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
        <head>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </head>
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

/* Component Composition
* instead of label prop, use children to have access to InputWithLabel component
* that can render everything that is passed down */
const InputWithLabel = ({
    id,
    value,
    type = 'text',
    onInputChange,
    children,
    }) => (
    <>
        <label htmlFor={id}>{children}</label>
        &nbsp;

    <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
    />
    </>
    );

/*Function for a list iteration
* variable stories is called stories for the  app component
* access a list from the props object without having a global variable outside all functions*/
  const List = ({ list }) =>
    list.map(item => <Item key={item.objectID} item={item} />);

  const Item = ({ item }) => (
    <div>
            <span>
            <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
    </div>
    );


/*Curly brackets can be left out when the body does not perform tasks but only displays
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
