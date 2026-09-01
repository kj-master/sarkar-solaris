import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { PerfumePickCards } from "@/components/perfume-picks";
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
        more about understanding three things: the families of scent you respond to, the way
        your own skin behaves, and the personality you want the fragrance to speak for. Get
        those right and the bottle almost chooses itself.
      </p>

      <h2>Why the best perfume is a personal decision</h2>
      <p>
        Fragrance changes after you buy it. The same composition can read warm on one person
        and sharp on another, because scent develops in contact with skin, its temperature,
        its oils and its pH. A perfume someone else wears beautifully is not evidence that it
        will suit you. It is only evidence that it is worth testing.
      </p>

      <h2>Start with fragrance families</h2>
      <p>
        Most fragrances sit within a handful of broad families, and knowing which ones draw
        you in narrows the field quickly.
      </p>
      <ul>
        <li>
          <strong>Fresh and citrus:</strong> bergamot, lemon, neroli. Bright, clean and most
          at home in daylight and heat.
        </li>
        <li>
          <strong>Floral:</strong> rose, geranium, jasmine. Delicate or opulent depending on
          concentration.
        </li>
        <li>
          <strong>Woody:</strong> sandalwood, cedarwood, vetiver. Dry or creamy, grounded and
          usually long wearing.
        </li>
        <li>
          <strong>Amber and warm:</strong> amber, vanilla, resins and spice. Rich, built for
          cooler air and later hours.
        </li>
        <li>
          <strong>Oud and leather:</strong> smoke, resin, animalic depth. Distinctive and
          often assertive.
        </li>
      </ul>

      <h2>Skin type changes everything</h2>
      <p>
        Oily skin holds fragrance molecules well, so scents last longer and project more, and
        rich amber or leather compositions can become intense faster than expected. Dry skin
        releases fragrance quickly, which flatters bright citrus briefly but cuts a
        composition short, so moisturising with an unscented lotion first gives the perfume
        something to hold on to. Warmer skin amplifies sweetness and spice, cooler skin keeps
        compositions crisper. If your skin reacts easily, the{" "}
        <Ext href="https://ifrafragrance.org/">International Fragrance Association</Ext>{" "}
        publishes the ingredient standards the industry formulates against, and applying to
        clothing instead of skin is a reasonable adjustment.
      </p>

      <h2>Five personality types and the Sarkar perfume that fits</h2>
      <p>
        Personality does not dictate a note list. It dictates volume. Ask what you want the
        fragrance to do in a room: announce, accompany or linger. The Sarkar range is a
        useful way to see that mapped across five very different registers, all unisex and
        all at 100 ml.
      </p>

      <PerfumePickCards keys={["solaris", "throne", "orion", "noble", "regal"]} />

      <p>
        If you are quiet but still command the room, with authority nobody has to be told
        about, <Link to="/perfumes/solaris">Sarkar Solaris</Link> is the natural fit. If you
        want to be remembered after you leave, Throne. If your days are busy and you want
        something effortless, Orion. If your work is your statement, Noble. If the occasion is
        the point, Regal.
      </p>

      <h2>How to test a fragrance properly</h2>
      <p>
        Paper strips show the opening and almost nothing else. Test on skin, one or two
        fragrances at a time, and then leave. The first fifteen minutes are alcohol and top
        notes burning off, the heart appears after roughly half an hour, and the base after
        two to four hours. Judge at hour three, not minute three, and avoid rubbing your
        wrists together because friction bruises the top notes.
      </p>

      <h2>Finding a signature scent</h2>
      <p>
        A signature scent is simply the composition you return to when you are not
        experimenting. It usually shares a common thread with everything else you like: a
        creamy wood, a particular sweetness, a specific dryness. Once you notice that thread,
        build around it, with one signature for most days and one or two alternates for
        weather and occasion.
      </p>

      <h2>Occasion and season</h2>
      <p>
        Heat lifts fragrance, so summer rewards fresher families such as Orion and Noble. Cold
        air holds scent close, which is why the warmth of Solaris and the depth of Regal come
        into their own after sundown. For more on that, read our guide to{" "}
        <Link to="/blog/$slug" params={{ slug: "best-perfumes-for-evening-wear" }}>
          choosing a fragrance for evening wear
        </Link>
        , and if the eau de parfum and attar labels are still unclear, our{" "}
        <Link to="/blog/$slug" params={{ slug: "eau-de-parfum-vs-eau-de-toilette-vs-attar" }}>
          guide to fragrance concentrations
        </Link>{" "}
        explains what actually differs.
      </p>
      <p>
        The best perfume, in the end, is the one that behaves well on your skin, matches the
        volume you want to speak at, and still feels right at the end of a long evening.{" "}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
          Discover the Sarkar collection
        </a>{" "}
        and start with the personality you recognise.
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
        alcohol, typically the strongest of the everyday spray formats sold in retail. The
        practical benefit is not simply that it lasts. It is that the base notes matter more.
        Woods, resins and amber have room to develop, so the fragrance moves from an opening
        through a heart and settles into something noticeably different from where it began.
        That depth is why warm and woody compositions are usually released in this format.
      </p>

      <h2>What eau de toilette means</h2>
      <p>
        Eau de toilette carries a lower proportion of oil. It reads lighter and brighter, with
        the top notes doing more of the work. Citrus, green and aquatic compositions suit it,
        because those materials are volatile by nature and a lighter formulation lets them
        shine rather than fighting a heavy base. Lighter is not lesser. In humid Indian
        summers it is often the more wearable choice, since heat already amplifies whatever
        you apply. The benefit is comfort and freshness rather than staying power.
      </p>

      <h2>What attar means</h2>
      <p>
        Attar is the oldest of the three in this part of the world: concentrated fragrance oil
        with no alcohol, traditionally distilled and often carried in a sandalwood base.
        Applied in small amounts to pulse points, it sits very close to the skin and unfolds
        slowly, with no alcoholic opening blast. Attars are intimate rather than projecting,
        which suits prayer, quiet gatherings and anyone who prefers scent discovered at close
        range. They also layer unusually well under a spray fragrance.
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
            <td>Oil, alcohol free</td>
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
            <td>Bright, top note led</td>
            <td>Dense, gradual, skin close</td>
          </tr>
          <tr>
            <th>Projection</th>
            <td>Moderate to strong</td>
            <td>Light to moderate</td>
            <td>Close to the skin</td>
          </tr>
          <tr>
            <th>Main benefit</th>
            <td>Depth and longevity</td>
            <td>Comfort in heat</td>
            <td>Intimacy and layering</td>
          </tr>
          <tr>
            <th>Typical use</th>
            <td>Evenings, occasions, cooler weather</td>
            <td>Daytime, work, humidity</td>
            <td>Rituals, close settings, layering</td>
          </tr>
        </tbody>
      </table>

      <h2>Where the Sarkar parfums sit</h2>
      <p>
        Sarkar builds at parfum strength across the range, which is why each fragrance is
        described by character rather than by label. Orion is the fresh, citrus led one for
        workdays. Noble is crisp eucalyptus and pepper over cedarwood for offices and first
        impressions. Throne is cardamom into leather and vanilla for late nights. Regal is
        oud, saffron and amber for weddings and black tie. Solaris is the warm one, vanilla,
        sandalwood and amber, at MRP ₹1,499 for 100 ml.
      </p>

      <PerfumePickCards keys={["orion", "noble", "throne", "regal"]} />

      <h2>Why concentration matters</h2>
      <p>
        Concentration decides which part of the composition you actually experience. A low
        concentration foregrounds volatile top notes, a high one gives the heart and base time
        to appear. For a broader view of how compositions are structured,{" "}
        <Ext href="https://www.britannica.com/art/perfume">Britannica</Ext> gives a clear
        historical and technical overview. Concentration also affects how much you should
        apply: a heavier formulation needs fewer sprays, and over application is the most
        common reason a good fragrance becomes tiring by mid evening.
      </p>

      <h2>Choosing by preference rather than price</h2>
      <p>
        A higher concentration costs more, which tempts people to read the label as a ranking.
        It is not. Choose the format that matches the setting: an eau de toilette for a humid
        working day, an attar when you want something private and slow, an eau de parfum when
        the composition is warm and you want it to hold through an evening.
      </p>
      <p>
        <Link to="/perfumes/solaris">Sarkar Solaris</Link> is positioned as an eau de parfum
        for exactly that reason, because vanilla, sandalwood and amber need the concentration
        to move through their stages properly. If you are still deciding between families, our
        guide to{" "}
        <Link to="/blog/$slug" params={{ slug: "how-to-choose-the-right-perfume" }}>
          choosing a perfume for your personality and skin
        </Link>{" "}
        is the natural next step, and{" "}
        <Link to="/blog/$slug" params={{ slug: "fragrance-layering-guide" }}>
          fragrance layering
        </Link>{" "}
        explains how an attar and an eau de parfum work together rather than compete.
      </p>
    </>
  );
}

function EveningWear() {
  return (
    <>
      <p>
        The best perfume for an evening is rarely the one you wore that morning. Light,
        temperature and setting all change after sundown, and a composition chosen for a
        bright working day tends to disappear precisely when you want it to hold. Evening
        fragrance is a different brief: warmth, depth and presence that does not demand
        attention.
      </p>

      <h2>Why the best perfume for evening differs from a daytime scent</h2>
      <p>
        Heat lifts fragrance off the skin quickly. Cool air does the opposite, holding a scent
        close and letting the heavier materials read clearly. That is why citrus and aquatic
        compositions feel right at noon and thin by nine, while resins, woods, leather and
        amber only come into focus once the temperature drops. Evening settings are also
        closer, and dinner tables and low lit rooms reward nuance over projection.
      </p>

      <h2>The profiles that suit the hours after sundown</h2>
      <ul>
        <li>
          <strong>Amber:</strong> golden, resinous depth that gives a composition its length.
        </li>
        <li>
          <strong>Woody:</strong> sandalwood and cedarwood bring structure and keep sweetness
          in check.
        </li>
        <li>
          <strong>Oud and leather:</strong> dark, unhurried materials made for formal nights.
        </li>
        <li>
          <strong>Warm gourmand:</strong> vanilla read as texture rather than sugar.
        </li>
      </ul>

      <h2>Dinners, rooftops and dates</h2>
      <p>
        At a dinner table, restraint matters more than richness. A fragrance competing with
        food is a fragrance applied too heavily, and two sprays placed low is usually enough.
        Rooftop evenings are the opposite problem, because open air disperses scent and a
        composition with an amber or oud base holds where a lighter one vanishes. For a date,
        choose something that only becomes apparent at close range.
      </p>

      <h2>Weddings and special occasions</h2>
      <p>
        Indian weddings are long, warm and crowded, three conditions that punish over
        application and reward a composition with a real base. Something built on sandalwood,
        amber or oud will still be recognisable hours in, while a bright opening will have
        gone by the time the evening properly begins. Apply once before leaving and resist re
        application, because in a full room less is genuinely more.
      </p>

      <h2>Projection and trail</h2>
      <p>
        Projection is how far a fragrance travels, trail is what remains after you have moved
        on. A good evening scent keeps projection moderate and trail long, which creates
        presence without imposing it. Application controls this more than the bottle does, so
        use pulse points at the neck and wrists on moisturised skin rather than a cloud
        sprayed over clothing.
      </p>

      <h2>Two Sarkar perfumes we recommend for evening wear</h2>
      <p>
        Two fragrances in the Sarkar range are built for these hours, and they answer the
        brief from opposite directions: one warm and composed, the other dark and formal.
      </p>

      <PerfumePickCards keys={["solaris", "regal"]} />

      <p>
        Choose <Link to="/perfumes/solaris">Sarkar Solaris</Link> for dinners, dates and
        evenings where you want warmth and quiet authority rather than a statement. The
        vanilla reads as texture, the sandalwood keeps it composed and the amber carries it
        through the night, at MRP ₹1,499 for 100 ml. Choose Sarkar Regal when the occasion is
        formal, because oud, saffron, amber and leather have the density that weddings, black
        tie and long ceremonies ask for.
      </p>

      <h2>Sophisticated rather than sweet</h2>
      <p>
        The most common misstep in evening fragrance is mistaking sweetness for richness.
        Sugar is loud early and tiring later. Depth comes from the interplay between a warm
        material and a dry one, vanilla held in place by sandalwood, or amber grounded by oud
        and cedarwood. That balance is what separates a composition that feels refined from
        one that feels heavy. For background on how fragrance families are classified,{" "}
        <Ext href="https://www.britannica.com/art/perfume">Britannica</Ext> is a reliable
        starting point.
      </p>
      <p>
        For a broader framework on matching scent to skin and temperament, read{" "}
        <Link to="/blog/$slug" params={{ slug: "how-to-choose-the-right-perfume" }}>
          how to choose the right perfume for your personality
        </Link>
        , or learn{" "}
        <Link to="/blog/$slug" params={{ slug: "fragrance-layering-guide" }}>
          how layering extends a fragrance
        </Link>{" "}
        across a long night. The best perfume for evening wear is simply the one that still
        feels like you at the end of it, so{" "}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
          explore the Sarkar collection
        </a>{" "}
        and find the fragrance that leaves your signature.
      </p>
    </>
  );
}

function Layering() {
  return (
    <>
      <p>
        Most people apply perfume and fragrances the same way every day and then wonder why
        the scent is gone by lunch. Layering is the corrective, a method of building scent in
        stages so it holds longer, reads with more depth and behaves predictably.
      </p>

      <h2>What makes a perfume last longer</h2>
      <p>
        Longevity is decided by three things: the weight of the materials, the concentration
        they are carried in, and the surface you put them on. Light citrus and green notes
        evaporate quickly. Heavier base materials such as sandalwood, cedarwood, patchouli,
        amber, leather, oud and musk evaporate slowly, which is why they are used to anchor a
        composition. A higher oil concentration gives those materials the volume to keep
        releasing, and moisturised skin holds them far better than dry skin does.
      </p>

      <h2>What fragrance layering means</h2>
      <p>
        Layering is the deliberate combination of scented products, a body oil, a moisturiser,
        an attar, a spray fragrance, so they support rather than fight each other. At its
        simplest it means giving a perfume a base to sit on. The safest combinations share a
        material: vanilla layers naturally with amber and sandalwood, citrus works over woods,
        rose sits comfortably with oud. Trouble comes from pairing two assertive compositions
        with nothing in common. One composition leads, the other supports.
      </p>

      <h2>The long-wearing notes in each Sarkar perfume</h2>
      <p>
        Every Sarkar parfum is anchored differently, and knowing the base tells you both how
        long it will stay and what it will feel like as it does.
      </p>
      <ul>
        <li>
          <strong>Solaris:</strong> sandalwood and amber under vanilla. Warm, creamy and
          composed, the kind of trail that feels golden rather than sweet.
        </li>
        <li>
          <strong>Throne:</strong> amber, patchouli and cedarwood beneath leather and vanilla.
          Smoky and lingering, with the longest presence in the range.
        </li>
        <li>
          <strong>Regal:</strong> amber, leather and musk under oud and saffron. Dense, dark
          and unhurried, made for formal nights.
        </li>
        <li>
          <strong>Noble:</strong> cedarwood, musk and patchouli under pepper and citrus. Dry,
          clean and precise, a quieter kind of staying power.
        </li>
        <li>
          <strong>Orion:</strong> sandalwood, musk and patchouli under lemon and lavender.
          Fresh at the top but woody underneath, so it lasts longer than a citrus usually
          would.
        </li>
      </ul>

      <PerfumePickCards keys={["solaris", "throne", "regal", "noble"]} />

      <h2>Build from the skin outward</h2>
      <ol>
        <li>Shower and pat dry, leaving skin slightly warm.</li>
        <li>Apply an unscented or lightly scented moisturiser to dry areas.</li>
        <li>If you use an attar or body oil, apply it now, sparingly, to neck and wrists.</li>
        <li>Finish with the spray fragrance while the skin is still receptive.</li>
      </ol>
      <p>
        Start with the lighter or supporting scent and let the stronger composition sit on
        top. Reversing that order buries the fragrance you actually chose.
      </p>

      <h2>Where to apply</h2>
      <p>
        Pulse points, the sides of the neck, the inner wrists and the inner elbows, are warmer,
        and warmth releases fragrance steadily through the day. Two to four applications is
        enough for most compositions. Spraying into the air and walking through it wastes most
        of the product. Do not rub, because friction breaks down the top notes.
      </p>

      <h2>How clothing, skin and weather change perfume and fragrances</h2>
      <p>
        Fabric holds scent longer than skin, which is useful for trail but removes the
        interaction with your own chemistry, and some materials can stain, so test discreetly.
        Dry skin releases fragrance fast, so moisturising first is the single most effective
        longevity fix. Heat accelerates everything, while cool air keeps a composition close
        and extends it naturally.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Applying to dry skin with nothing to anchor the scent.</li>
        <li>Layering two dominant compositions with no shared material.</li>
        <li>Over applying, then re applying because your nose has adapted.</li>
        <li>Storing bottles in a sunlit bathroom, where heat and light degrade the oils.</li>
        <li>Rubbing wrists together immediately after spraying.</li>
      </ul>
      <p>
        On safety and sensible use, the{" "}
        <Ext href="https://ifrafragrance.org/">International Fragrance Association</Ext>{" "}
        maintains the ingredient standards that fragrance houses formulate against, worth
        knowing if your skin reacts easily.
      </p>

      <h2>A simple beginner routine</h2>
      <p>
        Unscented moisturiser on the neck and wrists. A small amount of a warm, woody attar or
        oil on the same points. Two sprays of a parfum sharing one of those materials. Nothing
        on the hair, nothing on the face. Reassess at hour three rather than adding more at
        hour one. That routine works particularly well with warm compositions such as Solaris,
        which layers cleanly over a sandalwood base because the materials already overlap.
      </p>
      <p>
        If the format terminology is unfamiliar, our guide to{" "}
        <Link to="/blog/$slug" params={{ slug: "eau-de-parfum-vs-eau-de-toilette-vs-attar" }}>
          eau de parfum, eau de toilette and attar
        </Link>{" "}
        covers it, and{" "}
        <Link to="/blog/$slug" params={{ slug: "how-to-choose-the-right-perfume" }}>
          how to choose a perfume for your skin type
        </Link>{" "}
        explains why the same routine performs differently on different people. Once the
        method is habitual, the bottle you already own will feel like a better one.{" "}
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
