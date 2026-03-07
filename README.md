




# Lights Out Racing

## Authorship & Attribution

**Author:** Brody Hilliard



**Tools and resources used:**

* HTML5
* CSS
* JavaScript
* Google Fonts (Orbitron)
* GitHub and GitHub Pages for hosting
* W3C schools for syntax guidance



---

## Tagline

> “Lights Out Racing.”

---

## User Story

As a racing fan,
I want to browse a racing-themed online shop,
so that I can view products and see different images of the product before purchasing.

---

## Links

**GitHub Repository:**
https://github.com/brody20051/redesigned-chainsaw-project1

**Live Website (GitHub Pages):**
https://brody20051.github.io/redesigned-chainsaw-project1/



## Design Inspiration

The visual design of the website was inspired by modern motorsports and racing apparel websites.

<img width="1897" height="911" alt="Screenshot 2026-01-12 103930" src="https://github.com/user-attachments/assets/14e39e40-6c4f-44ce-bff1-773b03fcb12b" />
<img width="1906" height="955" alt="Screenshot 2026-01-20 171729" src="https://github.com/user-attachments/assets/a0b5c78a-968e-4eb9-bb32-a15e638cc236" />

This influenced:

* The black background and red accent colors
* Bold racing-style


---

## Model / Inspiration Evidence

<img width="1897" height="911" alt="Screenshot 2026-01-12 103930" src="https://github.com/user-attachments/assets/14e39e40-6c4f-44ce-bff1-773b03fcb12b" />
<img width="1906" height="955" alt="Screenshot 2026-01-20 171729" src="https://github.com/user-attachments/assets/a0b5c78a-968e-4eb9-bb32-a15e638cc236" />

This design was used as a reference for creating the layout and styling of the website. I adapted the idea of a clean product display with bold branding and simplified navigation.

---



### JavaScript Example

```javascript
function showFront() {
  const productImage = document.getElementById("productImage");
  productImage.src = "images/BrodyMustangFront.png";
}

function showBack() {
  const productImage = document.getElementById("productImage");
  productImage.src = "images/BrodyMustangBack.png";
}

document.getElementById("frontButton").addEventListener("click", showFront);
document.getElementById("backButton").addEventListener("click", showBack);
```

### Explanation

This JavaScript code allows the user to switch between two product images.

1. The HTML page contains an image element with the ID productImage.
2. Two buttons on the page trigger JavaScript functions when clicked.
3. JavaScript accesses the DOM using getElementById() to locate the image.
4. When the user clicks a button, the script changes the src attribute of the image.
5. The DOM updates instantly, displaying either the front or back of the product.

**DOM → Script → DOM/Data Flow**

User clicks button --> JavaScript event listener triggers --> Script updates image `src` --> DOM updates --> New product image displayed.

---

## Architecture / Infrastructure Note

This project is a front end app built using HTML, CSS, and JavaScript.

The site structure includes:

* HTML files for page layout
* CSS for styling and layout
* JavaScript for dynamic page interaction



---

## Verification

The application was tested in multiple environments.

* Desktop browser
* Mobile responsive mode using browser developer tools

**Issues**

* Images must be correctly referenced in the images folder for GitHub Pages to load them.
* GitHub Pages may require a page refresh after deployment for changes to appear.

