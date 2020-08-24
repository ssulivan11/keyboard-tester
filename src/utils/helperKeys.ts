/* eslint-disable */
const keyboardRowFunctionalObj = (activeKeyboard: any) =>
  activeKeyboard.keyboardRowFunctionalArr.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.key]: false }),
    {},
  );
const keyboardRowNumericObj = (activeKeyboard: any) =>
  activeKeyboard.keyboardRowNumericArr.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.key]: false }),
    {},
  );
const keyboardRowAlphaOneObj = (activeKeyboard: any) =>
  activeKeyboard.keyboardRowAlphaOneArr.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.key]: false }),
    {},
  );
const keyboardRowAlphaTwoObj = (activeKeyboard: any) =>
  activeKeyboard.keyboardRowAlphaTwoArr.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.key]: false }),
    {},
  );

const keyboardRowAlphaThreeObj = (activeKeyboard: any) =>
  activeKeyboard.keyboardRowAlphaThreeArr.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.key]: false }),
    {},
  );

const keyboardRowControlObj = (activeKeyboard: any) =>
  activeKeyboard.keyboardRowControlArr.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.key]: false }),
    {},
  );

export const keyboardObject = (active: any) => ({
  ...keyboardRowFunctionalObj(active),
  ...keyboardRowNumericObj(active),
  ...keyboardRowAlphaOneObj(active),
  ...keyboardRowAlphaTwoObj(active),
  ...keyboardRowAlphaThreeObj(active),
  ...keyboardRowControlObj(active),
});
