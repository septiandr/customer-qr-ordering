import { useTableStore } from './table.store';

describe('Table Store', () => {
  beforeEach(() => {
    useTableStore.getState().clearTable();
  });

  it('should start with null currentTable', () => {
    const state = useTableStore.getState();
    expect(state.currentTable).toBeNull();
  });

  it('should set the table ID', () => {
    useTableStore.getState().setTable('TABLE-123');
    const state = useTableStore.getState();
    expect(state.currentTable).toBe('TABLE-123');
  });

  it('should clear the table ID', () => {
    useTableStore.getState().setTable('TABLE-123');
    useTableStore.getState().clearTable();
    const state = useTableStore.getState();
    expect(state.currentTable).toBeNull();
  });
});
