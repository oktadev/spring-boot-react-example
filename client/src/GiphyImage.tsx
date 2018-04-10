import * as React from 'react';

interface GiphyImageProps {
  name: string;
}

interface GiphyImageState {
  giphyUrl: string;
  isLoading: boolean;
}

class GiphyImage extends React.Component<GiphyImageProps, GiphyImageState> {
  constructor(props: GiphyImageProps) {
    super(props);

    this.state = {
      giphyUrl: '',
      isLoading: false
    };
  }

  componentDidMount() {
    const giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';

    fetch(giphyApi + this.props.name)
      .then(response => response.json())
      .then(response => {
        if (response.data.length > 0) {
          this.setState({giphyUrl: response.data[0].images.original.url});
        } else {
          // dancing cat for no images found
          this.setState({giphyUrl: '//media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'});
        }
        this.setState({isLoading: false});
      });
  }

  render() {
    const {giphyUrl, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading image...</p>;
    }

    return (
      <img src={giphyUrl} alt={this.props.name} width="200"/>
    );
  }
}

export default GiphyImage;