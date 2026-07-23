---
name: Technical Blueprint
colors:
  surface: '#f6fafe'
  surface-dim: '#d6dade'
  surface-bright: '#f6fafe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f8'
  surface-container: '#eaeef2'
  surface-container-high: '#e4e9ed'
  surface-container-highest: '#dfe3e7'
  on-surface: '#171c1f'
  on-surface-variant: '#43474f'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#edf1f5'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#3f5f92'
  primary: '#001736'
  on-primary: '#ffffff'
  primary-container: '#002b5c'
  on-primary-container: '#7594cb'
  inverse-primary: '#aac7ff'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#07182b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d2d41'
  on-tertiary-container: '#8495ad'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#264779'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f6fafe'
  on-background: '#171c1f'
  surface-variant: '#dfe3e7'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  base-unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  grid-size: 20px
---

## Brand & Style
The design system is rooted in the aesthetics of architectural drafting and precision engineering. It targets professionals in technical fields—engineers, architects, and data scientists—who value clarity, structure, and meticulous detail. 

The style is a blend of **Minimalism** and **Modern Corporate**, utilizing a "blueprint" metaphor. The UI evokes an emotional response of organized calm and mathematical certainty. Visual elements are treated as components of a technical drawing: lines are purposeful, spacing is calculated, and the overall composition feels structural rather than decorative.

## Colors
The palette is inspired by traditional cyanotypes and modern CAD software.

- **Background (#f0f4f8):** A pale, architect-blue that serves as the "paper." It should feature a subtle 20px grid pattern in a slightly darker tint (#e2e8f0) to reinforce the blueprint aesthetic.
- **Primary (#002b5c):** A deep technical navy used for structural elements, headers, and primary actions. It represents the "ink."
- **Secondary (#ff6b00):** A bright CAD-orange used sparingly for highlights, alerts, and focal points. It represents the "markup."
- **Tertiary (#64748b):** A muted slate grey used for secondary information and non-critical UI scaffolding.
- **Neutral:** Pure white is used only for the highest-level surface cards to pop against the blue-tinted background.

## Typography
The typography strategy creates a clear distinction between content and metadata.

- **Hanken Grotesk** is used for all primary communication, headlines, and body copy. It provides a clean, contemporary feel that remains legible at all scales.
- **JetBrains Mono** is used for labels, captions, and data points. The monospaced nature of this font reinforces the "measured" feel of the design system, suggesting that every value is precise and engineered.
- **Case Styling:** Labels should generally be set in ALL CAPS to mimic technical annotations on a drawing.

## Layout & Spacing
The layout follows a strict **Fixed Grid** philosophy. All components must align to a 4px baseline and a secondary 20px grid (visible in the background).

- **Desktop:** 12-column grid with a fixed max-width of 1440px. 24px gutters.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px margins.

Spacing should feel generous but calculated. Use consistent multiples of the base unit (4, 8, 16, 24, 32, 48, 64) to ensure the layout feels "rhythmical." Vertical rhythm is prioritized to maintain the feeling of a structured document.

## Elevation & Depth
In keeping with the blueprint aesthetic, this design system avoids heavy shadows and physical depth. Instead, it uses **Low-contrast outlines** and **Tonal layers**.

- **Surfaces:** Use flat colors (#FFFFFF for cards) with a 1px solid border (#CBD5E1) to define boundaries.
- **Active State:** Elements that are "selected" or "active" should use the Secondary CAD-orange as a thin 2px accent border rather than a shadow.
- **Z-Axis:** Depth is communicated through stacking order. Overlays (modals) should have a crisp 1px border and a very subtle, sharp 4px shadow to indicate they are floating above the "paper," but they should not feel soft or organic.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To evoke the precision of engineering tools, every corner is a hard 90-degree angle. This applies to buttons, input fields, cards, and containers. The only exceptions are specific icons or data visualizations (like circular gauges) where geometry dictates otherwise. Hard edges reinforce the "Blueprint" narrative and distinguish the product from soft, consumer-oriented software.

## Components
- **Buttons:** Rectangular with a 1px border. Primary buttons use a solid Navy background with White text. Secondary buttons use a Navy border with Navy text. Ghost buttons use Mono labels.
- **Inputs:** Simple bottom-border or full-border boxes. Use the Mono label font for the field name, placed top-left of the input.
- **Chips/Status:** Use Navy or CAD-orange backgrounds. Always use the Mono font for text within chips.
- **Cards:** White background, 1px border (#CBD5E1), no shadow. Headers within cards should have a subtle bottom divider.
- **Lists:** Clean rows separated by 1px horizontal lines. Use Mono labels for "key" values and Hanken Grotesk for "values."
- **Data Tables:** Heavy use of the 20px background grid alignment. Headers are Navy with White Mono text.
- **Specialty Components:** "Technical Annotations"—small text callouts with a thin line pointing to a specific UI element, used for guidance or highlights.