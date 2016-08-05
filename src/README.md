# Source files
CSS written to current and upcoming specifications, which is compiled to current-spec CSS by PostCSS.

## Architecture and namespaces

### Custom props
CSS custom properties definitions, for colours, box-shadows, spacing increments, and animation curves. Also contains custom media queries.

### Base
Normalize.css and base typographic styles. Primarily sets base font sizes across breakpoints (for body text as well as headings), and some opinionated defaults for letter-spacing, line height, list padding, and custom link underlines.

### Classes
Probably should have some documentation here.

### Breakpoint-scoped class names

```
_<breakpointNamespace>-<namespace>-<className>[-<childName>||--<modifierName>]
```

Classes are written mobile-first — that is, their styles apply from the smallest viewport width and up. Breakpoint-specific classes apply their styles only from subsequent breakpoints and wider. The class names are prefixed with an underscore, followed by the namespace of the breakpoint, followed by a single hyphen. The class name is written as normal thereafter.

```css
.pt2 {
  padding-top: 1rem;
}

/* ... */

@media (--screen-md) {
  ._md-pt3 {
    padding-top: 2rem;
  }
}
```

```html
<div class='pt2 _md-pt3'>
  <p>
    This div has 1rem of vertical padding by default;
    from the medium breakpoint and up, it has 2rem of vertical padding.
  </p>
</div>
```

The breakpoints, and their respective namespaces, that ship with Gemma are:

- small (generic namespace): 0 and up
- medium (`md-` namespace): `TBDu` and up
- large (`lg-` namespace): `TBDu` and up

_The underscore naming convention used here borrows from various programmers’ use of the underscore as a prefix for private variables. As these class’ styles are scoped (or ‘private’) to a particular breakpoint, an underscore is used as a reminder of this outside of the class’ definition._

### Recommended class naming structure for app-specific styles
It is recommended that you use a distinct namespace when writing your own supplemental classes which will be used in addition to those in Gemma. This should help to provide fellow designers and developers a clear view of where the respective classes originate from.

For example, you might use an `a-` namespace (for ‘application’) to differentiate between your classes and Gemma’s:

```html
<button class='a-buttonWithOurSpecialBrandOfBackgroundColour'>
  Synergise!
</button>

<div class='u-p2 u-m2 a-brandBanner'>
  <blink>Join the conversation today</blink>
</div>
```

This is, however, merely a recommendation. I have in my experience found this to be a huge help in keeping a project’s styles well-organised and easy to update/debug.

### Unused-but-recommended namespaces
Although not included as part of this library, the following namespaces are recommended for use in relevant situations:

- `js-` for classes to be used as JavaScript hooks (e.g. `<div class='js-slideToggle'>Slide me!</div>`)
- `qa-` for classes to be used as testing hooks (e.g. `<p class='qa-loginState'>{{ user.loginState }}</p>`)

You should never bind any styles to classes using either of these namespaces (this is in order to reduce side-effects and unnecessary complexity).

