import pageConfig from '../pageConfig.json'
import axios from 'axios'

const SLACKURL = 'https://hooks.slack.com/services/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'

const DefaultPageRenderer = () => import('@/views/DefaultPageRenderer')
var metaMap = {}

/**
 * processElement - recursively walk through a given node and enrich it with some additional
 * properties (to bring vue-tree-navigation and VueRouter in sync)
 */
function processElement (node, parent) {
  // add fully qualified path and reference to component
  node.path = node.route
  if (!parent) node.breadCrumb = []
  else node.breadCrumb = JSON.parse(JSON.stringify(parent.breadCrumb))
  let parentPath = (parent != null) ? (parent.path + node.route) : '/'

  node.breadCrumb.push({
    name: node.name,
    path: parentPath
  })

  node.component = DefaultPageRenderer
  if (parent != null) node.path = parent.path + node.route

  // process all childs and extracts the tiles (the next level of childs)
  let tiles = []
  if (node.children) {
    for (var i in node.children) {
      let child = node.children[i]
      tiles.push(
        {
          name: child.name,
          description: child.description,
          path: node.path + child.route,
          icon: child.icon,
          iconn: child.iconn,
          bgColor: child.bgColor,
          owner: child.owner,
          topics: child.topics
        }
      )
      processElement(child, node)
    }
  }

  // construct meta object we give to DefaultPageRenderer as part of the current route
  node.meta = {
    tiles: (tiles.length > 0) ? tiles : null,
    name: node.name,
    description: node.description,
    markdown: node.markdown,
    icon: node.icon,
    iconn:node.iconn,
    bgColor: node.bgColor,
    owner: node.owner,
    topics: node.topics,
    breadCrumb: node.breadCrumb
  }

  // store the meta data in our metaMap
  metaMap[node.path] = node.meta
}

/**
 * generateRoutingConfig - generates the routing for VueRouter out of the pageConfig.pages
 */
function generateRoutingConfig (baseConfig) {
  let pages = JSON.parse(JSON.stringify(baseConfig.pages))

  for (let i in pages) {
    let element = pages[i]
    processElement(element, null)
  }

  // configure the default landing page
  pages.push(
    {
      path: '/',
      redirect: baseConfig.landingPage
    }
  )
  return pages
}

export default {
  /**
   * getMetaById - gets the page metadata by a given id
   */
  getMetaById: function (route) {
    return metaMap[route]
  },

  traverse: function (o) {
    if (o.name) {
      o.title = o.name
      delete o.name
    }

    if (Array.isArray(o.children)) {
      for (let i = 0; i < o.children.length; i++) {
        this.traverse(o.children[i])
      }
    }
  },

  /**
   * generates the routing config based on the tree
   */
  getRoutingConfig: function () {
    let routingConfig = generateRoutingConfig(this.getBaseConfig())
    // add more components

    this.traverse(routingConfig[0])

    return routingConfig
  },

  getContent: function (page, parent) {
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
        return resolve(content)
      } else {
        if (page.children) {
          content.type = 'TOC'
        }
        
        return resolve(content)
      }
    })
  },

  /**
   * getBaseConfig - returns the full json from pageConfig.json
   */
  getBaseConfig: function () {
    return pageConfig
  },

  /**
   * getPages - returns the pages section from base config (for vue-tree-navigation)
   */
  getPages: function () {
    return this.getBaseConfig().pages
  },

  /**
   * getStatus
   */
  getStatus: () => {
    return new Promise((resolve, reject) => {
      const path = `./content.json`

      axios.get(path)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },

  /**
   * sendSlackMessage - send a slack message to "DBA-Education-anonymous"
   */
  sendSlackMessage: function (path, message) {
    let actualPath = 'https://pages.github.ibm.com/hippo00.github.io/DBA-Education' + path
    // let actualMessage = '<!channel> Comment on ' + actualPath + ' : ' + message
    let actualMessage = actualPath + ' : ' + message

    const options = {
      text: actualMessage
    }
    // console.log('message to slack: ', options)
    axios.post(SLACKURL, JSON.stringify(options))
      .then((response) => {
        // console.log('SUCCEEDED: Sent slack webhook: \n', response.data)
      })
      .catch((error) => {
        console.error('FAILED: Send slack webhook', error)
      })
  }
}
