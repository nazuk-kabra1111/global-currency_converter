# Global Currency Converter-Real-Time Exchange Rates

A sleek, responsive web application that provides real-time currency conversion for over 150+ global currencies. This project focuses on seamless API integration and dynamic UI updates using Vanilla JavaScript.

## Live Demo
https://nazuk-kabra1111.github.io/global-currency_converter/

## Overview
This project was developed to master the fundamentals of asynchronous programming and the Fetch API. It allows users to input an amount, select "From" and "To" currencies, and instantly see the current exchange rate accompanied by dynamic flag icons with real time accuracy.

### Key Features
- **Live Data:** Fetches the most recent exchange rates via the Fawaz Ahmed Currency API.
- **Dynamic Flag Integration:** Real-time UI updates for country flags using the FlagsAPI.
- **Input Validation:** Robust error handling to catch empty strings, non-numeric characters, and negative values.
- **Responsive Design:** A centered, mobile-friendly layout built with custom CSS.

## Tech Stack
- **Frontend:** HTML5, CSS3 (Flexbox for layout)
- **Logic & Implementation:** JavaScript (ES6+, Async/Await)
- **APIs Used:** 
  - [Currency API]= https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'country_currencycode.json'  OR    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
  - [FlagsAPI]= https://flagsapi.com/

## Project Structure
- `index.html`: The semantic structure of the converter.
- `style.css`: Custom styling, including the dark-blue theme and centered container.
- `curr_conv.js`: Core logic for API calls, event listeners, and DOM manipulation.
- `codes.js`: Mapping of currency codes to country codes for flag rendering.

## What I Learned
- **Handling JSON:** Parsing complex, nested objects returned by external APIs.
- **Asynchronous Logic:** Implementing `async/await` to manage network requests and prevent UI blocking.
- **Error Handling:** Using logic gates to validate user input before triggering network calls, improving application efficiency.

