# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Deployment](#deployment)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position.
  - PS: I've implemented filtration through more intuitive means, rather than the typical "Filter Panel".
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links


- Solution URL: [Source Code](https://github.com/aalekhpatel07/devjobs-svelte)
- Live Site URL: [https://devjobs.aalekhpatel.com](https://devjobs.aalekhpatel.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/) : Our beloved frontend compiler.
- [Typescript](https://www.typescriptlang.org/) : Ain't no fun without Types.
- [TailwindCSS](https://tailwindcss.com/) : Styling for cool kids.
- [MeiliSearch](https://www.meilisearch.com) : A lightning-fast search solution that powers the Job Search tool.

### Deployment

- [Nginx](https://www.nginx.com) : Static file web server and a reverse proxy for the search API.
- [Docker](https://www.docker.com) : Hosts the MeiliSearch engine and allows nginx to proxy search requests.
- [Raspberry Pi](https://www.raspberrypi.org) : The machine that hosts nginx.
- [Let's Encrypt](https://letsencrypt.org): No security without good ol' certificates.
- [Google Domains](https://domains.google.com): My domain provider.

### Continued development

- I'd like to setup some formal backend API (which I'm just too lazy working on) and add some data sources to replace the dummy data with actual live data.
- PS: If you have time to write some scrapers for, say, Indeed, etc., I'd love to get it integrated into the project.
- There needs to be some data redundancy type setup (along with a CRUD api for jobs) so that data can be persisted in well structured databases but searched through indexes like those of Meilisearch's.
- Most of the backend/database work is pending and is fair game for the next phases of this project.

## Author

- Website - [Aalekh Patel](https://www.aalekhpatel.com)
- Frontend Mentor - [@infinity79998](https://www.frontendmentor.io/profile/infinity79998)
- Twitter - [@AalekhPatel4](https://www.twitter.com/AalekhPatel4)
- Github - [@aalekhpatel07](https://www.github.com/aalekhpatel07)
