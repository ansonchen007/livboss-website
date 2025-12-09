'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ContentJA() {
  const tHealth = useTranslations('health');

  return (
    <>
      {/* ヒーロー画像 */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/sleep-liver-hero.jpg"
          alt="睡眠と肝臓の健康"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* タイトル */}
      <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-8">
        慢性的な睡眠不足は、肝臓にどんな負担をかけるのか?
      </h1>

      {/* イントロダクション */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed mb-4">
          たまに夜更かしをしたり、残業や動画視聴で遅くなったり——ほとんどの人が経験したことがあるでしょう。<br/>
          肝臓に本当の負担をかけるのは、1~2回の夜更かしではなく、<strong>長期的な睡眠不足と生活リズムの乱れ</strong>です。
        </p>
        <p className="text-lg text-text-primary/90 leading-relaxed">
          ますます多くの研究が明らかにしています:睡眠が少ない、または睡眠の質が悪い人は、脂肪肝や代謝障害になりやすく、交代勤務や長期夜勤の人は肝酵素異常の発生率が高く、睡眠時間が7時間未満の場合、肥満や糖尿病など複数の肝臓病リスク因子と関連しています。
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">

        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            1. まず理解する:睡眠と肝臓の間には、本来どういう関係があるのか?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.1 肝臓も「時間を見て仕事をする」臓器
          </h3>

          <p className="mb-4">人体にはおよそ24時間の<strong>概日リズムシステム</strong>があります:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>脳の「主時計」が昼夜を区別する;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>各臓器(肝臓を含む)にも独自の「末梢時計」があり、生活リズム、食事、光などの信号に基づいてリズムを調整します。</span>
            </li>
          </ul>

          <p className="mb-3">肝臓にとって、このリズムはおおよそ次のことを意味します:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>昼間は<strong>食事からのエネルギーと栄養の処理</strong>に集中;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>夜間は比較的「修復・整理モード」に入り、抗酸化、防御、細胞修復などの作業を完了;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>脂肪や糖代謝に関連する多くの遺伝子は、24時間の中で明確な「ピーク-谷」の変化を示します。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1.2 睡眠不足は「スケジュールを乱している」ということ
          </h3>

          <p className="mb-4">頻繁に夜更かしをしたり、睡眠不足だったり、昼夜が逆転したりすると:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>脳の主時計と肝臓の末梢時計が<strong>同期しなくなります</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓は「今休むべき」という信号を受け取りながら、食事、光、ストレスによって「仕事を続ける」ことを強いられます;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>時間が経つと、代謝障害、脂肪蓄積、炎症反応などの問題が現れます。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              簡単に理解すると:<br/>
              肝臓は本来「昼間に働き、夜間に修復」というリズムで仕事をしています。<br/>
              長期的に夜更かしをして睡眠が少なくなると、「昼夜を問わず働き続け、休憩時間もない」状態になります。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            2. 証拠その1:睡眠不足と脂肪肝 / MASLDリスクの上昇
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.1 短時間睡眠と脂肪肝:大規模研究は何を示している?
          </h3>

          <p className="mb-4">複数の観察研究とメタ解析により次のことが分かっています:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>睡眠時間が明らかに不足している人は、NAFLD / MASLDになりやすい</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>複数の研究を含むシステマティック解析では:<strong>睡眠が少なすぎる人々では、脂肪肝の発生リスクが有意に増加</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>他の研究では、もともとよく眠れていた人が、<strong>徐々に睡眠時間を短くしたり、睡眠の質が悪化したりすると、数年後に新規発症の脂肪肝のリスクが明らかに上昇</strong>することが分かりました。</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              一部の研究では、性別によって「短時間睡眠」のリスクパターンに若干の違いがあることも示唆されていますが、全体的には:<br/>
              <strong>圧倒的多数の証拠が示しているのは:長期的に睡眠が不足すると、脂肪肝や代謝問題が起こりやすくなるということです。</strong>
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2.2 「どれだけ眠るか」だけでなく、よく眠れているかも重要
          </h3>

          <p className="mb-4">最近の全国人口調査に基づく研究では次のことが指摘されています:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>睡眠時間だけでなく、<strong>入眠困難、頻繁な目覚め、いびきなど複数の睡眠要素が共に悪化すると、脂肪肝 / MASLDのリスクが有意に増加</strong>します。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              言い換えれば:<br/>
              <strong>「十分に眠っているがよく眠れていない」</strong>ことの肝臓や代謝への影響は、「睡眠が少ない」のと同じくらい重視する必要があるかもしれません。
            </p>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            3. 証拠その2:睡眠不足と肝酵素 / 代謝指標の異常
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.1 短時間睡眠と肝酵素上昇
          </h3>

          <p className="mb-4">複数の研究で、<strong>長期的に睡眠時間が短い人は、ALT、AST、γ-GTPなどの肝酵素異常がより一般的</strong>であることが分かっています:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>韓国の横断研究では、<strong>睡眠時間が過度に短い人は、異常肝酵素の割合が高い</strong>ことが分かり、研究者は睡眠不足が代謝障害を通じて脂肪肝リスクを増加させる可能性があると考えています。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>他の研究では、<strong>長期的な睡眠不足+他の不健康な生活習慣(座りがち、飲酒、肥満)が重なると、γ-GTP上昇のリスクがより顕著</strong>になることが示されています。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.2 睡眠と体重、血糖、インスリン抵抗性
          </h3>

          <p className="mb-4">アメリカ睡眠医学会の専門家共同声明では次のことが示されています:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>成人が長期的に7時間未満の睡眠をとると、肥満、2型糖尿病、高血圧、心血管疾患など複数の有害な結果と関連</strong>します。</span>
            </li>
          </ul>

          <p className="mb-4">そして、これらの問題自体が脂肪肝 / MASLDの中核的な危険因子です:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>睡眠不足 → ホルモンバランスの乱れ(コルチゾール上昇など)、食欲調節の障害 → 高糖・高脂肪食品を食べたくなる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>睡眠不足 → インスリン感受性低下 → 高血糖、インスリン抵抗性が起こりやすい;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>インスリン抵抗性 + 高エネルギー食事 → 肝臓の脂肪蓄積、炎症反応の上昇。</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              つまり、間接的な経路から見ると:<br/>
              <strong>睡眠不足 → 体重、血糖、血中脂質のコントロール不良 → 脂肪肝と肝臓代謝ストレスの明らかな増加。</strong>
            </p>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            4. 証拠その3:交代勤務 / 夜勤の人々への肝臓の特別な課題
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.1 夜勤と肝酵素、血中脂質
          </h3>

          <p className="mb-4">多くの研究が、長期的な交代勤務や夜勤の看護師、労働者などの人々に注目しています:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>交代勤務者の肝酵素異常のリスクはやや高く、リズムの乱れが関与している可能性が示唆されています;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>長時間の昼夜交代勤務は<strong>肝機能と血中脂質の異常</strong>と関連;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>システマティックレビューでは:<strong>交代勤務は生物時計を乱し、MASLDおよびそのより重篤な肝疾患への進行リスクを増加させる</strong>と指摘されています。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.2 生物時計の乱れ自体が「脂肪肝を促進する」
          </h3>

          <p className="mb-4">肝臓の概日リズムに関する研究では次のことが示されています:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝細胞内の「時計遺伝子」が脂質合成、脂肪酸酸化、コレステロール代謝を調節;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>生物時計が乱れると(長期夜勤、頻繁な時差、深刻な夜更かしなど)、<strong>肝臓は脂質蓄積と炎症反応が起こりやすくなります</strong>。</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              したがって、交代勤務が必要な職業の人々にとって、<br/>
              <strong>避けられない夜勤条件下で、リズムの乱れによる肝臓への衝撃をできるだけ軽減する方法</strong>は、非常に現実的な問題です。
            </p>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            5. メカニズムから見る:睡眠不足はどのように肝臓を「困らせる」のか?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.1 ホルモンと神経系の「アクセル全開」
          </h3>

          <p className="mb-4">長期的な睡眠不足は次のことを引き起こします:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>コルチゾールレベルの上昇</strong>、交感神経の長期的な興奮;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>食欲ホルモン(レプチン、グレリン)のバランスが崩れ、空腹感を感じやすく、高カロリー食品を好むようになる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>インスリン感受性が低下し、血糖コントロールが悪化。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              これらの変化により、肝臓はより多くの脂肪と糖を処理しなければならなくなります。長期的に見ると、これは次のようなものです:<br/>
              <strong>「アクセルを踏み続けているのに、ブレーキが故障している。」</strong>
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.2 肝臓の夜間修復時間が圧縮される
          </h3>

          <p className="mb-4">夜間は肝臓が多くの「修復作業」を完了する重要な時間帯です:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>抗酸化防御システムの活動が増強され、昼間に蓄積されたフリーラジカルや代謝廃棄物を除去;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一部のDNA修復、細胞更新が夜間により活発になる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>免疫システムもこの時間帯に「メンテナンス」を行います。</span>
            </li>
          </ul>

          <p className="mb-6">
            長期的に非常に遅くまで起きていたり、睡眠時間が明らかに不足していたりすると、<br/>
            肝臓が「修復」に使える時間が圧迫され、<strong>蓄積されたダメージを適時に修復することが難しくなります</strong>。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5.3 肝臓と生物時計の「双方向の影響」
          </h3>

          <p className="mb-4">最新の研究では次のことも示唆されています:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>睡眠とリズムが肝臓に影響を与えるだけでなく、<strong>肝疾患自体が逆に睡眠を乱す</strong>ことで、「悪循環」を形成します。</span>
            </li>
          </ul>

          <p className="mb-4">例えば:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一部の脂肪肝や肝硬変患者は<strong>夜間によく眠れず、昼間特に眠い</strong>と訴えます;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>これは代謝や炎症因子から来る可能性もあれば、睡眠時無呼吸症候群、うつ病、不安などの合併症と関連している可能性もあります。</span>
            </li>
          </ul>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            6. 何が「長期的な睡眠不足」に該当する?どれだけ眠れば十分?
          </h2>

          <p className="mb-4">権威ある睡眠学会が示すおおよその基準は:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>健康な成人:毎晩 ≥ 7時間の睡眠を確保すべき</strong>で、多くのガイドラインでは7~9時間を推奨;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>長期的に7時間未満、特に<strong>頻繁に ≤ 6時間</strong>の場合、複数の代謝および心血管リスクの増加と関連。</span>
            </li>
          </ul>

          <p className="mb-4">もちろん、睡眠時間の必要量には個人差がありますが、以下のうち少なくとも1つに該当する場合、<strong>睡眠不足に警戒する必要</strong>があります:</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>平日のほとんどが5~6時間以下の睡眠;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>週末に補充睡眠をとっても、長期的に疲労を感じ、集中力が低下;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>体重、血圧、血糖、ウエスト周囲が近年明らかに増加;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>健康診断で脂肪肝や肝酵素の軽度異常が見られ、同時に長期的に睡眠が不足している。</span>
            </li>
          </ul>
        </section>

        {/* セクション7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            7. 今日から始められる改善策は?
          </h2>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              目標は「一晩で完璧な生活リズムになる」ことではなく、<br/>
              現実的な生活の制約の中で、<strong>睡眠と肝臓の関係をできるだけ良い方向に押し進めること</strong>です。
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.1 肝臓の「修復時間」に十分な時間を確保する
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>できるだけ<strong>一定の時間に就寝・起床</strong>し、最初は今より30分早いだけでも構いません;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>徐々に睡眠時間を<strong>7時間以上</strong>に延ばし、週末に一度に「報復的な補充睡眠」をとることに頼らない;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>夕食をできるだけ早めにし、就寝前の大食いや大量の飲酒を避け、肝臓と消化器系が深夜に残業しないようにする。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.2 より入眠しやすい環境を作る
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>就寝1時間前にできるだけ電子機器の使用を減らし、ブルーライトの刺激を低減;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>寝室を静かで、遮光され、やや涼しい状態に保つ;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>ベッドを「オフィスエリア」や「スマホをいじる戦場」にせず、できるだけ睡眠と親密な活動のみに使う。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.3 体重と代謝を管理し、睡眠と肝臓の「双方向の利益」を得る
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>定期的な運動は同時に<strong>睡眠の質、体重コントロール、インスリン感受性を改善</strong>できます;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>糖質飲料、精製炭水化物、高脂肪食を控えることで、肝臓の負担を軽減し、夜間より安定した睡眠を促進;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>大量のアルコールで「睡眠を助ける」ことを避ける—長期的には肝臓と睡眠の質の両方を悪化させるだけです。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.4 夜勤 / 交代勤務者の「ダメージコントロール」
          </h3>

          <p className="mb-4">仕事で夜勤が避けられない場合、次のことを試してみてください:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>固定されたシフトリズムを維持</strong>し、異なるシフト間の頻繁な切り替えをできるだけ避ける;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>夜勤終了後、比較的固定された静かな睡眠時間を確保し、遮光カーテンや耳栓などを使用してできるだけ「夜間環境」を模擬;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>非夜勤日もできるだけ近い生活リズムを維持し、「昼夜の反転」を減らす;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>体重管理、血圧・血糖モニタリングにより注意を払い、定期健診で肝機能と肝臓画像検査に注目する。</span>
            </li>
          </ul>
        </section>

        {/* セクション8 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            8. 専門家の助けを求めるべきなのはいつ?
          </h2>

          <p className="mb-4">以下のいずれかに該当する場合は、医師の診察または専門家への相談を検討してください:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>3ヶ月以上継続する<strong>入眠困難、早朝覚醒、多夢、起きても非常に疲れている</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>昼間の眠気が深刻で、仕事や運転の安全に影響;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>いびき、呼吸停止、夜間の息苦しさで目覚めるなどの状況を伴う(睡眠時無呼吸症候群と関連している可能性);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>既往歴または最近の健康診断で肝酵素上昇、脂肪肝 / MASLDが示され、かつ長期的に睡眠時間が不足しているか、睡眠の質が明らかに悪い。</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              診察時には、自分の<strong>睡眠パターン、勤務シフト、食事と体重の変化</strong>を積極的に医師に伝えましょう。<br/>
              これにより、医師は総合的に評価できます:肝臓の問題がどの程度睡眠や生活習慣と関連しているか。
            </p>
          </div>
        </section>

        {/* セクション9 - 結論 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            9. 結論:肝臓に少しの「夜間の息抜き」スペースを与える
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓は<strong>リズムに高度に依存</strong>する臓器で、昼間に代謝を処理し、夜間に修復を完了します;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>長期的な睡眠不足や生活リズムの乱れは、肝臓の修復窓を失わせ、代謝負担を増加させ、脂肪肝 / MASLDや肝酵素異常などの問題と関連します;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>良いニュース:<strong>睡眠は行動習慣を通じて徐々に調整できます</strong>—昨日より30分多く眠るだけでも、一晩夜更かしを減らすだけでも、肝臓に「あなたの世話を始めました」という信号を送ることになります。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              一晩で完璧になる必要はありません—今日から始めるだけです。<br/>
              自分と肝臓のために、もう少し質の高い睡眠時間を確保しましょう。
            </p>
          </div>
        </section>

        {/* 重要な注意 */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-deep-brown mb-3">重要な注意</h3>
            <p className="text-text-primary/90">
              この記事の内容は健康教育のみを目的としており、医師の診断や治療の助言に代わるものではありません。<br/>
              肝疾患、睡眠障害と診断されている場合、または長期的に薬を服用している場合は、生活リズムの調整、サプリメントや薬の使用前に、必ず専門医または資格のある医療提供者に相談してください。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
