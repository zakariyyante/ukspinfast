export const dynamic = "force-dynamic";

export default function ResponsibleGambling() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Responsible <span className="text-primary">Gambling</span></h1>
      <div className="max-w-4xl prose prose-invert">
        <p className="text-lg text-foreground/70 mb-8">
          At TopSpinUK, we are committed to promoting responsible gambling. We believe that gambling should always be a form of entertainment and never a way to make money or escape problems.
        </p>

        <h2 className="text-2xl font-bold mb-4">Tips for Safe Gambling</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Set a budget and stick to it.</li>
          <li>Never gamble with money you cannot afford to lose.</li>
          <li>Don't chase losses.</li>
          <li>Take regular breaks.</li>
          <li>Don't gamble when you're upset or stressed.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Recognizing a Problem</h2>
        <p className="mb-6">
          If you feel that you are losing control of your gambling, ask yourself the following questions:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Do you gamble to escape from a boring or unhappy life?</li>
          <li>When gambling and you run out of money, do you feel lost and in despair and need to gamble again as soon as possible?</li>
          <li>Do you gamble until your last penny is gone, even the fare home or the cost of a cup of tea?</li>
          <li>Have you ever lied to cover up the amount of money or time you have spent gambling?</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Where to Get Help</h2>
        <p className="mb-6">
          If you need support, please contact any of the following organizations:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-panel border border-border text-center flex flex-col items-center gap-4">
            <img src="/gamble-aware-logo.svg" alt="BeGambleAware" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <h3 className="font-bold">BeGambleAware</h3>
            <a href="https://www.begambleaware.org" target="_blank" className="text-primary hover:underline mt-auto">Visit Site</a>
          </div>
          <div className="p-6 rounded-2xl bg-panel border border-border text-center flex flex-col items-center gap-4">
            <img src="/gamcare.png" alt="GamCare" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <h3 className="font-bold">GamCare</h3>
            <a href="https://www.gamcare.org.uk" target="_blank" className="text-primary hover:underline mt-auto">Visit Site</a>
          </div>
          <div className="p-6 rounded-2xl bg-panel border border-border text-center flex flex-col items-center gap-4">
            <img src="/gamstop-vector-logo.svg" alt="GAMSTOP" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <h3 className="font-bold">GAMSTOP</h3>
            <a href="https://www.gamstop.co.uk" target="_blank" className="text-primary hover:underline mt-auto">Visit Site</a>
          </div>
        </div>
      </div>
    </div>
  );
}
