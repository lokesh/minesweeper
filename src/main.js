import { createApp } from 'vue'
import {
  DIFFICULTY_EASY,
  THEME_EGA,
} from '@/utils/constants';
import App from './App.vue'
import store from './store'
import longpress from './directives/longpress';

const app = createApp(App);


// Configure default state
store.dispatch('changeDifficulty', DIFFICULTY_EASY);
store.dispatch('changeTheme', THEME_EGA);

app.use(store);
app.directive('longpress', longpress);
app.mount('#app')

