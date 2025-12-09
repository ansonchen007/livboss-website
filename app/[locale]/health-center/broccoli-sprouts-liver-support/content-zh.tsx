'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function ContentZH() {
  const tHealth = useTranslations('health');
  
  return (
    <>
        {/* 头图 */}
        <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/broccoli-science-hero.jpg"
            alt="科学家在实验室研究西兰花芽与肝脏健康"
            fill
            unoptimized
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* 第1节：为什么大家开始关注西兰花芽？ */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            1. 为什么大家开始关注西兰花芽？
          </h2>
          
          <p className="text-text-primary/80 leading-relaxed mb-4">
            近年来，在欧美和日本的营养补充领域，"西兰花芽"（Broccoli Sprouts）逐渐成为热门话题。与常见的成熟西兰花相比，这些刚萌发几天的嫩芽，虽然个头小，但所含的某些植物化学成分却可能高出数倍到数十倍。
          </p>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            之所以引起关注，是因为多项研究发现，西兰花芽中的一种前体物质——<strong className="text-deep-brown">葡萄糖萝卜硫苷（Glucoraphanin）</strong>，在人体内可转化为活性更强的<strong className="text-deep-brown">萝卜硫素（Sulforaphane）</strong>。而后者在动物和人体研究中，展现出支持肝脏解毒通路、调节抗氧化反应等作用。
          </p>

          <div className="bg-paper-bg border-l-4 border-primary p-6 rounded-r-lg my-6">
            <p className="text-text-primary/90 italic">
              <strong>关键点：</strong>西兰花芽不是一种药物，也不能替代任何医疗诊断或治疗。它只是一种食材或营养补充剂原料，其健康作用仍在不断研究中。
            </p>
          </div>
        </section>

        {/* 第2节：西兰花 vs 西兰花芽 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            2. 西兰花 vs 西兰花芽：小小嫩芽，成分更"浓缩"
          </h2>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            我们平时吃的成熟西兰花（Broccoli）已经是公认的健康蔬菜，富含膳食纤维、维生素C、叶酸等。但<strong className="text-deep-brown">西兰花芽</strong>（发芽后3-5天的幼苗）在某些活性成分的浓度上，表现更加突出：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>葡萄糖萝卜硫苷含量</strong>：研究显示，3天龄的西兰花芽中，该成分可达成熟西兰花的10-100倍（取决于品种和培育条件）
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>更易产生萝卜硫素</strong>：嫩芽中含有较多的<em>黑芥子酶（Myrosinase）</em>，这种酶能促进葡萄糖萝卜硫苷转化为萝卜硫素
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>用量更小、摄入更方便</strong>：正因浓度高，少量芽菜可能就提供较多活性成分，这也是为何市面上出现"西兰花芽提取物"胶囊或粉剂
              </span>
            </li>
          </ul>

          <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
            <p className="text-text-primary/90 text-sm">
              <strong>注意：</strong>虽然西兰花芽在某些成分上占优，但并不意味着成熟西兰花"没用"。成熟西兰花有更多纤维、更丰富的口感和烹饪适应性。两者可以根据个人需求搭配食用或补充。
            </p>
          </div>
        </section>

        {/* 第3节：关键成分 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            3. 关键成分：葡萄糖萝卜硫苷 & Sulforaphane
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-6">
            3.1 什么是葡萄糖萝卜硫苷（Glucoraphanin）？
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            葡萄糖萝卜硫苷是一种属于<strong>芥子油苷（Glucosinolates）</strong>家族的植物化学物质，在十字花科蔬菜（如西兰花、卷心菜、羽衣甘蓝等）中普遍存在。它本身相对稳定，进入人体后，需要经过酶促反应才能发挥更强的生物活性。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            3.2 萝卜硫素（Sulforaphane）的产生与作用机制
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            当我们咀嚼或切碎西兰花芽时，植物细胞破裂，释放出的<strong className="text-deep-brown">黑芥子酶（Myrosinase）</strong>会与葡萄糖萝卜硫苷发生反应，生成<strong className="text-deep-brown">萝卜硫素（Sulforaphane）</strong>。
          </p>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h4 className="text-lg font-medium text-deep-brown mb-3">转化过程示意：</h4>
            <div className="text-center text-text-primary/80 space-y-2">
              <p><strong>葡萄糖萝卜硫苷（储存状态）</strong></p>
              <p className="text-2xl text-primary">↓</p>
              <p><em>黑芥子酶作用（咀嚼/切碎）</em></p>
              <p className="text-2xl text-primary">↓</p>
              <p><strong>萝卜硫素（生物活性形式）</strong></p>
            </div>
          </div>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            萝卜硫素被认为是西兰花芽健康作用的主要"功臣"。在细胞和动物实验中，它被发现可以：
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>激活 Nrf2 通路</strong>：Nrf2 是细胞内一个重要的转录因子，能诱导多种抗氧化酶和解毒酶的表达
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>支持 Phase II 解毒酶</strong>：比如谷胱甘肽 S-转移酶（GST）、醌还原酶（NQO1）等，帮助肝脏代谢和清除有害物质
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-text-primary/80">
                <strong>调节炎症反应</strong>：部分研究表明萝卜硫素可能抑制某些促炎因子的释放
              </span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-amber-900 flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <span>
                <strong>重要提示：</strong>上述机制大多来自细胞实验或动物模型。在人体中的实际效果如何、需要多大剂量、对不同人群是否同样有效，还需要更多临床研究来验证。
              </span>
            </p>
          </div>
        </section>

        {/* 第4节：科学证据 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            4. 科学证据：从肝功能到代谢健康
          </h2>

          <p className="text-text-primary/80 leading-relaxed mb-6">
            虽然西兰花芽和萝卜硫素还不是主流医学的一线治疗手段，但近年来确实有一些临床和流行病学研究探索了它们对肝脏及代谢健康的潜在影响。
          </p>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-6">
            4.1 人体试验：脂肪肝与肝功能指标
          </h3>
          
          <div className="bg-white border border-champagne-gold/30 rounded-lg p-6 mb-6 shadow-sm">
            <h4 className="text-lg font-medium text-deep-brown mb-3">研究案例 1：非酒精性脂肪肝（NAFLD）</h4>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>研究设计：</strong>一项发表于 <em>World Journal of Gastroenterology</em>（2015）的小型随机对照试验（RCT），招募了部分被诊断为非酒精性脂肪肝的受试者。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>干预措施：</strong>受试者每日服用一定剂量的西兰花芽提取物（标准化萝卜硫素含量）。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>结果观察：</strong>相比对照组，干预组在数周后的肝酶水平（如 ALT、AST）出现一定程度下降，提示可能有助于改善肝脏炎症状态。
            </p>
            <p className="text-text-primary/80 text-sm mt-4 italic">
              参考文献：Kikuchi M, et al. <em>World J Gastroenterol.</em> 2015;21(43):12441–12448.
            </p>
          </div>

          <div className="bg-white border border-champagne-gold/30 rounded-lg p-6 mb-6 shadow-sm">
            <h4 className="text-lg font-medium text-deep-brown mb-3">研究案例 2：健康成年人的肝脏解毒标志物</h4>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>研究设计：</strong>发表于 <em>Frontiers in Nutrition</em>（2022）的一项临床观察，纳入一组健康志愿者。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>干预措施：</strong>连续摄入西兰花芽饮品或提取物胶囊数周。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>结果观察：</strong>部分受试者血液中的解毒酶活性有所上升，某些氧化应激标志物（如丙二醛 MDA）略有下降。
            </p>
            <p className="text-text-primary/80 text-sm mt-4 italic">
              参考文献：Satomi Y, et al. <em>Front Nutr.</em> 2022;9:876862.
            </p>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            4.2 人体试验：血糖与代谢综合征
          </h3>
          
          <p className="text-text-primary/80 leading-relaxed mb-4">
            除了肝脏，部分研究还关注萝卜硫素对血糖调节的影响（肝脏在糖代谢中扮演关键角色）：
          </p>

          <div className="bg-white border border-champagne-gold/30 rounded-lg p-6 mb-6 shadow-sm">
            <h4 className="text-lg font-medium text-deep-brown mb-3">研究案例 3：2型糖尿病患者</h4>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>研究设计：</strong>伊朗学者发表于 <em>Int J Food Sci Nutr</em>（2012）的试验，招募一组 2 型糖尿病患者。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>干预措施：</strong>每日食用西兰花芽粉。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>结果观察：</strong>部分受试者在空腹血糖、胰岛素抵抗指标（HOMA-IR）方面有改善趋势，但样本量较小，需要更大规模验证。
            </p>
            <p className="text-text-primary/80 text-sm mt-4 italic">
              参考文献：Bahadoran Z, et al. <em>Int J Food Sci Nutr.</em> 2012;63(7):767–771.
            </p>
          </div>

          <div className="bg-white border border-champagne-gold/30 rounded-lg p-6 mb-6 shadow-sm">
            <h4 className="text-lg font-medium text-deep-brown mb-3">研究案例 4：萝卜硫素对肥胖人群的血糖控制</h4>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>研究设计：</strong>瑞典与美国学者合作，发表于 <em>Science Translational Medicine</em>（2017）。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>干预措施：</strong>给予肥胖且有 2 型糖尿病倾向的受试者高剂量西兰花芽提取物（萝卜硫素）。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>结果观察：</strong>研究发现空腹血糖、HbA1c 有下降，提示可能通过抑制肝脏糖异生来改善血糖控制。
            </p>
            <p className="text-text-primary/80 text-sm mt-4 italic">
              参考文献：Axelsson AS, et al. <em>Sci Transl Med.</em> 2017;9(394):eaah4477.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
            <p className="text-blue-900">
              <strong>研究局限性：</strong>
            </p>
            <ul className="mt-3 space-y-2 text-blue-900">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>样本量普遍较小，难以完全排除偏倚</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>干预时长和剂量差异较大，缺乏统一标准</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>部分试验未进行长期随访，安全性和持久效果有待观察</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>不同人群（健康人、脂肪肝、糖尿病）反应可能不同</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 第5节：西兰花芽与"护肝" */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            5. 西兰花芽与"护肝"：把机理和证据串起来
          </h2>

          <p className="text-text-primary/80 leading-relaxed mb-6">
            综合前面的内容，我们可以梳理出西兰花芽为何被视为"护肝"食材或补充剂的主要逻辑链条：
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-medium text-deep-brown mb-3">
                5.1 激活 Nrf2 通路 → 增强抗氧化防御
              </h3>
              <p className="text-text-primary/80 leading-relaxed">
                萝卜硫素被认为是 <strong>Nrf2（核因子E2相关因子2）</strong>的天然激活剂之一。Nrf2 激活后，会诱导一系列抗氧化酶和解毒酶基因的表达，包括：
              </p>
              <ul className="mt-3 space-y-2 text-text-primary/80 ml-6">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>谷胱甘肽相关酶</strong>（如 GST、GPx）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>超氧化物歧化酶（SOD）</strong>和<strong>过氧化氢酶（CAT）</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>血红素加氧酶-1（HO-1）</strong>等</span>
                </li>
              </ul>
              <p className="text-text-primary/80 leading-relaxed mt-3">
                这些酶在肝脏中起到中和自由基、降低氧化应激的作用，从而可能减少肝细胞损伤。
              </p>
            </div>

            <div className="bg-gradient-to-r from-champagne-gold/10 to-transparent p-6 rounded-lg border-l-4 border-champagne-gold">
              <h3 className="text-xl font-medium text-deep-brown mb-3">
                5.2 支持 Phase II 解毒 → 加速有害物质代谢
              </h3>
              <p className="text-text-primary/80 leading-relaxed">
                肝脏的解毒过程通常分为两个阶段：
              </p>
              <ul className="mt-3 space-y-2 text-text-primary/80 ml-6">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Phase I</strong>：通过细胞色素 P450 酶系将脂溶性毒物转化为中间产物（有时反而更活跃/有毒）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Phase II</strong>：将 Phase I 产物与谷胱甘肽、硫酸根、葡萄糖醛酸等结合，使其变得水溶性，便于排出体外</span>
                </li>
              </ul>
              <p className="text-text-primary/80 leading-relaxed mt-3">
                萝卜硫素能上调 <strong>Phase II 解毒酶</strong>（如 GST、UGT、NQO1），帮助肝脏更快、更安全地完成毒物代谢，减少中间产物在体内积累造成的损害。
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-transparent p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-medium text-deep-brown mb-3">
                5.3 调节炎症与细胞保护
              </h3>
              <p className="text-text-primary/80 leading-relaxed">
                部分研究表明，萝卜硫素可能抑制 <strong>NF-κB</strong>（核因子κB）等促炎通路的激活，减少炎症因子（如 TNF-α、IL-6）的释放，对慢性肝损伤或脂肪肝相关炎症有一定缓解作用。
              </p>
              <p className="text-text-primary/80 leading-relaxed mt-3">
                同时，萝卜硫素还可能通过多种途径保护肝细胞的线粒体功能，维持细胞能量代谢稳定，进一步降低肝细胞凋亡或坏死的风险。
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-paper-bg rounded-lg border border-champagne-gold/30">
            <h4 className="text-lg font-medium text-deep-brown mb-3">小结</h4>
            <p className="text-text-primary/80 leading-relaxed">
              从理论机制上看，西兰花芽中的萝卜硫素确实有多条通路可能支持肝脏健康。然而，<strong className="text-deep-brown">机制研究不等于临床治愈</strong>。实际应用时，还需考虑个体差异、剂量安全性、长期效果等多方面因素。
            </p>
          </div>
        </section>

        {/* 第6节：食物 vs 补充剂 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            6. 食物 vs 补充剂：如何科学摄入
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-6">
            6.1 直接吃新鲜西兰花芽
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            <strong>优点：</strong>
          </p>
          <ul className="space-y-2 mb-4 ml-6">
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>天然食材，除了萝卜硫素外还含有膳食纤维、维生素、矿物质</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>新鲜芽菜保留了黑芥子酶，咀嚼后可自然转化出萝卜硫素</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>安全性相对较高，作为日常饮食的一部分食用</span>
            </li>
          </ul>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            <strong>挑战：</strong>
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>新鲜芽菜不易保存，容易腐烂或滋生细菌（需要特别注意食品安全）</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>每次食用量和活性成分浓度可能波动较大</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>部分人不喜欢芽菜的辛辣或苦涩味道</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            6.2 西兰花芽提取物（补充剂形式）
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            <strong>优点：</strong>
          </p>
          <ul className="space-y-2 mb-4 ml-6">
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>标准化剂量，每粒胶囊或每份粉剂的萝卜硫素含量相对固定</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>方便携带和长期保存，不受季节或新鲜度限制</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>部分产品会添加黑芥子酶或采用特殊工艺，确保萝卜硫素的生物利用度</span>
            </li>
          </ul>

          <p className="text-text-primary/80 leading-relaxed mb-4">
            <strong>注意事项：</strong>
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>需要选择可信赖的品牌和产品，确保原料和生产工艺符合标准</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>不同产品的萝卜硫素含量和形式（游离态或前体）可能有差异，购买时需留意标签</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>补充剂虽然方便，但不能完全替代均衡饮食中的其他营养素</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            6.3 用量与频率建议
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-text-primary/80 leading-relaxed mb-3">
              目前并没有官方的"每日推荐摄入量"标准。不同研究使用的剂量从 <strong>每天几十毫克到两三百毫克萝卜硫素</strong>不等。
            </p>
            <p className="text-text-primary/80 leading-relaxed mb-3">
              <strong>一般建议：</strong>
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2 text-text-primary/80">
                <span>•</span>
                <span>如果选择新鲜芽菜，每天 50-100 克左右，搭配其他蔬菜一起食用</span>
              </li>
              <li className="flex items-start gap-2 text-text-primary/80">
                <span>•</span>
                <span>如果使用补充剂，请遵循产品标签说明或咨询专业医师/营养师</span>
              </li>
              <li className="flex items-start gap-2 text-text-primary/80">
                <span>•</span>
                <span>长期或高剂量使用前，最好做一次健康评估，排除禁忌</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 第7节：安全性与注意事项 */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-deep-brown mb-6 border-b border-champagne-gold/30 pb-3">
            7. 安全性与注意事项
          </h2>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-6">
            7.1 一般安全性
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            对大多数健康成年人而言，适量食用西兰花芽或摄入标准剂量的西兰花芽提取物，通常被认为是<strong>相对安全</strong>的。但以下情况需要格外注意：
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 甲状腺问题</h4>
              <p className="text-red-900 text-sm">
                十字花科蔬菜含有芥子油苷，大量摄入可能干扰甲状腺对碘的吸收（致甲状腺肿作用）。如果本身有甲状腺功能减退或正在服用甲状腺药物，应在医生指导下谨慎使用。
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 抗凝血药物相互作用</h4>
              <p className="text-red-900 text-sm">
                西兰花芽含一定量的维生素 K，可能影响华法林等抗凝血药的效果。如正在服用此类药物，请咨询医生再决定是否补充。
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 孕期与哺乳期</h4>
              <p className="text-red-900 text-sm">
                虽然十字花科蔬菜本身是健康食材，但高剂量补充剂在孕期和哺乳期的安全性数据有限。建议孕妇或哺乳期妇女咨询医生后再使用。
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-medium text-red-900 mb-2">⚠️ 消化道敏感</h4>
              <p className="text-red-900 text-sm">
                部分人食用后可能出现胃胀、腹泻或轻微不适，这与十字花科蔬菜含有的硫化物或纤维有关。如有严重不适，应停止食用并就医。
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.2 食品安全：新鲜芽菜的细菌风险
          </h3>
          <p className="text-text-primary/80 leading-relaxed mb-4">
            新鲜芽菜（包括西兰花芽）在温暖、潮湿的环境中生长，容易滋生细菌（如沙门氏菌、大肠杆菌）。美国 FDA 和多个食品安全机构曾发布过关于芽菜安全的警示：
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>购买时选择信誉好的供应商，查看保质期和储存条件</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>食用前务必清洗干净，有条件可稍加热处理（但加热会破坏部分黑芥子酶）</span>
            </li>
            <li className="flex items-start gap-2 text-text-primary/80">
              <span>•</span>
              <span>免疫力低下、老年人、孕妇、幼儿等高风险人群应谨慎食用生芽菜</span>
            </li>
          </ul>

          <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
            7.3 不能替代医疗
          </h3>
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
            <p className="text-yellow-900 font-medium mb-3">
              ⚠️ 重要声明
            </p>
            <p className="text-yellow-900 leading-relaxed">
              西兰花芽或萝卜硫素<strong>不是药物</strong>，也不能替代任何正规医学诊断和治疗。如果您已被诊断有肝病（如肝炎、肝硬化、肝癌等），或怀疑自己有肝脏问题，请务必及时就医，遵循医嘱进行治疗。
            </p>
            <p className="text-yellow-900 leading-relaxed mt-3">
              本文所述的"支持肝脏健康""日常养护"等表述，仅指在健康或亚健康状态下，通过合理膳食或营养补充来维持肝脏正常功能，而非治疗疾病。
            </p>
          </div>
        </section>

        {/* 参考文献 */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-deep-brown mb-6 border-b border-gray-300 pb-3">
            参考文献
          </h2>
          <ol className="space-y-4 text-sm text-text-primary/80">
            <li>
              <strong>Kikuchi M, et al.</strong> Sulforaphane-rich broccoli sprout extract improves hepatic abnormalities in male subjects. 
              <em> World J Gastroenterol.</em> 2015;21(43):12441–12448. 
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4658638/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [PubMed]
              </a>
            </li>
            <li>
              <strong>Satomi Y, et al.</strong> Effect of Broccoli Sprouts on the Detoxification Enzyme System in Healthy Volunteers. 
              <em> Front Nutr.</em> 2022;9:876862. 
              <a href="https://www.frontiersin.org/articles/10.3389/fnut.2022.876862/full" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [Full Text]
              </a>
            </li>
            <li>
              <strong>Bahadoran Z, et al.</strong> Broccoli sprouts reduce oxidative stress in type 2 diabetes: a randomized double-blind clinical trial. 
              <em> Int J Food Sci Nutr.</em> 2012;63(7):767–771. 
              <a href="https://pubmed.ncbi.nlm.nih.gov/22537070/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [PubMed]
              </a>
            </li>
            <li>
              <strong>Axelsson AS, et al.</strong> Sulforaphane reduces hepatic glucose production and improves glucose control in patients with type 2 diabetes. 
              <em> Sci Transl Med.</em> 2017;9(394):eaah4477. 
              <a href="https://www.science.org/doi/10.1126/scitranslmed.aah4477" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [DOI]
              </a>
            </li>
            <li>
              <strong>Yan T, et al.</strong> Sulforaphane in liver diseases: a literature review of its therapeutic mechanisms and clinical effects. 
              <em> Front Pharmacol.</em> 2023;14:1256029. 
              <a href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2023.1256029/full" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [Full Text]
              </a>
            </li>
            <li>
              <strong>Baralić I, et al.</strong> Safety and Toxicology of Sulforaphane: A Review. 
              <em> Int J Mol Sci.</em> 2024;25(1):416. 
              <a href="https://www.mdpi.com/1422-0067/25/1/416" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [Full Text]
              </a>
            </li>
            <li>
              <strong>Houghton CA.</strong> Sulforaphane: Its "Coming of Age" as a Clinically Relevant Nutraceutical in the Prevention and Treatment of Chronic Disease. 
              <em> Oxid Med Cell Longev.</em> 2016;2016:7857186. 
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5069479/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [PubMed]
              </a>
            </li>
            <li>
              <strong>Cascajosa-Lira A, et al.</strong> Sulforaphane and its effects on the cellular and molecular mechanisms related to liver health. 
              <em> Toxicol Lett.</em> 2024;395:1-14. 
              <a href="https://www.sciencedirect.com/science/article/pii/S0378427424004582" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [ScienceDirect]
              </a>
            </li>
            <li>
              <strong>U.S. FDA.</strong> Guidance for Industry: Reducing Microbial Food Safety Hazards for Sprouted Seeds. 
              <a href="https://www.fda.gov/food/guidanceregulation/guidancedocumentsregulatoryinformation/ucm120244.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [FDA Website]
              </a>
            </li>
            <li>
              <strong>Colorado State University Extension.</strong> Safe Handling of Raw Produce and Fresh-Squeezed Fruit and Vegetable Juices. 
              <a href="https://extension.colostate.edu/topic-areas/nutrition-food-safety-health/safe-handling-of-raw-produce-and-fresh-squeezed-fruit-and-vegetable-juices-9-369/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [CSU Extension]
              </a>
            </li>
            <li>
              <strong>UC Agriculture & Natural Resources.</strong> Growing Sprouts at Home. Publication 8151. 
              <a href="https://anrcatalog.ucanr.edu/pdf/8151.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [PDF]
              </a>
            </li>
            <li>
              <strong>Healthline.</strong> Broccoli Sprouts: Benefits, Nutrition, and How to Eat Them. 
              <a href="https://www.healthline.com/nutrition/broccoli-sprouts" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                [Article]
              </a>
            </li>
          </ol>
        </section>

        {/* Whitepaper Download CTA */}
        <section className="mt-16 mb-12 bg-gradient-to-br from-primary/5 to-champagne-gold/10 border border-primary/20 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light text-deep-brown mb-4">
              {tHealth('whitepaper.ctaTitle')}
            </h3>
            <p className="text-text-primary/80 leading-relaxed mb-6">
              {tHealth('whitepaper.ctaDescription')}
            </p>
            {/* TODO: Final PDF file will be generated from docs/livboss-broccoli-liver-whitepaper.md */}
            <Link
              href="/docs/livboss-broccoli-liver-whitepaper.pdf"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {tHealth('whitepaper.ctaButton')}
            </Link>
          </div>
        </section>

        {/* 免责声明 */}
        <section className="mt-12 p-6 bg-gray-100 border-l-4 border-gray-400 rounded-r-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-3">免责声明</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            本文内容仅供科普和一般性参考，不构成任何医疗建议或专业指导。文中提及的研究结果可能因样本量、方法学差异等原因存在局限性。读者在考虑使用西兰花芽或相关补充剂前，应咨询合格的医疗专业人员。LivBoss及本文作者不对因使用本文信息而产生的任何直接或间接后果承担责任。
          </p>
        </section>
    </>
  );
}
