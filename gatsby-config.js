module.exports = {
  siteMetadata: {
    title: `Follow That Fear`,
    description: `Follow that Fear Podcast is a podcast dedicated to empowering you follow that fear, take action before you're ready, pursue what your heart is calling you to do, and build confidence one step at a time. Hosted by Cat Del Carmen.`,
    author: `CAT DEL CARMEN`,
    twitter: ``,
    instagram: `https://www.instagram.com/followthatfear/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1491259190?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2NhdGRlbGNhcm1lbi9mZWVkLnhtbA==`,
    pocket: `https://pca.st/itunes/1491259190`,
    spotify: `https://open.spotify.com/show/4tRH2hj6nsJlyvD8AvESL0`,
    overcast: `https://overcast.fm/itunes1491259190`,
    castbox: `https://castbox.fm/vic/1491259190`,
    castro: `https://castro.fm/itunes/1491259190`,
    podbean: `https://catdelcarmen.podbean.com/`,
    beaker: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://feed.podbean.com/catdelcarmen/feed.xml`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
