import Vue from "vue";

import GlobalMixins from "~/utils/mixins/global"
import * as filters from './filters.js'

Vue.mixin(GlobalMixins)

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
