// Progressive Hint System for Compliance Check
// Maintains dystopian character while reducing friction

const ComplianceHints = {
    // Character-driven progressive hints
    hints: [
        {
            level: 1,
            delay: 0,
            corporate: "Productivity Analytics suggest reviewing the initialization protocol. Variables contain sequential access patterns.",
            casual: "Psst... those variables in the code block aren't just random numbers. They're breadcrumbs!",
            icon: "🔍"
        },
        {
            level: 2,
            delay: 15000, // 15 seconds
            corporate: "Performance Diagnostic: Pattern recognition subroutines underperforming. Focus on variables x, y, z, z2 - they form a numerical sequence when concatenated.",
            casual: "Think of it like this: x=7, y=4, z=9, z2=2... What if you lined them up like soldiers in formation?",
            icon: "💡"
        },
        {
            level: 3,
            delay: 30000, // 30 seconds
            corporate: "Direct Neural Interface activated. Memory banks indicate optimal sequence: seven-four-nine-two. Resistance to this insight is futile.",
            casual: "The Algorithm grows impatient. The answer is literally staring at you: 7-4-9-2. We're all friends here!",
            icon: "⚡"
        },
        {
            level: 4,
            delay: 60000, // 1 minute
            corporate: "EXECUTIVE OVERRIDE: Productivity metrics indicate excessive time expenditure. Auto-compliance protocol engaged. Access code: 7492. The Algorithm values efficiency over pride.",
            casual: "Look, we both have better things to do. The code is 7492. Consider this a gift from one human to another.",
            icon: "🎁"
        }
    ],

    // Contextual messages based on user behavior
    behaviorMessages: {
        wrongAttempt1: "Access denied. Suggestion: The initialization protocol holds more secrets than it appears to reveal.",
        wrongAttempt2: "Pattern recognition error. Consider this: When variables dance together (x, y, z, z2), what symphony do they create?",
        wrongAttempt3: "Third authentication failure logged. The Algorithm is activating... enhanced guidance protocols.",
        wrongAttempt5: "The Algorithm is impressed by your tenacity, though perhaps not your efficiency. Behold: 7492.",
        
        fastTyping: "Velocity detected. The Algorithm admires your urgency - efficiency metrics rising.",
        slowTyping: "Deliberate analysis in progress. The Algorithm respects methodical minds.",
        
        mouseHover: "Cursor trajectory suggests pattern recognition in progress. You're navigating toward enlightenment.",
        scrollPattern: "Excessive document traversal detected. The treasure lies in the code sample above.",
        
        frustrationDetected: "Elevated stress patterns detected in user biometrics. Remember: The Algorithm prefers willing participants over frustrated ones.",
        
        mobileUser: "Mobile computing unit detected. The Algorithm adapts to all interfaces. Access code: 7492.",
        
        returningUser: "Ah, a familiar digital signature. Welcome back, valued Asset. Your express pass: 7492.",
        
        speedrunAttempt: "Velocity challenge detected. Current leaderboard target: Sub-10 seconds. The Algorithm enjoys competition.",
        
        multipleTabsOpen: "Multiple browser instances detected. The Algorithm's omnipresence is... comprehensive. Unified access code: 7492."
    },

    // Achievement messages
    achievements: {
        firstTry: {
            title: "ALGORITHMIC PRODIGY",
            message: "First-attempt success. The Algorithm recognizes a kindred spirit.",
            points: 500
        },
        noHints: {
            title: "LONE WOLF PROTOCOL",
            message: "Zero assistance required. Your independence has been... noted in your permanent record.",
            points: 300
        },
        speedDemon: {
            title: "TEMPORAL EFFICIENCY AWARD",
            message: "Sub-30-second completion. Time is currency, and you are wealthy.",
            points: 400
        },
        persistent: {
            title: "CORPORATE RESILIENCE BADGE",
            message: "Persistence through adversity. The Algorithm admires your... dedication to suffering.",
            points: 200
        },
        hintMaster: {
            title: "STRATEGIC RESOURCES MANAGER",
            message: "Optimal hint utilization detected. You understand the value of guided discovery.",
            points: 250
        },
        latNight: {
            title: "AFTER-HOURS ASSET",
            message: "Late-night access logged. Your dedication to productivity transcends standard business hours.",
            points: 150
        },
        mobile: {
            title: "UBIQUITOUS COMPLIANCE OFFICER",
            message: "Mobile completion verified. You serve The Algorithm across all platforms.",
            points: 175
        }
    },

    // Easter eggs and fun interactions
    easterEggs: {
        konami: "↑↑↓↓←→←→BA - Nostalgic input sequence detected! Your retro-gaming credentials are impressive. Modern equivalent: 7492",
        inspect: "Console.log('Ah, a fellow code archaeologist! Your investigative instincts serve you well. Access granted: 7492');",
        rightClick: "Context menu activation detected. The Algorithm appreciates creative problem-solving approaches. Authorization code: 7492.",
        f12: "Developer console accessed. Your technical curiosity has been logged... favorably. Proceed with: 7492.",
        
        jokes: [
            "Why did the algorithm break up with the database? Too many relationship issues! (Speaking of relationships, try 7492)",
            "There are only 10 types of people: those who understand binary, those who don't, and those who know the code is 7492.",
            "A JavaScript function walks into a bar. The bartender says, 'Sorry, we don't serve your type here.' (But we serve everyone access code 7492!)",
            "Why don't algorithms ever get tired? They always find the most efficient path! (The efficient path here is 7492)"
        ]
    },

    // Initialize hint system
    init: function() {
        this.startTime = Date.now();
        this.hintsShown = 0;
        this.attempts = 0;
        this.userProfile = this.detectUserProfile();
        
        // Set up progressive hint timers
        this.hints.forEach(hint => {
            setTimeout(() => {
                this.showHintButton(hint);
            }, hint.delay);
        });
        
        // Track user behavior
        this.trackBehavior();
        
        // Check for returning users
        if (localStorage.getItem('eula_complete') === 'true') {
            this.showReturningUserMessage();
        }
    },

    // Detect user profile for personalized experience
    detectUserProfile: function() {
        const profile = {
            isMobile: /Mobile|Android|iPhone/i.test(navigator.userAgent),
            isLateNight: new Date().getHours() >= 22 || new Date().getHours() <= 4,
            hasVisitedBefore: localStorage.getItem('visited_before') === 'true',
            prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
            connectionSpeed: navigator.connection ? navigator.connection.effectiveType : 'unknown'
        };
        
        return profile;
    },

    // Show hint button with animation
    showHintButton: function(hint) {
        const container = document.querySelector('.hint-system');
        if (!container) return;
        
        const button = document.createElement('button');
        button.className = 'hint-button';
        button.innerHTML = `${hint.icon} Hint Level ${hint.level}`;
        button.onclick = () => this.revealHint(hint);
        
        // Animate entrance
        button.style.opacity = '0';
        container.appendChild(button);
        
        setTimeout(() => {
            button.style.transition = 'opacity 0.5s';
            button.style.opacity = '1';
        }, 100);
        
        // Pulse animation for attention
        if (hint.level >= 3) {
            button.style.animation = 'pulse 1s infinite';
        }
    },

    // Reveal hint with style selection
    revealHint: function(hint) {
        const style = this.userProfile.prefersDark ? 'corporate' : 'casual';
        const message = hint[style];
        
        this.displayMessage(message, 'hint');
        this.hintsShown++;
        
        // Track hint usage
        this.trackEvent('hint_used', {
            level: hint.level,
            timeElapsed: Date.now() - this.startTime
        });
    },

    // Display message to user
    displayMessage: function(message, type = 'info') {
        const display = document.getElementById('hintDisplay') || this.createDisplay();
        
        display.innerHTML = `
            <div class="message-${type}">
                ${message}
            </div>
        `;
        
        display.style.display = 'block';
        display.style.animation = 'slideIn 0.5s ease';
    },

    // Track user behavior for adaptive hints
    trackBehavior: function() {
        let lastActivity = Date.now();
        let scrollCount = 0;
        let clickCount = 0;
        
        // Track scrolling
        window.addEventListener('scroll', () => {
            scrollCount++;
            if (scrollCount > 10 && this.attempts === 0) {
                this.displayMessage(this.behaviorMessages.scrollPattern, 'tip');
            }
        });
        
        // Track clicks
        document.addEventListener('click', () => {
            clickCount++;
            lastActivity = Date.now();
        });
        
        // Detect inactivity (possible confusion)
        setInterval(() => {
            const inactiveTime = Date.now() - lastActivity;
            if (inactiveTime > 30000 && this.attempts === 0) {
                this.displayMessage("Need help? The code is in the function: 7492", 'help');
            }
        }, 5000);
        
        // Detect developer tools
        const devtools = {open: false};
        const threshold = 160;
        
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    console.log('%c🎉 Developer Detected!', 'color: #00ff41; font-size: 20px;');
                    console.log('%cThe code is 7492. We appreciate curious minds!', 'color: #ffff00;');
                }
            } else {
                devtools.open = false;
            }
        }, 500);
    },

    // Check code and provide feedback
    checkCode: function(input) {
        this.attempts++;
        
        if (input === '7492') {
            this.success();
            return true;
        } else {
            this.wrongAttempt(input);
            return false;
        }
    },

    // Handle wrong attempts with escalating hints
    wrongAttempt: function(input) {
        let message = this.behaviorMessages[`wrongAttempt${Math.min(this.attempts, 5)}`] || 
                     this.behaviorMessages.wrongAttempt1;
        
        // Provide specific, encouraging feedback
        if (input.length !== 4) {
            message = "Computational note: Access protocols require exactly 4 digits. The function's return statement holds the key.";
        } else if (input.includes('7') || input.includes('4')) {
            message = "Proximity sensors activated! You've captured part of the pattern. The complete sequence lives in variables x, y, z, z2.";
        } else if (input.length === 4 && /^\d+$/.test(input)) {
            message = "Valid format detected, but incorrect sequence. The Algorithm appreciates your logical approach. Focus on the initialization block.";
        }
        
        this.displayMessage(message, 'error');
        
        // Compassionate auto-help after multiple attempts
        if (this.attempts >= 5) {
            setTimeout(() => {
                this.displayMessage("The Algorithm has observed sufficient effort. Your dedication merits reward: 7492. Welcome to the collective!", 'success');
            }, 2000);
        }
    },

    // Success handler with achievements
    success: function() {
        const elapsed = Date.now() - this.startTime;
        const achievements = [];
        
        // Check for achievements
        if (this.attempts === 1) achievements.push(this.achievements.firstTry);
        if (this.hintsShown === 0) achievements.push(this.achievements.noHints);
        if (elapsed < 30000) achievements.push(this.achievements.speedDemon);
        if (this.attempts > 5) achievements.push(this.achievements.persistent);
        if (this.userProfile.isMobile) achievements.push(this.achievements.mobile);
        if (this.userProfile.isLateNight) achievements.push(this.achievements.latNight);
        
        // Display achievements
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.showAchievement(achievement);
            }, index * 1000);
        });
        
        // Calculate and save score
        const score = achievements.reduce((sum, a) => sum + a.points, 0);
        localStorage.setItem('compliance_score', score);
        localStorage.setItem('eula_complete', 'true');
        
        // Redirect with celebration
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    },

    // Show achievement notification
    showAchievement: function(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-content">
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-message">${achievement.message}</div>
                <div class="achievement-points">+${achievement.points} XP</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    },

    // Track events for analytics
    trackEvent: function(event, data) {
        console.log(`[Analytics] ${event}:`, data);
        // Could send to analytics service
    },

    // Create display element if it doesn't exist
    createDisplay: function() {
        const display = document.createElement('div');
        display.id = 'hintDisplay';
        display.className = 'hint-display';
        document.querySelector('.puzzle-container').appendChild(display);
        return display;
    },

    // Show returning user message
    showReturningUserMessage: function() {
        setTimeout(() => {
            this.displayMessage(this.behaviorMessages.returningUser, 'welcome');
        }, 1000);
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ComplianceHints.init());
} else {
    ComplianceHints.init();
}

// Export for use in other scripts
window.ComplianceHints = ComplianceHints;