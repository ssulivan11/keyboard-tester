export const keyboardRowFunctionalArr = [
  { key: 'Escape', classes: 'key key--color-red key--oneandhalf' },
  { key: 'F1', classes: 'key' },
  { key: 'F2', classes: 'key' },
  { key: 'F3', classes: 'key' },
  { key: 'F4', classes: 'key' },
  { key: 'F5', classes: 'key key--color-gray' },
  { key: 'F6', classes: 'key key--color-gray' },
  { key: 'F7', classes: 'key key--color-gray' },
  { key: 'F8', classes: 'key key--color-gray' },
  { key: 'F9', classes: 'key' },
  { key: 'F10', classes: 'key' },
  { key: 'F11', classes: 'key' },
  { key: 'F12', classes: 'key' },
  { key: 'Pn', classes: 'key key--color-gray' },
  { key: 'Delete', classes: 'key key--color-gray key--oneandhalf' },
];

export const keyboardRowNumericArr = [
  { key: '`', subKey: '~', classes: 'key' },
  { key: '1', subKey: '!', classes: 'key' },
  { key: '2', subKey: '@', classes: 'key' },
  { key: '3', subKey: '#', classes: 'key' },
  { key: '4', subKey: '$', classes: 'key' },
  { key: '5', subKey: '%', classes: 'key' },
  { key: '6', subKey: '^', classes: 'key' },
  { key: '7', subKey: '&', classes: 'key' },
  { key: '8', subKey: '*', classes: 'key' },
  { key: '9', subKey: '(', classes: 'key' },
  { key: '0', subKey: ')', classes: 'key' },
  { key: '-', subKey: '_', classes: 'key' },
  { key: '=', subKey: '+', classes: 'key' },
  { key: 'Backspace', classes: 'key key--delete key--color-gray' },
  { key: 'Home', classes: 'key key--color-gray' },
];

const keyboardRowFunctionalObj = keyboardRowFunctionalArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);

const keyboardRowNumericObj = keyboardRowNumericArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);

export const keyboardObject = { ...keyboardRowFunctionalObj, ...keyboardRowNumericObj };
