import * as React from 'react';
import Locale from '../constants/Locale';
import useDeviceLocale from './useDeviceLocale';


export function useLocale(
  props: { en?: string; ar?: string ;tr?: string},
  stringName: keyof typeof Locale.en & keyof typeof Locale.ar & keyof typeof Locale.tr
) {
  const locale = useDeviceLocale();
  const stringFromLocale = props[locale];

  if (stringFromLocale) {
    return stringFromLocale;
  } else {
    return Locale[locale][stringName];
  }
}