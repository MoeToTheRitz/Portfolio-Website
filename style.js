function changeLanguage(language) {
    // Speichern Sie die ausgewählte Sprache in der localStorage.
    localStorage.setItem("language", language);
  
    // Aktualisieren Sie alle Textfelder auf der Seite, indem Sie die entsprechenden Übersetzungen aus einem JSON-Objekt laden.
    fetch(`translations/${language}.json`)
      .then((response) => response.json())
      .then((translations) => {
        // Schleife durch alle Textfelder und aktualisiere ihren Text entsprechend.
        document.querySelectorAll("[data-translate]").forEach((element) => {
          const key = element.getAttribute("data-translate");
          element.textContent = translations[key];
        });
      });
  }