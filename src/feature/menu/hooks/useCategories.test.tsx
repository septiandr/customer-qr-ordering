import { renderHook, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCategories } from './useCategories';
import { getCategories } from '../api/menu.api';
import React from 'react';

// Mock the API
jest.mock('../api/menu.api', () => ({
  getCategories: jest.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useCategories Hook', () => {
  beforeEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it('should fetch categories successfully', async () => {
    const mockCategories = [{ id: 1, name: 'Cat 1' }];
    (getCategories as jest.Mock).mockResolvedValue(mockCategories);

    const { result } = renderHook(() => useCategories(), { wrapper });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockCategories);
    expect(getCategories).toHaveBeenCalled();
  });
});
