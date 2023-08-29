# ZustandRenderLab
React Typescript with Next.js lab, to show common use of Zustand and render effects with fetching data from API.

## How to run this repository

Visit the [rubenmora.com/apps/zustand-render-lab](https://rubenmora.com/apps/zustand-render-lab) website to see an example in action.

Clone this repository:

```bash 
git clone https://github.com/RubenMoraVargas/ZustandRenderLab.git
```

and run next command to install all dependencies.

```bash
npm run install 
```

Then run the next command to start the development server.

```bash
npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to build the project, run `npm run build`.
```bash
npm run build 
```
 

## Little explanation of code
This code is a simple Next.js 13 application, and this repository is a lab to show the real use of zustand as store admin and make different actions and fetching data from external API. 

This code uses app directory to put the pages and the components directory to put the principal components.
The store directory is the zustand store, and the utils directory is the place to put the common functions and utilities.
 
The app has a state with title, count and posts data. Also have actions to change the title, increase and decrease the count and fetch the posts data from external API.

## Technologies used
- Next.js 13
- React.js 18
- Typescript
- Tailwind CSS
- Zustand
- Eslint
- Prettier 
- React Icons

## More information in the blog rubenmora.com/blog
[Article to discuss the advantage to use Zustand as store admin  in React](https://rubenmora.com/blog/zustand-render-lab)