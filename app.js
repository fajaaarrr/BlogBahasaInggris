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
        // Fixed essays - cannot be added or deleted, only edited
        essays = [
            {
                id: 1,
                title: "Social Media Algorithms and the Psychological Impact on Online Shoppers",
                author: "A'isyah Belqis Febi Aulia",
                category: "Digital Ethics",
                excerpt: "Social media platforms, powered by sophisticated ICT infrastructure, have transformed into personalized retail spaces. While algorithmic personalization enhances shopping efficiency, its pervasive use risks creating consumers susceptible to psychological manipulation, primarily manifesting as increased impulse buying.",
                content: "Social media platforms, powered by sophisticated Information and Communication Technology (ICT) infrastructure, have fundamentally transformed from mere communication tools into the world's most accessible and personalized retail spaces. In the modern era, the digital landscape is no longer a passive directory but an active, intelligent environment that anticipates user desires before the users themselves may even be aware of them. Algorithms now track every click, like, and \"dwell-time\" (the duration spent looking at a specific post) of users, creating highly detailed consumer profiles. These digital dossiers are leveraged to drive online shopping behavior with surgical precision. While proponents argue that algorithmic personalization offers unparalleled convenience by surfacing highly relevant products, critics warn that this constant, targeted exposure exploits psychological vulnerabilities. Although algorithmic personalization enhances the efficiency of the online shopping experience, its pervasive and uncritical use risks creating a generation of consumers susceptible to psychological manipulation, primarily manifesting as increased impulse buying and a detrimental blurring of genuine needs versus curated wants.\n\nThe primary argument in favor of social media algorithms is that they maximize shopping efficiency and convenience to a degree previously unimaginable. In the traditional retail model, a consumer had to invest significant time and effort to find a product that matched their specific tastes and budget. Today, algorithms significantly reduce the search time for desired goods by instantly filtering content based on historical behavior, demographic data, and current trends. Shoppers can view targeted advertisements for products they have merely discussed near their phone or see items highly rated by friends, immediately accessible via a single \"Buy Now\" click. This capability accelerates the user journey from discovery to purchase, eliminating the friction of browsing through irrelevant inventory. For time poor individuals in a fast paced global economy, this streamlined process is exceptionally satisfying in the short term, as it provides a frictionless path to gratification and ensures that the digital content they consume is tailored to their specific lifestyle.\n\nHowever, this high degree of personalization serves as a double edged sword, as it fuels psychological mechanisms that lead to chronic impulse buying. When users are continuously exposed to perfectly targeted products, algorithms exploit deep seated cognitive biases, specifically the concepts of Urgency and Scarcity. Features such as \"only 3 left in stock,\" \"flash sale ends in 2 hours,\" or \"trending now in your area\" are algorithmically presented to appear at the exact moment a user is most engaged. These tactics are designed to bypass the prefrontal cortex the part of the brain responsible for rational decision making and long term planning and instead trigger the amygdala, which handles immediate emotional responses. This constant bombardment weakens the user's ability to deliberate or exercise self control. Consequently, consumers become reactive to artificially created pressure rather than proactive in managing their personal budgets and true requirements, leading to \"buyer's remorse\" and potential financial distress.\n\nBeyond individual impulses, social algorithms cultivate a profound distortion of consumer needs by creating the illusion of social proof and aspirational lifestyles. Modern algorithms prioritize content from influencers, peers, and trending users, showcasing products not as mere tools, but as essential components of a desirable, high status identity. This creates a powerful sense of Fear of Missing Out (FOMO), particularly among younger demographics who are more sensitive to social hierarchy. In this environment, the value of a product becomes less about its objective utility and more about its role in maintaining a social identity or keeping up with perceived trends. The algorithm effectively traps users in an \"aspirational echo chamber,\" where every displayed image and video reinforces the idea that their current life or possessions are inadequate. By converting latent desires into perceived necessities, these platforms manipulate the consumer's internal compass, making it increasingly difficult to distinguish between a functional need and a curated, algorithmic want.\n\nIn summary, while social media algorithms undeniably optimize the efficiency and speed of online shopping, this efficiency comes at a significant cost to consumer autonomy. The transition from active searching to passive consumption leaves users psychologically vulnerable to manipulation, leading to impulsive financial decisions and a confused sense of priority. The convenience of seeing exactly what one wants is often outweighed by the loss of the ability to choose not to want. As we look toward the future of e-commerce, it is imperative to balance the power of ICT-driven personalization with ethical design. Technology should serve the shopper's convenience without undermining their capacity for rational, conscious choice. Ultimately, fostering healthy consumption habits requires a digital environment that respects the human psyche rather than exploiting its weaknesses for the sake of a conversion rate.",
                date: new Date(2026, 0, 7).toISOString()
            },
            {
                id: 2,
                title: "The Digital Privacy Paradox: Protecting Personal Data in the Age of Social Media",
                author: "Athallah Zaki Ramatiansyah",
                category: "Digital Ethics",
                excerpt: "In the digital age, personal information has become valuable digital assets. However, widespread data collection poses significant privacy risks. Understanding the Privacy Paradox and taking protective steps is crucial for safeguarding our digital future.",
                content: "Amidst rapid digital transformation, the way we communicate and share information has changed globally thanks to the internet and social media. Today, data flows across national borders instantly, turning our personal information into valuable digital assets, often referred to as \"new oil.\" However, this convenience carries significant privacy risks due to widespread data collection.\n\nGlobal Data Breach Trends 2025\n\nThe vulnerability of today's digital world is at an alarming level. By early 2025, nearly 94 million pieces of data had been leaked worldwide. The financial impact is also significant, with the average loss due to data breaches reaching around USD 4.44 million.\n\nInterestingly, the main cause of these leaks is not always sophisticated cyber attacks, but rather human error, which accounts for around 60% of total cases. In the Asia Pacific region alone, around 40% of online users have experienced unauthorized access to their personal information.\n\nThe Digital Security Landscape in Indonesia\n\nWith an internet penetration rate of 80.66%, users in Indonesia face a variety of real security incidents. Some of the main problems that often occur include:\n\n- Online Fraud: Experienced by 22.12% of users.\n- Malware and Viruses: Affecting 14.36% of users.\n- Data Theft: Including hacking and phishing.\n\nUnderstanding the \"Privacy Paradox\"\n\nWhy are we still vulnerable? This is due to the Privacy Paradox, where users are concerned about their privacy but often ignore protective practices for the sake of convenience.\n\nMany users voluntarily provide sensitive information for short-term gains, such as:\n\n- 23.90% of users share data for promotions or discounts.\n- 16.45% of users share data to enter competitions or giveaways.\n\nOther risky habits include using weak or repeated passwords, clicking on unknown links, and using \"instant login\" options without checking access permissions. As a result, 16 billion login credentials are exposed online, including accounts on major platforms like Facebook and Google.\n\nSteps Towards Better Protection\n\nPrivacy is a fundamental right that means having control over how personal data is shared, stored, and disclosed. Protecting our digital future requires collaboration from various parties:\n\n- For the Government: Strengthen comprehensive data protection laws, mandate transparency, and ensure reporting of data breaches.\n- For Service Providers: Implement privacy-by-design principles, provide clear consent options to users, and use strong encryption and authentication.\n- For Users: Use unique and strong passwords, enable two-factor authentication (2FA), and always exercise caution when sharing personal information.\n\nIf privacy is left unprotected, millions of people will remain vulnerable to identity theft and financial loss.",
                date: new Date(2026, 0, 6).toISOString()
            },
            {
                id: 3,
                title: "The Digital Paradigm Shift: Why Remote Work Eclipses the Traditional Office",
                author: "Davin Syah Putra Antoro",
                category: "Technology",
                excerpt: "The digital transformation has fundamentally changed how we perceive the workplace. Remote work offers unprecedented flexibility, but also presents challenges in productivity and work-life boundaries that require careful management.",
                content: "Amidst rapid digital transformation, the way we perceive the workplace has changed globally thanks to the internet and cloud computing. Today, professional tasks flow across national borders instantly, turning our laptops and home offices into the primary hubs of the global economy. However, this convenience carries significant challenges regarding productivity and work-life boundaries due to the lack of physical oversight.\n\nGlobal Remote Work Trends 2026\n\nThe evolution of the modern workspace is moving at an unprecedented pace. By early 2025, nearly 94 million professionals worldwide had transitioned to full-time or hybrid remote models. The financial impact is also significant, with the average corporate savings from reduced office overhead reaching around USD 4.44 million for large-scale firms. Interestingly, the main cause of failure in remote setups is not always a lack of technology, but rather human error and poor time management, which account for a significant portion of productivity loss. In the Asia Pacific region alone, around 40% of the workforce now prefers remote flexibility over traditional office attendance.\n\nThe Digital Workspace Landscape in Indonesia\n\nWith an internet penetration rate of 80.66%, workers in Indonesia face a variety of real-world challenges in this new era. Some of the main problems that often occur include:\n\n- Infrastructure Gaps: Unstable connections affecting 22.12% of remote workers.\n- Cybersecurity Risks: Malware and viruses targeting home networks, affecting 14.36% of users.\n- Digital Fatigue: Burnout resulting from constant connectivity and \"always-on\" expectations.\n\nUnderstanding the \"Flexibility Paradox\"\n\nWhy are some organizations still struggling with this shift? This is due to the Flexibility Paradox, where employees value their freedom but often ignore healthy work habits for the sake of short-term task completion. Many professionals voluntarily sacrifice their personal time for work gains, such as:\n\n- Sharing personal space and data for the sake of constant availability.\n- Engaging in \"digital presenteeism\" to prove they are working, often leading to longer, less efficient hours.\n- Using insecure public networks or \"instant login\" options for work tools without checking security permissions.\n\nSteps Towards a Better Remote Future\n\nSuccess in the digital age is a fundamental shift that requires control over how we manage our time and digital tools. Building a sustainable remote work culture requires collaboration from various parties:\n\n- For the Government: Strengthen labor laws to protect the \"right to disconnect\" and ensure fair digital infrastructure access.\n- For Service Providers: Implement privacy-by-design in collaboration tools and provide clear data usage options to users.\n- For Users: Use unique and strong digital boundaries, enable strict work-life schedules, and always exercise caution when mixing personal and professional devices.\n\nIf the digital paradigm shift is left unmanaged, millions of workers will remain vulnerable to burnout and the erosion of the boundary between public and private life.",
                date: new Date(2026, 0, 5).toISOString()
            },
            {
                id: 4,
                title: "The Transformative Role of Cloud Computing in Modern Education",
                author: "Muhammad Fajar Shodiq",
                category: "Education",
                excerpt: "Cloud computing has emerged as a cornerstone of pedagogical innovation, fundamentally altering the landscape of modern education by democratizing accessibility, fostering collaboration, and optimizing institutional efficiency.",
                content: "In the wake of the digital revolution, cloud computing has emerged as a cornerstone of pedagogical innovation, fundamentally altering the landscape of modern education. Historically, educational institutions were tethered to on-premise hardware and physical textbooks, limiting the scope of learning to the confines of a brick-and-mortar classroom. However, the advent of cloud technology—which enables the seamless storage, retrieval, and dissemination of information via the internet—has shifted this paradigm from traditional, static methodologies to dynamic, interconnected systems. By outsourcing computational power and data storage to remote servers, schools and universities can now deploy sophisticated learning management systems (LMS) without the burden of maintaining expensive local infrastructure. As usage expands globally, a critical discourse has arisen regarding the balance between operational efficiency and potential vulnerabilities. Ultimately, while challenges regarding data security and technical dependence persist, cloud computing serves as a pivotal catalyst in modern education by democratizing accessibility, fostering robust collaboration, optimizing institutional efficiency, and enhancing pedagogical flexibility.\n\nFirst and foremost, cloud computing has been instrumental in democratizing access to educational resources, effectively dismantling geographical and socioeconomic barriers. In the past, high-quality education was often a privilege confined to those with access to well-funded libraries and physical institutions. Today, cloud infrastructure enables ubiquitous access to materials; students can retrieve lectures, assignments, and vast digital libraries from any location and on any device, be it a smartphone, tablet, or laptop. This \"anytime, anywhere\" accessibility is particularly transformative for students in remote or underserved areas, as well as for adult learners balancing education with employment. Furthermore, the cloud underpins the infrastructure required for remote and hybrid learning models. During global disruptions, such as the COVID-19 pandemic, cloud-based platforms like Zoom and Blackboard became lifelines, ensuring that educational continuity was maintained when physical attendance was impossible. This shift has normalized the concept of asynchronous learning, allowing students to digest complex materials at their own pace rather than being forced to keep up with a rigid classroom schedule.\n\nMoreover, the capacity of cloud computing to bolster collaboration and active learning is unparalleled. Contemporary platforms, such as Google Workspace for Education and Microsoft 365, have transcended simple file storage to become powerful hubs for synchronous cooperation. In a traditional setting, group projects were often plagued by logistical issues, such as version control conflicts and the difficulty of meeting in person. Cloud tools allow multiple stakeholders—students and educators alike—to co-author documents, analyze datasets, and construct presentations in real-time, regardless of their physical location. This functionality not only streamlines academic projects but also cultivates essential soft skills, such as digital teamwork, negotiation, and virtual communication, which are increasingly demanded in the modern workforce. From an instructional perspective, teachers can leverage these platforms to provide immediate, formative feedback directly within a student's document. This transforms the assessment process from a summative judgment at the end of a unit into an ongoing, interactive dialogue that guides student growth continuously.\n\nIn addition to pedagogical benefits, cloud computing offers significant economic and operational advantages for educational institutions. The transition from capital-intensive hardware to operational expenditure models allows schools to reduce costs significantly. Instead of purchasing expensive servers, software licenses, and maintenance services upfront, institutions can utilize a \"pay-as-you-go\" model offered by cloud providers. This scalability is crucial; a university can scale up its digital resources during peak exam periods and scale down during holidays, ensuring optimal resource allocation. Furthermore, cloud computing simplifies administrative tasks. Student information systems, grading portals, and attendance records stored in the cloud are easier to manage, update, and secure compared to paper-based records or isolated local servers. This efficiency frees up valuable resources and time, allowing administrators and educators to focus more on curriculum development and student welfare rather than IT troubleshooting.\n\nNevertheless, the widespread adoption of cloud-based ecosystems is not devoid of significant impediments that require careful management. The most pressing concern lies in the realm of data privacy and cybersecurity. Educational institutions hold vast amounts of sensitive data, including student academic records, personal identification information, and even financial details. By migrating this data to third-party servers, institutions expose themselves to potential breaches, ransomware attacks, and unauthorized surveillance. Although major cloud providers invest heavily in security, the responsibility also lies with schools to implement rigorous encryption standards, multi-factor authentication, and strict governance policies. Without these safeguards, the trust between the institution and its students can be irrevocably damaged.\n\nAnother critical challenge is the reliance on infrastructure and the persistent \"digital divide.\" The efficacy of cloud computing is intrinsically tied to the quality and reliability of internet connectivity. In developed urban centers, high-speed internet is often taken for granted; however, in rural regions and developing nations, bandwidth limitations can render cloud-based learning practically impossible. For students in these areas, the reliance on heavy, data-dependent cloud systems can exacerbate educational inequalities rather than resolve them. Furthermore, the potential for system outages or downtime poses a risk of disrupting the academic curriculum unexpectedly. If a central cloud service goes offline, it can halt lectures, prevent assignment submissions, and freeze administrative operations, highlighting the need for robust backup plans and offline contingencies.\n\nIn conclusion, cloud computing stands as a transformative force in the global educational sector, offering profound benefits in terms of accessibility, interactive collaboration, institutional efficiency, and systemic flexibility. It has redefined the classroom as a borderless entity where knowledge is available on demand. While the migration to the cloud introduces complex challenges—specifically concerning data integrity, cybersecurity risks, and the digital divide—these risks are manageable with prudent oversight, infrastructural investment, and comprehensive policy frameworks. As technology continues to evolve, the integration of cloud computing will likely deepen, serving as the foundational infrastructure for future advancements such as AI-driven personalized learning and immersive virtual reality classrooms. Therefore, stakeholders must embrace this technology with a balanced perspective, maximizing its vast potential while vigilantly mitigating its inherent risks to ensure an equitable and secure learning environment for all.",
                date: new Date(2026, 0, 4).toISOString()
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

// Disabled - essays are fixed and cannot be added
// function showAddEssayModal() {
//     currentEditId = null;
//     document.getElementById('modalTitle').textContent = 'Add New Essay';
//     document.getElementById('submitBtnText').textContent = 'Publish Essay';
//     document.getElementById('essayForm').reset();
//     document.getElementById('essayId').value = '';
//     document.getElementById('essayModal').classList.add('active');
// }

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
    }
    // Adding new essays is disabled
    
    saveEssays();
    renderEssays();
    updateStats();
    populateCategoryFilter();
    closeModal();
}

// Disabled - essays are fixed and cannot be deleted
// function deleteEssay(id) {
//     if (!confirm('Are you sure you want to delete this essay? This action cannot be undone.')) {
//         return;
//     }
//     
//     essays = essays.filter(e => e.id !== id);
//     saveEssays();
//     renderEssays();
//     updateStats();
//     populateCategoryFilter();
// }

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
