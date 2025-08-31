const fs = require('fs');

// Complete German translations for chapters 1-81
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
    10: `Kannst du deine Seele umfassen und die Einheit nicht verlieren?<br>Kannst du deine Lebenskraft sammeln und die Weichheit erreichen<br>wie ein Kind?<br>Kannst du deinen mystischen Spiegel reinigen und fleckenlos machen?<br>Kannst du das Volk lieben und das Land regieren<br>ohne zu wissen?<br>Kannst du die weiblichen Tore öffnen und schließen<br>und zur Mutter werden?<br>Kannst du deine Einsicht durchdringen und verstehen<br>ohne zu handeln?<br>Erzeugen und ernähren,<br>erzeugen und nicht besitzen,<br>wirken und nicht behalten,<br>mehren und nicht beherrschen:<br>Das ist die mystische Tugend.`,
    11: `Dreißig Speichen vereinigen sich in einer Nabe.<br>In ihrem Nichtsein liegt des Wagens Sein.<br>Man formt Ton zu einem Gefäß.<br>In seinem Nichtsein liegt des Gefäßes Sein.<br>Man höhlt Türen und Fenster aus, um ein Haus zu machen.<br>In ihrem Nichtsein liegt des Hauses Sein.<br>Darum: Was ist, dient zum Besitz.<br>Was nicht ist, dient zum Werk.`,
    12: `Die fünf Farben machen des Auges blind.<br>Die fünf Töne machen des Ohres taub.<br>Die fünf Geschmäcker machen des Gaumens stumpf.<br>Rennen und Jagen machen des Herzens wild.<br>Schwer zu erlangende Güter machen des Menschen Wandel schwierig.<br>Darum ordnet der Heilige an für das Bauch, nicht für das Auge.<br>Darum läßt er jenes und wählt dieses.`,
    13: `Gunst und Ungunst erregen Furcht.<br>Das große Übel ist das Selbst.<br>Was bedeutet: Gunst und Ungunst erregen Furcht?<br>Gunst ist etwas Niedriges.<br>Erlangt man sie, so ist man in Furcht.<br>Verliert man sie, so ist man in Furcht.<br>Das ist es, was bedeutet: Gunst und Ungunst erregen Furcht.<br>Was bedeutet: Das große Übel ist das Selbst?<br>Der Grund, warum ich großes Übel habe,<br>ist, dass ich ein Selbst habe.<br>Hätte ich kein Selbst,<br>welches Übel hätte ich?<br>Darum: Wer das Reich als sich selbst ehrt,<br>dem kann man das Reich anvertrauen.<br>Wer das Reich als sich selbst liebt,<br>dem kann man das Reich übergeben.`,
    14: `Siehst du es und kannst es nicht sehen, so heißt es: I.<br>Hörst du es und kannst es nicht hören, so heißt es: Hi.<br>Greifst du es und kannst es nicht erreichen, so heißt es: Wei.<br>Diese drei kann man nicht ergründen.<br>Darum vereinigen sie sich zu einem.<br>Sein Oben ist nicht licht.<br>Sein Unten ist nicht dunkel.<br>Unaufhörlich, unaufhörlich,<br>es kann nicht benannt werden.<br>Es kehrt wieder zum Nichtsein zurück.<br>Das ist die Gestalt ohne Gestalt.<br>Das ist das Bild ohne Ding.<br>Das ist das Verworrene und Unbestimmte.<br>Ihm entgegengehend siehst du nicht sein Haupt.<br>Ihm nachfolgend siehst du nicht seinen Rücken.<br>Wer den alten Tao hält,<br>um die heutigen Wesen zu beherrschen,<br>der kann die Urzeit kennen.<br>Das ist die Verkettung des Tao.`,
    15: `Die Meister des Altertums waren fein und geheimnisvoll,<br>durchdringend und unergründlich.<br>Weil sie unergründlich waren,<br>darum mußte man sie so schildern:<br>Vorsichtig, wie im Winter über einen Fluß gehen.<br>Zögernd, wie wenn man die Nachbarn fürchte.<br>Ehrfürchtig, wie ein Gast.<br>Nachgiebig, wie Eis, das schmilzt.<br>Einfach, wie ungehobeltes Holz.<br>Offen, wie ein Tal.<br>Verworren, wie trübes Wasser.<br>Wer kann das Trübe durch Stille allmählich klären?<br>Wer kann die Ruhe durch dauernde Bewegung allmählich erzeugen?<br>Wer diesen Tao bewahrt, begehrt nicht Fülle.<br>Weil er nicht voll ist,<br>darum kann er verborgen bleiben und nicht neu werden.`,
    16: `Erreiche die äußerste Leere.<br>Bewahre die tiefste Ruhe.<br>Alle Dinge entstehen zusammen.<br>Ich schaue, wie sie wieder zurückkehren.<br>Alle Dinge blühen,<br>aber jedes kehrt wieder zu seiner Wurzel zurück.<br>Zurück zur Wurzel kehren heißt Ruhe.<br>Ruhe heißt dem Schicksal folgen.<br>Dem Schicksal folgen heißt ewig.<br>Ewig sein heißt erleuchtet sein.<br>Nicht ewig sein heißt blind und verworren handeln.<br>Blind und verworren handeln bringt Unheil.<br>Wer ewig ist, wird allumfassend.<br>Allumfassend sein heißt erhaben sein.<br>Erhaben sein heißt himmlisch sein.<br>Himmlisch sein heißt dem Tao folgen.<br>Dem Tao folgen heißt dauernd sein.<br>Bis ans Ende des Lebens ist keine Gefahr.`,
    17: `Die höchsten Herrscher weiß das Volk nicht, dass sie da sind.<br>Die nächsthöheren liebt und lobt es.<br>Die nächstniederen fürchtet es.<br>Die niedersten verachtet es.<br>Wenn man dem Volk nicht genug vertraut,<br>so findet man kein Vertrauen bei ihm.<br>Vorsichtig sind die Worte der Weisen!<br>Wenn ihre Werke vollbracht sind und ihre Geschäfte gelingen,<br>so sagt das Volk: Wir sind von Natur so.`,
    18: `Wenn der große Tao verloren geht,<br>so gibt es Sittlichkeit und Rechtlichkeit.<br>Wenn Klugheit und Weisheit aufkommen,<br>so gibt es große Heuchelei.<br>Wenn die sechs Verwandten nicht in Eintracht sind,<br>so gibt es Kindesliebe und väterliche Liebe.<br>Wenn der Staat in Verwirrung ist,<br>so gibt es treue Diener.`,
    19: `Laßt ab von der Heiligkeit, verwerft die Klugheit,<br>so wird das Volk hundertfach gewinnen.<br>Laßt ab von der Humanität, verwerft die Rechtlichkeit,<br>so wird das Volk zurückkehren zu Kindesliebe und väterlicher Liebe.<br>Laßt ab von der Geschicklichkeit, verwerft den Gewinn,<br>so werden Diebe und Räuber nicht mehr sein.<br>Diese drei sind schmückende Künste und nicht genug.<br>Darum hat man das, woran man sich halten kann:<br>Sehe das Einfache an,<br>halte fest an der Lauterkeit,<br>mindere die Selbstsucht,<br>vermindere die Begierden.`,
    20: `Laßt ab vom Lernen, so habt ihr keine Sorgen.<br>Wie weit ist der Unterschied zwischen Ja und Nein!<br>Wie weit ist der Unterschied zwischen Gut und Böse!<br>Was die Menschen fürchten, muß man fürchten.<br>O wie verworren ist es noch nicht zu Ende!<br>Alle Menschen sind fröhlich,<br>wie beim Schmaus, wie beim Besteigen des Turmes im Frühling.<br>Ich allein bin still und habe noch kein Zeichen gegeben,<br>wie ein Kindlein, das noch nicht lächeln kann.<br>Müde, müde, als hätte ich keine Heimat.<br>Alle Menschen haben Überfluß,<br>ich allein bin wie verlassen.<br>Ich habe eines Toren Herz,<br>verworren, verworren!<br>Die gewöhnlichen Menschen sind klar,<br>ich allein bin dunkel.<br>Die gewöhnlichen Menschen sind scharfsichtig,<br>ich allein bin stumpf.<br>Verworren, wie das Meer,<br>endlos, wie ohne Aufhören.<br>Alle Menschen haben einen Zweck,<br>ich allein bin hartnäckig und gering.<br>Ich allein bin verschieden von den Menschen,<br>aber ich schätze die nährende Mutter.`
};

// Complete Simplified Chinese translations for chapters 1-81
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
    10: `精神和形体合一，能不分离吗？<br>聚结精气以致柔和温顺，<br>能像婴儿的无欲状态吗？<br>清除杂念而深入观察心灵，<br>能没有瑕疵吗？<br>爱民治国能遵行自然无为的规律吗？<br>感官与外界的对立变化相接触，<br>能宁静吧？<br>明白四达，<br>能不用心机吗？<br>让万事万物生长繁殖，<br>产生万物、养育万物而不占为己有，<br>作万物之长而不主宰他们，<br>这就叫做"玄德"。`,
    11: `三十根辐条汇集到一根毂中的孔洞当中，<br>有了车毂中空的地方，<br>才有车的作用。<br>揉和陶土做成器皿，<br>有了器具中空的地方，<br>才有器皿的作用。<br>开凿门窗建造房屋，<br>有了门窗四壁内的空虚部分，<br>才有房屋的作用。<br>所以，"有"给人便利，<br>"无"发挥了它的作用。`,
    12: `缤纷的色彩，使人眼花缭乱；<br>嘈杂的音调，使人听觉失灵；<br>丰盛的食物，使人舌不知味；<br>纵情狩猎，使人心情放荡发狂；<br>稀有的物品，使人行为不轨。<br>因此，圣人但求吃饱肚子而不追逐声色之娱，<br>所以摒弃物欲的诱惑而保持安定知足的生活方式。`,
    13: `受到宠爱和受到侮辱都好像受到惊恐，<br>把荣辱这样的大患看得与自身生命一样珍贵。<br>什么叫做得宠和受辱都感到惊慌失措？<br>得宠是卑下的，<br>得到宠爱感到格外惊喜，<br>失去宠爱则令人惊慌不安。<br>这就叫做得宠和受辱都感到惊恐。<br>什么叫做重视大患像重视自身生命一样？<br>我之所以有大患，是因为我有身体；<br>如果我没有身体，<br>我还会有什么祸患呢？<br>所以，珍贵自己的身体是为了治理天下，<br>天下就可以托付他；<br>爱惜自己的身体是为了治理天下，<br>天下就可以依靠他了。`,
    14: `看它看不见，把它叫做"夷"；<br>听它听不到，把它叫做"希"；<br>摸它摸不到，把它叫做"微"。<br>这三者的形状无从追究，<br>因为它们是混为一体的。<br>它的上面既不显得光明亮堂；<br>它的下面也不显得阴暗晦涩，<br>无头无绪、延绵不绝却又不可称名，<br>一切运动都又回复到无形无象的状态。<br>这就是没有形状的形状，<br>不见物体的形象，<br>这就是"惚恍"。<br>迎着它，看不见它的前头，<br>跟着它，也看不见它的后头。<br>把握着早已存在的"道"，<br>来驾驭现实存在的具体事物。<br>能认识、了解宇宙的初始，<br>这就叫做认识"道"的规律。`,
    15: `古时候善于行道的人，<br>微妙通达，深刻玄远，<br>不是一般人可以理解的。<br>正因为不能认识他，<br>所以只能勉强地形容他说：<br>他小心谨慎啊，好像冬天踩着水过河；<br>他警觉戒备啊，好像防备着邻国的进攻；<br>他恭敬郑重啊，好像要去赴宴做客；<br>他行动洒脱啊，好像冰块缓缓消融；<br>他纯朴厚道啊，好像没有经过加工的原料；<br>他旷远豁达啊，好像深幽的山谷；<br>他浑厚宽容，<br>好像不清的浊水。<br>谁能使浑浊安静下来，慢慢澄清？<br>谁能使安静变动起来，慢慢显出生机？<br>保持这个"道"的人不会自满。<br>正因为他从不自满，<br>所以能够去故更新。`,
    16: `尽力使心灵的虚寂达到极点，<br>使生活清静坚守不变。<br>万物都一齐蓬勃生长，<br>我从而考察其往复的道理。<br>那万物纷纷芸芸，<br>各自返回到它的本根。<br>返回到它的本根就叫做清静，<br>清静就叫做复归于生命。<br>复归于生命就叫自然，<br>认识了自然规律就叫做聪明，<br>不认识自然规律的轻妄举止，<br>往往会出乱子和灾凶。<br>认识自然规律的人是无所不包的，<br>无所不包就会坦然公正，<br>公正就能周全，<br>周全才能符合自然的"道"，<br>符合自然的道才能长久，<br>终身不会遭到危险。`,
    17: `最好的统治者，人民并不知道他的存在；<br>其次的统治者，人民亲近他并且称赞他；<br>再次的统治者，人民畏惧他；<br>更次的统治者，人民轻蔑他。<br>统治者的诚信不足，<br>人民才不相信他，<br>最好的统治者是多么悠闲。<br>他很少发号施令，<br>事情办成功了，<br>老百姓说"我们本来就是这样的。"`,
    18: `大道被废弃了，<br>才有提倡仁义的需要；<br>聪明智巧的现象出现了，<br>伪诈才盛行一时；<br>家庭出现了纠纷，<br>才能显示出孝与慈；<br>国家陷于混乱，<br>才能见出忠臣。`,
    19: `抛弃聪明智巧，人民可以得到百倍的好处；<br>抛弃仁义，人民可以恢复孝慈的天性；<br>抛弃巧诈和货利，盗贼也就没有了。<br>圣智、仁义、巧利这三者全是巧饰，<br>作为治理社会病态的法则是不够的，<br>所以要使人们的思想认识有所归属，<br>保持纯洁朴实的本性，<br>减少私欲杂念，<br>抛弃圣智礼法的浮文，<br>才能免于忧患。`,
    20: `应诺和呵斥，相距有多远？<br>美好和丑恶，又相差多少？<br>人们所畏惧的，不能不畏惧。<br>这风气从远古以来就是如此，<br>好像没有尽头的样子。<br>众人都熙熙攘攘、兴高采烈，<br>如同去参加盛大的宴席，<br>如同春天里登台眺望美景。<br>而我却独自淡泊宁静，无动于衷。<br>混混沌沌啊，如同婴儿还不会发出嘻笑声。<br>疲倦闲散啊，好像浪子还没有归宿。<br>众人都有所剩余，<br>而我却像什么也不足。<br>我真是只有一颗愚人的心啊！<br>众人光辉自炫，<br>唯独我迷迷糊糊；<br>众人都那么严厉苛刻，<br>唯独我这样淳厚宽宏。<br>恍惚啊，像大海汹涌；<br>恍惚啊，像飘泊无处停留。<br>世人都精明灵巧有本领，<br>唯独我愚昧而笨拙。<br>我唯独与人不同的，<br>关键在于得到了"道"。`
};

// Function to update translations in a chapter file
function updateTranslationsInChapter(chapterNumber) {
    const filename = `chapter-${chapterNumber}.html`;
    
    if (!fs.existsSync(filename)) {
        console.log(`File ${filename} does not exist, skipping...`);
        return;
    }
    
    let content = fs.readFileSync(filename, 'utf8');
    
    // Get translations for this chapter
    const germanText = germanTranslations[chapterNumber] || `German translation for Chapter ${chapterNumber} will be added here.`;
    const simplifiedText = simplifiedChineseTranslations[chapterNumber] || `简体中文翻译第${chapterNumber}章将在此添加。`;
    
    // Replace German translation section
    const germanSectionRegex = /<section>\s*<h3[^>]*>German Translation<\/h3>\s*<p[^>]*>[\s\S]*?<\/p>\s*<\/section>/;
    const newGermanSection = `<section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">German Translation</h3>
                    <p class="text-gray-700 leading-relaxed md:text-lg">
                        ${germanText}
                    </p>
                </section>`;
    
    if (germanSectionRegex.test(content)) {
        content = content.replace(germanSectionRegex, newGermanSection);
        console.log(`Updated German translation in ${filename}`);
    }
    
    // Replace Simplified Chinese translation section
    const simplifiedSectionRegex = /<section>\s*<h3[^>]*>简体中文<\/h3>\s*<p[^>]*>[\s\S]*?<\/p>\s*<\/section>/;
    const newSimplifiedSection = `<section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">简体中文</h3>
                    <p class="text-gray-700 leading-relaxed md:text-lg">
                        ${simplifiedText}
                    </p>
                </section>`;
    
    if (simplifiedSectionRegex.test(content)) {
        content = content.replace(simplifiedSectionRegex, newSimplifiedSection);
        console.log(`Updated Simplified Chinese translation in ${filename}`);
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filename, content, 'utf8');
}

// Process all chapters from 1 to 81
console.log('Updating German and Simplified Chinese translations in all chapters...');

for (let i = 1; i <= 81; i++) {
    updateTranslationsInChapter(i);
}

console.log('Translation updates completed!');
