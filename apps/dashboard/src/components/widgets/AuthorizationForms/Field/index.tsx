import { FormControl } from "@mui/material";
import { CredentialsField } from "../../../../common/types"

import {
  Stack,
} from '../../../ui/Surfaces';
import {
  TextField
} from '../../../ui/Inputs';

export interface IAuthFormFieldProps {
  form: any;
  setForm: (value: any) => void;
  fieldConfig: CredentialsField;
}

export default function AuthFormField({
  form,
  setForm,
  fieldConfig
}: IAuthFormFieldProps) {

  /** Vars */

  const config = fieldConfig;

  return (
    <>
      <FormControl>
        <TextField
          label={config.label}
          type={config.type}
          value={form[config.formKey] || config.defaultValue || ''}
          onChange={(evt) => setForm(evt.currentTarget.value)}
          required={config.required}
          focused={config.autoFocus} 
        />
      </FormControl>
    </>
  )
}