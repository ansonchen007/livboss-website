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
            src="/images/liver-anatomy-hero.jpg"
            alt="健康积极的人们在户外运动，象征肝脏健康"
            fill
            unoptimized
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* 引言 */}
        <div className="mb-12 p-6 bg-paper-bg rounded-lg border-l-4 border-primary">
          <p className="text-lg text-text-primary/90 leading-relaxed">
            肝脏每天默默处理营养、代谢毒素并参与消化，是维持身体运转的关键器官之一。<br/>
            它不痛不叫、埋头干活，等到真的"罢工"时，往往已经伤得不轻。
          </p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">
          
          <p className="text-lg mb-6">
            这篇文章会用尽量好懂的方式，带你认识：
          </p>

          <ul className="space-y-2 mb-8">
            <li>肝脏在身体里的位置和重要性</li>
            <li>它每天都在做哪些关键工作</li>
            <li>为什么很多肝病一开始几乎没感觉</li>
            <li>生活中有哪些习惯在悄悄"伤肝"</li>
            <li>想保护肝脏，你可以从今天立刻做到的几件小事</li>
          </ul>

          {/* 第一部分 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              一、肝脏长在哪里？有多重要？
            </h2>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝脏位于<strong>上腹部右侧</strong>，紧贴在右侧肋骨下面，像一块"红色大盾牌"盖在胃、胆囊上方。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>它是人体最大的实质性内脏器官，成人肝脏重量大约<strong>1.2–1.5 公斤</strong>，差不多有一个橄榄球那么大。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>所有从消化道吸收来的血液，几乎都要先流经肝脏，再被分配到全身。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>医学资料统计，肝脏参与的生理功能超过<strong>500 项</strong>，是名副其实的"多面手"。</span>
              </li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
              <p className="text-lg italic text-text-primary/90">
                可以把肝脏想象成：<br/>
                <strong>中央处理器 + 化工厂 + 仓库 + 过滤器</strong><br/>
                不运转，就没有稳定的能量供应和安全的内环境。
              </p>
            </div>
          </section>

          {/* 第二部分 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              二、肝脏每天在做的几大核心工作
            </h2>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              1. 代谢中枢：管理糖、脂肪和蛋白质
            </h3>

            <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">管理血糖：</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>当你吃饱时，肝脏把多余的葡萄糖变成糖原储存；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>当你空腹或运动时，再把糖原分解成葡萄糖，维持血糖稳定；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>还能通过"糖异生"，把乳酸、甘油和部分氨基酸重新变成葡萄糖。</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">处理脂肪：</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>合成和分解胆固醇、甘油三酯；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>参与脂蛋白的生成，影响血脂水平和动脉硬化风险。</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">代谢蛋白质：</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>合成多种血浆蛋白，如白蛋白、凝血因子等；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>分解多余氨基酸，并把有毒的氨转化成尿素，随尿液排出。</span>
              </li>
            </ul>

            <div className="bg-champagne-gold/10 p-6 rounded-lg my-6">
              <p className="text-text-primary/90">
                如果把身体比作一家公司，肝脏就是<strong>财务 + 生产 + 仓储一肩挑的总控室</strong>。
              </p>
            </div>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              2. 解毒 & 过滤：把"脏东西"先过一遍
            </h3>

            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝脏像一座大型"过滤站"，24 小时过滤来自肠道和全身的大量血液；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>负责代谢酒精、药物、激素、环境化学物质等，让它们变成更容易排出的形态；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>帮助清除细菌碎片和某些代谢废物，保持内环境相对稳定。</span>
              </li>
            </ul>

            <p className="mb-4">这也是为什么：</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>大量饮酒会"大幅增加肝脏负担"；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>有些药物需要"避免与酒精同用"，也不能超量或长期乱吃。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              3. 生产胆汁：帮助消化油脂
            </h3>

            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝脏每天会产生约<strong>800–1000 毫升胆汁</strong>，通过胆管送往胆囊和小肠；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>胆汁就像"天然洗洁精"，用来乳化和吸收脂肪、脂溶性维生素（A/D/E/K）；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>同时也帮助排出一部分胆固醇和代谢废物。</span>
              </li>
            </ul>

            <p className="mb-3">胆汁长期排出不畅，就可能出现：</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>皮肤和眼白发黄（黄疸）；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>尿色变深、粪便颜色变浅；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>皮肤瘙痒等症状。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              4. 储备仓库 & 免疫哨兵
            </h3>

            <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">储备营养：</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>储存糖原，作为备用能量库；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>储存部分维生素（尤其是脂溶性维生素）和矿物质（如铁、铜等）。</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-deep-brown mb-3 mt-6">免疫与凝血：</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝脏内的免疫细胞可以清除进入门静脉系统的细菌和异物；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>合成多种凝血因子，参与血液凝固过程。</span>
              </li>
            </ul>

            <p className="mb-3">肝功能明显受损时，可能会出现：</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>容易淤青、牙龈出血、鼻出血增多；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>轻微撞击就出大片青块；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>伤口久不止血等。</span>
              </li>
            </ul>
          </section>

          {/* 第三部分 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              三、肝病到底多常见？
            </h2>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              全球肝病负担
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>WHO 数据显示，全球每年约有<strong>200 万人死于肝脏相关疾病</strong>（包括肝硬化、肝癌、肝炎等）；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝癌在许多国家高发，是<strong>全球癌症死亡原因的第三位</strong>。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              病毒性肝炎
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>全世界约有<strong>3.5 亿人感染慢性乙肝或丙肝病毒</strong>，长期携带容易发展成肝硬化或肝癌；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>在中国，乙肝病毒携带者数量庞大，虽然不是所有人都会发病，但需要定期监测。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              非酒精性脂肪肝（NAFLD）
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>近年增长迅速，与肥胖、糖尿病、代谢综合征关系密切；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>即使<strong>不喝酒的人，也可能因为饮食、久坐、体重超标而出现脂肪肝</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>部分脂肪肝会进展为肝炎（NASH）、肝纤维化，甚至肝硬化。</span>
              </li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
              <p className="text-lg text-text-primary/90">
                <strong>肝病离我们并不远！</strong><br/>
                从脂肪肝到肝炎，从病毒感染到酒精、药物伤害，各种原因都可能给肝脏"添堵"。
              </p>
            </div>
          </section>

          {/* 第四部分 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              四、为什么说肝脏是"沉默的发动机"？
            </h2>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              1. 肝脏里没有疼痛神经
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝实质内部没有痛觉神经，早期损伤<strong>不像胃痛、牙痛那样立刻"示警"</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>只有当肝脏表面的包膜被拉扯或周围组织受压时，才可能出现右上腹隐痛或胀痛；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>此时往往<strong>肝病已经发展到一定程度</strong>（比如肝脏肿大、肿瘤或严重炎症）。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              2. 超强的代偿能力
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝脏的储备功能极强，即便有一部分细胞受损，<strong>剩下的健康细胞依然能勉力维持工作</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>所以很多人在体检时才发现"转氨酶升高"或"脂肪肝"，平时却完全没察觉；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>等到出现明显症状（乏力、恶心、腹胀、黄疸等），<strong>肝功能可能已受损 60–70% 甚至更多</strong>。</span>
              </li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
              <p className="text-lg italic text-text-primary/90">
                正因为肝脏太能"扛"，很多人平时完全没意识到它在慢慢"生病"，<br/>
                等到真正"罢工"时，已经错过了最佳干预窗口。<br/>
                <strong>定期体检非常重要！</strong>
              </p>
            </div>
          </section>

          {/* 第五部分 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              五、生活中常见的"伤肝习惯"
            </h2>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              1. 过量饮酒
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝脏需要分解 90% 以上的酒精；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>长期、大量饮酒会导致<strong>酒精性脂肪肝 → 酒精性肝炎 → 肝纤维化/肝硬化</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>即便是适量饮酒，也会给肝脏增加负担，<strong>能不喝最好</strong>。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              2. 高热量、高脂肪饮食
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>经常吃油炸食品、甜食、高糖饮料，容易导致<strong>血脂和血糖异常</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>过多的脂肪在肝脏堆积，形成脂肪肝，进一步发展可引起肝炎或纤维化；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肥胖和代谢综合征也是肝病的重要推手。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              3. 缺乏运动、久坐
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>久坐少动导致<strong>热量消耗减少</strong>，更容易积累内脏脂肪；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>运动不足也会影响血糖和血脂调控，加重肝脏代谢负担。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              4. 乱用药物和保健品
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>肝脏负责代谢几乎所有药物，<strong>不规范用药</strong>（超量、混用、长期乱用）会引起药物性肝损伤；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>某些成分不明的保健品或偏方，也可能含有对肝脏有害的物质；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>遵医嘱用药、不迷信"神药"</strong>，是保护肝脏的基本原则。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              5. 忽视肝炎筛查和疫苗
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>乙肝和丙肝病毒都可通过血液、母婴等途径传播；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>如未接种乙肝疫苗、或有高危接触史（如纹身、共用注射器、输血史等），应尽早筛查；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>慢性感染若不管不问，可能在 10–20 年后发展成严重肝病。</span>
              </li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
              <p className="text-lg text-text-primary/90">
                <strong>重点提醒：</strong><br/>
                熬夜、压力大等虽然会影响整体代谢和免疫，但<strong>"直接伤肝"的最主要因素</strong>还是：<br/>
                <strong>酒精、不良饮食、肥胖、病毒感染、药物滥用</strong>。
              </p>
            </div>
          </section>

          {/* 第六部分 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              六、想保护肝脏，可以从这几件事做起
            </h2>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              1. 饮食：选择天然、均衡、少油少糖
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>多吃<strong>新鲜蔬菜、水果、全谷物</strong>，补充膳食纤维；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>选择<strong>优质蛋白质</strong>来源（鱼、豆类、瘦肉），少吃红肉和加工肉；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>控制油炸、煎炒、高糖饮料和甜点摄入，避免脂肪堆积；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>一些研究发现</strong>，西兰花芽提取物（如萝卜硫素）可能辅助肝脏解毒酶的活化，但<strong>不能替代健康饮食和医疗</strong>，仅可作为额外营养补充。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              2. 运动：坚持规律有氧运动
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>每周至少<strong>150 分钟中等强度运动</strong>（如快走、慢跑、游泳、骑行）；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>运动可以帮助<strong>减少内脏脂肪、改善胰岛素敏感性</strong>，降低脂肪肝风险；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>对于已有脂肪肝的人，合理运动 + 饮食控制可显著改善肝脏脂肪含量。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              3. 戒酒或严格限酒
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>已经有肝病（或高危因素）的人，<strong>最好完全戒酒</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>即使健康人，饮酒也应<strong>非常有节制</strong>——世界卫生组织提醒，酒精摄入<strong>没有绝对安全线</strong>。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              4. 谨慎用药、不滥用补品
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>只在必要时使用药物，<strong>严格遵医嘱的剂量和疗程</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>不要自行叠加多种药物或保健品，以免增加肝脏负担；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>长期服药的慢性病患者，建议<strong>定期监测肝功能</strong>。</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-deep-brown mb-4 mt-8">
              5. 接种疫苗、定期体检
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>没有免疫力的人应尽早接种<strong>乙肝疫苗</strong>（尤其是新生儿、高危人群）；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>定期体检，筛查<strong>肝功能、乙肝五项、腹部 B 超</strong>等，早发现早治疗；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>若有慢性肝炎或肝硬化病史，应遵医嘱进行<strong>定期监测和抗病毒治疗</strong>。</span>
              </li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
              <p className="text-lg italic text-text-primary/90">
                肝脏健康不是靠"一时猛补"，而是靠<strong>长期的生活方式调整</strong>：<br/>
                饮食均衡、规律运动、避免有害物质、定期检查。<br/>
                <strong>这些看似平凡的小事，才是真正的"护肝良方"。</strong>
              </p>
            </div>
          </section>

          {/* 第七部分 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              七、这些情况要尽快就医
            </h2>

            <p className="mb-4">虽然肝脏早期损伤常无症状，但如果出现以下表现，建议及时就诊：</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>皮肤或眼白发黄（黄疸）</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>尿色深如浓茶、粪便颜色变浅</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>持续性乏力、食欲不振、恶心呕吐</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>腹部胀痛、右上腹不适</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>不明原因的体重下降</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>容易出血或淤青、牙龈出血增多</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>腹水（腹部胀大）、下肢水肿</strong>；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>皮肤瘙痒、蜘蛛痣、肝掌等体征</strong>。</span>
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
              <p className="text-lg text-text-primary/90">
                <strong>重要提醒：</strong><br/>
                一旦出现黄疸、腹水、意识改变（肝性脑病）等<strong>肝功能严重受损信号</strong>，<br/>
                应<strong>立即前往医院急诊</strong>，不要拖延！
              </p>
            </div>
          </section>

          {/* 第八部分 - 总结 */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-deep-brown mb-6 mt-12 border-b border-champagne-gold/30 pb-3">
              八、小结：好好对待你的"肝工伙伴"
            </h2>

            <p className="text-lg mb-6">
              肝脏每天默默过滤血液、代谢营养、解毒转化、储备能量，是真正的"沉默发动机"。<br/>
              可正因为它<strong>太能扛、太沉默</strong>，我们往往忽略了对它的呵护。
            </p>

            <div className="bg-champagne-gold/10 p-8 rounded-lg my-8">
              <p className="text-xl font-semibold text-deep-brown mb-4">从今天起，试着做好这几件小事：</p>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-lg"><strong>饮食均衡、少油少糖</strong>，多吃蔬菜水果和全谷物；</li>
                <li className="text-lg"><strong>保持规律运动</strong>，每周至少 150 分钟中等强度活动；</li>
                <li className="text-lg"><strong>戒酒或严格限酒</strong>，不给肝脏额外负担；</li>
                <li className="text-lg"><strong>谨慎用药、不滥补</strong>，遵医嘱服药并定期监测肝功能；</li>
                <li className="text-lg"><strong>定期体检、接种疫苗</strong>，早发现、早干预，防患于未然。</li>
              </ol>
            </div>

            <p className="text-lg mb-6">
              肝脏健康不是一朝一夕的事，而是<strong>日常生活方式积累的结果</strong>。<br/>
              善待它，就是善待你自己的长期健康和生活质量。
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg italic text-text-primary/90">
                记住：<strong>预防永远胜过治疗</strong>！<br/>
                即使现在肝功能正常，也别掉以轻心。<br/>
                <strong>好好吃饭、好好运动、定期检查</strong>，就是给肝脏最好的礼物。
              </p>
            </div>
          </section>

          {/* 延伸阅读 */}
          <section className="mt-16 pt-8 border-t border-champagne-gold/30">
            <h2 className="text-2xl font-light text-deep-brown mb-6">
              延伸阅读与参考资料
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
