# Brooksfolio

_Personal Blog and Portfolio built from the Sanity.io Gridsome blog template, styled with Tailwindcss._

This site is used for my own personal blog and portfolio that I have extended from the Sanity.io Gridsome blog template, not only to get experience with Sanity, but also to extend my knowledge of working with Gridsome, TailwindCSS, and to have a place for me to post my personal projects that I work on as well as any blog posts that I write.

This site also implements [mailgo](https://mailgo.dev/) which is open source module that transforms mailto and tel links to utilize a modal popup with links to open gmail, outlook, or a users default email service instead of the standard link to mail or phone services.

Also feel free to fork this repo if you like my design as a base but do make it your own!

[Live Url](https://zacharybrooks.dev/)

## What the site has

- A fast by default blog and Portfolio with [Gridsome](https://gridsome.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8080](http://localhost:8080)
4. `npm run build` to build to production locally

## Enable real-time content preview on development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/) and create a token with read rights.
2. Rename `.env.development.template` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to turn off preview you can set `watchMode: false` in gridsome-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gridsome-config.js.

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

This starter comes with a Netlify-widget that lets you trigger new deploys from Sanity Studio.

## Stuck? Get help

If you want to know more about Sanity or get help directly from the Sanity development team and community check out the links below.

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
