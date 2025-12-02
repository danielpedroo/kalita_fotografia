import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { formContactType } from "../schema/validation-form-contact";

export interface ICustomPhone extends FieldValues {
  label?: string;
  name: keyof formContactType;
  control: Control<formContactType>;
  errors?: FieldErrors;
  placeholder?: string;
}