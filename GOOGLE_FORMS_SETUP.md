# Genμ 2026 Google Forms setup

Create one Google Form for each track, then paste the three public form URLs into `submission-forms.js`. All form buttons across the website will activate automatically.

## Required fields in all three forms

1. Team name
2. Primary contact name and email
3. Institution / affiliation
4. Team members
5. Exact model name and upstream checkpoint URL
6. Short method title and summary
7. **Google Drive link to final weights/checkpoint** (required; organizer access enabled)
8. **GitHub repository URL** containing complete code (required)
9. Git commit hash or release tag
10. Path/link to README section with complete testing instructions
11. Environment file (`requirements.txt`, `environment.yml`, Dockerfile, etc.)
12. Exact command(s) used to run inference/evaluation
13. Hardware and approximate runtime requirements
14. Expected output directory and file format
15. Validation results and logs
16. License/dependency declaration
17. Confirmation that all links will remain accessible through 25 July 2026
18. Declaration that the submission can be evaluated by the organizers

## Face Track additional fields

- Face Set 1 and Face Set 2 results
- CelebA / FFHQ preprocessing details
- Identity-conditioning interface
- Number of images generated per prompt/identity
- ArcFace evaluation notes

## Speech Track additional fields

- Speech Set 1 and Speech Set 2 results
- Sample rate and audio format
- Speaker-conditioning/reference-audio interface
- Text prompts used for generation
- Speaker verification, WER, and prosody evaluation notes

## Concept Track additional fields

- Base diffusion model and version
- Concepts/categories addressed
- Checkpoint format and loading procedure
- ERR component scores and evaluation logs

## Recommended Google Form settings

- Collect email addresses
- Allow response editing
- Do not require a Google account unless necessary
- Add a confirmation message containing the submission deadline: **10 July 2026**
- Export responses to a Google Sheet used by the organizers to update `leaderboard.html`
