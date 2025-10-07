import classNames from "classnames";
import { Children, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  autoUpdate,
  flip,
  useFloating,
  useInteractions,
  useListNavigation,
  useTypeahead,
  useClick,
  useDismiss,
  useRole,
  FloatingFocusManager,
  FloatingList,
  offset,
  size as sizeMiddleware,
} from "@floating-ui/react";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Text } from "@/components/uikit/Text/Text";
import { SelectContext } from "@/contexts/SelectContext/SelectContext";
import type { SelectProps } from "./Select.types";
import styles from "./Select.module.scss";

export const Select = (
  {
    value,
    placeholder = "Select...",
    variant = "flat",
    color = "primary",
    tone = "soft",
    size = "m",
    width,
    radius,
    borderStyle,
    borderWidth,
    disabled,
    onChange,
    className,
    children
  }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const {refs, floatingStyles, context} = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      offset(4),
      sizeMiddleware({
        apply({rects, elements, availableHeight}) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 12,
      }),
    ],
  });

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  useEffect(() => {
    if (value != null) setSelectedLabel(value);
  }, [value]);

  const handleSelect = useCallback((index: number | null) => {
    setSelectedIndex(index);
    setIsOpen(false);
    if (index !== null) {
      const label = labelsRef.current[index] ?? null;
      setSelectedLabel(label);
      if (label != null) onChange?.(label);
    }
  }, [onChange]);

  const optionLabels = useMemo<string[]>(() => {
    return Children.toArray(children)
      .map((child) => (isValidElement(child) ? (child.props as any).label : null))
      .filter((v): v is string => typeof v === "string");
  }, [children]);

  useEffect(() => {
    if (isOpen) {
      const target = (value ?? selectedLabel) ?? null;
      if (target != null) {
        const i = optionLabels.findIndex(l => l === target);
        const idx = i >= 0 ? i : null;
        setSelectedIndex(idx);
        setActiveIndex(idx);
      }
    }
  }, [isOpen, value, selectedLabel, optionLabels]);

  const handleTypeaheadMatch = (index: number | null) => {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  };

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {role: "listbox"});

  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = useInteractions([listNav, typeahead, click, dismiss, role]);

  const selectContext = useMemo(
    () => ({
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect
    }),
    [activeIndex, selectedIndex, getItemProps, handleSelect]
  );

  const getInteraction = () => {
    if (disabled) return {};

    return getReferenceProps();
  };

  return (
    <>
      <div
        ref={refs.setReference}
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={classNames(
          styles.select,
          styles[`variant-${variant}`],
          styles[`color-${color}`],
          styles[`tone-${tone}`],
          styles[`size-${size}`],
          {
            [`border-radius-${radius}`]: radius != null,
            [`border-style-${borderStyle}`]: borderStyle,
            ["disabled"]: disabled,
          },
          className,
        )}
        style={{width: width, borderWidth: borderWidth}}
        {...getInteraction()}
      >
        <Text
          weight="medium"
          ellipsis
        >
          {value ?? selectedLabel ?? placeholder}
        </Text>
        <Icon
          size="s"
          name="angleDown"
        />
      </div>
      <SelectContext.Provider value={selectContext}>
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className={classNames(
                "scroll",
                styles.list,
                styles[`color-${color}`],
                styles[`tone-${tone}`],
                styles[`size-${size}`],
                {
                  [`border-radius-${radius}`]: radius != null,
                },
              )}
              style={{...floatingStyles, overflowY: "auto"}}
              {...getFloatingProps()}
            >
              <FloatingList
                elementsRef={elementsRef}
                labelsRef={labelsRef}
              >
                {children}
              </FloatingList>
            </div>
          </FloatingFocusManager>
        )}
      </SelectContext.Provider>
    </>
  );
};