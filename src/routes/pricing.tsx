import { createFileRoute, Link } from "@tanstack/react-router";
import { FtbReviews } from "@/components/ftb-reviews";
import { BookLink, BookingCard, inlineLink, PageHero, Shell } from "@/components/shell";
import { PHONE_LABEL, PHONE_TEL, PRICES } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Fingal Cottage - Pricing & Bookings" },
      {
        name: "description",
        content:
          "Weekly prices, deposits and terms for Fingal Cottage, Lochdon, Isle of Mull. Book direct with a £100 deposit.",
      },
    ],
  }),
  component: Pricing,
});

const terms = [
  "The Cottage sleeps 6 people maximum in 1 master double bedroom, 1 twin bedroom and 1 bunk bedroom – no more than 6 people allowed, except a baby in a cot.",
  "To pay a £100 deposit to confirm the booking, which is refundable if any cancellation is made more than 6 weeks before the start date of the booking.",
  "If booking is made less than 6 weeks before the start of the booking period, the full amount is payable on booking. The owners reserve the right to refuse entry if full payment has not been received and to cancel the booking and relet the property to alternative guests if full payment is not received by 6 weeks prior to the start of the booked period.",
  "To notify of any cancellation in writing as soon as possible and pay any monies due. If the accommodation is relet for the booked period at the full rate, a refund will be made, subject to deduction of an administration fee. In other circumstances, partial refunds will be made available at the owner’s discretion.",
  "We recommend that you obtain holiday cancellation insurance.",
  "To vacate the property by 10:30 am on the final day of letting.",
  "The house will be cleaned prior to your arrival and you agree to leave the property in a similar condition. You also agree to keep the property and all the fitments, furniture, equipment and other contents in the state of repair and condition as at the commencement of the holiday let. The property should be in a clean and tidy condition with full inventory and the owners will be reimbursed for any significant breakage, loss or damage, barring minor breakages.",
  "Linen and towels are provided, however, please bring your own towels for the beach.",
  "To use the property solely for the purposes of self catering holiday accommodation and to accept the owner’s right to refuse entry to the property of any person considered unsuitable to take charge. The owner shall not be held responsible or liable for any accident, loss or mishap to persons or property whilst using the premises or for any illness or injury arising from any cause whatsoever.",
  "The house and contents are insured but not the personal property of the holiday tenants. You must take all necessary steps to safeguard your personal property. No liability to you is accepted in respect of damage or loss of such property.",
  "Pets are very welcome in the Cottage, however it is important that they are kept under control at all times. Please do not leave your animal unattended in the property or allow it onto the beds or furniture.",
  "To accept that should the property become unavailable or unsuitable for letting purposes subsequent to booking through any cause, the owner’s liability shall be limited to the amount of rent paid.",
  "To allow the owners or their agents access to the property at all reasonable times.",
  "Electric cars should not be charged from the cottage’s domestic power supply.",
  "Fingal Cottage EPC rating is E.",
  "Fingal Cottage short term lettings licence AR00758F.",
];

function Pricing() {
  return (
    <Shell>
      <PageHero
        title="Pricing & bookings"
        lede="Weekly rates for the cottage, with a £100 deposit to confirm."
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <h2 className="text-2xl font-semibold">Prices</h2>
            <p className="mt-2 text-ink/60">
              Prices per week are as follows, please also see the information below
              in relation to booking:
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-line">
              {PRICES.map((row, index) => (
                <div
                  key={row.when}
                  className={
                    "flex items-center justify-between gap-4 border-b border-line px-4 py-4 last:border-b-0 " +
                    (index % 2 === 0 ? "bg-mist" : "bg-canvas")
                  }
                >
                  <span>{row.when}</span>
                  <span className="text-lg font-semibold text-loch">{row.amount}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <FtbReviews />
            </div>

            <div className="mt-12 space-y-4 leading-relaxed">
          <p>
            For details of cottage availability please check our <BookLink className={inlineLink}>calendar</BookLink>.
            You can also <Link to="/contact" className={inlineLink}>contact us</Link> if you have a query.
          </p>
          <p>
            Guests are welcome to arrive from 15:30 and are asked to vacate the house by 10:30.
          </p>
          <p>
            During peak season arrivals must be on a Saturday or Sunday and be for at least 6 nights in length.
          </p>
          <p>
            However, outside the high season, if you wish to stay for a few days or extend your stay beyond a week
            (e.g. 10 days) then let us know and we will try to accommodate this. Minimum stay length 3 days.
          </p>
          <p>
            Short breaks must be paid for in full at the time of booking and we will quote you a price depending on
            how many days you want.
          </p>
          <p>
            <BookLink className={inlineLink}>Click here to book now</BookLink> or give us a{" "}
            <a href={`tel:${PHONE_TEL}`} className={inlineLink}>call</a> on {PHONE_LABEL}.
          </p>
          <p>A deposit of £100.00 is required when booking.</p>
          <p>
            A damage deposit of £50 is also to be paid with the balance, returnable after your departure if no
            damage has occurred.
          </p>
          <p>
            You can pay via the website via secure online debit or credit card payment. You can also choose to pay
            by bank BACS transfer; please contact us for bank details. And if you wish to pay by cheque, these
            should be made payable to Veronica Roberts, and please contact us for the address to which to send the
            cheque to Veronica Roberts.
          </p>
          <p>A booking fee may be incurred depending on how the booking is settled.</p>
          <p className="flex flex-wrap items-center gap-3">
            We accept payment via Visa and Mastercard.
            <img src="/cottage/visa--logo.png" alt="Visa" className="h-8 w-auto" />
          </p>
          <p>The balance will be due in full 6 weeks prior to your arrival.</p>
          <p>It is advisable to take out travel insurance in the event you need to cancel your holiday.</p>
          <p>The cancellation policy is as follows:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Cancellations made more than 6 weeks before the commencement of your holiday will receive a full refund.
            </li>
            <li>
              Cancellations made less than 6 weeks before the commencement of your holiday will receive a full refund
              only if the holiday date can be re-let.
            </li>
          </ul>
        </div>

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="text-2xl font-semibold">Terms & conditions</h2>
          <p className="mt-3 max-w-3xl">
            By placing a booking and paying a deposit you are deemed to have accepted the following:
          </p>
          <ol className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed">
            {terms.map((term, index) => (
              <li key={term} className="border-t border-line pt-4">
                <span className="mr-2 font-semibold">{index + 1}.</span>
                {term}
              </li>
            ))}
          </ol>
        </section>
          </div>
          <div className="lg:sticky lg:top-24">
            <BookingCard />
          </div>
        </div>
      </div>
    </Shell>
  );
}
