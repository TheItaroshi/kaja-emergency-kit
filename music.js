/* Replace this adapter with a provider SDK later; keep start() in the click event. */
window.createMusic = function (config, notify, update) {
  let audio;
  let generation = 0;
  if (config.mode === 'audio' && config.source) {
    audio = new Audio(config.source);
    audio.loop = true;
    audio.preload = 'none';
    audio.addEventListener('error', () => { update(false); notify(config.failed); });
  }
  return {
    start() {
      if (audio) {
        const attempt = ++generation;
        // Call play synchronously while Safari still has the user's activation.
        const play = audio.play();
        if (play) play.then(() => { if (attempt === generation) update(true); }).catch(() => { if (attempt === generation) { update(false); notify(config.failed); } });
      } else if (config.mode === 'external' && /^https:\/\//.test(config.externalUrl)) {
        window.open(config.externalUrl, '_blank', 'noopener,noreferrer');
        notify(config.externalMessage);
      } else { notify(config.unavailable); }
    },
    stop() { generation++; if (audio) audio.pause(); update(false); }
  };
};
