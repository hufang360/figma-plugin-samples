var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.resize(220, 570);
// 处理消息
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    switch (msg.type) {
        case "showToast":
            // figma里的 toast 提示
            const msg = "已选中 " + figma.currentPage.selection.length + " 个";
            figma.notify(msg, { timeout: 1000 });
            break;
        default:
            console.log(msg);
            break;
    }
});
// 更新显示选中个数
figma.on('selectionchange', () => {
    showSelection();
});
// 显示选中个数
function showSelection() {
    const msg = "已选中 " + figma.currentPage.selection.length + " 个";
    figma.ui.postMessage(["showMsg", [msg]]);
}
