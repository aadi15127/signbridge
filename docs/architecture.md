# Architecture

## Layers
1. **Input Layer**: Webcam via getUserMedia
2. **Processing Layer**: MediaPipe Hands + FaceMesh
3. **AI Layer**: Gesture + Emotion Engines
4. **Render Layer**: Canvas overlays
5. **UI Layer**: History, controls, modals

Micro-gestures focus on 21 hand landmarks + 468 face landmarks.