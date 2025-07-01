const fs = require('fs');
const path = require('path');

console.log('Script starting...');

try {
    const { chapters } = require('./script.js');
    console.log(`Successfully imported ${chapters.length} chapters.`);

    // HTML template for chapter pages using Tailwind CSS
    function generateChapterHTML(chapter) {
        const prevChapter = chapter.number > 1 ? chapter.number - 1 : null;
        const nextChapter = chapter.number < chapters.length ? chapter.number + 1 : null;

        // Preserve line breaks for pre-formatted text
        const chineseFormatted = chapter.chinese.replace(/\n/g, '<br>');
        const englishFormatted = chapter.english.replace(/\n/g, '<br>');

        return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter ${chapter.number}: ${chapter.title} - Tao Te Ching</title>
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
                <span class="text-md font-semibold text-blue-600">Chapter ${chapter.number}</span>
                <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">${chapter.title}</h2>
            </header>

            <div class="space-y-12">
                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">Original Chinese</h3>
                    <div class="font-serif text-xl md:text-2xl text-gray-800 leading-loose">
                        ${chineseFormatted}
                    </div>
                </section>

                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">English Translation</h3>
                    <p class="text-gray-700 leading-relaxed md:text-lg">
                        ${englishFormatted}
                    </p>
                </section>
            </div>

            <nav class="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
                ${prevChapter ? `<a href="chapter-${prevChapter}.html" class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">← Chapter ${prevChapter}</a>` : '<div></div>'}
                <a href="index.html" class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Back to All Chapters</a>
                ${nextChapter ? `<a href="chapter-${nextChapter}.html" class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">Chapter ${nextChapter} →</a>` : '<div></div>'}
            </nav>
        </div>
    </main>

    <footer class="bg-gray-100 border-t border-gray-200 mt-16">
        <div class="container mx-auto px-6 py-6 text-center text-gray-500">
            <p>&copy; 2024 Tao Te Ching Reading Site. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
    }

    // Generate all chapter files
    function generateAllChapters() {
        console.log('Starting file generation process...');
        const outputDir = path.resolve(__dirname);

        if (!fs.existsSync(outputDir)) {
            console.log(`Creating directory: ${outputDir}`);
            fs.mkdirSync(outputDir);
        }
        
        chapters.forEach(chapter => {
            const filename = path.join(outputDir, `chapter-${chapter.number}.html`);
            console.log(`Generating ${filename}...`);
            const html = generateChapterHTML(chapter);
            fs.writeFileSync(filename, html, 'utf8');
            console.log(`Successfully wrote ${filename}`);
        });
        
        console.log(`--- Generation Complete ---`);
        console.log(`Successfully generated all ${chapters.length} chapter pages!`);
    }

    // Run the generator
    if (require.main === module) {
        generateAllChapters();
    }

    module.exports = { generateAllChapters };

} catch (error) {
    console.error('An error occurred:', error);
} 