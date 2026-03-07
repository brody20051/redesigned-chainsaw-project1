# redesigned-chainsaw-project1
CIS 376  Spring 26 course page


# The idea for my website is a marketplace for car guys to buy merch from various different types of clothing.





# Lights Out Racing

A racing-inspired online merch concept built with HTML, CSS, and JavaScript.

---

##  Tagline

> “Lights Out Racing.”

---

##  Attribution

**Author:** Brody Hilliard

**Resources / Inspiration**

* Google Fonts (Orbitron)
* GitHub Pages for deployment
* W3c schools for syntax guidance
* Inspiration from modern racing apparel stores.

**Libraries / Assets**

* HTML5
* CSS3
* JavaScript
* Images created/owned for the Mustang product display

---

##  User Story

As a racing fan,
I want to browse racing-themed apparel on a clean website,
so that I can view products and switch between product images before purchasing.

---

##  Project Links

**GitHub Repository**
https://github.com/brody20051/redesigned-chainsaw-project1

**Live Website (GitHub Pages)**
https://brody20051.github.io/redesigned-chainsaw-project1/



# Modeling / Inspiration Evidence

The site layout and product display were inspired by modern automotive and apparel store layouts.

Screenshot of inspiration source:

<img width="1897" height="911" alt="Screenshot 2026-01-12 103930" src="https://github.com/user-attachments/assets/14e39e40-6c4f-44ce-bff1-773b03fcb12b" />
<img width="1906" height="955" alt="Screenshot 2026-01-20 171729" src="https://github.com/user-attachments/assets/a0b5c78a-968e-4eb9-bb32-a15e638cc236" />





This reference influenced:

* clean examples of merch sales
* navigation bar structure
* product card design

---

# Example Code

## JavaScript Example

```javascript
function showFront(){
document.getElementById("productImage").src="images/BrodyMustangFront.png";
}

function showBack(){
document.getElementById("productImage").src="images/BrodyMustangBack.png";
}
```

## Explanation

This JavaScript controls the product image viewer on the product page.

1. The HTML page contains an image element with the ID **productImage**.
2. When a user clicks the **Front** or **Back** button, a JavaScript function is triggered.
3. The function uses the DOM method `getElementById()` to locate the image element.
4. The DOM updates immediately, displaying either the front or back of the product.

### Data Flow

User Click --> Button Event --> JavaScript Function --> DOM Image Source Update --> Updated Product Image Display


---

