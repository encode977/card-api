import "./App.css";
import Card from "./Card";

function App() {
  return (
    //BEM Conventions
    <div className="app">
      <h2>
        A collective list of free APIs for use in
        <br />
        software and web development
      </h2>
      <div className="app__search">
        <input type="text" placeholder="Find development, games, images APIs" />
      </div>
      <h3 className="app__features">Features APIs of this week</h3>
      <div className="app__card">
        <Card
          avatar="https://hunter.io/images/icon_512x512.png"
          title="Hunter"
          caption="Data access"
          text="Hunter API makes it easy to find or verify professional email
          addresses."
        />
        <Card
          avatar="https://assets.stickpng.com/images/58482bb9cef1014c0b5e4a31.png"
          title="Twilo"
          caption="Data access"
          text="Send and receive SMS and MMS messages as well as query meta-data about text messages "
        />
        <Card
          avatar="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Whatsapp-256.png"
          title="Whatsapp Business"
          caption="Automation"
          text="Hunter API makes it easy to find or verify professional email addresses."
        />
        <Card
          avatar="https://cdn.freebiesupply.com/logos/large/2x/stripe-2-logo-png-transparent.png"
          title="Stripe"
          caption="Data access"
          text="Create, retrieve, update, and delete your typeforms, themes, and images."
        />
        <Card
          avatar="https://avatars.slack-edge.com/2018-11-08/474974333636_e8909f5ca3dd60c24591_512.png"
          title="Typeform"
          caption="Data access"
          text="Create, retrieve, update, and delete your typeforms, themes, and images."
        />
        <Card
          avatar="https://play-lh.googleusercontent.com/OoegseHhyZMW1T24gPLOPkzBoYo_riX_vqztSIJCqWJPkW8EBx7d4MzO_EOpk0_11w"
          title="BlaBlaCar"
          caption="Automation"
          text="Customize the Asana experience, leverage your data with the Asana API."
        />
        <Card
          avatar="https://www.flaticon.com/svg/static/icons/svg/1312/1312139.svg"
          title="Facebook Business"
          caption="Data access"
          text="Create, retrieve, update, and delete your typeforms, themes, and images."
        />
        <Card
          avatar="https://robertkatai.com/wp-content/uploads/2019/01/wsi-imageoptim-mailchimp-logo-1-1-560x385.png"
          title="Mailchimp"
          caption="Automation"
          text="Email marketing, ads, landing pages, and CRM tools to grow your business on your terms. "
        />
      </div>
    </div>
  );
}

export default App;
