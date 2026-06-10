// ASL Gestures Database with landmark patterns
export const ASL_GESTURES = {
  'A': { description: 'Fist with thumb up', confidenceThreshold: 0.85 },
  'B': { description: 'Flat hand, fingers together', confidenceThreshold: 0.8 },
  'HELLO': { description: 'Wave or salute gesture', confidenceThreshold: 0.75 },
  'THANK_YOU': { description: 'Touch chin and extend hand', confidenceThreshold: 0.78 },
  // Add more...
};

export function getGestureConfidence(landmarks) {
  // Placeholder logic for gesture matching
  return 0.92;
}