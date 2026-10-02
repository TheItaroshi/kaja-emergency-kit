/* Tutaj zmienisz teksty, zawartość prezentu, życzenia i ustawienia muzyki. */
window.KIT = {
  intro: {
    eyebrow: 'DLA KAI · NA WSZELKI WYPADEK',
    title: 'Kaja · Zestaw ratunkowy',
    titleLines: ['Kaju,', 'głowa do góry.', 'You got this!'],
    subtitle: 'Na dni pod górkę, małe dramy i ludzi, którzy testują Twoją cierpliwość. Trochę przyjemności, dużo troski. Wszystko dla Ciebie.',
    button: 'Otwórz swój zestaw ♡',
    seal: 'TYLKO DLA CIEBIE',
    footnote: 'Zapakowano z troską. Handle with love ♡',
    scroll: 'Głęboki wdech. Resztę mamy w pudełku.'
  },
  ui: { seal: 'ZESTAW RATUNKOWY', activate: 'Małe pudełko. Dużo miłości.', madeFor: 'NA GORSZE DNI ♡', protocol: 'PACZUSZKA', openIf: 'OTWÓRZ, JEŚLI…', personal: 'DLA KAI / OD SERCA', intro: 'Początek', support: 'Kontakt', notes: 'Liścik', musicOn: 'Wyłącz muzykę', musicOff: 'Włącz muzykę', musicExternal: 'Otwórz muzykę w aplikacji' },
  levels: [
    { number: '01', theme: 'beer', severity: 'LEKKI WKURZ', title: 'Ktoś Cię wkurzył w pracy.', label: 'Ciężki dzień? Czas na małe na zdrowie.', treatment: 'Bawarskie piwo', dosage: '1–2 puszki', instruction: 'Prosto z Monachium. Bo niektóre spotkania spokojnie mogłyby być piwem.', step: 'Otwórz puszkę. Zamknij dzień pracy.', stamp: 'PROSTO Z\nMONACHIUM', next: 'Dalej Cię nosi?', treatmentLabel: 'NA RATUNEK', dosageLabel: 'CHWILA DLA CIEBIE' },
    { number: '02', theme: 'quota', severity: 'CIERPLIWOŚĆ: 0%', title: 'Limit irytacji na dziś wyczerpany.', label: 'Ostatni nerw właśnie wyszedł z czatu.', treatment: 'Małe wsparcie awaryjne', dosage: 'Tyle, ile trzeba', instruction: 'Coś na chwilę, w której „wszystko okej” brzmi już wyjątkowo mało wiarygodnie.', step: 'Otwórz część 02. Daj ludziom jeszcze szansę.', stamp: 'TAKE IT\nEASY', next: 'Potrzeba czegoś więcej?', treatmentLabel: 'NA RATUNEK', dosageLabel: 'CHWILA DLA CIEBIE' },
    { number: '03', theme: 'shutdown', severity: 'TRYB: NIE MA MNIE', title: 'Trzeba się odłączyć. Natychmiast.', label: 'Tryb offline. Self-care włączone.', treatment: 'Voucher na masaż', dosage: 'Jeden porządny reset', instruction: 'Oficjalne pozwolenie, żeby przez chwilę mieć wyjebane. Obowiązki poczekają. Twoje spięte barki już niekoniecznie.', step: 'Umów masaż. Myślami wyjdź ze wszystkich grup.', stamp: 'DO NOT\nDISTURB', next: 'Jednak musimy pogadać', treatmentLabel: 'CZAS DLA CIEBIE', dosageLabel: 'PLAN NA TERAZ' },
    { number: '04', theme: 'tea', severity: 'WJEŻDŻA WSPARCIE', title: 'O tym trzeba pogadać.', label: 'Wstaw wodę. Spill the tea, kochana.', treatment: 'Herbatka i pogaduchy', dosage: 'Herbatka + Twój człowiek od kryzysów', instruction: 'Zaparz coś dobrego i opowiedz wszystko. Nazwiska, screeny i dramatyczne rekonstrukcje zdarzeń mile widziane.', step: 'Zrób herbatę. Odezwij się do mnie.', stamp: 'MIĘDZY\nNAMI', next: 'Gdzie jest mój człowiek?', treatmentLabel: 'NA RATUNEK', dosageLabel: 'NAJLEPIEJ SMAKUJE Z' }
  ],
  final: { eyebrow: 'GDY PUDEŁKO TO ZA MAŁO', title: 'Jeśli nadal nie przechodzi,', emphasis: 'odezwij się do swojego idioty od wsparcia emocjonalnego.', note: 'Żaden problem nie jest za mały.\nRady różne. Intencje najlepsze.', button: 'TWÓJ CZŁOWIEK OD KRYZYSÓW', placeholder: '+XX XXX XXX XXX', placeholderNote: 'TU BĘDZIE NUMER DO MNIE', signoff: 'Dla Kai. Z troską i lekką przesadą.', restart: 'Jeszcze raz od początku', badge: 'ZAWSZE PO TWOJEJ STRONIE', next: 'Jeszcze mały liścik dla Ciebie ↓' },
  // Wpisz swoje życzenia poniżej. Każdy element paragraphs to osobny akapit.
  // Ten sam liścik pojawi się na końcu strony i w okienku pod bocznym przyciskiem.
  note: { eyebrow: 'JUŻ BEZ INSTRUKCJI OBSŁUGI', title: 'Jeszcze coś dla Ciebie…', greeting: 'Kaju,', paragraphs: ['[Tutaj wpisz swoje życzenia — tak po swojemu.]', '[Możesz dodać wspomnienie, żart, który rozumiecie tylko Wy, albo po prostu kilka słów od serca.]'], signature: '[Twój podpis]', button: 'Liścik', close: 'Zamknij liścik', footer: 'PS Pudełko się kończy. Wsparcie nie. ♡' },
  contact: { phone: '', display: '', method: 'tel' },
  // Muzyka: 'none', 'audio' (własny/licencjonowany plik) albo 'external' (link Spotify).
  music: { mode: 'external', source: '', externalUrl: 'https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr?si=f730d18242a04bc9', unavailable: 'ABBA czeka w gotowości. Jeszcze tylko trzeba podłączyć muzykę.', failed: 'Muzyka potrzebuje jeszcze jednego kliknięcia. Zestaw działa dalej.', externalMessage: 'Muzyka otwiera się osobno. Zatrzymasz ją w aplikacji muzycznej.', offLabel: 'BEZ MUZYKI', onLabel: 'GRA MUZYKA', externalLabel: 'ABBA ↗' }
};
