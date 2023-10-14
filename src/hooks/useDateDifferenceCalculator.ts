//useDateDifferenceCalculator.ts
import { useState } from 'react';

const useDateDifferenceCalculator = () => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [dateDifference, setDateDifference] = useState<number | null>(null);

    const calculateDifference = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diff = Math.abs(end.getTime() - start.getTime()) / (1000 * 3600 * 24);
        setDateDifference(diff);
    };

    return {
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        dateDifference,
        calculateDifference
    };
};

export default useDateDifferenceCalculator;
