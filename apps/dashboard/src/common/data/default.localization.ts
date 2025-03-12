import { Localization } from "../types";

export const defaultLocalization: Localization = {
  en: {
    translation: {
      'ru': 'Russian',
      'en': 'English',
      /**
       * Header Widgets
       */
      'header__widget_theme_tooltip': 'Theme',
      
      'header__widget_language_tooltip': 'Language',
      
      'header__widget_notification_tooltip': 'Notification',
      'header__widget_notification_title': 'Notification',
      'header__widget_notification_btn_view_all': 'View All',
      'header__widget_notification_placeholder': 'You have no new notifications.',
      
      'header__widget_message_tooltip': 'Messages',
      'header__widget_message_title': 'Messages',
      'header__widget_message_btn_view_all': 'View All',
      'header__widget_message_placeholder': 'You have no new messages.',

      'header__widget_profile_tooltip': 'Profile',
      'header__widget_profile_item_profile': 'Profile',
      'header__widget_profile_item_settings': 'Settings',
      'header__widget_profile_item_logout': 'Logout',

      /** Page Titles */
      'page_title_by_path_/': 'Home',
      'page_title_by_path_/profile': 'Basic Account',
      'page_title_by_path_/profile/account': 'Basic Account',
      'page_title_by_path_/profile/change-password': 'Change Password',
      'page_title_by_path_/profile/settings': 'Account Settings',

      /** Breadcrumbs */
      'page_breadcrumb_by_path_/': 'Home',
      'page_breadcrumb_by_path_/profile': 'Account Profile',
      'page_breadcrumb_by_path_/profile/change-password': 'Change Password',
      'page_breadcrumb_by_path_/profile/settings': 'Account Settings',

      /** Pages */

      // Profile
      'page__profile_tab_my_account': 'My Account',
      'page__profile_tab_change_password': 'Change Password',
      'page__profile_tab_settings': 'Settings',

      'page__profile_card_my_account_general_settings_title': 'General Settings',
      // 'page__profile_card_my_account_general_settings_username': 'Account Useme',
      // 'page__profile_card_my_account_general_settings_email': 'Account Email',
      // 'page__profile_card_my_account_general_settings_first_name': 'First Name',
      // 'page__profile_card_my_account_general_settings_last_name': 'Last Name',

      'page__profile_card_change_password_title': 'Change Password',
      'page__profile_card_change_password_old_password': 'Old Password',
      'page__profile_card_change_password_new_password': 'New Password',
      'page__profile_card_change_password_confirm_password': 'Confirm Password',
      'page__profile_card_change_password_rule_title': 'New Password Must Contain',
      'page__profile_card_change_password_rule_length': 'At least 8 characters',
      'page__profile_card_change_password_rule_lower': 'At least 1 lower letter (a - z)',
      'page__profile_card_change_password_rule_upper': 'At least 1 uppercase letter (A - Z)',
      'page__profile_card_change_password_rule_number': 'At least 1 number (0 - 9)',

      'page__profile_card_settings_email_settings_title': 'Email Settings',
      'page__profile_card_settings_email_settings_enable_notification': 'Email Notification',
      'page__profile_card_settings_email_settings_send_copy_to_email': 'Send Copy To Personal Email',

      'page__profile_card_settings_security_title': 'Security Settings',
      'page__profile_card_settings_security_settings_login_email_confirm': 'Login confirmation by email',
      'page__profile_card_settings_security_settings_password_change_email_confirm': 'Password change confirmation by email',

      'page__profile_card_settings_notification_title': 'Notification Settings',
      'page__profile_card_settings_notification_login_notification': 'Login notification',
      'page__profile_card_settings_notification_new_message': 'Notification of new messages',
      'page__profile_card_settings_notification_new_events': 'Notification of new events',
      'page__profile_card_settings_notification_tasks': 'Notifications about tasks and deadlines',
      'page__profile_card_settings_notification_system': 'System notifications',

      'page__profile_card_settings_social_title': 'Social Network Settings',
      'page__profile_card_settings_social_btn_connect': 'Connect',
      'page__profile_card_settings_social_btn_disconect': 'Disconect',

      'page__profile_card_btn_cancel': 'Cancel',
      'page__profile_card_btn_update': 'Update',
    }
  },
  ru: {
    translation: {
      'ru': 'Русский',
      'en': 'Английский',
      /**
       * Header Widgets
       */
      'header__widget_theme_tooltip': 'Тема',
      
      'header__widget_language_tooltip': 'Язык',
      
      'header__widget_notification_tooltip': 'Уведомления',
      'header__widget_notification_title': 'Уведомления',
      'header__widget_notification_btn_view_all': 'Посмотреть все',
      'header__widget_notification_placeholder': 'У вас нет новых уведомлений',
      
      'header__widget_message_tooltip': 'Сообщения',
      'header__widget_message_title': 'Сообщения',
      'header__widget_message_btn_view_all': 'Посмотреть все',
      'header__widget_message_placeholder': 'У вас нет новых сообщений.',
      
      'header__widget_profile_tooltip': 'Профиль',
      'header__widget_profile_item_profile': 'Профиль',
      'header__widget_profile_item_settings': 'Настройки',
      'header__widget_profile_item_logout': 'Выйти',

      /** Page Titles */
      'page_title_by_path_/': 'Главная',
      'page_title_by_path_/currency': 'Валюта',
      'page_title_by_path_/currency/create': 'Создать Валюту',
      'page_title_by_path_/rate': 'Курс',
      'page_title_by_path_/profile': 'Профиль',
      'page_title_by_path_/profile/account': 'Профиль',
      'page_title_by_path_/profile/change-password': 'Смена пароля',
      'page_title_by_path_/profile/settings': 'Настройки Аккаунта',
      
      /** Breadcrumbs */
      'page_breadcrumb_by_path_/': 'Главная',
      'page_breadcrumb_by_path_/currency': 'Валюта',
      'page_breadcrumb_by_path_/currency/create': 'Создать Валюту',
      'page_breadcrumb_by_path_/rate': 'Курс',
      'page_breadcrumb_by_path_/profile': 'Профиль',
      'page_breadcrumb_by_path_/profile/account': 'Профиль',
      'page_breadcrumb_by_path_/profile/change-password': 'Смена пароля',
      'page_breadcrumb_by_path_/profile/settings': 'Настройки Аккаунта',

      /** Widgers */

      /** Pages */

      // Forms
      'page__form_btn_save': 'Сохранить',
      'page__form_btn_remove': 'Удалить',

      // Currency
      'page__currency_list_btn_add': 'Добавить Валюту',
      'page__currency_list_btn_refresh': 'Обновить',

      // Rate
      'page__rate_list_btn_add': 'Добавить Курс',
      'page__rate_list_btn_refresh': 'Обновить',

      // Profile
      'page__profile_tab_my_account': 'Мой Аккаунт',
      'page__profile_tab_change_password': 'Смена пароля',
      'page__profile_tab_settings': 'Настройки',

      'page__profile_card_my_account_general_settings_title': 'Главные настройки',
      // 'page__profile_card_my_account_general_settings_username': 'Account Useme',
      // 'page__profile_card_my_account_general_settings_email': 'Account Email',
      // 'page__profile_card_my_account_general_settings_first_name': 'First Name',
      // 'page__profile_card_my_account_general_settings_last_name': 'Last Name',

      'page__profile_card_change_password_title': 'Смена пароля',
      'page__profile_card_change_password_old_password': 'Старый пароль',
      'page__profile_card_change_password_new_password': 'Новый пароль',
      'page__profile_card_change_password_confirm_password': 'Подтвердить пароль',
      'page__profile_card_change_password_rule_title': 'Новый пароль должен содержать',
      'page__profile_card_change_password_rule_length': 'Минимум 8 символов',
      'page__profile_card_change_password_rule_lower': 'По крайней мере 1 строчная буква (a - z)',
      'page__profile_card_change_password_rule_upper': 'По крайней мере 1 заглавная буква (A - Z)',
      'page__profile_card_change_password_rule_number': 'По крайней мере 1 число (0 - 9)',

      'page__profile_card_settings_email_settings_title': 'Настройки электронной почты',
      'page__profile_card_settings_email_settings_enable_notification': 'Уведомление по электронной почте',
      'page__profile_card_settings_email_settings_send_copy_to_email': 'Отправить копию на личный адрес электронной почты',

      'page__profile_card_settings_security_title': 'Настройки безопасности',
      'page__profile_card_settings_security_settings_login_email_confirm': 'Подтверждение входа по электронной почте',
      'page__profile_card_settings_security_settings_password_change_email_confirm': 'Подтверждение смены пароля по электронной почте',

      'page__profile_card_settings_notification_title': 'Настройки уведомлений',
      'page__profile_card_settings_notification_login_notification': 'Уведомление о входе',
      'page__profile_card_settings_notification_new_message': 'Уведомление о новых сообщениях',
      'page__profile_card_settings_notification_new_events': 'Уведомление о новых событиях',
      'page__profile_card_settings_notification_tasks': 'Уведомления о задачах и сроках',
      'page__profile_card_settings_notification_system': 'Уведомления о задачах и сроках',

      'page__profile_card_settings_social_title': 'Настройки социальных сетей',
      'page__profile_card_settings_social_btn_connect': 'Подключить',
      'page__profile_card_settings_social_btn_disconect': 'Отключить',

      'page__profile_card_btn_cancel': 'Отменить',
      'page__profile_card_btn_update': 'Сохранить',
    }
  },
}