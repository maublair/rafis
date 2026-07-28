export type ScreenStep = 
  | 'intro' 
  | 'person' 
  | 'spider_sense' 
  | 'comic_twist' 
  | 'deep_1' 
  | 'deep_2' 
  | 'deep_sadness'
  | 'deep_fear'
  | 'deep_choice' 
  | 'deep_gods' 
  | 'final';

export interface AppState {
  currentStep: ScreenStep;
  soundEnabled: boolean;
  spiderSenseEnergy: number;
  hasInteracted: boolean;
  showSecretMessage: boolean;
}
