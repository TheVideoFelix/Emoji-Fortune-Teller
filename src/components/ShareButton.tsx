'use client';
import React from 'react';
import {usePrediction} from "@/context/PredictionContext";

const ShareButton = () => {
    const { prediction } = usePrediction();

    const handelShare = async () => {
        const text = `🔮✨ My future ${prediction.join(' ')}.`
        const encodeEmoji = encodeURIComponent(prediction.join(';'));

        try {
            await navigator.share({
                title: 'Emoji fortune!',
                text,
                url: `${window.location.href}?prediction=${encodeEmoji}`
            })
        } catch {
            await navigator.clipboard.writeText(text);
            alert('Copied to clipboard!');
        }
    };

    return (
        <button className="bg-purple-700 p-5 px-10 text-xl rounded-full shadow-btn-share"
        onClick={handelShare}>
            Share fortune!
        </button>
    );
};

export default ShareButton;