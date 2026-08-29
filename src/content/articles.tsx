import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SHOP_URL } from "@/content/blog";

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function ChoosePerfume() {
  return (
    <>
      <p>
        Finding the best perfume for yourself is less about chasing a bestseller list and
        more about understanding three things: the families of scent you respond to, the
        way your own skin behaves, and the register you want to speak in. Get those right
        and the bottle almost chooses itself.
      </p>

      <h2>Why the best perfume is a personal decision</h2>
      <p>
        Fragrance changes after you buy it. The same
        composition can read warm on one person and sharp on another, because scent
        develops in contact with skin — its temperature, its oils, its pH. A perfume that
        someone else wears beautifully is not evidence that it will suit you. It is only
        evidence that it is worth testing.
      </p>
      <p>
        That is the shift worth making early: stop looking for a universally good perfume
        and start looking for one that behaves well on you.
      </p>

      <h2>Start with fragrance families</h2>
      <p>
        Most fragrances sit within a handful of broad families, and knowing which ones
        draw you in narrows the field quickly.
      </p>
      <ul>
        <li>
          <strong>Fresh and citrus</strong> — bergamot, lemon, neroli. Bright, clean, most
          at home in daylight and heat.
        </li>
        <li>
          <strong>Floral</strong> — rose, jasmine, iris. Ranges from delicate to opulent
          depending on concentration.
        </li>
        <li>
          <strong>Woody</strong> — sandalwood, cedar, vetiver. Dry or creamy, grounded,
          usually long-wearing.
        </li>
        <li>
          <strong>Amber and oriental</strong> — amber, vanilla, resins and spice. Warm,
          rich, built for cooler air and later hours.
        </li>
        <li>
          <strong>Aromatic and oud</strong> — herbs, smoke, resinous depth. Distinctive and
          often assertive.
        </li>
      </ul>
      <p>
        Note which of these you already gravitate towards in other things — the wood in a
        room, the spice in a kitchen, the citrus in a soap. Preferences rarely arrive out of
        nowhere.
      </p>

      <h2>Let personality guide the register, not the rules</h2>
      <p>
        Personality does not dictate a note list. It dictates volume. Someone who prefers to
        be heard before being seen will be comfortable in a projecting oud or a loud
        gourmand. Someone whose style is understated will want a composition that stays
        closer to the skin and reveals itself only at conversational distance.
      </p>
      <p>
        Ask what you want the fragrance to do in a room. Announce, accompany, or linger. That
        single answer eliminates more bottles than any list of notes.
      </p>

      <h2>Skin type changes everything</h2>
      <p>
        Oily skin holds fragrance molecules well, so scents tend to last longer and project
        more; rich amber and woody compositions can become intense faster than expected. Dry
        skin releases fragrance quickly, which flatters bright citrus for a short while but
        can cut a composition short — moisturising with an unscented lotion before applying
        gives the perfume something to hold on to.
      </p>
      <p>
        Warmer skin amplifies sweetness and spice. Cooler skin keeps compositions crisper and
        more linear. Sensitive skin is a separate consideration: the{" "}
        <Ext href="https://ifrafragrance.org/">International Fragrance Association</Ext>{" "}
        publishes the ingredient standards the industry works to, and applying to clothing
        rather than skin is a reasonable adjustment if you react easily.
      </p>

      <h2>How to test a fragrance properly</h2>
      <p>
        Paper strips show the opening and almost nothing else. Test on skin, one or two
        fragrances at a time, and then leave. The first fifteen minutes are the alcohol and
        the top notes burning off; the heart appears after roughly half an hour, and the base
        after two to four hours. Judge at hour three, not minute three.
      </p>
      <p>
        Avoid rubbing your wrists together — it bruises the top notes. And test on an
        ordinary day rather than a scent-heavy one, so your nose is not already saturated.
      </p>

      <h2>Finding a signature scent</h2>
      <p>
        A signature scent is simply the composition you return to when you are not
        experimenting. It usually shares a common thread across everything else you like — a
        creamy wood, a particular sweetness, a specific dryness. Once you notice that thread,
        build around it: one signature for most days, one or two alternates for weather and
        occasion.
      </p>

      <h2>Occasion and season</h2>
      <p>
        Heat lifts fragrance, so summer rewards lighter concentrations and fresher families.
        Cold air holds it close, which is why warm amber and woody compositions come into
        their own after sundown and through winter. Offices favour restraint; evenings allow
        depth. If you want to go further on the second point, read our guide to{" "}
        <Link to="/blog/$slug" params={{ slug: "best-perfumes-for-evening-wear" }}>
          choosing a fragrance for evening wear
        </Link>
        , and if the eau de parfum and eau de toilette labels are still unclear, our{" "}
        <Link to="/blog/$slug" params={{ slug: "eau-de-parfum-vs-eau-de-toilette-vs-attar" }}>
          guide to fragrance concentrations
        </Link>{" "}
        explains what actually differs.
      </p>
      <p>
        Fragrance houses tend to offer distinct scent personalities rather than one house
        style — Sarkar, for instance, spans fresh aromatic through smoky oud to the warm
        vanilla-and-amber register of{" "}
        <Link to="/perfumes/solaris">Sarkar Solaris</Link>. Use a range like that as a way to
        test several families side by side.
      </p>
      <p>
        The best perfume, in the end, is the one that behaves well on your skin, matches the
        volume you want to speak at, and still feels right at the end of a long evening.{" "}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
          Discover the Sarkar collection
        </a>{" "}
        and start with the family you already lean towards.
      </p>
    </>
  );
}

function Concentrations() {
  return (
    <>
      <p>
        Walk through any fragrance counter in India and you will meet three labels within a
        minute: eau de parfum, eau de toilette and attar. They are not quality grades. They
        describe how much perfume oil is in the bottle and, by extension, how the composition
        behaves once it is on you.
      </p>

      <h2>What eau de parfum actually means</h2>
      <p>
        Eau de parfum is a relatively high concentration of aromatic compounds diluted in
        alcohol — typically the strongest of the everyday spray formats sold in retail. The
        practical effect is not simply that it lasts. It is that the base notes matter more.
        Woods, resins and amber have room to develop, so the fragrance moves from an opening
        through a heart and settles into something noticeably different from where it began.
      </p>
      <p>
        That depth is why warm, woody and amber compositions are usually released as eau de
        parfum. The structure needs the concentration to work.
      </p>

      <h2>What eau de toilette means</h2>
      <p>
        Eau de toilette carries a lower proportion of oil. It reads lighter and brighter, with
        the top notes doing more of the work. Citrus, green and aquatic compositions often
        suit it — those materials are volatile by nature and a lighter formulation lets them
        shine rather than fighting a heavy base.
      </p>
      <p>
        Lighter is not lesser. In humid Indian summers, an eau de toilette can be the more
        wearable choice precisely because heat already amplifies whatever you apply.
      </p>

      <h2>What attar means</h2>
      <p>
        Attar is the oldest of the three in this part of the world: concentrated fragrance oil
        with no alcohol, traditionally distilled and often carried in a sandalwood base.
        Applied in small amounts to pulse points, it sits very close to the skin and unfolds
        slowly. There is no alcoholic opening blast — the character is present from the first
        moment and changes gradually.
      </p>
      <p>
        Attars are intimate rather than projecting. That makes them well suited to prayer,
        quiet gatherings and anyone who prefers scent discovered at close range. They also
        layer unusually well under a spray fragrance.
      </p>

      <h2>A side-by-side comparison</h2>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Eau de Parfum</th>
            <th>Eau de Toilette</th>
            <th>Attar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Base</th>
            <td>Alcohol</td>
            <td>Alcohol</td>
            <td>Oil, alcohol-free</td>
          </tr>
          <tr>
            <th>Concentration</th>
            <td>High</td>
            <td>Moderate</td>
            <td>Very high</td>
          </tr>
          <tr>
            <th>Character</th>
            <td>Rounded, develops in stages</td>
            <td>Bright, top-note led</td>
            <td>Dense, gradual, skin-close</td>
          </tr>
          <tr>
            <th>Projection</th>
            <td>Moderate to strong</td>
            <td>Light to moderate</td>
            <td>Close to the skin</td>
          </tr>
          <tr>
            <th>Typical use</th>
            <td>Evenings, occasions, cooler weather</td>
            <td>Daytime, work, heat</td>
            <td>Rituals, close settings, layering</td>
          </tr>
        </tbody>
      </table>

      <h2>Why concentration matters</h2>
      <p>
        Concentration decides which part of the composition you actually experience. A low
        concentration foregrounds volatile top notes; a high one gives the heart and base time
        to appear. Perfumers build around that — the same accord can be composed differently
        depending on the intended format. For a broader view of how compositions are
        structured, <Ext href="https://www.britannica.com/art/perfume">Britannica</Ext> gives a
        clear historical and technical overview.
      </p>
      <p>
        Concentration also affects how much you should apply. A heavier formulation needs fewer
        sprays, not more, and over-application is the most common reason a good fragrance
        becomes tiring by mid-evening. Longevity depends on the materials, your skin and the
        weather as much as on the label, so treat concentration as a guide to character rather
        than a promise of hours.
      </p>

      <h2>Choosing by preference rather than price</h2>
      <p>
        A higher concentration costs more, which tempts people to read the label as a ranking.
        It is not. Choose the format that matches the setting: an eau de toilette for a humid
        working day, an attar when you want something private and slow, an eau de parfum when
        the composition is warm and you want it to hold through an evening.
      </p>
      <p>
        Sarkar Solaris is positioned as an eau de parfum for exactly that reason — vanilla,
        sandalwood and amber need the concentration to move through their stages properly. You
        can see how that composition is built on the{" "}
        <Link to="/perfumes/solaris">Sarkar Solaris page</Link>.
      </p>
      <p>
        If you are still deciding between families, our guide to{" "}
        <Link to="/blog/$slug" params={{ slug: "how-to-choose-the-right-perfume" }}>
          choosing a perfume for your personality and skin
        </Link>{" "}
        is the natural next step, and{" "}
        <Link to="/blog/$slug" params={{ slug: "fragrance-layering-guide" }}>fragrance layering</Link> explains how an
        attar and an eau de parfum can work together rather than compete.
      </p>
    </>
  );
}

function EveningWear() {
  return (
    <>
      <p>
        The best perfume for an evening is rarely the one you wore that morning. Light,
        temperature and setting all change after sundown, and a composition chosen for a bright
        working day tends to disappear precisely when you want it to hold. Evening fragrance is
        a different brief: warmth, depth, and presence that does not demand attention.
      </p>

      <h2>Why the best perfume for evening differs from a daytime scent</h2>
      <p>
        Heat lifts fragrance off the skin quickly. Cool air does the opposite — it holds a scent
        close and lets the heavier materials read clearly. That is why citrus and aquatic
        compositions feel right at noon and thin by nine, while resins, woods and amber only
        come into focus once the temperature drops.
      </p>
      <p>
        Evening settings are also closer. Dinner tables, low-lit rooms and gatherings put people
        within a metre of each other, which rewards nuance over projection.
      </p>

      <h2>The profiles that suit the hours after sundown</h2>
      <ul>
        <li>
          <strong>Amber</strong> — golden, resinous depth that gives a composition its length.
        </li>
        <li>
          <strong>Woody</strong> — sandalwood and cedar bring structure and keep sweetness in
          check.
        </li>
        <li>
          <strong>Warm gourmand</strong> — vanilla read as texture rather than sugar.
        </li>
        <li>
          <strong>Spiced</strong> — a touch of warmth that adds dimension without heat.
        </li>
      </ul>
      <p>
        The common thread is temperature. Evening compositions feel warm, and warmth is what
        makes a scent register as considered rather than casual.
      </p>

      <h2>Dinners, rooftops and dates</h2>
      <p>
        At a dinner table, restraint matters more than richness. A fragrance competing with food
        is a fragrance applied too heavily — two sprays, placed low, is usually enough. Rooftop
        evenings are the opposite problem: open air disperses scent, and a composition with an
        amber or woody base holds where a lighter one vanishes.
      </p>
      <p>
        For a date, choose something that only becomes apparent at close range. A trail that
        arrives before you do is a different, louder statement than most evenings call for.
      </p>

      <h2>Weddings and special occasions</h2>
      <p>
        Indian weddings are long, warm and crowded — three conditions that punish over-application
        and reward a composition with a real base. Something built on sandalwood and amber will
        still be recognisable hours in, while a bright opening will have gone by the time the
        evening properly begins. Apply once before leaving and resist re-application; in a full
        room, less is genuinely more.
      </p>

      <h2>Projection and trail</h2>
      <p>
        Projection is how far a fragrance travels; trail is what remains after you have moved on.
        A good evening scent keeps projection moderate and trail long. That combination creates
        presence without imposing it — people notice the fragrance when they are near you, and
        remember it after.
      </p>
      <p>
        Application controls this more than the bottle does. Pulse points at the neck and wrists,
        applied to moisturised skin, produce a steadier release than a cloud sprayed over
        clothing.
      </p>

      <h2>Sophisticated rather than sweet</h2>
      <p>
        The most common misstep in evening fragrance is mistaking sweetness for richness. Sugar
        is loud early and tiring later. Depth comes from the interplay between a warm material
        and a dry one — vanilla held in place by sandalwood, amber grounded by wood. That balance
        is what separates a composition that feels refined from one that feels heavy.
      </p>
      <p>
        <Link to="/perfumes/solaris">Sarkar Solaris</Link> is a useful example of the register:
        an eau de parfum built on vanilla, sandalwood and amber, where the vanilla reads as
        texture rather than sweetness, the sandalwood keeps it composed and the amber carries the
        warmth through the evening. Its positioning — quiet power, presence, warmth, refinement —
        describes the brief for evening wear as well as any note list can. It sits at MRP ₹1,499
        for 100 ml, and it is unisex, as warm amber compositions generally should be.
      </p>
      <p>
        For a broader framework on matching scent to skin and temperament, read{" "}
        <Link to="/blog/$slug" params={{ slug: "how-to-choose-the-right-perfume" }}>
          how to choose the right perfume for your personality
        </Link>
        , or learn{" "}
        <Link to="/blog/$slug" params={{ slug: "fragrance-layering-guide" }}>how layering extends a fragrance</Link> across a
        long night. The best perfume for evening wear is simply the one that still feels like you
        at the end of it —{" "}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
          explore the Sarkar collection
        </a>{" "}
        and find the fragrance that leaves your signature. For background on how fragrance
        families are classified, <Ext href="https://www.britannica.com/art/perfume">Britannica</Ext>{" "}
        is a reliable starting point.
      </p>
    </>
  );
}

function Layering() {
  return (
    <>
      <p>
        Most people apply perfume and fragrances the same way every day and then wonder why the
        scent is gone by lunch. Layering is the corrective: a method of building scent in stages
        so it holds longer, reads with more depth and behaves predictably.
      </p>

      <h2>What fragrance layering means</h2>
      <p>
        Layering is the deliberate combination of scented products — a body oil, a moisturiser, an
        attar, a spray fragrance — so they support rather than fight each other. At its simplest
        it means giving a perfume a base to sit on. At its most considered it means composing your
        own accord from two or three complementary products.
      </p>
      <p>
        People layer for two reasons: longevity, because oil-rich skin releases fragrance more
        slowly, and character, because a second scent can push a familiar composition warmer,
        drier or brighter.
      </p>

      <h2>Choosing complementary profiles</h2>
      <p>
        The safest combinations share a material. Vanilla layers naturally with amber and
        sandalwood. Citrus works over woods. Rose sits comfortably with oud. Trouble comes from
        pairing two assertive compositions with nothing in common — a smoky oud under a sharp
        aquatic will simply argue.
      </p>
      <p>
        A useful rule: one composition leads, the other supports. Decide which is which before you
        spray.
      </p>

      <h2>Build from the skin outward</h2>
      <ol>
        <li>Shower and pat dry, leaving skin slightly warm.</li>
        <li>Apply an unscented or lightly scented moisturiser to dry areas.</li>
        <li>
          If you use an attar or body oil, apply it now, sparingly, to the neck and wrists.
        </li>
        <li>Finish with the spray fragrance while the skin is still receptive.</li>
      </ol>
      <p>
        Start with the lighter or more supporting scent and let the stronger composition sit on
        top. Reversing that order buries the fragrance you actually chose.
      </p>

      <h2>Where to apply</h2>
      <p>
        Pulse points — the sides of the neck, the inner wrists, the inner elbows — are warmer, and
        warmth releases fragrance steadily through the day. Two to four applications is enough for
        most compositions. Spraying into the air and walking through it wastes most of the product
        and gives you no control.
      </p>
      <p>
        Do not rub. Friction breaks down the top notes and shortens the opening you paid for.
      </p>

      <h2>How clothing, skin and weather change perfume and fragrances</h2>
      <p>
        Fabric holds scent longer than skin, which is useful for trail but removes the interaction
        with your own chemistry — and some materials can stain, so test discreetly. Dry skin
        releases fragrance fast; moisturising first is the single most effective longevity fix.
        Heat accelerates everything, so summer needs a lighter hand, while cool air keeps a
        composition close and extends it naturally.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Applying to dry skin with nothing to anchor the scent.</li>
        <li>Layering two dominant compositions with no shared material.</li>
        <li>Over-applying, then re-applying because your nose has adapted to it.</li>
        <li>Storing bottles in a sunlit bathroom, where heat and light degrade the oils.</li>
        <li>Rubbing wrists together immediately after spraying.</li>
      </ul>
      <p>
        On safety and sensible use, the{" "}
        <Ext href="https://ifrafragrance.org/">International Fragrance Association</Ext> maintains
        the ingredient standards that fragrance houses formulate against — worth knowing if your
        skin reacts easily.
      </p>

      <h2>A simple beginner routine</h2>
      <p>
        Unscented moisturiser on the neck and wrists. A small amount of a warm, woody attar or oil
        on the same points. Two sprays of an eau de parfum sharing one of those materials. Nothing
        on the hair, nothing on the face. Reassess at hour three rather than adding more at hour
        one.
      </p>
      <p>
        That routine works particularly well with warm compositions. Sarkar Solaris — vanilla,
        sandalwood and amber, an eau de parfum at 100 ml — layers cleanly over a sandalwood base
        because the materials already overlap. If the format terminology is unfamiliar, our guide
        to{" "}
        <Link to="/blog/$slug" params={{ slug: "eau-de-parfum-vs-eau-de-toilette-vs-attar" }}>
          eau de parfum, eau de toilette and attar
        </Link>{" "}
        covers it, and{" "}
        <Link to="/blog/$slug" params={{ slug: "how-to-choose-the-right-perfume" }}>
          how to choose a perfume for your skin type
        </Link>{" "}
        explains why the same routine performs differently on different people.
      </p>
      <p>
        Layering is a small discipline with a disproportionate effect on how perfume and fragrances
        wear. Once the method is habitual, the bottle you already own will feel like a better one.{" "}
        <Link to="/perfumes/solaris">Explore Sarkar Solaris</Link> or{" "}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
          discover the Sarkar collection
        </a>
        .
      </p>
    </>
  );
}

export const articleBodies: Record<string, () => ReactNode> = {
  "how-to-choose-the-right-perfume": ChoosePerfume,
  "eau-de-parfum-vs-eau-de-toilette-vs-attar": Concentrations,
  "best-perfumes-for-evening-wear": EveningWear,
  "fragrance-layering-guide": Layering,
};
