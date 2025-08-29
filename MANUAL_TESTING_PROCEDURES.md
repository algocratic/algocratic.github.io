# Manual Testing Procedures
## AlgoCratic Futures™ Sprint Zero - Clearance Level Navigation & Content Verification

### 📋 Purpose
Detailed step-by-step procedures for manually testing all clearance levels, navigation flows, and content verification. These procedures ensure systematic testing of existing functionality without missing critical user journeys.

---

## 🎯 Pre-Test Setup

### Environment Preparation
1. **Clear browser cache and cookies**
2. **Disable browser extensions** (test with clean environment)
3. **Set browser to default zoom level** (100%)
4. **Ensure JavaScript is enabled**
5. **Open developer tools** (monitor console for errors)
6. **Prepare test data collection sheets**

### Test Data Setup
- Have test usernames/passwords ready
- Prepare sample form data
- Note system clock time for timestamp testing
- Clear localStorage: `localStorage.clear()`

---

## 🏠 Main Site Entry Point Testing

### Test Procedure: Homepage Entry Flow
**File:** `/index.html`

1. **Initial Load Test**
   - Navigate to site root
   - ✅ Verify page loads within 3 seconds
   - ✅ Check for console errors (should be none)
   - ✅ Confirm terminal aesthetic displays correctly

2. **Compliance Funnel Test**
   - ✅ Locate "BEGIN COMPLIANCE PROCESS" button
   - ✅ Click button - should redirect to `compliance-check.html`
   - ✅ Return to homepage
   - ✅ Verify "Employee Portal" link shows compliance message

3. **LocalStorage Compliance Override**
   - Open browser console
   - Execute: `localStorage.setItem('eula_complete', 'true')`
   - Refresh page
   - ✅ Verify full navigation appears
   - ✅ Confirm "START CLEARANCE TRAINING" button visible
   - ✅ Test "View All Clearance Levels" link

4. **Navigation Links Validation**
   - ✅ Test GitHub repository link (opens in new tab)
   - ✅ Check footer information displays
   - ✅ Verify scan line animation effect

**Expected Results:**
- Smooth loading with terminal aesthetic
- Conditional content based on compliance status
- All links functional
- No JavaScript errors
- Proper LocalStorage behavior

---

## 🔐 Authentication System Testing

### Test Procedure: Login Flow
**File:** `/login.html`

1. **Visual Verification**
   - ✅ Page loads with dark terminal theme
   - ✅ Binary background animation appears
   - ✅ Scan lines effect visible
   - ✅ Form fields properly styled

2. **Form Validation Testing**
   - **Empty submission test:**
     - Leave all fields blank
     - Click "ACCESS TERMINAL"
     - ✅ Verify HTML5 validation prevents submission
   
   - **Joking checkbox test:**
     - Enter username: "testuser"
     - Enter password: "testpass"
     - Leave "Are you joking?" unchecked
     - Submit form
     - ✅ Verify custom error displays
     - ✅ Check console log for failed attempt
   
   - **Invalid credentials test:**
     - Check "Are you joking?" checkbox
     - Submit with non-existent credentials
     - ✅ Verify loading animation shows
     - ✅ Confirm error message appears
     - ✅ Check fields highlight in red

3. **Successful Login Flow** (requires registration first)
   - Create account via registration
   - Return to login
   - Enter valid credentials + check joking box
   - ✅ Verify redirect to portal.html
   - ✅ Confirm session stored in localStorage

4. **Session Management**
   - With active session, navigate to login.html
   - ✅ Should auto-redirect to portal
   - Clear localStorage
   - ✅ Should remain on login page

### Test Procedure: Registration Flow  
**File:** `/register.html`

1. **Form Functionality**
   - ✅ All form fields accept input
   - ✅ Password confirmation validation works
   - ✅ Account creation stores to localStorage
   - ✅ Success message displays correctly
   - ✅ Auto-redirect to login works

**Expected Results:**
- Smooth form interactions
- Proper validation messaging
- LocalStorage persistence
- Visual feedback during processing
- Correct redirection flows

---

## 🎯 Clearance Level System Testing

### Test Procedure: Clearance Level Navigation
**File:** `/clearance/index.html`

1. **Main Clearance Index**
   - ✅ All clearance levels listed correctly
   - ✅ Color coding matches theme (infrared → red → orange → yellow → green → blue → gray)
   - ✅ Descriptions accurate and in character
   - ✅ Navigation links to individual levels work

### Test Procedure: INFRARED Clearance
**Base Path:** `/clearance/infrared/`

1. **Index Page Verification**
   - Navigate to `/clearance/infrared/index.html`
   - ✅ Page loads with INFRARED theme
   - ✅ Role description displays
   - ✅ Navigation menu present

2. **Subpage Navigation Test**
   - **Actions page:** Click → verify content loads
   - **Assignments page:** Click → verify assignment list
   - **Assistance page:** Click → verify help content  
   - **Elevation page:** Click → verify promotion info
   - **Role page:** Click → verify role details
   - **Tools page:** Click → verify tool descriptions
   - **Adventure Mode:** Click → verify game-like interface
   - **Assignment Portal:** Click → verify portal functionality

3. **JavaScript Functionality**
   - ✅ Check for script.js loading
   - ✅ Verify interactive elements work
   - ✅ Test any form submissions
   - ✅ Confirm styling applies correctly

4. **Content Verification**
   - ✅ All text displays properly
   - ✅ Links work correctly
   - ✅ Images/icons load
   - ✅ No broken references

### Test Procedure: RED Clearance
**Base Path:** `/clearance/red/`

1. **Complete Navigation Test**
   - **Index:** `/clearance/red/index.html`
   - **Bot Protocol:** `/clearance/red/bot_protocol.html`
   - **Communication:** `/clearance/red/communication.html`
   - **Elevation:** `/clearance/red/elevation.html`
   - **Modification:** `/clearance/red/modification.html`
   - **Privileges:** `/clearance/red/privileges.html`
   - **Pull Request:** `/clearance/red/pull_request.html`
   - **Role:** `/clearance/red/role.html`
   - **Unauthorized Resources:** `/clearance/red/unauthorized_resources.html`

2. **For Each Page:**
   - ✅ Load successfully
   - ✅ Content displays correctly
   - ✅ Interactive elements function
   - ✅ Styling consistent with RED theme
   - ✅ Navigation works properly

### Test Procedure: ORANGE Clearance  
**Base Path:** `/clearance/orange/`

**Pages to test:**
- Index, Bot Access, Communication, Elevation
- Integration, Oversight, Privileges, Role, Rubber Duck

**Testing Steps:**
1. ✅ Navigate to each page systematically
2. ✅ Verify ORANGE theme consistency
3. ✅ Test interactive elements
4. ✅ Check JavaScript functionality (script.js)
5. ✅ Verify content accuracy

### Test Procedure: YELLOW Clearance
**Base Path:** `/clearance/yellow/`

**Pages to test:**
- Index, AI Authority, Authority, Communication, Devices
- Elevation, Feynman Technique, Privileges, Resources
- Role, Timeboxing

**Testing Steps:**
1. ✅ Navigate through all pages
2. ✅ Test special features (Feynman Technique, Timeboxing)
3. ✅ Verify YELLOW theme elements
4. ✅ Check script.js functionality

### Test Procedure: GREEN Clearance
**Base Path:** `/clearance/green/`

1. **Special Features Testing**
   - **Workshop page:** Test interactive workshop elements
   - **Certificate page:** Test certificate generation
   - **Comment Cards:** Test card system functionality

2. **Content Verification**
   - ✅ GREEN theme applies correctly
   - ✅ All content displays properly
   - ✅ Advanced features work

### Test Procedure: GRAY/BLUE Clearance
**Base Path:** `/clearance/gray/` and `/clearance/blue/`

1. ✅ Verify highest-level content loads
2. ✅ Test exclusive features  
3. ✅ Check access restrictions work properly

**Expected Results for All Clearance Levels:**
- Smooth navigation between pages
- Theme consistency within each level
- All interactive elements functional
- Content displays correctly
- No broken links or missing resources
- JavaScript features work as intended

---

## 🎮 Interactive Features Testing

### Test Procedure: Kanban Board
**File:** `/kanban.html`

1. **Visual Verification**
   - ✅ All 6 columns display (Backlog, To Do, In Progress, Review, Done, Blocked)
   - ✅ Task cards render correctly
   - ✅ Loyalty tracker appears in top-right
   - ✅ Header metrics display

2. **Drag and Drop Testing**
   - Select any task card
   - ✅ Verify drag cursor changes
   - ✅ Drag to different column
   - ✅ Confirm card moves successfully
   - ✅ Check column counts update
   - ✅ Verify notification appears

3. **Add Task Modal Testing**
   - Click "Add Task" button
   - ✅ Modal opens correctly
   - Fill all fields with test data
   - ✅ Submit and verify task appears
   - ✅ Check form resets after submission
   - ✅ Verify loyalty score increases

4. **Loyalty System Testing**
   - Perform various actions
   - ✅ Watch loyalty bar changes
   - ✅ Verify status messages update
   - ✅ Check creepy messages appear periodically
   - Move task to "Done" column
   - ✅ Confirm loyalty bonus

### Test Procedure: Metrics Dashboard
**File:** `/metrics.html`

1. **Dashboard Display**
   - ✅ All 4 metric cards visible
   - ✅ Values display correctly
   - ✅ Status indicators appropriate
   - ✅ Timestamp updates

2. **Dynamic Updates**
   - Wait 30+ seconds
   - ✅ Verify metrics fluctuate slightly
   - ✅ Confirm timestamp updates
   - Refresh page
   - ✅ Check values reset appropriately

3. **Easter Egg Testing**
   - Enter Konami code: ↑↑↓↓←→←→BA
   - ✅ Verify metrics boost to 100
   - ✅ Check console message appears
   - ✅ Confirm alert displays

### Test Procedure: Portal System
**File:** `/portal.html`

1. **Access Testing**
   - Navigate directly (should redirect to login if no session)
   - Login first, then access
   - ✅ Verify proper access control
   - ✅ Check dashboard displays

2. **Portal Features**
   - ✅ Test all dashboard links
   - ✅ Verify portal navigation works
   - ✅ Check session persistence

**Expected Results:**
- All interactive features respond correctly
- Visual feedback immediate and appropriate  
- Data persistence works
- No JavaScript errors during interactions
- Performance remains smooth during interactions

---

## 🕳️ Underground Content Testing

### Test Procedure: Underground Access
**File:** `/underground/index.html`

1. **Access Methods**
   - Direct URL navigation
   - ✅ Verify page loads
   - ✅ Check for access restrictions
   - ✅ Confirm underground theme

2. **Secret Societies Navigation**
   - **Banchos:** `/underground/societies/banchos.html`
   - **Deep Algorithm:** `/underground/societies/deep_algorithm.html`
   - **Fuzzies:** `/underground/societies/fuzzies.html`
   - **Memory Core:** `/underground/societies/memory_core.html`
   - **Phreaks:** `/underground/societies/phreaks.html`

3. **For Each Society Page:**
   - ✅ Content loads correctly
   - ✅ Theme appropriate
   - ✅ Links functional
   - ✅ No broken references

4. **Archive Content Testing**
   - Test product showcase pages
   - ✅ Verify demos function
   - ✅ Check file downloads work
   - ✅ Confirm documentation accessible

**Expected Results:**
- Underground content accessible
- Societies pages load correctly
- Archive content functional
- Appropriate "hidden" theme maintained

---

## 📝 Forms & Compliance Testing

### Test Procedure: Compliance Documentation
**Files:** Various compliance-related pages

1. **Compliance Check Flow**
   - Navigate to `/compliance-check.html`
   - ✅ Form displays correctly
   - ✅ Fill and submit form
   - ✅ Verify progression to next step

2. **EULA Speedrun Testing**
   - Navigate to `/eula-speedrun.html`
   - ✅ Timing mechanism works
   - ✅ Interactive elements respond
   - ✅ Completion tracking functions

3. **Form Validation Comprehensive**
   - Test all form fields for:
     - ✅ Required field validation
     - ✅ Format validation
     - ✅ Error message display
     - ✅ Successful submission handling

**Expected Results:**
- All forms submit successfully
- Validation works correctly
- Progress tracking functional
- No submission errors

---

## 📊 Content Verification Procedures

### Test Procedure: Content Accuracy Audit

1. **Text Content Review**
   - Read through each clearance level
   - ✅ Verify role descriptions accurate
   - ✅ Check for typos/grammatical errors
   - ✅ Confirm links reference correct pages
   - ✅ Validate all instructions clear

2. **Media Content Check**
   - ✅ All images load correctly
   - ✅ Icons display properly  
   - ✅ Animations function smoothly
   - ✅ No missing media files

3. **Link Validation**
   - Click every internal link
   - ✅ Verify destinations correct
   - ✅ Check external links work
   - ✅ Confirm no 404 errors

**Expected Results:**
- All content displays correctly
- No broken links
- Media loads successfully
- Text is accurate and error-free

---

## 🔧 Technical Verification Procedures

### Test Procedure: JavaScript Functionality Audit

1. **Console Monitoring**
   - Keep developer tools open during all tests
   - ✅ Record any JavaScript errors
   - ✅ Note performance warnings
   - ✅ Check for failed resource loads

2. **LocalStorage Testing**
   - Test storage mechanisms:
     - ✅ User session data
     - ✅ Compliance status
     - ✅ Settings persistence
   - Clear storage and retest

3. **Animation Performance**
   - ✅ CSS animations smooth
   - ✅ JavaScript animations responsive
   - ✅ No frame drops or stuttering

### Test Procedure: CSS Styling Verification

1. **Theme Consistency**
   - ✅ Terminal aesthetic maintained
   - ✅ Color schemes appropriate per clearance
   - ✅ Typography consistent
   - ✅ Spacing uniform

2. **Responsive Design Check**
   - Test at various screen sizes
   - ✅ Content adjusts appropriately
   - ✅ No horizontal scrolling issues
   - ✅ Touch targets adequate size

**Expected Results:**
- Smooth performance across all features
- Consistent styling and theming
- No technical errors
- Responsive design works correctly

---

## 📝 Test Execution Tracking

### Daily Testing Log
**Date:** ________________
**Tester:** ________________
**Browser/Version:** ________________

**Tests Completed Today:**
- [ ] Homepage functionality
- [ ] Authentication system
- [ ] Clearance level: ________________
- [ ] Interactive features
- [ ] Forms testing
- [ ] Content verification

**Issues Found:**
1. **Critical:** ________________
2. **Major:** ________________  
3. **Minor:** ________________

**Next Session Focus:**
________________

### Test Coverage Tracking
- [ ] **Homepage (100%)**
- [ ] **Authentication (100%)**
- [ ] **INFRARED clearance (100%)**
- [ ] **RED clearance (100%)**
- [ ] **ORANGE clearance (100%)**
- [ ] **YELLOW clearance (100%)**
- [ ] **GREEN clearance (100%)**
- [ ] **GRAY clearance (100%)**
- [ ] **Interactive features (100%)**
- [ ] **Underground content (100%)**
- [ ] **Forms & compliance (100%)**

---

## ✅ Manual Testing Completion Criteria

### Definition of Done
- [ ] All test procedures executed
- [ ] All issues documented
- [ ] Test coverage 100% for existing features
- [ ] Performance baselines established
- [ ] Documentation complete

### Final Verification
- [ ] No critical blocking issues
- [ ] All user journeys functional
- [ ] Site ready for baseline establishment
- [ ] Issues prioritized for future sprints

**Sprint Zero Success:** All existing functionality verified and cataloged without any new development or fixes.