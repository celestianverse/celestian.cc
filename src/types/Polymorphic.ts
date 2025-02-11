import type React from "react";

/**
 * Type that combines custom properties and `ref` attributes
 *
 * Combines:
 * - Custom properties defined by type `T`
 * - `ref` attributes that ensure `ref` is typed as `R`
 *
 * @template R HTML element to which `ref` will be bound
 * @template T Additional custom properties for the component, defaults to an empty object
 */
export type PropsWithRef<
  R extends HTMLElement,
  T extends Record<string, unknown> = Record<string, never>,
> =
  T &
  React.RefAttributes<R>;

/**
 * Type for handling `ref` property in polymorphic components
 *
 * @template E HTML element or React component
 * @template R Indicates whether the component uses `ref`
 * - If `true`, returns a type that includes the `ref` property for the `E` element.
 * - If `false`, excludes the `ref` property.
 */
export type PolymorphicRef<
  R extends boolean,
  E extends React.ElementType,
> =
  R extends true
    ? ("ref" extends keyof React.ComponentPropsWithRef<E>
      ? { ref?: React.ComponentPropsWithRef<E>["ref"] }
      : object)
    : object;

/**
 * Base type for the component with the ability to dynamically replace the element via the `as` prop
 *
 * `as` - Optional prop to specify the type of HTML element or component
 * that will be used as the root
 */
export type BaseProps<E extends React.ElementType> = {
  as?: E;
};

/**
 * Generic type for polymorphic components
 *
 * Combines:
 * - Props from custom type `T`
 * - Base properties of the component `BaseProps<E>`
 * - All props available for the passed element `E`, excluding conflicts with keys from `T`
 *
 * @template E HTML element or React component to use as the root element
 * @template T Additional custom properties for the component, defaults to an empty object
 * @template R Specifies whether the component uses `ref`
 */
export type Polymorphic<
  E extends React.ElementType,
  T extends Record<string, unknown> = Record<string, never>,
  R extends boolean = false,
> =
  T &
  BaseProps<E> &
  PolymorphicRef<R, E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof T>;
