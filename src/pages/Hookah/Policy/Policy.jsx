import {useSelector} from "react-redux";
import Navbar from "../../../components/Navbar/Navbar";
import HookahFooter from "../../../components/Hookah/HookahFooter/HookahFooter";
import hookahLogo from  "./../../../img/MagnatHookah.png";
import "./Policy.css";

export default function Policy() {
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);

  return (
    <div className={`Policy ${isBurgerOpen? "burger_open" : ""}`}>
      <Navbar/>
      <div className="policy_container">
        <div className="privacy_title">
          <img src={hookahLogo} alt="Magnat Hookah Logo"/>
          <h1>PRIVACY POLICY</h1>
        </div>
        <h3 className="privacy_subtitle">MAGNAT COMPANY, represented by the online store Magnat.com (hereinafter referred to as the Seller), publishes
          this agreement, which is a public offer agreement addressed to both individuals and legal entities
          (hereinafter referred to as the Buyer) on the following:</h3>
        <h3 className="policy_article">Article 1 • Subject of the contract-offer.</h3>
        <p><span className="subArticle">1.1.</span> The Seller undertakes to transfer ownership to the Buyer, and the Buyer undertakes to pay for and
          accept the goods ordered in the magnate.com online store (hereinafter referred to as the goods).</p>
        <h3 className="policy_article"> Article 2 • The moment of conclusion of the contract.</h3>
        <p><span className="subArticle">2.1.</span> The text of this agreement is a public offer (in accordance with Article 435 and Part 2 of Article 437
          of the Civil Code of the Russian Federation).</p>
        <p><span className="subArticle">2.2.</span> The fact of placing an order for goods from the seller, both independently and through the operator,
          is the unconditional acceptance of this agreement, and the Buyer is considered as a person who has entered
          into a contractual relationship with Oxi-Pro.
        </p>
        <p><span className="subArticle">2.3.</span> Ordering goods and calculation is carried out by ordering by the buyer in the online store
          magnat.com.</p>
        <h3 className="policy_article">Article 3 • Price of products.</h3>
        <p><span className="subArticle">3.1.</span> Prices in the online store are indicated in dollar currency per item.</p>
        <p><span className="subArticle">3.2.</span> Tariffs for the provision of services for the delivery, unloading, lifting and assembly of goods are
          indicated in the online store for each product, depending on its characteristics.</p>
        <h3 className="policy_article">Article 4 • Payment for products.</h3>
        <p><span className="subArticle">4.1.</span> In case of cash payment, the Buyer is obliged to pay the seller the price of the goods at the time of
          its transfer, and the Seller is obliged to provide the buyer with a cash or sales receipt, or other document
          confirming payment for the goods.</p>
        <p><span className="subArticle">4.2.</span> With a non-cash form of payment, the buyer's obligation to pay the price of the goods is considered
          fulfilled from the moment the relevant funds are credited in the amount of 100% (one hundred percent) of the
          advance payment of the card.</p>
        <p><span className="subArticle">4.3.</span> Goods are delivered to the buyer at prices, names, in quantities corresponding to the invoice paid by
          the buyer.</p>
        <h3 className="policy_article">Article 5 • Delivery of products.</h3>
        <p><span className="subArticle">5.1.</span> Delivery of the goods to the buyer is carried out to the address and within the time agreed by the
          buyer and the seller's manager when placing an order, or the Buyer independently picks up the goods from the
          warehouse.</p>
        <p><span className="subArticle">5.2.</span> The exact cost of delivery of the goods is determined by the seller's manager when placing an order
          and cannot be changed after agreement by the buyer.</p>
        <p><span className="subArticle">5.3</span> The failure of the buyer to appear or the failure to perform other necessary actions to accept the
          goods may be considered by the seller as the buyer's refusal to perform the contract.</p>
        <h3 className="policy_article">Article 6 • Guarantees for products.</h3>
        <p><span className="subArticle">6.1.</span> All products sold in the online store magnat.com have all the necessary quality certificates and
          sanitary and hygienic conclusions.</p>
        <p><span className="subArticle">6.2.</span> The warranty period for the product is determined by the manufacturer. The warranty period is
          indicated in the warranty card.</p>
        <h3 className="policy_article">Article 7 • Rights and obligations of the parties.</h3>
        <p><span className="subArticle">7.1.</span> The seller undertakes:</p>
        <p><span className="subArticle">7.1.1.</span> Do not disclose any private information of the buyer and do not provide access to this information
          to third parties, except as provided by Russian law.</p>
        <p><span className="subArticle">7.1.2.</span> Provide the buyer with the opportunity to receive free telephone consultations by phone numbers
          listed on the store's website (magnat.com). The scope of consultations is limited to specific issues related
          to the execution of the order.</p>
        <p><span className="subArticle">7.1.3.</span> The Seller reserves the right to change this agreement unilaterally until it is concluded.</p>
        <p><span className="subArticle">7.2.</span> The buyer undertakes:</p>
        <p><span className="subArticle">7.2.1.</span> Before the conclusion of the contract, familiarize yourself with the content of the contract-offer,
          the terms of payment and delivery on the store's website (magnate.com).</p>
        <p><span className="subArticle">7.2.2.</span> Accept and pay for the goods within the terms specified in this contract.</p>
        <h3 className="policy_article">Article 8 • Responsibility of the parties and resolution of disputes.</h3>
        <p><span className="subArticle">8.1.</span> the parties are responsible for non-performance or improper performance of this agreement in the
          manner prescribed by this agreement and the current legislation of the Russian Federation.</p>
        <p><span className="subArticle">8.2.</span> The seller is not responsible for the delivery of the order if the buyer provided an incorrect
          delivery address.</p>
        <p><span className="subArticle">8.3.</span> The seller is not responsible if the buyer's expectations about the consumer properties of the goods
          were not justified.</p>
        <p><span className="subArticle">8.4.</span> The seller is not responsible for partial or complete failure to fulfill obligations for the delivery
          of goods, if they are the result of force majeure circumstances.</p>
        <p><span className="subArticle">8.5.</span> When placing an order, the buyer is responsible for the accuracy of the information provided about
          himself, and also confirms that he has read and agrees with the terms of this agreement.</p>
        <p><span className="subArticle">8.6.</span> All disputes and disagreements arising from the fulfillment by the parties of their obligations under
          this agreement shall be resolved through negotiations. If it is impossible to eliminate them, the parties
          have the right to apply for judicial protection of their interests.</p>
        <h3 className="policy_article">Article 9 • Return and exchange of goods.</h3>
        <p><span className="subArticle">9.1.</span> The buyer's request for an exchange or return of the goods is subject to satisfaction if the goods
          were not in use, their consumer properties are preserved, the packaging is preserved and not broken,
          documents confirming the purchase of this product in the magnat.com online store are saved.</p>
        <p><span className="subArticle">9.2.</span> The term for such a claim is 14 (fourteen) days from the date of transfer of the goods to the
          buyer.</p>
        <p><span className="subArticle">9.3.</span> The buyer compensates the seller for the necessary transportation costs incurred in connection with
          the organization of the exchange or return of the goods.</p>
        <h3 className="policy_article">Article 10 • Force majeure circumstances.</h3>
        <p><span className="subArticle">10.1.</span> the parties are released from liability for non-fulfillment or improper fulfillment of obligations
          under the contract for the duration of the force majeure. Force majeure means extraordinary and
          insurmountable circumstances under the given conditions that prevent the parties from fulfilling their
          obligations under this agreement. These include natural phenomena (earthquakes, floods, etc.), circumstances
          of public life (military actions, states of emergency, major strikes, epidemics, etc.), prohibitive measures
          of state bodies (prohibition of transportation, currency restrictions, international sanctions trade ban,
          etc.). During this time, the parties do not have mutual claims, and each of the parties assumes its own risk
          of the consequences of force majeure.</p>
        <h3 className="policy_article">Article 11 • Contract time.</h3>
        <p><span className="subArticle">11.1.</span> This agreement comes into force from the moment of applying to IP Oleinikov S.N. and placing an
          order, and ends with the full fulfillment of obligations by the parties.</p>
        <div className="blur_container"/>
      </div>
      <HookahFooter/>
    </div>
  );
}