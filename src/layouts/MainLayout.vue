<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>{{ productName }}</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div><button @click="fetchPlayers">Fetch Players</button></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
]

import { playerStore } from 'stores/player'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    const productName = process.env.APP.PRODUCT_NAME

    const store = playerStore()

    const fetchPlayers = async () => {
      try {
        // const players = await store.getList({ id: 7 })
        // const players = await store.getPage({
        //   model: null,
        //   sort: ['wallet,desc', 'name,desc'],

        //   page: 0,
        //   size: 4,
        // })
        // const players = await store.getById({ id: 70 })

        // const players = await store.save({
        //   id: 12,
        //   name: 'Jhonny',
        //   username: 'jhonnyzinho',
        //   email: 'jhonnyzinho@gmail.com',
        // })

        const players = await store.update({
          id: 7,
          name: 'Gabriel Vianna Editx3',
          username: 'gabrielviannasr',
          email: 'gabriel.viannasr@gmail.com',
          wallet: -10,
        })
        console.log('Players:', players)
      } catch (error) {
        console.error('Error fetching players:', error)
      }
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      productName,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      store,
      fetchPlayers,
    }
  },
})
</script>
