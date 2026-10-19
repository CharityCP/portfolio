# My Portfolio

A React site that shows the projects I built in Level 2.

The portfolio will use the visual style of Synth Nova Chronicles and give visitors a way to explore my developement work.


## Components

| Component | What it shows | Where its values come from | What it remembers | What it receives |
| --- | --- | --- | --- | --- |

| `Name` | my name | text inside the component |
| `JobTitle` | my professional title | text inside the component |
| `AboutMe` | information about me and my work | text inside the component |
| `Education` | my education and certifications | text inside the component |
| `Skills` | my professional and development skills | an array inside the component |
| `Contact` | my contact information | an email variable inside the component |
| `Quote` | my personal quote | text inside the component |
| `Footer` | copyright and the current year | `new Date().getFullYear()` |
| ProjectCard | One project's name, description, details, and links | projects.js through App | Its likes and whether details are shown | project |
| PhotoControls | The hero image control buttons | Hero | None | onNext, onPrevious, onColor, onBlackAndWhite |

## What I'm adding next

- Project cards for my level 2 work Ask Synth Nova, and Click-Lab quiz

- Links to view each project

- A consistent Synth Nova-inspired design

## Built with

React, Vite, Bun, and Pico CSS.

## React State — What It Remembers

| Feature | State Variable | What It Remembers |
|---------|----------------|-------------------|
| Like Buttons | likes | Number of likes for each project |
| Show More / Less | showMore | Whether project details are visible |
| Hero Gallery | currentImage | Which image is displayed |
| Black & White Filter | isBlackAndWhite | Whether grayscale is active |
| Sepia Filter | isSepia | Whether sepia is active |
| Blur Controls | blurAmount | Current image blur level |
| Fortune Generator | fortuneIndex | Position of the displayed fortune |

## React Events and State Updates

| Feature | Event | What Happens |
|---------|-------|--------------|
| Like Buttons | onClick | Increases the selected project's like count |
| Show More / Less | onClick | Toggles project details |
| Hero Gallery | onClick | Moves to the next or previous image |
| Black & White | onClick | Toggles grayscale |
| Sepia | onClick | Toggles the sepia effect |
| Blur Controls | onClick | Increases or decreases blur |
| Reset Filters | onClick | Restores the image's original appearance |
| Fortune Generator | onClick | Displays the next fortune |
