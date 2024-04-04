import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    starlight({
      title: 'MathStock',
      social: {
        github: 'https://github.com/kage1020',
        'x.com': 'https://x.com/kage1020',
      },
      defaultLocale: 'ja',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/kage1020/MathStock/edit/main/',
      },
      sidebar: [
        {
          label: '過去問',
          items: [
            {
              label: '東京大学',
              collapsed: true,
              autogenerate: { directory: 'past-exams/u-tokyo' },
            },
            {
              label: '京都大学',
              collapsed: true,
              autogenerate: { directory: 'past-exams/kyoto-u' },
            },
            {
              label: '東京科学大学(東京工業大学)',
              collapsed: true,
              autogenerate: { directory: 'past-exams/titech' },
            },
          ],
        },
      ],
      customCss: ['./src/styles/globals.css'],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
            integrity:
              'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
            crossorigin: 'anonymous',
          },
        },
      ],
    }),
  ],
})
