import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Lightbox, PhotoButton, useGallery } from "@/components/lightbox";
import { inlineLink, PageHero, PageWithCard, Shell } from "@/components/shell";

export const Route = createFileRoute("/see")({
  head: () => ({
    meta: [
      { title: "Fingal Cottage - See & Do" },
      {
        name: "description",
        content:
          "Wildlife, beaches, walking, castles and places to eat near Fingal Cottage on the Isle of Mull.",
      },
    ],
  }),
  component: See,
});

const tours = [
  { href: "http://www.wildaboutmull.co.uk/", label: "Wild About Mull" },
  { href: "http://www.mullwildlife.com/", label: "Mull Wildlife Experiences" },
  { href: "http://mullwildlifetours.co.uk/", label: "Mull Wildlife Tours" },
  { href: "https://www.turusmara.com/", label: "Turus Mara" },
  { href: "http://www.staffatours.com/", label: "Staffa Tours" },
  { href: "http://www.mullcharters.com/popular.html", label: "Eagle Watching Boat Trips" },
];

const beaches = [
  { href: "http://www.calgarybay.co.uk/", label: "Calgary Bay" },
  { href: "https://www.walkhighlands.co.uk/mull/langamull-beach.shtml", label: "Langamull" },
  { href: "https://www.walkhighlands.co.uk/mull/traigh-gheal.shtml", label: "Traigh Gheal" },
  { href: "https://visitmullandiona.co.uk/listings/knockvologan-beach/", label: "Knockvologan" },
];

const dining = [
  { href: "https://ambirlinn.com/", label: "Am Birlinn" },
  { href: "http://www.highlandcottage.co.uk/", label: "Highland Cottage" },
  { href: "http://www.thecafefish.com/", label: "Cafe Fish" },
  { href: "http://www.craignure-inn.co.uk/", label: "Craignure Inn" },
  { href: "https://www.crerarhotels.com/isle-of-mull-hotel-spa", label: "Isle of Mull Hotel" },
  { href: "http://www.pennygatelodge.scot/", label: "Pennygate Lodge" },
];

const birds = [
  ["/cottage/golden-eagle.jpg", "Picture of a Golden Eagle"],
  ["/cottage/haliaeetus.jpg", "Picture of a Haliaeetus"],
  ["/cottage/puffin.jpg", "Picture of a Puffin"],
  ["/cottage/fulmar.jpg", "Picture of a Fulmar"],
] as const;

function OutList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="mt-4 overflow-hidden rounded-xl border border-line">
      {items.map((item) => (
        <li key={item.href} className="border-b border-line last:border-b-0">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 px-4 py-4 text-sm font-medium hover:bg-mist"
          >
            {item.label}
            <ArrowUpRight className="size-4 shrink-0 text-loch" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Chapter({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 max-w-3xl space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

function See() {
  const gallery = useGallery();

  return (
    <Shell>
      <PageHero
        title="See & do"
        lede="Wildlife, beaches, castles and places to eat, a short drive from the cottage."
      />
      <PageWithCard>
        <Chapter title="What to see & do on the Isle of Mull">
          <p>
            The Isle of Mull has something for everyone; whether you simply want
            to relax or whether you are a walker, artist, photographer, golfer,
            diver, sailor, cyclist, angler, geologist or bird watcher. This
            beautiful island has over 300 miles of coastline. There are extensive
            white sandy beaches, sea and freshwater lochs, moors and forests to
            explore. The following is just a taster of some of the activities on
            offer.
          </p>
          <p>
            There is a comprehensive information pack at Fingal Cottage with
            maps, leaflets and a wealth of further information for visitors.
          </p>
        </Chapter>

        <Chapter title="Wildlife, birdlife and nature">
          <h3 className="text-lg font-semibold">Birdlife</h3>
          <p>
            White tailed Sea Eagles, one of Scotland’s biggest and rarest birds
            of prey, with a wingspan of up to six feet can be seen on Mull. In
            1975 some young Sea-eagles were brought here from Norway (the first
            ones were released on Rum) and in 1985 they bred on the island.
            Since then over 200 White-tailed Sea eagle chicks have fledged here.
          </p>
          <p>
            Golden eagles too are found in good numbers. Rarities such as
            corncrakes, merlins, peregrines and Hen harriers are all found on
            Mull, and woodland birds include redpoll, redstart, spotted fly
            catcher, black cap, tree creeper, twite, goldcrest, linnet and
            whinchat.
          </p>
          <p>
            Seabirds you might see include Puffin, guillemot, razorbill,
            kittiwake, herring gull, gannet, Manx shearwater, storm petrel,
            arctic and great skua, Fulmars, Black Guillemot, Great Black Backed
            Gull, all nest in and around Mull, while Sooty and great
            shearwaters, and Gannets are all seen every year.
          </p>
          <p>
            Lochdon is a tidal sea loch which provides a valuable source of
            food for many waders; it holds a wide variety of birds at all times
            of the year (too many to mention!). For more information see Mull
            Birds web pages, the Birdforum site is also an excellent resource.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">
            {birds.map(([src, alt], index) => (
              <PhotoButton
                key={src}
                src={src}
                alt={alt}
                onClick={() => gallery.open(index)}
                className="aspect-square w-full"
              />
            ))}
          </div>
          <h3 className="pt-2 text-lg font-semibold">Wildlife</h3>
          <p>Red and fallow deer, sea otters and mountain hare are all very common here.</p>
          <p>
            If you wish to remember your holiday on Mull by purchasing some
            spectacular photography we recommend{" "}
            <a
              href="https://www.andy-davis-photography.com"
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              Andy Davis Photography
            </a>
            .
          </p>
        </Chapter>

        <Chapter title="Historic Mull">
          <p>
            For history lovers, the Isle of Mull has a lot to offer. It is widely
            understood that Mull was inhabited shortly after the end of the last
            Ice Age, around 6000 BC; standing stones and stone circles can be
            found on the island. Archaeological sites include the stone circle at
            Lochbuie and a further complex of three groups of stones located near
            Dervaig. An Iron Age dun, Dun Aisgain, near Burg, is well preserved,
            and there are other iron Age strongholds at Dun nan Gall and Dun na
            Fheurain.
          </p>
          <p>
            During the early Christian period in the 6th Century it is believed
            that Christianity was brought to this part of northern Britain by St.
            Columba, when he arrived from Ireland to set up a monastery on the
            Island of Iona just off the south-west point of Mull. The cottage is
            ideally situated for a trip to Iona, and it is well worth a visit.
          </p>
          <p>
            Why not spend time at Iona Abbey – the Abbey and Nunnery grounds
            house one of the most comprehensive collections of Christian carved
            stones in Scotland, ranging in age from 600AD to the 1600s. The more
            energetic visitor might prefer to hire a cycle and explore the
            beautiful white shell beaches.
          </p>
          <p>
            In the 14th century Mull became part of the Lordship of the Isles.
            After the collapse of the Lordship in 1493 the island was taken over
            by the clan MacLean, and in 1681 by the clan Campbell. Mull boasts
            such historic buildings as Duart Castle which is open to the public
            from Easter to September. There are other castles including Aros
            castle, Moy Castle (a small castle on the shore of Lochbuie which is
            the empty tower of the MacLaines of Lochbuie) or the 19th Century
            Glengorm Castle, where you can enjoy lunch or browse in the art
            gallery.
          </p>
          <p>
            Legend has it that the wreck of a Spanish galleon, laden with gold,
            lies somewhere in the mud at the bottom of Tobermory Bay.
          </p>
          <p>
            In 1773 the island was visited by Samuel Johnson and James Boswell
            during their famous Tour of the Western Islands.
          </p>
          <p>
            The mausoleum of Lachlan Macquarie, Governor of New South Wales from
            1809 to 1822, may be found in the village of Gruline on the island;
            Macquarie was born on the nearby island of Ulva.
          </p>
        </Chapter>

        <Chapter title="Organised trips & excursions">
          <p>For those preferring organised tours, there are a variety of operators including:</p>
          <OutList items={tours} />
        </Chapter>

        <Chapter title="Activities and walking on Mull">
          <p>
            Ben More stands at 3000 feet / 915m and is Mull’s only Munro. It is a
            fairly easy climb and will take about 5 to 6 hours.
          </p>
          <p>
            There are some fantastic walks on the island and the cottage has maps
            and information to help you plan any excursions – whatever your level
            of ability.
          </p>
          <p>You can also do guided walks if you prefer, for instance Mull Magic do guided wildlife walks.</p>
          <p>
            For the keen golfers amongst you – visit Tobermory Golf Course,
            described as one of the most beautifully situated golf courses in the
            world. Meanwhile Craignure Golf Course with a challenging nine holes
            (and one of the most scenic you are ever likely to play), is only 2½
            miles away.
          </p>
        </Chapter>

        <Chapter title="Beaches">
          <p>There are some fantastic beaches on the Isle of Mull.</p>
          <OutList items={beaches} />
        </Chapter>

        <Chapter title="Eating out">
          <p>There are many places to eat on the Island, these include:</p>
          <OutList items={dining} />
          <p className="text-sm text-ink/60">
            Please note that the links to these sites are entirely independent of
            this website and its authors. We cannot guarantee the validity and
            accuracy of the information provided on linked sites and take no
            responsibility for the content therein.
          </p>
        </Chapter>
      </PageWithCard>
      {gallery.index !== null ? (
        <Lightbox
          images={birds.map(([src, alt]) => ({ src, alt }))}
          index={gallery.index}
          onClose={gallery.close}
          onIndex={gallery.open}
        />
      ) : null}
    </Shell>
  );
}
