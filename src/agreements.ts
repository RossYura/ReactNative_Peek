const PRIVACY_URL = '';
const IMPRINT_URL = '';

export const urlByType = {
  privacy: PRIVACY_URL,
  imprint: IMPRINT_URL,
};

export type AgreementType = keyof typeof urlByType;
