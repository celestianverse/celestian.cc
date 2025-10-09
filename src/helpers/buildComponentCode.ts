const PROPS_ORDER = [
  "as", "id", "on", "overflow", "variant", "name", "color", "tone", "size",
  "columns", "direction", "wrap", "align", "justify", "grow", "gap",
  "alignSection", "width", "height", "offsetHeader",
  "value", "label", "labelPosition", "labelWidth", "placeholder",
  "padding", "paddingY", "paddingTop", "paddingBottom", "paddingX",
  "radius", "radiusTop", "radiusBottom", "borderStyle", "borderWidth",
  "weight", "lineHeight", "whiteSpace", "uppercase", "lowercase", "ellipsis",
  "iconStart", "iconEnd", "iconOnly",
  "fullwidth", "square", "checked", "active", "loading", "disabled",
  "onChange", "className", "classNameContainer",
  "laptopDirection", "laptopAlign", "laptopJustify", "laptopGap",
  "laptopPadding", "laptopPaddingY", "laptopPaddingX",
  "laptopRadius", "laptopRadiusTop", "laptopRadiusBottom",
  "tabletDirection", "tabletAlign", "tabletJustify", "tabletGap",
  "tabletPadding", "tabletPaddingY", "tabletPaddingX",
  "tabletRadius", "tabletRadiusTop", "tabletRadiusBottom",
  "mobileDirection", "mobileAlign", "mobileJustify", "mobileGap",
  "mobilePadding", "mobilePaddingY", "mobilePaddingX",
  "mobileRadius", "mobileRadiusTop", "mobileRadiusBottom",
];

const propPriority = (key: string): number => {
  const idx = PROPS_ORDER.indexOf(key as any);

  if (idx !== -1) return idx;

  if (key.startsWith("aria-")) return PROPS_ORDER.indexOf("aria-*" as any);

  if (key.startsWith("data-")) return PROPS_ORDER.indexOf("data-*" as any);

  return Number.MAX_SAFE_INTEGER;
};

const escapeAttr = (string: string): string =>
  string.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const indent2 = (string: string): string =>
  string.split("\n").map(line => (line ? `  ${line}` : line)).join("\n");

const serialize = (key: string, value: any): string | null => {
  if (value == null) return null;

  switch (typeof value) {
    case "string":
      if (value.length === 0) return null;
      return `${key}="${escapeAttr(value)}"`;
    case "number":
      return `${key}={${value}}`;
    case "boolean":
      return value ? key : `${key}={false}`;
    case "function": {
      const functionName = value.name || "() => {}";
      return `${key}={${functionName}}`;
    }
    default: {
      try {
        const json = JSON.stringify(value, null, 2);
        return `${key}={${json}}`;
      } catch {
        return `${key}={${String(value)}}`;
      }
    }
  }
};

export const buildComponentCode = <P extends Record<string, any>>(options: {
  name: string;
  props: P;
  defaults?: Partial<P>;
  children?: string | null;
}): string => {
  const {name, props, defaults = {} as Partial<P>, children = null} = options;

  const keys = Object.keys(props) as Array<keyof P>;

  const differs = (key: keyof P) => !Object.is(props[key], defaults[key]);

  const kept = keys
    .filter(key => differs(key) && serialize(String(key), props[key]) !== null)
    .sort((keyA, keyB) => {
      const priorityA = propPriority(String(keyA));
      const priorityB = propPriority(String(keyB));
      return priorityA === priorityB
        ? String(keyA).localeCompare(String(keyB))
        : priorityA - priorityB;
    });

  if (kept.length === 1) {
    const single = serialize(String(kept[0]), props[kept[0]])!;
    if (!children) {
      return `<${name} ${single} />`;
    }
    const body = indent2(children);
    return `<${name} ${single}>\n${body}\n</${name}>`;
  }

  const attrsBlock = kept
    .map(key => serialize(String(key), props[key])!)
    .join("\n");

  if (!children) {
    if (!attrsBlock) return `<${name} />`;

    return `<${name}\n${indent2(attrsBlock)}\n/>`;
  }

  const open = attrsBlock
    ? `<${name}\n${indent2(attrsBlock)}\n>`
    : `<${name}>`;

  const body = indent2(children);

  return `${open}\n${body}\n</${name}>`;
};
