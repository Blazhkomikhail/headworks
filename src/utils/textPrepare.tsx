const textMaxLength = 300;
 
const textPrepare = (text: string, handlerSet: (value:boolean) => void) => {
  if (!text) return;
  if (text.length > textMaxLength) {
    handlerSet(true);
    return `${text.slice(0, textMaxLength)}...`;
  }
  return text;
}

export default textPrepare;