# Kaja’s Emergency Stress Kit

A static, mobile-first gift manual. No build, backend, or framework required.

## Run locally

From this folder, run `python3 -m http.server 8000` and open http://localhost:8000.
To test on an iPhone on the same Wi-Fi, open `http://YOUR-COMPUTER-LAN-IP:8000`.

## Personalize

- **content.js**: edit the four levels, especially Level 2, and the final message.
- Set `contact.phone` to your full international phone number and optionally set `contact.display`. Use `contact.method: 'sms'` for messages or `'tel'` for calls. Until configured, an obvious non-clickable placeholder appears.
- **styles.css**: colours, layout, typography, animations. Fonts load from Google Fonts; system sans-serif remains available if offline or blocked.
- A few structural interface labels and the stylized title are in **app.js** and **index.html**.

## Music

Default: no audio is bundled or requested. Activation attempts to start the music adapter and explains that the soundtrack is not connected. The gift remains fully usable.

For audio you own or have permission to use, set `music.mode` to `'audio'` and `music.source` to a relative file path or an authorized HTTPS audio URL. The activation click calls `audio.play()` immediately to preserve Safari’s user gesture. Playback failures are caught; the sound toggle retries or pauses playback.

For Spotify or another legal service, set `music.mode` to `'external'` and `music.externalUrl` to its HTTPS track/playlist URL. This opens the service on the initial tap. The music control becomes an external link; playback and pausing remain in the service. A link does **not** guarantee autoplay, access, or subscription availability. If you later choose an embed/SDK, replace the adapter in **music.js** and keep its start call directly inside the activation handler. Do not place copyrighted ABBA recordings in this repository.

## Deploy free with GitHub Pages

1. Create a **public** GitHub repository, for example `kaja-emergency-kit`.
2. Upload `index.html`, `styles.css`, `content.js`, `music.js`, `app.js`, and `.nojekyll` to the repository root. Include any licensed assets you later add. Do not upload `.venv` or `.idea`.
3. Open the repository’s **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **main**, folder **/ (root)**, and **Save**.
6. Once deployment finishes, open `https://YOUR-USERNAME.github.io/kaja-emergency-kit/`.
7. Test that URL in iPhone Safari, then write that exact HTTPS URL to the NFC tag.

Keep the GitHub username and repository name unchanged to preserve the NFC URL. Update content by editing the same repository; Pages republishes it. A public repository and Pages website are public, including any phone number you insert. No secrets belong here.

## Mobile checks

Uses dynamic viewport height with a legacy fallback, safe-area insets, discrete cards with one vertical swipe per card, keyboard navigation (arrows, Page Up/Down, Home/End), and reduced-motion support. The compact layout has no bottom menu or nested card scrolling at normal phone sizes. A measured overflow fallback allows reading on very short windows or with enlarged text. The full personal note opens in a separate scrollable dialog. Test the final music provider on a real iPhone; desktop mobile emulation does not reproduce Safari playback restrictions or NFC hardware.

## Polska wersja i własny liścik

W `content.js` znajdziesz `note.greeting`, `note.paragraphs` i `note.signature`.
Zastąp teksty w nawiasach własnymi życzeniami. Każdy element tablicy `paragraphs` tworzy osobny akapit; `\n` pozwala przejść do nowej linii. Tekst jest wyświetlany bez interpretowania HTML.
Przycisk na ostatniej stronie oraz przycisk „Liścik” w górnym pasku otwierają ten sam liścik w okienku; krzyżyk, Escape i kliknięcie poza nim zamykają je. Długie życzenia można przewijać.

## Jak podłączyć ABBĘ

Najprostszy wariant jest już obsługiwany:

1. W Spotify otwórz wybrany utwór ABBY i wybierz **Udostępnij → Kopiuj link**.
2. W `content.js`, w obiekcie `music`, ustaw `mode: 'external'`.
3. Wklej skopiowany link do `externalUrl: 'https://open.spotify.com/track/…'`.

Po naciśnięciu głównego przycisku otworzy się Spotify. W razie potrzeby naciśnij Play w Spotify i wróć na stronę. To nie jest muzyka osadzona w tle strony; odtwarzanie kontroluje Spotify. Nie ustawiaj adresu Spotify jako `source` — to nie adres pliku audio.

Alternatywa: widoczny odtwarzacz Spotify Embed na stronie. Wymaga dodania integracji; sam przycisk startowy nie gwarantuje odtwarzania w Safari. Oficjalna dokumentacja: https://developer.spotify.com/documentation/embeds/references/iframe-api

## Aktualnie opublikowana strona

Adres: https://theitaroshi.github.io/kaja-emergency-kit/
Źródła: gałąź `main`. GitHub Pages publikuje gałąź `gh-pages` z katalogu głównego.
Po zapisaniu zmian w commicie wyślij obie gałęzie: `git push origin main` i `git push origin main:gh-pages`.
