export interface JournalEntry {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  author: string;
  image: string;
  category: string;
  relatedProduct?: string;
}

export const journalEntries: JournalEntry[] = [
  {
    slug: "the-geisha-story",
    title: "Why Geisha is the World's Most Extraordinary Coffee",
    excerpt: "From its Ethiopian origins to the misty highlands of Panama, we trace the journey of the varietal that changed everything.",
    body: `The Gesha varietal — often spelled Geisha by the farms that made it famous — originated in the forests of southwestern Ethiopia near the town of Gesha. For decades it sat in gene banks and experimental plots, largely overlooked. Then, in 2004, Hacienda La Esmeralda in Boquete, Panama, entered a lot of Gesha in the Best of Panama auction and stunned the world with a score no one had seen before.

The cup was unlike anything in specialty coffee. Jasmine, bergamot, peach, honey, lychee — not as hints, but as the defining character of the coffee. It sold for $21 per pound, shattering previous auction records. The specialty coffee world had found something genuinely extraordinary.

Today, Gesha commands some of the highest prices in the specialty market. The finest lots from Panama, Colombia, and Ethiopia regularly sell for over $100 per pound at auction. What makes it worth it? The answer is in the genetics. Gesha is a low-yielding, disease-susceptible, labor-intensive variety. Farmers take a significant risk to grow it. But the genetic expression — that combination of floral aromatics, citric brightness, and tropical fruit sweetness — is unmatched by any other varietal.

When grown at high altitude, processed with precision, and roasted with care, it is simply the most complex, expressive cup that coffee can produce. The Coffee Power Geisha comes from a small farm in Boquete, Chiriquí, at 1,600–1,800 meters. It is washed-processed, which strips away the fruit and allows the varietal character to shine in its purest form. Each harvest is limited to 50 kilograms. When it sells out, it's gone until next year.`,
    publishedAt: "2026-04-10",
    author: "Chris Rosas",
    image: "/assets/backgrounds/geisha.jpg",
    category: "Origin Stories",
    relatedProduct: "geisha",
  },
  {
    slug: "golden-sunset-harvest",
    title: "Golden Sunset: A Natural Process Worth the Wait",
    excerpt: "How six weeks of sun-drying on raised beds in Huila produces the most complex cup in our collection.",
    body: `In the mountains of Huila, Colombia, there is a farm that does things differently. Where most producers rush the drying process to turn inventory faster, this family takes six weeks. Six weeks of turning the cherries by hand, three times a day, under the Andean sun. Six weeks of patience that almost no one in the commodity market would tolerate.

The result is what we call Golden Sunset — and the name is not marketing. It is a description. The cup unfolds the way a sunset does: warm, layered, impossible to rush. Cinnamon opens the nose, dark chocolate settles in the body, and dried tropical fruit comes through as it cools. The finish lasts for minutes.

Natural processing means the coffee cherry dries whole around the seed. During those weeks on the raised beds, the sugars from the fruit slowly penetrate the bean, creating a level of sweetness that washed coffees simply cannot achieve. It is not a shortcut — it is a different kind of craftsmanship.

Chris Rosas first encountered this lot at a cupping event in Bogotá. He cupped it blind, meaning he didn't know the producer, the farm, or the process. His notes from that session read: "Something special. This is the sunset." He tracked down the farm the same week. This is how Coffee Power works — not through catalogs, but through experience. Golden Sunset has been in the collection ever since.`,
    publishedAt: "2026-04-01",
    author: "Chris Rosas",
    image: "/assets/backgrounds/golden-sunset.jpg",
    category: "Origin Stories",
    relatedProduct: "golden-sunset",
  },
  {
    slug: "bourbon-supremo-narino",
    title: "Bourbon Supremo: High Altitude, Higher Standards",
    excerpt: "At 2,200 meters, the nights in Nariño are cold enough to freeze. That cold is what makes this Bourbon taste like nothing else.",
    body: `The department of Nariño sits in Colombia's far south, on a high plateau where the Andes crowd together and the air gets thin. Coffee shouldn't grow this well at 2,200 meters — the temperatures are too cold, the season too long. But that is exactly the point. Cold nights slow the maturation of the cherry, allowing sugars to concentrate over months instead of weeks. The result is a density of sweetness that lower-altitude coffees simply cannot replicate.

The Bourbon variety has been grown in the Americas for centuries. Brought from Yemen to Reunion Island (then called Bourbon) by the French in the early 1700s, it eventually spread across Latin America's coffee belt. In Nariño, it found a terroir that suits it perfectly — the cold, the altitude, the volcanic soil from the nearby active crater of Galeras.

Our Bourbon Supremo is washed-processed, allowing the varietal's clean, structured character to come through without interference. The cup opens with brown sugar and red apple, develops through walnut and vanilla, and finishes with a warmth that lingers. It is classic Colombian coffee taken to its highest expression.

When we say "Supremo," we mean something specific in the Colombian grading system — beans that pass through a screen size 17 or larger, indicating exceptional density and uniformity. Not all Bourbon from Nariño makes this grade. The Coffee Power lot is selected from the top 10% of each harvest. This isn't marketing language. It is the result of a rigorous selection process that begins at the farm and ends at our cupping table in Madrid.`,
    publishedAt: "2026-03-25",
    author: "Chris Rosas",
    image: "/assets/backgrounds/bourbon.jpg",
    category: "Origin Stories",
    relatedProduct: "bourbon-supremo",
  },
  {
    slug: "the-origin-of-el-origen",
    title: "El Origen: The Coffee That Started Everything",
    excerpt: "Before there was Coffee Power, there was a single cup of Colombian Caturra that changed Chris Rosas's trajectory forever.",
    body: `Every obsession has a beginning. For Coffee Power, it was a cup of Colombian washed Caturra from Cauca — a coffee so clean, so balanced, so transparently good that it was impossible to dismiss as a beverage. That cup is what we now call El Origen. The origin. The one that started everything.

Chris Rosas had drunk coffee his entire life. In Spain, where he grew up, coffee is practically a daily ceremony. The morning cortado at the bar, the after-lunch café solo, the occasional late espresso. He understood coffee as ritual. But he hadn't yet understood coffee as flavor. El Origen changed that. It arrived at a cupping table in Madrid, among a flight of six coffees. He sipped it, paused, and sipped it again. There was something in it that he recognized — not from other coffees, but from music. A clarity. A structure. A sense that every note was exactly where it should be.

Cauca is one of Colombia's most important growing departments, situated on the western side of the central Andes. The Caturra variety, a natural mutation of Bourbon, has been grown here since the 1940s. It produces smaller cherries, ripens consistently, and in the right hands, makes a coffee of remarkable precision. Ours comes from a cluster of small farms in the municipality of Cajibío, all between 1,600 and 1,900 meters.

The washed process strips everything back to the bean's essential character — citrus brightness, milk chocolate body, almond finish. It is not the most complex coffee in the collection. It is the most honest. And honesty, in coffee as in art, is harder to achieve than complexity.`,
    publishedAt: "2026-03-18",
    author: "Chris Rosas",
    image: "/assets/backgrounds/el-origen.png",
    category: "Origin Stories",
    relatedProduct: "el-origen",
  },
  {
    slug: "amucc-the-women-of-cauca",
    title: "AMUCC: The Women Who Grow the World's Most Ethical Coffee",
    excerpt: "Behind every bag of AMUCC is a story of solidarity, empowerment, and extraordinary coffee from the women of Cauca.",
    body: `AMUCC stands for Asociación de Mujeres Unidas del Cauca — the United Women's Association of Cauca. It is a cooperative of female coffee farmers who have collectively managed their farms, their processing, and their market access for over a decade. In a region where land ownership and income have historically been dominated by men, AMUCC represents something genuinely radical: women growing excellent coffee on their own terms.

The cooperative's farms sit between 1,700 and 1,950 meters in Cauca's central highlands. Members grow a mix of Castillo and Colombia varietals — both developed by the Colombian National Coffee Research Center (Cenicafé) for disease resistance and cup quality. The processing is washed, done communally at the cooperative's centralized station, where consistent quality can be maintained across all member lots.

The cup is extraordinary. Panela sweetness opens the nose — panela being the unrefined cane sugar used across Latin America, with a depth and warmth that white sugar doesn't have. Tropical fruit develops through the mid-palate, and red cherry brightness carries through to a clean, sweet finish. It is a coffee that tastes like the work that went into it: careful, intentional, and deeply human.

Chris Rosas insists that Coffee Power's premium for this lot goes directly to the cooperative's community development fund, not into a general export price. AMUCC members use those funds for education, healthcare, and infrastructure on their farms. When you drink this coffee, you are participating in something that matters. That is not a claim we make lightly.`,
    publishedAt: "2026-03-10",
    author: "Chris Rosas",
    image: "/assets/backgrounds/amucc.jpg",
    category: "Origin Stories",
    relatedProduct: "amucc",
  },
  {
    slug: "caracolillo-the-rare-peaberry",
    title: "Caracolillo: Nature's Most Concentrated Coffee",
    excerpt: "When a coffee cherry produces only one seed instead of two, something extraordinary happens to the flavor inside.",
    body: `In Spanish, caracolillo means "little snail." It is the name given to the peaberry — a natural genetic anomaly that occurs in roughly 5% of all coffee cherries. Normally, a coffee cherry contains two seeds that grow facing each other, flat on one side. Occasionally, only one seed forms inside the cherry. Without a partner to press against, it grows into a small, rounded shape — like a snail, or like a pearl.

The peaberry has fascinated coffee people for generations. Because it grows alone in the cherry, it receives all the nutrients the fruit has to offer, rather than sharing them with a twin. This concentration of resources is thought to produce a denser, more complex bean. The roasting behavior is different too — the rounded shape rolls more freely in the drum, roasting more evenly than flat-sided beans.

Our Caracolillo comes from Nariño, Colombia — the same high-altitude department as our Bourbon Supremo. But the experience is entirely different. Lemon brightness opens the cup in a way that is fresh and almost bracing. Green tea delicacy develops on the mid-palate, followed by milk chocolate warmth on the finish. It is a coffee of contrasts — simultaneously delicate and concentrated, floral and chocolatey.

Only a handful of farms in Nariño sort for peaberry. It requires hand-sorting through an entire harvest to isolate the round beans from the flat ones — a labor-intensive process that most producers skip entirely. The farmers who supply our Caracolillo lot understand what they have. They treat this separation as the work of artisans, not field workers. We are fortunate to know them.`,
    publishedAt: "2026-02-28",
    author: "Chris Rosas",
    image: "/assets/backgrounds/amucc.jpg",
    category: "Origin Stories",
    relatedProduct: "caracolillo",
  },
  {
    slug: "costa-rica-tarrazu",
    title: "Costa Rica Tarrazú: The Benchmark of Precision",
    excerpt: "From the legendary Tarrazú valley, a washed coffee that represents what Central American precision looks and tastes like.",
    body: `If you want to understand what Central American washed coffee can be at its best, start in Tarrazú. This valley in the Talamanca mountain range of Costa Rica has been producing specialty coffee for over a century. It is one of the most geographically perfect places in the world for Arabica cultivation — volcanic soil, well-distributed rainfall, consistent cloud cover, and altitudes between 1,500 and 1,800 meters that slow cherry maturation without the extreme cold of Nariño or the mist-soaked density of Ethiopian highlands.

Costa Rican coffee law is unusually strict. The country has banned robusta cultivation entirely since 1988, making it the only nation in the world to legislate that only Arabica may be grown commercially. The result is a baseline of quality that you can trace in every cup — even the most ordinary Costa Rican coffee has a cleanliness and sweetness that reflects decades of national commitment to Arabica excellence.

The Coffee Power Costa Rica lot comes from a group of small family farms in the Tarrazú canton, processing their cherries through a local wet mill that operates during the October–February harvest. The washed process enhances the coffee's natural clarity — red berries, honey sweetness, milk chocolate body, and a peach-like finish that makes this one of the most approachable and consistently excellent origins in the collection.

Chris Rosas describes Tarrazú as "the musician who always plays in tune." Not always the most exciting performer, but the one you trust most when you need something reliably beautiful. We serve this coffee at origin price despite its accessibility, because the farmers who produce it deserve the same respect as those producing the more exotic lots.`,
    publishedAt: "2026-02-20",
    author: "Chris Rosas",
    image: "/assets/backgrounds/costa-rica.png",
    category: "Origin Stories",
    relatedProduct: "costa-rica",
  },
  {
    slug: "el-bendecido-anaerobic-natural",
    title: "El Bendecido: When Fermentation Becomes Art",
    excerpt: "Anaerobic natural fermentation taken to its joyful extreme — the most intense, wine-like coffee in the collection.",
    body: `El Bendecido — "The Blessed One" — is not a coffee for everyone. It is loud. It is bold. It declares itself from the moment you open the bag. If you prefer clean, restrained cups, this will unsettle you. If you want coffee to feel like an event, this will be the most memorable cup you've had this year.

Anaerobic natural processing begins with sorting and washing whole cherries, then placing them in sealed tanks from which oxygen is removed. In this oxygen-deprived environment, specific anaerobic bacteria ferment the coffee over 72–96 hours, producing a dramatically different set of organic acids than conventional fermentation. The result is a cup of extraordinary intensity — passionfruit, wine-like complexity, blueberry, and dark honey, all amplified far beyond what the variety would naturally express.

The Caturra variety used here comes from Huila, where the farm owner has been experimenting with anaerobic processing for six years. She has refined her approach to the point where the fermentation doesn't overwhelm — it amplifies. There is still the coffee underneath. You can taste the elevation, the volcanic soil, the care. But it is dressed in the most extravagant clothes.

Chris Rosas cups El Bendecido last in any tasting session, because it would make everything after it seem quiet by comparison. He first encountered it at a Colombian specialty event in 2024, where it stopped a room of experienced cuppers mid-conversation. "When a coffee makes professionals go quiet," he says, "you know it has done something genuinely difficult." This is that coffee.`,
    publishedAt: "2026-02-12",
    author: "Chris Rosas",
    image: "/assets/backgrounds/el-bendecido.png",
    category: "Process & Craft",
    relatedProduct: "el-bendecido",
  },
  {
    slug: "esencia-de-victoria",
    title: "Esencia de Victoria: The Rarest Pink in Coffee",
    excerpt: "Pink Bourbon is Colombia's most coveted variety. This honey-processed lot is everything that makes it extraordinary.",
    body: `Pink Bourbon is not a color. It is a genetic rarity. A natural mutation of the Bourbon variety, it produces cherries of a distinctive pinkish-rose hue when ripe — unusual enough that farmers who first encountered it often couldn't tell when to harvest it, because it didn't turn the red or yellow they expected. Today, Pink Bourbon is one of the most sought-after varieties in specialty coffee, commanding auction premiums that rival Gesha.

The variety grows in limited quantities in Colombia's Huila department, where the combination of altitude (1,750–2,000 meters), volcanic soil, and bi-annual harvest cycles creates conditions for extraordinary expression. Its cup profile is famously floral — rose, hibiscus, raspberry — with a delicacy that washed processing would enhance but honey processing enriches further.

Honey processing is the middle path between washed and natural. The skin of the cherry is removed, but some of the sticky mucilage — the "honey" — is left on the bean during drying. The amount of mucilage retained determines whether you have a yellow, red, or black honey. Our Esencia de Victoria is a honey process with moderate mucilage retention, adding sweetness and body without the intense fruitiness of a natural. The result is hibiscus brightness, raspberry sweetness, and a brown sugar finish that coats the palate gently.

Chris Rosas named this coffee "Esencia de Victoria" — Essence of Victory — after the farm owner, Victoria, who cultivated and isolated the Pink Bourbon plants over years of patient observation. Calling her work a victory is an understatement. It is a masterpiece.`,
    publishedAt: "2026-02-05",
    author: "Chris Rosas",
    image: "/assets/backgrounds/esencia-victoria.jpg",
    category: "Origin Stories",
    relatedProduct: "esencia-de-victoria",
  },
  {
    slug: "hawaii-kona-elite",
    title: "Hawaii Kona Elite: The Rarest American Coffee",
    excerpt: "Grown on the volcanic slopes of Mauna Loa at 600–900 meters — why Kona coffee commands extraordinary prices and delivers extraordinary cups.",
    body: `The Kona coffee district occupies a narrow strip of land on the western slope of Mauna Loa volcano on Hawaii's Big Island — roughly 30 miles long and two miles wide. This microclimate is almost impossibly specific: warm mornings for photosynthesis, afternoon cloud cover and light rain for moisture, cool evenings to slow maturation. The volcanic soil is young, mineral-rich, and drains perfectly. Nothing about this geography was engineered for coffee. It simply happened to be perfect.

Kona coffee has been produced commercially since the 1820s. Its history is tangled with Hawaii's agricultural and social story — from the plantation era through Japanese-American family farms in the mid-20th century to today's small holdings, many of which are under five acres. The farms are tiny by global standards, and the labor costs of harvesting on steep volcanic slopes are extraordinarily high. This is why Kona coffee is expensive, and why so much of what is sold as "Kona blend" in global supermarkets contains as little as 10% actual Kona beans.

The Coffee Power Kona Elite is 100% authentic Kona, sourced directly from a family farm at the upper end of the district's elevation range. The Kona Typica variety — a descendant of the original Bourbon introductions of the 19th century — produces a cup of remarkable smoothness and richness. Macadamia nut sweetness, vanilla warmth, milk chocolate body, and caramel finish. The acidity is so gentle that even those who think they don't like coffee acidity will find nothing to resist.

This is the coffee that American royalty once drank exclusively. It remains extraordinary. We limit our allocation to 30 kilograms per harvest to ensure we can maintain the direct relationship with the family that produces it.`,
    publishedAt: "2026-01-28",
    author: "Chris Rosas",
    image: "/assets/backgrounds/hawaii.png",
    category: "Origin Stories",
    relatedProduct: "hawaii-kona-elite",
  },
  {
    slug: "kenia-premium-sl-varietals",
    title: "Kenya Premium: Africa's Most Complex Cup",
    excerpt: "The legendary SL28 and SL34 varietals from Kirinyaga — why Kenya produces coffee unlike anywhere else on earth.",
    body: `The SL28 and SL34 varietals were developed in the 1930s by Scott Agricultural Laboratories in Kenya — hence the "SL" designation. They were selected initially for drought tolerance, but what Scott Labs discovered almost by accident was that these varieties produced a cup of startling complexity. Blackcurrant, dark berry, grapefruit, tomato — a savory-meets-fruity intensity that no other coffee-growing region has ever replicated, despite decades of trying.

Kenya's cup quality is the product of several factors working together. The volcanic red clay soils of the central highlands are uniquely mineral-rich. The double-washed processing method used by most Kenyan washing stations — where the coffee is washed twice, with an extended soak between — produces extraordinary clarity and brightness. And the cooperative auction system, despite its complexities, incentivizes farmers to prioritize quality by linking grade to price.

Our Kenya Premium comes from the Kirinyaga county, on the southern slopes of Mount Kenya at 1,700–2,000 meters. The double-fermented washed process produces a cup of even greater intensity than standard Kenyan processing — the extended fermentation amplifies the blackcurrant and grapefruit notes while maintaining a structure and clarity that prevents it from becoming muddy or overfermented.

Chris Rosas describes Kenyan coffee as "the coffee that argues with you." It doesn't sit quietly in your cup. It demands engagement — it challenges your palate, pushes you to pay attention, rewards concentration. For those who want coffee to be an intellectual experience, Kenya is the answer. For everyone else, it will at minimum make you reconsider everything you thought you knew about what coffee can taste like.`,
    publishedAt: "2026-01-20",
    author: "Chris Rosas",
    image: "/assets/backgrounds/kenia.jpg",
    category: "Origin Stories",
    relatedProduct: "kenia-premium",
  },
  {
    slug: "nicaragua-pacamara",
    title: "Nicaragua Pacamara: The Giant with the Generous Heart",
    excerpt: "The Pacamara variety produces the largest beans in specialty coffee — and one of the most nuanced flavor profiles in Central America.",
    body: `Pacamara is a hybrid variety created in El Salvador in 1958 by crossing Pacas (a Bourbon mutation) with Maragogipe (a Typica mutation known for its enormous bean size). The result is a variety that looks almost comically large compared to standard coffee beans — often more than twice the size of Typica — and produces a cup of remarkable generational sweetness and complexity.

Nicaragua adopted Pacamara enthusiastically in the 1980s and 1990s, and the variety found a particularly welcoming terroir in the Jinotega department — a mountainous region in northern Nicaragua where cloud forest and coffee cultivation exist side by side. The shade-grown tradition here is not a marketing term but a function of the ecosystem. The trees that shade the coffee farms are the same trees that shelter the local wildlife and regulate the watershed.

The Coffee Power Nicaragua Pacamara is washed-processed, allowing the varietal's natural character to express fully without the additional sweetness of honey or natural processing. What emerges is stone fruit brightness — peach and nectarine — underpinned by dark chocolate depth and brown sugar sweetness. The Pacamara's large bean size means longer contact time during brewing, rewarding those who slow down their extraction a little.

Chris Rosas has a particular affection for this coffee. "Pacamara is the gentle giant," he says. "Everything about it is generous — the size of the beans, the weight of the body, the sweetness of the finish. It doesn't show off. It just gives." We've been sourcing from the same three farms in Jinotega for four consecutive harvests. Consistency matters in relationships as much as in coffee.`,
    publishedAt: "2026-01-12",
    author: "Chris Rosas",
    image: "/assets/backgrounds/nicaragua.png",
    category: "Origin Stories",
    relatedProduct: "nicaragua",
  },
  {
    slug: "panama-geisha-natural",
    title: "Panama Geisha Natural: The Wild Side of an Icon",
    excerpt: "Where the washed Geisha offers clarity, this natural-processed sister shows its most intoxicating, tropical face.",
    body: `Two coffee farms in Volcán, Chiriquí, sit at the same altitude, grow the same Gesha variety, and employ equally skilled pickers. The difference between them is what happens after harvest. One washes their coffee, removing all fruit before drying. The other dries the whole cherry, fruit intact, in the Chiriquí sun for three to four weeks. The result from the second farm is our Panama Geisha Natural — and it is a completely different experience.

Natural processing on a Gesha varietal is an exercise in amplification. The genetic sweetness and florality of Gesha — already extraordinary — is pushed further by the extended contact with the cherry's sugars during drying. What was jasmine becomes tropical fruit explosion. What was peach becomes mango, strawberry, and passionfruit simultaneously. The elderflower finish intensifies. The cup that was already unlike any other becomes even more impossible to describe adequately.

Volcán Barú, the extinct volcano on whose slopes these farms sit, provides a perfect terroir for this kind of processing. The altitude ensures cool nights that slow the drying, preventing over-fermentation. The dry season in Chiriquí provides the low humidity needed for clean natural processing. Everything about this geography conspires to make exceptional natural-processed coffee.

This is the coffee we serve at the most important moments. Not every day — it would lose its power. But when someone is encountering specialty coffee for the first time, or when we want to show what this collection is truly capable of, we reach for this. It is our most provocative origin. The one that makes people put down their phones.`,
    publishedAt: "2026-01-05",
    author: "Chris Rosas",
    image: "/assets/backgrounds/panama.jpg",
    category: "Origin Stories",
    relatedProduct: "panama-geisha",
  },
  {
    slug: "peru-cajamarca",
    title: "Peru: The Andean Secret of Cajamarca",
    excerpt: "High in the northern Andes, where morning mist and volcanic soil conspire to produce a cup of extraordinary balance and sweetness.",
    body: `Peru is a country of extraordinary coffee terroir that has been systematically underestimated for decades. The country's northern departments — Cajamarca, Amazonas, San Martín — sit at altitudes between 1,600 and 2,000 meters, receive abundant rainfall from the Amazon basin, and cultivate Arabica varieties on volcanic slopes that rival anything Colombia or Central America can offer. What Peru has lacked, historically, is infrastructure, market access, and the international attention that drives investment and improvement.

That is changing. Over the past decade, a generation of young Peruvian coffee farmers has embraced specialty coffee as an economic opportunity, investing in post-harvest processing, building direct relationships with international buyers, and pursuing quality with the kind of obsession that was previously more common in Colombia and Ethiopia.

Our Cajamarca lot comes from a small cooperative of twelve farms in the municipality of San José del Alto, at 1,600–2,000 meters. The washed process reveals a cup of remarkable clarity and balance: apple brightness, citrus notes, honey sweetness, and a warm almond finish. It is not the most complex coffee in the collection. It is the one that makes you happy in the simplest, most uncomplicated way — a coffee that asks nothing of you except presence.

Chris Rosas once said that Peru is "the best coffee origin that most people have never had a good cup from." The quality is real. The story is real. The problem has always been distribution and market access. By sourcing directly from Cajamarca and pricing this lot at a level that reflects its actual quality, we are making a small argument about how specialty coffee should work. Every bag sold is a small vote for Peruvian farmers.`,
    publishedAt: "2025-12-28",
    author: "Chris Rosas",
    image: "/assets/backgrounds/peru.png",
    category: "Origin Stories",
    relatedProduct: "peru",
  },
  {
    slug: "puerto-rico-yauco",
    title: "Puerto Rico Yauco: Once Reserved for Royalty",
    excerpt: "The coffee that was served exclusively to the Vatican and European royalty is finally accessible. Here is why it is worth every cent.",
    body: `Puerto Rico's Yauco Selecto was, for most of the 20th century, one of the world's most exclusive coffees. It was exported almost entirely to Europe's finest tables — Vatican City, royal courts, and five-star hotels that could afford to pay for something genuinely extraordinary. The Puerto Rican government protected its production, limited its export, and treated it as a national treasure.

Coffee production in Puerto Rico declined dramatically in the mid-20th century as the island's economy shifted toward manufacturing and migration. By the 1970s, much of what had made Yauco exceptional — the old Bourbon trees, the traditional processing methods, the generational knowledge — had been lost or abandoned. What remained was enough to preserve the genetic material, but not enough to supply a meaningful market.

The revival of Puerto Rican specialty coffee began in the 2000s, led by a small group of farmers determined to reclaim the island's coffee heritage. Our supplier in Yauco has been central to this revival — replanting old Bourbon trees, rebuilding wet processing infrastructure, and pursuing direct trade relationships with international buyers who understand what they're working with.

The cup is exactly what royalty would have demanded. Rich caramel sweetness opens immediately, followed by a hint of rum — the island's most famous export — and dark chocolate depth. Brown sugar warmth carries through to a smooth, full finish. The acidity is low and sweet, making this one of the most immediately approachable coffees in our collection. It is not challenging. It is luxurious. Sometimes that is exactly what you need.`,
    publishedAt: "2025-12-20",
    author: "Chris Rosas",
    image: "/assets/backgrounds/puerto-rico.jpg",
    category: "Origin Stories",
    relatedProduct: "puerto-rico",
  },
  {
    slug: "brasil-cerrado",
    title: "Brasil Cerrado Mineiro: The Backbone of Espresso",
    excerpt: "From the sun-soaked plateau of Minas Gerais — why Brazil's natural Yellow Bourbon is the world's most important espresso foundation.",
    body: `Brazil produces approximately 40% of the world's coffee. Most of it is commodity-grade, grown on vast mechanized farms in the state of São Paulo and Paraná, harvested by strip-picking and dried on concrete patios. None of that is what we source. The Coffee Power Brasil comes from a very different part of the country — Cerrado Mineiro, in the high plateau of Minas Gerais, where a small community of specialty farmers has turned Brazil's most recognizable coffee region into something worth paying attention to.

The Cerrado is a tropical savanna — vast, flat, sunny, with distinctly defined wet and dry seasons. The flat terrain allows for careful agricultural management in ways that the steep slopes of Colombia or Ethiopia do not. The altitude is lower here (900–1,200 meters) than in our other origins, but the extreme temperature variation between day and night achieves a similar effect to high-altitude farming: slow cherry maturation, concentrated sugars, complex flavor development.

Our Yellow Bourbon natural lot is dried on the farm's elevated drying patios for up to 30 days. The Yellow Bourbon variety, a natural mutation of the original Bourbon trees introduced to Brazil in the 1800s, produces a cup that is warmer and nuttier than its red cousin. Hazelnut, dark chocolate, dried fig, and vanilla — the flavors of a great espresso in their most essential form.

If you make espresso, this coffee should be in your regular rotation. Its heavy body, low acidity, and natural sweetness make it the ideal foundation for milk-based drinks. But don't dismiss it as an espresso-only coffee. Brewed as a filter in a French press or Chemex, the nuttiness and chocolate open into something more complex and rewarding than most people expect from Brazil.`,
    publishedAt: "2025-12-12",
    author: "Chris Rosas",
    image: "/assets/backgrounds/brasil.jpg",
    category: "Process & Craft",
    relatedProduct: "brasil",
  },
  {
    slug: "relax-honey-bourbon",
    title: "Relax: Coffee as a Form of Permission",
    excerpt: "A honey-processed Bourbon from Nariño built for one purpose — giving yourself permission to slow down.",
    body: `We named this coffee Relax because it is an instruction. Not a description of flavor, though it delivers that too. An instruction. Put down the phone. Stop checking the time. Brew this slowly. Drink it before anything else needs your attention.

The Bourbon variety from Nariño, Colombia, is processed here with a honey method — the skin of the cherry is removed, but the sweet mucilage is left partially intact on the bean during drying. This technique, common in Central America but rarer in Colombia, produces a coffee of notable sweetness and texture. Lavender, vanilla, coconut, and white chocolate emerge not as tricks of roasting but as the natural expression of a Bourbon varietal that has been given weeks to slowly release its sugars into the bean.

The name Relax also reflects something about how we think this coffee should be consumed. Many of the coffees in our collection are designed to challenge — the Kenya, the El Bendecido, the Panama Geisha Natural. Relax is designed to restore. It asks nothing of you in terms of analytical engagement. It simply delivers comfort, warmth, and sweetness in the most uncomplicated way.

The farm that produces this lot in Nariño is a family operation — three generations working the same land, which has been certified organic for fifteen years. The farm sits at 1,600–1,850 meters, and the Bourbon trees have been growing on these specific plots for over fifty years. Old trees produce lower yields but often more complex, more concentrated cups. Relax is a product of those trees, that family, and that land. When you drink it, you are drinking their patience.`,
    publishedAt: "2025-12-05",
    author: "Chris Rosas",
    image: "/assets/backgrounds/relax.jpg",
    category: "Origin Stories",
    relatedProduct: "relax",
  },
  {
    slug: "serenidad-tolima",
    title: "Serenidad: A Cup for Quiet Mornings",
    excerpt: "From the tranquil valleys of Tolima — a coffee of chamomile-like gentleness and extraordinary peace.",
    body: `Tolima is not Colombia's most famous coffee department. That distinction belongs to Huila, Nariño, or Antioquia — regions with established specialty reputations and international buyer relationships. Tolima has traditionally been overshadowed, its coffees often blended into commercial lots, its farmers undercompensated for exceptional work. The specialty market is slowly correcting this, and our Serenidad lot is part of that correction.

The Caturra variety here grows at 1,500–1,800 meters in the municipality of Planadas, a region that sits at the junction of three mountain ranges and benefits from an unusual microclimate — steady temperatures, reliable rainfall, and the kind of stillness that makes this place feel different from the rest of Colombia's coffee belt. The farmers in Planadas describe their region as tranquilo. Peaceful. That word made its way into the coffee's name.

Washed processing reveals a cup of extraordinary delicacy. Chamomile — not as a faint hint but as an actual note, clear and present — opens the nose. Peach sweetness develops through the mid-palate, followed by honey warmth and white grape brightness on the finish. It is a coffee that does not announce itself. It arrives quietly and stays with you.

Chris Rosas serves Serenidad at his cupping table after the intense, fermented, or bold coffees — as a kind of reset. After El Bendecido's passionfruit intensity or Kenya's blackcurrant boldness, Serenidad arrives like the answer to a question you didn't know you were asking. Some people discover it is their favorite coffee in the collection. Not because it is the most interesting, but because it is the most peaceful. That is a harder thing to achieve than intensity.`,
    publishedAt: "2025-11-28",
    author: "Chris Rosas",
    image: "/assets/backgrounds/serenidad.jpg",
    category: "Origin Stories",
    relatedProduct: "serenidad",
  },
  {
    slug: "supremo-colombia-classic",
    title: "Supremo: The Colombian Standard-Bearer",
    excerpt: "Colombia's classic large-screen grade, elevated to specialty. Why the world's most recognizable coffee style still surprises us.",
    body: `When most people in Europe think of Colombian coffee, they think of Supremo. The name has been on packaging since the 1970s, associated with a smooth, chocolatey, reliably pleasant cup that fueled a global reputation for Colombian excellence. For much of that history, "Supremo" was more a grade than a promise — it indicated bean size (screen 17+) but said little about flavor or farm practices.

The Coffee Power Supremo is a different proposition. We use the grade designation accurately — only beans that pass through a screen 17 are included — but the selection begins long before the grading table. We source from multiple farms across Colombia's central highland regions, cup every lot individually, and blend only those that demonstrate the best expression of the classic Colombian profile: milk chocolate sweetness, caramel richness, red fruit brightness, and walnut warmth.

This is not a coffee that will stop a room of experienced cuppers. It is a coffee that will make you want another cup — and then another. Its genius is in drinkability. The balance is so precisely calibrated that nothing stands out too far in any direction. The acidity is bright but not aggressive. The sweetness is present but not cloying. The body is satisfying without being heavy. It is the Colombian cup that taught the world to trust Colombian coffee.

We roast Supremo slightly darker than our other Colombian origins — not dark enough to lose the fruit notes, but enough to bring out the caramel and chocolate and create a cup that works beautifully as espresso, filter, moka, or any method you prefer. If you're looking for one Colombian coffee that does everything well, this is the one.`,
    publishedAt: "2025-11-20",
    author: "Chris Rosas",
    image: "/assets/backgrounds/supremo-pc.jpg",
    category: "Education",
    relatedProduct: "supremo",
  },
  {
    slug: "total-relax-tabi-natural",
    title: "Total Relax: Full Surrender to Colombian Sweetness",
    excerpt: "The Tabi variety, unique to Colombia, processed naturally in Huila — the sweetest, most unconditional cup in the collection.",
    body: `Tabi means "good" in the Guambiano language, spoken by the indigenous communities of Colombia's Cauca department. The variety was developed by Cenicafé, Colombia's national coffee research center, as a hybrid of Timor, Bourbon, and Typica — combining disease resistance with exceptional cup quality. It produces large cherries, long beans, and a cup of remarkable sweetness and fruit presence. In Huila's microclimate, natural processing turns those qualities into something extraordinary.

Natural processing means the whole cherry dries intact for three to five weeks. In Huila's controlled drying environment — elevated beds, careful turning, monitored humidity — the sugars from the cherry's pulp slowly migrate into the bean, building a sweetness that no washed process can replicate. With the Tabi variety's already-elevated sugar content, the result is a cup that verges on dessert-like intensity without losing its coffee character.

Plum, grape, milk chocolate, honey — the flavors layer on top of each other in a way that makes each sip slightly different from the last. As the cup cools, the honey deepens and the grape note becomes more prominent. The body is dense and syrupy without being heavy. The finish is long, sweet, and completely satisfying. This is the coffee equivalent of lying down after a long day and not having to move.

Total Relax is the final coffee in our Relax series — three coffees (Relax, Total Relax) designed around a single idea: that coffee can be restorative, not stimulating. That the ritual of brewing and drinking can be, in itself, a form of rest. Chris Rosas designed these coffees for evenings, for slow Sundays, for the moments when the world has asked enough of you. The Tabi variety, processed naturally in Huila, earns the name completely.`,
    publishedAt: "2025-11-12",
    author: "Chris Rosas",
    image: "/assets/backgrounds/relax.jpg",
    category: "Process & Craft",
    relatedProduct: "total-relax",
  },
  {
    slug: "night-edition-bold-dark",
    title: "Night Edition: The Coffee That Ends the Day Right",
    excerpt: "A bold, dark-roasted Colombian blend from Antioquia — the cup that was made for evenings, espresso, and everything after dinner.",
    body: `Not every coffee should taste like a floral arrangement. Sometimes you want something bold, unambiguous, and satisfying in the most direct way. Night Edition was created for those moments — the after-dinner espresso, the late-night moment of quiet before sleep, the cup that serves as punctuation at the end of a good day.

The blend comes from Antioquia, Colombia — a department more associated with Medellín's urban culture than with specialty coffee, but home to some of Colombia's most reliable commercial farms. The Caturra blend sourced here is grown at 1,400–1,700 meters, processed naturally, and roasted at our darkest profile — still well within specialty grade, still preserving the fruit-forward character of the natural process, but developed enough to bring forward dark chocolate intensity, tobacco depth, and roasted almond richness.

Dark roasting gets a bad reputation in specialty coffee circles, often associated with burnt, bitter cups that destroy what the origin spent months producing. But done correctly — stopped before the second crack, dialed to a precise internal temperature — a darker roast can reveal depth that lighter profiles leave dormant. Night Edition is the Coffee Power argument for this position. The natural process provides enough sweetness to survive a darker roast. The Antioquia terroir provides enough body to carry the intensity.

This is also our most forgiving brew coffee. It works well at a wide range of ratios and temperatures, making it the ideal choice for those who are still learning to dial in their espresso machine or refine their filter recipe. Beginners find it reliable. Experienced brewers find it honest. After midnight, we find it essential.`,
    publishedAt: "2025-11-04",
    author: "Chris Rosas",
    image: "/assets/backgrounds/night-edition.jpg",
    category: "Process & Craft",
    relatedProduct: "night-edition",
  },
];

export function getEntryBySlug(slug: string): JournalEntry | undefined {
  return journalEntries.find((e) => e.slug === slug);
}

export function generateStaticEntryParams() {
  return journalEntries.map((e) => ({ slug: e.slug }));
}
