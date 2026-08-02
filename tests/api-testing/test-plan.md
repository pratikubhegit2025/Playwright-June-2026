# API Testing Plan

## Application Overview

Create an API testing folder and a Playwright request-based test for the target application.

## Test Scenarios

### 1. api-testing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify target application responds successfully over HTTP

**File:** `tests/api-testing/api.spec.ts`

**Steps:**
  1. Use Playwright request API to GET the target application URL
    - expect: The response status is 200
    - expect: The response body contains the application title
