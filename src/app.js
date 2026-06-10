import { GestureEngine } from './engines/gesture-engine.js';
import { EmotionEngine } from './engines/emotion-engine.js';
import { CanvasRenderer } from './engines/canvas-renderer.js';
import { UIController } from './ui/ui-controller.js';
import { runDemoMode } from './ui/demo-mode.js';

class SignBridgeApp {
  constructor() {
    this.gestureEngine = new GestureEngine();
    this.emotionEngine = new EmotionEngine();
    this.renderer = null;
    this.ui = new UIController();
    this.video = document.getElementById('webcam');
    this.canvas = document.getElementById('output-canvas');
    this.isRunning = false;
    this.init();
  }
  
  async init() {
    await this.gestureEngine.initialize();
    await this.emotionEngine.initialize();
    this.renderer = new CanvasRenderer(this.canvas);
    
    document.getElementById('enable-camera').addEventListener('click', () => this.startCamera());
    document.getElementById('demo-mode').addEventListener('click', () => runDemoMode(this));
    // More event listeners
  }
  
  async startCamera() {
    // WebRTC/MediaPipe pipeline
    console.log('Camera started');
    this.isRunning = true;
  }
  
  processDemoGesture(gesture) {
    this.ui.addToHistory(gesture, '😊');
    this.renderer.drawTranslation(gesture, 0.95);
  }
}

new SignBridgeApp();