import classNames from "classnames";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  offset, size,
} from "@floating-ui/react";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Text } from "@/components/uikit/Text/Text";
import { SelectContext } from "@/contexts/SelectContext/SelectContext";
import type { Props } from "./Select.types";
import styles from "./Select.module.scss";

export const Select = (
  {
    value,
    placeholder = "Select...",
    width,
    onChange,
    className,
    children
  }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      offset(4),
      size({
        apply({ rects, elements, availableHeight }) {
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

  useEffect(() => {
    if (isOpen) {
      const target = (value ?? selectedLabel) ?? null;
      if (target != null) {
        const i = labelsRef.current.findIndex(l => l === target);
        setSelectedIndex(i >= 0 ? i : null);
        setActiveIndex(i >= 0 ? i : null);
      }
    }
  }, [isOpen, value, selectedLabel]);

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
  const role = useRole(context, { role: "listbox" });

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

  return (
    <>
      <div
        ref={refs.setReference}
        tabIndex={0}
        className={classNames(
          styles.select,
          className,
        )}
        style={{ width: width }}
        {...getReferenceProps()}
      >
        <Text
          size="s"
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
                styles.content,
              )}
              style={{...floatingStyles, overflowY: "auto", width: width}}
              {...getFloatingProps()}
            >
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                {children}
              </FloatingList>
            </div>
          </FloatingFocusManager>
        )}
      </SelectContext.Provider>
    </>
  );
};