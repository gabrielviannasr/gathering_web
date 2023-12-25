import { defineStore } from 'pinia'

import { api } from 'boot/axios'

const URI = '/player'

export const playerStore = defineStore('player', {
  state: () => ({}),

  getters: {},

  actions: {
    async getList(payload) {
      try {
        const config = {
          params: payload,
        }
        const response = await api.get(URI, config)
        console.log('response', response)
        return response.data
      } catch (error) {
        throw new Error(error)
      }
    },

    async getPage(payload) {
      try {
        const config = {
          params: payload,
        }
        const response = await api.get(`${URI}/page`, config)
        console.log('response', response)
        return response.data
      } catch (error) {
        throw new Error(error)
      }
    },

    async getById(payload) {
      try {
        const response = await api.get(`${URI}/${payload.id}`)
        console.log('response', response)
        return response.data
      } catch (error) {
        throw new Error(error)
      }
    },

    async save(payload) {
      try {
        const response = await api.post(URI, payload)
        console.log('response', response)
        return response.data
      } catch (error) {
        throw new Error(error)
      }
    },

    async update(payload) {
      try {
        const config = {
          params: { id: payload.id },
        }
        const response = await api.put(URI, payload, config)
        console.log('response', response)
        return response.data
      } catch (error) {
        throw new Error(error)
      }
    },
  },
})
