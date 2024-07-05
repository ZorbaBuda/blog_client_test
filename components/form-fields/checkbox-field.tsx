import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

type CheckboxFieldProps = {
  name: string;
  label?: string;
} & CheckboxProps;

export function CheckboxField({
  name,
  className,
  ...props
}: CheckboxFieldProps) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center space-x-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
            {...props}
            {...register(name)}
            className={cn(className)}
          />
        )}
      />

      {errors[name] && (
        <p className="absolute mt-0.5 text-sm text-red-600">
          {errors[name]?.message?.toString()}
        </p>
      )}

      {/* <label
        htmlFor={label}
        className="cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <span>{label}</span>
      </label> */}
    </div>
  );
}

export function CheckboxFieldBoolean({ name, label }: CheckboxFieldProps) {
  const { control } = useFormContext();

  return (
    <div className="flex items-center space-x-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <label
        htmlFor={name}
        className="cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <span>{label}</span>
      </label>
    </div>
  );
}
