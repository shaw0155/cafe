import "./Contactus.css";
import { IonIcon } from "@ionic/react";
import personIcon from "../../icons/person.svg";
import mailIcon from "../../icons/mail.svg";
import phoneIcon from "../../icons/call.svg";

export default function Contactus() {
  return (
    <div className="section contactus-section" id="contact">
      <h1 className="section-title">
        contact <span>us</span>
      </h1>
      <div className="contactus-section-card">
        <div className="map">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6724.980623636425!2d-3.2276944246325514!3d39.39206763157801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd69af1d0fb9e791%3A0x53c767f10a65146!2sAlcazar%20De%20San%20Juan!5e0!3m2!1sar!2seg!4v1677852544411!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form>
          <h2>GET IN TOUCH</h2>
          <div>
            <IonIcon src={personIcon} />
            <input type="text" placeholder="name" />
          </div>
          <div>
            <IonIcon src={mailIcon} />
            <input type="email" placeholder="email" />
          </div>
          <div>
            <IonIcon src={phoneIcon} />
            <input
              placeholder="number"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <button type="submit"> Contact Now</button>
        </form>
      </div>
    </div>
  );
}
