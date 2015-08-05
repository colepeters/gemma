# Source files
CSS written to upcoming specifications, which is compiled to current-spec CSS by PostCSS.

## Architecture

### settings
CSS custom properties, custom media queries, and other pieces of code which do not directly output CSS classes themselves.

### elements
Normalisation and styles that target bare HTML elements. These are highly generic styles that should rarely, if ever, be altered, due to the breadth of their implementation. No classes are defined within these styles.

### objects
Context-agnostic classes that serve to define high-level structure and layout; this includes grid structures and the media object. Object classes use the `o-` namespace.

### components
Context-specific classes that generate distinct components of an interface (for example, buttons). Components use the `c-` namespace.

### utilities
Structure- and layout-related classes that do one thing extremely well. These styles are highly granular, and can be combined with surface classes (see below) to construct ‘generic’ UI objects. Utilities use the `u-` namespace.

### surfaces
Similar to utilities, but focused on surface- (or ‘skin’)-level styles as opposed to structural/layout styles, like colours or font settings. Surface classes use the `s-` namespace.
