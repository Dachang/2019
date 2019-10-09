import React, { PureComponent } from 'react';

export default class ProgressiveImage extends PureComponent {
    state = {
      currentImage: this.props.preview,
      loading: true,
    }
  
    componentDidMount() {
      this.fetchImage(this.props.image)
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.image !== this.props.image) {
        this.setState({ currentImage: nextProps.preview, loading: true }, () => {
          this.fetchImage(nextProps.image)
        })
      }
    }
  
    componentWillUnmount() {
      if (this.loadingImage) {
        this.loadingImage.onload = null
      }
    }
  
    fetchImage = src => {
      const image = new Image()
      image.onload = () => this.setState({ currentImage: this.loadingImage.src, loading: false })
      image.src = src
      this.loadingImage = image
    }
  
    style = loading => {
      return {
        transition: '0.3s filter linear, 250ms transform cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        filter: `${loading ? 'blur(50px)' : ''}`,
      }
    }
  
    render() {
      const { currentImage, loading } = this.state
      const { alt } = this.props.altName
      return <img style={this.style(loading)} src={currentImage} alt={alt} className={this.props.className}/>
    }
  }