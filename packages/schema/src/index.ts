
// Types
export * from './types/compatibility'
export * from './types/components'
export * from './types/config'
export * from './types/hooks'
export * from './types/imports'
export * from './types/head'
export * from './types/module'
export * from './types/nuxt'
export * from './types/router'

// 交叉版本 Nuxt typedef 和默认值
// Schema [ˈskimə]
// schema就是数据库对象的集合，这个集合包含了各种对象如：表、视图、存储过程、索引等。
// 可以理解成 Schema 他是一个存储各种东西的地方
// @nuxt/schema 这个包存储了各种配置（基于 untyped 的 defineUntypedSchema 方法，及通过定义函数来生成一个 schema）
// untyped 是 unjs 的一个仓库，它可以根据传入的对象（可以是函数），生成一个 `Schema` 对象，
// `Schema` 可以用于生成 markdown 或 type
// TODO: 这些配置有什么用 ？
// 以 packages/schema/src/config/vite.ts 为例，你可以看到它就是也给 vite 的配置
export { default as NuxtConfigSchema } from './config/index'

