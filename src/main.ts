import { createApp } from 'vue';
import App from './App.vue';
import { setupElementPlus } from './plugins/element-plus';
import { setupVant } from './plugins/vant';
import { setupStore } from './store/';
const app = createApp(App);
// 配置store
setupStore(app);
// 使用element-plus插件
setupElementPlus(app);
// 使用vant插件
setupVant(app);
app.mount('#app');
