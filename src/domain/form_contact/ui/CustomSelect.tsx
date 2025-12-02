"use client";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { GoChevronDown } from "react-icons/go";
import { CustomSelectProps } from "../types/CustomSelect";
import clsx from "clsx";
import ErrorMessage from "./ErrorMessage";
import { options } from "../config/options";

export default function CustomSelect({
  name,
  control,
  errors,
}: CustomSelectProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field }) => {
        const selected = field.value || "Selecionar";

        return (
          <div className="flex flex-col gap-2 w-full h-full">
            <span className="font-nunito font-semibold leading-[1.5] text-[1rem] text-kalita-brown-dark">
              Qual sessão de interesse?
            </span>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={clsx(
                "w-full py-4 px-8 bg-kalita-bg-light border border-kalita-bg-light-brown rounded-md font-nunito text-kalita-bg-light-brown text-left flex justify-between items-center text-[0.875rem]",
                {
                  "border-kalita-error": errors?.full_name,
                }
              )}
            >
              {selected}
              <GoChevronDown
                className={`text-2xl text-kalita-brown-dark ${
                  open && "rotate-180"
                }`}
              />
            </button>

            <ErrorMessage message={errors?.[name]?.message as string} />

            {open && (
              <ul className="w-full mt-2">
                {options.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      field.onChange(opt);
                      setOpen(false);
                    }}
                    className="font-nunito font-normal text-[0.875rem]
                        text-kalita-bg-light-brown w-full h-16 py-4 px-8
                        bg-kalita-bg-light border-b-[0.063rem] border-b-kalita-bg-light-brown
                        cursor-pointer"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    />
  );
}
