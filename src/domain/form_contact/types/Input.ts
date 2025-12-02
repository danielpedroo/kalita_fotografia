import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { formContactType } from "../schema/validation-form-contact";


export interface IInputProps extends FieldValues {
  nameInput: string;
  nameLabelInput: string;
  typeInput: string;
  namePlaceholderInput: string;
  control: Control<formContactType>;
  errors?: FieldErrors;
}
