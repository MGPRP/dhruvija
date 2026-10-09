# Dhruvija Properties_Website

Can you redo this website design completely  https://dhruvijaproperties.com/ 

And use the format from the video visible in this site - https://dribbble.com/shots/22786757-Cogni-wave-Web-Design-for-Mental-Health-Websites

Content can be taken from the original website. You can elaborate but ensure the info is correct, dont write anything wrong.

The website should be very very cool, young in terms of the interactions and representations. 

The section names should be unique, not like other real estate websites.

The colour themes should be pastel.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dhruvijapropertieswebsite.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9ccef88e-45d4-485d-9471-312a19410012).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

## Image hosting for external deployments

Images ending in `.asset.json` are Lovable Assets pointers, **not image files**. Their `url` fields point to hosted image bytes. The site resolves them through `src/lib/asset-url.ts` against the stable public project address, so images render even when the site itself is deployed on another domain. The other `.jpg` files in `src/assets` are actual local images and are bundled normally.

If you need to host the images independently of Lovable, download the bytes referenced by each pointer's `url` from `https://project--9ccef88e-45d4-485d-9471-312a19410012.lovable.app`, store them in your own hosting, and update `assetUrl` to use your new image host. Renaming a `.asset.json` file to `.jpg` does not convert it into an image. The gallery video is a YouTube embed and is not an image asset.

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
