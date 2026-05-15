import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata = { title: "Order Confirmed — Coffee Power" };

export default function CheckoutSuccessPage() {
  return (
    <>
      <Nav />
      <section className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center mx-auto mb-8">
            <span className="text-primary text-2xl">✓</span>
          </div>
          <p className="label-caps text-muted mb-4">Order Confirmed</p>
          <h1 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-4">
            Your coffee is <em>on its way.</em>
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
            We&apos;ll roast your order within 48 hours and ship it straight to you. You&apos;ll receive a confirmation email shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/shop" variant="primary">Continue Shopping</Button>
            <Button href="/" variant="ghost">Back to Home</Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
