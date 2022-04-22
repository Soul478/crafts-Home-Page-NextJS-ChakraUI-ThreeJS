module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/works': { page: '/works' },
          '/p/hello-nextjs': { page: '/spiritech', query: { title: 'hello-nextjs' } },
          '/p/learn-nextjs': { page: '/spiritech', query: { title: 'learn-nextjs' } },
          '/p/deploy-nextjs': { page: '/spiritech', query: { title: 'deploy-nextjs' } },
      '/p/hello-nextjs': { page: '/posts', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/posts', query: { title: 'learn-nextjs' } },
      '/p/deploy-nextjs': { page: '/posts', query: { title: 'deploy-nextjs' } },
        }
      },
    }