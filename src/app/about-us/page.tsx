export const dynamic = "force-dynamic";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">About <span className="text-primary">UKSpinFast</span></h1>
      <div className="max-w-3xl prose prose-invert">
        <p className="text-lg text-foreground/70 mb-6">
          UKSpinFast is your go-to destination for the most trustworthy and current insights into the world of online casinos. Our goal is to provide a secure, transparent, and thrilling gaming environment for all players.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Knowledge</h2>
        <p className="mb-6">
          With extensive background in the iGaming sector, our specialist team carefully analyzes and verifies every platform we feature. We prioritize essential factors like player safety, game variety, and withdrawal speed over superficial offers.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
        <p className="mb-6">
          Honesty is fundamental to our operations. We maintain full transparency regarding our affiliate ties, ensuring our evaluations stay neutral and player-centric. We are also dedicated proponents of responsible gaming, collaborating with key organizations to ensure a safe betting experience.
        </p>
      </div>
    </div>
  );
}
