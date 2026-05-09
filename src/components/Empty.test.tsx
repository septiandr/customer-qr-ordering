import React from 'react';
import { render } from '@testing-library/react-native';
import { Empty } from './Empty';

describe('Empty Component', () => {
  it('renders correctly with default text', () => {
    const { getByText } = render(<Empty />);
    expect(getByText('Data not found')).toBeTruthy();
  });

  it('renders correctly with custom text', () => {
    const { getByText } = render(<Empty text="No items here" />);
    expect(getByText('No items here')).toBeTruthy();
  });
});
