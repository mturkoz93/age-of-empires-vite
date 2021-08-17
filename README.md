# Age of Empires

## 1. Install Vite

```
npm init vite@latest age-of-empires --template vue-ts
```

OR

```
npm init vite@latest . --template vue-ts
```

```
cd age-of-empires
npm install
npm run dev
```

## 2. Eslint

```
# npm
npm i -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

```

```
npm i -D husky lint-staged
```

## 3. Prettier

```
npm i -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```

## 4. StyleLint

```
npm i -D stylelint stylelint-config-recommended stylelint-config-standard
```

## 5. Sass

```
npm install -D sass
```

## 6. Tailwindcss

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```
npx tailwindcss init -p
```

Create the ./src/index.css file

```
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, ensure your CSS file is being imported in your ./src/main.js file:

```
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

## 7. vue-router

```
npm install vue-router@4
```

## Sources

- https://miyauchi.dev/posts/vite-vue3-typescript/
- https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/
- https://tailwindcss.com/docs/guides/vue-3-vite
- https://vitejs.dev/guide/features.html#css-pre-processors
