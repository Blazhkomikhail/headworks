const generateKey = (data: string) => {
  return data + Math.random();
}

export default generateKey;