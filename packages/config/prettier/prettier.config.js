module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  // A collection of Regular expressions in string format.
  importOrder: [
    '#/styles/global.css',
    '<THIRD_PARTY_MODULES>',
    '^@repo/(.*)$',
    '^#/(.*)$',
    '^[./]',
  ],
  // A boolean value to enable or disable the new line separation
  // between sorted import declarations group. The separation takes
  // place according to the importOrder.
  importOrderSeparation: false,
  // A boolean value to enable or disable sorting of the specifiers
  // in an import declarations.
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
