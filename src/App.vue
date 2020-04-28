<template>
  <v-app dark>
    <v-app-bar app>
      <v-btn class="no-active" to="/" exact icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="no-active" :ripple="false" to="/" exact text>
        <v-toolbar-title class="title">Bannerlord Toolkit</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/UnluckyNinja/bannerlord-toolkit" target="_blank" icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- extract this -->
      <v-container fluid>
        <v-chip-group :column="$route.path === '/'">
          <v-chip v-for="link in links" :key="link.path" :to="link.path">{{ link.name }}</v-chip>
        </v-chip-group>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app>
      <v-spacer></v-spacer>©UnluckyNinja
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  links = [{ name: 'BodyFlags', path: '/bodyflags' }]
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.no-active.v-btn:before {
  display: none;
}
</style>
