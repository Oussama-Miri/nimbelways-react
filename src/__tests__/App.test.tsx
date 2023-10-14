//App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Date Difference Calculator/i)).toBeInTheDocument();
  });

  it('renders DateDifferenceCalculator component', () => {
    render(<App />);
    // Assuming the DateDifferenceCalculator renders a label with text "Start Date"
    expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
    // Assuming the DateDifferenceCalculator renders a label with text "End Date"
    expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
    // Assuming the DateDifferenceCalculator renders a button with text "Calculate"
    expect(screen.getByText(/calculate/i)).toBeInTheDocument();
  });
});
