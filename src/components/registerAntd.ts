// import "ant-design-vue/dist/antd.css";
import { Menu, Button } from 'ant-design-vue';
import { App } from 'vue';

export const registerAntd = (app: App): void => {
    app.use(Menu);
    app.use(Button);
}
