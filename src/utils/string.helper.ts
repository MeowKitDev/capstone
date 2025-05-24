export function formatPhoneNumber(phoneNumber: string) {
  if (!phoneNumber || phoneNumber.length !== 10) return '';
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}

export const removeUnderscoreString = (strings?: string): string => {
  if (!strings) return '';

  return strings
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
};
