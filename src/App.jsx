import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <main style={{ width: 1203, height: 1024, background: "white" }}>
      <h1>Buttons</h1>
      <div className="group-37 grid-container">
        <Button text="<Button />" btnStyle="btn-371">
          Default
        </Button>
        <Button
          text="&:hover, &:focus"
          btnStyle={"btn-371 btn-372"}
          hover={true}
        >
          Default
        </Button>
      </div>
      <div className="group-36 grid-container">
        <Button text="<Button variant=”outline” />" btnStyle="btn-361">
          Default
        </Button>
        <Button
          text="&:hover, &:focus"
          btnStyle={"btn-361 btn-362"}
          hover={true}
        >
          Default
        </Button>
      </div>
      <div className="group-35 grid-container">
        <Button text="<Button variant=”text” />" btnStyle="btn-361 btn-351">
          Default
        </Button>
        <Button
          text="&:hover, &:focus"
          btnStyle={"btn-361 btn-362 btn-352"}
          hover={true}
        >
          Default
        </Button>
      </div>
      <div className="group-15 grid-container">
        <Button text="<Button disableShadow />" btnStyle="btn-151">
          Default
        </Button>
      </div>
      <div className="group-38 grid-container">
        <Button text="<Button disabled />" btnStyle="btn-381">
          Disabled
        </Button>
        <Button
          text="<Button variant=”text” disabled />"
          btnStyle={"btn-381 btn-382"}
        >
          Disabled
        </Button>
      </div>
      <div className="group-60 grid-container">
        <Button
          text="<Button startIcon=”local_grocery_store” />"
          btnStyle="btn-601"
          hasIcon={true}
        >
          Default
        </Button>
        <Button
          text="<Button endIcon=”local_grocery_store” />"
          btnStyle="btn-601 btn-602"
          hasIcon={true}
        >
          Default
        </Button>
      </div>
      <div className="group-40 grid-container">
        <Button text="<Button size=”sm” />" btnStyle="btn-401">
          Default
        </Button>
        <Button text="<Button size=”md” />" btnStyle={"btn-401 btn-402"}>
          Default
        </Button>
        <Button text="<Button size=”lg” />" btnStyle={"btn-401 btn-403"}>
          Default
        </Button>
      </div>
      <div className="group-41 grid-container">
        <Button text="<Button color=”default” />" btnStyle="btn-411">
          Default
        </Button>
        <Button text="<Button color=”primary” />" btnStyle={"btn-412"}>
          Default
        </Button>
        <Button text="<Button color=”secondary” />" btnStyle={"btn-413"}>
          Secondary
        </Button>
        <Button text="<Button color=”danger” />" btnStyle={"btn-414"}>
          Danger
        </Button>
      </div>
      <div className="group-42 grid-container">
        <Button text="&:hover, &:focus" hover={true} btnStyle="btn-421">
          Default
        </Button>
        <Button btnStyle={"btn-422"}>Default</Button>
        <Button btnStyle={"btn-423"}>Secondary</Button>
        <Button btnStyle={"btn-424"}>Danger</Button>
      </div>

      <footer>
        <br />
        <p className="footer-icons">
          Icons: https://material.io/resources/icons/?style=round
        </p>
        <br />
        <p className="footer-createdBy">
          created by <span style={{ fontWeight: "bold" }}>juani-g16</span> -
          devChallenges.io
        </p>
      </footer>
    </main>
  );
}

export default App;
