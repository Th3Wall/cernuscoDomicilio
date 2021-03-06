![Image of Cernusco Domicilio](https://i.postimg.cc/8cJH95Gb/og-cernuscodomicilio.png)

# Cernusco a Domicilio
> If you want to make the same proj for your city, the only thing i ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) for make it yours.
> Thanks!

## How to

1. Change the specific label related to me and my city are inside the `.env` file, if you change that the js will be clean ;)
2. Change the city in the `template.html` file
3. Change the **name** and **short_name** inside `manifest.json`
4. Change the **name** inside `package.json`

## Data source

All the data is fetched from this gist:
https://gist.githubusercontent.com/Th3Wall/a1737863a43420319c0fea4515245430/raw/CernuscoDomicilio.json

When you add your gist remember to delete the last hash because points directly at a specific commit, for example:

```diff
- https://gist.githubusercontent.com/Th3Wall/a1737863a43420319c0fea4515245430/raw/6f8441c176da54336a5297dde144332b89e2afd2/CernuscoDomicilio.json
+ https://gist.githubusercontent.com/Th3Wall/a1737863a43420319c0fea4515245430/raw/CernuscoDomicilio.json
```

## Netlify deploy & configuration

> The site is developed with some specific https://netlify.com apis.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3cb09be5-e116-4f42-a3b3-b95c2402633f/deploy-status)](https://app.netlify.com/sites/cernuscodomicilio/deploys)

### Deploy configuration steps

1. Connect your GitHub account to Netlify
3. Select the project
2. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
3. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**

### Google analytics setup

In **Settings** → Build & Deploy → Post processing → Snippet injection: you can add here your GAnalytics snippet


## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).