export const checkPassword = (text: string) => {
  const regex = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  // 최소 8 자, 최대 16자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 :
  return regex.test(text);
};

export const checkPhone = (text: string) => {
  const regex1 = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const regex2 = /^01([0-9]{9})/;
  return regex1.test(text) || regex2.test(text);
};

export const checkEmail = (text: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regex.test(text);
};

export const checkNickName = (text: string) => {
  return text.length > 0;
};

export const checkId = (text: string) => {
  return text.length > 0;
};
