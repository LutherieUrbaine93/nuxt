<template>

  <Nuxt />

</template>

<script>
export default {
  head: {
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lora%7cRoboto%7cOpen+Sans:400,800&display=swap ",
      }
    ]
  }
}
</script>

<style>
:root {
  --bgColor: rgb(33,33,33);
  --white: rgb(255,255,255);
  --whitesmoke: rgb(245,245,245);
  --grey: rgb(186,186,186);
  --grey2: rgb(231,231,231);
  --grey3: rgb(247,247,247);
  --logo1: rgb(184,186,189);
  --logo2: rgb(179,17,25);
  --lu93Serif: 'Lora', serif;
  --lu93Sans1: 'Open Sans', sans-serif;
  --lu93Sans2: 'Roboto', sans-serif;
  --careSans: 'Fira Sans Condensed', sans-serif;
  --fontBold: 'Fira Sans Condensed', sans-serif;
  --anim1: cubic-bezier(.5,0,0,1);
}
html {
  background-color: var(--bgColor);
  color: var(--whitesmoke);
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--lu93Serif);
  font-weight: 800;
}
h1 {
  font-size: 1.8em;
  margin: 0.67em 0;
}

</style>
