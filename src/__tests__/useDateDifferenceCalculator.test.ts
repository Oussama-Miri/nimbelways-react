// useDateDifferenceCalculator.test.ts
import { act, renderHook } from '@testing-library/react-hooks';
import useDateDifferenceCalculator from '../hooks/useDateDifferenceCalculator';

describe('useDateDifferenceCalculator', () => {
    it('should correctly calculate the difference between two dates', () => {
        const { result } = renderHook(() => useDateDifferenceCalculator());

        // Initially, dateDifference should be null
        expect(result.current.dateDifference).toBeNull();

        // Set start and end dates
        act(() => {
            result.current.setStartDate('2022-01-01');
            result.current.setEndDate('2022-01-10');
        });

        // Calculate the difference
        act(() => {
            result.current.calculateDifference();
        });

        // The difference between 2022-01-01 and 2022-01-10 should be 9 days
        expect(result.current.dateDifference).toBe(9);
    });
});
