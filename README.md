# SSW3308 Lab 2 – Visual Styling (Campus Events Portal)

Student: SHU ZHENYU (231885)

## How to run
1. Start **Apache** in XAMPP.
2. Open <http://localhost:8080/lab01-html/> in Chrome.

## Bootstrap
| Item | Choice |
|---|---|
| Version | Bootstrap 5.3.8 |
| Loading method | Official jsDelivr CDN with SRI `integrity` (no npm build) |
| Load order | `bootstrap.min.css` → `css/custom.css` in `<head>`; `bootstrap.bundle.min.js` loaded once before `</body>` |
| Custom CSS | `css/custom.css` (under 40 lines, no `!important`) |

## Project structure
```
lab01-html/
├── index.html
├── css/custom.css
├── js/form-validation.js
├── images/UPM.jpg
├── evidence/responsive/   (360.png, 768.png, 1280.png at 200% zoom)
├── lab01_notes.txt
└── README.md
```

## Task evidence
| Task | Where it is done |
|---|---|
| 1 Install Bootstrap | `index.html` `<head>` (CSS) and end of `<body>` (bundle) |
| 2 Responsive shell | `<nav class="navbar navbar-expand-lg">` with collapse button; cards use `col-12 col-md-6 col-lg-4` (1 / 2 / 3 per row) |
| 3 Cards, table, form | `#events` cards + badges, `#schedule` `.table-responsive`, `#registration` form with `.needs-validation` and `.invalid-feedback`; `js/form-validation.js` |
| 4 Accessibility & responsive | screenshots in `evidence/responsive/`, results below |

## Manual tests
| # | Test | Expected result | Actual result |
|---|---|---|---|
| 1 | 360px width, 200% zoom | 1 card per row, navbar collapsed, no page horizontal scroll (table scrolls inside its wrapper only) | First test failed: the long brand name "Campus Events Portal" overflowed the navbar and caused horizontal scrolling. Fixed with `.navbar-brand { white-space: normal; }` in `css/custom.css`. Retest: passed, brand wraps, no page horizontal scroll (`evidence/responsive/360.png`) |
| 2 | 768px width, 200% zoom | Content readable, no page horizontal scroll | Passed: navbar collapsed, content readable, no page horizontal scroll (`evidence/responsive/768.png`) |
| 3 | 1280px width, 200% zoom | Content readable, no page horizontal scroll | Passed: content readable, no page horizontal scroll (`evidence/responsive/1280.png`) |
| 4 | 360px / 768px / 992px at 100% zoom | 1 card per row below 768px, 2 from 768px, 3 from 992px | Passed: 360px = 1, 768px = 2, 992px and 1280px = 3 cards per row |
| 5 | Keyboard only (Tab / Shift+Tab / Enter / Space) | Can open the navbar menu, follow every link and complete the form; focus outline always visible | Passed: Tab reaches the menu button, Enter opens the menu (`aria-expanded="true"`), Tab moves into the links, Enter jumps to the section; form fields show a 3px teal focus outline |
| 6 | Submit empty form (invalid case) | Red border and message under Name, Email and Event; success message hidden | Passed: three invalid messages shown, no success message, page not submitted |
| 7 | Email `abc` (boundary case) | "Please enter a valid email address" shown | Passed: email marked invalid, success message stays hidden |
| 8 | Submit valid data (success case) | Green borders and "Thank you!" message shown | Passed: "Thank you! Your interest has been recorded." shown |

## Reflection
1. Hardest requirement to verify:
2. Most important failure test and fix:
3. What must change before real users and personal data:
