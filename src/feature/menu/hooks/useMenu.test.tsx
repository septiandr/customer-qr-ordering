import { renderHook, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMenu } from './useMenu';
import { getMenu } from '../api/menu.api';
import React from 'react';

// Mock the API
jest.mock('../api/menu.api', () => ({
  getMenu: jest.fn(),
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

describe('useMenu Hook', () => {
  beforeEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it('should fetch menu successfully', async () => {
    const mockMenu = [{ id: 1, name: 'Food 1' }];
    (getMenu as jest.Mock).mockResolvedValue(mockMenu);

    const { result } = renderHook(() => useMenu('TABLE-1'), { wrapper });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockMenu);
    expect(getMenu).toHaveBeenCalledWith('TABLE-1');
  });

  it('should handle fetch error', async () => {
    (getMenu as jest.Mock).mockRejectedValue(new Error('Fetch failed'));

    const { result } = renderHook(() => useMenu('TABLE-1'), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
