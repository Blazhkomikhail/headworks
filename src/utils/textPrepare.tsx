const textMaxLength = 140;
 
const textPrepare = (text: string, stateSetter: (value:boolean) => void) => {
  if (!text) return;
  if (text.length > textMaxLength) {
    stateSetter(true);
    return `${text.slice(0, textMaxLength)}...`;
  }
  return text;
}

export default textPrepare;