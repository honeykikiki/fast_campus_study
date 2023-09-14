export const removeEmpty = (obj: Record<string, string>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== 'undefined')
  );
};
