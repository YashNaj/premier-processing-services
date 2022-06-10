import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faBullseye,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/card/Card";
import Cta from "../../components/cta/Cta";
import "./cards.css";
const CardDisplay = () => (
  <>
    <Card
      title="Quality Link Building"
      description="Why build links? Google’s algorithms are complex and always evolving, but backlinks remain an important factor in how every search engine determines which sites rank for which keywords. Building links is one of the many tactics used in search engine optimization (SEO) because links are a signal to Google that your site is a quality resource worthy of citation. Therefore, sites with more backlinks tend to earn higher rankings.

"
      className="desktop-card"
      icon={<FontAwesomeIcon icon={faHandshake} />}
    />
    <Card
      title="Affiliate Marketing
"
      description="As the name suggests, involved affiliate marketing describes those who are closely tied to the product or service they’re promoting. The affiliate has tried the product themselves, trusts that it will provide a good experience and has the authority to make claims about its use.

Rather than relying on pays per click, involved affiliate marketers use their personal experiences with the product in their marketing efforts, and customers can trust them as reliable sources of information. 

"
      className="desktop-card"
      icon={<FontAwesomeIcon icon={faBarChart} />}
    />
    <Card
      title="Re-targeting Customers"
      description="The second type of lead you want to gather is a sales qualified lead (or SQL). SQLs are active leads (or inbound leads). These are people /companies that have directly engaged with your company and your sales team in some capacity. They may have requested a demo, called your sales department, or sent an email/message indicating their interest in a particular product or services"
      className="desktop-card"
      icon={<FontAwesomeIcon icon={faBullseye} />}
    />
  </>
);
const Cards = () => {
  return (
    <div className="pps__cards section__margin" id="about">
      <div className="pps__cards-container ">
        <h1 className="pps__cards-heading ">Our Services</h1>
        <div className="pps__cards-section">
          <CardDisplay className="desktop-card" />
        </div>
        <Cta />
      </div>
      <i class="fa-solid fa-cutlery"></i>
      <i class="fa-solid fa-utensils"></i>
      <i class="fas fa-utensils"></i>
    </div>
  );
};

export default Cards;
