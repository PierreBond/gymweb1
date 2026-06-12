import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
          <div className="text-center max-w-md">
            <h2 className="font-condensed text-4xl md:text-6xl text-primary-container uppercase italic mb-4">
              Something Went Wrong
            </h2>
            <p className="font-body text-white/60 text-lg mb-8">
              We encountered an unexpected error. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-black font-condensed text-xl px-8 py-3 hover:bg-primary-container hover:text-white transition-all duration-300"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left text-xs text-white/40 font-mono max-h-64 overflow-auto">
                <summary className="cursor-pointer mb-2">Error Details (Development)</summary>
                <pre>{this.state.error.toString()}</pre>
                {this.state.errorInfo && (
                  <pre>{this.state.errorInfo.componentStack}</pre>
                )}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;