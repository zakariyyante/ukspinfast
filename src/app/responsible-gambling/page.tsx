export const dynamic = "force-dynamic";

export default function ResponsibleGambling() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Jogo <span className="text-primary">Responsável</span></h1>
      <div className="max-w-4xl prose prose-invert">
        <p className="text-lg text-foreground/70 mb-8">
          No CassinoFácil, estamos comprometidos em promover o jogo responsável. Acreditamos que o jogo deve ser sempre uma forma de entretenimento e nunca uma forma de ganhar dinheiro ou escapar de problemas.
        </p>

        <h2 className="text-2xl font-bold mb-4">Dicas para um Jogo Seguro</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Defina um orçamento e cumpra-o.</li>
          <li>Nunca jogue com dinheiro que você não pode perder.</li>
          <li>Não tente recuperar perdas.</li>
          <li>Faça pausas regulares.</li>
          <li>Não jogue quando estiver chateado ou estressado.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Reconhecendo um Problema</h2>
        <p className="mb-6">
          Se você sente que está perdendo o controle do seu jogo, faça a si mesmo as seguintes perguntas:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Você joga para escapar de uma vida entediante ou infeliz?</li>
          <li>Ao jogar e ficar sem dinheiro, você se sente perdido e desesperado e precisa jogar novamente o mais rápido possível?</li>
          <li>Você joga até que seu último centavo acabe, até mesmo o dinheiro da passagem para casa ou o custo de uma xícara de chá?</li>
          <li>Você já mentiu para esconder a quantidade de dinheiro ou tempo que gastou jogando?</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Onde Obter Ajuda</h2>
        <p className="mb-6">
          Se precisar de suporte, entre em contato com qualquer uma das seguintes organizações:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-panel border border-border text-center flex flex-col items-center gap-4">
            <img src="/gamble-aware-logo.svg" alt="BeGambleAware" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <h3 className="font-bold">BeGambleAware</h3>
            <a href="https://www.begambleaware.org" target="_blank" className="text-primary hover:underline mt-auto">Visitar Site</a>
          </div>
          <div className="p-6 rounded-2xl bg-panel border border-border text-center flex flex-col items-center gap-4">
            <img src="/gamcare.png" alt="GamCare" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <h3 className="font-bold">GamCare</h3>
            <a href="https://www.gamcare.org.uk" target="_blank" className="text-primary hover:underline mt-auto">Visitar Site</a>
          </div>
          <div className="p-6 rounded-2xl bg-panel border border-border text-center flex flex-col items-center gap-4">
            <img src="/gamstop-vector-logo.svg" alt="GAMSTOP" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <h3 className="font-bold">GAMSTOP</h3>
            <a href="https://www.gamstop.co.uk" target="_blank" className="text-primary hover:underline mt-auto">Visitar Site</a>
          </div>
        </div>
      </div>
    </div>
  );
}
