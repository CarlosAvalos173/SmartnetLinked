export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Form } from '../..\\components\\Form.vue'
export { default as HomeCarousel } from '../..\\components\\HomeCarousel.vue'
export { default as JobTable } from '../..\\components\\JobTable.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as Newsletter } from '../..\\components\\Newsletter.vue'
export { default as ProductSlider } from '../..\\components\\ProductSlider.vue'
export { default as ScrollTop } from '../..\\components\\ScrollTop.vue'
export { default as Table } from '../..\\components\\Table.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
