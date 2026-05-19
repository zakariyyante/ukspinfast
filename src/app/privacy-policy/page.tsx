export const dynamic = "force-dynamic";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Política de <span className="text-primary">Privacidade</span></h1>
      <div className="max-w-4xl prose prose-invert">
        <p className="text-sm text-foreground/50 mb-8">Última Atualização: Maio de 2026</p>

        <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
        <p className="mb-6">
          Coletamos informações pessoais mínimas. Isso pode incluir seu endereço IP, tipo de navegador e informações do dispositivo coletadas por meio de cookies para melhorar o desempenho do nosso site e a experiência do usuário.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Uso de Cookies</h2>
        <p className="mb-6">
          Usamos cookies para rastrear o comportamento do usuário em nosso site e gerenciar nossos links de afiliados (por exemplo, rastreamento GCLID). Cumprimos o Google Consent Mode V2, permitindo que você gerencie suas preferências de cookies.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Links de Terceiros</h2>
        <p className="mb-6">
          Nosso site contém links para sites de cassino de terceiros. Esses sites têm suas próprias políticas de privacidade e não somos responsáveis por suas práticas.
        </p>

        <h2 className="text-20 font-bold mb-4">4. Segurança de Dados</h2>
        <p className="mb-6">
          Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso ou divulgação não autorizada.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
        <p className="mb-6">
          De acordo com a LGPD e as leis de proteção de dados, você tem o direito de acessar, retificar ou excluir seus dados pessoais. Entre em contato conosco se desejar exercer esses direitos.
        </p>
      </div>
    </div>
  );
}
