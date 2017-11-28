import * as React from 'react';
import GiphyImage from './GiphyImage';

interface BeerListProps {
  auth: any;
}

class BeerList extends React.Component<BeerListProps, any> {
  constructor(props: BeerListProps) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false,
      error: ''
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});

    try {
      const response = await fetch('http://localhost:8080/good-beers', {
        headers: {
          Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
      }
    });
      const data = await response.json();
      this.setState({beers: data, isLoading: false});
    } catch (err) {
      this.setState({error: err});
    }
  }

  render() {
    const {beers, isLoading, error} = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    if (error.length > 0) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <h2>Beer List</h2>
        {beers.map((beer: any) =>
          <div key={beer.id}>
            {beer.name}<br/>
            <GiphyImage name={beer.name}/>
          </div>
          )}
      </div>
    );
  }
}

export default BeerList;