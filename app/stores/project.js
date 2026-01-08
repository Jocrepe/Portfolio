import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    project: [],
    loading: null
  }),

  actions: {

  }

})