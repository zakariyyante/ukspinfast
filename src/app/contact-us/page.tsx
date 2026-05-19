export const dynamic = "force-dynamic";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Contate-<span className="text-primary">nos</span></h1>
      <div className="max-w-2xl">
        <p className="text-lg text-foreground/70 mb-8">
          Tem alguma dúvida, feedback ou precisa de assistência? Estamos aqui para ajudar. Entre em contato conosco através de qualquer um dos canais abaixo e nossa equipe retornará o mais rápido possível.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-panel border border-border">
            <h3 className="text-xl font-bold mb-2 text-primary">Envie-nos um E-mail</h3>
            <p className="text-foreground/60 mb-4">Para consultas gerais e suporte:</p>
            <a href="mailto:suporte@cassinofacil.com" className="text-lg font-medium hover:text-primary transition-colors">suporte@cassinofacil.com</a>
          </div>
          <div className="p-6 rounded-2xl bg-panel border border-border">
            <h3 className="text-xl font-bold mb-2 text-primary">Parcerias</h3>
            <p className="text-foreground/60 mb-4">Para oportunidades de negócios e publicidade:</p>
            <a href="mailto:parcerias@cassinofacil.com" className="text-lg font-medium hover:text-primary transition-colors">parcerias@cassinofacil.com</a>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-panel border border-border">
          <h3 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Seu Nome" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Seu E-mail" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
            </div>
            <input type="text" placeholder="Assunto" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
            <textarea placeholder="Sua Mensagem" rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary"></textarea>
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-all neon-glow">
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
