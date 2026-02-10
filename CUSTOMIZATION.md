# 🎨 Customization Guide - Love Calculator

Easy guide to customize your Love Calculator without breaking anything!

## 🌈 Change Colors

### Update Color Scheme

Edit `styles.css`, find the `:root` section (around line 10):

```css
:root {
    /* Main gradient colors */
    --primary-gradient: linear-gradient(135deg, #ff006e 0%, #ff5e78 50%, #ff9a8b 100%);
    
    /* Change to blue theme: */
    --primary-gradient: linear-gradient(135deg, #0066ff 0%, #3385ff 50%, #66a3ff 100%);
    
    /* Or purple theme: */
    --primary-gradient: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%);
    
    /* Or green theme: */
    --primary-gradient: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
}
```

### Popular Color Schemes

#### 💙 Ocean Blue
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--background-gradient: linear-gradient(135deg, #e0f2ff 0%, #ddd6fe 100%);
```

#### 🧡 Sunset Orange
```css
--primary-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
--background-gradient: linear-gradient(135deg, #fff5f5 0%, #ffe4e1 100%);
```

#### 💚 Nature Green
```css
--primary-gradient: linear-gradient(135deg, #2dd4bf 0%, #34d399 100%);
--background-gradient: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
```

#### 🖤 Dark Elegance
```css
--primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
--background-gradient: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
```

---

## ✏️ Change Text & Messages

### Update Love Messages

Edit `script.js`, find the `getLoveMessage()` function (around line 280):

```javascript
function getLoveMessage(percentage) {
    if (percentage >= 90) {
        return {
            title: '💖 Your Custom Title! 💖',
            text: 'Write your own romantic message here!'
        };
    }
    // Edit other tiers too...
}
```

### Sample Alternative Messages

#### Funny/Casual Style:
```javascript
if (percentage >= 90) {
    return {
        title: '🔥 On Fire! 🔥',
        text: 'You two are literally goals! Like, Netflix wants to make a series about you!'
    };
}
```

#### Professional Style:
```javascript
if (percentage >= 90) {
    return {
        title: '⭐ Excellent Compatibility ⭐',
        text: 'Based on our algorithm, you demonstrate exceptional compatibility metrics.'
    };
}
```

### Change App Title

Edit `index.html` (line 40):

```html
<!-- Original -->
<span class="title-main">Love Calculator</span>

<!-- Change to: -->
<span class="title-main">Your Custom Name</span>
```

Examples:
- "Cupid's Calculator"
- "Heart Meter"
- "Love Tester 3000"
- "Soulmate Finder"

---

## 🎭 Modify Animations

### Slow Down / Speed Up Animations

Edit `script.js`, find animation durations:

```javascript
// Original (fast)
duration: 0.5

// Slower (more dramatic)
duration: 1.0

// Faster (snappier)
duration: 0.3
```

### Disable Floating Hearts

Edit `styles.css`, comment out the hearts:

```css
.floating-hearts {
    /* display: none; */  /* Add this line */
}
```

Or reduce the number in `script.js` (line 70):

```javascript
// Original
const numberOfHearts = 15;

// Fewer hearts (better performance)
const numberOfHearts = 5;
```

### Change Heart Symbols

Edit `script.js` (line 67):

```javascript
// Original
const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝'];

// Romantic roses:
const heartSymbols = ['🌹', '🌺', '🌸', '🌷', '🌻'];

// Stars theme:
const heartSymbols = ['⭐', '✨', '🌟', '💫', '⚡'];

// Emojis:
const heartSymbols = ['😍', '🥰', '😘', '💑', '👫'];
```

---

## 🔤 Change Fonts

### Use Different Fonts

1. **Pick fonts from Google Fonts**: https://fonts.google.com

2. **Update HTML** `<head>` (line 14):

```html
<!-- Original -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Great+Vibes&display=swap" rel="stylesheet">

<!-- Example: Using Montserrat + Pacifico -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Pacifico&display=swap" rel="stylesheet">
```

3. **Update CSS** in `styles.css`:

```css
:root {
    /* Original */
    --font-primary: 'Poppins', sans-serif;
    --font-script: 'Great Vibes', cursive;
    
    /* New fonts */
    --font-primary: 'Montserrat', sans-serif;
    --font-script: 'Pacifico', cursive;
}
```

### Popular Font Combinations

#### Modern & Clean
- Primary: `Roboto`
- Script: `Dancing Script`

#### Elegant & Romantic
- Primary: `Playfair Display`
- Script: `Allura`

#### Fun & Playful
- Primary: `Quicksand`
- Script: `Satisfy`

---

## 🎵 Sound Customization

### Disable Sounds

Edit `script.js`, comment out sound functions:

```javascript
function handleCalculate() {
    // ... validation code ...
    
    // playCalculateSound();  // Comment this out
    
    // ... rest of code ...
}
```

### Change Sound Frequencies

Edit `script.js` (around line 540):

```javascript
// Original romantic chime
oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5

// Higher pitch (more cheerful)
oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5

// Lower pitch (deeper sound)
oscillator.frequency.setValueAtTime(392.00, audioContext.currentTime); // G4
```

---

## 📏 Adjust Sizes

### Make Progress Ring Bigger/Smaller

Edit `styles.css` (around line 380):

```css
.progress-ring-container {
    /* Original */
    width: 200px;
    height: 200px;
    
    /* Bigger */
    width: 250px;
    height: 250px;
    
    /* Smaller */
    width: 150px;
    height: 150px;
}
```

Don't forget to update the SVG size in `index.html`:

```html
<!-- Original -->
<svg class="progress-ring" width="200" height="200">

<!-- Match your new size -->
<svg class="progress-ring" width="250" height="250">
```

### Change Button Size

Edit `styles.css` (around line 285):

```css
.calculate-btn {
    /* Original */
    padding: 1.25rem 2rem;
    font-size: 1.1rem;
    
    /* Bigger button */
    padding: 1.5rem 2.5rem;
    font-size: 1.3rem;
    
    /* Smaller button */
    padding: 1rem 1.5rem;
    font-size: 1rem;
}
```

---

## 🌐 Add More Languages

### Create Multilingual Support

1. **Add language selector** in HTML:

```html
<!-- Add this in the header -->
<select id="languageSelector" class="language-selector">
    <option value="en">English</option>
    <option value="es">Español</option>
    <option value="fr">Français</option>
    <option value="hi">हिंदी</option>
</select>
```

2. **Create translations** in `script.js`:

```javascript
const translations = {
    en: {
        title: "Love Calculator",
        subtitle: "Discover Your Love Percentage",
        yourName: "Your Name",
        partnerName: "Partner's Name",
        calculate: "Calculate Love",
        // ... more translations
    },
    es: {
        title: "Calculadora de Amor",
        subtitle: "Descubre tu Porcentaje de Amor",
        yourName: "Tu Nombre",
        partnerName: "Nombre de Pareja",
        calculate: "Calcular Amor",
    },
    // Add more languages...
};
```

3. **Add translation function**:

```javascript
function translatePage(lang) {
    const t = translations[lang];
    document.querySelector('.title-main').textContent = t.title;
    document.querySelector('.title-sub').textContent = t.subtitle;
    // Update all elements...
}
```

---

## ➕ Add New Features

### Add "Save Results" Feature

1. **Add button** in HTML:

```html
<button class="action-btn save-btn" id="saveBtn">
    <i class="fas fa-save"></i>
    Save Result
</button>
```

2. **Add functionality** in `script.js`:

```javascript
// Save to localStorage
elements.saveBtn.addEventListener('click', () => {
    const result = {
        name1: state.yourName,
        name2: state.partnerName,
        percentage: state.currentPercentage,
        date: new Date().toISOString()
    };
    
    let saved = JSON.parse(localStorage.getItem('savedResults') || '[]');
    saved.push(result);
    localStorage.setItem('savedResults', JSON.stringify(saved));
    
    showNotification('Result saved! 💾');
});
```

### Add Zodiac Compatibility

1. **Add zodiac inputs** in HTML:

```html
<select id="yourZodiac">
    <option value="">Your Zodiac</option>
    <option value="aries">Aries</option>
    <option value="taurus">Taurus</option>
    <!-- ... more signs -->
</select>
```

2. **Add zodiac bonus** in `script.js`:

```javascript
function calculateLovePercentage(name1, name2, zodiac1, zodiac2) {
    let percentage = /* existing calculation */;
    
    // Add zodiac compatibility bonus
    const zodiacBonus = getZodiacCompatibility(zodiac1, zodiac2);
    percentage = Math.min(100, percentage + zodiacBonus);
    
    return percentage;
}

function getZodiacCompatibility(sign1, sign2) {
    const compatibility = {
        'aries-leo': 10,
        'taurus-virgo': 8,
        // ... more combinations
    };
    
    const key = [sign1, sign2].sort().join('-');
    return compatibility[key] || 0;
}
```

---

## 🎨 Icon Customization

### Change Icons

Find icons at: https://fontawesome.com/icons

Update in HTML:

```html
<!-- Original heart icon -->
<i class="fas fa-heart"></i>

<!-- Change to: -->
<i class="fas fa-heart-pulse"></i>  <!-- Heartbeat -->
<i class="fas fa-fire-heart"></i>   <!-- Fire heart -->
<i class="fas fa-heart-circle"></i>  <!-- Circle heart -->
```

---

## 🔧 Advanced Customizations

### Change Calculation Algorithm

Edit `script.js` (around line 180):

```javascript
function calculateLovePercentage(name1, name2) {
    // Current: Hash-based algorithm
    
    // Alternative 1: Length-based (simple but fun)
    const totalLength = name1.length + name2.length;
    return 50 + (totalLength % 50);
    
    // Alternative 2: Vowel count
    const vowels = 'aeiouAEIOU';
    let count = 0;
    (name1 + name2).split('').forEach(char => {
        if (vowels.includes(char)) count++;
    });
    return Math.min(100, count * 8);
    
    // Alternative 3: Random (but consistent with date)
    const combined = name1 + name2 + new Date().toDateString();
    // ... hash logic
}
```

### Add Confetti on High Scores

1. **Add canvas** in HTML:

```html
<canvas id="confettiCanvas"></canvas>
```

2. **Add confetti effect** in `script.js`:

```javascript
function showConfetti() {
    // Use a library like canvas-confetti
    // Or create simple confetti with CSS animation
}

// In updateResultDisplay():
if (percentage >= 90) {
    showConfetti();
}
```

---

## 🎯 Performance Tweaks

### Reduce Animations for Mobile

Edit `styles.css`:

```css
@media (max-width: 768px) {
    /* Disable floating hearts on mobile */
    .floating-hearts {
        display: none;
    }
    
    /* Simplify animations */
    * {
        animation-duration: 0.3s !important;
    }
}
```

### Lazy Load Components

Only load heavy features when needed:

```javascript
// Load GSAP only if needed
if (window.innerWidth > 768) {
    // Load full animations
} else {
    // Use CSS-only animations
}
```

---

## ✅ Testing Your Changes

After any customization:

1. **Clear browser cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Test on mobile**: Use browser dev tools (F12 → Toggle device toolbar)
3. **Check console**: F12 → Console tab (look for errors)
4. **Test all features**:
   - Input validation
   - Calculate button
   - Result display
   - Share buttons
   - Theme toggle

---

## 🆘 Common Issues

### Colors Not Changing?
- Make sure you're editing `:root` variables
- Clear browser cache
- Check CSS syntax (no missing semicolons)

### Fonts Not Loading?
- Verify Google Fonts link is correct
- Check font names match exactly (case-sensitive)
- Clear browser cache

### JavaScript Breaks?
- Check browser console for errors
- Ensure you didn't delete any closing braces `}`
- Validate JSON with: https://jsonlint.com

---

## 💡 Pro Tips

1. **Make small changes** - test after each modification
2. **Keep backups** - copy files before editing
3. **Use browser dev tools** - inspect element to test CSS live
4. **Comment your code** - add notes for future reference
5. **Version control** - use Git to track changes

---

## 🎨 Color Palette Generator

Need help choosing colors? Use these tools:
- **Coolors**: https://coolors.co
- **Adobe Color**: https://color.adobe.com
- **Color Hunt**: https://colorhunt.co

Paste hex codes into your CSS variables!

---

## 📚 Resources

- **CSS Tricks**: https://css-tricks.com
- **MDN Web Docs**: https://developer.mozilla.org
- **GSAP Docs**: https://greensock.com/docs/
- **Font Awesome**: https://fontawesome.com

---

**Happy Customizing! Make it uniquely yours! 🎨✨**

---

*Need more help? Check the README.md for detailed documentation!*
