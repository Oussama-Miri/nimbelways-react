//CalculateButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalculateButton from '../components/CalculateButton';

test('it should call the calculateDifference function when clicked', () => {
    const mockCalculateDifference = jest.fn();

    render(<CalculateButton calculateDifference={mockCalculateDifference} />);

    const button = screen.getByText('Calculate');
    fireEvent.click(button);

    expect(mockCalculateDifference).toHaveBeenCalledTimes(1);
});
