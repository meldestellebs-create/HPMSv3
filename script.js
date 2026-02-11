document.addEventListener('DOMContentLoaded', () => {

    // --- 1. TAB NAVIGATION ---
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to current
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- 2. AKKORDEON (BQW-2) ---
    const accHeader = document.getElementById('bqw-toggle');
    const accContent = document.getElementById('bqw-content');
    const accIcon = accHeader.querySelector('.icon');

    accHeader.addEventListener('click', () => {
        accContent.classList.toggle('open');
        // Icon ändern
        if(accContent.classList.contains('open')){
            accIcon.textContent = "−";
        } else {
            accIcon.textContent = "+";
        }
    });


    // --- 3. BILDUNGSWEGE FINDEN (Logik) ---

    // DATEN: Hier die echten Bildungswege-Daten eintragen
    // Orientiert an HPMSv1 / Option-7
    const pathsData = [
        {
            start: "kein-abschluss",
            ziel: "hauptschulabschluss",
            titel: "Berufsvorbereitungsjahr (BVJ)",
            desc: "Einjährige Vollzeitschule zur Vorbereitung auf eine Ausbildung.",
            dauer: "1 Jahr"
        },
        {
            start: "kein-abschluss",
            ziel: "hauptschulabschluss",
            titel: "Vorqualifizierungsjahr Arbeit/Löwe (VAB)",
            desc: "Schwerpunkt auf Deutschkenntnisse und Berufsorientierung.",
            dauer: "1 Jahr"
        },
        {
            start: "hauptschulabschluss",
            ziel: "mittlere-reife",
            titel: "Zweijährige Berufsfachschule (2BFS)",
            desc: "Führt zur Fachschulreife und vermittelt berufliche Grundbildung.",
            dauer: "2 Jahre"
        },
        // ... HIER WEITERE DATEN ERGÄNZEN ...
    ];

    const startSelect = document.getElementById('start-abschluss');
    const zielSelect = document.getElementById('ziel-abschluss');
    const btnSearch = document.getElementById('btn-search-path');
    const resultsContainer = document.getElementById('results-container');

    // Initiale Optionen füllen
    const startOptions = [
        {val: "kein-abschluss", text: "Ohne Schulabschluss"},
        {val: "hauptschulabschluss", text: "Hauptschulabschluss"},
        {val: "mittlere-reife", text: "Mittlere Reife"}
    ];

    const zielOptions = [
        {val: "hauptschulabschluss", text: "Hauptschulabschluss"},
        {val: "mittlere-reife", text: "Mittlere Reife"},
        {val: "abitur", text: "Abitur / Fachhochschulreife"}
    ];

    function populateSelect(selectEl, options) {
        options.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt.val;
            el.textContent = opt.text;
            selectEl.appendChild(el);
        });
    }

    populateSelect(startSelect, startOptions);
    populateSelect(zielSelect, zielOptions);

    // Abhängigkeiten (Ziel aktivieren wenn Start gewählt)
    startSelect.addEventListener('change', () => {
        zielSelect.disabled = false;
    });

    zielSelect.addEventListener('change', () => {
        btnSearch.disabled = false;
    });

    // Suche ausführen
    btnSearch.addEventListener('click', () => {
        const sVal = startSelect.value;
        const zVal = zielSelect.value;

        // Filtern
        const results = pathsData.filter(p => p.start === sVal && p.ziel === zVal);

        // Rendern (HPMSv1 Karten Design)
        resultsContainer.innerHTML = '';

        if(results.length === 0) {
            resultsContainer.innerHTML = '<div class="empty-state">Keine direkten Wege gefunden oder Daten noch nicht vollständig.</div>';
            return;
        }

        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = `
                <span class="badge">${item.dauer}</span>
                <h3>${item.titel}</h3>
                <p>${item.desc}</p>
            `;
            resultsContainer.appendChild(card);
        });
    });


    // --- 4. BEGRIFFE ERKLÄRT (Daten) ---
    const glossaryData = [
        { term: "Duale Ausbildung", def: "Ausbildung im Betrieb und in der Berufsschule parallel." },
        { term: "Fachhochschulreife", def: "Berechtigt zum Studium an Fachhochschulen." },
        { term: "Berufliches Gymnasium", def: "Führt in 3 Jahren zum Abitur mit beruflichem Profil." },
        // ... HIER WEITERE BEGRIFFE ERGÄNZEN ...
    ];

    const glossaryContainer = document.getElementById('glossary-container');
    glossaryData.forEach(item => {
        const el = document.createElement('div');
        el.className = 'glossary-item';
        el.innerHTML = `<strong>${item.term}</strong> ${item.def}`;
        glossaryContainer.appendChild(el);
    });


    // --- 5. BERUFSWAHL QUIZ (Daten & Logik) ---
    const quizQuestions = [
        {
            q: "Arbeitest du gerne im Team?",
            answers: ["Ja, sehr gerne", "Es kommt darauf an", "Nein, lieber alleine"]
        },
        {
            q: "Interessierst du dich für Technik?",
            answers: ["Ja, das ist mein Ding", "Ein bisschen", "Gar nicht"]
        },
        // ... HIER WEITERE FRAGEN ERGÄNZEN ...
    ];

    let currentQIndex = 0;
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    const startScreen = document.getElementById('quiz-start-screen');
    const questionScreen = document.getElementById('quiz-question-screen');
    const resultScreen = document.getElementById('quiz-result-screen');
    const qText = document.getElementById('question-text');
    const aList = document.getElementById('answer-options');
    const qNum = document.getElementById('current-q');
    const qTotal = document.getElementById('total-q');

    btnStartQuiz.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        loadQuestion();
    });

    function loadQuestion() {
        const currentData = quizQuestions[currentQIndex];
        qText.textContent = currentData.q;
        qNum.textContent = currentQIndex + 1;
        qTotal.textContent = quizQuestions.length;

        aList.innerHTML = ''; // Clear old answers

        currentData.answers.forEach(ans => {
            const btn = document.createElement('button');
            btn.textContent = ans;
            btn.addEventListener('click', nextQuestion);
            aList.appendChild(btn);
        });
    }

    function nextQuestion() {
        currentQIndex++;
        if (currentQIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        // Einfache Logik - hier kann komplexere Auswertung hin
        document.getElementById('result-text').textContent = "Danke für die Teilnahme! Basierend auf deinen Antworten könnte eine Ausbildung im technischen oder sozialen Bereich passen. (Platzhalter-Ergebnis)";
    }

});