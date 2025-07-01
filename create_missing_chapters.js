// 简单的章节生成器 - 生成缺失章节的HTML内容
// 由于没有Node.js，这个文件可以在浏览器控制台中运行

// 标准章节模板
function generateChapterHTML(chapterNumber) {
    const prevChapter = chapterNumber > 1 ? chapterNumber - 1 : null;
    const nextChapter = chapterNumber < 81 ? chapterNumber + 1 : null;
    
    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter ${chapterNumber} - Tao Te Ching</title>
    <meta name="description" content="Read Chapter ${chapterNumber} of the Tao Te Ching. Original Chinese text with English translation.">
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
                <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Chapter ${chapterNumber}</h2>
            </header>

            <div class="space-y-12">
                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">Original Chinese</h3>
                    <div class="font-serif text-xl md:text-2xl text-gray-800 leading-loose">
                        第${chapterNumber}章原文<br>
                        此處應包含道德經第${chapterNumber}章的中文原文...
                    </div>
                </section>

                <section>
                    <h3 class="text-lg font-semibold uppercase tracking-wider text-gray-500 border-b pb-3 mb-6">English Translation</h3>
                    <p class="text-gray-700 leading-relaxed md:text-lg">
                        Chapter ${chapterNumber} English translation<br>
                        This should contain the English translation of Chapter ${chapterNumber} of the Tao Te Ching...
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
                ${prevChapter ? 
                    `<a href="chapter-${prevChapter}.html" class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">← Chapter ${prevChapter}</a>` :
                    '<div></div>'
                }
                <a href="index.html" class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Back to All Chapters</a>
                ${nextChapter ? 
                    `<a href="chapter-${nextChapter}.html" class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">Chapter ${nextChapter} →</a>` :
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

// 需要创建的章节列表（排除已存在的）
const existingChapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,43,44,45,46,47,48,49,50,60,70,80,81];
const missingChapters = [];

for (let i = 1; i <= 81; i++) {
    if (!existingChapters.includes(i)) {
        missingChapters.push(i);
    }
}

// 在浏览器控制台中运行此函数来生成所有缺失章节的HTML
function generateAllMissingChapters() {
    missingChapters.forEach(chapterNum => {
        const html = generateChapterHTML(chapterNum);
        console.log(`=== Chapter ${chapterNum} HTML ===`);
        console.log(html);
        console.log('\n');
    });
}

// 使用说明:
// 1. 在浏览器控制台中粘贴此代码
// 2. 运行 generateAllMissingChapters()
// 3. 复制输出的HTML内容到对应的chapter-XX.html文件中 