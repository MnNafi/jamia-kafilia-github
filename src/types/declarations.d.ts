declare module "class-variance-authority" {
  export type ClassProp<T = Record<string, unknown>> =
    | string
    | string[]
    | Record<string, unknown>
    | undefined
    | null
    | T;

  export interface CVAConfig {
    base?: string | string[];
    variants?: Record<string, Record<string, string | string[]>>;
    compoundVariants?: Array<Record<string, unknown>>;
    defaultVariants?: Record<string, string>;
  }

  export function cva(
    base?: string | string[],
    config?: CVAConfig
  ): (props?: Record<string, unknown>) => string;

  export type VariantProps<T extends (...args: unknown[]) => unknown> =
    Partial<Parameters<T>[0]>;
}

declare module "clsx" {
  export type ClassValue =
    | string
    | number
    | boolean
    | undefined
    | null
    | Record<string, unknown>
    | ClassValue[];
  export function clsx(...inputs: ClassValue[]): string;
}

declare module "tailwind-merge" {
  export function twMerge(
    ...classLists: (string | undefined | null | false)[]
  ): string;
}

declare module "@radix-ui/react-slot" {
  import * as React from "react";
  export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
  }
  export const Slot: React.ForwardRefExoticComponent<
    SlotProps & React.RefAttributes<HTMLElement>
  >;
}
