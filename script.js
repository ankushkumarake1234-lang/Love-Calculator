/* ==============================================
   LOVE CALCULATOR - JAVASCRIPT
   Interactive Logic with Animations & Features
   ============================================== */

// --------------------- STATE MANAGEMENT ---------------------
const state = {
    theme: 'light',
    currentPercentage: 0,
    yourName: '',
    partnerName: '',
    audioContext: null
};

// --------------------- DOM ELEMENTS ---------------------
const elements = {
    // Theme
    themeToggle: document.getElementById('themeToggle'),
    
    // Input Section
    inputSection: document.getElementById('inputSection'),
    yourNameInput: document.getElementById('yourName'),
    partnerNameInput: document.getElementById('partnerName'),
    calculateBtn: document.getElementById('calculateBtn'),
    
    // Result Section
    resultSection: document.getElementById('resultSection'),
    progressCircle: document.getElementById('progressCircle'),
    percentageDisplay: document.getElementById('percentageDisplay'),
    name1Display: document.getElementById('name1Display'),
    name2Display: document.getElementById('name2Display'),
    messageTitle: document.getElementById('messageTitle'),
    messageText: document.getElementById('messageText'),
    
    // Action Buttons
    shareBtn: document.getElementById('shareBtn'),
    retryBtn: document.getElementById('retryBtn'),
    
    // Modal
    shareModal: document.getElementById('shareModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    shareWhatsapp: document.getElementById('shareWhatsapp'),
    shareTwitter: document.getElementById('shareTwitter'),
    shareFacebook: document.getElementById('shareFacebook'),
    shareCopy: document.getElementById('shareCopy'),
    
    // Background
    floatingHearts: document.getElementById('floatingHearts')
};

// --------------------- INITIALIZATION ---------------------
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Create floating hearts background
    createFloatingHearts();
    
    // Setup event listeners
    setupEventListeners();
    
    // Add input animations
    addInputAnimations();
}

// --------------------- THEME MANAGEMENT ---------------------
function setTheme(theme) {
    state.theme = theme;
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Animate theme toggle button
    gsap.to(elements.themeToggle, {
        rotation: '+=360',
        duration: 0.5,
        ease: 'back.out(1.7)'
    });
}

// --------------------- FLOATING HEARTS ---------------------
function createFloatingHearts() {
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝'];
    const numberOfHearts = 15;
    
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random positioning
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        elements.floatingHearts.appendChild(heart);
    }
}

// --------------------- EVENT LISTENERS ---------------------
function setupEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Calculate button
    elements.calculateBtn.addEventListener('click', handleCalculate);
    
    // Enter key on inputs
    elements.yourNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') elements.partnerNameInput.focus();
    });
    
    elements.partnerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleCalculate();
    });
    
    // Action buttons
    elements.retryBtn.addEventListener('click', resetCalculator);
    elements.shareBtn.addEventListener('click', openShareModal);
    
    // Modal
    elements.modalClose.addEventListener('click', closeShareModal);
    elements.modalOverlay.addEventListener('click', closeShareModal);
    
    // Share options
    elements.shareWhatsapp.addEventListener('click', () => shareToWhatsApp());
    elements.shareTwitter.addEventListener('click', () => shareToTwitter());
    elements.shareFacebook.addEventListener('click', () => shareToFacebook());
    elements.shareCopy.addEventListener('click', () => copyToClipboard());
}

function addInputAnimations() {
    const inputs = [elements.yourNameInput, elements.partnerNameInput];
    
    inputs.forEach(input => {
        input.addEventListener('focus', (e) => {
            gsap.to(e.target, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', (e) => {
            gsap.to(e.target, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// --------------------- LOVE CALCULATION ---------------------
function handleCalculate() {
    const yourName = elements.yourNameInput.value.trim();
    const partnerName = elements.partnerNameInput.value.trim();
    
    // Validation
    if (!yourName || !partnerName) {
        shakeInputs();
        showNotification('Please enter both names! 💕');
        return;
    }
    
    if (yourName.length < 2 || partnerName.length < 2) {
        shakeInputs();
        showNotification('Names should be at least 2 characters! 😊');
        return;
    }
    
    // Store names
    state.yourName = yourName;
    state.partnerName = partnerName;
    
    // Play sound effect
    playCalculateSound();
    
    // Animate button press
    animateButtonPress();
    
    // Calculate love percentage
    const percentage = calculateLovePercentage(yourName, partnerName);
    state.currentPercentage = percentage;
    
    // Show result with animation
    setTimeout(() => showResult(percentage), 800);
}

function calculateLovePercentage(name1, name2) {
    // Consistent algorithm: same names always produce same result
    // Uses a hash-based approach for consistency
    
    const combined = (name1.toLowerCase() + name2.toLowerCase()).split('').sort().join('');
    let hash = 0;
    
    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Ensure positive and within 0-100 range
    let percentage = Math.abs(hash) % 101;
    
    // Add some bias towards higher percentages (more romantic!)
    // This makes the calculator more fun while staying consistent
    if (percentage < 40) {
        percentage = 40 + (percentage % 30);
    }
    
    return percentage;
}

function animateButtonPress() {
    const btn = elements.calculateBtn;
    
    gsap.timeline()
        .to(btn, {
            scale: 0.95,
            duration: 0.1,
            ease: 'power2.in'
        })
        .to(btn, {
            scale: 1.05,
            duration: 0.3,
            ease: 'elastic.out(1, 0.3)'
        })
        .to(btn, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
        });
}

function shakeInputs() {
    const inputs = [elements.yourNameInput, elements.partnerNameInput];
    
    inputs.forEach(input => {
        gsap.timeline()
            .to(input, {
                x: -10,
                duration: 0.1
            })
            .to(input, {
                x: 10,
                duration: 0.1
            })
            .to(input, {
                x: -10,
                duration: 0.1
            })
            .to(input, {
                x: 0,
                duration: 0.1
            });
    });
}

// --------------------- RESULT DISPLAY ---------------------
function showResult(percentage) {
    // Hide input section
    gsap.to(elements.inputSection, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        onComplete: () => {
            elements.inputSection.classList.add('hidden');
            elements.resultSection.classList.remove('hidden');
            
            // Animate result section
            gsap.fromTo(elements.resultSection, 
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
            );
            
            // Update result content
            updateResultDisplay(percentage);
        }
    });
}

function updateResultDisplay(percentage) {
    // Update names
    elements.name1Display.textContent = state.yourName;
    elements.name2Display.textContent = state.partnerName;
    
    // Animate progress ring
    animateProgressRing(percentage);
    
    // Animate percentage counter
    animatePercentageCounter(percentage);
    
    // Update love message
    const message = getLoveMessage(percentage);
    elements.messageTitle.textContent = message.title;
    elements.messageText.textContent = message.text;
    
    // Play success sound
    playSuccessSound();
}

function animateProgressRing(percentage) {
    const circle = elements.progressCircle;
    const circumference = 2 * Math.PI * 85; // radius = 85
    const offset = circumference - (percentage / 100) * circumference;
    
    // Initial state
    circle.style.strokeDashoffset = circumference;
    
    // Animate to final value
    gsap.to(circle, {
        strokeDashoffset: offset,
        duration: 2,
        ease: 'power2.out',
        delay: 0.3
    });
}

function animatePercentageCounter(targetPercentage) {
    const display = elements.percentageDisplay.querySelector('.percentage-number');
    const counter = { value: 0 };
    
    gsap.to(counter, {
        value: targetPercentage,
        duration: 2,
        ease: 'power2.out',
        delay: 0.3,
        onUpdate: () => {
            display.textContent = Math.round(counter.value);
        }
    });
}

function getLoveMessage(percentage) {
    if (percentage >= 90) {
        return {
            title: '💖 Perfect Match! 💖',
            text: 'You two are absolutely made for each other! This is true love destined by the stars. Your connection is magical and rare! ✨'
        };
    } else if (percentage >= 80) {
        return {
            title: '💕 Amazing Connection! 💕',
            text: 'Wow! You share an incredible bond! This relationship has everything it takes to last a lifetime. Keep nurturing this beautiful love! 🌹'
        };
    } else if (percentage >= 70) {
        return {
            title: '💗 Strong Love! 💗',
            text: 'You have a wonderful connection! With trust and communication, your love will continue to grow stronger every day! 💫'
        };
    } else if (percentage >= 60) {
        return {
            title: '💓 Great Chemistry! 💓',
            text: 'There\'s definitely something special between you two! Keep building on this foundation and your love will flourish! 🌺'
        };
    } else if (percentage >= 50) {
        return {
            title: '💞 Good Potential! 💞',
            text: 'You have a solid connection with room to grow! Spend quality time together and watch your love blossom! 🌸'
        };
    } else {
        return {
            title: '💝 Friendship First! 💝',
            text: 'Every great love story starts somewhere! Focus on building a strong friendship, and who knows what the future holds? 🌈'
        };
    }
}

// --------------------- RESET CALCULATOR ---------------------
function resetCalculator() {
    // Animate result section out
    gsap.to(elements.resultSection, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
            elements.resultSection.classList.add('hidden');
            elements.inputSection.classList.remove('hidden');
            
            // Clear inputs
            elements.yourNameInput.value = '';
            elements.partnerNameInput.value = '';
            
            // Reset progress ring
            elements.progressCircle.style.strokeDashoffset = 534;
            
            // Animate input section back
            gsap.fromTo(elements.inputSection,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' }
            );
            
            // Focus first input
            setTimeout(() => elements.yourNameInput.focus(), 600);
        }
    });
}

// --------------------- SHARE FUNCTIONALITY ---------------------
function openShareModal() {
    elements.shareModal.classList.remove('hidden');
    gsap.fromTo(elements.shareModal.querySelector('.modal-content'),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
    );
}

function closeShareModal() {
    gsap.to(elements.shareModal.querySelector('.modal-content'),
        {
            scale: 0.8,
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                elements.shareModal.classList.add('hidden');
            }
        }
    );
}

function getShareText() {
    const { yourName, partnerName, currentPercentage } = state;
    return `❤️ Love Calculator Result!\n\n${yourName} + ${partnerName} = ${currentPercentage}% Love! 💕\n\nCalculate your love percentage now! 👇`;
}

function shareToWhatsApp() {
    const text = encodeURIComponent(getShareText());
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
    closeShareModal();
}

function shareToTwitter() {
    const text = encodeURIComponent(getShareText());
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank');
    closeShareModal();
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, '_blank');
    closeShareModal();
}

function copyToClipboard() {
    const text = getShareText();
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard! 📋');
        closeShareModal();
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('Copied to clipboard! 📋');
        closeShareModal();
    });
}

// --------------------- NOTIFICATIONS ---------------------
function showNotification(message) {
    // Remove existing notifications
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: var(--card-bg);
        backdrop-filter: blur(20px);
        border: 2px solid var(--card-border);
        border-radius: var(--radius-pill);
        padding: 1rem 2rem;
        color: var(--text-primary);
        font-weight: 600;
        font-size: 0.95rem;
        z-index: 10000;
        box-shadow: 0 8px 25px var(--shadow-color);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    gsap.to(notification, {
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });
    
    // Animate out and remove
    setTimeout(() => {
        gsap.to(notification, {
            y: -100,
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                notification.remove();
            }
        });
    }, 3000);
}

// --------------------- SOUND EFFECTS ---------------------
function initAudioContext() {
    if (!state.audioContext) {
        state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return state.audioContext;
}

function playCalculateSound() {
    try {
        const audioContext = initAudioContext();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Romantic chime sound (soft bells)
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.log('Audio not supported');
    }
}

function playSuccessSound() {
    try {
        const audioContext = initAudioContext();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Happy success sound
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3); // G5
        oscillator.frequency.setValueAtTime(1046.5, audioContext.currentTime + 0.45); // C6
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.8);
    } catch (error) {
        console.log('Audio not supported');
    }
}

// --------------------- EASTER EGGS & SPECIAL CASES ---------------------
// Add some fun Easter eggs for specific name combinations
function checkEasterEggs(name1, name2) {
    const n1 = name1.toLowerCase();
    const n2 = name2.toLowerCase();
    
    // Same name check
    if (n1 === n2) {
        return {
            title: '😄 You & Yourself! 😄',
            text: 'Self-love is important too! But maybe try with someone else? 💁‍♀️'
        };
    }
    
    // Classic couples
    const famousCouples = {
        'romeo': 'juliet',
        'jack': 'rose',
        'harry': 'sally',
        'ross': 'rachel',
        'chandler': 'monica'
    };
    
    for (const [first, second] of Object.entries(famousCouples)) {
        if ((n1.includes(first) && n2.includes(second)) || 
            (n2.includes(first) && n1.includes(second))) {
            return {
                title: '🌟 Legendary Love! 🌟',
                text: 'Your names remind us of one of the greatest love stories ever told! ✨'
            };
        }
    }
    
    return null;
}

// --------------------- KEYBOARD SHORTCUTS ---------------------
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && !elements.shareModal.classList.contains('hidden')) {
        closeShareModal();
    }
    
    // Ctrl/Cmd + R to reset (when on result screen)
    if ((e.ctrlKey || e.metaKey) && e.key === 'r' && 
        !elements.resultSection.classList.contains('hidden')) {
        e.preventDefault();
        resetCalculator();
    }
});

// --------------------- PERFORMANCE OPTIMIZATIONS ---------------------
// Debounce function for input events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// --------------------- ANALYTICS & TRACKING (Optional) ---------------------
// You can add analytics here to track usage
function trackCalculation(percentage) {
    // Example: console.log('Love calculated:', percentage);
    // Add your analytics code here (Google Analytics, etc.)
}

// --------------------- ACCESSIBILITY ENHANCEMENTS ---------------------
// Add ARIA labels dynamically
elements.calculateBtn.setAttribute('aria-label', 'Calculate love percentage');
elements.retryBtn.setAttribute('aria-label', 'Calculate again with new names');
elements.shareBtn.setAttribute('aria-label', 'Share your results on social media');

// --------------------- CONSOLE MESSAGE ---------------------
console.log('%c💕 Love Calculator v1.0 💕', 'color: #ff006e; font-size: 24px; font-weight: bold;');
console.log('%cMade with ❤️ for lovers worldwide', 'color: #ff5e78; font-size: 14px;');
console.log('%cEnjoy calculating love! ✨', 'color: #8b5cf6; font-size: 12px;');
