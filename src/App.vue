<template>
  <NavBar/>
  <router-view />
  <TopArrow />
  <HomeView />
  <SobremiView />
  <GaleriaView />
  <JournalView />
  <ContactoComp/>
  <FooterComp/>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet"> 
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,500,500i,600,600i,700,700i,900,900i" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
</template>

<script>
import NavBar from "@/components/NavBar.vue" 
import FooterComp from "@/components/FooterComp.vue"
import ContactoComp from "@/components/ContactoComp.vue"
import TopArrow from "@/components/TopArrow.vue"
import HomeView from "@/views/HomeView.vue"
import JournalView from "@/views/JournalView.vue"
import SobremiView from "@/views/SobremiView.vue"
import GaleriaView from "@/views/GaleriaView.vue"



export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    ContactoComp,
    GaleriaView,
    HomeView,
    SobremiView,
    JournalView,
    TopArrow
  }
}
</script>

<style>
body {
  background: #ffffff;
  color: #898989;
  font-family: "Poppins", helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

h2 {
  color: #292929;
  font-weight: 600;
}

h4 {
  color: #292929;
  font-size: 14px;
  font-weight: 600;
}

a {
  color: #D1922E;
  text-decoration: none !important;
  transition: all 0.5s ease-in-out 0s;
  cursor: pointer;
}

a:hover {
  transition: all 0.5s ease-in-out 0s;
  color: #D1922E;
}

p {
  margin: 25px 0;
  padding: 0;
  font-size: 15px;
  color: #999999;
  line-height: 28px;
}

::-moz-selection {
  background: #b8a07e;
  color: #fff;
}

::selection {
  background: #b8a07e;
  color: #fff;
}

.btn {
  background: #333;
  border: medium none;
  border-radius: 0;
  color: #fff;
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  text-transform: uppercase;
}

.btn:hover,
.btn:focus {
  color: #fff;
}

.padDiv {
  padding: 30px 20px;
}

.section-title {
  margin-bottom: 70px;
}

.section-title h2 {
  font-size: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.form-control {
  background-color: transparent;
  border: 1px solid #999;
  border-radius: 0;
  color: #999999;
  font-size: 12px;
  font-weight: 500;
  height: 50px;
  letter-spacing: 0.1em;
  padding-left: 10px;
  margin: 0 0 25px 0;
  line-height: 14px;
  text-transform: uppercase;
}

.form-control:focus {
  box-shadow: none;
  outline: 0 none;
}

.paddsection {
  padding-top: 90px;
  padding-bottom: 90px;
}

.paddsections {
  padding-top: 90px;
  padding-bottom: 90px !important;
}

.hvr-shutter-in-horizontal::before {
  background: #333;
}

.hvr-shutter-in-horizontal:hover {
  background: #b8a07e;
}

.mb-30 {
  margin-bottom: 30px;
}

.main-content {
  padding-top: 140px;
}
</style>
