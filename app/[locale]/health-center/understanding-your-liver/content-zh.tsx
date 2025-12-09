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

          {/* 继续其他部分... 由于内容太长，我会继续创建 */}
        </div>
    </>
  );
}
