// import "ant-design-vue/dist/antd.css";
import { Menu, Button, Layout, Input } from 'ant-design-vue';
import ElementPlus from 'element-plus'
import { App } from 'vue';
import inputFilter from './inputFilter';
import testInputFilter from './test-input-filter';
import 'element-plus/dist/index.css'

export const registerAntd = (app: App): void => {
    inputFilter(app);
    testInputFilter(app);
    app.use(ElementPlus);
    app.use(Menu);
    app.use(Button);
    app.use(Layout);
    app.use(Input);
}
