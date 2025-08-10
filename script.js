// Tao Te Ching chapter data with Chinese original and English translation
const chapters = [
    {
        number: 1,
        title: "The Eternal Tao",
        chinese: `道可道，非常道。
名可名，非常名。
無名天地之始，
有名萬物之母。
故常無欲，以觀其妙；
常有欲，以觀其徼。
此兩者，同出而異名，
同謂之玄。
玄之又玄，
眾妙之門。`,
        english: `The Tao that can be spoken is not the eternal Tao.
The name that can be named is not the eternal name.
The nameless is the beginning of heaven and earth.
The named is the mother of ten thousand things.
Ever desireless, one can see the mystery.
Ever desiring, one can see the manifestations.
These two spring from the same source but differ in name;
this appears as darkness.
Darkness within darkness.
The gate to all mystery.`
    },
    {
        number: 2,
        title: "The Relativity of Virtue",
        chinese: `天下皆知美之為美，斯惡已。
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
夫唯弗居，是以不去。`,
        english: `When people see some things as beautiful,
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
Therefore it lasts forever.`
    },
    {
        number: 3,
        title: "Keeping the People Simple",
        chinese: `不尚賢，使民不爭；
不貴難得之貨，使民不為盜；
不見可欲，使民心不亂。
是以聖人之治，
虛其心，
實其腹，
弱其志，
強其骨。
常使民無知無欲。
使夫智者不敢為也。
為無為，則無不治。`,
        english: `Not exalting the gifted prevents quarreling.
Not collecting treasures prevents stealing.
Not seeing desirable things prevents confusion of the heart.
The wise therefore rule by emptying hearts and filling cores,
by weakening ambitions and strengthening bones.
If people lack knowledge and desire,
then intellectuals will not try to interfere.
If nothing is done, then all will be well.`
    },
    {
        number: 4,
        title: "The Sourceless Source",
        chinese: `道沖而用之或不盈。
淵兮，似萬物之宗；
湛兮，似或存。
吾不知誰之子，
象帝之先。`,
        english: `The Tao is like a well:
used but never used up.
It is like the eternal void:
filled with infinite possibilities.
It is hidden but always present.
I don't know who gave birth to it.
It is older than God.`
    },
    {
        number: 5,
        title: "Nature's Way",
        chinese: `天地不仁，以萬物為芻狗；
聖人不仁，以百姓為芻狗。
天地之間，其猶橐籥乎？
虛而不屈，動而愈出。
多言數窮，不如守中。`,
        english: `Heaven and earth are impartial;
they treat all things as straw dogs.
The sage is impartial;
he treats all people as straw dogs.
The space between heaven and earth is like a bellows.
The shape changes but not the form;
the more it moves, the more it yields.
More words count less.
Hold fast to the center.`
    },
    {
        number: 6,
        title: "The Valley Spirit",
        chinese: `谷神不死，是謂玄牝。
玄牝之門，是謂天地根。
綿綿若存，用之不勤。`,
        english: `The valley spirit never dies;
it is the woman, primal mother.
Her gateway is the root of heaven and earth.
It is like a veil barely seen.
Use it; it will never fail.`
    },
    {
        number: 7,
        title: "Living for Others",
        chinese: `天長地久。
天地所以能長且久者，以其不自生，故能長生。
是以聖人後其身而身先；
外其身而身存。
非以其無私邪？故能成其私。`,
        english: `Heaven and earth last forever.
Why do heaven and earth last forever?
They are unborn,
so ever living.
The sage stays behind, thus he is ahead.
He is detached, thus at one with all.
Through selfless action, he attains fulfillment.`
    },
    {
        number: 8,
        title: "Easy by Nature",
        chinese: `上善若水。
水善利萬物而不爭，
處眾人之所惡，故幾於道。
居善地，
心善淵，
與善仁，
言善信，
政善治，
事善能，
動善時。
夫唯不爭，故無尤。`,
        english: `The highest good is like water,
which nourishes all things and does not compete.
It dwells in places that all disdain.
This is why it is so near to Tao.
Live in accordance with the nature of things.
In dwelling, live close to the ground.
In thinking, keep to the simple.
In conflict, be fair and generous.
In governing, don't try to control.
In work, do what you enjoy.
In family life, be completely present.
When you are content to be simply yourself
and don't compare or compete,
everybody will respect you.`
    },
    {
        number: 9,
        title: "Knowing When to Stop",
        chinese: `持而盈之，不如其已；
揣而銳之，不可長保。
金玉滿堂，莫之能守；
富貴而驕，自遺其咎。
功遂身退，天之道也。`,
        english: `Better to stop short than fill to the brim.
Oversharpen the blade, and the edge will soon blunt.
Amass a store of gold and jade, and no one can protect it.
Claim wealth and titles, and disaster will follow.
Retire when the work is done.
This is the way of heaven.`
    },
    {
        number: 10,
        title: "Embracing Unity",
        chinese: `載營魄抱一，能無離乎？
專氣致柔，能嬰兒乎？
滌除玄覽，能無疵乎？
愛民治國，能無為乎？
天門開闔，能為雌乎？
明白四達，能無知乎？
生之畜之，
生而不有，
為而不恃，
長而不宰。
是謂玄德。`,
        english: `Carrying body and soul and embracing the one,
can you avoid separation?
Attending fully and becoming supple,
can you be as a newborn babe?
Washing and cleansing the primal vision,
can you be without stain?
Loving all people and ruling the country,
can you be without cleverness?
Opening and closing the gates of heaven,
can you play the role of woman?
Understanding and being open to all things,
are you able to do nothing?
Giving birth and nourishing,
bearing yet not possessing,
working yet not taking credit,
leading yet not dominating,
this is the Primal Virtue.`
    }
];

// Generate placeholder chapters (11-81)
for (let i = 11; i <= 81; i++) {
    // Add some known important chapters with proper content
    if (i === 43) {
        chapters.push({
            number: 43,
            title: "The Softest Overcomes the Hardest",
            chinese: `天下之至柔，驰骋天下之至坚。
无有入无间，吾是以知无为之有益。
不言之教，无为之益，
天下希及之。`,
            english: `The softest thing in the universe
Overcomes the hardest thing in the universe.
That without substance can enter where there is no room.
Hence I know the value of non-action.
Teaching without words and work without doing
Are understood by very few.`
        });
    } else if (i === 44) {
        chapters.push({
            number: 44,
            title: "Fame or Life",
            chinese: `名与身孰亲？
身与货孰多？
得与亡孰病？
甚爱必大费；
多藏必厚亡。
故知足不辱，
知止不殆，
可以长久。`,
            english: `Fame or life: which is more dear?
Life or wealth: which is worth more?
Gain or loss: which is more painful?
He who loves most spends most;
He who hoards most loses most.
The contented person is never disappointed;
He who knows when to stop does not find himself in trouble;
He will stay forever safe.`
        });
    } else if (i === 60) {
        chapters.push({
            number: 60,
            title: "Governing with the Tao",
            chinese: `治大国，若烹小鲜。
以道莅天下，
其鬼不神。`,
            english: `Governing a large country
is like cooking a small fish.
You spoil it with too much poking.
Center your country in the Tao
and evil will have no power.`
        });
    } else if (i === 81) {
        chapters.push({
            number: 81,
            title: "The Way of the Sage",
            chinese: `信言不美，美言不信。
善者不辩，辩者不善。
知者不博，博者不知。
圣人不积，
既以为人己愈有，
既以与人己愈多。
天之道，利而不害；
圣人之道，为而不争。`,
            english: `True words are not beautiful;
Beautiful words are not true.
Those who are good do not argue;
Those who argue are not good.
Those who know are not learned;
The learned do not know.
The sage does not accumulate anything,
but gives everything to others and has even more;
he gives to others and his abundance increases.
The way of heaven is to benefit others without harming;
The way of the sage is to act without competing.`
        });
    } else {
        chapters.push({
            number: i,
            title: `Chapter ${i}`,
            chinese: `第${i}章原文\n此處應包含道德經第${i}章的中文原文...`,
            english: `Chapter ${i} English translation\nThis should contain the English translation of Chapter ${i} of the Tao Te Ching...`
        });
    }
}

// Global variables
let filteredChapters = [...chapters];
let currentFilter = 'all';

// DOM elements
const chapterGrid = document.getElementById('chapterGrid');
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Reading progress management
class ReadingProgress {
    constructor() {
        this.readChapters = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('taoReadingProgress');
        return saved ? JSON.parse(saved) : [];
    }

    saveProgress() {
        localStorage.setItem('taoReadingProgress', JSON.stringify(this.readChapters));
    }

    markAsRead(chapterNumber) {
        if (!this.readChapters.includes(chapterNumber)) {
            this.readChapters.push(chapterNumber);
            this.saveProgress();
            this.updateUI();
        }
    }

    updateUI() {
        const progress = (this.readChapters.length / 81) * 100;
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        if (progressText) {
            progressText.textContent = `${this.readChapters.length} of 81 chapters read`;
        }
    }

    isRead(chapterNumber) {
        return this.readChapters.includes(chapterNumber);
    }
}

const readingProgress = new ReadingProgress();

// Search functionality
function performSearch(query) {
    if (!query.trim()) {
        hideSearchResults();
        return;
    }

    const results = chapters.filter(chapter => {
        const searchText = `${chapter.number} ${chapter.title} ${chapter.chinese} ${chapter.english}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });

    displaySearchResults(results);
}

function displaySearchResults(results) {
    if (!searchResults) return;
    
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="p-4 text-gray-500 text-center">No chapters found</div>';
    } else {
        results.forEach(chapter => {
            const item = document.createElement('a');
            item.href = `chapter-${chapter.number}.html`;
            item.className = 'search-result-item';
            
            const preview = chapter.english.substring(0, 100) + (chapter.english.length > 100 ? '...' : '');
            
            item.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="font-medium text-gray-900">Chapter ${chapter.number}: ${chapter.title}</div>
                        <div class="text-sm text-gray-600 mt-1">${preview}</div>
                    </div>
                    ${readingProgress.isRead(chapter.number) ? 
                        '<span class="ml-2 text-green-600 text-sm">✓ Read</span>' : 
                        '<span class="ml-2 text-gray-400 text-sm">Unread</span>'
                    }
                </div>
            `;
            
            searchResults.appendChild(item);
        });
    }
    
    searchResults.classList.remove('hidden');
}

function hideSearchResults() {
    if (searchResults) {
        searchResults.classList.add('hidden');
    }
}

// Chapter filtering
function filterChapters(filter) {
    currentFilter = filter;
    
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    // Filter chapters
    if (filter === 'all') {
        filteredChapters = [...chapters];
    } else {
        const [start, end] = filter.split('-').map(Number);
        filteredChapters = chapters.filter(chapter => 
            chapter.number >= start && chapter.number <= end
        );
    }
    
    renderChapterCards();
}

// Generate chapter cards for the homepage
function renderChapterCards() {
    if (!chapterGrid) return;
    
    chapterGrid.innerHTML = '';
    
    filteredChapters.forEach(chapter => {
        const card = document.createElement('a');
        card.href = `chapter-${chapter.number}.html`;
        card.className = `chapter-card block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all duration-300 relative ${
            readingProgress.isRead(chapter.number) ? 'ring-2 ring-green-500 ring-opacity-20' : ''
        }`;
        
        const preview = chapter.english.substring(0, 120) + (chapter.english.length > 120 ? '...' : '');
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="text-sm font-medium text-blue-600">Chapter ${chapter.number}</span>
                ${readingProgress.isRead(chapter.number) ? 
                    '<span class="text-green-600 text-sm">✓</span>' : 
                    '<span class="text-gray-300 text-sm">○</span>'
                }
            </div>
            <h3 class="font-serif text-xl font-semibold text-gray-900 mt-2 mb-3">${chapter.title}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">${preview}</p>
        `;
        
        // Add click handler to mark as read
        card.addEventListener('click', () => {
            readingProgress.markAsRead(chapter.number);
        });
        
        chapterGrid.appendChild(card);
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Search toggle
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchContainer.classList.toggle('hidden');
            if (!searchContainer.classList.contains('hidden')) {
                searchInput.focus();
            } else {
                hideSearchResults();
                searchInput.value = '';
            }
        });
    }

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchContainer.classList.add('hidden');
                hideSearchResults();
                searchInput.value = '';
            }
        });
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterChapters(btn.dataset.filter);
        });
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target) && !searchToggle.contains(e.target)) {
            hideSearchResults();
        }
    });
}

// Add CSS styles for new functionality
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .filter-btn {
            @apply px-6 py-3 text-sm font-medium border border-slate-300 rounded-xl transition-all duration-300 bg-white shadow-sm;
        }
        
        .filter-btn:hover {
            @apply bg-slate-50 border-slate-400 shadow-md transform -translate-y-0.5;
        }
        
        .filter-btn.active {
            @apply bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-600 shadow-lg transform -translate-y-0.5;
        }
        
        .chapter-card {
            @apply bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300 shadow-sm;
        }
        
        .chapter-card:hover {
            transform: translateY(-4px);
        }
        
        .search-highlight {
            @apply bg-yellow-200 px-1 rounded;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        #searchResults {
            animation: fadeIn 0.2s ease-out;
        }
        
        .search-result-item {
            @apply block p-4 hover:bg-slate-50 border-b border-slate-100 transition-colors rounded-lg;
        }
        
        .search-result-item:last-child {
            @apply border-b-0;
        }
    `;
    document.head.appendChild(style);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    addCustomStyles();
    initializeEventListeners();
    renderChapterCards();
    readingProgress.updateUI();
    
    // Check if we're on a chapter page and mark it as read
    const path = window.location.pathname;
    const chapterMatch = path.match(/chapter-(\d+)\.html/);
    if (chapterMatch) {
        const chapterNumber = parseInt(chapterMatch[1]);
        readingProgress.markAsRead(chapterNumber);
    }
});

// Export for use in Node.js environment (like generate-chapters.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chapters };
} 