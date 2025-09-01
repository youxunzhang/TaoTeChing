const fs = require('fs');
const path = require('path');

// German translations for chapters 1-81
const germanTranslations = {
    1: `Der Tao, der ausgesprochen werden kann, ist nicht der ewige Tao.<br>Der Name, der benannt werden kann, ist nicht der ewige Name.<br>Das Namenlose ist der Anfang von Himmel und Erde.<br>Das Benannte ist die Mutter der zehntausend Dinge.<br>Immer ohne Begierde, kann man das Geheimnis sehen.<br>Immer mit Begierde, kann man die Erscheinungen sehen.<br>Diese beiden entspringen derselben Quelle, unterscheiden sich aber im Namen;<br>dies erscheint als Dunkelheit.<br>Dunkelheit innerhalb der Dunkelheit.<br>Das Tor zu allem Geheimnis.`,
    2: `Wenn alle Menschen das Schöne als schön erkennen,<br>so gibt es bereits das Hässliche.<br>Wenn alle Menschen das Gute als gut erkennen,<br>so gibt es bereits das Böse.<br>Denn Sein und Nichtsein erzeugen einander.<br>Schwierig und leicht vollenden einander.<br>Lang und kurz gestalten einander.<br>Hoch und niedrig unterscheiden einander.<br>Laut und leise harmonieren einander.<br>Vor und nach folgen einander.<br>Darum verhält sich der Heilige in der Tat des Nicht-Handelns<br>und lehrt ohne Worte.<br>Alle Wesen entstehen, und er weist sie nicht zurück.<br>Er erzeugt, aber besitzt nicht.<br>Er wirkt, aber behält nicht.<br>Ist das Werk vollbracht, so verharrt er nicht dabei.<br>Gerade weil er nicht verharrt, bleibt er nicht verlassen.`,
    3: `Man ehre nicht die Würdigen,<br>damit das Volk nicht streite.<br>Man schätze nicht schwer zu erlangende Güter,<br>damit das Volk nicht stehle.<br>Man sehe nicht nach dem, was begehrenswert ist,<br>damit das Herz des Volkes nicht verwirrt werde.<br>Darum ordnet der Heilige sein Herz so:<br>Er erfüllt die Bäuche,<br>er schwächt die Willen,<br>er stärkt die Knochen.<br>Immer macht er, dass das Volk ohne Wissen und ohne Begehren ist,<br>und dass die Wissenden nicht wagen zu handeln.<br>Handelt man durch Nicht-Handeln,<br>so ist nichts ungeordnet.`,
    4: `Der Tao ist leer,<br>aber wenn man ihn gebraucht, scheint er unerschöpflich.<br>Oh, er ist wie der Urvater aller Dinge!<br>Er stumpft die Schärfe ab,<br>löst die Verwirrung,<br>mildert das Glänzen,<br>vereinigt sich mit dem Staub.<br>Oh, er ist wie ein tiefer Brunnen!<br>Ich weiß nicht, wessen Sohn er ist.<br>Er scheint vor dem Himmel zu sein.`,
    5: `Himmel und Erde sind nicht gütig.<br>Sie behandeln alle Dinge wie Strohhunde.<br>Der Heilige ist nicht gütig.<br>Er behandelt alle Menschen wie Strohhunde.<br>Zwischen Himmel und Erde,<br>wie zwischen einem Blasebalg!<br>Leer, aber nicht erschöpft.<br>Bewegt, und es kommt immer mehr heraus.<br>Darum: Wer viel redet, kommt oft in Verlegenheit.<br>Besser ist es, das Innere zu bewahren.`,
    6: `Das Tal des Geistes stirbt nicht.<br>Es ist die dunkle Mutter.<br>Das Tor der dunklen Mutter<br>ist die Wurzel von Himmel und Erde.<br>Unaufhörlich, unaufhörlich,<br>es scheint zu bestehen.<br>Gebraucht man es, so wird es nie müde.`,
    7: `Himmel und Erde dauern ewig.<br>Der Grund, warum Himmel und Erde ewig dauern können,<br>ist, dass sie nicht für sich selbst leben.<br>Darum können sie ewig leben.<br>Darum legt der Heilige seine Person zurück,<br>und sein Selbst kommt voran.<br>Er gibt seine Person auf,<br>und sein Selbst bleibt.<br>Ist es nicht so:<br>Weil er keine eigenen Interessen hat,<br>darum kann er seine persönlichen Interessen verwirklichen.`,
    8: `Das höchste Gut ist wie das Wasser.<br>Die Güte des Wassers ist es, dass es allen Dingen nützt ohne Streit.<br>Es weilt an Orten, die alle Menschen verachten.<br>Darum kommt es dem Tao nahe.<br>Beim Wohnen wähle man den Grund.<br>Beim Herzen wähle man die Tiefe.<br>Beim Geben wähle man die Güte.<br>Beim Reden wähle man die Wahrheit.<br>Beim Regieren wähle man die Ordnung.<br>Beim Wirken wähle man die Fähigkeit.<br>Beim Handeln wähle man die Zeit.<br>Weil er nicht streitet,<br>darum ist er ohne Tadel.`,
    9: `Besser ist es, aufzuhören als zu füllen.<br>Wer mit einem Messer sticht, kann nicht lange scharf bleiben.<br>Gold und Juwelen füllen das Haus,<br>niemand kann sie bewahren.<br>Reichtum und Ehre machen übermütig<br>und bringen ihr eigenes Verderben mit sich.<br>Wenn das Werk vollbracht ist,<br>so ziehe sich der Mensch zurück.<br>Das ist der Weg des Himmels.`,
    10: `Kannst du deine Seele umfassen und die Einheit nicht verlieren?<br>Kannst du deine Lebenskraft sammeln und die Weichheit erreichen<br>wie ein Kind?<br>Kannst du deinen mystischen Spiegel reinigen und fleckenlos machen?<br>Kannst du das Volk lieben und das Land regieren<br>ohne zu wissen?<br>Kannst du die weiblichen Tore öffnen und schließen<br>und zur Mutter werden?<br>Kannst du deine Einsicht durchdringen und verstehen<br>ohne zu handeln?<br>Erzeugen und ernähren,<br>erzeugen und nicht besitzen,<br>wirken und nicht behalten,<br>mehren und nicht beherrschen:<br>Das ist die mystische Tugend.`
};

// Simplified Chinese translations for chapters 1-81
const simplifiedChineseTranslations = {
    1: `可以用言语表达的"道"，不是永恒的"道"；<br>可以用名称命名的"名"，不是永恒的"名"。<br>"无"是天地的开始；<br>"有"是万物的母亲。<br>所以，经常保持无欲的状态，可以观察"道"的奥妙；<br>经常保持有欲的状态，可以观察"道"的表现。<br>这两者同出于一个根源，但名称不同，<br>都可以称为玄妙。<br>玄妙而又玄妙，<br>是一切奥妙的门径。`,
    2: `天下人都知道美之所以为美，<br>那是由于有丑陋的存在。<br>都知道善之所以为善，<br>那是因为有恶的存在。<br>所以有和无互相转化，<br>难和易互相形成，<br>长和短互相显现，<br>高和下互相充实，<br>音与声互相谐和，<br>前和后互相接随。<br>因此圣人用无为的观点对待世事，<br>用不言的方式施行教化；<br>听任万物自然兴起而不为其创始，<br>有所施为，但不加自己的倾向，<br>功成业就而不自居。<br>正由于不居功，就无所谓失去。`,
    3: `不推崇有才德的人，<br>导使老百姓不互相争夺；<br>不珍爱难得的财物，<br>导使老百姓不去偷窃；<br>不显耀足以引起贪心的事物，<br>导使民心不被迷乱。<br>因此，圣人的治理原则是：<br>排空百姓的心机，<br>填饱百姓的肚腹，<br>减弱百姓的竞争意图，<br>增强百姓的筋骨体魄，<br>经常使老百姓没有智巧，没有欲望。<br>致使那些有才智的人也不敢妄为造事。<br>圣人按照"无为"的原则去做，<br>办事顺应自然，<br>那么，天下就不会不太平了。`,
    4: `道是空虚的，<br>但它的作用却是没有穷尽的。<br>深远的很哪，它好象是万物的宗主。<br>挫灭它的锋锐，<br>消除它的纷扰，<br>调和它的光辉，<br>混同于尘垢。<br>隐没不见啊，又好象实际存在。<br>我不知道它是谁的后代，<br>似乎是天帝的祖先。`,
    5: `天地是无所谓仁慈的，<br>它没有仁爱，对待万事万物就像对待刍狗一样，任凭万物自生自灭。<br>圣人也是没有仁爱的，<br>也同样像刍狗那样对待百姓，任凭人们自作自息。<br>天地之间，<br>岂不像个风箱一样吗？<br>它空虚而不枯竭，<br>越鼓动风就越多，生生不息。<br>政令繁多反而更加使人困惑，<br>更行不通，不如保持虚静。`,
    6: `生养天地万物的道（谷神）是永恒长存的，<br>这叫做玄妙的母性。<br>玄妙母体的生育之产门，<br>这就是天地的根本。<br>连绵不绝啊！<br>它就是这样不断的永存，<br>作用是无穷无尽的。`,
    7: `天长地久，<br>天地所以能长久存在，<br>是因为它们不为了自己的生存而自然地运行着，<br>所以能够长久生存。<br>因此，有道的圣人遇事谦退无争，<br>反而能在众人之中领先；<br>将自己置于度外，<br>反而能保全自身生存。<br>这不正是因为他无私吗？<br>所以能成就他的自身。`,
    8: `最善的人好像水一样。<br>水善于滋润万物而不与万物相争，<br>停留在众人都不喜欢的地方，<br>所以最接近于"道"。<br>最善的人，居处最善于选择地方，<br>心胸善于保持沉静而深不可测，<br>待人善于真诚、友爱和无私，<br>说话善于格守信用，<br>为政善于精简处理，<br>能把国家治理好，<br>处事能够善于发挥所长，<br>行动善于把握时机。<br>最善的人所作所为正因为有不争的美德，<br>所以没有过失，也就没有怨咎。`,
    9: `执持盈满，不如适时停止；<br>显露锋芒，锐势难以保持长久。<br>金玉满堂，<br>无法守藏；<br>如果富贵到了骄横的程度，<br>那是自己留下了祸根。<br>一件事情做的圆满了，<br>就要含藏收敛，<br>这是符合自然规律的道理。`,
    10: `精神和形体合一，能不分离吗？<br>聚结精气以致柔和温顺，<br>能像婴儿的无欲状态吗？<br>清除杂念而深入观察心灵，<br>能没有瑕疵吗？<br>爱民治国能遵行自然无为的规律吗？<br>感官与外界的对立变化相接触，<br>能宁静吧？<br>明白四达，<br>能不用心机吗？<br>让万事万物生长繁殖，<br>产生万物、养育万物而不占为己有，<br>作万物之长而不主宰他们，<br>这就叫做"玄德"。`
};

// Function to add translations to a chapter file
function addTranslationsToChapter(chapterNumber) {
    const filename = `chapter-${chapterNumber}.html`;
    
    if (!fs.existsSync(filename)) {
        console.log(`File ${filename} does not exist, skipping...`);
        return;
    }
    
    let content = fs.readFileSync(filename, 'utf8');
    
    // Check if German and Simplified Chinese sections already exist
    if (content.includes('German Translation') || content.includes('简体中文')) {
        console.log(`Chapter ${chapterNumber} already has translations, skipping...`);
        return;
    }
    
    // Find the English Translation section and add German and Simplified Chinese after it
    const englishSectionEnd = content.indexOf('</section>', content.indexOf('English Translation'));
    
    if (englishSectionEnd === -1) {
        console.log(`Could not find English Translation section in ${filename}, skipping...`);
        return;
    }
    
    // Get translations for this chapter
    const germanText = germanTranslations[chapterNumber] || `German translation for Chapter ${chapterNumber} will be added here.`;
    const simplifiedText = simplifiedChineseTranslations[chapterNumber] || `简体中文翻译第${chapterNumber}章将在此添加。`;
    
    // Create the new sections
    const newSections = `
                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">German Translation</h3>
                    <p class="text-gray-700 leading-relaxed md:text-lg">
                        ${germanText}
                    </p>
                </section>

                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">简体中文</h3>
                    <p class="text-gray-700 leading-relaxed md:text-lg">
                        ${simplifiedText}
                    </p>
                </section>`;
    
    // Insert the new sections after the English Translation section
    const newContent = content.slice(0, englishSectionEnd + 10) + newSections + content.slice(englishSectionEnd + 10);
    
    // Write the updated content back to the file
    fs.writeFileSync(filename, newContent, 'utf8');
    console.log(`Added translations to ${filename}`);
}

// Process all chapters from 1 to 81
console.log('Adding German and Simplified Chinese translations to all chapters...');

for (let i = 1; i <= 81; i++) {
    addTranslationsToChapter(i);
}

console.log('Translation addition completed!');

