Projektbeschreibung: SQLite-Blog mit Express, TypeScript und TailwindCSS
Dieses Projekt ist eine einfache Blog-Anwendung, die mit Node.js, Express, TypeScript und SQLite erstellt wurde.
Die Benutzer können Blogposts erstellen, anzeigen, bearbeiten und löschen.
Das Frontend verwendet Nunjucks als Template-Engine und TailwindCSS für das Styling.

* Technologien
* Node.js – Laufzeitumgebung
* Express – Webframework
* TypeScript – Typsicherheit
* SQLite – Leichte relationale Datenbank
* Nunjucks – Template Engine
* TailwindCSS – Utility-first CSS Framework
* dotenv – Laden von Umgebungsvariablen

# Repository klonen
```Bash
git clone https://github.com/kestenbaum/sqlite-test.git
cd sqlite-test
```

# Abhängigkeiten installieren
```Bash
npm install
```

# Entwicklungsmodus mit automatischem Reload
```Bash
npm run dev
```

Server läuft standardmäßig auf:
```Bash
 http://localhost:3000
```

Datenbank
Beim ersten Start wird automatisch eine Datei blog.db erstellt.
Sie enthält eine Tabelle posts mit den Spalten:
*id – Primärschlüssel
*title – Titel des Blogposts
*content – Inhalt
*created_at – Erstellungsdatum (lokale Zeit)

