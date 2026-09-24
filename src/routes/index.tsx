import { createFileRoute, Link } from "@tanstack/react-router";
import { Baby, Flame, PawPrint, Wifi } from "lucide-react";
import { FtbReviews } from "@/components/ftb-reviews";
import { Lightbox, PhotoButton, useGallery } from "@/components/lightbox";
import { BookingCard, Shell } from "@/components/shell";
import { FACEBOOK_PAGE, QUOTES, publicUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fingal Cottage - Isle of Mull" },
      {
        name: "description",
        content:
          "A comfortable detached cottage at Lochdon on the Isle of Mull. Sleeps six, dog friendly, with loch views, garden and free WiFi.",
      },
    ],
  }),
  component: Home,
});

const photos = [
  { src: publicUrl("/cottage/wider-shot.jpg"), alt: "White cottages beside Lochdon with hills beyond" },
  { src: publicUrl("/cottage/front-white.jpg"), alt: "Outside of Fingal Cottage" },
  { src: publicUrl("/cottage/living-room-with-view.jpg"), alt: "Fingal Cottage Lounge" },
  { src: publicUrl("/cottage/13.jpg"), alt: "Sunset over the loch from Fingal Cottage" },
  { src: publicUrl("/cottage/front-garden.jpg"), alt: "front of Fingal Cottage" },
];

const features = [
  {
    icon: Wifi,
    title: "Free WiFi",
    text: "The cottage has free wireless fibre broadband",
  },
  {
    icon: PawPrint,
    title: "Dog friendly",
    text: "Well behaved dogs are also very welcome! (maximum of two)",
  },
  {
    icon: Flame,
    title: "Heating & bedding included",
    text: "Electricity and Heating costs included. All duvets, pillows and bedding are provided, along with towels and an iron and ironing board for guest use.",
  },
  {
    icon: Baby,
    title: "Cot available",
    text: "A cot and high chair are also available if requested in advance.",
  },
];

const sleeps = [
  {
    title: "Master bedroom",
    text: "King bed and ensuite, with views of Dun da Ghaoithe.",
    src: publicUrl("/cottage/master-bedroom.jpg"),
    alt: "Master Bedroom of Fingal Cottage",
  },
  {
    title: "Twin room",
    text: "Two singles at the front of the house, looking onto the loch.",
    src: publicUrl("/cottage/twin-room.jpg"),
    alt: "Fingal Cottage Twin Room",
  },
  {
    title: "Bunk room",
    text: "Pine bunk beds and a chest of drawers. Suitable for adults or children.",
    src: publicUrl("/cottage/bunk-room.jpg"),
    alt: "Fingal Cottage bunk beds",
  },
];

function Home() {
  const hero = useGallery();
  const rooms = useGallery();

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 pt-6 pb-16">
        <h1 className="text-3xl font-semibold sm:text-4xl">Fingal Cottage</h1>
        <p className="mt-1 text-loch">Lochdon, Isle of Mull · Sleeps 6 · Dog friendly</p>

        <div className="mt-5 grid grid-cols-2 gap-2 md:h-128 md:grid-cols-4 md:grid-rows-2">
          {photos.map((photo, index) => (
            <PhotoButton
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              onClick={() => hero.open(index)}
              className={
                "h-full w-full " +
                (index === 0
                  ? "col-span-2 aspect-video md:row-span-2 md:aspect-auto"
                  : "aspect-square md:aspect-auto")
              }
            />
          ))}
        </div>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <h2 className="text-2xl font-semibold">About this cottage</h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Fingal Cottage is a comfortable, detached property on the scenic Isle of
                Mull. It is centrally located with Tobermory to the North and Fionnphort
                and Iona to the South; this makes it an ideal base from which to explore
                the island.
              </p>
              <p>
                This house is beautifully situated in a peaceful lochside setting and
                enjoys spectacular views of Lochdon. The cottage itself is spacious,
                comfortable and equipped to a high standard with private parking; there
                is an extensive private garden with garden furniture to relax and enjoy
                the scenery, wildlife and views of the loch. Bird feeders are provided
                in the garden so do bring your own bird food to encourage them visiting
                the garden if you wish.
              </p>
              <p>
                The cottage sleeps six people and is perfect for families — there is a
                master double bedroom with ensuite, a twin bedroom with two single beds
                and a third bedroom with bunk beds (suitable for either adults or
                children).
              </p>
            </div>

            <section className="mt-10 border-t border-line pt-10">
              <h2 className="text-2xl font-semibold">What this place offers</h2>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                {features.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-loch text-canvas">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 border-t border-line pt-10">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl font-semibold">Where you’ll sleep</h2>
                <Link to="/accommodation" className="text-sm font-semibold text-loch underline underline-offset-4">
                  View rooms
                </Link>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {sleeps.map((room, index) => (
                  <div key={room.title}>
                    <PhotoButton
                      src={room.src}
                      alt={room.alt}
                      onClick={() => rooms.open(index)}
                      className="aspect-4/3 w-full"
                    />
                    <Link to="/accommodation" className="group">
                      <p className="mt-3 font-semibold group-hover:underline">{room.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">{room.text}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 border-t border-line pt-10">
              <h2 className="text-2xl font-semibold">Guest reviews</h2>
              <p className="mt-2 text-sm text-ink/60">
                Reviews collected through our booking calendar. Guests also share stays on{" "}
                <a
                  href={FACEBOOK_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-loch underline underline-offset-4"
                >
                  Facebook
                </a>
                .
              </p>
              <div className="mt-6">
                <FtbReviews />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {QUOTES.map((quote) => (
                  <blockquote key={quote} className="rounded-xl border border-line border-l-4 border-l-loch bg-mist/60 p-5 text-sm leading-relaxed">
                    “{quote}”
                  </blockquote>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-24">
            <BookingCard />
          </div>
        </div>
      </div>
      {hero.index !== null ? (
        <Lightbox images={photos} index={hero.index} onClose={hero.close} onIndex={hero.open} />
      ) : null}
      {rooms.index !== null ? (
        <Lightbox images={sleeps} index={rooms.index} onClose={rooms.close} onIndex={rooms.open} />
      ) : null}
    </Shell>
  );
}
