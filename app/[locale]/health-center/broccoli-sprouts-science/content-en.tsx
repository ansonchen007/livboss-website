'use client';

import Image from 'next/image';

export default function ContentEN() {
  return (
    <>
      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/broccoli-sprouts-nature.jpg"
          alt="Broccoli Sprouts"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-8">
        Broccoli Sprouts: Tiny Shoots with Surprisingly Big Power
      </h1>

      {/* Introduction */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed mb-4">
          Broccoli sprouts may be only a few centimeters long, but in the field of nutrition and bioactive compound research, these tiny shoots have garnered growing scientific attention.
        </p>
        <p className="text-lg text-text-primary/90 leading-relaxed">
          Compared to mature broccoli florets, these young seedlings—harvested just days after germination—are rapidly synthesizing a variety of phytochemical defense compounds. Chief among them is what researchers often highlight: <strong>sulforaphane</strong>.
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">

        {/* Article Guide */}
        <section className="mb-12">
          <p className="text-lg mb-4">This article will walk you through:</p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>What broccoli sprouts are, and how they differ from mature broccoli</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The key bioactive compounds—glucoraphanin and sulforaphane</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>What current research suggests about potential health benefits (antioxidant, detoxification, cardiovascular, metabolic, immune, and gut health)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Safety considerations and precautions for general consumption</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Practical tips for incorporating broccoli sprouts into your daily diet</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <h3 className="text-xl font-semibold text-deep-brown mb-3">Important Note</h3>
            <p className="text-text-primary/90">
              This article is for educational purposes only and <strong>does not replace medical diagnosis or treatment</strong>. If you have liver disease, gastrointestinal conditions, chronic illnesses, or are taking medications, please consult a healthcare professional before making dietary changes or using broccoli sprout supplements.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            1. What Are Broccoli Sprouts? How Do They Differ from Mature Broccoli?
          </h2>

          <p className="mb-4">
            <strong>Broccoli sprouts</strong> are the young seedlings of broccoli, typically harvested about 3–5 days after germination. They look similar to alfalfa or radish sprouts:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>White, thread-like stems and roots topped with two small green cotyledon leaves;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Crisp texture with a mildly pungent, slightly peppery flavor;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Commonly used in salads, sandwiches, grain bowls, or as a garnish.</span>
            </li>
          </ul>

          <p className="mb-4">Compared to mature broccoli, the main differences are:</p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.1 Growth Stage
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Broccoli sprouts: Early seedling phase, just emerged from germination;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Mature broccoli: Fully grown plant with thick stalks and dense florets.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.2 Nutritional Composition
          </h3>

          <p className="mb-6">
            Research indicates that broccoli sprouts are generally <strong>low in calories, low in fat, and relatively higher in protein</strong>. They also contain dietary fiber, vitamin C, vitamin A, calcium, iron, and other essential nutrients.
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.3 Most Significant Difference: Bioactive Compound Concentration
          </h3>

          <p className="mb-6">
            Multiple analyses have shown that broccoli sprouts contain certain sulfur-containing compounds—especially <strong>glucoraphanin</strong>—at concentrations that can be <strong>10 to nearly 100 times higher</strong> than in mature broccoli. This abundance of bioactive compounds is why broccoli sprouts have become such a focal point in research.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            2. Core Components: From Glucoraphanin to Sulforaphane
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.1 A Plant's Natural Defense Mechanism
          </h3>

          <p className="mb-4">
            Cruciferous vegetables (broccoli, cabbage, kale, etc.) contain a class of special compounds called <strong>glucosinolates</strong>. In broccoli sprouts, the most prominent of these is <strong>glucoraphanin</strong>.
          </p>

          <p className="mb-6">
            From the plant's perspective, these compounds serve as "chemical defenses" to ward off insects and pathogens. For humans, however, once activated in the body, these compounds may offer various health-promoting effects.
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.2 What Happens When You Chew?
          </h3>

          <p className="mb-4">When you <strong>chew, chop, or crush</strong> broccoli sprouts:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Plant cells rupture, releasing an enzyme called <strong>myrosinase</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Myrosinase interacts with glucoraphanin and converts it into the more bioactive form, <strong>sulforaphane</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Certain gut bacteria can also perform this conversion, meaning even if cooking destroys some of the enzyme, sulforaphane can still be produced in the body.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.3 Sulforaphane: Activating the Body's Defense System
          </h3>

          <p className="mb-4">
            Numerous cellular and animal studies suggest that sulforaphane can activate a critical signaling pathway: the <strong>Nrf2–ARE pathway</strong>. Think of this pathway as a "master switch" for cellular self-protection:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>It upregulates various <strong>antioxidant enzymes</strong> (such as NQO1, HO-1, etc.) to help neutralize free radicals;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>It enhances the cell's ability to <strong>detoxify, reduce inflammation, and resist stress</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>It helps regulate metabolism, cellular repair, and the expression of genes associated with chronic disease.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              This is the fundamental scientific basis for viewing broccoli sprouts as a "functional food."
            </p>
          </div>
        </section>

        {/* Section 3 - Research Findings */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            3. What Does Current Research Suggest?
          </h2>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              Most studies discussed below use fresh broccoli sprouts, sprout powder, or extracts rich in glucoraphanin/sulforaphane. Research is ongoing, and findings should be viewed as "promising directions" rather than "proven medical treatments."
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.1 Antioxidant & Detoxification: Coping with Environmental Stress
          </h3>

          <p className="mb-4">
            Some clinical trials have found that daily consumption of <strong>broccoli sprout preparations rich in glucoraphanin/sulforaphane</strong> can promote the excretion of certain pollutants and potentially carcinogenic metabolites, including:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Precursors to carcinogens found in certain foods;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Harmful compounds from air pollution, such as benzene and acrolein.</span>
            </li>
          </ul>

          <p className="mb-6">
            These studies suggest that broccoli sprouts <strong>may help the body eliminate certain environmental toxins more efficiently</strong>, offering an interesting dietary strategy for coping with modern environmental stressors.
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.2 Cardiovascular & Metabolic Health: Insights for Those with "Three Highs"
          </h3>

          <p className="mb-4">
            Small-scale clinical trials and meta-analyses involving people with metabolic syndrome, high blood pressure, or being overweight have shown:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>After several weeks to months of consuming broccoli sprouts or extracts, <strong>systolic blood pressure, fasting glucose, and certain lipid markers</strong> showed modest but statistically significant improvements;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Given the small sample sizes and varied interventions, these results provide preliminary evidence that broccoli sprouts may support cardiovascular and metabolic health.</span>
            </li>
          </ul>

          <p className="mb-3">It's important to emphasize:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>The effects are typically <strong>supplementary and modest</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>They cannot replace prescribed antihypertensives, diabetes medications, or other medical treatments;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>The most important factors remain <strong>overall diet quality, weight management, and regular physical activity</strong>.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.3 Inflammation & Immunity: From Inflammatory Markers to Vaccine Response
          </h3>

          <p className="mb-4">In some human studies, broccoli sprout consumption has been associated with:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Overweight individuals consuming about 30 grams of fresh broccoli sprouts daily for 2–3 months showed declining trends in <strong>inflammatory markers such as CRP and IL-6</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>In a study using a live attenuated influenza nasal spray vaccine, sulforaphane-rich broccoli sprout preparations appeared to <strong>enhance certain immune cell responses</strong>.</span>
            </li>
          </ul>

          <p className="mb-6">
            These results suggest that sulforaphane may help balance oxidative stress and immune pathways, supporting a <strong>"not overactive, yet responsive"</strong> immune system.
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.4 Gut & Brain Health: Emerging Research Directions
          </h3>

          <p className="mb-4">Recent reviews highlight an interactive relationship between glucoraphanin/sulforaphane and the gut microbiome:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Certain gut bacteria can help further convert glucoraphanin into sulforaphane;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Sulforaphane may help reduce oxidative stress and inflammation in the gut, potentially <strong>supporting gut barrier function and microbial balance</strong>.</span>
            </li>
          </ul>

          <p className="mb-6">
            Additionally, laboratory research has explored its potential in <strong>neurodegenerative diseases and cognitive decline</strong>, such as demonstrating antioxidant and neuroprotective effects in Alzheimer's disease models. However, this field is currently <strong>dominated by cellular and animal studies, with clinical evidence still limited</strong>.
          </p>
        </section>

        {/* Section 4 - Safety */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            4. Safety: Is It Safe for Most People?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.1 Generally Safe in Food Form
          </h3>

          <p className="mb-4">
            Consuming fresh broccoli sprouts or normal culinary amounts has been <strong>generally recognized as safe</strong> based on existing research and long-term dietary experience.
          </p>

          <p className="mb-4">In some clinical trials, participants consumed:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>20–40 grams of fresh broccoli sprouts daily, or</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Extracts containing equivalent amounts of glucoraphanin/sulforaphane,</span>
            </li>
          </ul>

          <p className="mb-4">with the most common side effects being:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Mild gastrointestinal discomfort (such as bloating, mild diarrhea, or increased belching);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Occasional temporary changes in breath or stool odor.</span>
            </li>
          </ul>

          <p className="mb-6">These symptoms typically resolve after discontinuation or dose reduction.</p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.2 Food Safety Risks of Raw Sprouts
          </h3>

          <p className="mb-4">
            It's important to note: <strong>All raw sprouts (not just broccoli sprouts) carry some risk of microbial contamination</strong>, including Salmonella, E. coli, and Listeria.
          </p>

          <p className="mb-4">Therefore, the following groups are generally advised to <strong>avoid or be cautious with raw sprouts</strong>:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Pregnant women, elderly individuals, and immunocompromised persons;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Those undergoing chemotherapy or long-term immunosuppressive therapy.</span>
            </li>
          </ul>

          <p className="mb-4">To reduce microbial risk, consider:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Purchasing from reputable sources with good cold-chain management;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>If growing at home, strictly maintain clean equipment and water;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>For high-risk groups, <strong>lightly steam or quickly stir-fry</strong> before consuming, rather than eating completely raw.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.3 Extra Caution with Supplements
          </h3>

          <p className="mb-4">
            The market also offers "broccoli sprout extract" or "sulforaphane capsules" as dietary supplements. Compared to whole foods, supplements are often <strong>more concentrated and contain more isolated compounds</strong>, requiring particular caution in the following situations:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>When taking anticoagulants, anti-seizure medications, or other chronic disease medications, there may be potential metabolic pathway interactions;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>For pregnant and breastfeeding women, current safety data is insufficient; it's better to focus on <strong>vegetables in a normal diet</strong> rather than high-dose supplements.</span>
            </li>
          </ul>

          <p className="mb-6">
            If planning long-term use of high-concentration extracts, <strong>consult a physician or nutrition professional first</strong>.
          </p>
        </section>

        {/* Section 5 - Daily Consumption */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            5. How to Best Incorporate Broccoli Sprouts into Your Daily Diet?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.1 Simple Reference Amount: Starting with "A Small Handful"
          </h3>

          <p className="mb-4">Most research uses amounts roughly equivalent to:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>About 20–30 grams (roughly a small handful) of fresh broccoli sprouts daily</strong>, or</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Adding a layer of sprouts to salads, sandwiches, or rice bowls several times a week.</span>
            </li>
          </ul>

          <p className="mb-6">
            For generally healthy individuals, precise measurement isn't necessary. Think of broccoli sprouts as <strong>one component of a diverse vegetable intake</strong>, with the key being: <strong>long-term, moderate consumption within a balanced diet</strong>.
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.2 Raw vs. Cooked: Balancing Bioactivity and Safety
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Raw</strong>: Preserves more myrosinase and vitamins, promoting sulforaphane production;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Lightly steamed or quick stir-fried</strong>: Significantly reduces microbial risk while retaining bioactive compounds.</span>
            </li>
          </ul>

          <p className="mb-4">Practical tips:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>If heating is needed, try <strong>chopping the sprouts and letting them sit for 5–10 minutes</strong> before cooking. This allows myrosinase time to convert glucoraphanin to sulforaphane;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Avoid prolonged boiling or deep-frying, which can substantially reduce water-soluble vitamins and bioactive compounds;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>You can also pair with small amounts of <strong>other raw cruciferous vegetables or mustard seeds</strong> to provide an additional myrosinase source.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.3 Pair with Liver- and Metabolism-Friendly Overall Diet
          </h3>

          <p className="mb-4">
            No matter how "powerful" broccoli sprouts are, they cannot single-handedly offset the stress from high-fat, high-sugar diets, chronic sleep deprivation, and lack of exercise. To truly benefit, it's more important to:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Control total caloric intake, reduce sugary beverages, fried foods, and refined carbohydrates;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Ensure adequate intake of vegetables, fruits, quality protein, and whole grains;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Exercise regularly, reduce sedentary time, and maintain healthy weight and waist circumference;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Especially for those focused on "liver protection," the above lifestyle factors are far more critical than any single compound.</span>
            </li>
          </ul>
        </section>

        {/* Section 6 - Special Populations */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            6. Who Should Exercise Extra Caution?
          </h2>

          <p className="mb-4">
            If you fall into any of the following categories, consult a physician before intentionally increasing broccoli sprout intake or using high-concentration extracts:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Diagnosed liver disease, kidney disease, inflammatory bowel disease, or other chronic conditions;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Long-term use of anticoagulants, anti-seizure medications, immunosuppressants, or other prescription drugs;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Pregnant, breastfeeding, or planning pregnancy in the near future;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>History of significant allergies or intolerance to cruciferous vegetables (such as broccoli, cabbage, etc.).</span>
            </li>
          </ul>
        </section>

        {/* Section 7 - Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            7. Summary: A Small Addition with Potential Big Benefits
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Despite their small size, broccoli sprouts are rich in protein, dietary fiber, and various vitamins and minerals;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>More importantly, they contain <strong>high concentrations of glucoraphanin</strong>, which, through chewing and gut activity, converts to <strong>sulforaphane</strong>—a compound that can activate cellular antioxidant and detoxification systems, making it a continued focus in research;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Multiple preliminary clinical studies suggest potential benefits in <strong>cardiovascular and metabolic health, inflammation regulation, detoxification, and immune support</strong>, though currently they are best viewed as <strong>supplementary nutritional and lifestyle factors</strong>, not replacements for medication;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>For most healthy individuals, incorporating moderate amounts of broccoli sprouts into daily meals is a simple way to increase vegetable diversity and enhance overall diet quality.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              If you're designing a more "liver-friendly, health-supportive" lifestyle for yourself or your family, consider adding a touch of green from broccoli sprouts to your plate—then combine it with adequate sleep, balanced nutrition, and regular exercise. Together, these elements represent the true "power of nature" worth maintaining long-term.
            </p>
          </div>
        </section>

        {/* Further Reading */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <h3 className="text-2xl font-light text-deep-brown mb-6">Further Reading</h3>
          
          <ul className="space-y-3">
            <li className="text-sm text-text-primary/70">
              Healthline. <em>What Are Broccoli Sprouts? Nutrients, Benefits, and Recipes.</em><br/>
              <a href="https://www.healthline.com/nutrition/broccoli-sprouts" target="_blank" rel="noopener" className="text-primary hover:underline">
                https://www.healthline.com/nutrition/broccoli-sprouts
              </a>
            </li>
            <li className="text-sm text-text-primary/70">
              WebMD. <em>Health Benefits of Broccoli Sprouts.</em><br/>
              <a href="https://www.webmd.com/diet/health-benefits-broccoli-sprouts" target="_blank" rel="noopener" className="text-primary hover:underline">
                https://www.webmd.com/diet/health-benefits-broccoli-sprouts
              </a>
            </li>
            <li className="text-sm text-text-primary/70">
              Houghton CA. <em>Sulforaphane: Its "Coming of Age" as a Clinically Relevant Nutraceutical in the Prevention and Treatment of Chronic Disease.</em> Nutrients. 2019.<br/>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6815645/" target="_blank" rel="noopener" className="text-primary hover:underline">
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6815645/
              </a>
            </li>
            <li className="text-sm text-text-primary/70">
              Yagishita Y et al. <em>Broccoli or Sulforaphane: Is It the Source or Dose That Matters?</em> Nutrients. 2019.<br/>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6804255/" target="_blank" rel="noopener" className="text-primary hover:underline">
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6804255/
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
