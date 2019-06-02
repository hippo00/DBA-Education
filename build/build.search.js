'use strict'

const fs = require('fs')
const path = require('path')

//const removeMd = require('remove-markdown');
const removeMd = require('remove-markdown-and-html');

const pagesConfig = require('../src/pageConfig')
const pages = pagesConfig.pages;

const countWords = (text) => {
  // // exclude start and end white-space
  // text = text.replace(/(^\s*)|(\s*$)/gi, '')
  // // 2 or more space to 1
  // text = text.replace(/[ ]{2,}/gi, ' ')
  // // exclude newline with a start spacing
  // text = text.replace(/\n /, '\n')
  // return text.split(' ').filter((str) => { 
  //   return str !== '' }
  // ).length || 0
  return 0
}

const getContent = (page, parent) => {
  return new Promise((resolve, reject) => {
    let content = {
      name: page.name,
      description: page.description,
      owner: page.owner,
      path: (parent) ? `${parent}${page.route}` : page.route,
      text: '',
      wordCount: 0,
      topics: page.topics
    }
    if (page.markdown) {
      let mdPath = path.join(__dirname, '../public', page.markdown);
      fs.readFile(mdPath, 'utf8', (err, data) => {
        if (data) {
          let text = removeMd(data);
          content.text = text;
          content.wordCount = countWords(text);
        } else {
          console.log(`Empty or no markdown file for ${mdPath}`)
          content.text = '';
          content.wordCount = 0;
        }
        content.type = 'Content';
        return resolve(content);
      });
    } else {
      if (page.children) {
        content.type = 'TOC';
      }
      return resolve(content);
    }
  })
}

const traversTree = (pages, parent) => {
  let PAGES = []

  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < pages.length; i++) {
      let page = pages[i]

      // concatenate all the contents together
      let content = await getContent(page, parent)
      if (content != null && content.text != null && content.text.length !== 0) PAGES.push(content);
      if (page.children) {
        let CHILD_PAGES = await traversTree(page.children, content.path)
        if (CHILD_PAGES && Array.isArray(CHILD_PAGES)) {
          PAGES = PAGES.concat(CHILD_PAGES)
        }
      }
    }
    return resolve(PAGES);
  })
}

const assetsRoot = path.resolve(__dirname, '../public');

traversTree(pages)
  .then((PAGE_CONTENTS) => {
    fs.writeFile (
      path.join(assetsRoot, '/content.json'), 
      JSON.stringify(PAGE_CONTENTS),
      (err) => {
        if (err) throw err;
        console.log('complete');
      }
    );
  })
  .catch((error) => {
    console.log('error', error);
  });
