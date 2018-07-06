module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyAudits: [
      'first-meaningful-paint',
      'time-to-first-byte',
      'speed-index-metric',
      'estimated-input-latency',
      'interactive',
      'bootup-time',
      'total-byte-weight',
      'unused-css-rules',
      'dom-size',
      'first-interactive',
      'consistently-interactive',
    ],
  },
};