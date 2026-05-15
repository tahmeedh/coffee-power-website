"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="section-gap bg-surface-dim border-t border-outline/40">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-caps text-muted mb-4">Mantente Conectado</p>
          <h2 className="font-display italic text-cream text-4xl md:text-5xl leading-tight mb-4">
            Mantente <em>Fiel</em>
          </h2>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
            Nuevos orígenes, ediciones limitadas e historias del campo — directo a tu bandeja de entrada.
          </p>
          {submitted ? (
            <p className="font-body text-primary text-lg">
              Gracias. Te contactaremos con la próxima cosecha.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <label className="label-caps text-muted block mb-2">Tu Correo</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="input-underline"
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" variant="primary">Suscribirse</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
