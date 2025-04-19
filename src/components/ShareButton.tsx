'use client';
import React from 'react';

interface ShareButtonPros {
    prediction: string[]
}

const ShareButton = ({ prediction }: ShareButtonPros) => {
    const handelShare = async () => {
        const text = `🔮✨ My future ${prediction.join(' ')}.`
        
        try {
            await navigator.share({
                title: 'Emoji fortune!',
                text,
                url: window.location.href
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