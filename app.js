// Data Storage
let essays = [];
let currentEditId = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadEssays();
    renderEssays();
    updateStats();
    populateCategoryFilter();
    
    // Check if there's an edit parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('edit');
    if (editId) {
        editEssay(parseInt(editId));
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});

// Load essays from localStorage
function loadEssays() {
    const stored = localStorage.getItem('essays');
    if (stored) {
        essays = JSON.parse(stored);
    } else {
        // Add sample essays for demonstration
        essays = [
            {
                id: Date.now() + 1,
                title: "The Impact of Artificial Intelligence on Modern Education",
                author: "Sarah Johnson",
                category: "Future Tech",
                excerpt: "Exploring how AI is revolutionizing the way we learn and teach, from personalized learning experiences to automated grading systems.",
                content: "Artificial Intelligence (AI) has become one of the most transformative technologies of our time, and its impact on education is profound and far-reaching. As we stand at the intersection of technology and pedagogy, it's crucial to examine how AI is reshaping the educational landscape.\n\nPersonalized Learning Experiences\nOne of the most significant contributions of AI to education is the ability to create personalized learning experiences. Traditional classroom settings often struggle to cater to individual learning paces and styles. AI-powered adaptive learning platforms can analyze a student's performance in real-time, identifying strengths and weaknesses, and adjusting the curriculum accordingly. This ensures that each student receives content that matches their current level of understanding, making learning more efficient and engaging.\n\nAutomated Assessment and Feedback\nAI has also revolutionized the assessment process. Automated grading systems can evaluate assignments, quizzes, and even essays with remarkable accuracy and speed. This not only reduces the workload for educators but also provides students with immediate feedback, allowing them to learn from their mistakes quickly. Moreover, AI can identify patterns in student errors, helping teachers understand common misconceptions and adjust their teaching strategies.\n\nVirtual Tutors and Assistants\nAI-powered virtual tutors are becoming increasingly sophisticated, offering 24/7 support to students. These digital assistants can answer questions, explain complex concepts, and guide students through problem-solving processes. While they cannot replace human teachers, they serve as valuable supplementary resources, especially for students who need extra help outside of regular class hours.\n\nChallenges and Considerations\nDespite its benefits, the integration of AI in education also presents challenges. Privacy concerns regarding student data, the digital divide that may exclude underprivileged students, and the need for teachers to adapt to new technologies are all important considerations. Additionally, there's the question of maintaining the human element in education – the empathy, creativity, and critical thinking that human teachers bring to the classroom.\n\nConclusion\nAs we move forward, it's essential to strike a balance between leveraging AI's capabilities and preserving the irreplaceable human aspects of education. AI should be viewed as a tool to enhance, not replace, traditional teaching methods. By thoughtfully integrating AI into our educational systems, we can create more inclusive, efficient, and effective learning environments for all students.",
                date: new Date(2026, 0, 5).toISOString()
            },
            {
                id: Date.now() + 2,
                title: "Digital Ethics: Navigating Privacy in the Age of Social Media",
                author: "Michael Chen",
                category: "Digital Ethics",
                excerpt: "An examination of privacy concerns in our interconnected world and the ethical responsibilities of both users and platforms.",
                content: "In today's hyper-connected world, social media platforms have become integral to our daily lives. We share our thoughts, photos, locations, and personal milestones with unprecedented ease. However, this convenience comes at a cost – our privacy. The question of digital ethics, particularly concerning privacy in the age of social media, has never been more relevant.\n\nThe Privacy Paradox\nWe live in what researchers call the 'privacy paradox.' While most people express concern about their online privacy, their actions often contradict these concerns. We willingly share personal information, accept terms and conditions without reading them, and grant apps extensive permissions to our data. This disconnect between attitude and behavior highlights the complexity of privacy in the digital age.\n\nData Collection and Surveillance\nSocial media platforms collect vast amounts of data about their users – not just what we explicitly share, but also our browsing habits, location data, and even the time we spend looking at specific posts. This data is used to create detailed profiles for targeted advertising, but it also raises serious ethical questions. Who owns this data? How is it being used? And most importantly, are users truly aware of the extent of data collection?\n\nThe Role of Platform Responsibility\nSocial media companies have an ethical obligation to protect user privacy. This includes being transparent about data collection practices, providing users with meaningful control over their information, and implementing robust security measures. Recent data breaches and scandals have shown that many platforms have failed in these responsibilities, leading to calls for stricter regulation.\n\nUser Responsibility and Digital Literacy\nWhile platforms must be held accountable, users also have a responsibility to educate themselves about digital privacy. This includes understanding privacy settings, being mindful of what information is shared, and recognizing the long-term implications of our digital footprint. Digital literacy should be a fundamental part of modern education.\n\nFinding Balance\nThe challenge lies in finding a balance between the benefits of social media – connection, information sharing, and community building – and the protection of individual privacy. This requires a multi-faceted approach involving regulation, corporate responsibility, and user awareness.\n\nConclusion\nAs we navigate the digital landscape, we must remain vigilant about privacy concerns while actively participating in shaping ethical standards for social media use. The future of digital privacy depends on our collective actions today – both as individuals and as a society.",
                date: new Date(2026, 0, 3).toISOString()
            },
            {
                id: Date.now() + 3,
                title: "Climate Change: The Urgent Call for Global Action",
                author: "Emma Rodriguez",
                category: "Environment",
                excerpt: "Understanding the science behind climate change and why immediate action is crucial for our planet's future.",
                content: "Climate change is no longer a distant threat – it is a present reality that affects every corner of our planet. From rising sea levels to extreme weather events, the evidence is overwhelming and the need for action is urgent.\n\nThe Science is Clear\nThe scientific consensus on climate change is unequivocal. Global temperatures have risen by approximately 1.1°C since the pre-industrial era, primarily due to human activities, particularly the burning of fossil fuels. This warming has triggered a cascade of environmental changes: melting ice caps, rising sea levels, ocean acidification, and disrupted ecosystems.\n\nVisible Impacts\nThe effects of climate change are no longer abstract predictions – they are visible in our daily lives. More frequent and intense hurricanes, prolonged droughts, devastating wildfires, and unprecedented heatwaves have become the new normal. These events not only cause immediate destruction but also have long-term economic and social consequences.\n\nThe Human Cost\nClimate change disproportionately affects vulnerable populations. Small island nations face existential threats from rising sea levels. Agricultural communities struggle with changing weather patterns. The poorest communities, who have contributed least to the problem, often suffer the most severe consequences.\n\nThe Path Forward\nAddressing climate change requires coordinated global action on multiple fronts. We must transition to renewable energy sources, improve energy efficiency, protect and restore natural ecosystems, and adapt our infrastructure to a changing climate. Individual actions matter, but systemic change driven by policy and corporate responsibility is essential.\n\nReason for Hope\nDespite the challenges, there are reasons for optimism. Renewable energy technologies are becoming more affordable and efficient. Many countries and corporations have committed to net-zero emissions. Youth movements are demanding action, and public awareness is growing.\n\nConclusion\nThe climate crisis is the defining challenge of our generation. While the task ahead is daunting, it is not insurmountable. With collective will, innovative solutions, and immediate action, we can create a sustainable future for generations to come. The time to act is now.",
                date: new Date(2026, 0, 1).toISOString()
            }
        ];
        saveEssays();
    }
}

// Save essays to localStorage
function saveEssays() {
    localStorage.setItem('essays', JSON.stringify(essays));
}

// Render essays
function renderEssays() {
    const grid = document.getElementById('essaysGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (essays.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    grid.innerHTML = essays.map(essay => `
        <div class="essay-card" data-id="${essay.id}">
            <div class="essay-card-header">
                <div class="essay-category-tag">${essay.category}</div>
                <h3 class="essay-card-title">${essay.title}</h3>
            </div>
            <div class="essay-card-body">
                <p class="essay-excerpt">${essay.excerpt}</p>
                <p class="essay-meta">by ${essay.author} • ${formatDate(essay.date)}</p>
                <div class="essay-actions">
                    <button class="btn-read" onclick="viewEssay(${essay.id})">
                        Read Essay
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="btn-icon" onclick="editEssay(${essay.id}); event.stopPropagation();" title="Edit">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 2.25C12.9489 2.05109 13.1843 1.89266 13.4433 1.78373C13.7022 1.6748 13.9796 1.61768 14.26 1.61768C14.5404 1.61768 14.8178 1.6748 15.0767 1.78373C15.3357 1.89266 15.5711 2.05109 15.77 2.25C15.9689 2.44891 16.1273 2.68426 16.2363 2.94323C16.3452 3.2022 16.4023 3.47961 16.4023 3.76C16.4023 4.04039 16.3452 4.3178 16.2363 4.57677C16.1273 4.83574 15.9689 5.07109 15.77 5.27L5.77 15.27L1.5 16.5L2.73 12.23L12.75 2.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="btn-icon delete" onclick="deleteEssay(${essay.id}); event.stopPropagation();" title="Delete">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 4.5H3.75H15.75M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter essays
function filterEssays() {
    const category = document.getElementById('categoryFilter').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = essays;
    
    if (category !== 'all') {
        filtered = filtered.filter(essay => essay.category === category);
    }
    
    if (search) {
        filtered = filtered.filter(essay => 
            essay.title.toLowerCase().includes(search) ||
            essay.author.toLowerCase().includes(search) ||
            essay.excerpt.toLowerCase().includes(search) ||
            essay.content.toLowerCase().includes(search)
        );
    }
    
    const grid = document.getElementById('essaysGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (filtered.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        emptyState.innerHTML = `
            <div class="empty-icon">🔍</div>
            <h3>No Essays Found</h3>
            <p>Try adjusting your search or filter criteria.</p>
        `;
        return;
    }
    
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    grid.innerHTML = filtered.map(essay => `
        <div class="essay-card" data-id="${essay.id}">
            <div class="essay-card-header">
                <div class="essay-category-tag">${essay.category}</div>
                <h3 class="essay-card-title">${essay.title}</h3>
            </div>
            <div class="essay-card-body">
                <p class="essay-excerpt">${essay.excerpt}</p>
                <p class="essay-meta">by ${essay.author} • ${formatDate(essay.date)}</p>
                <div class="essay-actions">
                    <button class="btn-read" onclick="viewEssay(${essay.id})">
                        Read Essay
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="btn-icon" onclick="editEssay(${essay.id}); event.stopPropagation();" title="Edit">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 2.25C12.9489 2.05109 13.1843 1.89266 13.4433 1.78373C13.7022 1.6748 13.9796 1.61768 14.26 1.61768C14.5404 1.61768 14.8178 1.6748 15.0767 1.78373C15.3357 1.89266 15.5711 2.05109 15.77 2.25C15.9689 2.44891 16.1273 2.68426 16.2363 2.94323C16.3452 3.2022 16.4023 3.47961 16.4023 3.76C16.4023 4.04039 16.3452 4.3178 16.2363 4.57677C16.1273 4.83574 15.9689 5.07109 15.77 5.27L5.77 15.27L1.5 16.5L2.73 12.23L12.75 2.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="btn-icon delete" onclick="deleteEssay(${essay.id}); event.stopPropagation();" title="Delete">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 4.5H3.75H15.75M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Update statistics
function updateStats() {
    document.getElementById('totalEssays').textContent = essays.length;
    
    const categories = [...new Set(essays.map(e => e.category))];
    document.getElementById('totalCategories').textContent = categories.length;
    
    const authors = [...new Set(essays.map(e => e.author))];
    document.getElementById('totalAuthors').textContent = authors.length;
}

// Populate category filter
function populateCategoryFilter() {
    const categories = [...new Set(essays.map(e => e.category))];
    const select = document.getElementById('categoryFilter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

// Show add essay modal
function showAddEssayModal() {
    currentEditId = null;
    document.getElementById('modalTitle').textContent = 'Add New Essay';
    document.getElementById('submitBtnText').textContent = 'Publish Essay';
    document.getElementById('essayForm').reset();
    document.getElementById('essayId').value = '';
    document.getElementById('essayModal').classList.add('active');
}

// Edit essay
function editEssay(id) {
    const essay = essays.find(e => e.id === id);
    if (!essay) return;
    
    currentEditId = id;
    document.getElementById('modalTitle').textContent = 'Edit Essay';
    document.getElementById('submitBtnText').textContent = 'Update Essay';
    document.getElementById('essayTitle').value = essay.title;
    document.getElementById('essayAuthor').value = essay.author;
    document.getElementById('essayCategory').value = essay.category;
    document.getElementById('essayExcerpt').value = essay.excerpt;
    document.getElementById('essayContent').value = essay.content;
    document.getElementById('essayId').value = id;
    document.getElementById('essayModal').classList.add('active');
}

// View essay - redirect to read page
function viewEssay(id) {
    window.location.href = 'read-essay.html?id=' + id;
}

// Save essay
function saveEssay(event) {
    event.preventDefault();
    
    const title = document.getElementById('essayTitle').value;
    const author = document.getElementById('essayAuthor').value;
    const category = document.getElementById('essayCategory').value;
    const excerpt = document.getElementById('essayExcerpt').value;
    const content = document.getElementById('essayContent').value;
    const id = document.getElementById('essayId').value;
    
    if (id) {
        // Update existing essay
        const index = essays.findIndex(e => e.id === parseInt(id));
        if (index !== -1) {
            essays[index] = {
                ...essays[index],
                title,
                author,
                category,
                excerpt,
                content
            };
        }
    } else {
        // Add new essay
        const newEssay = {
            id: Date.now(),
            title,
            author,
            category,
            excerpt,
            content,
            date: new Date().toISOString()
        };
        essays.unshift(newEssay);
    }
    
    saveEssays();
    renderEssays();
    updateStats();
    populateCategoryFilter();
    closeModal();
}

// Delete essay
function deleteEssay(id) {
    if (!confirm('Are you sure you want to delete this essay? This action cannot be undone.')) {
        return;
    }
    
    essays = essays.filter(e => e.id !== id);
    saveEssays();
    renderEssays();
    updateStats();
    populateCategoryFilter();
}

// Close modal
function closeModal() {
    document.getElementById('essayModal').classList.remove('active');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
