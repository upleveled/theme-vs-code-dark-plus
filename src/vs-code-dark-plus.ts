import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { tags } from '@lezer/highlight';

// Using https://github.com/PrismJS/prism-themes/blob/master/themes/prism-vsc-dark-plus.css as reference for the colors

const foreground = '#9cdcfe',
  background = '#1e1e1e',
  darkBackground = '#000000',
  highlightBackground = '#ffffff0f',
  cursor = '#c6c6c6',
  selection = '#094771',
  tooltipBackground = '#252526',
  invalid = '#ff0000',
  keyword = '#569cd6',
  controlFlowAndModuleKeywords = '#c586c0',
  functions = '#dcdcaa',
  typesAndClasses = '#4ec9b0',
  tagNames = '#569cd6',
  operators = '#d4d4d4',
  regexes = '#d16969',
  strings = '#ce9178',
  names = '#9cdcfe',
  punctuationAndSeparators = '#d4d4d4',
  angleBrackets = '#808080',
  templateStringBraces = '#569cd6',
  propertyNames = '#9cdcfe',
  booleansAndAtoms = '#569cd6',
  numbersAndUnits = '#b5cea8',
  metaAndComments = '#6a9955';

export const vsCodeDarkPlusTheme = EditorView.theme(
  {
    '&': {
      color: foreground,
      backgroundColor: background,
    },

    '.cm-content': {
      caretColor: cursor,
    },

    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: selection },

    '.cm-panels': { backgroundColor: darkBackground, color: foreground },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    '.cm-searchMatch': {
      backgroundColor: '#72a1ff59',
      outline: '1px solid #457dff',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: '#6199ff2f',
    },

    '.cm-activeLine': { backgroundColor: highlightBackground },
    '.cm-selectionMatch': { backgroundColor: '#aafe661a' },

    '&.cm-editor': {
      borderRadius: '5px',
    },

    '&.cm-editor .cm-scroller': {
      fontFamily:
        'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    },

    '&.cm-editor.cm-focused': {
      outline: '5px solid #808080',
    },

    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      backgroundColor: '#bad0f847',
      outline: '1px solid #515a6b',
    },

    '.cm-gutters': {
      backgroundColor: background,
      color: '#858585',
      border: 'none',
      borderRadius: '5px',
    },

    '.cm-activeLineGutter': {
      backgroundColor: highlightBackground,
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd',
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: tooltipBackground,
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: tooltipBackground,
      borderBottomColor: tooltipBackground,
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        color: foreground,
      },
    },
  },
  { dark: true },
);

export const vsCodeDarkPlusHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: keyword },
  {
    tag: [tags.controlKeyword, tags.moduleKeyword],
    color: controlFlowAndModuleKeywords,
  },
  {
    tag: [tags.name, tags.deleted, tags.character, tags.macroName],
    color: names,
  },
  {
    tag: [tags.propertyName],
    color: propertyNames,
  },

  { tag: [tags.variableName, tags.labelName], color: names },
  {
    tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)],
    color: booleansAndAtoms,
  },
  { tag: [tags.definition(tags.name)], color: foreground },
  {
    tag: [
      tags.typeName,
      tags.className,
      tags.number,
      tags.changed,
      tags.annotation,
      tags.modifier,
      tags.self,
      tags.namespace,
    ],
    color: typesAndClasses,
  },
  { tag: [tags.tagName], color: tagNames },
  {
    tag: [tags.function(tags.variableName), tags.function(tags.propertyName)],
    color: functions,
  },
  { tag: [tags.number], color: numbersAndUnits },
  {
    tag: [
      tags.operator,
      tags.operatorKeyword,
      tags.url,
      tags.escape,
      tags.regexp,
      tags.link,
      tags.special(tags.string),
    ],
    color: operators,
  },
  {
    tag: [tags.regexp],
    color: regexes,
  },
  {
    tag: [tags.special(tags.string)],
    color: strings,
  },
  { tag: [tags.meta, tags.comment], color: metaAndComments },
  { tag: [tags.punctuation, tags.separator], color: punctuationAndSeparators },
  { tag: [tags.angleBracket], color: angleBrackets },
  { tag: tags.special(tags.brace), color: templateStringBraces },
  { tag: tags.strong, fontWeight: 'bold' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
  { tag: tags.link, color: metaAndComments, textDecoration: 'underline' },
  { tag: tags.heading, fontWeight: 'bold', color: names },
  {
    tag: [tags.atom, tags.bool, tags.special(tags.variableName)],
    color: booleansAndAtoms,
  },
  {
    tag: [tags.processingInstruction, tags.string, tags.inserted],
    color: strings,
  },
  { tag: tags.invalid, color: invalid },
]);

/// Extension to enable the VS Code Dark Plus theme (both the editor theme and
/// the highlight style).
export const vsCodeDarkPlus: Extension = [
  vsCodeDarkPlusTheme,
  syntaxHighlighting(vsCodeDarkPlusHighlightStyle),
];
