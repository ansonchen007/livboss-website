'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ContentZH() {
  const tHealth = useTranslations('health');

  return (
    <>
      {/* 头图 */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/sleep-liver-hero.jpg"
          alt="睡眠与肝脏健康"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* 标题 */}
      <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-8">
        长期睡眠不足，会给肝脏带来哪些压力？
      </h1>

      {/* 引言 */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed mb-4">
          偶尔熬夜、加班追剧，几乎人人都有过。<br/>
          真正让肝脏"吃不消"的，往往不是一两次晚睡，而是<strong>长期睡眠不足、作息节律被打乱</strong>。
        </p>
        <p className="text-lg text-text-primary/90 leading-relaxed">
          越来越多研究发现：睡得少、睡不好的人，更容易出现脂肪肝和代谢紊乱；倒班、长期夜班人群，肝酶异常发生率更高；睡眠时间少于7小时，与肥胖、糖尿病等多种肝病危险因素有关。
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">

        {/* 第一部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            一、先搞清楚：睡眠和肝脏之间，本来是什么关系？
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 肝脏也是"看时间办事"的器官
          </h3>

          <p className="mb-4">人体有一套大致24小时的<strong>昼夜节律系统</strong>：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>大脑的"主时钟"负责区分白天夜晚；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>各个器官（包括肝脏）还有自己的"外周时钟"，会根据作息、饮食、光线等信号调整节奏。</span>
            </li>
          </ul>

          <p className="mb-3">对肝脏来说，节律大致意味着：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>白天更多处理<strong>进食带来的能量和营养</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>夜间进入相对"修复和整理模式"，完成抗氧化、防御、细胞修复等工作；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>很多与脂肪、糖代谢相关的基因，在24小时里有明显"高峰—低谷"变化。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 睡眠不足，就是在"打乱时间表"
          </h3>

          <p className="mb-4">当你经常熬夜、睡眠不足或昼夜颠倒时：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>大脑的主时钟和肝脏的外周时钟会<strong>不同步</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝脏一边接收"现在该休息"的信号，一边又被饮食、光线、压力逼着"继续加班"；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>时间一长，就会出现代谢紊乱、脂肪堆积、炎症反应等问题。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              简单理解：<br/>
              肝脏本来按"白天干活、晚上修复"的节奏工作，<br/>
              你长期熬夜、睡少了，它就变成"白天黑夜都在上班，还没有休息时间"。
            </p>
          </div>
        </section>

        {/* 第二部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            二、证据一：睡眠不足与脂肪肝 / MASLD 风险升高
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 短睡眠与脂肪肝：大型研究怎么看？
          </h3>

          <p className="mb-4">多项观察性研究和荟萃分析发现：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>睡眠时间明显不足的人，更容易出现 NAFLD / MASLD</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一项纳入多篇研究的系统分析显示：<strong>睡得太少的人群，脂肪肝发生风险显著增加</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>还有研究发现，如果一个人原本睡得还可以，<strong>后来逐渐缩短睡眠或睡得越来越差，未来几年发生新发脂肪肝的风险明显升高</strong>。</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              也有少数研究提示不同性别人群中，"短睡眠"的风险模式略有差异，但总体来看：<br/>
              <strong>绝大部分证据指向：长期睡不够，会让脂肪肝和代谢问题更容易找上门。</strong>
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 不只是"睡多久"，睡得好不好也很关键
          </h3>

          <p className="mb-4">近期一篇基于全国人群调查的研究指出：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>不仅是睡眠时长，<strong>入睡困难、频繁醒来、打鼾等多个睡眠维度共同恶化时，脂肪肝 / MASLD 风险会显著增加</strong>。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              换句话说：<br/>
              <strong>"睡够但睡不好"</strong>对肝脏和代谢的影响，可能和"睡得少"一样需要重视。
            </p>
          </div>
        </section>

        {/* 第三部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            三、证据二：睡眠不足与肝酶 / 代谢指标异常
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 短睡眠与肝酶升高
          </h3>

          <p className="mb-4">多项研究发现，<strong>长期睡眠时间偏短的人，ALT、AST、γ-GTP等肝酶异常更常见</strong>：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>韩国一项横断面研究发现，<strong>睡眠时间过短的人，异常肝酶的比例更高</strong>，研究者认为睡眠不足可能通过代谢紊乱增加脂肪肝风险。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>也有研究显示，<strong>长期睡不够+其他不良生活方式（久坐、饮酒、肥胖）叠加时，γ-GTP升高的风险更明显。</strong></span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 睡眠与体重、血糖、胰岛素抵抗
          </h3>

          <p className="mb-4">美国睡眠医学学会联合专家共识指出：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>成年人长期睡眠少于7小时，与肥胖、2型糖尿病、高血压、心血管疾病等多种不良结局相关。</strong></span>
            </li>
          </ul>

          <p className="mb-4">而这些问题，本身就是脂肪肝 / MASLD 的核心危险因素：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>睡眠不足 → 激素失衡（如皮质醇升高）、食欲调节紊乱 → 更容易想吃高糖高脂食物；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>睡眠不足 → 胰岛素敏感性下降 → 更容易出现高血糖、胰岛素抵抗；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>胰岛素抵抗 + 高能量饮食 → 肝脏脂肪堆积、炎症反应上升。</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              所以从间接路径上看：<br/>
              <strong>睡眠不足 → 体重、血糖、血脂失控 → 脂肪肝和肝脏代谢压力明显增加。</strong>
            </p>
          </div>
        </section>

        {/* 第四部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            四、证据三：倒班 / 夜班人群，对肝脏的特殊挑战
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 夜班和肝酶、血脂
          </h3>

          <p className="mb-4">不少研究把目光投向了长期倒班、夜班的护士、工人等人群：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>轮班工作者肝酶异常的风险略高，提示节律紊乱可能参与其中；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>长时间日夜轮班与<strong>肝功能和血脂异常</strong>相关；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>系统综述指出：<strong>轮班工作会打乱生物钟，增加MASLD及其进展为更严重肝病的风险。</strong></span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 生物钟紊乱本身就会"催肥肝"
          </h3>

          <p className="mb-4">关于肝脏的昼夜节律研究表明：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝细胞内的"时钟基因"会调节脂质合成、脂肪酸氧化和胆固醇代谢；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>当生物钟被打乱（如长期夜班、时差频繁、熬夜严重），<strong>肝脏更容易出现脂质堆积和炎症反应</strong>。</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-lg text-text-primary/90">
              因此，对于需要轮班的职业人群来说，<br/>
              <strong>如何在不可避免的夜班条件下，尽量减轻节律紊乱对肝脏的冲击</strong>，是非常现实的问题。
            </p>
          </div>
        </section>

        {/* 第五部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            五、从机制上看：睡眠不足是怎么"为难"肝脏的？
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 激素与神经系统的"拉高油门"
          </h3>

          <p className="mb-4">长期睡眠不足会导致：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>皮质醇水平升高</strong>，交感神经长期偏兴奋；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>食欲激素（瘦素、胃饥饿素）失衡，更容易感到饿、偏好高热量食物；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>胰岛素敏感性下降，血糖控制变差。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              这些变化会让肝脏不得不处理更多脂肪和糖，长期看就像是：<br/>
              <strong>"油门一直踩着，刹车却失灵了。"</strong>
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 肝脏夜间修复时间被压缩
          </h3>

          <p className="mb-4">夜间是肝脏完成很多"修复工作"的重要时段：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>抗氧化防御系统的活动增强，清理白天积累的自由基和代谢废物；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>部分DNA修复、细胞更新在夜间更活跃；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>免疫系统也会在这个时段进行"维护"。</span>
            </li>
          </ul>

          <p className="mb-6">
            如果你长期很晚才睡、睡眠时长明显不足，<br/>
            肝脏可用于"修复"的时间被挤占，<strong>累积损伤更难被及时修补</strong>。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 肝脏和生物钟的"双向影响"
          </h3>

          <p className="mb-4">最新的研究甚至认为：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>不仅是睡眠和节律会影响肝脏，<strong>肝病本身也会反过来扰乱睡眠</strong>，形成"恶性循环"。</span>
            </li>
          </ul>

          <p className="mb-4">比如：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>有些脂肪肝或肝硬化患者会主诉<strong>夜间睡不好、白天特别困</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>这既可能来自代谢、炎症因素，也可能与合并睡眠呼吸暂停、抑郁焦虑等有关。</span>
            </li>
          </ul>
        </section>

        {/* 第六部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            六、什么算"长期睡眠不足"？需要睡多久才算够？
          </h2>

          <p className="mb-4">权威睡眠学会给出的大致标准是：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>健康成年人：每晚应保证 ≥ 7 小时睡眠</strong>，不少指南建议7–9小时为宜；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>长期少于7小时，尤其是<strong>经常 ≤ 6 小时</strong>，与多种代谢和心血管风险增加相关。</span>
            </li>
          </ul>

          <p className="mb-4">当然，每个人对睡眠时长的需求有个体差异，但如果满足以下至少一项，就可以认为<strong>需要警惕睡眠不足</strong>：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>工作日大多只睡5–6小时甚至更少；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>即便周末补觉，仍然长期感觉疲劳、注意力下降；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>体重、血压、血糖、腰围在近几年明显上升；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>体检出现脂肪肝或肝酶轻度异常，同时长期睡不够。</span>
            </li>
          </ul>
        </section>

        {/* 第七部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            七、从今天开始，可以做哪些改善？
          </h2>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              目标不是"一夜之间变成完美作息"，<br/>
              而是在现实生活约束下，<strong>尽量把睡眠和肝脏的关系往好的方向推一推</strong>。
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 为肝脏"修复档期"留够时间
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>尽量在<strong>固定时间上床和起床</strong>，哪怕一开始只是比现在早30分钟；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>逐步把睡眠时长拉到<strong>7小时以上</strong>，而不是靠周末一次性"报复性补觉"；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>晚饭尽量提前，避免睡前大吃大喝或大量饮酒，以免肝脏和消化系统深夜加班。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 打造更容易入睡的环境
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>睡前1小时尽量减少电子屏幕使用，降低蓝光刺激；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>保持卧室安静、遮光、略偏凉；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>不要把床变成"办公区"和"刷手机战场"，尽量只用于睡觉和亲密活动。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 管理体重和代谢，帮助睡眠和肝脏"双向获益"
          </h3>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>规律运动可以同时<strong>改善睡眠质量、体重控制和胰岛素敏感性</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>控制含糖饮料、精制碳水化合物和高脂肪饮食，有助于减轻肝脏负担，也有利于夜间睡得更安稳；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>避免靠大量酒精"助眠"，长期看只会让肝脏和睡眠质量一起变差。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. 夜班 / 倒班人群的"损害控制"
          </h3>

          <p className="mb-4">如果你的工作无法避免夜班，可以尝试：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>固定轮班节奏</strong>，尽量避免频繁在不同班次之间来回切换；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>夜班结束后确保有一段相对固定、安静的睡眠时间，用遮光窗帘、耳塞等尽量模拟"夜间环境"；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>非夜班日也尽量保持接近的作息时间，减少"昼夜来回翻转"；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>更加重视体重管理、血压和血糖监测，定期体检关注肝功能和肝脏影像检查。</span>
            </li>
          </ul>
        </section>

        {/* 第八部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            八、什么时候需要寻求专业帮助？
          </h2>

          <p className="mb-4">如果你有以下情况之一，建议考虑就医或咨询专业人士：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>持续3个月以上<strong>入睡困难、早醒、多梦、睡醒仍然非常疲劳</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>白天困倦严重，影响工作和驾驶安全；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>同时伴有打鼾、呼吸暂停、夜间憋醒等情况（可能与睡眠呼吸暂停相关）；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>既往或近期体检提示肝酶升高、脂肪肝 / MASLD，且长期睡眠时间不足或睡眠质量明显不好。</span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              在就诊时，可以主动把自己的<strong>睡眠模式、工作班次、饮食和体重变化</strong>告诉医生，<br/>
              这样有助于医生综合评估：肝脏问题在多大程度上与睡眠和生活方式相关。
            </p>
          </div>
        </section>

        {/* 第九部分 - 结语 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            九、结语：给肝脏一点"夜间喘息"的空间
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>肝脏是<strong>高度依赖节律</strong>的器官，白天处理代谢，夜间完成修复；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>长期睡眠不足、作息混乱，会让肝脏失去修复窗口，增加代谢负担，与脂肪肝 / MASLD 和肝酶异常等问题相关；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>好消息是：<strong>睡眠是可以通过行为习惯慢慢调整的</strong>，哪怕只是比昨天多睡半小时、少熬一次夜，都是在向肝脏释放一个"我开始照顾你了"的信号。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              你不需要一夜之间完美，只需要从今天开始，<br/>
              给自己和肝脏，多预留一点高质量的睡眠时间。
            </p>
          </div>
        </section>

        {/* 重要提示 */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-deep-brown mb-3">重要提示</h3>
            <p className="text-text-primary/90">
              本文内容仅用于健康科普，不能替代医生的诊断和治疗建议。<br/>
              如果你已被诊断为肝病、睡眠障碍，或正在服用长期药物，请在调整作息、使用任何保健品或药物前，先咨询专业医生或合格的医疗服务提供者。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
