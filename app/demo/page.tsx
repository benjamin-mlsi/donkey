// pages/index.js
"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Form from "@/components/ui/Form";
import Footer2 from "@/components/Footer2";
import Script from "next/script"; // Import the Script component from next/script

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full"> 
          <FloatingNav navItems={navItems} />
          <div
        style={{ width: "0", height: "0", bottom: "30px", right: "30px" }}
        id="VG_OVERLAY_CONTAINER"
      >
        {/* Here is where Voiceglow renders the widget. */}
        {/* Set render to 'full-width' then adjust the width and height to 500px (for example) to render the chatbot itself without the popup. */}
      </div>

      {/* Remove 'defer' if you want widget to load faster (Will affect website loading) */}
      <Script id="voiceglow-script" strategy="afterInteractive">
        {`
          (function() {
            window.VG_CONFIG = {
              ID: "erma16l0ph98u5oq", // YOUR AGENT ID
              region: 'eu', // YOUR ACCOUNT REGION 
              render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
              stylesheets: [
                // Base Voiceglow CSS
                "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
                // Add your custom css stylesheets, Can also add relative URL ('/public/your-file.css)
              ],
              // Optional user data -- start
              user: {
                name: 'John Doe', // User's name
                email: 'johndoe@gmail.com', // User's email
                phone: '+1234567890', // User's phone number
              }
              // Optional user data -- end
              // **
              // userID: 'USER_ID', // If you want to use your own user_id
              // autostart: true, // Whether to autostart the chatbot with the proactive message
            }
            var VG_SCRIPT = document.createElement("script");
            VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
            VG_SCRIPT.defer = true; // Remove 'defer' if you want widget to load faster (Will affect website loading)
            document.body.appendChild(VG_SCRIPT);
          })()
        `}
      </Script>
      
      <Script id="haendlerbund-script" strategy="afterInteractive">
        {`
            (function(d, t) {
              var s = d.createElement(t), p = d.getElementsByTagName(t)[0];
              s.src = "https://consenttool.haendlerbund.de/app.js?apiKey=4a65da51f935985521a5c1d7458d83041794bc555950ea3f&domain=a4dcbb7";
              s.referrerPolicy = "origin";
              p.parentNode.insertBefore(s, p);
            })(document, 'script');
          `}
      </Script>
     
        <Form />
      <Footer2/>
      </div>
    </main>
  );
};

export default Home;
