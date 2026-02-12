<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bildungswege Stuttgart</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="logo-container">
            <span class="logo-main">Meldestelle</span>
            <span class="logo-sub">Berufliche Schulen Stuttgart</span>
        </div>
    </header>
    <main class="hero">
        <div class="container">
            <h1 class="hero-title">Deine Zukunft.<br><span class="highlight">Dein Weg.</span></h1>
            <div class="cards-container">
                <section id="wizard-section" class="option-card">
                    <div class="card-header">
                        <div class="icon-wrapper">🚀</div>
                        <h2>Bildungswege-Tool</h2>
                    </div>
                    <div class="card-content">
                        <div class="split-container">
                            <div class="split-section">
                                <div class="section-title"><span class="section-number">1</span> Start</div>
                                <div class="select-wrapper">
                                    <label class="select-label" for="start">Aktueller Abschluss</label>
                                    <select id="start">
                                        <option value="">-- Bitte wählen --</option>
                                        <option value="ohneAbschluss">Ohne Abschluss</option>
                                        <option value="foerderschule">Förderschulabschluss</option>
                                        <option value="hauptschulabschluss">Hauptschulabschluss</option>
                                        <option value="mittlereReife">Mittlere Reife (Realschulabschluss)</option>
                                        <option value="fachhochschulreife">Fachhochschulreife</option>
                                        <option value="abitur">Abitur (Allg. Hochschulreife)</option>
                                        <option value="berufsabschluss">Abgeschlossene Berufsausbildung</option>
                                        <option value="vabo">VABO (Deutschförderung)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="split-section">
                                <div class="section-title"><span class="section-number">2</span> Ziel</div>
                                <div class="select-wrapper">
                                    <label class="select-label" for="ziel">Gewünschter Abschluss</label>
                                    <select id="ziel">
                                        <option value="">-- Bitte wählen --</option>
                                        <option value="hauptschulabschluss">Hauptschulabschluss</option>
                                        <option value="mittlereReife">Mittlere Reife (Fachschulreife)</option>
                                        <option value="fachhochschulreife">Fachhochschulreife</option>
                                        <option value="abitur">Abitur (Allg. Hochschulreife)</option>
                                        <option value="berufsabschluss">Berufsabschluss (Geselle/Facharbeiter)</option>
                                        <option value="meister">Meister / Techniker</option>
                                        <option value="studium">Studium (Bachelor/Master)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="visualization-area">
                            <div class="endpoint-circle" id="vis-start">?</div>
                            <div class="connection-line"><div class="connection-arrow"></div></div>
                            <div class="endpoint-circle" id="vis-target">?</div>
                        </div>
                        <div class="action-buttons">
                            <button class="btn-primary" onclick="showPaths()">🔍 Wege anzeigen</button>
                            <button class="btn-secondary" onclick="resetPaths()">🔄 Zurücksetzen</button>
                        </div>
                        <div id="result" class="results-container"></div>
                    </div>
                </section>
                <section id="plakat-section" class="option-card">
                    <div class="card-header">
                        <div class="icon-wrapper">🗺️</div>
                        <h2>Interaktive Übersichtsgrafik</h2>
                    </div>
                    <div class="card-content">
                        <p style="margin-bottom:1rem; color:#666;">Klicke auf deinen aktuellen Stand (Start), um visuell zu sehen, wohin die Reise gehen kann.</p>
                        <div class="plakat-container">
                            <div class="plakat-column">
                                <h3 class="plakat-col-title">Start</h3>
                                <div class="plakat-card start-node" id="plakat-ohne" onclick="highlightPlakatPath('ohne')">Ohne Abschluss</div>
                                <div class="plakat-card start-node" id="plakat-hs" onclick="highlightPlakatPath('hs')">Hauptschulabschluss</div>
                                <div class="plakat-card start-node" id="plakat-mr" onclick="highlightPlakatPath('mr')">Mittlere Reife</div>
                            </div>
                            <div class="plakat-arrows">
                                <span style="font-size:2rem; color:#ccc;">➔</span>
                            </div>
                            <div class="plakat-column">
                                <h3 class="plakat-col-title">Brücke / Weg</h3>
                                <div class="plakat-card option-node" id="plakat-vabo">VABO / VAB</div>
                                <div class="plakat-card option-node" id="plakat-avdual">AVdual</div>
                                <div class="plakat-card option-node" id="plakat-2bfs">2-j. Berufsfachschule</div>
                                <div class="plakat-card option-node" id="plakat-bk">Berufskolleg</div>
                                <div class="plakat-card option-node" id="plakat-bg">Berufl. Gymnasium</div>
                            </div>
                            <div class="plakat-arrows">
                                <span style="font-size:2rem; color:#ccc;">➔</span>
                            </div>
                            <div class="plakat-column">
                                <h3 class="plakat-col-title">Ziel</h3>
                                <div class="plakat-card goal-node" id="plakat-ausbildung">Berufsausbildung</div>
                                <div class="plakat-card goal-node" id="plakat-fh">Fachhochschulreife</div>
                                <div class="plakat-card goal-node" id="plakat-abi">Abitur</div>
                            </div>
                        </div>
                        <div id="plakat-details" class="plakat-details-box" style="display:none;">
                            <h4 id="plakat-detail-title">Details</h4>
                            <p id="plakat-detail-text">Wähle eine Option...</p>
                        </div>
                    </div>
                </section>
                <section id="download-section" class="option-card">
                    <div class="card-header"><div class="icon-wrapper">📄</div><h2>Formulare & Infos</h2></div>
                    <div class="card-content">
                         <div class="download-group">
                            <h3>VABO</h3>
                            <a href="VABO Vermittlungsanfrage.pdf" target="_blank" class="download-item">📝 Vermittlungsanfrage VABO</a>
                            <a href="VABO Hinweisblatt für SuS.pdf" target="_blank" class="download-item">ℹ️ Hinweisblatt VABO</a>
                        </div>
                        <div class="download-group" style="margin-top:1rem">
                            <h3>AVdual</h3>
                            <a href="AVdual Vermittlungsanfrage.pdf" target="_blank" class="download-item">📝 Vermittlungsanfrage AVdual</a>
                            <a href="AVdual Hinweisblatt für SuS.pdf" target="_blank" class="download-item">ℹ️ Hinweisblatt AVdual</a>
                             <a href="AVdual Informationsblatt.pdf" target="_blank" class="download-item">📄 Informationsblatt AVdual</a>
                        </div>
                    </div>
                </section>
                <section id="glossar-section" class="option-card">
                    <div class="card-header"><div class="icon-wrapper">💡</div><h2>Begriffe erklärt</h2></div>
                    <div class="card-content">
                        <input type="text" id="glossar-search" onkeyup="filterGlossar()" placeholder="Begriff suchen..." class="search-input">
                        <div id="glossar-container"></div>
                    </div>
                </section>
                <section id="quiz-section" class="option-card">
                    <div class="card-header"><div class="icon-wrapper">🎯</div><h2>Berufswahl-Quiz</h2></div>
                    <div class="card-content">
                        <div id="quiz-app">
                            <div id="quiz-start">
                                <p>Finde heraus, welcher Bereich zu dir passt!</p>
                                <button class="btn-primary" onclick="QuizApp.start()">Quiz starten</button>
                            </div>
                            <div id="quiz-question-container" style="display:none">
                                <div class="progress-bar"><div id="quiz-progress-fill"></div></div>
                                <h3 id="quiz-question-text">Frage</h3>
                                <div id="quiz-options-container" class="quiz-options"></div>
                            </div>
                            <div id="quiz-results" style="display:none">
                                <div id="quiz-result-list"></div>
                                <button class="btn-secondary" onclick="QuizApp.reset()">Neu starten</button>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 class="info-section-title">Weitere Informationen</h2>
                <div class="small-cards-grid">
                    <div class="card-small">
                        <div class="card-header-small"><span class="icon-small">🏫</span><h3>Berufliche Schulen</h3></div>
                        <a href="Zugangsvoraussetzungen Beruflichen Schulen.pdf" target="_blank" class="download-link-small">Zugangsvoraussetzungen (PDF)</a>
                    </div>
                    <div class="card-small">
                        <div class="card-header-small"><span class="icon-small">🛠️</span><h3>Ausbildung</h3></div>
                        <p class="placeholder-text">Unterlagen folgen</p>
                    </div>
                    <div class="card-small">
                        <div class="card-header-small"><span class="icon-small">📢</span><h3>Flyer</h3></div>
                        <a href="Flyer Elternstiftung BW.pdf" target="_blank" class="download-link-small">Flyer Elternstiftung BW (PDF)</a>
                    </div>
                    <div class="card-small">
                        <div class="card-header-small"><span class="icon-small">ℹ️</span><h3>Informationsmaterial</h3></div>
                        <a href="Bildungs- und Qualifizierungswege in Stuttgart.pdf" target="_blank" class="download-link-small">Bildungswege (PDF)</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
