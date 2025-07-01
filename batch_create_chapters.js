const fs = require('fs');
const path = require('path');

// Template for chapter HTML pages
function generateChapterHTML(chapterNumber, title, chinese, english) {
    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter ${chapterNumber}: ${title} - Tao Te Ching</title>
    <meta name="description" content="Read Chapter ${chapterNumber} of the Tao Te Ching: ${title}. Original Chinese text with English translation.">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['Crimson Text', 'serif']
                    }
                }
            }
        }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-50 text-gray-800 font-sans">
    <header class="bg-white border-b border-gray-200">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div>
                <h1 class="text-xl md:text-2xl font-serif font-semibold text-gray-900">Tao Te Ching</h1>
                <p class="text-sm text-gray-500">The Way of Virtue</p>
            </div>
            <a href="index.html" class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Home</a>
        </div>
    </header>

    <main class="container mx-auto px-6 py-12 md:py-16">
        <div class="max-w-3xl mx-auto">
            <header class="text-center mb-12">
                <span class="text-md font-semibold text-blue-600">Chapter ${chapterNumber}</span>
                <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">${title}</h2>
            </header>

            <div class="space-y-12">
                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">Original Chinese</h3>
                    <div class="font-serif text-xl md:text-2xl text-gray-800 leading-loose">
                        ${chinese.replace(/\n/g, '<br>\n                        ')}
                    </div>
                </section>

                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">English Translation</h3>
                    <p class="text-gray-700 leading-relaxed md:text-lg">
                        ${english.replace(/\n/g, '<br>\n                        ')}
                    </p>
                </section>

                <section class="bg-blue-50 rounded-lg p-6 md:p-8">
                    <h3 class="text-lg font-semibold text-blue-900 mb-4">Reflection</h3>
                    <p class="text-blue-800 leading-relaxed">
                        This chapter explores the profound teachings of the Tao Te Ching, offering timeless wisdom 
                        for understanding the nature of existence and the path of virtue. The principles presented 
                        here guide us toward harmony with the natural order and deeper spiritual understanding.
                    </p>
                </section>
            </div>

            <nav class="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
                ${chapterNumber > 1 ? 
                    `<a href="chapter-${chapterNumber - 1}.html" class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">← Chapter ${chapterNumber - 1}</a>` :
                    '<div></div>'
                }
                <a href="index.html" class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Back to All Chapters</a>
                ${chapterNumber < 81 ? 
                    `<a href="chapter-${chapterNumber + 1}.html" class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">Chapter ${chapterNumber + 1} →</a>` :
                    '<div class="px-4 py-2 text-sm text-gray-400">Final Chapter</div>'
                }
            </nav>
        </div>
    </main>

    <footer class="bg-gray-100 border-t border-gray-200 mt-16">
        <div class="container mx-auto px-6 py-6 text-center text-gray-500">
            <p>&copy; 2024 Tao Te Ching Reading Site. All rights reserved.</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>`;
}

// Chapter data for missing chapters
const missingChapters = [
    // 48-49
    {
        number: 48,
        title: "Pursuing Learning vs Pursuing Tao",
        chinese: `為學日益，為道日損。\n損之又損，以至於無為。\n無為而無不為。\n取天下常以無事，\n及其有事，不足以取天下。`,
        english: `In pursuit of learning, every day something is added.\nIn pursuit of the Tao, every day something is dropped.\nLess and less is done\nuntil non-action is achieved.\nWhen nothing is done, nothing is left undone.\nThe world is ruled by letting things take their course.\nIt cannot be ruled by interfering.`
    },
    {
        number: 49,
        title: "The Sage's Heart",
        chinese: `聖人常無心，以百姓心為心。\n善者，吾善之；不善者，吾亦善之；\n德善。信者，吾信之；\n不信者，吾亦信之；德信。\n聖人在天下，歙歙焉，\n為天下渾其心，\n百姓皆注其耳目，\n聖人皆孩之。`,
        english: `The sage is guided by what he feels and not by what he sees.\nHe is good to people who are good.\nHe is also good to people who are not good.\nThis is true goodness.\nHe trusts people who are trustworthy.\nHe also trusts people who are not trustworthy.\nThis is true trust.`
    },
    // 51-59
    {
        number: 51,
        title: "The Virtue of the Tao",
        chinese: `道生之，德畜之，\n物形之，勢成之。\n是以萬物莫不尊道而貴德。\n道之尊，德之貴，\n夫莫之命而常自然。\n故道生之，德畜之；\n長之育之；成之熟之；\n養之覆之。\n生而不有，為而不恃，\n長而不宰。是謂玄德。`,
        english: `The Tao gives birth to One.\nOne gives birth to Two.\nTwo gives birth to Three.\nThree gives birth to all things.\nAll things have their backs to the female\nand stand facing the male.\nWhen male and female combine,\nall things achieve harmony.`
    },
    {
        number: 52,
        title: "Return to the Origin",
        chinese: `天下有始，以為天下母。\n既得其母，以知其子，\n既知其子，復守其母，\n沒身不殆。\n塞其兌，閉其門，\n終身不勤。\n開其兌，濟其事，\n終身不救。\n見小曰明，守柔曰強。\n用其光，復歸其明，\n無遺身殃；是為習常。`,
        english: `The universe has a beginning.\nCall it the mother of the universe.\nOnce you have the mother,\nyou can know the children.\nOnce you know the children,\nreturn and abide in the mother.\nYour whole life will be preserved from harm.\nBlock the openings,\nshut the doors,\nand all your life you will not toil.\nUnblock the openings,\nmultiply your activities,\nand all your life you will remain beyond help.`
    }
];

// Add more chapters (53-59, 61-69, 71-79)
for (let i = 53; i <= 79; i++) {
    if (i === 60 || i === 70) continue; // Skip already created chapters
    
    missingChapters.push({
        number: i,
        title: `Chapter ${i}`,
        chinese: `第${i}章原文\n此處應包含道德經第${i}章的中文原文...`,
        english: `Chapter ${i} English translation\nThis should contain the English translation of Chapter ${i} of the Tao Te Ching...`
    });
}

// Generate chapter files
function createMissingChapters() {
    console.log('Creating missing chapter files...');
    
    missingChapters.forEach(chapter => {
        const filename = `chapter-${chapter.number}.html`;
        
        // Check if file already exists
        if (fs.existsSync(filename)) {
            console.log(`Skipping ${filename} - already exists`);
            return;
        }
        
        const html = generateChapterHTML(chapter.number, chapter.title, chapter.chinese, chapter.english);
        
        try {
            fs.writeFileSync(filename, html, 'utf8');
            console.log(`Created ${filename}`);
        } catch (error) {
            console.error(`Error creating ${filename}:`, error.message);
        }
    });
    
    console.log('Batch creation complete!');
}

// Run the script
createMissingChapters(); 