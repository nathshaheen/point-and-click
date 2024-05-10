import "./Drive.css"
import DialogueBox from "../DialogueBox/DialogueBox";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Drive() {
    const navigate = useNavigate();

    const [currentState, setCurrentState] = useState("Side");

    const [platesAdded, setPlatesAdded] = useState([]);
    const addPlates = (plate) => {
        platesAdded.push(plate);
    }

    const setSideView = () => {
        setCurrentState("Side");
        if (platesAdded.includes("Front") && platesAdded.includes("Back")) {
            setDialogue(["Okay, off we go!"]);
            document.getElementById("dialogue-container").style.display = "flex";
        }
    }

    const addFrontPlate = () => {
        document.getElementById("drive-front-l-plate").style.display = "block";
        addPlates("Front");
    }

    const addBackPlate = () => {
        document.getElementById("drive-back-l-plate").style.display = "block";
        addPlates("Back");
    }

    const [dialogue, setDialogue] = useState([
        "Surprise! it's a Tesla!",
        "Lets take it for a spin!",
        "Click the front and back number plates to put your L plates on!"
    ]);

    return (
        <div className={"center background border contain"} id={"drive-background"}>
            {currentState === "Side" &&
                <div className={"center card contain shadow"} id={"drive-card-side"}>
                    <div className={"drive-button"} id={"drive-side-front-button"} onClick={() => setCurrentState("Front")}></div>
                    <div className={"drive-button"} id={"drive-side-back-button"} onClick={() => setCurrentState("Back")}></div>
                    <button className={"responsive-text"} id={"drive-front-back-button"} onClick={() => navigate("/")}>Back</button>
                </div>
            }
            {currentState === "Front" &&
                <div className={"center card contain shadow"} id={"drive-card-front"}>
                    <div className={"drive-button"} id={"drive-front-button"} onClick={addFrontPlate}></div>
                    <div className={"contain"} id={"drive-front-l-plate"}></div>
                    <button className={"responsive-text"} id={"drive-front-back-button"} onClick={setSideView}>Back</button>
                </div>
            }
            {currentState === "Back" &&
                <div className={"center card contain shadow"} id={"drive-card-back"}>
                    <div className={"drive-button"} id={"drive-back-button"} onClick={addBackPlate}></div>
                    <div className={"contain"} id={"drive-back-l-plate"}></div>
                    <button className={"responsive-text"} id={"drive-front-back-button"} onClick={setSideView}>Back</button>
                </div>
            }
            <DialogueBox dialogue={dialogue} index={0} icon={"none"}/>
        </div>
    );
}

export default Drive;