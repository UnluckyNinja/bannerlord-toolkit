<template>
  <div style="display: none"></div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Prop, PropSync, Vue, Watch } from 'vue-property-decorator'

/**
 * slot prop delegate
 */
@Component({})
export default class SlotPropHelper extends Vue {
  @PropSync('signal', { type: Boolean }) syncSignal!: boolean
  @Prop({ default: () => {} }) func!: Function
  @Prop({ default: [] }) params!: Array<any>

  @Watch('syncSignal')
  call() {
    if (this.syncSignal === true) {
      this.func(...this.params)
      this.syncSignal = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>