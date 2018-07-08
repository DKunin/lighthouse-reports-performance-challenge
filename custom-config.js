module.exports = {
  extends: 'lighthouse:default',
  settings: {
    // useThrottling: true,
    defaultPassConfig: {
      // useThrottling: true
    },
    onlyAudits: [
      'first-meaningful-paint',
      'time-to-first-byte',
      'estimated-input-latency',
      'interactive'
    ],
  },
};