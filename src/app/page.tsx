import ShareButton from "@/components/ShareButton";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <section className="flex flex-col gap-6 text-center mt-20">
          <div>
              <h1 className="text-4xl m-10">
                  🔮 Emoji Fortune Teller
              </h1>
          </div>
          <div className="w-[400px] h-[400px] m-8 relative">
              <div className="w-full h-full sparkles
              rounded-full
              bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_30%,transparent_70%)]
              shadow-crystal
              bg-crystal
              inset-shadow-crystal
              overflow-hidden relative
              before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:inset-shadow-crystal-before before:animate-crystal-glow">
                  <div className="absolute top-[50%] left-[10%]
                    text-7xl flex gap-6 drop-shadow-emoji-prediction">
                      <span className="animate-float" style={{animationDelay: '0.2s'}}>🔮</span>
                      <span className="animate-float" style={{animationDelay: '0.5s'}}>✨</span>
                      <span className="animate-float" style={{animationDelay: '0.8s'}}>🌌</span>
                  </div>
              </div>
          </div>

          <div>
              <ShareButton prediction={['🔮', '🔮', '🔮']} />
          </div>
      </section>
    </main>
  );
}
