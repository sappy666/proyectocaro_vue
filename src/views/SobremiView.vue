<template>
   <!-- ======= About Section ======= -->
   <div id="about" class="paddsection">
      <div class="container">
         <div class="row justify-content-between">
            <div class="col-lg-4 ">
               <div class="div-img-bg">
                  <div class="about-img">
                     <img src="../assets/piano.jpg" class="img-responsive" alt="me">
                  </div>
               </div>
            </div>
            <div class="col-lg-7">
               <div class="about-descr">
                  <p class="p-heading">Pianista y compositora Viñamarina, estudió en el Instituto de Música de la Pontificia Universidad Católica de Valparaíso la cátedra de piano clásico</p>
                  <p class="separator">Especializada en Música Docta, ha interpretado en diferentes escenarios de la V Región, con un variado repertorio de obras para piano, interpretando a Wolfgang Amadeus Mozart en su 250 aniversario de muerte y Franz Schubert en el Teatro Municipal de Valparaíso. También ha destacado su participación como miembro del jurado en el Concurso Claudio Arrau, durante el año 2017. Se ha dedicado por más de una década a la docencia, destacando a sus alumnos en conciertos anuales. Ha compuesto obras para orquesta de cuerdas y coro, siento interpretada por la Orquesta Marga Marga durante el año 2016.</p>
                  <br><div class="mas__noticias"><a href=""><p>Leer más</p></a></div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- End About Section -->
</template>
<script>
   export default {
   name: "SobremiView",
   }
</script>
<style scoped>
   body {
   background: #fff;
   color: #666666;
   font-family: 'DM Sans', sans-serif;
   }
   a {
   color: #D1922E;
   transition: 0.5s;
   text-decoration: none;
   }
   a:hover,
   a:active,
   a:focus {
   color: #D1922E;
   outline: none;
   text-decoration: none;
   }
   p {
   padding: 0;
   margin: 0 0 30px 0;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   font-family: 'DM Serif Display', serif;
   font-weight: 300;
   margin: 0 0 20px 0;
   padding: 0;
   }
   #about {
   width: 100%;
   height: auto;
   background: #f7f7f7;
   padding-top: 120px;
   }
   #about .div-img-bg {
   padding-bottom: 30px;
   border: 20px solid #b8a07e;
   }
   #about .div-img-bg .about-img img {
   width: 100%;
   box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
   margin-top: -60px;
   margin-left: 40px;
   height: 400px;
   -o-object-fit: cover;
   object-fit: cover;
   }
   #about .about-descr .p-heading {
   font-family: "Playfair Display", serif;
   font-size: 28px;
   text-align: left;
   }
   #about .about-descr .separator {
   max-width: 80%;
   margin-bottom: 0;
   text-align: left;
   }
</style>
