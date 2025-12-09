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
          src="/images/sleep-liver-hero.jpg"
          alt="Sleep and Liver Health"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-8">
        Chronic Sleep Deprivation: How Does It Stress Your Liver?
      </h1>

      {/* Introduction */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed mb-4">
          Occasional late nights, overtime work, or binge-watching shows—almost everyone has experienced these.<br/>
          What truly burdens the liver is often not one or two late nights, but <strong>chronic sleep deprivation and disrupted circadian rhythms</strong>.
        </p>
        <p className="text-lg text-text-primary/90 leading-relaxed">
          A growing body of research shows that people who sleep too little or poorly are more prone to fatty liver and metabolic disorders; shift workers and chronic night-shift workers have higher rates of abnormal liver enzymes; sleeping less than 7 hours per night is associated with multiple risk factors for liver disease, including obesity and type 2 diabetes.
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            1. First: What's the Normal Relationship Between Sleep and the Liver?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.1 The Liver Is a "Schedule-Dependent" Organ
          </h3>

          <p className="mb-4">The human body has an approximately 24-hour <strong>circadian rhythm system</strong>:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The brain's "master clock" distinguishes day from night;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Each organ (including the liver) also has its own "peripheral clock," adjusting its rhythm based on cues like sleep-wake patterns, feeding, and light exposure.</span>
            </li>
          </ul>

          <p className="mb-3">For the liver, this rhythm roughly means:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Daytime: More focused on <strong>processing energy and nutrients from food</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Nighttime: Enters a relatively "repair and maintenance mode," completing antioxidant defense, cellular repair, and other tasks;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Many genes related to fat and glucose metabolism show clear "peak-trough" patterns over 24 hours.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.2 Sleep Deprivation = Disrupting the Schedule
          </h3>

          <p className="mb-4">When you frequently stay up late, don't get enough sleep, or reverse day and night:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The brain's master clock and the liver's peripheral clock become <strong>out of sync</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver receives "time to rest" signals while simultaneously being forced to "keep working" by food intake, light exposure, and stress;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Over time, this leads to metabolic dysregulation, fat accumulation, and inflammatory responses.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              In simple terms:<br/>
              The liver normally works on a "daytime processing, nighttime repair" schedule.<br/>
              When you chronically stay up late and sleep too little, it becomes "working day and night with no rest time."
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            2. Evidence #1: Sleep Deprivation and Increased Risk of Fatty Liver / MASLD
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.1 Short Sleep Duration and Fatty Liver: What Do Large Studies Show?
          </h3>

          <p className="mb-4">Multiple observational studies and meta-analyses have found:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>People with significantly insufficient sleep are more likely to develop NAFLD / MASLD</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>A systematic review incorporating multiple studies showed: <strong>People who sleep too little have a significantly increased risk of fatty liver</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Other research found that if someone who previously slept adequately <strong>gradually reduces sleep duration or experiences worsening sleep quality, their risk of developing new-onset fatty liver significantly increases in the following years</strong>.</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              Some studies suggest slight differences in "short sleep" risk patterns between genders, but overall:<br/>
              <strong>The vast majority of evidence points to: chronic insufficient sleep makes fatty liver and metabolic problems more likely.</strong>
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.2 It's Not Just "How Long"—Sleep Quality Matters Too
          </h3>

          <p className="mb-4">A recent study based on national population surveys indicated:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Not only sleep duration, but <strong>when multiple sleep dimensions—such as difficulty falling asleep, frequent awakenings, and snoring—deteriorate together, the risk of fatty liver / MASLD increases significantly</strong>.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              In other words:<br/>
              <strong>"Sleeping enough but sleeping poorly"</strong> may impact the liver and metabolism as much as "sleeping too little."
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            3. Evidence #2: Sleep Deprivation and Abnormal Liver Enzymes / Metabolic Markers
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.1 Short Sleep and Elevated Liver Enzymes
          </h3>

          <p className="mb-4">Multiple studies have found that <strong>people with chronically short sleep duration more commonly have abnormal liver enzymes like ALT, AST, and γ-GTP</strong>:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>A Korean cross-sectional study found that <strong>people with excessively short sleep had a higher proportion of abnormal liver enzymes</strong>, with researchers suggesting that sleep deprivation may increase fatty liver risk through metabolic dysregulation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Other research showed that <strong>when chronic sleep deprivation combines with other unhealthy lifestyle factors (sedentary behavior, alcohol consumption, obesity), the risk of elevated γ-GTP becomes more pronounced.</strong></span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.2 Sleep, Body Weight, Blood Sugar, and Insulin Resistance
          </h3>

          <p className="mb-4">An expert consensus from the American Academy of Sleep Medicine states:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Adults who chronically sleep less than 7 hours per night are associated with obesity, type 2 diabetes, hypertension, cardiovascular disease, and various other adverse outcomes.</strong></span>
            </li>
          </ul>

          <p className="mb-4">And these conditions are themselves core risk factors for fatty liver / MASLD:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Sleep deprivation → Hormonal imbalances (e.g., elevated cortisol), disrupted appetite regulation → Greater cravings for high-sugar, high-fat foods;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Sleep deprivation → Decreased insulin sensitivity → Higher likelihood of hyperglycemia and insulin resistance;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Insulin resistance + high-energy diet → Hepatic fat accumulation and increased inflammatory responses.</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              So, from an indirect pathway perspective:<br/>
              <strong>Sleep deprivation → Loss of control over weight, blood sugar, and lipids → Significantly increased fatty liver and liver metabolic stress.</strong>
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            4. Evidence #3: The Special Challenge of Shift Work / Night Shifts for the Liver
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.1 Night Shifts, Liver Enzymes, and Blood Lipids
          </h3>

          <p className="mb-4">Many studies have focused on populations such as nurses and workers with chronic shift work or night shifts:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Shift workers have a slightly higher risk of abnormal liver enzymes, suggesting circadian disruption may play a role;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Long-term day-night rotation is associated with <strong>liver function and lipid abnormalities</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Systematic reviews indicate: <strong>Shift work disrupts the biological clock, increasing the risk of MASLD and its progression to more severe liver disease.</strong></span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.2 Circadian Disruption Itself Can "Promote Fatty Liver"
          </h3>

          <p className="mb-4">Research on hepatic circadian rhythms shows:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>"Clock genes" within liver cells regulate lipid synthesis, fatty acid oxidation, and cholesterol metabolism;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>When the biological clock is disrupted (e.g., chronic night shifts, frequent jet lag, severe sleep deprivation), <strong>the liver is more prone to lipid accumulation and inflammatory responses</strong>.</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              Therefore, for occupational groups requiring shift work,<br/>
              <strong>How to minimize the impact of circadian disruption on the liver under unavoidable night-shift conditions</strong> is a very practical concern.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            5. Mechanistically: How Does Sleep Deprivation "Stress" the Liver?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.1 Hormonal and Nervous System "Accelerating the Gas Pedal"
          </h3>

          <p className="mb-4">Chronic sleep deprivation leads to:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Elevated cortisol levels</strong>, with chronic sympathetic nervous system activation;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Imbalanced appetite hormones (leptin, ghrelin), leading to increased hunger and preference for high-calorie foods;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Decreased insulin sensitivity, resulting in poorer blood glucose control.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              These changes force the liver to process more fat and sugar. In the long run, it's like:<br/>
              <strong>"The gas pedal is constantly pressed, but the brakes have failed."</strong>
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.2 Nighttime Liver Repair Time Gets Compressed
          </h3>

          <p className="mb-4">Nighttime is a crucial period for the liver to complete many "repair tasks":</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Antioxidant defense systems become more active, clearing free radicals and metabolic waste accumulated during the day;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Some DNA repair and cell renewal processes are more active at night;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The immune system also undergoes "maintenance" during this period.</span>
            </li>
          </ul>

          <p className="mb-6">
            If you chronically go to bed very late and have significantly insufficient sleep duration,<br/>
            the time available for liver "repair" is squeezed out, <strong>making accumulated damage harder to repair promptly</strong>.
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.3 The "Bidirectional Relationship" Between Liver and Circadian Clock
          </h3>

          <p className="mb-4">Recent research even suggests:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Not only do sleep and circadian rhythms affect the liver, but <strong>liver disease itself can disrupt sleep</strong>, creating a "vicious cycle."</span>
            </li>
          </ul>

          <p className="mb-4">For example:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Some patients with fatty liver or cirrhosis report <strong>poor nighttime sleep and severe daytime drowsiness</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>This may stem from metabolic and inflammatory factors, as well as coexisting conditions like sleep apnea, depression, or anxiety.</span>
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            6. What Counts as "Chronic Sleep Deprivation"? How Much Sleep Is Enough?
          </h2>

          <p className="mb-4">Authoritative sleep societies provide these general standards:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Healthy adults: Should get ≥ 7 hours of sleep per night</strong>, with many guidelines recommending 7–9 hours;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Chronically less than 7 hours, especially <strong>frequently ≤ 6 hours</strong>, is associated with increased metabolic and cardiovascular risks.</span>
            </li>
          </ul>

          <p className="mb-4">Of course, individual sleep needs vary, but if you meet at least one of the following, you should <strong>be alert to sleep deprivation</strong>:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Most weekdays, you only sleep 5–6 hours or less;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Even with weekend catch-up sleep, you still chronically feel fatigued with declining concentration;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Your weight, blood pressure, blood sugar, and waist circumference have increased noticeably in recent years;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Medical checkups show fatty liver or mildly abnormal liver enzymes, while you chronically don't get enough sleep.</span>
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            7. Starting Today: What Improvements Can You Make?
          </h2>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              The goal isn't "becoming a perfect sleeper overnight,"<br/>
              but rather, <strong>within real-life constraints, nudging the sleep-liver relationship in a better direction</strong>.
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.1 Leave Enough Time for the Liver's "Repair Window"
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Try to go to bed and wake up <strong>at consistent times</strong>, even if initially it's just 30 minutes earlier than now;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Gradually extend sleep duration to <strong>7+ hours</strong>, rather than relying on weekend "revenge sleep" in one go;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Have dinner earlier and avoid heavy meals or excessive alcohol before bed, so the liver and digestive system don't work overtime at night.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.2 Create a Sleep-Friendly Environment
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Minimize screen time 1 hour before bed to reduce blue light stimulation;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Keep the bedroom quiet, dark, and slightly cool;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Don't turn your bed into an "office" or "phone-scrolling battlefield"—use it mainly for sleep and intimacy.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.3 Manage Weight and Metabolism for "Win-Win" Benefits to Sleep and Liver
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Regular exercise can simultaneously <strong>improve sleep quality, weight control, and insulin sensitivity</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Limit sugary drinks, refined carbohydrates, and high-fat diets—this helps reduce liver burden and promotes more restful nighttime sleep;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Avoid relying on large amounts of alcohol to "help sleep"—in the long run, it only worsens both liver health and sleep quality.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.4 "Damage Control" for Night Shift / Shift Workers
          </h3>

          <p className="mb-4">If your job unavoidably involves night shifts, you can try:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Maintain a fixed shift rotation</strong>, avoiding frequent switching between different shifts;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>After finishing a night shift, ensure you have a relatively fixed, quiet sleep period—use blackout curtains, earplugs, etc., to simulate a "nighttime environment" as much as possible;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>On non-night-shift days, also try to maintain similar sleep-wake times to reduce "day-night flip-flopping";</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Pay extra attention to weight management, blood pressure, and blood sugar monitoring—regularly check liver function and liver imaging during health checkups.</span>
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            8. When Should You Seek Professional Help?
          </h2>

          <p className="mb-4">If you have any of the following, consider seeking medical attention or consulting a professional:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Persistent <strong>difficulty falling asleep, early awakening, excessive dreaming, or waking up still very fatigued</strong> for more than 3 months;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Severe daytime drowsiness affecting work and driving safety;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Accompanied by snoring, breathing pauses, or waking up gasping at night (possibly related to sleep apnea);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Previous or recent medical checkups showing elevated liver enzymes, fatty liver / MASLD, along with chronically insufficient sleep duration or obviously poor sleep quality.</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              During your visit, proactively share your <strong>sleep patterns, work shifts, dietary habits, and weight changes</strong> with your doctor.<br/>
              This helps the physician comprehensively assess: to what extent are liver issues related to sleep and lifestyle factors.
            </p>
          </div>
        </section>

        {/* Section 9 - Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            9. Conclusion: Give Your Liver Some "Nighttime Breathing Room"
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>The liver is a <strong>highly rhythm-dependent</strong> organ—processing metabolism during the day, completing repair at night;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Chronic sleep deprivation and disrupted schedules rob the liver of its repair window, increase metabolic burden, and are associated with fatty liver / MASLD and abnormal liver enzymes;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Good news: <strong>Sleep can be gradually improved through behavioral habits</strong>—even just sleeping half an hour more than yesterday or skipping one late night sends your liver a signal: "I'm starting to take care of you."</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              You don't need to be perfect overnight—just start today,<br/>
              reserving a bit more high-quality sleep time for yourself and your liver.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-deep-brown mb-3">Important Notice</h3>
            <p className="text-text-primary/90">
              The content of this article is for health education purposes only and cannot replace a doctor's diagnosis or treatment advice.<br/>
              If you have been diagnosed with liver disease, sleep disorders, or are taking long-term medications, please consult a professional physician or qualified healthcare provider before adjusting your schedule, using any supplements, or medications.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
