import { Control, FieldErrors } from "react-hook-form";
import { formContactType } from "../schema/validation-form-contact";

export interface CustomSelectProps {
  name: keyof formContactType;
  control: Control<formContactType>;
  errors?: FieldErrors<formContactType>;
}
