// --------------------
// figma-plugin-ds
// https://github.com/thomas-lowry/figma-plugin-ds
// https://cdn.jsdelivr.net/gh/thomas-lowry/figma-plugin-ds/dist/figma-plugin-ds.css
// https://cdn.jsdelivr.net/gh/thomas-lowry/figma-plugin-ds/dist/iife/figma-plugin-ds.js
import './lib/figma-plugin-ds.css';
import './lib/figma-plugin-ds.js'; // 导入 js，这样 webpack 就会把js打包进来
// figma-plugin-ds.js 初始化。
// 相当于	<script>selectMenu.init();disclosure.init();</script>
const scriptDSInit = document.createElement('script');
scriptDSInit.text = 'selectMenu.init();disclosure.init();';
document.body.appendChild(scriptDSInit);
// --------------------
// --------------------
// 处理figma.ui发送过来消息
onmessage = (event) => {
    let msgType = event.data.pluginMessage[0];
    let msgOption = event.data.pluginMessage[1];
    switch (msgType) {
        case "showMsg":
            showMsg(msgOption[0]);
            break;
        default:
            console.log(event.data.pluginMessage);
            break;
    }
};
// 点击按钮
document.getElementById('btnShowToast').onclick = () => {
    // 广播消息给 figma
    parent.postMessage({ pluginMessage: { type: 'showToast', option: [] } }, '*');
};
// 面板上的提示文字（onboarding-tip__msg）
function showMsg(msg) {
    document.querySelector('#msgBox').innerHTML = String(msg);
}
