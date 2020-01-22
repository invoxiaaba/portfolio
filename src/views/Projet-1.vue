<template>
  <div id="app">
    <div class="container-projet">
      <header class="header-projet">
        <a class="nav-projet-link nav-link-01">01</a>
        <router-link class="nav-next" to="/about">O2</router-link>
        <router-link class="nav-prev" to="/projet5">05</router-link>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </header>
      <section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quod fuga repellendus debitis perspiciatis,
          doloribus officiis atque non necessitatibus incidunt obcaecati eos autem aut enim voluptatibus neque qui at commodi.
        </p>
      </section>
    </div>
  </div>
</template>