# Frontend Mentor - REST Countries API with color theme switcher

## What is this?

This is a single page React application making use of the [REST Countries API](https://restcountries.eu) to display data about all of the countries of the world. The design is provided by [Frontend Mentor](https://www.frontendmentor.io), however I did not have access to the Figma design files at the time of developing this. Instead, I viewed the design images provided and attempted to replicate it by eye.

I developed this desktop-first, but it is fully responsive for tablet and mobile devices. I made use of React Router for routing between pages. My React components are class based in this project as I wanted to demonstrate my understanding of class based components and life-cycle methods. 

I chose this project as I wanted to test my React knowledge so far, and make use of React Router which I had not used in a project before. I chose not to implement the color theme switcher as I wanted to focus more on the core functionality of the project using the API.

I tested the application in Chrome, Safari Firefox and Edge, as well as Chrome for Android and iOS Safari.

## What have I learnt?

I came accross several issues as I was developing this which I had to solve. It has helped my understanding of the basics of React Router and more specifically how to re-render a component when the URL changes whilst already within that route.

On a couple of occaisions I was a little stuck but with the help of google, I was able to find solutions, or ideas that led to me finding a solution myself, to my problems. An example of this is where I was struggling to understand why a CSS grid area was not expanding it's height to fit the content despite declaring it to size to "max-content". After checking MDN, I realised that "max-content" will size a grid area to be the height of the largest element within itself, leading me to then realise that I had declared a specific height for one of the element and so the grid area was defaulting to this height. Upon removing the explicit height, the grid area finally behaved as intended.

I used BEM notation in my CSS, but in hindsight I felt this was unnecessary, as each React component has its' own CSS file and React convention would suggest naming classes after each component instead. In future I would chose to adopt this approach in my React projects.

When testing different browsers, I discovered that Safari and iOS Safari do not supoport lookbehinds in regular expressions, so I opted for a simpler solution for formatting population numbers.

## Future improvements?

I feel like in the real world this application would not necessarily use the right approach in terms of performance. The project brief instructed me to show all countries on the homepage, however that means loading around 250 different components each with a flag image. I chose instead to only show the first 20 results on the homepage unless you search by continent. An improvement to this would be to implement pagination to allow the user to navigate through all 250 countries a few at a time.

It seems that all 250 flag images are downloaded upon loading the page despite only displaying the first 20 results, which can be an issue using a slow 3G connection. Website performance is something I would like to look at soon to discover ways of improving this.

See below for project brief from Frontend Mentor...

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

**To do this challenge, you need a good understanding of JavaScript.**

## The challenge

Your challenge is to integrate with the [REST Countries API](https://restcountries.eu) to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. 

In this challenge, you will find mobile and desktop designs in light and dark mode color schemes for both pages.

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. This should help train your eye to perceive differences in spacings and sizes.

If you would like the Sketch file in order to inspect the design in more detail you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.eu) and you can use an icon font library for the icons.

There is a `style-guide.md` file, which contains the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but we recommend using [Vercel](https://bit.ly/fem-vercel). We've got more information about deploying your project with Vercel below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes that you could create to make reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

## Sharing your solution

There are multiple places you can share your solution:

1. Submit it on the platform so that other users will see your solution on the site. Here's our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) to help you do that.
2. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack).
3. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor** including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.

## Giving feedback

Feedback is always welcome, so if you have any to give on this challenge please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
