<template>
   <footer id="footer">
      <div class="footer-top">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-6 ps-0 footer-info">
                  <a href="index.html" class="logo"><img src="../assets/logo2.png" alt="" width="320"></a>
                  <!-- <h3>Carolina fagerström</h3> -->
               </div>
               <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Sitio</h4>
                  <ul>
                     <li><i class="bi bi-chevron-right"></i> <a href="#">Inicio</a></li>
                     <li><i class="bi bi-chevron-right"></i> <a href="#">Sobre Mi</a></li>
                     <li><i class="bi bi-chevron-right"></i> <a href="#">Obras</a></li>
                  </ul>
               </div>
               <div class="col-lg-3 col-md-6 footer-contact">
                  <h4>Contactáme</h4>
                  <p>
                     <strong>Teléfono:</strong> +56 9 7436 7083<br>
                     <!-- <strong>Email:</strong> info@<br> -->
                     <a href="https://www.youtube.com/@carolinapalacios9509"><img class="social__icon" src="../assets/youtube.svg" height="30px" alt=""></a>
                  </p>
                  <!-- <div class="social-links">
                     <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                     <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                     <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                     <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                     </div> -->
               </div>
            </div>
         </div>
      </div>
   </footer>
   <!-- End Footer -->
</template>
<script>
   export default {
   name: 'FooterComp',
   }
</script>
<style scoped>
   body {
   background: #fff;
   color: #666666;
   font-family: "Poppins", helvetica;
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
   font-family: "Montserrat", sans-serif;
   font-weight: 400;
   margin: 0 0 20px 0;
   padding: 0;
   }
   #footer {
   background: #000;
   padding: 0 0 30px 0;
   color: #eee;
   font-size: 14px;
   }
   #footer .footer-top {
   background: #111;
   padding: 60px 0 30px 0;
   }
   #footer .footer-top .footer-info {
   margin-bottom: 30px;
   }
   #footer .footer-top .footer-info h3 {
   font-size: 34px;
   margin: 0 0 20px 0;
   padding: 2px 0 2px 10px;
   line-height: 1;
   font-family: "Montserrat", sans-serif;
   font-weight: 700;
   letter-spacing: 3px;
   border-left: 4px solid #D1922E;
   }
   #footer .footer-top .footer-info p {
   font-size: 14px;
   line-height: 24px;
   margin-bottom: 0;
   font-family: "Montserrat", sans-serif;
   color: #eee;
   }
   #footer .footer-top .social-links a {
   display: inline-block;
   background: #333;
   color: #eee;
   line-height: 1;
   margin-right: 4px;
   border-radius: 50%;
   width: 36px;
   height: 36px;
   transition: 0.3s;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   }
   #footer .footer-top .social-links a i {
   line-height: 0;
   font-size: 16px;
   }
   #footer .footer-top .social-links a:hover {
   background: #D1922E;
   color: #fff;
   }
   #footer .footer-top h4 {
   font-size: 14px;
   font-weight: bold;
   color: #fff;
   text-transform: uppercase;
   position: relative;
   padding-bottom: 12px;
   }
   #footer .footer-top h4::before,
   #footer .footer-top h4::after {
   content: "";
   position: absolute;
   left: 0;
   bottom: 0;
   height: 2px;
   }
   #footer .footer-top h4::before {
   right: 0;
   background: #555;
   }
   #footer .footer-top h4::after {
   background: #D1922E;
   width: 60px;
   }
   #footer .footer-top .footer-links {
   margin-bottom: 30px;
   }
   #footer .footer-top .footer-links ul {
   list-style: none;
   padding: 0;
   margin: 0;
   }
   #footer .footer-top .footer-links ul i {
   padding-right: 8px;
   color: #ddd;
   }
   #footer .footer-top .footer-links ul li {
   border-bottom: 1px solid #333;
   padding: 10px 0;
   }
   #footer .footer-top .footer-links ul li:first-child {
   padding-top: 0;
   }
   #footer .footer-top .footer-links ul a {
   color: #eee;
   }
   #footer .footer-top .footer-links ul a:hover {
   color: #D1922E;
   }
   #footer .footer-top .footer-contact {
   margin-bottom: 30px;
   }
   #footer .footer-top .footer-contact p {
   line-height: 26px;
   }
   #footer .footer-top .footer-newsletter {
   margin-bottom: 30px;
   }
   #footer .footer-top .footer-newsletter input[type=email] {
   border: 0;
   padding: 6px 8px;
   width: 65%;
   }
   #footer .footer-top .footer-newsletter input[type=submit] {
   background: #D1922E;
   border: 0;
   width: 35%;
   padding: 6px 0;
   text-align: center;
   color: #fff;
   transition: 0.3s;
   cursor: pointer;
   }
   #footer .footer-top .footer-newsletter input[type=submit]:hover {
   background: #D1922E;
   }
   .social__icon{
   color: #D1922E;
   }
</style>
