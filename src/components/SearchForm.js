import React, {Component} from 'react';

// Used to get access to history objects properties and the
// closest route's match
// https://reacttraining.com/react-router/core/api
import {withRouter} from 'react-router-dom';

// Create SearchForm class component
class SearchForm extends Component
{
    // Initialize local state of component, 
    // creating a controlled component
    state = 
    {
        searchText: ''
    }

    // Function/method used to change the state of 
    // searchText field with user input
    onSearchChange = (e) =>
    {
        this.setState({searchText: e.target.value});
    }

    // Function/method used to handle user form submit
    // after text is entered in searchText field
    handleSubmit = (e) =>
    {
        // Prevent browser reload from posting a request back to server
        e.preventDefault();

        // Set query value to a variable for path
        let searched = this.query.value;
        let path = `/search/${searched}`;

        // Push a new entry into the history stack to redirect to another route
        this.props.history.push(path);

        // Reset searchText field after form submit
        e.currentTarget.reset();
    }

    // Render searchForm component
    render()
    {
        return (
            <form className="search-form" onSubmit={this.handleSubmit} >
                {/* Use ref to access the value of the input field,
                and refs allow you to get direct access to a DOM element,
                and you dont want a state that is dependent on another state.
                The ref attribute takes a callback function when used on an HTML element. */}
                <input 
                    type="search"
                    name="search"  
                    onChange={this.onSearchChange}
                    ref={(input) => this.query = input}
                    placeholder="Search..." />
                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
          </form>                  
        );
    }
}

// Export SearchForm component withRouter
export default withRouter (SearchForm);