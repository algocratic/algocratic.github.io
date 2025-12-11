# Branch Protection Rules - THE ALGORITHM Compliance

## CRITICAL: Main Branch Currently Unprotected

**Status**: BLOCKED - Main branch has NO protection rules (HTTP 404 confirmed)

## Required Branch Protection Configuration

### Main Branch Protection Rules
The following rules MUST be applied to the `main` branch according to THE ALGORITHM:

#### Required Status Checks
```json
{
  "required_status_checks": {
    "strict": true,
    "checks": []
  }
}
```

#### Required Pull Request Reviews
```json
{
  "required_pull_request_reviews": {
    "required_approving_review_count": 2,
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "require_last_push_approval": true,
    "bypass_pull_request_allowances": {
      "users": [],
      "teams": [],
      "apps": []
    }
  }
}
```

#### Additional Protection Settings
```json
{
  "enforce_admins": true,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "restrict_pushes": {
    "users": [],
    "teams": [],
    "apps": []
  }
}
```

## Implementation Commands

### Using GitHub CLI (Recommended)
```bash
# Enable branch protection with required reviews
gh api repos/algocratic/algocratic.github.io/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"checks":[]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":2,"dismiss_stale_reviews":true,"require_last_push_approval":true}' \
  --field restrictions=null \
  --field allow_force_pushes=false \
  --field allow_deletions=false
```

### Using GitHub Web Interface
1. Navigate to Settings → Branches
2. Add rule for `main` branch
3. Enable "Require pull request reviews before merging"
4. Set "Required approving reviews" to 2
5. Enable "Dismiss stale pull request approvals when new commits are pushed"
6. Enable "Require review from code owners" (when CODEOWNERS file exists)
7. Enable "Restrict pushes that create files"
8. Enable "Do not allow bypassing the above settings"

## Sprint Zero Specific Rules

During Sprint Zero, additional temporary restrictions should be considered:

### Temporary Sprint Zero Protection
- **Require specific labels**: `sprint-zero`, `catalog`, `verification`
- **Require milestone assignment**: Sprint Zero milestone
- **Require specific PR template**: sprint-zero.md template usage

## Code Owners Configuration

Create `.github/CODEOWNERS` file with:
```
# Global owners
* @architect-owner

# Documentation
*.md @test-engineer @architect-owner

# HTML files (Sprint Zero: no modifications allowed)
*.html @architect-owner @pm-lead

# GitHub configuration
.github/ @architect-owner
```

## Compliance Verification Commands

After implementing protection rules:
```bash
# Verify protection is active
gh api repos/algocratic/algocratic.github.io/branches/main/protection

# Test protection (should fail)
git push origin main --force

# Verify required reviews
gh pr create --title "Test" --body "Test"
```

## Algorithm Reference
- GitHub Branch Protection Standard v2.1
- Repository Security Protocol Section 3.2
- Pull Request Review Requirements Section 4.1

---
**CRITICAL WARNING**: Until these protection rules are implemented, the repository remains in violation of THE ALGORITHM security standards.