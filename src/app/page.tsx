export default function Home() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[url('https://res.cloudinary.com/destej60y/image/upload/v1773012589/background_14_n2edjr.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-6 py-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide">
            BAABAI LTD
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-100">
            Mobile Applications and Games Publishing Services
          </p>
        </div>
      </div>
    </section>
  );
}
