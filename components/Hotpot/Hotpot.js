import "./Hotpot.css";

import { useNavigate } from "react-router-dom";
import { set, ref as ref_database } from "firebase/database";
import DialogueBox from "../DialogueBox/DialogueBox";

function Hotpot({database}) {
    const setDecision = (decision) => {
        set(ref_database(database, "Hotpot"), {
            decision : decision
        });
        document.getElementById("message").classList.toggle('fade-out');
    }

    const ingredientsAdded = [];
    const addIngredient = (ingredient) => {
        if (!ingredientsAdded.includes(ingredient)) {
            if (ingredient === "soup" || ingredientsAdded.includes("soup")) {
                document.getElementById(ingredient).classList.add("fade-in");
                document.getElementById(ingredient + "-button").classList.add("fade-out");
                ingredientsAdded.push(ingredient);
            }
        }

        if (ingredientsAdded.length >= 4) {
            document.getElementById("message").classList.add('fade-in');
            document.getElementById("back-button").classList.add('fade-in');
        }
    }

    const navigate =  useNavigate();

    let dialogue = [
        "Mmmmm, I'm feeling hungry... Lets have some Hot Pot!",
        "Click the ingredients below to add them to the Hot Pot",
    ];

    return (
        <div className={"center background border contain"} id={"hotpot-background"}>
            <div className={"center card contain shadow"} id={"hotpot-card"}>
                <div className={"contain"} id={"soup-button"} onClick={() => addIngredient("soup")}></div>
                <div className={"contain"} id={"coriander-button"}
                     onClick={() => addIngredient("coriander")}></div>
                <div className={"contain"} id={"mushroom-button"}
                     onClick={() => addIngredient("mushroom")}></div>
                <div className={"contain"} id={"beef-button"} onClick={() => addIngredient("beef")}></div>
            </div>
            <div id={"overlay"}>
                <div className={"contain"} id={"soup"}></div>
                <div className={"contain"} id={"coriander"}></div>
                <div className={"contain"} id={"mushroom"}></div>
                <div className={"contain"} id={"beef"}></div>
                <div id={"message"}>
                    <div className={"contain"} id={"message-text"}></div>
                    <div className={"contain"} id={"yes-button"} onClick={() => setDecision("yes")}></div>
                    <div className={"contain"} id={"no-button"} onClick={() => {
                        setDecision("no")
                    }}></div>
                </div>
                <div className={"contain"} id={"back-button"} onClick={() => navigate("/")}></div>
            </div>
            <DialogueBox dialogue={dialogue} index={0} icon={"none"}/>
        </div>
    )
}

export default Hotpot;
