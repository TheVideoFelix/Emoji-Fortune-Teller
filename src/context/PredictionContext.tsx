'use client';
import React, {createContext, useContext, useState} from 'react';

interface PredictionContextType {
    prediction: string[];
    setPrediction: (newPrediction: string[]) => void;
}

const PredictionContext = createContext<PredictionContextType | undefined>(undefined);

export const PredictionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [prediction, setPrediction] = useState<string[]>([]);
    return (
        <PredictionContext.Provider value={{ prediction, setPrediction }}>
            { children }
        </PredictionContext.Provider>
    );
};

export const usePrediction = () => {
    const context = useContext(PredictionContext);
    if (!context) {
        throw new Error("usePrediction must be used within a PredictionProvider");
    }
    return context;
};