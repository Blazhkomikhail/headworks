const generateKey = (data: string): string => {
  return data + Math.random();
};

export default generateKey;
