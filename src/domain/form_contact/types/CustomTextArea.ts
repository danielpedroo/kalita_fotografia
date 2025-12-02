import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { formContactType } from "../schema/validation-form-contact";

export interface CustomTextAreaProps extends FieldValues {
  name: keyof formContactType;
  control: Control<formContactType>;
  errors?: FieldErrors;
}
