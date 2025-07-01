#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

# Tao Te Ching chapter data
chapters = [
    {
        'number': 1,
        'title': "The Eternal Tao",
        'chinese': """道可道，非常道。
名可名，非常名。
無名天地之始，
有名萬物之母。
故常無欲，以觀其妙；
常有欲，以觀其徼。
此兩者，同出而異名，
同謂之玄。
玄之又玄，
眾妙之門。""",
        'english': """The Tao that can be spoken is not the eternal Tao.
The name that can be named is not the eternal name.
The nameless is the beginning of heaven and earth.
The named is the mother of ten thousand things.
Ever desireless, one can see the mystery.
Ever desiring, one can see the manifestations.
These two spring from the same source but differ in name;
this appears as darkness.
Darkness within darkness.
The gate to all mystery."""
    },
    {
        'number': 2,
        'title': "The Relativity of Virtue",
        'chinese': """天下皆知美之為美，斯惡已。
皆知善之為善，斯不善已。
故有無相生，
難易相成，
長短相較，
高下相傾，
音聲相和，
前後相隨。
是以聖人處無為之事，
行不言之教；
萬物作焉而不辭，
生而不有，
為而不恃，
功成而弗居。
夫唯弗居，是以不去。""",
        'english': """When people see some things as beautiful,
other things become ugly.
When people see some things as good,
other things become bad.
Being and non-being create each other.
Difficult and easy support each other.
Long and short define each other.
High and low depend on each other.
Sound and silence complement each other.
Front and back follow each other.
Therefore the sage goes about doing nothing,
teaching without words.
Ten thousand things rise and fall without cease,
creating, yet not possessing,
working, yet not taking credit.
Work is done, then forgotten.
Therefore it lasts forever."""
    },
    {
        'number': 3,
        'title': "Keeping the People Simple",
        'chinese': """不尚賢，使民不爭；
不貴難得之貨，使民不為盜；
不見可欲，使民心不亂。
是以聖人之治，
虛其心，
實其腹，
弱其志，
強其骨。
常使民無知無欲。
使夫智者不敢為也。
為無為，則無不治。""",
        'english': """Not exalting the gifted prevents quarreling.
Not collecting treasures prevents stealing.
Not seeing desirable things prevents confusion of the heart.
The wise therefore rule by emptying hearts and filling cores,
by weakening ambitions and strengthening bones.
If people lack knowledge and desire,
then intellectuals will not try to interfere.
If nothing is done, then all will be well."""
    }
]

# Add placeholder chapters for demonstration (4-81)
for i in range(4, 82):
    chapters.append({
        'number': i,
        'title': f"Chapter {i}",
        'chinese': f"""第{i}章原文

道德經第{i}章的中文原文應該在這裡顯示。這是一個示例文本，用於展示網站的結構和設計。在實際實施中，這裡應該包含道德經第{i}章的完整中文原文。

這個網站展示了如何以現代化的方式呈現古代智慧，結合了優雅的設計和實用的功能。""",
        'english': f"""Chapter {i} English Translation

This is where the English translation of Chapter {i} of the Tao Te Ching would appear. This is sample text to demonstrate the website structure and design. In the actual implementation, this should contain the complete English translation of Chapter {i} of the Tao Te Ching.

The translation would capture the profound wisdom and philosophical insights contained in Laozi's ancient text, making it accessible to English-speaking readers while preserving the essence of the original Chinese meaning.

Each chapter contains timeless wisdom that remains relevant to modern life and spiritual practice."""
    })

def generate_chapter_html(chapter):
    """Generate HTML content for a single chapter"""
    prev_chapter = chapter['number'] - 1 if chapter['number'] > 1 else None
    next_chapter = chapter['number'] + 1 if chapter['number'] < 81 else None
    
    chinese_formatted = chapter['chinese'].strip().replace('\n', '<br>\n                    ')
    english_formatted = chapter['english'].strip().replace('\n', '<br>\n                    ')
    
    prev_nav = f'<a href="chapter-{prev_chapter}.html" class="nav-link">← Chapter {prev_chapter}</a>' if prev_chapter else '<span class="nav-link disabled">← Previous</span>'
    next_nav = f'<a href="chapter-{next_chapter}.html" class="nav-link">Chapter {next_chapter} →</a>' if next_chapter else '<span class="nav-link disabled">Next →</span>'
    
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter {chapter['number']}: {chapter['title']} - Tao Te Ching</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1 class="logo">Tao Te Ching</h1>
            <p class="subtitle">道德经 - The Way of Virtue</p>
        </div>
    </header>

    <main class="chapter-page">
        <div class="chapter-header">
            <div class="chapter-page-number">Chapter {chapter['number']}</div>
            <h1 class="chapter-page-title">{chapter['title']}</h1>
        </div>

        <div class="chapter-content">
            <div class="text-section">
                <div class="text-label">Original Chinese Text</div>
                <div class="chinese-text">
                    {chinese_formatted}
                </div>
            </div>

            <div class="text-section">
                <div class="text-label">English Translation</div>
                <div class="english-text">
                    {english_formatted}
                </div>
            </div>
        </div>

        <nav class="chapter-nav">
            {prev_nav}
            <a href="index.html" class="nav-link home-link">Home</a>
            {next_nav}
        </nav>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Tao Te Ching Reading Site. Ancient wisdom for modern times.</p>
        </div>
    </footer>
</body>
</html>"""

def generate_all_chapters():
    """Generate all chapter HTML files"""
    print(f"Starting to generate {len(chapters)} chapter pages...")
    
    generated_count = 0
    for chapter in chapters:
        try:
            html = generate_chapter_html(chapter)
            filename = f"chapter-{chapter['number']}.html"
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(html)
            
            generated_count += 1
            if generated_count % 10 == 0 or generated_count <= 5:
                print(f"Generated {filename} ({generated_count}/{len(chapters)})")
        except Exception as e:
            print(f"Error generating chapter {chapter['number']}: {e}")
    
    print(f"Successfully generated all {generated_count} chapter pages!")

if __name__ == "__main__":
    print("Script started...")
    generate_all_chapters()
    print("Script completed.") 