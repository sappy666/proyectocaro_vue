<template>
   <!-- ======= Contact Section ======= -->
   <div id="contact" class="paddsection">
      <div class="container">
         <div class="contact-block1">
            <div class="row">
               <div class="col-lg-6">
                  <div class="contact-contact">
                     <h2 class="mb-30">Contacto</h2>
                     <ul class="contact-details">
                        <li><span>Con Cón, Chile</span></li>
                        <li><span>+56 9 7436 7083</span></li>
                        <li><span>lanierpal@gmail.com</span></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-6">
                  <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                     <div class="row gy-3">
                        <div class="col-lg-6">
                           <div class="form-group contact-block1">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Tu Nombre" required>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Tu Email" required>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <textarea class="form-control" name="message" placeholder="Mensaje" required></textarea>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="loading">Cargando</div>
                           <div class="error-message"></div>
                           <div class="sent-message">Tu mensaje fue enviado, muchas gracias!</div>
                        </div>
                        <div class="mt-0">
                           <input type="submit" class="btn btn-send" value="Enviar mensaje">
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- End Contact Section -->
</template>
<script>
   export default {
   name: 'ContactoComp',
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
   font-family: 'DM Sans', sans-serif;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   font-family: 'DM Serif Display', serif;
   font-weight: 600;
   margin: 0 0 20px 0;
   padding: 0;
   }
   #contact {
   height: auto;
   width: 100%;
   padding-top: 10rem;
   padding-bottom: 5rem;
   }
   .contact-details {
   list-style: none;
   margin: 0;
   padding: 0;
   font-family: 'DM Sans', sans-serif;
   color: #a1a1a1;

   }
   .contact-details li {
   padding-bottom: 10px;
   }
   #contact input,
   #contact textarea {
      font-family: 'DM Sans', sans-serif;
   width: 100%;
   margin-bottom: 5px;
   }
   #contact textarea {
   min-height: 160px;
   }
   .php-email-form .error-message {
   display: none;
   color: #fff;
   background: #ed3c0d;
   text-align: left;
   padding: 15px;
   margin-bottom: 15px;
   font-weight: 600;
   }
   .php-email-form .error-message br+br {
   margin-top: 25px;
   }
   .php-email-form .sent-message {
   display: none;
   color: #fff;
   background: #D1922E;
   text-align: center;
   padding: 15px;
   font-weight: 600;
   margin-bottom: 15px;
   }
   .php-email-form .loading {
   display: none;
   background: #fff;
   text-align: center;
   padding: 15px;
   margin-bottom: 15px;
   }
   .php-email-form .loading:before {
   content: "";
   display: inline-block;
   border-radius: 50%;
   width: 24px;
   height: 24px;
   margin: 0 10px -6px 0;
   border: 3px solid #18d26e;
   border-top-color: #eee;
   animation: animate-loading 1s linear infinite;
   }
   @keyframes animate-loading {
   0% {
   transform: rotate(0deg);
   }
   100% {
   transform: rotate(360deg);
   }
   }
   .btn.btn.btn-send{
      color: #fff;
   background: #D1922E;
   font-family: 'DM Sans', sans-serif;
   }
</style>
