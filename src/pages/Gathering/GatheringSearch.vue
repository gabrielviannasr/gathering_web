<template>
  <q-page>
    <q-card borderd>
      <q-card-section>
        <q-breadcrumbs>
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="primary" />
          </template>
          <q-breadcrumbs-el label="Home" icon="home" to="/" />
          <q-breadcrumbs-el label="Gathering" icon="widgets" />
        </q-breadcrumbs>
        <!-- SEARCH -->
        <q-card-section class="row q-col-gutter-md">
          <q-input
            outlined
            clearable
            clear-icon="close"
            v-model="payload.year"
            label="Ano:"
            class="col-xs-12 col-sm-3"
          />

          <q-input
            outlined
            clearable
            clear-icon="close"
            v-model="payload.name"
            label="Nome:"
            class="col-xs-12 col-sm-6"
          />

          <q-input
            outlined
            clearable
            clear-icon="close"
            v-model="payload.player.username"
            label="Username:"
            class="col-xs-12 col-sm-3"
          />
        </q-card-section>
        <!-- ACTIONS -->
        <q-card-actions class="q-pa-md">
          <q-btn
            icon="search"
            label="Pesquisar"
            color="primary"
            type="submit"
            @click="onSubmit"
          />
          <q-btn
            icon="mdi-eraser"
            label="Limpar"
            type="button"
            color="primary"
            @click="reload"
            flat
          />
          <q-space />
          <q-btn icon="add" label="Novo" color="green" to="/" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GatheringSearch',

  setup() {
    let payload = ref({
      player: {
        username: null,
      },
      name: null,
      year: null,
    })

    const onSubmit = () => {
      console.log('payload', payload.value)
    }

    const reload = () => {
      console.log('payload', payload.value)
      payload.value.name = null
      payload.value.year = null
      payload.value.player.username = null
    }

    return {
      payload,
      onSubmit,
      reload,
    }
  },
})
</script>
