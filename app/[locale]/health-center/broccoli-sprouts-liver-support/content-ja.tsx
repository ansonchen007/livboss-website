export default function ContentJA() {
  return (
    <>
      <header className="mb-12">
        <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
          科学的詳細分析
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-6 leading-tight">
          ブロッコリースプラウトと肝臓の日常サポート：科学的レビュー
        </h1>
        <p className="text-text-primary/70 text-lg leading-relaxed">
          ブロッコリースプラウト、スルフォラファン、そして肝臓健康との科学的関係を深く探ります。臨床試験データと安全性の考慮事項を含みます。
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        {/* セクション1：なぜ注目されているのか */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            1. なぜブロッコリースプラウトが注目されているのか？
          </h2>
          
          <p className="text-text-primary/80 leading-relaxed mb-4">
            近年、欧米や日本の栄養補助食品分野で、<strong>「ブロッコリースプラウト」</strong>が話題となっています。成熟したブロッコリーと比べて、発芽してわずか数日のこの若芽には、特定の植物化学成分が数倍から数十倍の濃度で含まれている可能性があります。
          </p>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            注目される理由は、複数の研究により、ブロッコリースプラウトに含まれる前駆物質—<strong className="text-deep-brown">グルコラファニン（Glucoraphanin）</strong>—が、人体内でより活性の高い<strong className="text-deep-brown">スルフォラファン（Sulforaphane）</strong>に変換されることが分かってきたためです。後者は、動物および人体研究において、肝臓の解毒経路をサポートし、抗酸化反応を調整する作用を示しています。
          </p>

          <div className="bg-paper-bg border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-text-primary/90 italic">
              <strong>重要なポイント：</strong>ブロッコリースプラウトは医薬品ではなく、いかなる医学的診断や治療の代替にもなりません。単なる食材や栄養補助食品の原料であり、その健康効果は引き続き研究中です。
            </p>
          </div>
        </section>

        {/* セクション2：成熟ブロッコリー vs スプラウト */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            2. 成熟ブロッコリー vs ブロッコリースプラウト：小さな芽に凝縮された成分
          </h2>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            普段食べている成熟ブロッコリーは、食物繊維、ビタミンC、葉酸などが豊富な健康野菜として知られています。しかし、<strong className="text-deep-brown">ブロッコリースプラウト</strong>（発芽後3-5日の幼苗）は、特定の活性成分の濃度において、さらに顕著な特徴を示します：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>グルコラファニン含有量:</strong> 研究によると、3日齢のブロッコリースプラウトは、成熟ブロッコリーの10-100倍のこの成分を含む可能性があります（品種と栽培条件による）
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>スルフォラファン生成の促進:</strong> 若芽には<em>ミロシナーゼ（Myrosinase）</em>が多く含まれ、グルコラファニンからスルフォラファンへの変換を促進します
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>少量で便利な摂取:</strong> 濃度が高いため、少量のスプラウトで十分な活性成分を提供でき、市場に「ブロッコリースプラウトエキス」のカプセルや粉末が登場しています
              </span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90 text-sm">
              <strong>注意：</strong>スプラウトが特定の成分で優れているとはいえ、成熟ブロッコリーが「無用」というわけではありません。成熟ブロッコリーには繊維が多く、風味も豊かで調理の適応性もあります。個人のニーズに応じて両方を組み合わせることができます。
            </p>
          </div>
        </section>

        {/* セクション3：主要成分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            3. 主要成分：グルコラファニンとスルフォラファン
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-6">
            3.1 グルコラファニンとは？
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            グルコラファニンは、<strong>グルコシノレート（Glucosinolates）</strong>ファミリーに属する植物化学物質で、アブラナ科野菜（ブロッコリー、キャベツ、ケールなど）に一般的に存在します。それ自体は比較的安定しており、体内で酵素反応を経てより強い生物活性を発揮します。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.2 スルフォラファンの生成と作用メカニズム
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            ブロッコリースプラウトを噛んだり切ったりすると、植物細胞が破裂し、放出された<strong className="text-deep-brown">ミロシナーゼ</strong>がグルコラファニンと反応して<strong className="text-deep-brown">スルフォラファン</strong>を生成します。
          </p>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h4 className="text-lg font-medium text-deep-brown mb-3">変換プロセス：</h4>
            <div className="text-center text-text-primary/80 space-y-2">
              <p><strong>グルコラファニン（貯蔵形態）</strong></p>
              <p className="text-2xl text-primary">↓</p>
              <p><em>ミロシナーゼ作用（咀嚼/切断）</em></p>
              <p className="text-2xl text-primary">↓</p>
              <p><strong>スルフォラファン（生物活性形態）</strong></p>
            </div>
          </div>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            スルフォラファンは、ブロッコリースプラウトの健康効果における主な「功労者」と考えられています。細胞および動物実験では、以下のことが発見されています：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>Nrf2経路の活性化:</strong> Nrf2は細胞内の重要な転写因子で、様々な抗酸化酵素と解毒酵素の発現を誘導できます
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>Phase II解毒酵素のサポート:</strong> グルタチオンS-トランスフェラーゼ（GST）やキノン還元酵素（NQO1）など、肝臓が有害物質を代謝・除去するのを助けます
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>炎症反応の調整:</strong> 一部の研究では、スルフォラファンが特定の炎症促進因子の放出を抑制する可能性が示されています
              </span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-amber-900 flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <span>
                <strong>重要な注意:</strong> これらのメカニズムの多くは、細胞実験や動物モデルから得られたものです。人体での実際の効果、必要な用量、異なる集団での有効性については、より多くの臨床研究による検証が必要です。
              </span>
            </p>
          </div>
        </section>

        {/* セクション4：科学的証拠 - 簡略版 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            4. 科学的証拠：肝機能から代謝健康まで
          </h2>

          <p className="text-text-primary/80 leading-relaxed mb-6">
            ブロッコリースプラウトとスルフォラファンはまだ主流医学の第一選択治療法ではありませんが、近年、肝臓および代謝健康への潜在的な影響を探る臨床・疫学研究がいくつか行われています。
          </p>

          <div className="bg-white border border-champagne-gold/30 rounded-lg p-6 mb-6 shadow-sm">
            <h4 className="text-lg font-medium text-deep-brown mb-3">研究例：非アルコール性脂肪肝（NAFLD）</h4>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <em>World Journal of Gastroenterology</em>（2015）に発表された小規模ランダム化比較試験では、NAFLDと診断された被験者が標準化されたブロッコリースプラウト抽出物を毎日摂取しました。対照群と比較して、介入群では数週間後に肝酵素レベル（ALT、AST）がある程度低下し、肝臓の炎症状態の改善が示唆されました。
            </p>
            <p className="text-text-primary/80 text-sm italic">
              参考文献：Kikuchi M, et al. World J Gastroenterol. 2015;21(43):12441–12448.
            </p>
          </div>

          <div className="bg-white border border-champagne-gold/30 rounded-lg p-6 mb-6 shadow-sm">
            <h4 className="text-lg font-medium text-deep-brown mb-3">研究例：2型糖尿病患者の血糖コントロール</h4>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <em>Science Translational Medicine</em>（2017）で発表された研究では、2型糖尿病傾向のある肥満被験者に高用量のブロッコリースプラウト抽出物（スルフォラファン）が投与されました。空腹時血糖とHbA1cの低下が認められ、肝臓での糖新生抑制により血糖コントロールが改善される可能性が示されました。
            </p>
            <p className="text-text-primary/80 text-sm italic">
              参考文献：Axelsson AS, et al. Sci Transl Med. 2017;9(394):eaah4477.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
            <p className="text-blue-900">
              <strong>研究の限界:</strong> サンプルサイズが一般に小さく、介入期間と用量に大きな違いがあり、統一された基準がありません。一部の試験では長期フォローアップが行われておらず、安全性と持続効果の観察が必要です。
            </p>
          </div>
        </section>

        {/* セクション5-7：要約版 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            5. ブロッコリースプラウトと肝臓サポート
          </h2>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            スルフォラファンは<strong>Nrf2経路の活性化</strong>を通じて抗酸化防御を強化し、<strong>Phase II解毒酵素</strong>をサポートして有害物質の代謝を促進し、炎症反応を調整して細胞を保護します。これらのメカニズムから、ブロッコリースプラウトが肝臓健康をサポートする食材または補助食品として見られる理由が分かります。
          </p>
          <div className="bg-paper-bg p-6 rounded-lg border border-champagne-gold/30">
            <p className="text-text-primary/80 italic">
              <strong>注意:</strong> メカニズム研究は臨床治療と同じではありません。実際の応用では、個人差、用量の安全性、長期効果などを考慮する必要があります。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            6. 食品 vs サプリメント：科学的な摂取方法
          </h2>
          
          <h3 className="text-xl font-medium text-deep-brown mb-3">新鮮なスプラウトの直接摂取</h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            <strong>利点:</strong> 天然食材、ミロシナーゼを保持、比較的高い安全性<br/>
            <strong>課題:</strong> 保存が難しい、細菌リスク、含有量の変動
          </p>

          <h3 className="text-xl font-medium text-deep-brown mb-3 mt-6">スプラウト抽出物（サプリメント）</h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            <strong>利点:</strong> 標準化された用量、長期保存可能、持ち運びに便利<br/>
            <strong>注意点:</strong> 信頼できるブランド選び、製品ラベルの確認が重要
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
            <p className="text-text-primary/80">
              <strong>用量推奨:</strong> 新鮮スプラウトは1日50-100g程度。サプリメントの場合は製品ラベルに従うか、医療専門家に相談してください。長期または高用量使用前に健康評価を受けることをお勧めします。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            7. 安全性と注意事項
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 甲状腺の問題</h4>
              <p className="text-red-900 text-sm">
                アブラナ科野菜にはグルコシノレートが含まれており、過剰摂取は甲状腺のヨウ素吸収を妨げる可能性があります。甲状腺機能低下症や甲状腺薬を服用している場合は、医師の指導の下で慎重に使用してください。
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 抗凝固薬との相互作用</h4>
              <p className="text-red-900 text-sm">
                ブロッコリースプラウトにはビタミンKが含まれており、ワルファリンなどの抗凝固薬の効果に影響を与える可能性があります。
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 妊娠中・授乳中</h4>
              <p className="text-red-900 text-sm">
                高用量サプリメントの妊娠中・授乳中の安全性データは限られています。医師に相談してから使用してください。
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 新鮮スプラウトの細菌リスク</h4>
              <p className="text-red-900 text-sm">
                新鮮なスプラウトは温かく湿った環境で成長するため、サルモネラ菌や大腸菌などの細菌汚染のリスクがあります。信頼できる供給元から購入し、食前によく洗ってください。
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
            <p className="text-yellow-900 font-medium mb-3">⚠️ 重要な免責事項</p>
            <p className="text-yellow-900 leading-relaxed">
              ブロッコリースプラウトまたはスルフォラファンは<strong>医薬品ではなく</strong>、正規の医学診断や治療の代替にはなりません。肝疾患（肝炎、肝硬変、肝臓がんなど）と診断されている場合、または肝臓の問題が疑われる場合は、速やかに医師の診察を受け、医師の指示に従って治療してください。
            </p>
          </div>
        </section>

        {/* 参考文献 */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-deep-brown mb-6 border-b border-gray-300 pb-3">
            参考文献
          </h2>
          <ol className="space-y-3 text-sm text-text-primary/80">
            <li>Kikuchi M, et al. World J Gastroenterol. 2015;21(43):12441–12448. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4658638/" className="text-primary hover:underline">[PubMed]</a></li>
            <li>Satomi Y, et al. Front Nutr. 2022;9:876862. <a href="https://www.frontiersin.org/articles/10.3389/fnut.2022.876862/full" className="text-primary hover:underline">[全文]</a></li>
            <li>Bahadoran Z, et al. Int J Food Sci Nutr. 2012;63(7):767–771. <a href="https://pubmed.ncbi.nlm.nih.gov/22537070/" className="text-primary hover:underline">[PubMed]</a></li>
            <li>Axelsson AS, et al. Sci Transl Med. 2017;9(394):eaah4477. <a href="https://www.science.org/doi/10.1126/scitranslmed.aah4477" className="text-primary hover:underline">[DOI]</a></li>
            <li>Yan T, et al. Front Pharmacol. 2023;14:1256029. <a href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2023.1256029/full" className="text-primary hover:underline">[全文]</a></li>
            <li>Baralić I, et al. Int J Mol Sci. 2024;25(1):416. <a href="https://www.mdpi.com/1422-0067/25/1/416" className="text-primary hover:underline">[全文]</a></li>
            <li>Houghton CA. Oxid Med Cell Longev. 2016;2016:7857186. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5069479/" className="text-primary hover:underline">[PubMed]</a></li>
            <li>Cascajosa-Lira A, et al. Toxicol Lett. 2024;395:1-14. <a href="https://www.sciencedirect.com/science/article/pii/S0378427424004582" className="text-primary hover:underline">[ScienceDirect]</a></li>
            <li>U.S. FDA. Guidance for Industry: Reducing Microbial Food Safety Hazards for Sprouted Seeds. <a href="https://www.fda.gov/food/guidanceregulation/guidancedocumentsregulatoryinformation/ucm120244.htm" className="text-primary hover:underline">[FDA]</a></li>
            <li>Colorado State University Extension. Safe Handling of Raw Produce. <a href="https://extension.colostate.edu/topic-areas/nutrition-food-safety-health/safe-handling-of-raw-produce-and-fresh-squeezed-fruit-and-vegetable-juices-9-369/" className="text-primary hover:underline">[CSU]</a></li>
            <li>UC Agriculture & Natural Resources. Growing Sprouts at Home. Publication 8151. <a href="https://anrcatalog.ucanr.edu/pdf/8151.pdf" className="text-primary hover:underline">[PDF]</a></li>
            <li>Healthline. Broccoli Sprouts: Benefits, Nutrition, and How to Eat Them. <a href="https://www.healthline.com/nutrition/broccoli-sprouts" className="text-primary hover:underline">[記事]</a></li>
          </ol>
        </section>

        {/* 免責事項 */}
        <section className="mt-12 p-6 bg-gray-100 border-l-4 border-gray-400 rounded-r-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-3">免責事項</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            本記事の内容は教育目的および一般的な参考のためのものであり、医学的アドバイスや専門的指導を構成するものではありません。言及された研究結果は、サンプルサイズや方法論の違いなどにより限界がある可能性があります。ブロッコリースプラウトまたは関連サプリメントの使用を検討する前に、読者は資格のある医療専門家に相談してください。LivBossおよび本記事の著者は、本記事の情報の使用から生じる直接的または間接的な結果について一切の責任を負いません。
          </p>
        </section>
      </div>
    </>
  );
}
