//CalculateButton.tsx
import React from 'react';
import { CalculateButtonProps } from '../utils/types';

const CalculateButton: React.FC<CalculateButtonProps> = ({ calculateDifference }) => {
    return (
        <button onClick={calculateDifference}>
            Calculate
            </button>
    );
};

export default CalculateButton;
