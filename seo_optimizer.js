const fs = require('fs');
const path = require('path');

// Chapter titles and descriptions for SEO optimization
const chapterData = {
    1: { title: "The Eternal Tao", description: "Chapter 1 explores the fundamental nature of the Tao and the limitations of language in describing it." },
    2: { title: "The Practice of Non-Doing", description: "Chapter 2 teaches about the practice of wu-wei (non-action) and the harmony of opposites." },
    3: { title: "Not Exalting the Worthy", description: "Chapter 3 discusses the dangers of valuing material things and the importance of simplicity." },
    4: { title: "The Unfathomable", description: "Chapter 4 describes the Tao as an unfathomable source that appears empty but is never exhausted." },
    5: { title: "The Impartial", description: "Chapter 5 compares the Tao to a bellows and emphasizes impartiality in nature." },
    6: { title: "The Valley Spirit", description: "Chapter 6 describes the valley spirit as the mysterious female, the root of heaven and earth." },
    7: { title: "Heaven and Earth", description: "Chapter 7 explains how heaven and earth endure through selflessness." },
    8: { title: "The Highest Good", description: "Chapter 8 compares the highest good to water, which benefits all without competing." },
    9: { title: "Holding and Filling", description: "Chapter 9 warns against excess and teaches the wisdom of knowing when to stop." },
    10: { title: "Embracing the One", description: "Chapter 10 asks rhetorical questions about maintaining unity and harmony." },
    11: { title: "The Use of What Has No Substance", description: "Chapter 11 uses the wheel, pot, and house to illustrate the value of emptiness." },
    12: { title: "The Five Colors", description: "Chapter 12 warns against sensory excess and the pursuit of material pleasures." },
    13: { title: "Favor and Disgrace", description: "Chapter 13 discusses how favor and disgrace are equally disturbing to the mind." },
    14: { title: "The Manifestation of the Mystery", description: "Chapter 14 describes the Tao as something that cannot be seen, heard, or touched." },
    15: { title: "The Manifestation of Subtlety", description: "Chapter 15 describes the ancient masters who were subtle, mysterious, and profound." },
    16: { title: "Returning to the Root", description: "Chapter 16 teaches about returning to the root and finding peace in acceptance." },
    17: { title: "The Rulers", description: "Chapter 17 describes different types of rulers, from the best who are barely known to the worst who are despised." },
    18: { title: "The Decline of the Tao", description: "Chapter 18 shows how the decline of the Tao leads to the rise of artificial virtues." },
    19: { title: "Return to Simplicity", description: "Chapter 19 advocates for returning to simplicity and rejecting artificial wisdom." },
    20: { title: "Abandon Learning", description: "Chapter 20 contrasts the carefree life of the Taoist with the concerns of ordinary people." },
    21: { title: "The Heart of the Tao", description: "Chapter 21 describes the Tao as something that can only be grasped through intuition." },
    22: { title: "The Yield and Overcome", description: "Chapter 22 teaches that yielding leads to overcoming and that less is more." },
    23: { title: "Sparing Words", description: "Chapter 23 emphasizes the importance of naturalness and sparing words." },
    24: { title: "Bitter Food", description: "Chapter 24 warns against excessive behavior and artificial actions." },
    25: { title: "The Four Greats", description: "Chapter 25 describes the four great things: Tao, heaven, earth, and the king." },
    26: { title: "The Heavy and Light", description: "Chapter 26 teaches that the heavy is the root of the light and stillness is the master of restlessness." },
    27: { title: "The Skillful", description: "Chapter 27 describes the skillful person who leaves no trace and wastes nothing." },
    28: { title: "Knowing the Male", description: "Chapter 28 teaches about knowing the male but keeping to the female and returning to infancy." },
    29: { title: "Taking Over the Empire", description: "Chapter 29 warns against trying to take over the empire and forcing things." },
    30: { title: "Using the Military", description: "Chapter 30 advises against using military force and warns of its consequences." },
    31: { title: "Fine Weapons", description: "Chapter 31 describes fine weapons as instruments of ill omen." },
    32: { title: "The Tao is Nameless", description: "Chapter 32 describes the Tao as nameless and how it brings order to the world." },
    33: { title: "Knowing Others", description: "Chapter 33 discusses different types of knowledge and wisdom." },
    34: { title: "The Great Tao", description: "Chapter 34 describes the great Tao as flowing everywhere and accomplishing without claiming." },
    35: { title: "The Peaceful", description: "Chapter 35 describes how the Tao brings peace and contentment." },
    36: { title: "The Subtle Light", description: "Chapter 36 teaches about the subtle light and the principle of reversal." },
    37: { title: "Governing", description: "Chapter 37 describes how the Tao governs without action and brings order naturally." },
    38: { title: "The Superior Virtue", description: "Chapter 38 discusses the difference between superior and inferior virtue." },
    39: { title: "The Unity", description: "Chapter 39 describes how the one brings unity and harmony to all things." },
    40: { title: "Returning", description: "Chapter 40 teaches that returning is the movement of the Tao and yielding is the way of the Tao." },
    41: { title: "The Quality of the Tao", description: "Chapter 41 describes how different people react to hearing about the Tao." },
    42: { title: "The Transformations of the Tao", description: "Chapter 42 describes how the Tao gives birth to one, one to two, two to three, and three to all things." },
    43: { title: "The Softest", description: "Chapter 43 teaches that the softest things overcome the hardest." },
    44: { title: "Fame or Self", description: "Chapter 44 asks whether fame or self is more precious and warns against excessive accumulation." },
    45: { title: "Great Perfection", description: "Chapter 45 describes great perfection as appearing incomplete but being inexhaustible." },
    46: { title: "The Racing Horses", description: "Chapter 46 describes how when the Tao prevails, horses are used for farming instead of war." },
    47: { title: "Knowing the World", description: "Chapter 47 teaches that one can know the world without going out the door." },
    48: { title: "Forgetting Knowledge", description: "Chapter 48 describes how learning leads to daily increase while practicing the Tao leads to daily decrease." },
    49: { title: "The People's Hearts", description: "Chapter 49 describes the sage as having no fixed mind but taking the people's hearts as his own." },
    50: { title: "Life and Death", description: "Chapter 50 discusses life and death and the different ways people meet their end." },
    51: { title: "The Mysterious Power", description: "Chapter 51 describes the mysterious power of the Tao in giving birth and nourishing all things." },
    52: { title: "Returning to the Source", description: "Chapter 52 teaches about returning to the source and finding the mother." },
    53: { title: "The Great Way", description: "Chapter 53 describes the great way as easy but people prefer bypaths." },
    54: { title: "The Cultivation", description: "Chapter 54 describes how to cultivate virtue in oneself, family, village, state, and world." },
    55: { title: "The Mysterious", description: "Chapter 55 describes the mysterious power of the infant and the harmony of the uncarved block." },
    56: { title: "The Mysterious", description: "Chapter 56 teaches that those who know do not speak and those who speak do not know." },
    57: { title: "Governing", description: "Chapter 57 describes how to govern a state with the Tao." },
    58: { title: "The Government", description: "Chapter 58 describes how government that is relaxed and easy leads to a people that is honest and good." },
    59: { title: "Governing People", description: "Chapter 59 teaches about governing people and serving heaven through thrift." },
    60: { title: "Governing the Great", description: "Chapter 60 describes how to govern a great state as one would cook a small fish." },
    61: { title: "The Great State", description: "Chapter 61 describes how a great state should be like a low-lying river." },
    62: { title: "The Tao", description: "Chapter 62 describes the Tao as the treasure of the good and the refuge of the bad." },
    63: { title: "Acting Without Action", description: "Chapter 63 teaches about acting without action and dealing with things before they arise." },
    64: { title: "The Easy", description: "Chapter 64 describes how what is easy is difficult and what is difficult is easy." },
    65: { title: "The Ancient", description: "Chapter 65 describes the ancient masters who did not try to enlighten the people." },
    66: { title: "The Rivers and Seas", description: "Chapter 66 describes how rivers and seas can be kings of the valleys because they are good at being low." },
    67: { title: "The Three Treasures", description: "Chapter 67 describes the three treasures: compassion, frugality, and not daring to be first." },
    68: { title: "The Best", description: "Chapter 68 describes the best as not competing and being good at using people." },
    69: { title: "The Strategy", description: "Chapter 69 describes military strategy as not daring to be the aggressor." },
    70: { title: "My Words", description: "Chapter 70 describes the author's words as easy to understand and easy to practice." },
    71: { title: "Knowing", description: "Chapter 71 teaches that to know that you do not know is the best." },
    72: { title: "The People", description: "Chapter 72 warns against oppressing the people and taking their livelihood." },
    73: { title: "Daring", description: "Chapter 73 describes how daring to act leads to death while daring not to act leads to life." },
    74: { title: "The People", description: "Chapter 74 warns against killing people and describes how the executioner kills in place of the great carpenter." },
    75: { title: "The People", description: "Chapter 75 describes how the people starve because the ruler taxes too much." },
    76: { title: "The Living and the Dead", description: "Chapter 76 compares the living to tender and weak while the dead are stiff and hard." },
    77: { title: "Heaven's Way", description: "Chapter 77 describes heaven's way as taking from the excess and giving to the insufficient." },
    78: { title: "The Weak", description: "Chapter 78 describes how the weak overcome the strong and the soft overcomes the hard." },
    79: { title: "The Covenant", description: "Chapter 79 describes how to settle great hatred and the virtue of keeping promises." },
    80: { title: "The Small State", description: "Chapter 80 describes the ideal small state with few people and simple ways." },
    81: { title: "The True Words", description: "Chapter 81 describes true words as not beautiful and beautiful words as not true." }
};

function generateSEOContent(chapterNum) {
    const data = chapterData[chapterNum];
    if (!data) return null;
    
    return {
        title: `Chapter ${chapterNum}: ${data.title} - Tao Te Ching | Read Online`,
        description: `Read Chapter ${chapterNum} of the Tao Te Ching: '${data.title}' with original Chinese text and English translation. ${data.description}`,
        keywords: `Tao Te Ching Chapter ${chapterNum}, ${data.title}, Laozi, Dao De Jing, Chinese philosophy, Taoism, ancient wisdom`,
        ogTitle: `Chapter ${chapterNum}: ${data.title} - Tao Te Ching`,
        ogDescription: `Read Chapter ${chapterNum} of the Tao Te Ching with original Chinese text and English translation. ${data.description}`,
        schemaHeadline: `Chapter ${chapterNum}: ${data.title}`,
        schemaDescription: `Chapter ${chapterNum} of the Tao Te Ching: ${data.description}`
    };
}

function updateChapterFile(chapterNum) {
    const filename = `chapter-${chapterNum}.html`;
    const filepath = path.join(__dirname, filename);
    
    if (!fs.existsSync(filepath)) {
        console.log(`File ${filename} does not exist, skipping...`);
        return;
    }
    
    const seoContent = generateSEOContent(chapterNum);
    if (!seoContent) {
        console.log(`No SEO data for chapter ${chapterNum}, skipping...`);
        return;
    }
    
    let content = fs.readFileSync(filepath, 'utf8');
    
    // Update title
    content = content.replace(
        /<title>.*?<\/title>/,
        `<title>${seoContent.title}</title>`
    );
    
    // Add meta tags after title
    const metaTags = `
    <meta name="description" content="${seoContent.description}">
    <meta name="keywords" content="${seoContent.keywords}">
    <meta name="author" content="Tao Te Ching Online">
    <link rel="canonical" href="https://your-domain.com/${filename}">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${seoContent.ogTitle}">
    <meta property="og:description" content="${seoContent.ogDescription}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://your-domain.com/${filename}">
    <meta property="og:site_name" content="Tao Te Ching Online">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${seoContent.ogTitle}">
    <meta name="twitter:description" content="${seoContent.ogDescription}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${seoContent.schemaHeadline}",
        "description": "${seoContent.schemaDescription}",
        "author": {
            "@type": "Person",
            "name": "Laozi"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Tao Te Ching Online"
        },
        "datePublished": "-600",
        "dateModified": "2024-01-15",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://your-domain.com/${filename}"
        },
        "isPartOf": {
            "@type": "Book",
            "name": "Tao Te Ching",
            "alternateName": "Dao De Jing"
        },
        "articleSection": "Tao Te Ching Chapters",
        "inLanguage": ["zh", "en"]
    }
    </script>`;
    
    // Insert meta tags after title
    content = content.replace(
        /(<title>.*?<\/title>)/,
        `$1${metaTags}`
    );
    
    // Add breadcrumb navigation
    const breadcrumb = `
            <!-- Breadcrumb Navigation -->
            <nav class="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                <ol class="flex items-center space-x-2">
                    <li><a href="index.html" class="hover:text-blue-600 transition-colors">Home</a></li>
                    <li class="flex items-center">
                        <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <a href="index.html" class="hover:text-blue-600 transition-colors">Tao Te Ching</a>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Chapter ${chapterNum}</span>
                    </li>
                </ol>
            </nav>`;
    
    // Insert breadcrumb after main container div
    content = content.replace(
        /(<div class="max-w-3xl mx-auto">)/,
        `$1${breadcrumb}`
    );
    
    // Update chapter title
    content = content.replace(
        /<h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">.*?<\/h2>/,
        `<h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">${seoContent.schemaHeadline.split(': ')[1]}</h2>`
    );
    
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated ${filename} with SEO optimizations`);
}

// Update all chapters
for (let i = 1; i <= 81; i++) {
    updateChapterFile(i);
}

console.log('SEO optimization complete for all chapters!');
