# Source files
CSS written to upcoming specifications, which is compiled to current-spec CSS by PostCSS.

## Architecture and namespaces

### Settings
CSS custom properties, custom media queries, and other pieces of code which do not directly output CSS classes themselves.

### Elements
Normalisation and styles that target bare HTML elements. These are highly generic styles that should rarely, if ever, be altered, due to the breadth of their implementation. No classes are defined within these styles.

### Objects
Context-agnostic classes that serve to define high-level structure and layout; this includes grid structures and the media object. Object classes use the `o-` namespace.

Example:
```css
.o-media {
  /* Thank you @stubbornella */  
}
```

### Components
Context-specific classes that generate distinct components of an interface (for example, buttons). Components use the `c-` namespace.

Example:
```css
.c-btn {
  border-radius: 3px;
  pointer: cursor;
}
```

### Utilities
Structure- and layout-related classes that do one thing extremely well. These styles are highly granular, and can be combined with surface classes (see below) to construct ‘generic’ UI objects. Utilities use the `u-` namespace.

Example:
```css
.u-align-center {
  text-align: center;  
}
```

### Surfaces
Similar to utilities, but focused on surface- (or ‘skin’)-level styles as opposed to structural/layout styles, like colours or font settings. Surface classes use the `s-` namespace.

Example:
```css
.s-bg-red {
  background-color: red;  
}
```

## Class naming structure

```
<namespace>-<className>[-<childName>||--<modifierName>]
```

Class names in Gemma are defined with a simple, familiar structure. The class name always starts with the appropriate namespace, followed by the name of the class. Child classes repeat the parent’s class name, and append a single hyphen, followed by the child name. Modifier classes are appended with two hyphens and are rarely used.

A figurative example:

```css
.c-btn {
  border-radius: 3px;
  cursor: pointer;
}

.c-btn-icon {
  padding-right: 0.5em;  
}

.c-btn--round {
  border-radius: 50%;  
}
```

### Breakpoint-scoped class names

```
_<breakpointNamespace>-<namespace>-<className>[-<childName>||--<modifierName>]
```

Classes are written mobile-first — that is, their styles apply from the smallest viewport width and up. Breakpoint-specific classes apply their styles only from subsequent breakpoints and wider. The class names are prefixed with an underscore, followed by the namespace of the breakpoint, followed by a single hyphen. The class name is written as normal thereafter.

```css
u-py2 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* ... */

@media (--screen-md) {
  ._md-u-py3 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
```

```html
<div class='u-py2 _md-u-py3'>
  <p>
    This div has 1rem of vertical padding by default; from the medium breakpoint and up, it has 4rem of vertical padding.
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
<button class='c-button a-buttonWithOurSpecialBrandOfBackgroundColour'>
  Synergise!
</button>

<div class='u-p2 u-m2 a-brandBanner'>
  <blink>Join the conversation today</blink>
</div>
```

This is, however, merely a recommendation. However, I have in my experience found this to be a huge help in keeping a project’s styles well-organised and easy to update/debug.

### Unused-but-recommended namespaces
Although not included as part of this library, the following namespaces are recommended for use in relevant situations:

- `js-` for classes to be used as JavaScript hooks (e.g. `<div class='js-slideToggle'>Slide me!</div>`)
- 'qa-' for classes to be used as testing hooks (e.g. `<p class='qa-loginState'>{{ user.loginState }}</p>`)

You should never bind any styles to classes using either of these class names (this is in order to reduce side-effects and unnecessary complexity).

