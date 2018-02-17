<template>
  <div id="app">

      <div class="action-bar">
          <div class="container cf">

            <div class="action-bar__search">
                <icon name="search"></icon>
            </div>

            <a href="#" class="action-bar__add">
                <div>
                    <icon name="plus"></icon>
                </div>
            </a>

          </div>
      </div>

      <main>
          <div class="container">

              <h1>All Recipes</h1>

              <div class="cf">
                  <ul v-for="recipe in recipes" class="recipe-list">
                      <li class="recipe-list__card">
                          <div class="recipe-list__card__meta">
                              <h3>{{recipe.name}}</h3>
                              <p>
                                  <em>Time: {{recipe.time}}</em><br>
                                  <em>Serves: {{recipe.serves}}</em>
                              </p>
                          </div>
                          <div class="recipe-list__card__image">
                          </div>
                      </li>
                      <!-- <icon name="trash" aria-hidden="true" v-on:click="removeRecipe(recipe)"></icon> -->
                  </ul>
              </div>

          </div>

           <!-- <form id="form" class="form-inline" v-on:submit.prevent="addRecipe">
              <div class="form-group">
                  <label for="recipeName">Name:</label>
                  <input type="text" id="recipeName" class="form-control" v-model="newRecipe.name">
              </div>
              <div class="form-group">
                  <label for="recipeContent">Content:</label>
                  <vue-editor id="recipeContent" class="form-control"></vue-editor>
              </div>

              <input type="submit" class="btn btn-primary" value="Add Recipe">
          </form> -->
      </main>

  </div>
</template>

<script>

import toastr from 'toastr'
import Firebase from 'firebase'
import { VueEditor } from 'vue2-editor'

let config = {
  apiKey: 'AIzaSyAMwAdqeSPE6XZPaBmV8TMOE8t01ZSrWo8',
  authDomain: 'recipes-c5fdb.firebaseapp.com',
  databaseURL: 'https://recipes-c5fdb.firebaseio.com',
  projectId: 'recipes-c5fdb',
  storageBucket: 'recipes-c5fdb.appspot.com',
  messagingSenderId: '263953686595'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let recipesRef = db.ref('recipes')

export default {
  name: 'app',
  firebase: {
    recipes: recipesRef
  },
  data () {
    return {
      newRecipe: {
        name: '',
        time: '',
        serves: ''
      }
    }
  },
  components: {
    VueEditor
  },
  methods: {
    addRecipe: function () {
      recipesRef.push(this.newRecipe)
      this.newRecipe.name = '',
      this.newRecipe.time = '',
      this.newRecipe.serves = ''
    },
    removeRecipe: function (recipe) {
      recipesRef.child(recipe['.key']).remove()
      toastr.success('Book removed successfully')
    }
  }
}

</script>

<style lang="scss" scoped>
@import './src/assets/scss/main.scss';
@import './src/assets/scss/modules.scss';
</style>
