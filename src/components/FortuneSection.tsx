'use client';
import React, {useEffect} from 'react';
import CrystalBall from "@/components/CrystalBall";
import ShareButton from "@/components/ShareButton";
import {useSearchParams} from "next/navigation";
import {usePrediction} from "@/context/PredictionContext";

const FortuneSection = () => {
    const serachParmas = useSearchParams();
    const { setPrediction } = usePrediction();

    useEffect(() => {
        const predictionParms = serachParmas.get('prediction');
        if (predictionParms) {
            setPrediction(decodeURIComponent(predictionParms).split(';'));
        }

        const urlWithoutParams = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutParams);
    }, [serachParmas, setPrediction]);

    return (
        <section className="flex flex-col gap-6 text-center mt-20">
            <div>
                <h1 className="text-4xl m-10">
                    🔮 Emoji Fortune Teller
                </h1>
            </div>

            <CrystalBall />

            <div>
                <ShareButton />
            </div>
        </section>
    );
};

export default FortuneSection;