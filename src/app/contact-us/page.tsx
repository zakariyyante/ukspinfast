export const dynamic = "force-dynamic";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Contact <span className="text-primary">Us</span></h1>
      <div className="max-w-2xl">
        <p className="text-lg text-foreground/70 mb-8">
          Have a question, feedback, or need assistance? We're here to help. Reach out to us through any of the channels below, and our team will get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-panel border border-border">
            <h3 className="text-xl font-bold mb-2 text-primary">Email Us</h3>
            <p className="text-foreground/60 mb-4">For general inquiries and support:</p>
            <a href="mailto:support@top5ukcasinolist.com" className="text-lg font-medium hover:text-primary transition-colors">support@top5ukcasinolist.com</a>
          </div>
          <div className="p-6 rounded-2xl bg-panel border border-border">
            <h3 className="text-xl font-bold mb-2 text-primary">Partnerships</h3>
            <p className="text-foreground/60 mb-4">For business and advertising opportunities:</p>
            <a href="mailto:partners@top5ukcasinolist.com" className="text-lg font-medium hover:text-primary transition-colors">partners@top5ukcasinolist.com</a>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-panel border border-border">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Your Email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
            <textarea placeholder="Your Message" rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary"></textarea>
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-all neon-glow">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
