---
title: "From intuition to instrumentation: building resource discipline at Amazon Robotics"
number: 4
published: true
tags: ["Workforce planning", "Measurement design", "Portfolio governance"]
problem: "A mandate to measure, with the infrastructure still to be built."
seoTitle: "Case Study: Resource Discipline at Amazon Robotics"
seoDescription: "Workforce planning, a resource allocation system, and a prioritization mechanism that moved decisions from intuition to data."
honestCaveat: "Two design choices here I would defend anywhere. First, resist the single composite score when the things you are comparing are genuinely dissimilar. False precision corrodes trust faster than admitted judgment does. Second, instrument the honesty of your data. Every measurement system decays the moment people learn to feed it what it wants to hear. Building the decay detector in from day one is far cheaper than discovering the decay in a budget review."
---

Most organizations measure their work. Very few measure whether their measurement system is being used honestly. Over three years at Amazon Robotics, that second question turned out to be the one that mattered.

### The situation

Amazon Robotics was capital intensive, scaling fast, and held to a corporate mandate of at least 10 percent year over year labor efficiency. The analytical infrastructure underneath that mandate did not exist. Each delivery vertical planned its workforce differently. Gearing ratios lived on planning documents but could not be measured against real allocations. There was no shared source of truth on who was working on what, and resource conversations consumed enormous time without producing trust in the numbers.

### What I did

The work unfolded in three movements.

First, the model. I built the organization's first workforce planning model from scratch, for a team of 450 people across two continents and more than 25 job families with very different demand shapes. The hard problem was not the spreadsheet; it was the measurement design. How do you compare labor efficiency across functions when one has seasonal peaks and another runs flat, when one hires employees and another runs on contractors or automation? I treated automation as a third sourcing lever alongside hiring and contracting, a framing I call build, borrow, bot, and designed a composite efficiency metric that held across all of them. The model delivered 30 percent labor efficiency against the 10 percent requirement and won full budget approval in two review rounds, where major proposals typically took three or four. It then scaled to six organizations and 1,200 people, and later to a growing managed service provider organization, with full budget approval at every stage.

Second, the system. As the model scaled, the gap became structural: there was no consistent way to track allocation and no way to verify that gearing ratios were honored in the field. I sponsored Falcon, a centralized resource allocation system built from scratch. It made gearing ratios a live, governed metric. It reconciled planned versus actual allocations against the human resources database to within 1 percent. And, most unusually, it measured the integrity of the measurement itself, with data quality indexes that flagged copy-paste allocations week over week, missing entries, and managers who had quietly stopped logging in. I drove the design through user research across information technology, finance, and five delivery verticals, then handed implementation to a technical program manager I had developed and promoted. Falcon shipped in seven months, reached full adoption among trained users, and cut the time spent on resource alignment in annual planning by half.

Third, the mechanism. Visibility is not decision making. The organization had 45 funded programs and 29 more competing for scarce resources, with no forum to re-prioritize as the business shifted. No single metric can honestly compare a safety initiative to a new technology to an infrastructure upgrade, and forcing one would have made prioritization worse. So I designed a monthly prioritization meeting around a framework instead: effort versus impact, return on investment, customer priority, and portfolio category, presented as inputs to a leadership decision rather than collapsed into a false single number. Falcon's allocation data closed the loop, showing whether the priority changes leadership made actually moved resources in the field.

### What happened

Resource decisions moved from intuition and argument to data and measurement. The model, the system, and the mechanism each earned adoption on its own merits, and together they gave the organization something it had never had: numbers leaders trusted enough to stop debating and start deciding with.
