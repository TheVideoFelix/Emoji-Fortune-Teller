
import FortuneSection from "@/components/FortuneSection";
import {Suspense} from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
        <Suspense>
            <FortuneSection />
        </Suspense>
    </main>
  );
}
