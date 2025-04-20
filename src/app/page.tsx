import ShareButton from "@/components/ShareButton";
import CrystalBall from "@/components/CrystalBall";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <section className="flex flex-col gap-6 text-center mt-20">
          <div>
              <h1 className="text-4xl m-10">
                  🔮 Emoji Fortune Teller
              </h1>
          </div>

          <CrystalBall />

          <div>
              <ShareButton prediction={['🔮', '🔮', '🔮']} />
          </div>
      </section>
    </main>
  );
}
