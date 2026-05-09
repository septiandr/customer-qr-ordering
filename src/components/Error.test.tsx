import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ErrorComponent } from './Error';

describe('ErrorComponent', () => {
  it('renders correctly with default text', () => {
    const onRetry = jest.fn();
    const { getByText } = render(<ErrorComponent onRetry={onRetry} />);
    
    expect(getByText('Failed to load data')).toBeTruthy();
    expect(getByText('Retry')).toBeTruthy();
  });

  it('renders correctly with custom text', () => {
    const onRetry = jest.fn();
    const { getByText } = render(<ErrorComponent onRetry={onRetry} text="Custom error" />);
    
    expect(getByText('Custom error')).toBeTruthy();
  });

  it('calls onRetry when retry button is pressed', () => {
    const onRetry = jest.fn();
    const { getByText } = render(<ErrorComponent onRetry={onRetry} />);
    
    const retryButton = getByText('Retry');
    fireEvent.press(retryButton);
    
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
