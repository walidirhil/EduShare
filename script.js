// --- DATABASE : CONFIGURATION DES FICHIERS ---
// Cette base de données reflète exactement ton dossier "resources"

const db = {
    majors: [
        {
            id: "math",
            name: "Mathematics",
            icon: "calculator",
            semesters: [
                // ================= SECTION SEMESTRE 1 =================
                {
                    id: "s1",
                    name: "Semestre 1",
                    modules: [
                        {
                            name: "Algèbre 2",
                            resources: [
                                // Dossier: coure
                                { title: "Alg2 structure algébrique pr.Rikouane", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Algèbre 2/coure/Alg2 structure algébrique pr.Rikouane.pdf" },
                                { title: "Anneaux et corps", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Algèbre 2/coure/Anneaux et corps.pdf" },
                                { title: "Polynomes et Fractions Rationnelles", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Algèbre 2/coure/POLYNOMES ET FRACTIONS RATIONNELLS.pdf" },
                                // Dossier: TD1
                                { title: "TD1 (Image)", type: "TD", format: "img", link: "resources/mathematics/s1/Algèbre 2/TD1/TD1 .jpeg" },
                                { title: "Correction TD1 (Zip)", type: "Correction", format: "zip", link: "resources/mathematics/s1/Algèbre 2/TD1/corection de TD1/WhatsApp Unknown 2025-12-12 at 17.58.31.zip" },
                                // Dossier: TD2 & TD3
                                { title: "TD 2", type: "TD", format: "img", link: "resources/mathematics/s1/Algèbre 2/TD2/TD 2 .jpeg" },
                                { title: "TD 3", type: "TD", format: "pdf", link: "resources/mathematics/s1/Algèbre 2/TD3/TD3 alg2.pdf" },
                                // Dossier: Controle
                                { title: "Contrôle Alg2 2025", type: "Exam", format: "pdf", link: "resources/mathematics/s1/Algèbre 2/controle/Contrôle_Alg2__2025.pdf" }
                            ]
                        },
                        {
                            name: "Algèbre 1",
                            resources: [
                                // Dossier: Coure
                                { title: "Arithmétique dans Z", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Algébre 1/Coure/Arithmétique dans Z.pdf" },
                                { title: "Logique, Ensembles et Applications", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Algébre 1/Coure/Logique, Ensembles et Applications.pdf" },
                                { title: "Relations binaires", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Algébre 1/Coure/Relations binaires.pdf" },
                                // Dossier: TD
                                { title: "Série TD 1", type: "TD", format: "pdf", link: "resources/mathematics/s1/Algébre 1/TD/TD 1.pdf" },
                                // Dossier: Examen/Controle
                                { title: "Contrôle Alg1 (Achak)", type: "Exam", format: "img", link: "resources/mathematics/s1/Algébre 1/examen/controle/controle alg1 Achak .jpeg" },
                                { title: "Exam 2021-2022", type: "Exam", format: "img", link: "resources/mathematics/s1/Algébre 1/examen/exam/2021_2022.jpg" },
                                { title: "Exam Rat 2023-2024", type: "Exam", format: "img", link: "resources/mathematics/s1/Algébre 1/examen/exam/rat 2023_2024.jpg" }
                            ]
                        },
                        {
                            name: "Analyse 1",
                            resources: [
                                // Dossier: coure
                                { title: "Chapitre 1", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Analyse 1/coure/Chapitre 1 .pdf" },
                                { title: "Chapitre 2", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Analyse 1/coure/Chapitre 2.pdf" },
                                { title: "Chapitre 3 (Continuité)", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Analyse 1/coure/Chapitre 3 Continuité d_une fonction à variable réelle.pdf" },
                                { title: "Chapitre 4 (Dérivabilité)", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Analyse 1/coure/Chapitre 4 Dérivabilité.pdf" },
                                // Dossier: TD
                                { title: "Série 1", type: "TD", format: "pdf", link: "resources/mathematics/s1/Analyse 1/TD/série 1 (Analyse 1).pdf" },
                                { title: "Série 2", type: "TD", format: "pdf", link: "resources/mathematics/s1/Analyse 1/TD/série 2 Analyse 1 .pdf" },
                                // Dossier: Controle - Exam
                                { title: "Contrôle Analyse 1", type: "Exam", format: "img", link: "resources/mathematics/s1/Analyse 1/controle - exam/controle analyse1 .jpeg" },
                                { title: "Exam 2021-2022", type: "Exam", format: "img", link: "resources/mathematics/s1/Analyse 1/controle - exam/exam analyse1 2021_2022 (5).jpg" }
                            ]
                        },
                        {
                            name: "Digital Skills - MTU",
                            resources: [
                                { title: "MTU Presentation", type: "Cours", format: "pptx", link: "resources/mathematics/s1/Digital skills  - MTU/MTU.pptx" },
                                { title: "Anglais", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Digital skills  - MTU/ang.pdf" },
                                { title: "Internet Part 1", type: "DS", format: "pdf", link: "resources/mathematics/s1/Digital skills  - MTU/digital skills/part1.pdf" },
                                { title: "Séquence Word", type: "DS", format: "pdf", link: "resources/mathematics/s1/Digital skills  - MTU/digital skills/Séquence  word.pdf" },
                                { title: "Séquence Excel", type: "DS", format: "pdf", link: "resources/mathematics/s1/Digital skills  - MTU/digital skills/Séquence Excel.pdf" }
                            ]
                        },
                        {
                            name: "Thermodynamique",
                            resources: [
                                { title: "Cours Complet Thermo", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Thermodynamique/coure/THERMO.pdf" },
                                { title: "TD 1", type: "TD", format: "img", link: "resources/mathematics/s1/Thermodynamique/TD/TD1.jpg" },
                                { title: "TD 2", type: "TD", format: "pdf", link: "resources/mathematics/s1/Thermodynamique/TD/TD2/TD2 (thermo).pdf" },
                                { title: "Correction TD 2", type: "Correction", format: "pdf", link: "resources/mathematics/s1/Thermodynamique/TD/TD2/Correction TD 2 (1).pdf" },
                                { title: "Contrôle Thermo", type: "Exam", format: "pdf", link: "resources/mathematics/s1/Thermodynamique/exam/controle/contrôle de thermodynamique .pdf" },
                                { title: "Examen N", type: "Exam", format: "img", link: "resources/mathematics/s1/Thermodynamique/exam/exam de N/exan N (5).jpeg" }
                            ]
                        },
                        {
                            name: "Statistiques et probabilité",
                            resources: [
                                { title: "Cours Probabilités", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Statistiques et probabilité/proba/Probabilites.pdf" },
                                { title: "Statistique Descriptive", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Statistiques et probabilité/statistique/Statdescet intr prob 25 26_251021_125015.pdf" },
                                { title: "TD 1 Statistique", type: "TD", format: "pdf", link: "resources/mathematics/s1/Statistiques et probabilité/statistique/TD/TD 1 LEM S1 25 26_251103_093825.pdf" },
                                { title: "Exam Stati N 2024-2025", type: "Exam", format: "img", link: "resources/mathematics/s1/Statistiques et probabilité/statistique/exam de stati/exam stati N 2024_2025.jpg" }
                            ]
                        },
                        {
                            name: "Informatique 1",
                            resources: [
                                { title: "Intro Informatique", type: "Cours", format: "pdf", link: "resources/mathematics/s1/Informatique 1/coure/Introduction à l_informatique LICENCE MATH S1 (1).pdf" },
                                { title: "TD 3 Info", type: "TD", format: "pdf", link: "resources/mathematics/s1/Informatique 1/TD3/TD3 info.pdf" }
                            ]
                        }
                    ]
                },
                // ================= SECTION SEMESTRE 2 =================
                {
                    id: "s2",
                    name: "Semestre 2",
                    modules: [
                        {
                            name: "Algèbre 3",
                            resources: [
                                { title: "Correction TD 1 - Alg 3", type: "TD", format: "pdf", link: "resources/mathematics/S2/Algèbre 3/Correction de Td n⁰ 1-Alg 3.pdf" },
                                { title: "Cours Page 1", type: "Cours", format: "img", link: "resources/mathematics/S2/Algèbre 3/Cours/IMG-20250402-WA0029.jpg" },
                                { title: "Cours Page 2", type: "Cours", format: "img", link: "resources/mathematics/S2/Algèbre 3/Cours/IMG-20250402-WA0030.jpg" }
                                // Ajoute les autres images ici si nécessaire
                            ]
                        },
                        {
                            name: "Analyse 3",
                            resources: [
                                { title: "Correction TD 1 - Analyse 3", type: "TD", format: "pdf", link: "resources/mathematics/S2/Analyse 3/Correction-Td n⁰1 -analyse -3.pdf" },
                                { title: "Exercices Corrigés Optique", type: "TD", format: "pdf", link: "resources/mathematics/S2/Analyse 3/cour/Polycopie-dexercices-corriges-doptique-geometrique_copy.pdf" }
                            ]
                        },
                        {
                            name: "Informatique 2",
                            resources: [
                                { title: "Algorithmique et Prog S2", type: "Cours", format: "pdf", link: "resources/mathematics/S2/Informatique 2/Cours/Algorithmique et programmation S2.pdf" },
                                { title: "TD 1 Info 2", type: "TD", format: "pdf", link: "resources/mathematics/S2/Informatique 2/TD/TD1 (1).pdf" }
                            ]
                        },
                        {
                            name: "Électrostatique - Magnéto",
                            resources: [
                                { title: "Rappel Mathématique", type: "Cours", format: "pdf", link: "resources/mathematics/S2/Électrostatique - magnéto/Cours/Rappel mathématique_.pdf" },
                                { title: "Image Cours", type: "Cours", format: "img", link: "resources/mathematics/S2/Électrostatique - magnéto/FB_IMG_1586443322044(1).jpg" }
                            ]
                        }
                    ]
                }
            ]
        }
        // Tu peux ajouter d'autres filières (Physique, etc.) ici plus tard
    ]
};

// --- LOGIC (NE PAS MODIFIER EN DESSOUS SANS CONNAISSANCE) ---

const grid = document.getElementById('content-grid');
const breadcrumbs = document.getElementById('breadcrumbs');

// Initial Load
if(grid) {
    renderMajors();
}

function renderMajors() {
    grid.innerHTML = "";
    if(breadcrumbs) breadcrumbs.classList.add('hidden');
    
    db.majors.forEach(major => {
        const card = document.createElement('div');
        card.className = 'card major-card';
        card.innerHTML = `
            <i class="fas fa-${major.icon} icon-large"></i>
            <h3>${major.name}</h3>
        `;
        card.onclick = () => renderSemesters(major);
        grid.appendChild(card);
    });
}

function renderSemesters(major) {
    grid.innerHTML = "";
    if(breadcrumbs) {
        breadcrumbs.classList.remove('hidden');
        breadcrumbs.innerHTML = `<span onclick="renderMajors()">Majors</span> > ${major.name}`;
    }

    if(major.semesters.length === 0) {
        grid.innerHTML = "<p>No semesters added yet.</p>";
        return;
    }

    major.semesters.forEach(sem => {
        const card = document.createElement('div');
        card.className = 'card sem-card';
        card.innerHTML = `
            <i class="fas fa-calendar-alt icon-large"></i>
            <h3>${sem.name}</h3>
        `;
        card.onclick = () => renderModules(major, sem);
        grid.appendChild(card);
    });
}

function renderModules(major, sem) {
    grid.innerHTML = "";
    breadcrumbs.innerHTML = `<span onclick="renderMajors()">Majors</span> > <span onclick="renderSemesters(db.majors.find(m=>m.id=='${major.id}'))">${major.name}</span> > ${sem.name}`;

    if(!sem.modules || sem.modules.length === 0) {
        grid.innerHTML = "<p>No modules added yet.</p>";
        return;
    }

    sem.modules.forEach(mod => {
        const card = document.createElement('div');
        card.className = 'card module-card';
        card.innerHTML = `
            <i class="fas fa-book-open icon-large"></i>
            <h3>${mod.name}</h3>
            <p style="font-size: 0.8rem; color: #666;">${mod.resources.length} files</p>
        `;
        card.onclick = () => renderResources(major, sem, mod);
        grid.appendChild(card);
    });
}

function renderResources(major, sem, mod) {
    grid.innerHTML = "";
    // Fil d'Ariane
    breadcrumbs.innerHTML = `<span onclick="renderMajors()">Majors</span> > 
                             <span onclick="renderSemesters(db.majors.find(m=>m.id=='${major.id}'))">${major.name}</span> > 
                             <span onclick="renderModules(db.majors.find(m=>m.id=='${major.id}'), db.majors.find(m=>m.id=='${major.id}').semesters.find(s=>s.id=='${sem.id}'))">${sem.name}</span> > 
                             ${mod.name}`;

    const header = document.createElement('div');
    header.style.width = "100%";
    header.style.marginBottom = "20px";
    header.innerHTML = `<h3>Resources for: ${mod.name}</h3>`;
    grid.appendChild(header);

    if(mod.resources.length === 0) {
        grid.innerHTML += "<p>No resources available yet.</p>";
        return;
    }

    mod.resources.forEach(res => {
        const item = document.createElement('div');
        item.className = 'resource-item';
        
        // Icônes dynamiques selon le format
        let iconClass = 'file';
        if(res.format === 'pdf') iconClass = 'file-pdf';
        else if(res.format === 'img' || res.format === 'jpg' || res.format === 'jpeg') iconClass = 'file-image';
        else if(res.format === 'zip') iconClass = 'file-archive';
        else if(res.format === 'pptx') iconClass = 'file-powerpoint';
        
        // Badge de type (Cours, TD, Exam)
        let badgeColor = '#94a3b8'; // Gris par défaut
        if(res.type === 'Cours') badgeColor = '#2563eb'; // Bleu
        if(res.type === 'TD') badgeColor = '#16a34a'; // Vert
        if(res.type === 'Exam') badgeColor = '#dc2626'; // Rouge
        if(res.type === 'DS') badgeColor = '#9333ea'; // Violet

        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-${iconClass}" style="font-size: 1.5rem; color: #555;"></i>
                <div>
                    <span style="display:block; font-weight:bold;">${res.title}</span>
                    <span style="font-size: 0.8rem; background: ${badgeColor}; color: white; padding: 2px 6px; border-radius: 4px;">${res.type}</span>
                </div>
            </div>
            <a href="${res.link}" target="_blank" class="download-btn">
                <i class="fas fa-download"></i> Open
            </a>
        `;
        grid.appendChild(item);
    });
}