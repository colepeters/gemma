module.exports = {
  // CSS formatting rules applied to stylelint
  // https://github.com/stylelint/stylelint/blob/master/docs/rules.md
  /* eslint-disable quotes */
  "rules": {
    "block-closing-brace-newline-after": [ 2, "always" ],
    "block-closing-brace-newline-before": [ 2, "always-multi-line" ],
    "block-closing-brace-space-before": [ 2, "always-single-line" ],
    "block-no-empty": 2,
    "block-opening-brace-newline-after": [ 2, "always-multi-line" ],
    "block-opening-brace-space-before": [ 2, "always" ],
    "color-no-invalid-hex": 2,
    "custom-property-no-outside-root": 2,
    "declaration-bang-space-after": [ 2, "never" ],
    "declaration-bang-space-before": [ 2, "always" ],
    "declaration-block-semicolon-newline-after": [ 2, "always-multi-line" ],
    "declaration-block-semicolon-newline-before": [ 2, "never-multi-line" ],
    "declaration-block-semicolon-space-after": [ 2, "always-single-line" ],
    "declaration-block-semicolon-space-before": [ 2, "never" ],
    "declaration-colon-space-after": [ 2, "always" ],
    "declaration-colon-space-before": [ 2, "never" ],
    "function-calc-no-unspaced-operator": 2,
    "function-comma-space-before": [ 2, "never" ],
    "function-space-after": [ 2, "always" ],
    "function-url-quotes": [ 2, "single" ],
    "indentation": [ 2, 2 ],
    "media-feature-colon-space-after": [ 2, "always" ],
    "media-feature-colon-space-before": [ 2, "never" ],
    "no-missing-eof-newline": 2,
    "number-leading-zero": [ 2, "always" ],
    "number-no-trailing-zeros": 2,
    "number-zero-length-no-unit": 2,
    "rule-no-duplicate-properties": 2,
    "rule-non-nested-empty-line-before": [ 2, "always-multi-line", {
      ignore: ["after-comment"]
    }],
    "rule-trailing-semicolon": [ 2, "always" ],
    "selector-combinator-space-after": [ 2, "always" ],
    "selector-combinator-space-before": [ 2, "always" ],
    "selector-list-comma-newline-after": [ 2, "always-multi-line" ],
    "selector-list-comma-newline-before": [ 2, "never-multi-line" ],
    "selector-list-comma-space-after": [ 2, "always-single-line" ],
    "selector-list-comma-space-before": [ 2, "never" ],
    "selector-no-id": 2,
    "string-quotes": [ 2, "single" ],
    "value-list-comma-newline-before": [ 2, "never-multi-line" ],
    "value-list-comma-space-after": [ 2, "always" ],
    "value-list-comma-space-before": [ 2, "never" ]
  }
  /* eslint-enable quotes */
}
