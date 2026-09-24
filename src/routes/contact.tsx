import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { btnPrimary, inlineLink, PageWithCard, Shell } from "@/components/shell";
import { EMAIL, FACEBOOK_PAGE, PHONE_LABEL, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Fingal Cottage - Contact Us" },
      {
        name: "description",
        content:
          "Contact Veronica at Fingal Cottage, Lochdon, Isle of Mull. Phone 07870 293810 or email fingalcottagemull@gmail.com.",
      },
    ],
  }),
  component: Contact,
});

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2205.925380786286!2d-5.690198683750644!3d56.434584980741135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488be00b1f59a82f%3A0x7fc476f6a674a59f!2sFingal%20Cottage%20Self%20Catering!5e0!3m2!1sen!2suk!4v1586852862558!5m2!1sen!2suk";

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-canvas px-3 py-3 text-base outline-none focus:border-ink";

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/fingalcottagemull@gmail.com", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("form");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Shell>
      <PageWithCard>
        <h1 className="text-3xl font-semibold sm:text-4xl">Contact</h1>
        <div className="mt-3 h-1 w-12 rounded-full bg-loch" />
        <p className="mt-3 max-w-xl text-ink/60">
          If you have any questions please contact us using any of the below methods.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-xl border border-line bg-canvas p-6 shadow-card">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <p className="text-sm text-ink/60">We always respond to booking enquiries within 12 hours.</p>
            <label className="block text-sm font-medium">
              Your name
              <input required name="name" type="text" autoComplete="name" className={field} />
            </label>
            <label className="block text-sm font-medium">
              Your email
              <input required name="_replyto" type="email" autoComplete="email" className={field} />
            </label>
            <label className="block text-sm font-medium">
              Message
              <textarea required name="message" rows={6} className={field} />
            </label>
            <button type="submit" disabled={status === "sending"} className={btnPrimary + " disabled:opacity-60"}>
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
            {status === "sent" ? <p className="text-sm font-medium">Thank you. Your message has been sent.</p> : null}
            {status === "error" ? (
              <p className="text-sm">
                The form could not be sent just now. Please email{" "}
                <a href={`mailto:${EMAIL}`} className={inlineLink}>
                  {EMAIL}
                </a>{" "}
                instead.
              </p>
            ) : null}
          </form>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={`tel:${PHONE_TEL}`} className="flex items-start gap-4 rounded-xl border border-line bg-canvas p-4 hover:bg-mist">
              <Phone className="mt-0.5 size-5 text-loch" aria-hidden />
              <span>
                <span className="block text-sm text-ink/60">Phone</span>
                <span className="font-semibold">{PHONE_LABEL}</span>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 rounded-xl border border-line bg-canvas p-4 hover:bg-mist">
              <Mail className="mt-0.5 size-5 text-loch" aria-hidden />
              <span>
                <span className="block text-sm text-ink/60">Email</span>
                <span className="font-semibold break-all">{EMAIL}</span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-line bg-canvas p-4">
              <MapPin className="mt-0.5 size-5 text-loch" aria-hidden />
              <span>
                <span className="block text-sm text-ink/60">Address</span>
                <span className="font-semibold">
                  Fingal Cottage, Lochdon
                  <br />
                  Isle of Mull, PA64 6AP
                </span>
              </span>
            </div>
            <a
              href={FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-xl border border-line bg-canvas p-4 text-sm font-semibold text-loch underline underline-offset-4"
            >
              Facebook reviews
            </a>
          </div>

          <section className="mt-12 border-t border-line pt-10">
            <h2 className="text-2xl font-semibold">How to find us</h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                The Isle of Mull is the second largest island of the Inner Hebrides,
                with white sandy beaches, fantastic scenery and abundant wildlife.
              </p>
              <p>
                Fingal Cottage is situated in the small hamlet of Lochdon, on the
                route to Iona, and just five minutes drive from local shops and
                where the ferry docks at Craignure.
              </p>
              <p>
                To book a ferry crossing from Oban (you are advised to do this in
                advance in peak season) see{" "}
                <a href="https://www.calmac.co.uk/" target="_blank" rel="noopener noreferrer" className={inlineLink}>
                  www.calmac.co.uk
                </a>
                .
              </p>
            </div>
            <iframe
              title="Map of Fingal Cottage Self Catering"
              src={MAP}
              className="mt-6 h-80 w-full rounded-xl border border-line"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </section>
      </PageWithCard>
    </Shell>
  );
}
