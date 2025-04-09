# Feedback KI Evaluierungssystem

Dieses Repository enthält mehrere Prompt-Dateien von "feedback_v1.txt" bis "feedback_v5.txt".  
Ich habe mit dem ursprünglichen Prompt begonnen und kontinuierlich Randfälle sowie einzigartige Interaktionen getestet, um "Bugs" zu finden und den Prompt zu verbessern.  
Der Denkprozess hinter jeder Version ist in der .yaml-Konfigurationsdatei enthalten.  
Ich habe außerdem ein TypeScript-Setup entwickelt, das den Prompt aus dem /prompts-Ordner lädt (je nachdem, welche Version benötigt wird) und den Prompt an das KI-Modell sendet. Zudem habe ich einen Jest-Test durchgeführt, um zu bestätigen, dass der Prompt erfolgreich an das Modell gesendet wird.

# Installation

Verwende `npm install` und erstelle eine `.env`-Datei mit den entsprechenden Informationen.
