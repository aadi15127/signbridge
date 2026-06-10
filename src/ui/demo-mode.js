// Demo Mode with simulated gestures
export function runDemoMode(app) {
  console.log('Demo mode started');
  // Sequence of gestures
  const sequence = ['HELLO', 'THANK_YOU', 'I LOVE YOU'];
  let i = 0;
  const interval = setInterval(() => {
    if (i < sequence.length) {
      app.processDemoGesture(sequence[i++]);
    } else {
      clearInterval(interval);
    }
  }, 1500);
}