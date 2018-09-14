/**
 * 获取 mouse 或 touch 事件的当前节点
 * @param evt
 */
const getCurrentFromEvent = (evt) => {
  if (evt.touches && evt.touches.length) {
    return evt.touches[0];
  }
  return evt;
};

export default getCurrentFromEvent;
