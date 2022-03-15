/**
 * 查找符合条件的祖先元素
 */
 export default function findAncestor(element: HTMLElement | null, where: (e: HTMLElement) => boolean | undefined): HTMLElement | null {
  if (!element || element === document.body) {
    return null;
  }
  if (where(element)) {
    return element;
  }
  return findAncestor(element.parentElement, where);
}