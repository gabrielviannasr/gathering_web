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
            v-model="model.year"
            label="Ano:"
            class="col-xs-12 col-sm-3"
          />

          <q-input
            outlined
            clearable
            clear-icon="close"
            v-model="model.name"
            label="Nome:"
            class="col-xs-12 col-sm-6"
          />

          <q-input
            outlined
            clearable
            clear-icon="close"
            v-model="model['player.username']"
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
import { gatheringStore } from 'stores/gathering'
import _ from 'lodash'

export default defineComponent({
  name: 'GatheringSearch',

  setup() {
    const store = gatheringStore()

    let model = ref({
      name: null,
      year: null,
      'player.username': null,
    })

    let payload = ref({
      name: null,
      year: null,
      'player.username': null,
    })

    const onSubmit = async () => {
      payload.value = _.cloneDeep(model.value)
      console.log('payload', payload.value)
      await store.getList(payload.value)
    }

    const reload = () => {
      console.log('model', model.value)
      model.value = {
        name: null,
        year: null,
        'player.username': null,
      }
    }

    return {
      model,
      payload,
      store,
      onSubmit,
      reload,
    }
  },
})
</script>
