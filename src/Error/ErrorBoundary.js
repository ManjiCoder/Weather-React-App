import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      this.state = { error: '' };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({error: error})
      // You can also log the error to an error reporting service
      console.log(error);
      console.log(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1 className="text-center text-white capitalize text-3xl pt-16 h-screen bg-purple-500" >Something went wrong. {this.setState.error}</h1>;
      }
  
      return this.props.children; 
    }
  }