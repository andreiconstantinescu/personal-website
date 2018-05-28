// next.config.js
const fs = require('fs')
const generateReadme = require('./readme.js')

const getCorrectPage = currentPage =>
  currentPage === 'home' ? '/' : `/${currentPage}`
const getCorrectUrl = currentRepo =>
  currentRepo === 'andreiconstantinescu.github.io' ? '' : currentRepo

exports.exportPathMap = () => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  fs.writeFileSync(
    `./out/${process.env.CURRENT_PAGE}/Readme.md`,
    generateReadme({
      repo: process.env.CURRENT_REPO,
      deployUrl: `https://constantinescu.io/${getCorrectUrl(
        process.env.CURRENT_REPO
      )}`,
    })
  )

  return {
    '/': {
      page: getCorrectPage(process.env.CURRENT_PAGE),
    },
  }
}
