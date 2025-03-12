import { useState, useCallback, useLayoutEffect } from 'react'
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/auth.provider";
import { useLayoutApi } from "../../../providers/layout.provider";
import RateForm, { RateFormType, RateFormValidation } from '../../../components/widgets/RateForm';
import { Button } from '../../../components/ui/Inputs';
import { RateApi } from '../../../services/api';
import { useTranslation } from 'react-i18next';

export default function RateCreatePage() {
  
  /** Context */

  const { t } = useTranslation();
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAuth();
  const { addPageAction, clearPageActions } = useLayoutApi();

  /** States */

  const [form, setForm] = useState<RateFormType>({});
  const [validation, setValidation] = useState<RateFormValidation>({});

  /** Handlers */

  const handleOnClick = useCallback(() => {
    if (!form.clientCurrencyBuyId) {
      setValidation({ ...validation, clientCurrencyBuy: false });
    } else {
      setValidation({ ...validation, clientCurrencyBuy: true });
    }

    if (!form.clientCurrencySellId) {
      setValidation({ ...validation, clientCurrencySell: false });
    } else {
      setValidation({ ...validation, clientCurrencySell: true });
    }

    if (!form.price || form.price <= 0) {
      setValidation({ ...validation, price: false });
    } else {
      setValidation({ ...validation, price: true });
    }

    for (let i = 0; i < Object.keys(validation).length; i++) {
      const key = Object.keys(validation)[i] as keyof RateFormValidation;

      if (validation[key] === false) return;
    }

    if (!token) return;

    RateApi.create(token, form)
      .then(() => navigate('/rates'))
      .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
  }, [
    form,
    token,
    validation,
    navigate,
    enqueueSnackbar,
  ])  

  /** Effects */

  useLayoutEffect(() => {
    addPageAction(
      <Button
        variant='contained'
        color='primary'
        onClick={handleOnClick}
      >
        {t('page__form_btn_save', { defaultValue: 'Save' })}
      </Button>
    )

    return () => clearPageActions();
  }, [
    t,
    addPageAction,
    clearPageActions,
    handleOnClick,
  ])

  return (
    <>
      <RateForm
        form={form}
        formValidation={validation}
        onChange={(payload) => setForm({ ...payload })}
      />
    </>
  )
}