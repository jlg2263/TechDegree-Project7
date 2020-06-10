import React, {Component} from 'react';
// Import app components
import Photo from './Photo';
import NoResults from './NoResults';

// Create PicResults class component and export
export default class PhotoResults extends Component
{
    // Invoked immediately after a component is added to the DOM
    // to create the request for external data to be loaded
    componentDidMount()
    {
        this.props.getResults(this.props.match.params.query);
    }

    // Invoked immediately after updating occurs
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    componentDidUpdate(prevProps)
    {
        // Use conditional statement to commpare current and previous state
        if (this.props.match.params.query !== prevProps.match.params.query)
        {
            this.props.getResults(this.props.match.params.query);
        }
    }

    // Render picture results component
    render()
    {
        // Declare local variable to store data from props
        let results = this.props.data;
        let images;

        // Use conditional rendering dependent on results array
        // Use map method to iterate over array to return a pic 
        // component for each pic/object in the array
        if (results.length > 0)
        {
            images = results.map(image => 
                <Photo 
                    url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                    key={image.id}
                    alt={image.title}
                />
            );
        }
        
        // If not loading and no results returned 
        if (results.length === 0)
        {
            images = <NoResults />;
        }

        // Return the list/array of objects
        return (
            <div className="photo-container">
                <h2>Results for {this.props.match.params.query}</h2>      
                {this.props.isLoading ? <p>Loading...</p> :
                <ul>
                    {images}

                </ul>
                }
            </div>
        );
    }
}