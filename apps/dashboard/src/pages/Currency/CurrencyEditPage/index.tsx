import { useState, useLayoutEffect, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLayoutApi } from "../../../providers/layout.provider"
import CurrencyForm, { CurrencyFormType, CurrencyFormValidation } from "../../../components/widgets/CurrencyForm";
import { useAuth } from "../../../providers/auth.provider";
import { CurrencyApi } from "../../../services/api";
import { useSnackbar } from "notistack";
import { Button } from "../../../components/ui/Inputs";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../providers/theme.provider";

export default function CurrencyEditPage() {

  /** Context */

  const { theme } = useTheme();
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAuth();
  const { 
    setPageTitle,
    addPageAction,
    clearPageActions,
   } = useLayoutApi();

  /** States */

  const [form, setForm] = useState<CurrencyFormType>({});
  const [validation, setValidation] = useState<CurrencyFormValidation>({});

  /** Handlers */

  const handleOnClickSave = useCallback(() => {
    if (!form.label || form.label.length === 0) {
      setValidation({ label: false });
    } else {
      setValidation({ label: true });
    }

    if (!token) return;

    if (!id) return;

    CurrencyApi.update(token, id, form)
    .then(() => navigate('/currencies'))
    .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
  }, [
    id,
    token,
    form,
    navigate,
    enqueueSnackbar
  ]);

  const handleOnClickRemove = useCallback(() => {
    if (!token) return;

    if (!id) return;

    CurrencyApi.remove(token, id)
      .then(() => {
        navigate('/currencies');
        enqueueSnackbar('Currency removed!', { variant: 'info' });
      })
      .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
  }, [
    id,
    token,
    navigate,
    enqueueSnackbar
  ])

  /** Effects */

  useEffect(() => {
    if (!token) return;

    if (!id) return;

    CurrencyApi.getOne(token, id)
    .then((data) => setForm(data))
    .catch((err) => {
      navigate('/currencies')
      enqueueSnackbar(err.message, { variant: 'error' });
    })
  }, [
    id,
    token,
    navigate,
    enqueueSnackbar,
  ])

  useLayoutEffect(() => {
    setPageTitle(`Currecy Edit - ${form.label}`);
    addPageAction(
      <Button
        variant={theme === 'light' ? 'contained' : 'outlined'}
        color='primary'
        disabled={!id || !form}
        onClick={handleOnClickSave}
      >
        {t('page__form_btn_save', { defaultValue: 'Save' })}
      </Button>
    );
    addPageAction(
      <Button
        variant={theme === 'light' ? 'contained' : 'outlined'}
        color='error'
        disabled={!id}
        onClick={handleOnClickRemove}
      >
        {t('page__form_btn_remove', { defaultValue: 'Remove' })}
      </Button>
    )

    return () => {
      setPageTitle('');
      clearPageActions();
    }
  }, [
    t,
    id,
    form,
    theme,
    setPageTitle,
    addPageAction,
    clearPageActions,
    handleOnClickSave,
    handleOnClickRemove,
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