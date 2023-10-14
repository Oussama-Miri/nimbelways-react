// DateInput.tsx
import React from 'react';

interface DateInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, value, onChange }) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
    id={label}
    type="date"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    />
    </div>
);
};

export default DateInput;
