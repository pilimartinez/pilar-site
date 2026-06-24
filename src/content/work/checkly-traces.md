---
title: Checkly Traces UI
role: Product Engineer
company: Checkly
period: 2022–present (Checkly)
tech:
  - Vue
  - TypeScript
summary: Built the user-facing layer of Checkly's OpenTelemetry distributed-tracing product.
order: 2
links:
  - label: Checkly Traces
    url: https://www.checklyhq.com/docs/traces-open-telemetry/
---

**Problem.** To monitor production you need distributed tracing to see *why* something is slow or broken across services. OpenTelemetry produces that data, but raw spans are unreadable without a good UI.

**What I did.** I built the user-facing layer of Checkly's OpenTelemetry tracing product — the gantt/waterfall timeline, the span-detail view, trace search and filters, mobile views, and the OTel settings surface. (The ingestion backend was owned by other engineers; I owned the UI.)

**Outcome.** Shipped through general availability as part of a paid product; the product grew roughly 2.5x in active accounts in its first seven months.
