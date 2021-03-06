const castArray = val => (Array.isArray(val) ? val : [val]);

const isUndefined = val => val === undefined;

const normalizeChildren = val => isUndefined(val) ? [] : castArray(val);

let idCounter = 0;
const generateUniqueId = (prefix = 'element') => `${prefix}-${idCounter++}`;

const combineClassNames = (classNames) => classNames.join(' ').trim();

const propsToOmit = [
  'fontFamily',
  'fontSize',
  'fontWeight',
  'boxShadow',
  'borderRadius',
  'margin',
  'marginVertical',
  'marginHorizontal',
  'padding',
  'paddingVertical',
  'paddingHorizontal',
  'color',
  'backgroundColor',
  'style'
];

const omitProps = (obj, arr = propsToOmit) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

const parseFontFamily = (fontFamily) => {
  let regex = /^(-{0}|-{2})(font-)?[abc]$/;
  let _fontFamily = `${fontFamily}`.toLowerCase().trim();
  if (regex.test(_fontFamily))
    return `var(--font-${_fontFamily.slice(-1)})`;
  return fontFamily;
}

const parseFontSize = (fontSize) => {
  let regex = /^(-{0}|-{2})(ts-)?(\d{1,3})p?$/
  let _fontSize = `${fontSize}`.toLowerCase().trim();
  if (regex.test(_fontSize))
    return `var(--ts-${_fontSize.match(regex)[3]}p)`;
  return _fontSize;
}

const parseFontWeight = (fontWeight) => {
  return `${fontWeight}`.toLowerCase().trim();
}

const parseShadow = (shadow) => {
  let regex = /^(-{0}|-{2})(shadow-)?(\d{1,3})?$/
  let _shadow = `${shadow}`.toLowerCase().trim();
  if (regex.test(_shadow))
    return `var(--shadow-${_shadow.match(regex)[3]})`;
  return _shadow;
}

const parseColor = (color) => {
  let regex = /^(-{0}|-{2})(.+-\d{1,3})?$/;
  let _color = `${color}`.toLowerCase().trim();
  if (regex.test(_color))
    return `var(--${_color.match(regex)[2]})`;
  return _color;
}

const parseLayout = (layoutSize) => {
  let regex = /^(-{0}|-{2})(ls-)?(\d{1,3})p?$/
  let _layoutSize = `${layoutSize}`.toLowerCase().trim();
  if (regex.test(layoutSize))
    return `var(--ls-${_layoutSize.match(regex)[3]}p)`;
  return _layoutSize;
}

const parseVariablesFromProps = (props) => {
  let variables = {};
  if (props.fontFamily)         variables['--font-family'] = parseFontFamily(props.fontFamily);
  if (props.fontSize)           variables['--font-size'] = parseFontSize(props.fontSize);
  if (props.fontWeight)         variables['--font-weight'] = parseFontWeight(props.fontWeight);
  if (props.boxShadow)          variables['--box-shadow'] = parseShadow(props.boxShadow);
  if (props.borderRadius)       variables['--border-radius'] = parseLayout(props.borderRadius);
  if (props.margin)             variables['--margin'] = parseLayout(props.margin);
  if (props.marginHorizontal)   variables['--margin-horizontal'] = parseLayout(props.marginHorizontal);
  if (props.marginVertical)     variables['--margin-vertical'] = parseLayout(props.marginVertical);
  if (props.padding)            variables['--padding'] = parseLayout(props.padding);
  if (props.paddingHorizontal)  variables['--padding-horizontal'] = parseLayout(props.paddingHorizontal);
  if (props.paddingVertical)    variables['--padding-vertical'] = parseLayout(props.paddingVertical);
  if (props.color)              variables['--color'] = parseColor(props.color);
  if (props.backgroundColor)    variables['--background-color'] = parseColor(props.backgroundColor);
  return variables;
}

const combineStyles = (props, ...styleObjects) =>
  Object.assign({}, ...styleObjects, parseVariablesFromProps(props));

const hasKey = (obj, key) => Object.keys(obj).includes(key);

export { isUndefined, normalizeChildren, generateUniqueId, combineClassNames, omitProps, combineStyles, hasKey, parseLayout };
