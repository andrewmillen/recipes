<template>
  <div id="app">

    <h1>All Recipes</h1>

    <ul v-for="recipe in recipes">
      <li>{{recipe.name}} <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeRecipe(recipe)"></span></li>
    </ul>

    <h3>Add Recipe</h3>

     <form id="form" class="form-inline" v-on:submit.prevent="addRecipe">
      <div class="form-group">
        <label for="recipeName">Name:</label>
        <input type="text" id="recipeName" class="form-control" v-model="newRecipe.name">
      </div>
      <input type="submit" class="btn btn-primary" value="Add Recipe">
    </form>

  </div>
</template>

<script>

import toastr from 'toastr'
import Firebase from 'firebase'
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
        name: ''
      }
    }
  },
  methods: {
    addRecipe: function () {
      recipesRef.push(this.newRecipe)
      this.newRecipe.name = ''
    },
    removeRecipe: function (recipe) {
      recipesRef.child(recipe['.key']).remove()
      toastr.success('Book removed successfully')
    }
  }
}

</script>

<style>
#app {
  font-family: 'Sofia Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
