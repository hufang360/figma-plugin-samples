figma.showUI(__html__);
figma.ui.resize(220,570);

// 处理消息
figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case "showToast":
      // figma里的 toast 提示
      const msg = "已选中 " +figma.currentPage.selection.length + " 个";
      figma.notify(msg, {timeout:1000});
      break;

    default:
      console.log(msg);
      break;
  }
}

// 更新显示选中个数
figma.on('selectionchange', () => {
  showSelection();
})
// 显示选中个数
function showSelection(){
  const msg = "已选中 " +figma.currentPage.selection.length + " 个";
  figma.ui.postMessage(["showMsg", [msg] ]);
}

