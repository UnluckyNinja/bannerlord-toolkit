<template>
  <div>
    <v-card>
      <v-card-title class="headline justify-center">
        <span>
          <span class="blue--text">enum</span>
          BodyFlags
          <span class="yellow--text">@TaleWorlds.Engine</span>
        </span>
      </v-card-title>
      <BodyFlags></BodyFlags>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BodyFlags from '@/components/BodyFlags.vue'

/**
 *
 */
@Component({
  components: {
    BodyFlags
  }
})
export default class BodyFlagsView extends Vue {
  originalTheme!: boolean
  mounted() {
    this.originalTheme = this.$vuetify.theme.dark
    this.$vuetify.theme.dark = true
  }
  beforeDestroy() {
    this.$vuetify.theme.dark = this.originalTheme
  }
}
</script>

<style lang="scss" scoped>
</style>