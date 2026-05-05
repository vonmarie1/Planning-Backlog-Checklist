# CI/CD Pipeline Diagram

## Flow

Push to main
   ↓
GitHub Actions Triggered
   ↓
Run Smoke Test
   ↓
Deployment Verified

## Explanation
When code is pushed to the main branch, GitHub Actions automatically runs a smoke test to verify that the deployed system is accessible.