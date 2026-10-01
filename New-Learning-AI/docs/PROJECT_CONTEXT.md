# AI Developer Assistant - Project Context

## Purpose

This document is the reusable context package for the AI Developer Assistant
learning project. Use it to orient contributors and AI coding assistants before
starting a task.

## Project Goal

Build an AI-powered developer assistant while developing practical skills in:

- Python
- APIs
- Large language models (LLMs)
- Context engineering
- AI-native engineering workflows
- Testing and evaluation
- Software engineering fundamentals

The project should grow through small, testable increments. Learning and clear
reasoning are as important as the final implementation.

## Current State

As of September 21, 2026:

- The repository contains the initial README and learning journal.
- `src/`, `tests/`, `experiments/`, and `docs/` have no implementation content
  yet, apart from this context document.
- No Python package, dependency manifest, application entry point, or automated
  test suite has been created.
- The first recorded exercise is a small personalized greeting program.
- Requirements clarification and edge-case analysis were practiced before
  implementation.

Do not describe proposed features as implemented unless the repository confirms
that they exist.

## Intended Users

- The learner building the project
- Contributors reviewing or extending an exercise
- AI assistants helping with planning, implementation, testing, and reflection

## Working Principles

1. Clarify behavior and acceptance criteria before writing code.
2. Build the smallest useful increment first.
3. Keep application logic separate from input/output when practical.
4. Add focused tests for normal behavior and meaningful edge cases.
5. Verify generated code instead of accepting it without review.
6. Record lessons, problems, and unresolved questions in `journal.md`.
7. Prefer simple Python and standard-library tools until a dependency provides
   clear value.
8. Never commit secrets, API keys, tokens, or personal credentials.

## Proposed Repository Layout

```text
New-Learning-AI/
|-- README.md              # Project overview and setup instructions
|-- journal.md             # Learning reflections and decisions
|-- docs/                  # Context, design notes, and decisions
|-- experiments/           # Small disposable learning experiments
|-- src/                   # Maintained application code
`-- tests/                 # Automated tests for maintained code
```

This is an organizational direction, not evidence that each area is already
implemented.

## Proposed Product Direction

The long-term product is a developer assistant that can receive a development
question or task, gather relevant context, call an LLM through an API, and
return a useful response. Its exact interface and feature set are not yet
decided.

Likely capabilities to explore incrementally include:

- Command-line interaction
- Prompt construction from explicit user and project context
- LLM API integration
- Structured responses and error handling
- Conversation or task history
- Tests with mocked API responses
- Evaluation of response quality, reliability, latency, and cost

These are candidates for future work, not current requirements.

## Engineering Boundaries

- **Language:** Python
- **Initial interface:** Prefer a command-line interface unless a milestone
  establishes another interface.
- **Dependencies:** Keep them minimal and document why each is needed.
- **Configuration:** Read secrets from environment variables; provide safe
  examples without real credentials.
- **Testing:** Keep deterministic logic testable without network access. Mock
  external APIs in automated tests.
- **Error handling:** Give users actionable messages for invalid input, missing
  configuration, network failures, and provider errors.
- **Privacy:** Do not send repository content or personal data to an external
  model unless the user intentionally includes it.

## Suggested Milestones

### 1. Engineering Foundations

- Define requirements and edge cases for a small Python program.
- Implement a simple command-line exercise.
- Separate logic from input/output where useful.
- Add focused automated tests.
- Document what was learned.

### 2. API Foundations

- Learn HTTP requests, JSON, status codes, timeouts, and error handling.
- Integrate a safe public API before introducing an LLM provider.
- Test success and failure paths without relying on live network calls.

### 3. First LLM Integration

- Select a provider and document setup.
- Load the API key from an environment variable.
- Send a minimal request and parse the response.
- Handle authentication, rate-limit, timeout, and malformed-response errors.

### 4. Context Engineering

- Define what context the assistant needs for a task.
- Keep instructions, user requests, and repository context distinct.
- Limit irrelevant context and make assumptions explicit.
- Test prompt behavior with representative examples.

### 5. Developer Assistant Workflow

- Choose one narrow workflow, such as explaining a Python error.
- Define inputs, outputs, unsupported cases, and success criteria.
- Implement the workflow end to end.
- Add regression tests and usage documentation.

### 6. Evaluation and Hardening

- Create a small evaluation dataset.
- Measure correctness, usefulness, reliability, latency, and cost.
- Add logging that excludes secrets and sensitive user content.
- Document known limitations and future improvements.

## Definition of Done for Each Increment

An increment is complete when:

- Its behavior and scope are written down.
- Important edge cases are identified.
- The implementation is small and understandable.
- Relevant automated tests pass.
- Manual behavior is verified when applicable.
- Setup or usage documentation is updated.
- The learning journal records the outcome and unresolved questions.

## Open Decisions

The following choices should be made only when a milestone requires them:

- Python version and packaging approach
- Dependency and virtual-environment tooling
- CLI framework, if the standard library becomes insufficient
- LLM provider and model
- Supported developer-assistant workflow
- Context size and retention policy
- Evaluation criteria and scoring method
- Persistence mechanism, if conversation history is needed

Record significant decisions in `docs/` with the reason and alternatives
considered.

## Context Request Template

Before asking an AI assistant to implement a task, provide:

```text
Goal:
Current behavior:
Desired behavior:
Inputs and outputs:
Constraints:
Known edge cases:
Files likely involved:
How to verify the result:
Out of scope:
```

If any field is unknown and affects implementation, clarify it first.

## Starter Prompt for an AI Assistant

```text
Read README.md, journal.md, and docs/PROJECT_CONTEXT.md before making changes.
Work on one small, testable increment at a time. First restate the task's
behavior, constraints, edge cases, and acceptance criteria. Distinguish current
repository facts from proposed features. Keep Python code simple, isolate
external APIs, avoid secrets, add focused tests, run the relevant checks, and
update documentation or journal.md when the learning outcome changes.
```

## Immediate Next Step

Choose the next Engineering Foundations exercise and write its requirements,
edge cases, and acceptance criteria before creating implementation files.
