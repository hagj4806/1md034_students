<!DOCTYPE html>
 <html lang="en">
   <head>
     <link rel="stylesheet" type="text/css" href="css/style.css">
     <link rel="stylesheet" href="css/deli-very.css">
     <script type="text/javascript" src="js/menu.js"></script>

     <script src="/socket.io/socket.io.js" defer></script>
     <script src="https://vuejs.org/js/vue.js"></script>
     <script src="js/vue_script.js" defer></script>

     <script src="js/js_script.js" defer></script>

           <body>
             <main>

               <h1 class ="Welcome"> Welcome to BurgerOnline</h1>
               <section id ="Header">

                 <img src = "https://www.metro.ca/userfiles/image/recettes-occasions/special-features/picnic-bbq/festiveburger-header.jpg" alt= "Spa" title = "Header" width = 100%  >

               </section>

               <section id = "Burger">
                 <h2>Select your burger</h2>
                 <p>This is where you execute burger selection</p>


                 <div id = "burger" class="center">
                   <div v-for = "burger in menu">
                     <h3>{{burger.name}}</h3>
                      <img v-bind:src="burger.img" :height = "350"><br>
                      <ul>
                        <li>{{burger.kcal}} </li>
                        <span v-if ="burger.containsGluten">
                        <li><b>Contains gluten</b></li>
                      </span>
                      <span v-if = "burger.containsLactose">
                        <li><b>Contains lactose</b></li>
                      </span>
                    </ul>
                  </div>



               </section>

             <section id = "Order">


                 <td align=center valign =center>
                 <h2>Customer Information</h2>
                 <p>This is where you provide necessary information</p>
                 <h3>Delivery information:</h3>
                 <p>
                   <label for="First- and Last name">Full name</label><br>
                   <input type="text" id="First- and Last name" name="fn" required="required" placeholder="First- and Last Name" />
                 </p>

                 <p>
                  <label for="E-mail address">E-mail address</label><br>
                  <input type="email" id="email" name="em" required="required" placeholder="E-mail address" />
                 </p>

                 <p>
                   <label for="Street">Street</label><br>
                   <input type="text" id="Street" name="st" required="required" placeholder="Street name" />
                 </p>

                 <p>
                   <label for="House">House</label><br>
                   <input type="number" id="House" name="hou" required="required" placeholder="House number" />
                 </p>

                 <p>
                   <label for="payment">Payment options</label><br />
                   <select id = "payment" name="pay">
                     <option selected>Credit card </option>
                     <option>Invoice</option>
                     <option>Direct payment</option>
                     <option>Klarna</option>
                   </select>
                 </p>

                 <p>
                   <label for="Gender"> Gender options</label><br />
                   <input type="radio" name="gender" value="Male"> Male<br>
                   <input type="radio" name="gender" value="Female"> Female<br>
                   <input type="radio" name="gender" value="None-binary" checked> None-binary<br>
                   <input type="radio" name="gender" value="Undisclosed"> Undisclosed
                 </p>



             </section>
             <section id = "Button">

                    <button type="submit"><img src="https://previews.123rf.com/images/canbedone/canbedone1703/canbedone170300003/73111691-happy-cartoon-hamburger-character-isolated-on-white.jpg" width = "20" /> Place my order!</button>

                </section>


             </main>

             <footer>
               <hr>
                &copy; 2020 Hypothetical Burgers Inc.
               </hr>
             </footer>
           </body>
       </html>
