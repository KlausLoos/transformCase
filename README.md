# Text Case Transformer for Google Sheets

## Introduction

This Google Apps Script provides a custom function to transform text into various case styles in Google Sheets.

## Supported Case Types

1. Sentence case
2. Lower case
3. UPPER CASE
4. Capitalized Case
5. aLtErNaTiNg cAsE
6. Title Case
7. InVeRsE CaSe

## Usage

To use this function in your Google Sheet, follow these steps:

1. Go to `Extensions` > `Apps Script` in your Google Sheet.
2. Paste the script code into the script editor window.
3. Save the script.

After saving, you can use the function `transformCase` in your sheets like any other formula.

### Syntax

```excel
=transformCase(A1, caseType)
```

A1: The cell containing the text you want to transform.

caseType: The number corresponding to the case type you want to use (see Supported Case Types).

### License
MIT

### Contributing
Feel free to fork and submit pull requests.
