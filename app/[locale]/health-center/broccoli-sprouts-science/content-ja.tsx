'use client';

import Image from 'next/image';

export default function ContentJA() {
  return (
    <>
      {/* ヒーローイメージ */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/broccoli-sprouts-nature.jpg"
          alt="ブロッコリースプラウト"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* タイトル */}
      <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-8">
        ブロッコリースプラウト：小さな芽に秘められた大きなパワー
      </h1>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed mb-4">
          ブロッコリースプラウトは数センチほどの小さな芽に過ぎませんが、栄養と活性成分研究の分野で、科学界から注目を集めています。
        </p>
        <p className="text-lg text-text-primary/90 leading-relaxed">
          成熟したブロッコリーと比べて、発芽してわずか数日のこの若い芽には、多くの植物防御物質が急速に合成されています。その中で研究者が最も注目するのが、<strong>「スルフォラファン(sulforaphane)」</strong>です。
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">

        {/* 記事ガイド */}
        <section className="mb-12">
          <p className="text-lg mb-4">この記事では、以下をわかりやすく解説します:</p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>ブロッコリースプラウトとは？普通のブロッコリーとの違い</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>核心成分であるグルコラファニンとスルフォラファンについて</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>科学的研究から見える可能性(抗酸化、解毒、心血管・代謝、免疫、腸内環境など)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一般的な摂取における安全性と注意事項</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>日常の食事でどう取り入れるか、そのメリットを最大限に活かす方法</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <h3 className="text-xl font-semibold text-deep-brown mb-3">重要なお知らせ</h3>
            <p className="text-text-primary/90">
              この記事は健康教育を目的としたものであり、<strong>医師の診断や治療に代わるものではありません</strong>。肝疾患、胃腸疾患、慢性疾患をお持ちの方、または薬を服用中の方は、食事を変更したり、ブロッコリースプラウトのサプリメントを使用する前に、専門の医療従事者にご相談ください。
            </p>
          </div>
        </section>

        {/* 第1部 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            1. ブロッコリースプラウトとは？普通のブロッコリーとの違い
          </h2>

          <p className="mb-4">
            <strong>ブロッコリースプラウト(broccoli sprouts)</strong>とは、ブロッコリーの種が発芽してから3~5日程度の若い芽のことです。見た目はアルファルファやマスタードスプラウトに似ています:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>根と茎は白い糸状で、先端に小さな緑色の双葉がついている;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>食感はシャキシャキと軽い辛みと香りがある;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>サラダ、サンドイッチ、トッピングなど、健康食材として使われる。</span>
            </li>
          </ul>

          <p className="mb-4">成熟したブロッコリーとの主な違いは以下の通りです:</p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.1 成長段階の違い
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>ブロッコリースプラウト：発芽直後の幼苗段階;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>成熟したブロッコリー：太い茎と花蕾が成長した状態。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.2 栄養構造のわずかな違い
          </h3>

          <p className="mb-6">
            研究によると、ブロッコリースプラウトは全体的に<strong>低カロリー、低脂肪、タンパク質の割合が相対的に高い</strong>特徴があります。さらに、食物繊維、ビタミンC、ビタミンA、カルシウム、鉄などの多様な栄養素を含んでいます。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.3 最も重要な違い：活性成分の含有量
          </h3>

          <p className="mb-6">
            複数の分析により、ブロッコリースプラウトには特定の硫黄化合物、特に<strong>グルコラファニン(glucoraphanin)</strong>が、<strong>成熟したブロッコリーの数十倍から約100倍も高濃度</strong>で含まれていることがわかっています。この成分こそが、ブロッコリースプラウトが科学研究で特に注目される理由です。
          </p>
        </section>

        {/* 第2部 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            2. 核心成分：グルコラファニンからスルフォラファンへ
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.1 植物の天然防御メカニズム
          </h3>

          <p className="mb-4">
            アブラナ科の野菜(ブロッコリー、キャベツ、ケールなど)には、<strong>グルコシノレート(glucosinolates)</strong>と呼ばれる特別な成分が含まれています。ブロッコリースプラウトで最も重要なのは<strong>グルコラファニン(glucoraphanin)</strong>です。
          </p>

          <p className="mb-6">
            植物にとって、これらの物質は昆虫や病原体から身を守る「防御兵器」です。しかし人間にとっては、体内で活性化されることで、さまざまな健康上のメリットをもたらす可能性があります。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.2 噛むときに何が起こるか?
          </h3>

          <p className="mb-4">ブロッコリースプラウトを<strong>噛んだり、切ったり、つぶしたり</strong>すると:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>植物細胞が壊れ、<strong>ミロシナーゼ(myrosinase)</strong>という酵素が放出される;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>ミロシナーゼがグルコラファニンと接触し、より活性の高い<strong>スルフォラファン(sulforaphane)</strong>に変換される;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>腸内の特定の細菌も同様の変換を行うことができ、調理で一部の酵素が破壊されても、体内でスルフォラファンが生成される可能性がある。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.3 スルフォラファン：体内の「防御システム」を起動させる
          </h3>

          <p className="mb-4">
            多くの細胞および動物実験により、スルフォラファンが体内の重要な経路である<strong>Nrf2–ARE シグナル経路</strong>を活性化できることがわかっています。簡単に言えば、この経路は「細胞の自己保護モード」の総合スイッチです:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>多様な<strong>抗酸化酵素</strong>(NQO1、HO-1など)を増加させ、フリーラジカルを除去;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>細胞の<strong>解毒、抗炎症、ストレス耐性能力</strong>を向上させる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>代謝、細胞修復、慢性疾患関連遺伝子の発現調節に関与する。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              これが、ブロッコリースプラウトが「機能性食品」とみなされる重要な科学的根拠です。
            </p>
          </div>
        </section>

        {/* 第3部 - 研究結果 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            3. 科学的研究が示すこと
          </h2>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              以下で紹介する研究の多くは、新鮮なブロッコリースプラウト、スプラウト粉末、またはグルコラファニン/スルフォラファンが豊富な抽出物を使用しています。研究は現在進行中であり、現段階では「有望な方向性」として捉えるべきで、「証明された治療法」ではありません。
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.1 抗酸化と解毒：環境ストレスへの対応
          </h3>

          <p className="mb-4">
            いくつかの臨床試験では、毎日<strong>グルコラファニン/スルフォラファンが豊富なブロッコリースプラウト製剤</strong>を摂取することで、特定の汚染物質や発がん性代謝物の排出が促進される可能性が示されています:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>食品中の特定の発がん前駆物質;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>大気汚染に含まれるベンゼンやアクロレインなどの有害成分。</span>
            </li>
          </ul>

          <p className="mb-6">
            これらの研究は、ブロッコリースプラウトが<strong>体内での環境由来の有害化合物の処理を促進する可能性</strong>を示唆しており、現代の環境ストレスに対する興味深い食事戦略です。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.2 心血管と代謝指標：「三高」の人への示唆
          </h3>

          <p className="mb-4">
            メタボリックシンドローム、高血圧、または過体重の人々を対象とした小規模臨床試験や統合分析では、以下のことが示されています:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>数週間から数か月間、ブロッコリースプラウトまたはその抽出物を継続的に摂取した後、<strong>収縮期血圧、空腹時血糖、特定の脂質指標</strong>がわずかながら統計的に有意に改善;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>サンプルサイズが小さく、介入方法が多様であるという制限はあるものの、これらの結果は「ブロッコリースプラウトが心血管・代謝健康に役立つ可能性」を示す初期的証拠となっている。</span>
            </li>
          </ul>

          <p className="mb-3">強調すべき点:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>効果は通常<strong>補助的で穏やか</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>降圧薬、糖尿病薬などの正式な治療に代わるものではない;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>本当に重要なのは、<strong>全体的な食事、体重管理、運動習慣</strong>。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.3 炎症と免疫：炎症マーカーからワクチン反応まで
          </h3>

          <p className="mb-4">いくつかのヒト研究では、ブロッコリースプラウトの摂取が以下の変化と関連しています:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>過体重者が2~3か月間毎日約30グラムの新鮮なブロッコリースプラウトを摂取すると、一部の<strong>炎症マーカー(CRP、IL-6など)が低下傾向</strong>を示した;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>弱毒化インフルエンザ鼻腔スプレーワクチンの研究では、スルフォラファンが豊富なブロッコリースプラウト製剤が<strong>特定の免疫細胞応答を強化する</strong>可能性が示された。</span>
            </li>
          </ul>

          <p className="mb-6">
            これらの結果は、スルフォラファンが酸化ストレスと免疫経路を調節し、<strong>「過度に活性化せず、かつ対応能力を維持する」</strong>免疫バランスをサポートする可能性を示唆しています。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.4 腸と脳の健康：探索中の新しい方向性
          </h3>

          <p className="mb-4">近年のレビューでは、グルコラファニン/スルフォラファンと腸内細菌叢との相互作用が指摘されています:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>特定の腸内細菌がグルコラファニンをスルフォラファンへさらに変換するのを助ける;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>スルフォラファンは腸の酸化ストレスと炎症反応を軽減し、<strong>腸管バリア機能と菌叢バランスをサポートする</strong>可能性がある。</span>
            </li>
          </ul>

          <p className="mb-6">
            また、<strong>神経変性疾患や認知機能低下</strong>の分野でも、実験室研究でアルツハイマー病モデルにおける抗酸化および神経保護作用が実証されています。ただし、この分野は現在<strong>細胞および動物実験が中心で、臨床的結論にはまだ距離があります</strong>。
          </p>
        </section>

        {/* 第4部 - 安全性 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            4. 安全性：一般的に安全に摂取できるか?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.1 食品形態では、全体的に安全性が高い
          </h3>

          <p className="mb-4">
            新鮮なブロッコリースプラウトや通常の調理量での摂取は、既存の研究と長期的な食事経験から、<strong>全体的に安全性が高い</strong>と認められています。
          </p>

          <p className="mb-4">いくつかの臨床試験では、被験者は数週間から数か月間、以下を摂取しました:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>毎日20~40グラムの新鮮なブロッコリースプラウト、または</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>同等量のグルコラファニン/スルフォラファンを含む抽出物、</span>
            </li>
          </ul>

          <p className="mb-4">よく見られる副作用は主に:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>軽度の胃腸不快(膨満感、軽い下痢、げっぷの増加など);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>少数の人で一時的な口臭や排便臭の変化。</span>
            </li>
          </ul>

          <p className="mb-6">通常、使用を中止または減量すれば緩和されます。</p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.2 生のスプラウトの「食品安全」リスク
          </h3>

          <p className="mb-4">
            特に注意が必要なのは、<strong>すべての生のスプラウト(ブロッコリースプラウトだけでなく)には、微生物汚染のリスクがある</strong>ということです。サルモネラ菌、大腸菌、リステリア菌などが含まれます。
          </p>

          <p className="mb-4">そのため、以下のグループには、一般的に<strong>生のスプラウトを避けるか、慎重に摂取する</strong>ことが推奨されています:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>妊婦、高齢者、免疫力が低下している人;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>化学療法中、または長期免疫抑制剤使用中の人。</span>
            </li>
          </ul>

          <p className="mb-4">微生物リスクを軽減するには:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>正規の流通ルートで、コールドチェーン管理が適切な製品を選ぶ;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>自宅で栽培する場合は、器具と水源の清潔さに厳格に注意する;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>高リスクグループに対しては、<strong>短時間の蒸しや軽い炒め物</strong>にしてから食べることを推奨し、完全に生では食べない。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.3 サプリメント形態ではより慎重に
          </h3>

          <p className="mb-4">
            市場には「ブロッコリースプラウト抽出物」や「スルフォラファンカプセル」などの健康食品もあります。食品と比較して、サプリメントは<strong>投与量がより濃縮され、成分がより単一化</strong>されているため、以下の状況では特に注意が必要です:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>抗凝固薬、抗てんかん薬、その他の慢性疾患の薬を服用している場合、代謝経路での相互作用リスクの可能性がある;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>妊娠中、授乳中の人については、現在十分な安全性データが不足しているため、<strong>通常の食事での野菜摂取</strong>を中心とし、高用量サプリメントは避けることが推奨される。</span>
            </li>
          </ul>

          <p className="mb-6">
            高濃度抽出物の長期使用を計画している場合は、<strong>事前に医師または栄養専門家に相談してください</strong>。
          </p>
        </section>

        {/* 第5部 - 日常の食べ方 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            5. 日常でどう食べれば、ブロッコリースプラウトのメリットを最大限に活かせるか?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.1 簡単な目安量：「ひと握り」から始める
          </h3>

          <p className="mb-4">ほとんどの研究で使用される量は、日常の食事に換算すると、おおよそ:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>毎日<strong>ひと握り(約20~30グラム)の新鮮なブロッコリースプラウト</strong>、または</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>週に数回、サラダ、サンドイッチ、丼ものにスプラウトを一層加える。</span>
            </li>
          </ul>

          <p className="mb-6">
            一般的な健康な人であれば、正確に計量する必要はありません。<strong>多様な野菜の一員</strong>として考え、重要なのは<strong>長期的、適量、バランスの取れた食事との組み合わせ</strong>です。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.2 生 vs. 加熱：活性と安全性のバランス
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>生</strong>：より多くのミロシナーゼとビタミンを保持し、スルフォラファンの生成に有利;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>軽い蒸しや素早い炒め</strong>：微生物リスクを大幅に軽減しながら、活性成分をできるだけ保持。</span>
            </li>
          </ul>

          <p className="mb-4">実用的なヒント:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>加熱が必要な場合は、ブロッコリースプラウトを<strong>刻んでから5~10分間置いておく</strong>ことで、ミロシナーゼがグルコラファニンをスルフォラファンに変換する時間を確保し、その後短時間加熱する;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>長時間の煮沸や高温での揚げ物は避ける。これは水溶性ビタミンと活性物質を大幅に損失させる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>少量の<strong>生のアブラナ科野菜やマスタードシード</strong>と組み合わせることで、体内に追加のミロシナーゼ源を提供できる。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.3 肝臓と代謝に優しい全体的な食事との組み合わせ
          </h3>

          <p className="mb-4">
            ブロッコリースプラウトがいくら「優れている」としても、高油高糖の食事、長期の睡眠不足、運動不足によるストレスを単独で相殺することはできません。その価値を本当に発揮させるには、より重要なことがあります:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>総カロリーを管理し、砂糖入り飲料、揚げ物、精製炭水化物を減らす;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>十分な野菜、果物、良質なタンパク質、全粒穀物を確保する;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>定期的な運動、座りっぱなしを減らし、体重とウエストを適正範囲に維持する;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>特に「肝臓保護」に関心がある人にとって、上記の生活習慣はどんな単一成分よりも重要。</span>
            </li>
          </ul>
        </section>

        {/* 第6部 - 注意が必要な人 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            6. 特に注意が必要な人は?
          </h2>

          <p className="mb-4">
            以下のいずれかに該当する場合は、ブロッコリースプラウトの摂取を意図的に増やしたり、高濃度抽出物を使用する前に、医師に相談することをお勧めします:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>肝疾患、腎疾患、炎症性腸疾患などの慢性疾患と診断されている;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>抗凝固薬、抗てんかん薬、免疫抑制剤などの処方薬を長期服用している;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>妊娠中、授乳中、または近い将来妊娠を計画している;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>アブラナ科野菜(ブロッコリー、キャベツなど)に対して明確なアレルギーや不耐性の既往歴がある。</span>
            </li>
          </ul>
        </section>

        {/* 第7部 - まとめ */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            7. まとめ：小さな芽、食事の多様性への良い選択肢
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>ブロッコリースプラウトは小さいながらも、タンパク質、食物繊維、多種多様なビタミン・ミネラルが豊富;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>さらに重要なのは、<strong>高濃度のグルコラファニン</strong>を含み、咀嚼と腸内作用により<strong>スルフォラファン</strong>に変換され、細胞の抗酸化・解毒システムを活性化できることで、科研分野で継続的に注目されている;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>複数の初期臨床研究は、<strong>心血管・代謝健康、炎症調節、解毒、免疫サポート</strong>などの面で一定の助けをもたらす可能性を示唆しているが、現時点では主に<strong>栄養とライフスタイルの補助要因</strong>と位置づけられ、薬物治療の代替にはならない;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>多くの健康な人にとって、適量のブロッコリースプラウトを日常の食事に取り入れることは、野菜の多様性を増やし、全体的な食事の質を高める簡単な方法。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              自分や家族のために、より「肝臓に優しく、健康をサポートする」ライフスタイルを設計しているなら、食卓にブロッコリースプラウトの緑を適度に加え、十分な睡眠、バランスの取れた食事、定期的な運動と組み合わせることをお勧めします。これらを合わせたものこそが、長期的に維持する価値のある真の「自然の力」なのです。
            </p>
          </div>
        </section>

        {/* 参考文献 */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <h3 className="text-2xl font-light text-deep-brown mb-6">参考文献(英文、さらに詳しく調べたい方向け)</h3>
          
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
