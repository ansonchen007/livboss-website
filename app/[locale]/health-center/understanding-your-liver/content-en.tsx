'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ContentEN() {
  const tHealth = useTranslations('health');

  return (
    <>
      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/liver-anatomy-hero.jpg"
          alt="Healthy people exercising outdoors, symbolizing liver health"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Introduction */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed">
          Every day, your liver silently processes nutrients, metabolizes toxins, and aids in digestion—it's one of the key organs that keeps your body running smoothly.<br/>
          It doesn't cry out in pain or complain; by the time it "goes on strike," the damage is often already severe.
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">
        
        <p className="text-lg mb-6">
          This article will explain, in the simplest terms possible:
        </p>

        <ul className="space-y-2 mb-8">
          <li>Where your liver is located and why it's so important</li>
          <li>What critical jobs it performs every day</li>
          <li>Why many liver diseases have almost no symptoms in the early stages</li>
          <li>Which everyday habits are quietly harming your liver</li>
          <li>Simple things you can start doing today to protect your liver</li>
        </ul>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            1. Where Is Your Liver? Why Is It Important?
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver is located in the <strong>upper right abdomen</strong>, just below the right ribs, like a "red shield" sitting above your stomach and gallbladder.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>It's the <strong>largest solid internal organ</strong> in the human body, weighing approximately <strong>1.2–1.5 kg (2.6–3.3 lbs)</strong> in adults—about the size of a football.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Almost all blood absorbed from the digestive tract must first flow through the liver before being distributed to the rest of the body.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Medical studies show that the liver is involved in over <strong>500 physiological functions</strong>—truly a multitasking powerhouse.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              Think of your liver as:<br/>
              <strong>CPU + Chemical Plant + Warehouse + Filter</strong><br/>
              Without it running smoothly, you wouldn't have stable energy or a safe internal environment.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            2. Core Functions Your Liver Performs Daily
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. Metabolic Control Center: Managing Sugars, Fats, and Proteins
          </h3>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">Blood Sugar Regulation:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>When you eat, your liver stores excess glucose as glycogen;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>During fasting or exercise, it breaks down glycogen back into glucose to maintain stable blood sugar;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>It can also produce new glucose from lactate, glycerol, and certain amino acids through "gluconeogenesis."</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">Fat Processing:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Synthesizes and breaks down cholesterol and triglycerides;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Produces lipoproteins, which influence blood lipid levels and cardiovascular disease risk.</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">Protein Metabolism:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Synthesizes many plasma proteins, such as albumin and clotting factors;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Breaks down excess amino acids and converts toxic ammonia into urea, which is excreted in urine.</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              If the body were a company, the liver would be <strong>Finance + Production + Warehouse all rolled into one control center</strong>.
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. Detoxification & Filtration: Processing the "Dirty Stuff"
          </h3>

          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Your liver acts like a large "filtration station," filtering massive amounts of blood from the gut and the rest of the body 24/7;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>It metabolizes alcohol, medications, hormones, and environmental chemicals, transforming them into forms easier to excrete;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Helps clear bacterial debris and certain metabolic wastes, maintaining a stable internal environment.</span>
            </li>
          </ul>

          <p className="mb-4">This is why:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Heavy drinking "significantly increases liver burden";</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Some medications "should not be combined with alcohol," and shouldn't be taken excessively or long-term without supervision.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. Bile Production: Helping Digest Fats
          </h3>

          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver produces about <strong>800–1000 ml of bile daily</strong>, which travels through bile ducts to the gallbladder and small intestine;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Bile acts like "natural dish soap," emulsifying and absorbing fats and fat-soluble vitamins (A/D/E/K);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>It also helps excrete some cholesterol and metabolic waste products.</span>
            </li>
          </ul>

          <p className="mb-3">When bile excretion is chronically impaired, you may experience:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Yellowing of the skin and whites of the eyes (jaundice);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Dark urine and pale-colored stools;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Itchy skin.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. Storage Depot & Immune Sentinel
          </h3>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">Nutrient Storage:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Stores glycogen as a backup energy reserve;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Stores certain vitamins (especially fat-soluble ones) and minerals (such as iron and copper).</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">Immunity & Blood Clotting:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Immune cells in the liver can clear bacteria and foreign substances entering the portal vein system;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Synthesizes multiple clotting factors involved in blood coagulation.</span>
            </li>
          </ul>

          <p className="mb-3">When liver function is significantly impaired, you may notice:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Easy bruising, gum bleeding, frequent nosebleeds;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Large bruises from minor bumps;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Prolonged bleeding from wounds.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            3. How Common Are Liver Diseases?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            Global Burden of Liver Disease
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>WHO data shows that approximately <strong>2 million people die annually from liver-related diseases</strong> (including cirrhosis, liver cancer, hepatitis, etc.);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Liver cancer is highly prevalent in many countries and ranks as the <strong>third leading cause of cancer death globally</strong>.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            Viral Hepatitis
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Worldwide, about <strong>350 million people are chronically infected with Hepatitis B or C virus</strong>, and long-term carriers are at risk of developing cirrhosis or liver cancer;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>In China, the number of Hepatitis B carriers is substantial. While not all will develop disease, regular monitoring is necessary.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            Non-Alcoholic Fatty Liver Disease (NAFLD)
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Has been rapidly increasing in recent years, closely linked to obesity, diabetes, and metabolic syndrome;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Even <strong>non-drinkers can develop fatty liver</strong> due to diet, sedentary lifestyle, and excess weight;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Some cases progress to non-alcoholic steatohepatitis (NASH), liver fibrosis, or even cirrhosis.</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              <strong>Liver disease is closer than you think!</strong><br/>
              From fatty liver to hepatitis, from viral infections to alcohol and drug-induced damage—various factors can burden your liver.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            4. Why Is the Liver Called the "Silent Engine"?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. No Pain Nerves in the Liver
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver tissue itself has no pain nerves, so early damage <strong>doesn't trigger pain signals</strong> like stomach aches or toothaches;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Only when the liver capsule is stretched or surrounding tissues are compressed might you feel a dull ache or discomfort in the upper right abdomen;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>By then, <strong>liver disease has often progressed significantly</strong> (such as liver enlargement, tumors, or severe inflammation).</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. Exceptional Compensatory Capacity
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver has tremendous reserve capacity—even if some cells are damaged, <strong>the remaining healthy cells can still maintain function</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Many people discover "elevated liver enzymes" or "fatty liver" during routine checkups, having had no symptoms beforehand;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>By the time obvious symptoms appear (fatigue, nausea, bloating, jaundice), <strong>liver function may already be 60–70% compromised or worse</strong>.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              Precisely because the liver is so resilient, many people don't realize it's slowly "getting sick"<br/>
              until it "breaks down," often missing the optimal intervention window.<br/>
              <strong>Regular checkups are crucial!</strong>
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            5. Common Liver-Harming Habits in Daily Life
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. Excessive Alcohol Consumption
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver must metabolize over 90% of ingested alcohol;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Chronic, heavy drinking can lead to <strong>alcoholic fatty liver → alcoholic hepatitis → fibrosis/cirrhosis</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Even moderate drinking burdens the liver—<strong>the less, the better</strong>.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. High-Calorie, High-Fat Diet
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Frequent consumption of fried foods, sweets, and sugary drinks can cause <strong>abnormal blood lipids and blood sugar</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Excess fat accumulates in the liver, leading to fatty liver, which can progress to hepatitis or fibrosis;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Obesity and metabolic syndrome are also major drivers of liver disease.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. Lack of Exercise and Prolonged Sitting
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Prolonged sitting leads to <strong>reduced calorie expenditure</strong>, making it easier to accumulate visceral fat;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Lack of physical activity also impairs blood sugar and lipid regulation, increasing the liver's metabolic burden.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. Misusing Medications and Supplements
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver metabolizes almost all medications—<strong>improper use</strong> (overdosing, mixing medications, long-term misuse) can cause drug-induced liver injury;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Some supplements or folk remedies may contain substances harmful to the liver;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Follow your doctor's prescriptions and don't believe in "miracle cures"</strong>—basic principles for protecting your liver.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5. Neglecting Hepatitis Screening and Vaccines
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Both Hepatitis B and C viruses can spread through blood, mother-to-child transmission, etc.;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>If unvaccinated against Hepatitis B or have high-risk exposure (tattoos, shared needles, blood transfusions, etc.), get screened early;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>If untreated, chronic infections may develop into serious liver disease within 10–20 years.</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              <strong>Key Reminder:</strong><br/>
              While staying up late and stress affect overall metabolism and immunity, the <strong>main direct liver-damaging factors</strong> are:<br/>
              <strong>Alcohol, poor diet, obesity, viral infections, and drug misuse</strong>.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            6. What You Can Do Today to Protect Your Liver
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. Diet: Choose Natural, Balanced, Low-Fat, Low-Sugar Foods
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Eat more <strong>fresh vegetables, fruits, and whole grains</strong> to increase dietary fiber;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Choose <strong>high-quality protein sources</strong> (fish, beans, lean meats), reduce red and processed meats;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Limit fried, sautéed, sugary drinks, and desserts to prevent fat accumulation;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Some research suggests</strong> broccoli sprout extract (e.g., sulforaphane) may help activate liver detox enzymes, but <strong>it cannot replace a healthy diet or medical treatment</strong>—consider it only as an extra nutritional supplement.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. Exercise: Maintain Regular Aerobic Activity
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>At least <strong>150 minutes of moderate-intensity exercise per week</strong> (such as brisk walking, jogging, swimming, cycling);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Exercise helps <strong>reduce visceral fat and improve insulin sensitivity</strong>, lowering fatty liver risk;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>For those with existing fatty liver, proper exercise + dietary control can significantly improve liver fat content.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. Quit Alcohol or Strictly Limit Drinking
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>If you already have liver disease (or high-risk factors), <strong>complete abstinence is best</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Even for healthy individuals, alcohol consumption should be <strong>extremely moderate</strong>—the WHO reminds us there's <strong>no absolutely safe level of alcohol consumption</strong>.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. Use Medications Carefully, Don't Overuse Supplements
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Only use medications when necessary, <strong>strictly follow your doctor's dosage and duration</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Don't self-combine multiple medications or supplements to avoid overburdening your liver;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>For chronic disease patients on long-term medication, <strong>regular liver function monitoring is recommended</strong>.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5. Get Vaccinated and Have Regular Checkups
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Those without immunity should get the <strong>Hepatitis B vaccine</strong> as soon as possible (especially newborns and high-risk groups);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Regular checkups should include <strong>liver function tests, Hepatitis B panel, abdominal ultrasound</strong>, etc., for early detection and treatment;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>If you have chronic hepatitis or cirrhosis, follow your doctor's advice for <strong>regular monitoring and antiviral therapy</strong>.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              Liver health isn't about "quick fixes," it's about <strong>long-term lifestyle adjustments</strong>:<br/>
              balanced diet, regular exercise, avoiding harmful substances, routine checkups.<br/>
              <strong>These seemingly ordinary habits are the true "liver protection formula."</strong>
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            7. When to See a Doctor Immediately
          </h2>

          <p className="mb-4">While early liver damage often has no symptoms, if you experience any of the following, seek medical attention promptly:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Yellowing of the skin or whites of the eyes (jaundice)</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Dark urine (tea-colored) and pale-colored stools</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Persistent fatigue, loss of appetite, nausea, vomiting</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Abdominal bloating, upper right abdominal discomfort</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Unexplained weight loss</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Easy bruising or bleeding, increased gum bleeding</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Ascites (abdominal swelling), leg edema</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Itchy skin, spider angiomas, palmar erythema</strong>.</span>
            </li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              <strong>Important Warning:</strong><br/>
              If you develop jaundice, ascites, or altered consciousness (hepatic encephalopathy)—signs of <strong>severe liver dysfunction</strong>—<br/>
              go to the <strong>emergency room immediately</strong>. Don't delay!
            </p>
          </div>
        </section>

        {/* Section 8 - Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            8. Summary: Take Good Care of Your "Liver Partner"
          </h2>

          <p className="text-lg mb-6">
            Your liver silently filters blood, metabolizes nutrients, detoxifies, and stores energy every day—it's truly a "silent engine."<br/>
            But precisely because it's <strong>so resilient and silent</strong>, we often neglect caring for it.
          </p>

          <div className="bg-champagne-gold/10 p-8 rounded-lg my-8">
            <p className="text-xl font-semibold text-deep-brown mb-4">Starting today, try these simple habits:</p>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-lg"><strong>Balanced diet, low in fat and sugar</strong>, eat more vegetables, fruits, and whole grains;</li>
              <li className="text-lg"><strong>Maintain regular exercise</strong>, at least 150 minutes of moderate activity weekly;</li>
              <li className="text-lg"><strong>Quit or strictly limit alcohol</strong>, don't overburden your liver;</li>
              <li className="text-lg"><strong>Use medications carefully, don't overuse supplements</strong>, follow prescriptions and monitor liver function regularly;</li>
              <li className="text-lg"><strong>Get regular checkups and vaccinations</strong>, early detection and intervention prevent future problems.</li>
            </ol>
          </div>

          <p className="text-lg mb-6">
            Liver health isn't built overnight—it's <strong>the result of accumulated daily lifestyle choices</strong>.<br/>
            Treating it well means treating your long-term health and quality of life well.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              Remember: <strong>Prevention is always better than cure</strong>!<br/>
              Even if your liver function is normal now, don't get complacent.<br/>
              <strong>Eat well, exercise regularly, get checkups</strong>—that's the best gift you can give your liver.
            </p>
          </div>
        </section>

        {/* Further Reading */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <h2 className="text-2xl font-light text-deep-brown mb-6">
            Further Reading & References
          </h2>
          <ul className="space-y-2 text-text-primary/80">
            <li>
              <Link href="https://www.who.int/news-room/fact-sheets/detail/hepatitis-b" target="_blank" className="text-primary hover:underline">
                WHO – Hepatitis B Fact Sheet
              </Link>
            </li>
            <li>
              <Link href="https://www.cdc.gov/hepatitis/index.htm" target="_blank" className="text-primary hover:underline">
                CDC – Viral Hepatitis
              </Link>
            </li>
            <li>
              <Link href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/liver-anatomy-and-functions" target="_blank" className="text-primary hover:underline">
                Johns Hopkins Medicine – Liver: Anatomy and Functions
              </Link>
            </li>
            <li>
              <Link href="https://my.clevelandclinic.org/health/body/21481-liver" target="_blank" className="text-primary hover:underline">
                Cleveland Clinic – Liver
              </Link>
            </li>
            <li>
              <Link href="https://www.mayoclinic.org/diseases-conditions/nonalcoholic-fatty-liver-disease/symptoms-causes/syc-20354567" target="_blank" className="text-primary hover:underline">
                Mayo Clinic – Nonalcoholic Fatty Liver Disease
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
