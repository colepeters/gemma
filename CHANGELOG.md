# Gemma changelog

## 0.3.1
Adds better commenting to the ruleset defining custom link underlines (see `src/elements/_typography.css`).

## 0.3.0
Small addition of position and z-index utility classes. Position utilities are breakpoint-prefixed, but z-index utilities are not (I’ve rarely encountered a need to change z-index by breakpoint).

## 0.2.0
Minimal feature set. Broadly speaking:

- General setup and configuration of development tasks via Gulp, cssnext, PostCSS, StandardJS, and Stylelint
- Settings:
  - Full-featured colour palette. A veritable rainbow of colours, each with a base (#500) swatch, two tints, and two shades. Likely requires some iteration, particularly as the values all skew lighter than darker. But maybe that’s okay. We’ll see.
  - Custom media queries. Comes in `md`, `lg`, and `xl`. Written mobile-first.
  - Custom properites for box shadows à la Material Design.
  - Custom properties for spacing. Meant to be utilised primarily in spacing classes rather than directly.
- Elements:
  - Normalize. Duh.
  - Core typography styles. Utilises the latest and greatest system font stacks for OS X/iOS, Android, and Windows. Also: headings with responsive letter spacing scaled by breakpoint, and fancy schmancy custom underlines that take the `currentColor` property (which means you can set the custom underline colour by setting the link’s text colour)..
- Objects:
  - So far: just a grid. Uses flexbox for layout and only goes up to quarter units, because I don’t find myself laying out magazines on the internet very much (but if you do, that’s cool). Features breakpoint-prefixed classes for every grid object (container, row, and column) so you can change things up across breakpoints. Also contains several modifier classes for the row object, to set the flexbox item alignment and justification.
- Utilities:
  - Text alignment classes. Breakpoint-prefixed.
  - Cursor utility for triggering the pointer cursor when it’s not specified by default.
  - Display property classes. Breakpoint-prefixed.
  - Spacing classes (padding and margin). Includes omni- and uni-directional variants. All breakpoint-prefixed. You can probably do most of your layout tasks with these and the grid objects.
  - Typography utilites. Right now it’s just a list reset.
- Surfaces:
  - Colour classes, for setting `color` and `background-color`. For all colours included in the colour palette. There’s a lot.
  - Box shadow classes
  - Typography classes, for mimicking heading styles, setting font weight, applying faux-smallcaps, and resetting the appearance of link elements (for example, if you want to style an `<a>` like a button — which Gemma does not yet have).

Lots more to come. Stay tuned.

## 0.1.0
Initial publication to npm. Very little aside from the readme.
