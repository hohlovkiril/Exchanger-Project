import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useSnackbar } from "notistack";

import { useTheme } from "../../../providers/theme.provider"
import { useAuth } from "../../../providers/auth.provider";
import { useLayoutApi } from "../../../providers/layout.provider";
import RateForm, { RateFormType, RateFormValidation } from "../../../components/widgets/RateForm";
import { RateApi } from "../../../services/api";
import { Button } from "../../../components/ui/Inputs";

export default function RateEditPage() {
  
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

  const [form, setForm] = useState<RateFormType>({});
  const [validation, setValidation] = useState<RateFormValidation>({});

  /** Handlers */

  const handleOnClickSave = useCallback(() => {
    if (!token) return;

    if (!id) return;

    RateApi.update(token, id, form)
      .then(() => navigate('/rates'))
      .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }));
  }, [
    id,
    form,
    token,
    navigate,
    enqueueSnackbar,
  ])

  const handleOnClickRemove = useCallback(() => {
    if (!token) return;

    if (!id) return;

    RateApi.remove(token, id)
      .then(() => {
        navigate('/rates');
        enqueueSnackbar('Rate removed!', { variant: 'info' });
      })
      .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
  }, [
    id,
    token,
    navigate,
    enqueueSnackbar,
  ])

  /** Effects */

  useEffect(() => {
    if (!id) return;

    if (!token) return;

    RateApi.getOne(token, id)
      .then((data) => setForm(data))
      .catch((err) => {
        navigate('/rates');
        enqueueSnackbar(err.message, { variant: 'error' });
      });
  }, [
    id,
    token,
    navigate,
    enqueueSnackbar,
  ])

  useLayoutEffect(() => {
    setPageTitle(`Rate Edit - #${id} ${form.symbol}`);
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
    );

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
      <RateForm
        form={form}
        formValidation={validation}
        onChange={(payload) => setForm({ ...payload })}
        edit
      />
    </>
  )
}