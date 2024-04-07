const commonColors = {
  $blueColor: '#553d92',
  $lightblueColor: '#8b78b6',
  $lightgreyColor: '#020908',
  $borderGrayLighterColor: '#D0DBEC',
  $goldColor: '#B1A3FA',
};

export const Theme = {
  light: {
      ...commonColors,
      primary: '#f3f4f6',
      secondary: '#fff',
      tertairy: '#dedede',
      accent: '#e0e0e0',
      tint:'#111827',    
  },
  dark: {
    ...commonColors,
    primary: '#1f2937',
    secondary: '#313d4e',
    tertairy: '#d1d5db',
    accent: '#666666',
    tint:'#f9fafb',   
  },
}
