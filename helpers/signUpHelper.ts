export const phoneVerifyAndPass = (p: string): string => {
  const phone = p.trim();
  const head = "+82";
  const body = phone.replace(/\-/g, "");
  const res = head + body.slice(1);

  return res;
};
