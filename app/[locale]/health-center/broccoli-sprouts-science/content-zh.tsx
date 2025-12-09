'use client';

import Image from 'next/image';

export default function ContentZH() {
  return (
    <>
      {/* 头图 */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/broccoli-sprouts-nature.jpg"
          alt="西兰花芽"
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* 标题 */}
      <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-8">
        西兰花芽：小小嫩芽，蕴藏的大自然力量
      </h1>

      {/* 引言 */}
      <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
        <p className="text-lg text-text-primary/90 leading-relaxed mb-4">
          西兰花芽看起来只是几厘米长的嫩芽，却在营养与活性成分研究中，越来越受到科学界关注。
        </p>
        <p className="text-lg text-text-primary/90 leading-relaxed">
          相比已经长成的大株西兰花，这些刚发芽几天的小嫩芽，内部正在迅速合成多种植物防御物质，其中最受研究者青睐的，就是人们常听到的<strong>「萝卜硫素（sulforaphane）」</strong>。
        </p>
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">

        {/* 文章导读 */}
        <section className="mb-12">
          <p className="text-lg mb-4">本文会用通俗的语言，带你认识：</p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>什么是西兰花芽？和普通西兰花有什么不同</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>西兰花芽里最核心的活性成分——葡糖萝卜硫素与萝卜硫素</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>科学研究目前看到了哪些潜在好处（抗氧化、解毒、心血管和代谢、免疫与肠道等）</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>一般人吃西兰花芽的安全性和注意事项</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>在日常饮食中，怎样吃才能尽量发挥它的优势</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <h3 className="text-xl font-semibold text-deep-brown mb-3">温馨提示</h3>
            <p className="text-text-primary/90">
              本文为健康科普，<strong>不替代医生的诊断和治疗</strong>。如果你本身有肝病、肠胃病、慢性病或正在服药，请在调整饮食或使用含西兰花芽的保健品前，先咨询专业医生。
            </p>
          </div>
        </section>

        {/* 第一部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            一、什么是西兰花芽？和普通西兰花有什么不同？
          </h2>

          <p className="mb-4">
            <strong>西兰花芽（broccoli sprouts）</strong>指的是西兰花种子刚发芽3–5天左右时的小嫩芽，外观有点像苜蓿芽或萝卜芽：
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>根和茎呈白色细丝状，上端带着两片小小的绿色子叶；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>口感清脆微辣，带一点辛香味；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>通常作为沙拉、三明治、配菜或健康食材使用。</span>
            </li>
          </ul>

          <p className="mb-4">和成熟的西兰花相比，西兰花芽的差异主要在于：</p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 生长阶段不同
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>西兰花芽：幼苗阶段，刚完成萌发；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>成熟西兰花：已经长成粗茎和花球。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 营养结构略有不同
          </h3>

          <p className="mb-6">
            研究显示，西兰花芽整体上<strong>热量低、脂肪少、蛋白质比例相对更高</strong>，还含有膳食纤维、维生素C、维生素A、钙、铁等多种营养素。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 最关键的差异：活性成分含量
          </h3>

          <p className="mb-6">
            多项分析发现，西兰花芽中某些含硫化合物——尤其是<strong>葡糖萝卜硫素（glucoraphanin）</strong>的含量，<strong>可以比成熟西兰花高出几十倍甚至近百倍</strong>。正是这些成分，让西兰花芽在科研领域格外抢眼。
          </p>
        </section>

        {/* 第二部分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            二、核心成分：从葡糖萝卜硫素到萝卜硫素
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 植物自带的「防御武器」
          </h3>

          <p className="mb-4">
            十字花科蔬菜（西兰花、卷心菜、羽衣甘蓝等）里有一类特殊成分——<strong>葡糖异硫氰酸酯（glucosinolates）</strong>。西兰花芽中最重要的一种叫<strong>葡糖萝卜硫素（glucoraphanin）</strong>。
          </p>

          <p className="mb-6">
            在植物自身看来，这些物质是「防御武器」，帮助它们抵御昆虫和病原菌。但对人类来说，它们在体内被激活后，反而可能带来多方面的健康益处。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 咬一口时发生了什么？
          </h3>

          <p className="mb-4">当我们<strong>咀嚼、切碎或捣碎</strong>西兰花芽时：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>植物细胞被打破，释放出一种酶——<strong>芥子酶（myrosinase）</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>芥子酶与葡糖萝卜硫素接触后，将其转化为活性更强的<strong>萝卜硫素（sulforaphane）</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>部分肠道细菌也可以完成类似的转化，这意味着即使烹饪破坏部分酶，体内仍有机会生成萝卜硫素。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 萝卜硫素：唤醒体内「防御系统」的开关
          </h3>

          <p className="mb-4">
            大量细胞与动物研究显示，萝卜硫素可以激活体内一个重要通路：<strong>Nrf2–ARE 信号通路</strong>。简单理解，这个通路像是「细胞自我保护模式」的总开关：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>上调多种<strong>抗氧化酶</strong>（如NQO1、HO-1等），帮助清除自由基；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>提升细胞<strong>解毒、抗炎和抗压力能力</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>协同参与调节代谢、细胞修复以及某些与慢性疾病相关的基因表达。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-lg italic text-text-primary/90">
              这也是西兰花芽被视为「功能性食材」的重要科学基础。
            </p>
          </div>
        </section>

        {/* 第三部分 - 研究发现 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            三、科学研究目前看到了什么？
          </h2>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90">
              下面提到的研究，多数使用的是新鲜西兰花芽、芽粉或富含葡糖萝卜硫素/萝卜硫素的提取物。研究还在持续进行中，目前更适合作为「有前景的方向」，而不是「已经证实的治疗手段」。
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 抗氧化与解毒：帮助身体应对环境压力
          </h3>

          <p className="mb-4">
            部分临床试验发现，每天摄入<strong>富含葡糖萝卜硫素/萝卜硫素的西兰花芽制剂</strong>，可以促进某些污染物和潜在致癌物代谢产物的排出，例如：
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>食物中某些致癌前体物质；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>空气污染中的苯、丙烯醛等有害成分。</span>
            </li>
          </ul>

          <p className="mb-6">
            这类研究提示，西兰花芽<strong>可能帮助身体更快「处理掉」部分环境中的有害化合物</strong>，是应对现代环境压力的一种有趣饮食策略。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 心血管和代谢指标：对「三高」人群的启发
          </h3>

          <p className="mb-4">
            针对代谢综合征、高血压或超重人群的一些小型临床试验和综合分析显示：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>持续数周到数月摄入西兰花芽或其提取物后，<strong>收缩压、空腹血糖、部分血脂指标</strong>有小幅但统计学意义上的改善；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>限制在样本量较小、干预方式多样的前提下，这些结果为「西兰花芽有助于心血管与代谢健康」提供了初步证据。</span>
            </li>
          </ul>

          <p className="mb-3">需要强调的是：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>效果通常是<strong>辅助性的、温和的</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>不能替代降压药、降糖药等正规治疗；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>真正关键的仍然是<strong>整体饮食、体重控制和运动习惯</strong>。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 炎症与免疫：从炎症指标到疫苗反应
          </h3>

          <p className="mb-4">在一些人体研究中，摄入西兰花芽与以下变化有关：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>超重人群连续2–3个月每天吃约30克新鲜西兰花芽，部分<strong>炎症标志物（如CRP、IL-6）呈下降趋势</strong>；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>在接种减毒流感鼻喷疫苗的研究中，富含萝卜硫素的西兰花芽制剂，似乎能<strong>增强某些免疫细胞的应答能力</strong>。</span>
            </li>
          </ul>

          <p className="mb-6">
            这些结果提示，萝卜硫素可能通过调节氧化应激和免疫通路，在<strong>「不过度激活，又能保持应对能力」</strong>之间起到一定平衡作用。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4. 肠道与脑健康：仍在探索中的新方向
          </h3>

          <p className="mb-4">近年的综述指出，葡糖萝卜硫素/萝卜硫素与肠道菌群之间存在互动关系：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>某些肠道菌可以帮助把葡糖萝卜硫素进一步转化为萝卜硫素；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>萝卜硫素有望减轻肠道的氧化应激和炎症反应，进而<strong>支持肠道屏障功能和菌群稳态</strong>。</span>
            </li>
          </ul>

          <p className="mb-6">
            同时，也有实验室研究关注其在<strong>神经退行性疾病、认知衰退</strong>等方向的潜力，例如模拟阿尔茨海默病模型中的抗氧化与神经保护作用。不过，这一领域目前<strong>以细胞和动物实验为主，离临床结论还有距离</strong>。
          </p>
        </section>

        {/* 第四部分 - 安全性 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            四、安全性：一般人能放心吃吗？
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 食物形态下，总体安全性较好
          </h3>

          <p className="mb-4">
            以新鲜西兰花芽或普通烹饪量为主的饮食，在现有研究和长期膳食经验中，<strong>总体被认为安全性良好</strong>。
          </p>

          <p className="mb-4">一些临床试验中，受试者在数周到数月内摄入：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>每天20–40克新鲜西兰花芽，或</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>含等量葡糖萝卜硫素/萝卜硫素的提取物，</span>
            </li>
          </ul>

          <p className="mb-4">常见的不良反应主要是：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>轻微的肠胃不适（如腹胀、轻度腹泻或打嗝增多）；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>少数人出现短暂的口气变化或排便气味改变。</span>
            </li>
          </ul>

          <p className="mb-6">通常停用或减量后即可缓解。</p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 生吃嫩芽的「食品安全」风险
          </h3>

          <p className="mb-4">
            需要特别注意的是：<strong>所有生吃的芽菜（不仅是西兰花芽）都存在一定微生物污染风险</strong>，包括沙门氏菌、大肠杆菌、李斯特菌等。
          </p>

          <p className="mb-4">因此，对以下人群，普遍建议<strong>避免或慎重食用生芽菜</strong>：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>孕妇、老年人和免疫力低下人群；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>正在接受化疗、长期使用免疫抑制剂的人。</span>
            </li>
          </ul>

          <p className="mb-4">如果要降低微生物风险，可以考虑：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>选择正规渠道、冷链保存良好的产品；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>在家自种时，严格注意器具和水源清洁；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>对高风险人群，尽量<strong>短时间轻蒸或快炒</strong>后再吃，而非完全生食。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 补充剂形态需要更谨慎
          </h3>

          <p className="mb-4">
            市面上也有以「西兰花芽提取物」或「萝卜硫素胶囊」为主的保健品。与食物相比，补充剂往往<strong>剂量更集中、成分更单一</strong>，在以下情况应特别注意：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>正在服用抗凝药、抗癫痫药或其他慢性病用药时，可能存在代谢通路上的相互作用风险；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>孕期、哺乳期人群，目前缺乏足够安全性数据，更建议以<strong>正常饮食中的蔬菜摄入</strong>为主，而非高剂量补充剂。</span>
            </li>
          </ul>

          <p className="mb-6">
            如计划长期使用高浓度提取物，建议<strong>事先咨询医生或营养专业人士</strong>。
          </p>
        </section>

        {/* 第五部分 - 日常怎么吃 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            五、日常怎么吃，才能更好发挥西兰花芽的优势？
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            1. 简单的参考量：从「一小把」开始
          </h3>

          <p className="mb-4">大部分研究采用的量，折算到日常饮食，大致相当于：</p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>每天<strong>一小把（约20–30克）新鲜西兰花芽</strong>，或</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>每周多次在沙拉、三明治、盖饭上加一层芽菜。</span>
            </li>
          </ul>

          <p className="mb-6">
            普通健康人不必精确称重，可以把它当作<strong>多样化蔬菜中的一员</strong>，关键是：<strong>长期、适量、搭配均衡饮食</strong>。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            2. 生吃 vs. 熟吃：兼顾活性与安全
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>生吃</strong>：保留更多芥子酶和维生素，有利于萝卜硫素生成；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>轻蒸或快炒</strong>：可以明显降低微生物风险，同时尽量保留活性成分。</span>
            </li>
          </ul>

          <p className="mb-4">实用的小技巧：</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>如果需要加热，可以先把西兰花芽<strong>切碎后放置5–10分钟</strong>，让芥子酶有时间把葡糖萝卜硫素转化为萝卜硫素，再进行短时间加热；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>避免长时间水煮或高温油炸，这会大幅损失水溶性维生素和部分活性物质；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>也可以与少量<strong>生吃的其它十字花科蔬菜或芥末籽</strong>搭配，为体内提供额外的芥子酶来源。</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3. 搭配肝脏和代谢友好的整体饮食
          </h3>

          <p className="mb-4">
            西兰花芽再「厉害」，也无法单独抵消高油高糖饮食、长期熬夜和缺乏运动带来的压力。想让它真正发挥价值，更重要的是：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>控制总热量，减少含糖饮料、油炸食品和精制碳水；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>保证足够的蔬菜、水果、优质蛋白和全谷物；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>规律运动、减少久坐，保持体重和腰围在合理范围内；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>尤其对于关注「护肝」的人群，上述生活方式比任何单一成分都更关键。</span>
            </li>
          </ul>
        </section>

        {/* 第六部分 - 注意人群 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            六、哪些人需要格外谨慎？
          </h2>

          <p className="mb-4">
            如果你属于以下情况之一，建议在刻意增加西兰花芽摄入或使用高浓度提取物前，先咨询医生：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>已确诊肝病、肾病、炎症性肠病等慢性疾病；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>长期服用抗凝药、抗癫痫药、免疫抑制剂等处方药；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>孕期、哺乳期，或计划近期怀孕；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>既往对十字花科蔬菜（如西兰花、卷心菜等）有明显过敏或不耐受史。</span>
            </li>
          </ul>
        </section>

        {/* 第七部分 - 小结 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
            七、小结：小小嫩芽，是饮食多样化的一个好选择
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>西兰花芽个头不大，却富含蛋白质、膳食纤维和多种维生素矿物质；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>更重要的是，它含有<strong>高浓度的葡糖萝卜硫素</strong>，在咀嚼和肠道作用下转化为<strong>萝卜硫素</strong>，能激活细胞的抗氧化与解毒系统，是科研领域持续关注的焦点之一；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>多项早期临床研究提示，它可能在<strong>心血管与代谢健康、炎症调节、解毒和免疫支持</strong>等方面带来一定帮助，但目前仍主要定位为<strong>营养与生活方式的辅助因素</strong>，不能替代药物治疗；</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>对多数健康人来说，将适量西兰花芽纳入日常饮食，是增加蔬菜多样性、提升整体饮食质量的一种简单做法。</span>
            </li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg italic text-text-primary/90">
              如果你正在为自己或家人设计一个更「护肝、护健康」的生活方式，可以适度给餐盘上加一抹来自西兰花芽的绿色，再配合充足睡眠、均衡饮食与规律运动——这几样加在一起，才是真正值得长期坚持的「大自然力量」。
            </p>
          </div>
        </section>

        {/* 延伸阅读 */}
        <section className="mt-16 pt-8 border-t border-champagne-gold/30">
          <h3 className="text-2xl font-light text-deep-brown mb-6">延伸阅读（英文原文，供进一步查阅）</h3>
          
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
