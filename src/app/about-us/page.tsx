export const dynamic = "force-dynamic";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Sobre o <span className="text-primary">CassinoFácil</span></h1>
      <div className="max-w-3xl prose prose-invert">
        <p className="text-lg text-foreground/70 mb-6">
          O CassinoFácil é uma plataforma líder dedicada a fornecer aos jogadores as informações mais confiáveis e atualizadas sobre cassinos online. Nossa missão é garantir uma experiência de jogo segura, justa e agradável para todos.
        </p>
        <h2 className="text-2xl font-bold mb-4">Nossa Experiência</h2>
        <p className="mb-6">
          Com anos de experiência na indústria de iGaming, nossa equipe de especialistas analisa e testa meticulosamente cada cassino que recomendamos. Olhamos além dos bônus chamativos para avaliar os componentes principais que mais importam para os jogadores: segurança, qualidade do jogo e confiabilidade dos pagamentos.
        </p>
        <h2 className="text-2xl font-bold mb-4">Nosso Compromisso</h2>
        <p className="mb-6">
          A transparência está no centro de tudo o que fazemos. Divulgamos nossos relacionamentos de afiliados e garantimos que nossas avaliações permaneçam imparciais e focadas no melhor interesse do jogador. Também somos defensores ferrenhos do jogo responsável e trabalhamos em estreita colaboração com órgãos da indústria para promover o jogo seguro.
        </p>
      </div>
    </div>
  );
}
