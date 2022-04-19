import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0aca8167 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _93a8460c = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _1830de90 = () => interopDefault(import('..\\pages\\plantilla.vue' /* webpackChunkName: "pages/plantilla" */))
const _89597bba = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _5f8243a8 = () => interopDefault(import('..\\pages\\prueba.vue' /* webpackChunkName: "pages/prueba" */))
const _f4d065d6 = () => interopDefault(import('..\\pages\\cart\\confirm.vue' /* webpackChunkName: "pages/cart/confirm" */))
const _0601714b = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _638d05c7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _0aca8167,
    name: "cart"
  }, {
    path: "/home",
    component: _93a8460c,
    name: "home"
  }, {
    path: "/plantilla",
    component: _1830de90,
    name: "plantilla"
  }, {
    path: "/products",
    component: _89597bba,
    name: "products"
  }, {
    path: "/prueba",
    component: _5f8243a8,
    name: "prueba"
  }, {
    path: "/cart/confirm",
    component: _f4d065d6,
    name: "cart-confirm"
  }, {
    path: "/products/:id",
    component: _0601714b,
    name: "products-id"
  }, {
    path: "/",
    component: _638d05c7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
