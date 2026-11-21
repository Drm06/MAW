const portfolio = {
    projects: [
        {
            id: "blocks-world",
            title: "Blocks World",
            cover: "project1.png",
            gameplay: "碰一下箭头，让落下的方块帮你铺路。",
            content: `<div class="video-frame"><iframe src="https://player.bilibili.com/player.html?isOutside=true&amp;aid=113561368004812&amp;bvid=BV1EfzaYcEhy&amp;cid=27081314229&amp;p=1&amp;autoplay=0" title="Blocks World 游戏视频" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div>
<p class="video-link"><a href="https://www.bilibili.com/video/BV1EfzaYcEhy/" target="_blank" rel="noopener">在哔哩哔哩观看</a></p>
<p><a class="play-link" href="https://drm06.itch.io/blocks-world" target="_blank" rel="noopener">试玩 Blocks World</a></p>
<h3>游戏简介</h3>
<p>Blocks World 是一款结合了“俄罗斯方块”和“平台跳跃”玩法的2D游戏。在游戏中，玩家需要操控下落的方块，为角色铺设前进的道路。</p>
<p>这个想法诞生于我的一次奇想——想象自己坠入了俄罗斯方块的世界。当时我刚玩完《双人成行》，本身又爱玩平台跳跃游戏，于是就萌生了制作一款带有俄罗斯方块元素的平台跳跃游戏。那些不断下落的方块，很自然地就成为了给角色铺路的工具——而这也成了我游戏的核心理念。</p>
<div class="project-gallery">
<a href="assets/blocks-world-1.jpg" target="_blank" rel="noopener"><img src="assets/blocks-world-1.jpg" alt="Blocks World 游戏画面 1" width="960" height="540" loading="lazy" decoding="async"></a>
<a href="assets/blocks-world-2.png" target="_blank" rel="noopener"><img src="assets/blocks-world-2.png" alt="Blocks World 游戏画面 2" width="960" height="527" loading="lazy" decoding="async"></a>
<a href="assets/blocks-world-3.jpg" target="_blank" rel="noopener"><img src="assets/blocks-world-3.jpg" alt="Blocks World 游戏画面 3" width="960" height="538" loading="lazy" decoding="async"></a>
<a href="assets/blocks-world-4.png" target="_blank" rel="noopener"><img src="assets/blocks-world-4.png" alt="Blocks World 游戏画面 4" width="960" height="516" loading="lazy" decoding="async"></a>
<a href="assets/blocks-world-5.png" target="_blank" rel="noopener"><img src="assets/blocks-world-5.png" alt="Blocks World 游戏画面 5" width="960" height="525" loading="lazy" decoding="async"></a>
<a href="assets/blocks-world-6.png" target="_blank" rel="noopener"><img src="assets/blocks-world-6.png" alt="Blocks World 游戏画面 6" width="960" height="518" loading="lazy" decoding="async"></a>
</div>
<h3>迭代版本</h3>
<h4>1. 3D平台跳跃游戏</h4>
<p>最初的想法是一款3D平台跳跃游戏。俄罗斯方块从角色上方落下，在XYZ三个轴向上为玩家铺路。 除了铺路，环境中还会有地形和障碍物，这些可以像普通俄罗斯方块一样，通过方块来消除。它的实现方式可能像《我的世界》一样，我甚至想过把它做成一款沙盒游戏。我还想在地图中设置一些类似马里奥里的道具来增加趣味性。</p>
<h4>2. 2D平台跳跃 · 双人模式</h4>
<p>由于3D游戏在技术上实现更困难，我转向了2D平台跳跃，并从最初的单人游戏改为了双人游戏。 一名玩家用WASD和空格键控制角色，另一名玩家用方向键控制俄罗斯方块。双人操作的灵感同样来自《双人成行》和《卡林巴》。 因为用俄罗斯方块消除环境会让关卡设计变得更复杂且不可控，这个想法被暂时搁置了。 我设计了几种有不同功能的方块，但这让游戏机制变得相对臃肿，所以这个想法也被放弃了。而且，两名玩家的游戏体验差距很大，可能双方都会觉得无聊。</p>
<h4>3. 2D平台跳跃 · 单人模式</h4>
<p>我转而让一名玩家用双手分别控制角色和俄罗斯方块。 但俄罗斯方块的移动过于自由，导致玩家通关太容易。 所以我想到限制俄罗斯方块的自由度，改为在关卡中放置“箭头”，角色触碰箭头来控制方块。同时，这些箭头的分布也可以作为角色前进路线的指引。</p>
<p>最终，游戏机制变成了：玩家控制角色去触碰箭头，从而控制俄罗斯方块的移动，为角色铺平道路。 后来，我意识到游戏缺少了俄罗斯方块核心的“堆叠”和“消除”机制——这是我计划未来探索的一个方向。</p>
<h3>未来迭代方向</h3>
<p>尝试重新融入俄罗斯方块里最核心的“堆积”和“消除”机制，消除障碍或者让可通过平台不被消除掉。</p>
<h3>总结</h3>
<p>这是我独立设计和开发的第一个游戏，它让我在设计上经历了从0到1的质变。我学会了如何从创意走向开发，如何从玩家思维转向设计师思维。 在灵感阶段，我们可以天马行空，不考虑实现难度；但在设计过程中，则需要根据实际的开发问题，逐步削减复杂的设计，哪怕是你自己很喜欢的设计。</p>`
        },
        {
            id: "trick-or-treat",
            title: "Trick or Treat",
            cover: "project2.png",
            gameplay: "两个人抢糖果，翻宝箱、猜拳，还能给对手设陷阱。",
            content: `<div class="video-frame"><iframe src="https://player.bilibili.com/player.html?isOutside=true&amp;aid=113561384780140&amp;bvid=BV17AzYYtEKL&amp;cid=27081378581&amp;p=1&amp;autoplay=0" title="Trick or Treat 游戏视频" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div>
<p class="video-link"><a href="https://www.bilibili.com/video/BV17AzYYtEKL/" target="_blank" rel="noopener">在哔哩哔哩观看</a></p>
<p><a class="play-link" href="https://drm06.itch.io/trick-or-treat" target="_blank" rel="noopener">试玩 Trick or Treat</a></p>
<h3>游戏简介</h3>
<p>Trick or Treat 是一款专为本地双人设计的对抗游戏，其乐趣不仅在屏幕之内，更延伸到了屏幕之外。</p>
<p>这款游戏的定位是欢乐的聚会游戏。游戏中的 U 键是一个共享按键，因此两位玩家的小拇指将不可避免地碰到一起。玩家在开启宝箱时，既可以自己进行一场猜谜，也可以让对方来猜。当然，你也可以通过“物理搏斗”来阻止对手开启猜谜游戏。</p>
<div class="project-gallery">
<a href="assets/trick-or-treat-1.jpg" target="_blank" rel="noopener"><img src="assets/trick-or-treat-1.jpg" alt="Trick or Treat 游戏画面 1" width="960" height="556" loading="lazy" decoding="async"></a>
<a href="assets/trick-or-treat-2.jpg" target="_blank" rel="noopener"><img src="assets/trick-or-treat-2.jpg" alt="Trick or Treat 游戏画面 2" width="960" height="556" loading="lazy" decoding="async"></a>
<a href="assets/trick-or-treat-3.jpg" target="_blank" rel="noopener"><img src="assets/trick-or-treat-3.jpg" alt="Trick or Treat 游戏画面 3" width="960" height="556" loading="lazy" decoding="async"></a>
</div>
<figure class="project-figure"><a href="assets/trick-or-treat-reference-1.jpg" target="_blank" rel="noopener"><img src="assets/trick-or-treat-reference-1.jpg" alt="Trick or Treat 游戏机制示意图" width="1030" height="760" loading="lazy" decoding="async"></a></figure>
<h3>游戏机制介绍</h3>
<ol>
  <li>本地双人对抗游戏</li>
  <li>2名玩家需要在2分钟之内获得比对手多的糖果</li>
  <li>每5s系统会随机选若干个宝箱放置糖果</li>
  <li>玩家可以在宝箱里放置炸弹trick对手</li>
  <li>打开有炸弹的箱子时会减少自身糖果</li>
  <li>玩家可以通过打开箱子或与宝箱猜拳赢得糖果</li>
  <li>玩家可以通过猜拳赢得对方身上得所有糖果</li>
  <li>需要躲避地图中的怪物</li>
</ol>
<h3>未来迭代方向</h3>
<p>目前猜拳是靠运气获胜，迭代时会首先考虑改进猜拳获胜概率，例如增加道具卡来禁用对方的猜拳可用类型。</p>`
        },
        {
            id: "message",
            title: "Message",
            cover: "project3.png",
            gameplay: "键入对话推进剧情，体会文字怎样伤人。",
            content: `<div class="video-frame"><iframe src="https://player.bilibili.com/player.html?isOutside=true&amp;aid=113561384782010&amp;bvid=BV1jAzYYtEWA&amp;cid=27081442084&amp;p=1&amp;autoplay=0" title="Message 游戏视频" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div>
<p class="video-link"><a href="https://www.bilibili.com/video/BV1jAzYYtEWA/" target="_blank" rel="noopener">在哔哩哔哩观看</a></p>
<p><a class="play-link" href="https://drm06.itch.io/message" target="_blank" rel="noopener">试玩 Message</a></p>
<h3>游戏简介</h3>
<p>Message 是一款融合了音乐元素的叙事打字游戏。</p>
<p>游戏的情节通过需要玩家键入的对话展开，玩家模拟网络暴力中的打字方。当主角情绪低落时，整个屏幕的色调也会随之变得灰暗。玩这款游戏时，玩家在屏幕前的行为（打字）与网络施暴者并无二致，但内心的感受却截然不同。</p>
<p>施暴者眼中只有冰冷的文字，可以完全无视他人的感受，而玩家却能直观地体会到受害者情绪上的反馈。</p>
<div class="project-gallery">
<a href="assets/message-1.jpg" target="_blank" rel="noopener"><img src="assets/message-1.jpg" alt="Message 游戏画面 1" width="960" height="538" loading="lazy" decoding="async"></a>
<a href="assets/message-2.jpg" target="_blank" rel="noopener"><img src="assets/message-2.jpg" alt="Message 游戏画面 2" width="960" height="539" loading="lazy" decoding="async"></a>
<a href="assets/message-3.jpg" target="_blank" rel="noopener"><img src="assets/message-3.jpg" alt="Message 游戏画面 3" width="960" height="537" loading="lazy" decoding="async"></a>
<a href="assets/message-4.jpg" target="_blank" rel="noopener"><img src="assets/message-4.jpg" alt="Message 游戏画面 4" width="960" height="537" loading="lazy" decoding="async"></a>
</div>
<h3>灵感来源</h3>
<p>游戏的灵感来源于《奇妙逃亡》。游戏主角和我一样，都在纠结于是要继续追寻梦想、坚持自我，还是向现实妥协。这款游戏中一些简单的选择给我留下了极为深刻的印象。 最初，我想做一款带有选项的叙事游戏，加上我喜欢玩音乐游戏，也认为将音乐游戏和叙事游戏结合会是一种很棒的体验，所以我计划制作一款音乐叙事游戏。</p>
<p>在设计玩法时，我想到叙事游戏大多和文字极大相关，那是否可以用打字为核心玩法来叙事呢？想到打字，我又联想到键盘侠、语言暴力。社会上许多语言暴力事件都导致了严重的后果，这需要我们去关注和思考。因此，我想制作一款以打字为核心玩法，让玩家作为施暴方的游戏。</p>
<h3>未来迭代方向</h3>
<ol>
  <li>在试玩测试中，我意识到目前游戏故事的展现很模糊，没有讲清楚故事前因后果，例如游戏开头播放了一个非常简陋的某人跳楼的CG，可以加一段新闻联播的CG来再次表示目前发生了一件命案。</li>
  <li>应在游戏开头清晰表现出玩家的身份，例如可以播放一个人拿出手机刷到该新闻的CG，然后调出键盘输入框，画面定格在手机准备打字的界面，再淡化成现在这种可以清晰看见游戏场景的界面。</li>
  <li>更加专注于通过打字模拟网络暴力带来的情绪和体验，未来版本需要进一步迭代以提升其情感表达的深度与玩家的互动感受。例如，把玩家打出来的字以文字气泡的形式展现出来，并朝向主角飞去，刻薄的语言对应尖锐的气泡，理中客的语言像正方形，不同的语言带给主角不同的感受和效果。</li>
</ol>`
        },
        {
            id: "cheeses-comic-odyssey",
            title: "Cheese’s Comic Odyssey",
            cover: "project4.png",
            gameplay: "拖动漫画格，挪出一条能跳过去的路。",
            content: `<div class="video-frame"><iframe src="https://player.bilibili.com/player.html?isOutside=true&amp;aid=113561401624685&amp;bvid=BV1qczYYfEqK&amp;cid=27081443408&amp;p=1&amp;autoplay=0" title="Cheese’s Comic Odyssey 游戏视频" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div>
<p class="video-link"><a href="https://www.bilibili.com/video/BV1qczYYfEqK/" target="_blank" rel="noopener">在哔哩哔哩观看</a></p>
<p><a class="play-link" href="https://drm06.itch.io/cheeses-comic-odyssey" target="_blank" rel="noopener">试玩 Cheese’s Comic Odyssey</a></p>
<h3>游戏简介</h3>
<p>Cheese’s Comic Odyssey 是一款将漫画分镜作为机制融入平台跳跃玩法的游戏，旨在通过移动漫画分镜的方式，挑战传统的漫画“阅读顺序”。</p>
<p>每一关类似一页漫画，玩家操控角色在漫画的画格之间穿梭，角色只能在画格中行动，玩家可以用鼠标拖动画格上下移动来探索场景中可行的路线，利用空间错位完成解谜。</p>
<p>游戏的主角是一块奶酪。他因为被放在捕鼠夹上害死了一只老鼠，而被判下地狱。与此同时，那只死去的老鼠也被打入了地狱，罪名是“蠢到会被捕鼠夹上的奶酪骗到”。一股神秘的力量给了这块奶酪一条“通往天堂”的道路，而那只同样呆头呆脑的老鼠则紧随其后。然而，等待着他们的究竟会是什么呢……？</p>
<div class="project-gallery">
<a href="assets/cheeses-comic-odyssey-1.jpg" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-1.jpg" alt="Cheese’s Comic Odyssey 游戏画面 1" width="960" height="504" loading="lazy" decoding="async"></a>
<a href="assets/cheeses-comic-odyssey-2.png" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-2.png" alt="Cheese’s Comic Odyssey 游戏画面 2" width="960" height="515" loading="lazy" decoding="async"></a>
<a href="assets/cheeses-comic-odyssey-3.jpg" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-3.jpg" alt="Cheese’s Comic Odyssey 游戏画面 3" width="960" height="551" loading="lazy" decoding="async"></a>
<a href="assets/cheeses-comic-odyssey-4.jpg" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-4.jpg" alt="Cheese’s Comic Odyssey 游戏画面 4" width="960" height="563" loading="lazy" decoding="async"></a>
</div>
<h3>版本迭代</h3>
<p>起初我是想制作一个偏叙事和解谜的游戏，利用画框的“蒙版”效果和可移动性来实现玩家拖动画框可以探索场景，但是由于时间、美术能力和人力限制，我决定先尝试平台跳跃这个更易开发的类型，探索一下分镜布局与空间设计的可能性。</p>
<h3>未来迭代方向</h3>
<ol>
  <li>在现有玩法的方向上增加关卡数量， 当前展示的关卡数量较少，只有第三关较为完整地展现了该机制的潜力，未来计划通过增加更多关卡来丰富游戏的整体体验。</li>
  <li>尝试从单纯的平台跳跃转换成叙事性更强的解谜游戏，把场景从单一的平台转化成类似《猫和老鼠》里那种有物品和场景的关卡，利用目前的画框“蒙版”效果 + 空间错位设计谜题。</li>
  <li>加强故事传达，以真正实现“打破漫画阅读规则”。</li>
  <li>进一步思考如何将漫画中至关重要的文字气泡元素融入到游戏机制中，以增强游戏的表现力和互动性。</li>
</ol>
<h3>设计过程</h3>
<p>每种艺术形式都具有独特的特性，可以提供独特的体验。最初我的灵感只有一句话：“如何把漫画元素转化成游戏核心玩法？”</p>
<p>我开始思考漫画的本质是什么？是什么决定了漫画的核心特性？</p>
<p>漫画的二维平面性迫使创作者通过画格的空间排列来模拟时间流动。正如 Scott McCloud 所主张的：漫画是在静止图像之间创造运动幻觉的艺术，它依赖于读者的积极参与来填补‘<strong>闭合</strong>’（closure）的空白。分镜布局直接编码了<strong>叙事节奏</strong>，并训练读者形成特定的<strong>视觉认知模式</strong>。因此，漫画的核心在于漫画元素的空间排列组合——即<strong>分镜布局</strong>。</p>
<p>那可否以漫画的阅读顺序和分镜布局入手尝试设计核心机制？例如让玩家调整、修改分镜布局？</p>
<p>然后我去查找了不同的融入漫画的游戏作为参考来分析，其中大部分主要以漫画作为叙事形式代替过场CG来进行简短的叙事，例如《重力异想世界》。</p>
<figure class="project-figure"><a href="assets/cheeses-comic-odyssey-reference-1.png" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-reference-1.png" alt="《重力异想世界》中的漫画过场" width="1100" height="619" loading="lazy" decoding="async"></a></figure>
<p>部分游戏把漫画作为游戏的UI界面，在画框里进行游玩，例如《艾迪芬奇的记忆》。</p>
<figure class="project-figure"><a href="assets/cheeses-comic-odyssey-reference-2.png" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-reference-2.png" alt="《艾迪芬奇的记忆》中的漫画界面" width="1100" height="613" loading="lazy" decoding="async"></a></figure>
<p>极少数游戏把漫画元素转化成核心游戏机制，例如《致命框架》，以漫画的空间排列影响阅读顺序为核心规则，让角色以漫画格排列的顺序行动，玩家可以改变漫画格的顺序来改变角色的行为顺序，从而影响整个故事发展，和我想做的方向不谋而合。</p>
<figure class="project-figure"><a href="assets/cheeses-comic-odyssey-reference-3.png" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-reference-3.png" alt="《致命框架》的漫画分镜玩法" width="1100" height="691" loading="lazy" decoding="async"></a></figure>
<p>同时我找到一本特别有意思的法国漫画《无敌救星》，它的<strong>主角</strong>可以用某种行为影响同一页的其他<strong>画格的叙事内容</strong>，从而<strong>追溯性地改变叙事内容，</strong>这打破了常规的<strong>漫画阅读习惯</strong>，迫使读者去追踪受主角能力影响的画格，而不是遵循<strong>固定的阅读顺序</strong>。这成为了我的直接灵感来源。</p>
<figure class="project-figure"><a href="assets/cheeses-comic-odyssey-reference-4.jpg" target="_blank" rel="noopener"><img src="assets/cheeses-comic-odyssey-reference-4.jpg" alt="法国漫画《无敌救星》" width="1100" height="1515" loading="lazy" decoding="async"></a></figure>`
        },
        {
            id: "inkbound-imagination",
            title: "Inkbound Imagination",
            cover: "project5.png",
            gameplay: "用触控笔挥出招式，把敌人从画卷上抹掉。",
            content: `<div class="video-frame"><iframe src="https://player.bilibili.com/player.html?isOutside=true&amp;aid=113561401559529&amp;bvid=BV17czYYfEgE&amp;cid=27081507185&amp;p=1&amp;autoplay=0" title="Inkbound Imagination 游戏视频" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div>
<p class="video-link"><a href="https://www.bilibili.com/video/BV17czYYfEgE/" target="_blank" rel="noopener">在哔哩哔哩观看</a></p>
<p><a class="play-link" href="https://drm06.itch.io/inkbound-imagination" target="_blank" rel="noopener">试玩 Inkbound Imagination</a></p>
<h3>游戏简介</h3>
<p>Inkbound Imagination 是一款2D横向卷轴动作游戏，它通过触控笔手势来映射战斗动作，以直观的互动方式提升沉浸感。</p>
<p>玩家将扮演一个坠入绘本世界的“笔尖”小人。他的核心能力是使用彩色墨水幻化出各种攻击方式各异的武器，并通过“绘画”的动作来攻击敌人，将他们从画卷中抹除。（目前只实现了一种武器类型）</p>
<p>主角的目标是扰乱绘本原有的秩序，而驱动他这一切行为的动机，就是“篡改故事”。想要逃离这个世界，杀死战士和巫师或许是关键的一步。</p>
<p>在这个世界里，巫师掌控着绘本的规则，能够随意改变画布上的图案（关卡）；而战士则作为守护者，不断阻挠着主角破坏故事的企图。</p>
<div class="project-gallery">
<a href="assets/inkbound-imagination-1.jpg" target="_blank" rel="noopener"><img src="assets/inkbound-imagination-1.jpg" alt="Inkbound Imagination 游戏画面 1" width="960" height="556" loading="lazy" decoding="async"></a>
<a href="assets/inkbound-imagination-2.jpg" target="_blank" rel="noopener"><img src="assets/inkbound-imagination-2.jpg" alt="Inkbound Imagination 游戏画面 2" width="960" height="556" loading="lazy" decoding="async"></a>
<a href="assets/inkbound-imagination-3.jpg" target="_blank" rel="noopener"><img src="assets/inkbound-imagination-3.jpg" alt="Inkbound Imagination 游戏画面 3" width="960" height="556" loading="lazy" decoding="async"></a>
<a href="assets/inkbound-imagination-4.jpg" target="_blank" rel="noopener"><img src="assets/inkbound-imagination-4.jpg" alt="Inkbound Imagination 游戏画面 4" width="960" height="556" loading="lazy" decoding="async"></a>
<a href="assets/inkbound-imagination-5.jpg" target="_blank" rel="noopener"><img src="assets/inkbound-imagination-5.jpg" alt="Inkbound Imagination 游戏画面 5" width="960" height="556" loading="lazy" decoding="async"></a>
<a href="assets/inkbound-imagination-6.jpg" target="_blank" rel="noopener"><img src="assets/inkbound-imagination-6.jpg" alt="Inkbound Imagination 游戏画面 6" width="960" height="540" loading="lazy" decoding="async"></a>
</div>
<h3>目前游戏特色</h3>
<ul>
  <li>玩家手绘笔动作对应角色攻击动作，增加一点代入感</li>
  <li>敌人残血时变为不能被攻击状态，需要用“涂抹”的手势斩杀敌人，模拟孩童的涂抹=杀掉了一个东西</li>
  <li>持续挥动画笔会喷溅墨水到“屏幕”上，影响玩家视野以及达到一定程度会有减速debuff</li>
  <li>敌人“巫师”设定的一个能力是“画布破坏者”，在血量达到2/3和1/3时分别会有一次场景平台重置的转场</li>
</ul>
<h3>目前游戏缺点</h3>
<ul>
  <li>没有体系的战斗框架，技能也还很少，一些预设的技能还没做出来</li>
  <li>Boss的战斗目前做的很傻</li>
  <li>关卡设计还很简单，画线造平台机制用的少。经过测试之后发现关卡设计的引导不够清晰，同时关卡美术素材单一，玩家可能会迷路。</li>
</ul>
<h3>未来迭代想法</h3>
<h4>1. 增加绘画/手绘笔操作机制的应用</h4>
<ul>
  <li>Boss战时可以增加画图案打击对应部位，和即时绘画来破坏boss子弹/躲避boss冲击波等机制</li>
  <li>Boss区域可以增加“可绘画区域”，形成战斗时可以利用的平台，例如暗影火炬城的“机械核心”和波斯王子的“大流士国王”</li>
  <li>增加需要即时画线的平台跳跃挑战的关卡设计</li>
</ul>
<h4>2. 设计战斗框架，增加技能</h4>
<ul>
  <li>例如传统的轻重攻击、小技能、大招，攻击充能条和充能之后的技能提升，融合绘画特性的“涂抹”和画图案等。</li>
  <li>例如一个橡皮擦技能，开启时停，玩家需要用手绘笔在短时间内精准扫过n个敌人，需要一定的吸附功能辅助瞄准</li>
</ul>
<h4>3. 增加与线条的交互</h4>
<ul>
  <li>例如以线条为攀爬路线，类似蜘蛛</li>
  <li>例如角色能“潜入”线条（画出的/场景既有的），并可以随着线条方向游动（可能需要修改角色设定，比起用墨水塑造物体的钢笔小子更像运用墨水能力的小墨滴）</li>
  <li>例如不同颜色线条的不同功能性（加速、弹跳等）</li>
</ul>
<h3>设计过程</h3>
<p>最初我是想以“喜欢画画的小孩，在自己画出的世界里冒险”的故事作为锚点构思的游戏。小孩以画笔作为武器，攻击手段与小孩本身的创作者身份有关（画和擦之类的），操作方式是普通的按键对应攻击招式。</p>
<p>在另外一门课的某节课里我尝试用键鼠手柄以外的设备来对应游戏的操作方式，我突然联想到手绘笔与我这个项目的操作方式很适配，于是进行了鼠标映射手绘笔操作方式的原型开发，增加了在地图里“可绘画区域”中可以画线条来形成平台的机制。</p>
<p>同时我进行了相似游戏机制的游戏调研，其中</p>
<ul>
  <li>《麦克斯与魔法标记》主要着重于画出具有真实物理的线来制造平台或可以解谜的图形。</li>
  <li>《星之卡比：画布诅咒》着重于以画出的线作为卡比前进的平台和路线，卡比会自动沿着该线移动。在下笔画一条线时，刚下笔的短暂时间内的挥动方向作为卡比一次冲力运动的方向。</li>
  <li>《忍者龙剑传之龙剑》（忍龙DS）着重于用触控笔来全程操控角色的移动和攻击。</li>
  <li>《画个火柴人》着重于让玩家通过绘画来创造自己的角色和武器形象，以及画一些简单的图案来解谜。</li>
</ul>
<p>对于用画线来绘制平台，貌似只有增加真实物理来增加一些与环境互动的思考，否则无论是增加需要蹬墙跳的区域还是移动平台，我测试的玩家都会用最方便快捷的画直线-跳-画直线来解决，更多考验的是操作性而非《麦克斯与魔法标记》那种画图案解谜的性质。而《麦克斯与魔法标记》的第二部作品创作多年却去掉了“让玩家自主创造线条的机制”，取而代之的是“用笔与某个场景区域交互，让该区域产生一些改变”这样的更具表现力的简单机制，恐怕也证明了“画线创造平台”这个机制的有限性。</p>
<p>于是我想要以忍龙DS的路线作为参考，用手绘笔映射操作，更多的动作更少的平台解谜。把“小孩在自己画出的世界冒险”留给了之后可能创作的RPG。（例如忍龙DS中，持续点击前进方向主人公就会朝该方向移动，迅速点击两次就会进行跳跃，跳跃到空中还能够进行手里剑攻击等，只需使用一支触控笔，玩家就能够体验爽快地忍者动作游戏。当使用忍术时，画面将进行切换，玩家需要描绘出“梵文”，成功后便能发动强力的忍术。）</p>`
        }
    ],
    about: `<div class="about-content">
<figure class="about-portrait"><a href="assets/portrait.png" target="_blank" rel="noopener"><img src="assets/portrait.png" alt="佘泓洁的照片" width="720" height="757" loading="lazy" decoding="async"></a></figure>
<div>
<p>你好！我是佘泓洁。我是一名「独立游戏设计师」，也自诩为一名「媒介炼金术士」。</p>
<p>在对自我和世界的探索中，我逐渐意识到，我所热爱的并不仅仅是游戏，而是所有具备强大叙事力量的艺术媒介。我享受的并非只是单纯地欣赏，或是选择其中一种进行创作，我真正热爱的是从不同媒介中「提取」其特质，将它们有机地「融合」，并观察它们会「反应」成什么样的机制与形态。而游戏，作为一种包罗万象的媒介，便是我进行创作与实验的主要基石。</p>
<p>我毕业于皇家墨尔本理工大学 (RMIT)，并获得动画、游戏与交互硕士学位。我的游戏作品曾多次在 IGDA（国际游戏开发者协会）墨尔本分会的游戏聚会上展出，也将参展下一届的 Pixel Expo。</p>
<p class="about-links"><a href="https://www.youtube.com/@dr.m3448" target="_blank" rel="noopener">YouTube</a> <a href="mailto:muggle066@gmail.com">邮箱</a></p>
</div>
</div>`,
    showreel: `<div class="video-frame"><iframe src="https://player.bilibili.com/player.html?isOutside=true&amp;aid=115037242985226&amp;bvid=BV177YYzdE6W&amp;cid=31733320036&amp;p=1&amp;autoplay=0" title="媒介炼金工坊作品集锦" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div>
<p class="video-link"><a href="https://www.bilibili.com/video/BV177YYzdE6W/" target="_blank" rel="noopener">在哔哩哔哩观看</a></p>`
};
