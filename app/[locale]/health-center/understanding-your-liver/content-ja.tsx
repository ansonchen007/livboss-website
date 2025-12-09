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
          src="/images/liver-anatomy-hero.jpg"
          alt="健康的に運動する人々、肝臓の健康を象徴"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* 導入文 */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed">
          肝臓は毎日黙々と栄養を処理し、毒素を代謝し、消化を助ける体の重要な器官の一つです。<br/>
          痛みも訴えず、静かに働き続ける肝臓。本当に「ストライキ」を起こす頃には、すでに深刻な損傷を受けていることが多いのです。
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">
        
        <p className="text-lg mb-6">
          この記事では、できるだけわかりやすく以下をご説明します:
        </p>

        <ul className="space-y-2 mb-8">
          <li>肝臓の位置と重要性</li>
          <li>毎日行っている重要な働き</li>
          <li>なぜ多くの肝疾患は初期段階で症状がほとんどないのか</li>
          <li>日常生活で肝臓を密かに傷つけている習慣</li>
          <li>今日から始められる肝臓を守る簡単な方法</li>
        </ul>

        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            一、肝臓の位置は？なぜ重要なのか？
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓は<strong>右上腹部</strong>、右肋骨のすぐ下に位置し、胃や胆嚢の上に覆いかぶさる「赤い大きな盾」のようです。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>人体最大の実質臓器で、成人の肝臓の重さは約<strong>1.2〜1.5kg</strong>、サッカーボールほどの大きさです。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>消化管から吸収されたほぼすべての血液は、まず肝臓を通過してから全身に分配されます。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>医学文献によると、肝臓は<strong>500以上の生理機能</strong>に関与しており、まさに「マルチプレイヤー」です。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              肝臓を想像してください:<br/>
              <strong>CPU + 化学工場 + 倉庫 + フィルター</strong><br/>
              これが機能しなければ、安定したエネルギー供給も安全な内部環境もありません。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            二、肝臓が毎日行う主な機能
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 代謝の中枢:糖・脂肪・タンパク質の管理
          </h3>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">血糖調節:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>食事後、肝臓は余分なブドウ糖をグリコーゲンとして貯蔵;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>空腹時や運動時には、グリコーゲンをブドウ糖に分解して血糖を安定させる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>乳酸、グリセロール、一部のアミノ酸から新たにブドウ糖を作る「糖新生」も行います。</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">脂肪処理:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>コレステロールやトリグリセリドの合成・分解;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>リポタンパク質の生成に関与し、血中脂質レベルや動脈硬化リスクに影響を与えます。</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">タンパク質代謝:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>アルブミンや凝固因子など、多くの血漿タンパク質を合成;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>余分なアミノ酸を分解し、有毒なアンモニアを尿素に変換して尿中に排泄します。</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              体を会社に例えると、肝臓は<strong>財務 + 生産 + 物流をすべて担う統制室</strong>です。
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 解毒・濾過:「汚れ」を先に処理
          </h3>

          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓は大型「濾過ステーション」のように、腸管や全身からの大量の血液を24時間濾過;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>アルコール、薬物、ホルモン、環境化学物質などを代謝し、排泄しやすい形に変換;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>細菌の破片や一部の代謝老廃物の除去を助け、内部環境を比較的安定に保ちます。</span>
            </li>
          </ul>

          <p className="mb-4">これが理由です:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>大量飲酒は「肝臓の負担を大幅に増やす」;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一部の薬は「アルコールとの併用を避ける」必要があり、過量や長期の乱用も避けるべきです。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 胆汁生成:脂肪の消化を助ける
          </h3>

          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓は毎日約<strong>800〜1000mlの胆汁</strong>を生成し、胆管を通じて胆嚢や小腸に送ります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>胆汁は「天然の洗剤」のように、脂肪や脂溶性ビタミン(A/D/E/K)の乳化と吸収を助けます;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>また、一部のコレステロールや代謝老廃物の排出も助けます。</span>
            </li>
          </ul>

          <p className="mb-3">胆汁排出が長期間滞ると、以下の症状が現れる可能性があります:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>皮膚や白目が黄色くなる(黄疸);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>尿の色が濃くなり、便の色が薄くなる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>皮膚のかゆみなど。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. 貯蔵庫と免疫の歩哨
          </h3>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">栄養貯蔵:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>グリコーゲンを予備エネルギーとして貯蔵;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一部のビタミン(特に脂溶性)やミネラル(鉄、銅など)を貯蔵します。</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">免疫と凝固:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓内の免疫細胞が門脈系に入る細菌や異物を除去;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>多くの凝固因子を合成し、血液凝固過程に関与します。</span>
            </li>
          </ul>

          <p className="mb-3">肝機能が著しく低下すると、以下が起こる可能性があります:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>あざができやすい、歯茎や鼻からの出血が増える;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>軽い衝撃で大きなあざができる;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>傷が長時間止血しないなど。</span>
            </li>
          </ul>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            三、肝疾患はどれくらい一般的か?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            世界の肝疾患負担
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>WHOのデータによると、毎年世界で約<strong>200万人が肝関連疾患</strong>(肝硬変、肝癌、肝炎など)で死亡;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝癌は多くの国で頻発しており、<strong>世界のがん死亡原因の第3位</strong>です。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            ウイルス性肝炎
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>世界で約<strong>3.5億人が慢性B型またはC型肝炎ウイルス</strong>に感染しており、長期キャリアは肝硬変や肝癌に進展しやすい;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>中国では、B型肝炎ウイルスキャリアの数が膨大で、すべてが発病するわけではありませんが、定期的な監視が必要です。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            非アルコール性脂肪性肝疾患(NAFLD)
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>近年急速に増加しており、肥満、糖尿病、メタボリックシンドロームと密接に関連;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>お酒を飲まない人でも</strong>、食事、運動不足、体重超過により脂肪肝になる可能性があります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一部の脂肪肝は肝炎(NASH)、肝線維化、さらには肝硬変に進展します。</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              <strong>肝疾患は私たちから遠くありません!</strong><br/>
              脂肪肝から肝炎、ウイルス感染からアルコールや薬物による損傷まで、さまざまな原因が肝臓に負担をかける可能性があります。
            </p>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            四、なぜ肝臓は「沈黙のエンジン」と呼ばれるのか?
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 肝臓に痛覚神経がない
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝実質内部に痛覚神経がないため、初期の損傷は<strong>胃痛や歯痛のようにすぐに「警告」しません</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓の表面被膜が引っ張られたり、周囲組織が圧迫されたりしたときにのみ、右上腹部の鈍痛や膨満感が現れる可能性があります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>その時にはしばしば<strong>肝疾患がかなり進行している</strong>(肝腫大、腫瘍、重度の炎症など)。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 非常に強い代償能力
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓の予備機能は非常に強く、一部の細胞が損傷しても、<strong>残りの健康な細胞が何とか機能を維持できます</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>多くの人が健康診断で「肝酵素上昇」や「脂肪肝」を発見しても、普段はまったく気づいていません;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>明らかな症状(倦怠感、吐き気、腹部膨満、黄疸など)が現れる頃には、<strong>肝機能が60〜70%以上損なわれている</strong>可能性があります。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              まさに肝臓があまりにも「耐える」ため、多くの人は徐々に「病気になっている」ことに気づかず、<br/>
              本当に「ストライキ」を起こす頃には、最適な介入の機会を逃していることが多いのです。<br/>
              <strong>定期的な健康診断が非常に重要です!</strong>
            </p>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            五、日常生活でよくある「肝臓を傷つける習慣」
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 過度の飲酒
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓は摂取したアルコールの90%以上を分解する必要があります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>長期的・大量の飲酒は<strong>アルコール性脂肪肝→アルコール性肝炎→肝線維化/肝硬変</strong>につながります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>適度な飲酒でも肝臓に負担をかけるため、<strong>飲まないのが一番</strong>です。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 高カロリー・高脂肪の食事
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>頻繁に揚げ物、甘いもの、高糖飲料を摂取すると、<strong>血中脂質や血糖値の異常</strong>を引き起こしやすい;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>過剰な脂肪が肝臓に蓄積し、脂肪肝を形成し、さらに肝炎や線維化を引き起こす可能性があります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肥満やメタボリックシンドロームも肝疾患の重要な推進力です。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 運動不足・長時間座位
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>長時間座っていると<strong>カロリー消費が減少</strong>し、内臓脂肪が蓄積しやすくなります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>運動不足は血糖や血中脂質の調節にも影響し、肝臓の代謝負担を増やします。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. 薬やサプリメントの乱用
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝臓はほぼすべての薬を代謝するため、<strong>不適切な使用</strong>(過量、併用、長期乱用)は薬剤性肝障害を引き起こします;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>成分不明のサプリメントや民間療法には、肝臓に有害な物質が含まれている可能性があります;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>医師の指示に従い、「特効薬」を信じない</strong>ことが、肝臓を守る基本原則です。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5. 肝炎検診とワクチンの軽視
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>B型肝炎とC型肝炎ウイルスは血液や母子感染などの経路で伝播します;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>B型肝炎ワクチンを接種していない、またはハイリスク接触歴(刺青、注射器の共有、輸血歴など)がある場合は、早めに検査を;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>慢性感染を放置すると、10〜20年後に重篤な肝疾患に進展する可能性があります。</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              <strong>重要な注意:</strong><br/>
              夜更かしやストレスも全体的な代謝や免疫に影響しますが、<strong>「直接肝臓を傷つける」最も重要な要因</strong>は:<br/>
              <strong>アルコール、不良な食事、肥満、ウイルス感染、薬物乱用</strong>です。
            </p>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            六、肝臓を守るために今日からできること
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 食事:自然で、バランスの取れた、低脂肪・低糖質の食品を選ぶ
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>多くの<strong>新鮮な野菜、果物、全粒穀物</strong>を食べ、食物繊維を補給;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>高品質のタンパク質源</strong>(魚、豆類、赤身肉)を選び、赤肉や加工肉を減らす;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>揚げ物、炒め物、高糖飲料、デザートの摂取を控え、脂肪蓄積を防ぐ;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>一部の研究</strong>では、ブロッコリースプラウトエキス(スルフォラファンなど)が肝臓の解毒酵素の活性化を助ける可能性があるとされていますが、<strong>健康的な食事や医療の代わりにはなりません</strong>—追加の栄養補給としてのみ検討してください。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 運動:定期的な有酸素運動を続ける
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>週に少なくとも<strong>150分の中強度運動</strong>(早歩き、ジョギング、水泳、サイクリングなど);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>運動は<strong>内臓脂肪の減少とインスリン感受性の改善</strong>を助け、脂肪肝のリスクを低減;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>すでに脂肪肝がある人は、適切な運動 + 食事管理で肝臓の脂肪含有量を大幅に改善できます。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 禁酒または厳格な飲酒制限
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>すでに肝疾患(またはハイリスク因子)がある人は、<strong>完全な禁酒が最善</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>健康な人でも、飲酒は<strong>非常に節制すべき</strong>—WHOは、アルコール摂取には<strong>絶対的に安全な量はない</strong>と警告しています。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. 慎重な薬物使用、サプリメントの乱用を避ける
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>必要なときにのみ薬を使用し、<strong>医師の指示に厳密に従った用量と期間</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>複数の薬やサプリメントを自己判断で組み合わせず、肝臓の負担増加を避ける;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>長期投薬が必要な慢性疾患患者は、<strong>定期的な肝機能モニタリングが推奨されます</strong>。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            5. ワクチン接種と定期健診
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>免疫がない人はできるだけ早く<strong>B型肝炎ワクチン</strong>を接種すべき(特に新生児とハイリスクグループ);</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>定期健診で<strong>肝機能検査、B型肝炎パネル、腹部超音波</strong>などを行い、早期発見・早期治療;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>慢性肝炎や肝硬変の病歴がある場合は、医師の指示に従って<strong>定期的な監視と抗ウイルス治療</strong>を行うべきです。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              肝臓の健康は「一時的な強化」ではなく、<strong>長期的な生活習慣の調整</strong>によって維持されます:<br/>
              バランスの取れた食事、定期的な運動、有害物質の回避、定期検査。<br/>
              <strong>これらの一見平凡な習慣こそが、真の「肝臓保護の秘訣」です。</strong>
            </p>
          </div>
        </section>

        {/* セクション7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            七、以下の状況ではすぐに受診を
          </h2>

          <p className="mb-4">肝臓の早期損傷は症状がないことが多いですが、以下の症状が現れたら速やかに受診してください:</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>皮膚や白目が黄色くなる(黄疸)</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>尿の色が濃いお茶のようで、便の色が薄い</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>持続的な倦怠感、食欲不振、吐き気・嘔吐</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>腹部膨満、右上腹部の不快感</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>原因不明の体重減少</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>あざができやすい、または出血しやすい、歯茎からの出血増加</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>腹水(腹部の腫れ)、下肢の浮腫</strong>;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>皮膚のかゆみ、くも状血管腫、手掌紅斑などの徴候</strong>。</span>
            </li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              <strong>重要な警告:</strong><br/>
              黄疸、腹水、意識の変化(肝性脳症)など、<strong>重度の肝機能障害の兆候</strong>が現れたら、<br/>
              <strong>すぐに救急外来を受診</strong>してください。遅らせないでください!
            </p>
          </div>
        </section>

        {/* セクション8 - まとめ */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            八、まとめ:あなたの「肝臓パートナー」を大切に
          </h2>

          <p className="text-lg mb-6">
            肝臓は毎日黙々と血液を濾過し、栄養を代謝し、解毒し、エネルギーを貯蔵しています—まさに「沈黙のエンジン」です。<br/>
            しかし、まさにそれが<strong>あまりにも頑張り屋で、あまりにも静か</strong>だからこそ、私たちはその世話を怠りがちなのです。
          </p>

          <div className="bg-champagne-gold/10 p-8 rounded-lg my-8">
            <p className="text-xl font-semibold text-deep-brown mb-4">今日から、これらの簡単な習慣を試してください:</p>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-lg"><strong>バランスの取れた食事、低脂肪・低糖質</strong>、多くの野菜、果物、全粒穀物を食べる;</li>
              <li className="text-lg"><strong>定期的な運動を維持</strong>、週に少なくとも150分の中強度活動;</li>
              <li className="text-lg"><strong>禁酒または厳格な飲酒制限</strong>、肝臓に余分な負担をかけない;</li>
              <li className="text-lg"><strong>慎重な薬物使用、サプリメントの乱用を避ける</strong>、処方に従い、定期的に肝機能を監視;</li>
              <li className="text-lg"><strong>定期健診とワクチン接種</strong>、早期発見・早期介入で問題を未然に防ぐ。</li>
            </ol>
          </div>

          <p className="text-lg mb-6">
            肝臓の健康は一朝一夕のものではなく、<strong>日常の生活習慣の積み重ねの結果</strong>です。<br/>
            それを大切にすることは、あなた自身の長期的な健康と生活の質を大切にすることです。
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              覚えておいてください:<strong>予防は常に治療に勝る</strong>!<br/>
              今肝機能が正常でも、油断しないでください。<br/>
              <strong>よく食べ、よく運動し、定期的に検査</strong>—それが肝臓への最高の贈り物です。
            </p>
          </div>
        </section>

        {/* 参考文献 */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <h2 className="text-2xl font-light text-deep-brown mb-6">
            参考資料と延伸閲読
          </h2>
          <ul className="space-y-2 text-text-primary/80">
            <li>
              <Link href="https://www.who.int/news-room/fact-sheets/detail/hepatitis-b" target="_blank" className="text-primary hover:underline">
                WHO – B型肝炎ファクトシート
              </Link>
            </li>
            <li>
              <Link href="https://www.cdc.gov/hepatitis/index.htm" target="_blank" className="text-primary hover:underline">
                CDC – ウイルス性肝炎
              </Link>
            </li>
            <li>
              <Link href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/liver-anatomy-and-functions" target="_blank" className="text-primary hover:underline">
                ジョンズ・ホプキンス医学 – 肝臓:解剖と機能
              </Link>
            </li>
            <li>
              <Link href="https://my.clevelandclinic.org/health/body/21481-liver" target="_blank" className="text-primary hover:underline">
                クリーブランドクリニック – 肝臓
              </Link>
            </li>
            <li>
              <Link href="https://www.mayoclinic.org/diseases-conditions/nonalcoholic-fatty-liver-disease/symptoms-causes/syc-20354567" target="_blank" className="text-primary hover:underline">
                メイヨークリニック – 非アルコール性脂肪性肝疾患
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
