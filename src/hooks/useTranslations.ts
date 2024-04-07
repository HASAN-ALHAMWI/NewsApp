import i18next from '../locales/i18next';

export default () => {
  // TO DO
  // change the type of state
  // const resourcesStringResults = useSelector((state: any) => state?.config?.resourcesStringResults);
  const language = i18next.language === 'ar' ? 'ar' : i18next.language;

  const translate = (keyName: string) => {
    // TO DO
    // Implement with mobx (API string)

    // const keyItems = resourcesStringResults?.find((lang: { language: string; }) => lang?.language === language);
    // const keyItem = keyItems?.values?.find((item: { key: string; }) => item?.key == keyName);

    //If translation available in API response then it will return.
    //otherwise it will get from the local en/ar file.
    // return keyItem?.value ? keyItem?.value : t(keyName);
    return i18next.t(keyName);
  };
  return [translate, language] as const;
};
