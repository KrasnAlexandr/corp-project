import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames";
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton";

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const { t, i18n} = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <AppButton
        theme={ThemeButton.CLEAR}
        onClick={toggleLang}
        className={classNames(cls.LangSwitcher, {}, [className])}
      >
        {t('language')}
    </AppButton>
  )
}
