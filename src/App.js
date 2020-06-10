import React, {Component} from 'react';
// Import for routing jsx
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// Import axios to fetch data from flickr
import axios from 'axios';

// Import app components
import Header from './components/Header';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoResults from './components/PhotoResults';
import Error from './components/Error';

// Import apikey from config file
import apiKey from './Config';

// Create App class component and export
export default class App extends Component 
{
  // Called automatically to initialize a local state of component
  constructor()
  {
    super();
    this.state =
    {
      images: [],
      loading: true
    };
  }

  // Function/method used to fetch data and updates
  // the pics state when called
  performSearch = (query = 'soccer') =>
  {
    // Set state
    this.setState({
      images: [],
      loading: true
    });

    // Use url from flickr api that returns a api key
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response =>
      {
        this.setState({
          images: response.data.photos.photo,
          loading: false,
          query: query
        });
      })
      .catch(error =>
      {
        console.log('Failed to load resource: Issue fetching and parsing data', error);
      });
  }

  // Render main app/page component
  render()
  {
    return (
      <Router>
        <div className="container">
          <Header />
          <SearchForm onSearch={this.performSearch} />
          <Nav navSearch={this.performSearch} />

          {/* Write routes here... */}
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/soccer" />} />
            <Route path="/search/:query" render={({match}) => 
            (
              <PhotoResults 
                data={this.state.images} 
                match={match}
                getResults={this.performSearch}
                isLoading={this.state.loading}
                /> 
            )} 
            />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}