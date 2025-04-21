# Assignment12 – Avalanche Workshop Website  
**Main HTML File:** `index.html`

## CSS Techniques Used

### 1. Sizing 
I used `max-width` on the `<main>` element to control how wide the main content gets. This helps keep the text readable and centered on large screens.

```css
main {
  max-width: 800px;
  margin: auto;
}
```

### 2. Overflow
Though the content fits well within the layout, overflow is implicitly handled by limiting widths and using margins. This prevents content from spilling outside containers on smaller screens.

```css
body {
  overflow-x: hidden;
}
```


### 3. Border
A subtle border and rounded corners were added to sections to create visual separation and structure between content blocks.

```css
section {
  border: 2px solid #d5dad7;
  border-radius: 10px;
}
```


### 4. Margin
Margins were added to sections and buttons to create visual spacing between elements. This improves readability and layout structure.

```css
section {
  margin-bottom: 3rem;
}

.button {
  margin: 10px 10px 0 0;
}
```


### 5. Padding
Padding was applied inside the header and sections to give content breathing room and prevent it from touching the edges of containers.

```css
header {
  padding: 2rem;
}

section {
  padding: 1.5rem;
}
```


### 6. Display: Inline-block
The .button class uses display: inline-block so that buttons can appear side by side and still maintain block-like styling.

```css
.button {
  display: inline-block;
}
```