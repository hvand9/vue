
<template>
<div class="container">
  <div class="hello">
    <h1>Connect til et spil</h1>
    <p>
      Her kan du se alle de events du kan joine
    </p>
   <dropdown
  title="Simple Filter"
  text="Click to filter"
  :items="[
    {text: 'Item 1'},
    {text: 'Item 2'}
  ]">
</dropdown>
    <img :src="image" />

   <div class="container1">
      <h1>FORTNITE</h1>
      <p>Skal du være med til næste CS Go event? Det er på denne tirsdag. 
        Tilmeld dig så du får en notifikation i din indbakke</p>  
        <button>Connect til Fortnite</button>
    </div>
    <div class="container1">
      <h1>LEAUGE OF LEGENDS</h1>
      <p>Skal du være med til næste CS Go event? Det er på denne tirsdag. 
        Tilmeld dig så du får en notifikation i din indbakke</p>  
        <button>Connect til Fortnite</button>
    </div>
    <div class="container1">
      <h1>CALL OF DUTY WARZONE</h1> 
      <p>Skal du være med til næste CS Go event? Det er på denne tirsdag. 
        Tilmeld dig så du får en notifikation i din indbakke</p>  
        <button>Connect til Fortnite</button>
    </div>
    <p>Fandt du ikke dit spil? Fortvivl ej! Der er hele tiden nye events!</p>
  <button onclick="window.location.href='https://nifty-montalcini-3382e1.netlify.app/'">Tilsut til chat</button>
    </div>
    </div>

   
</template>

<script>
export default {
  name: 'Forside',
  props: {
    msg: String
  }
  
}






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

h1 {
  font-size: 25px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  border-radius: 25px;
}

.container {
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
    height: auto;
    border-radius: 25px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    background: #FF9526;
    margin-bottom: 10px;
  }

  .container1 {
    width: 100%;
    max-width: 500px;
    margin: 30px auto;
    border-radius: 20px;
    box-shadow: 2px 4px 6px #1c06311a;
    background: rgb(255, 255, 255);
    color: black;
  }

  .post-container {
    margin: 10px 20px 0 0;  
    border: 5px solid rgb(219, 207, 207);
    overflow: auto
}
.post-thumb {
    float: left
}
.post-thumb img {
    display: block
}
.post-content {
    margin-left: 210px
}
.post-title {
    font-weight: bold;
    font-size: 200%
}


</style>