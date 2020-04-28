<template>
  <v-container class="monospace">
    <v-row
      v-for="(flag, idx) of flags"
      :key="idx"
      @click="selectedValue === flag.value? selectedValue = -1: selectedValue = flag.value"
      dense
    >
      <v-col>
        <v-btn
          class="text-capitalize"
          :color="whichColor(flag.value, selectedValue)"
          rounded
          depressed
          block
        >
          <v-col>{{flag.name}}</v-col>
          <v-spacer />
          <v-col>{{flag.value.toString(2).padStart(32,'0')}}</v-col>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Flags } from '@/data/BodyFlagsData'

/**
 * A list of BodyFlags from TaleWorlds.Engine.BodyFlags
 */
@Component({
  components: {}
})
export default class BodyFlags extends Vue {
  selectedValue = -1

  get flags() {
    return Flags
  }

  whichColor(value: number, selectedValue: number) {
    if (selectedValue === -1) {
      return ''
    }
    if (value === selectedValue) {
      return 'blue'
    }
    const intersection = value & selectedValue
    if (intersection === value) {
      return 'cyan'
    } else if (intersection === selectedValue) {
      return 'indigo'
    }
    return ''
  }
}
</script>

<style lang="scss" scoped>
.monospace {
  font-family: monospace, monospace;
}
</style>