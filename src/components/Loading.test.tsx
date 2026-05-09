import React from 'react';
import { render } from '@testing-library/react-native';
import { Loading } from './Loading';

describe('Loading Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Loading />);
    expect(getByText('Loading...')).toBeTruthy();
  });
});
