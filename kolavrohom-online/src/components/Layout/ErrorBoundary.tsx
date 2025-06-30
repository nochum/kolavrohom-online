import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Optionally log error to an error reporting service
    // console.error(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', color: '#b00020', margin: '2rem' }}>
          <h2>Something went wrong.</h2>
          <div style={{ marginBottom: '1rem' }}>{this.state.error?.message || 'An unexpected error occurred.'}</div>
          <button onClick={this.handleRetry} style={{ background: '#dbcdc0', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontSize: '1rem', cursor: 'pointer' }} aria-label="Retry">Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 