import * as _utils from './utils';
import mp from './base/mp';

export const wx = mp.wx;

export const getApp = mp.getApp;

export const getCurrentPages = mp.getCurrentPages;

/**
 * 封装和扩展小程序app实例以及wx
 */
export { default as wrap, WrapPage } from './app';

/**
 * 请求类
 */
export { default as Request } from './request';

/**
 * Promise化的wx API
 */
export { default as wxp } from './wxp';

/**
 * 可持久化至小程序storage的vuex store
 */
export { default as PersistStore, VuexStore } from './store';

/**
 * 实用工具函数
 */
export const Utils = _utils;

/**
 * EventEmitter
 */
export { default as Emitter } from './emitter';

/**
 * Navigator
 */
export { default as Navigator } from './nav';
