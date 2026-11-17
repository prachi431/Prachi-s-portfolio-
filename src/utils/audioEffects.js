// Web Audio API Synthesizer - 100% self-contained, no external audio files needed

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a futuristic rocket launch sound (thruster whoosh + sonic chirp)
 */
export function playRocketSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // 1. Sonic Rocket Chirp (Oscillator with frequency rise)
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(220, now);
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
  osc.frequency.exponentialRampToValueAtTime(1400, now + 0.35);

  oscGain.gain.setValueAtTime(0.001, now);
  oscGain.gain.linearRampToValueAtTime(0.18, now + 0.05);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.45);

  // 2. Thruster Rumble & Noise Burst (White noise through bandpass filter)
  const bufferSize = ctx.sampleRate * 0.4;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const whiteNoise = ctx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(400, now);
  filter.frequency.linearRampToValueAtTime(1200, now + 0.3);
  filter.Q.value = 3.0;

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.01, now);
  noiseGain.gain.linearRampToValueAtTime(0.15, now + 0.08);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

  whiteNoise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);

  whiteNoise.start(now);
  whiteNoise.stop(now + 0.4);
}

/**
 * Light UI click sound for buttons and navigation
 */
export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);

  gain.gain.setValueAtTime(0.1, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.09);
}
