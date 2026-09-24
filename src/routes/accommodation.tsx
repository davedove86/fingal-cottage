import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Lightbox, PhotoButton, useGallery, type Shot } from "@/components/lightbox";
import { PageHero, PageWithCard, Shell } from "@/components/shell";
import { publicUrl } from "@/lib/site";

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "Fingal Cottage - Accommodation" },
      {
        name: "description",
        content:
          "One-level holiday cottage at Lochdon: lounge with loch views, kitchen, master ensuite, twin room and bunk room. Sleeps six.",
      },
    ],
  }),
  component: Accommodation,
});

const exterior = [
  { src: publicUrl("/cottage/front-white.jpg"), alt: "Outside of Fingal Cottage" },
  { src: publicUrl("/cottage/front-bench.jpg"), alt: "Garden and Fingal Cottage" },
  { src: publicUrl("/cottage/fingal-garden.jpg"), alt: "Fingal Cottage by the river" },
  { src: publicUrl("/cottage/front-garden.jpg"), alt: "front of Fingal Cottage" },
  { src: publicUrl("/cottage/13.jpg"), alt: "View from Fingal Cottage" },
  { src: publicUrl("/cottage/14.jpg"), alt: "View from Fingal Cottage" },
  { src: publicUrl("/cottage/15.jpg"), alt: "View from Fingal Cottage" },
  { src: publicUrl("/cottage/16.jpg"), alt: "View from Fingal Cottage" },
  { src: publicUrl("/cottage/outside-closer-view.jpg"), alt: "View from Fingal Cottage" },
];

function Photos({ images }: { images: Shot[] }) {
  const gallery = useGallery();
  return (
    <>
      <div className={images.length > 1 ? "grid grid-cols-2 gap-2" : "grid gap-2"}>
        {images.map((image, index) => (
          <PhotoButton
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => gallery.open(index)}
            className="aspect-4/3 w-full"
          />
        ))}
      </div>
      {gallery.index !== null ? (
        <Lightbox images={images} index={gallery.index} onClose={gallery.close} onIndex={gallery.open} />
      ) : null}
    </>
  );
}

function Room({
  title,
  children,
  images,
}: {
  title: string;
  children: ReactNode;
  images: { src: string; alt: string }[];
}) {
  return (
    <section className="grid items-start gap-6 border-t border-line py-10 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mt-4 space-y-4 leading-relaxed">{children}</div>
      </div>
      <Photos images={images} />
    </section>
  );
}

function Accommodation() {
  const grounds = useGallery();
  const outside: Shot[] = [
    { src: publicUrl("/cottage/living-room-with-view.jpg"), alt: "Fingal Cottage Lounge" },
    ...exterior,
  ];

  return (
    <Shell>
      <PageHero
        title="Accommodation"
        lede="One level beside the loch: lounge, kitchen, three bedrooms and a family bathroom."
      />
      <PageWithCard>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 leading-relaxed">
            <p>
              Accommodation is on one level and comprises of a large hallway,
              lounge/dining area, kitchen, bathroom, master bedroom with ensuite
              and two twin bedrooms.
            </p>
            <p>
              The house enjoys stunning views of Loch Don with far reaching views
              of Ben Cruachan at Loch Awe to the front, and overlooks the
              surrounding hills to the rear of the property.
            </p>
          </div>
          <PhotoButton
            src={outside[0].src}
            alt={outside[0].alt}
            onClick={() => grounds.open(0)}
            className="aspect-video w-full"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
          {exterior.map((image, index) => (
            <PhotoButton
              key={image.src}
              src={image.src}
              alt={image.alt}
              onClick={() => grounds.open(index + 1)}
              className="aspect-4/3 w-full"
            />
          ))}
        </div>

        <div className="mt-8">
          <Room
            title="Lounge"
            images={[
              { src: publicUrl("/cottage/living-room-with-view.jpg"), alt: "Fingal Cottage Lounge" },
              { src: publicUrl("/cottage/living-room-2.jpg"), alt: "Fingal Cottage Living Room" },
              { src: publicUrl("/cottage/dining-alcove.jpg"), alt: "Lounge view of the garden" },
            ]}
          >
            <p>
              This is a very spacious and comfortable living area with a large
              picture window providing stunning views of the Loch.
            </p>
            <p>
              There is a 37″ flat screen TV with Freeview and an Amazon Firestick
              via which you can log into any of your own streaming accounts (e.g.
              Netflix), and a BluRay/DVD player. The bookcase contains a wealth of
              reading materials, maps and reference books etc. There is also a pair
              of binoculars to enable our guests to make the most of the spectacular
              views.
            </p>
            <p>There is a dining nook with a table seating 6 people.</p>
          </Room>

          <Room
            title="Kitchen"
            images={[{ src: publicUrl("/cottage/9.jpg"), alt: "Picture of Fingal Cottage Kitchen" }]}
          >
            <p>
              There is a modern, well equipped kitchen with washer/dryer,
              dishwasher, fridge/freezer, microwave oven, fan oven and electric
              hob. There is an electric kettle, toaster and sandwich maker. The
              kitchen is also well equipped with pots and pans, crockery, cutlery,
              glasses and cooking utensils.
            </p>
            <p>
              A coffee cafetière is provided as well as a Tassimo coffee machine;
              please bring your own preferred Tassimo pods.
            </p>
          </Room>

          <Room
            title="Master bedroom & ensuite"
            images={[
              { src: publicUrl("/cottage/master-bedroom.jpg"), alt: "Master Bedroom of Fingal Cottage" },
            ]}
          >
            <p>
              This is a large bedroom with a king sized bed. It has lovely views
              of Dun da Ghaoithe. There are built in wardrobes, two bedside
              cabinets and a chest of drawers in this room. A hairdryer is also
              supplied.
            </p>
            <p>
              The ensuite bathroom has a wc, handbasin and a bath with an overhead
              electric shower.
            </p>
            <p>A cot is available on request.</p>
          </Room>

          <Room
            title="Twin bedrooms"
            images={[
              { src: publicUrl("/cottage/twin-room.jpg"), alt: "Fingal Cottage Twin Room" },
              { src: publicUrl("/cottage/bunk-room.jpg"), alt: "Fingal Cottage bunk beds" },
            ]}
          >
            <p>
              There are a further two bedrooms. The twin bedroom is at the front of
              the house and has views of the loch. This room has two single beds
              with a bedside cabinet, a chest of drawers and built in wardrobes.
            </p>
            <p>
              The remaining bedroom also sleeps two; it has comfortable pine bunk
              beds and a chest of drawers.
            </p>
          </Room>

          <Room
            title="Bathroom"
            images={[{ src: publicUrl("/cottage/12.jpg"), alt: "Fingal Cottage Bathroom" }]}
          >
            <p>
              The family bathroom has a wc, handbasin, bath and a shower cubicle
              with an electric shower.
            </p>
          </Room>
        </div>
      </PageWithCard>
      {grounds.index !== null ? (
        <Lightbox images={outside} index={grounds.index} onClose={grounds.close} onIndex={grounds.open} />
      ) : null}
    </Shell>
  );
}
