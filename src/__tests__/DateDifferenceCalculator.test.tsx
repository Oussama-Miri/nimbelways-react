//CalculateButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DateDifferenceCalculator from '../components/DateDifferenceCalculator';

describe('DateDifferenceCalculator', () => {
    it('renders DateInput and CalculateButton components', () => {
        render(<DateDifferenceCalculator />);
        expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
        expect(screen.getByText(/calculate/i)).toBeInTheDocument();
    });

    it('shows date difference when CalculateButton is clicked', () => {
        render(<DateDifferenceCalculator />);

        fireEvent.change(screen.getByLabelText(/start date/i), { target: { value: '2022-01-01' } });
        fireEvent.change(screen.getByLabelText(/end date/i), { target: { value: '2022-01-10' } });
        fireEvent.click(screen.getByText(/calculate/i));

        // Assertion
        expect(screen.getByText(/difference: 9 days/i)).toBeInTheDocument();
    });
});
