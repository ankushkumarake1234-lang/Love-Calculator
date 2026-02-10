# ❤️ Love Calculator - Premium Edition

A modern, interactive **Love Calculator** web application featuring stunning UI/UX, 3D animations, glassmorphism design, and viral-ready features.

![Love Calculator](https://img.shields.io/badge/Love-Calculator-ff006e?style=for-the-badge&logo=heart)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 💖 Core Functionality
- **Two input fields** for Your Name & Partner Name
- **Calculate Love Button** with smooth hover & click animations
- **Animated progress ring** showing 0-100% love percentage
- **Romantic messages** based on score (6 different message tiers)
- **Consistent results** - same names always produce same percentage

### 🎨 Premium UI/UX
- **Glassmorphism effects** with backdrop blur
- **Soft neon glow** on interactive elements
- **Gradient backgrounds** (pink, purple, red romantic tones)
- **Modern typography** using Poppins & Great Vibes fonts
- **Mobile-first responsive design**
- **Smooth transitions** with ease-in-out timing

### 🎭 3D & Animations
- **3D floating hearts** in background (CSS animations)
- **GSAP-powered animations** for ultra-smooth effects
- **Button press 3D depth effect**
- **Result reveal animations** (scale + fade)
- **Heartbeat animations** throughout the UI
- **Interactive hover effects** on all elements

### 🎵 Sound & Interaction
- **Sound effects** on calculation (romantic chime)
- **Success sound** when result appears
- **Web Audio API** for browser-native sounds
- **Keyboard shortcuts** (Enter to submit, ESC to close modals)

### 🌓 Theme System
- **Dark & Light mode** toggle
- **Persistent theme** saved to localStorage
- **Smooth theme transitions**
- **Animated toggle button** with rotation effect

### 📱 Social Sharing
- **Share to WhatsApp** with pre-formatted message
- **Share to Twitter** with custom text
- **Share to Facebook** 
- **Copy to clipboard** functionality
- **Beautiful share modal** with glassmorphic design

### 🎁 Extra Features
- **Easter eggs** for famous couple names
- **Self-love detection** (same name check)
- **Consistent algorithm** - uses hash-based calculation
- **Accessibility** features (ARIA labels, keyboard navigation)
- **SEO optimized** with proper meta tags
- **No external dependencies** except GSAP and Font Awesome

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - works directly in browser!

### Installation

1. **Clone or download** this project:
   ```bash
   cd "Love Calculator"
   ```

2. **Open the application**:
   - Simply double-click `index.html`, OR
   - Use a local server:
     ```bash
     # Python 3
     python3 -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with npx)
     npx http-server
     ```

3. **Open in browser**:
   - Navigate to `http://localhost:8000` (if using a server)
   - Or just open `index.html` directly in your browser

## 📖 How to Use

1. **Enter your name** in the first input field
2. **Enter your partner's name** in the second field
3. **Click "Calculate Love"** button (or press Enter)
4. **Watch the magic happen!** 
   - Animated progress ring fills up
   - Counter animates from 0 to your percentage
   - Romantic message appears based on score
5. **Share your result** on social media
6. **Try again** with different names

### Keyboard Shortcuts
- `Enter` - Submit calculation (when in input fields)
- `ESC` - Close share modal
- `Ctrl/Cmd + R` - Reset calculator (when on result screen)

## 🎨 Design Highlights

### Color Palette
- **Primary Gradient**: Pink (#ff006e) → Rose (#ff5e78) → Peach (#ff9a8b)
- **Secondary Gradient**: Purple (#8b5cf6) → Violet (#c084fc) → Pink (#e879f9)
- **Background**: Dynamic gradient with pink, purple, and violet tones

### Typography
- **Primary Font**: Poppins (300, 400, 500, 600, 700)
- **Script Font**: Great Vibes (for romantic headings)

### Design Principles
- **Glassmorphism** - frosted glass effect with backdrop blur
- **Neumorphism** - soft depth and shadows
- **Micro-animations** - enhance user engagement
- **Premium aesthetics** - WOW factor on first glance

## 🧮 How the Algorithm Works

The love calculator uses a **deterministic hash-based algorithm**:

1. **Combines both names** (lowercase, sorted alphabetically)
2. **Generates a hash** from the combined string
3. **Converts to percentage** (0-100)
4. **Applies romantic bias** - boosts lower scores for more fun results
5. **Same names = same result** every time!

### Example:
```javascript
"John" + "Emily" = 85% ❤️
"John" + "Emily" = 85% (always the same!)
```

## 🌟 Love Message Tiers

| Percentage | Title | Vibe |
|------------|-------|------|
| 90-100% | Perfect Match! 💖 | Soulmates, destined love |
| 80-89% | Amazing Connection! 💕 | Incredible bond |
| 70-79% | Strong Love! 💗 | Wonderful connection |
| 60-69% | Great Chemistry! 💓 | Special something |
| 50-59% | Good Potential! 💞 | Solid foundation |
| 0-49% | Friendship First! 💝 | Build from here |

## 📱 Responsive Breakpoints

- **Desktop**: Full features, large progress ring (200px)
- **Tablet** (≤768px): Adjusted spacing, medium ring (180px)
- **Mobile** (≤480px): Stacked layout, optimized touch targets

## 🎯 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

**Note**: Sound effects require user interaction (browser security policy)

## 🛠️ Technology Stack

### Core
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with custom properties
- **Vanilla JavaScript** - No framework needed!

### Libraries
- **GSAP 3.12.5** - Professional-grade animations
- **Font Awesome 6.5.1** - Beautiful icons
- **Google Fonts** - Poppins & Great Vibes

### APIs
- **Web Audio API** - Sound effects
- **Clipboard API** - Copy to clipboard
- **localStorage API** - Theme persistence

## 📂 Project Structure

```
Love Calculator/
│
├── index.html          # Main HTML file
├── styles.css          # All styles (glassmorphism, animations)
├── script.js           # JavaScript logic & interactions
└── README.md           # Documentation (this file)
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #your-color);
    --glow-color: rgba(your-rgb, 0.5);
}
```

### Modify Messages
Update the `getLoveMessage()` function in `script.js`:
```javascript
function getLoveMessage(percentage) {
    if (percentage >= 90) {
        return {
            title: 'Your Title',
            text: 'Your custom message'
        };
    }
    // ... more tiers
}
```

### Adjust Animation Speed
Modify GSAP durations in `script.js`:
```javascript
gsap.to(element, {
    duration: 0.5, // Change this value
    ease: 'power2.out'
});
```

## 🐛 Known Issues

- Sound effects may not play on first click (browser autoplay policy)
- Safari may have slight animation differences
- Very old browsers (IE11) not supported

## 🚀 Performance

- **Lightweight**: ~50KB total (uncompressed)
- **Fast load time**: < 1 second on average
- **Optimized animations**: 60 FPS on modern devices
- **No image dependencies**: Uses CSS and generated content

## 💡 Future Enhancements

Potential features for future versions:
- [ ] Zodiac compatibility integration
- [ ] Save/compare multiple calculations
- [ ] User accounts & history
- [ ] More Easter eggs
- [ ] Export result as image
- [ ] Multilingual support
- [ ] Custom themes

## 📝 License

This project is open source and available for personal and educational use.

**Note**: This is for entertainment purposes only. Love cannot be calculated! 😊

## 🤝 Contributing

Feel free to fork this project and add your own enhancements!

## ❤️ Credits

- **Design & Development**: Premium Love Calculator
- **Fonts**: Google Fonts (Poppins, Great Vibes)
- **Icons**: Font Awesome
- **Animations**: GSAP by GreenSock

---

<div align="center">

**Made with ❤️ for lovers worldwide**

*Calculate your love and share the joy!* 💕

[Try Demo](#) | [Report Bug](#) | [Request Feature](#)

</div>

---

## 🎉 Have Fun!

Enjoy spreading love and laughter with this calculator! Remember, true love is built on trust, respect, and communication - not just percentages! 😉

**Pro tip**: Try it with famous couple names for surprise Easter eggs! 🎊
