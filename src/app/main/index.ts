import type { Plugin, App } from 'vue'
import {
  Router,
  routerKey,
  routeLocationKey,
  routerViewLocationKey,
  RouteLocationNormalizedLoaded,
  START_LOCATION,
  RouteLocationNormalized
} from 'vue-router'
import { createPinia } from 'pinia'
import { ApiOptions } from '@/shared/api/base'
import { usePluginOptionsStorage } from '@/shared/data/pinia/plugin-options'
import { shallowReactive } from 'vue'

interface ComponentsLibraryOptions {
  router: Router
  getApiOptions: () => ApiOptions
}

export const ComponentsLibrary: Plugin = {
  install: (app: App, options: ComponentsLibraryOptions) => {
    app.use(createPinia())
    app.provide(routerKey, options.router)
    app.provide(routeLocationKey, getReactiveRoute(options))
    app.provide(routerViewLocationKey, options.router.currentRoute)

    const optionsStorage = usePluginOptionsStorage()
    optionsStorage.setApiOptionsGetter(options.getApiOptions)
  }
}

export function getReactiveRoute(options: ComponentsLibraryOptions) {
  const reactiveRoute = {} as RouteLocationNormalizedLoaded
  for (const key in START_LOCATION) {
    Object.defineProperty(reactiveRoute, key, {
      get: () => options.router.currentRoute.value[key as keyof RouteLocationNormalized],
      enumerable: true
    })
  }
  return shallowReactive(reactiveRoute)
}
