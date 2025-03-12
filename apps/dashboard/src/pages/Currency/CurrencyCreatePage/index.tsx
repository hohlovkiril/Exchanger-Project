import { useCallback, useLayoutEffect, useState } from 'react';

import {
  Button,
} from '../../../components/ui/Inputs';
import { useLayoutApi } from '../../../providers/layout.provider';
import CurrencyForm, { CurrencyFormType, CurrencyFormValidation } from '../../../components/widgets/CurrencyForm';
import { CurrencyApi } from '../../../services/api';
import { useAuth } from '../../../providers/auth.provider';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../providers/theme.provider';

export default function CurrencyCreatePage() {

  /** Context */

  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAuth();
  const { addPageAction, clearPageActions } = useLayoutApi();

  /** States */

  const [form, setForm] = useState<CurrencyFormType>({});
  const [validation, setValidation] = useState<CurrencyFormValidation>({});

  /** Handlers */

  const handleOnClick = useCallback(() => {
    if (!form.label || form.label.length === 0) {
      setValidation({ ...validation, label: false });
    } else {
      setValidation({ ...validation, label: true });
    }

    if (!token) return;

    CurrencyApi.create(token, form)
    .then(() => navigate('/currencies'))
    .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
  }, [
    token,
    form,
    validation,
    navigate,
    enqueueSnackbar
  ])

  /** Effects */

  useLayoutEffect(() => {
    addPageAction(
      <Button
        variant={theme === 'light' ? 'contained' : 'outlined'}
        color='primary'
        onClick={handleOnClick}
      >
        {t('page__form_btn_save', { defaultValue: 'Save' })}
      </Button>
    )

    return () => clearPageActions();
  }, [
    t,
    theme,
    addPageAction,
    clearPageActions,
    handleOnClick,
  ])

  return (
    <>
      <CurrencyForm
        form={form}
        formValidation={validation}
        onChange={(payload) => setForm({ ...payload })}
      />
    </>
  )
}