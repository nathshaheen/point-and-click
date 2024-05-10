import "./Date.css";

import DialogueBox from "../DialogueBox/DialogueBox";

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ref as ref_database, set} from "firebase/database";

function Date({database}) {
    const navigate = useNavigate();

    const [dialogue, setDialogue] = useState([
        "Oh! What's this, a letter?",
        "Lets open it and see whats inside!",
    ]);

    const [currentState, setCurrentState] = useState("Question")

    const [date, setDate] = useState("");
    let selected = [];

    const submitForm = () => {
        set(ref_database(database, date + "-" + currentState), {
            selected,
        });

        if (currentState === "Day") {
            setCurrentState("Food");
        } else if (currentState === "Food") {
            setCurrentState("Dessert");
        } else if (currentState === "Dessert") {
            setCurrentState("Activity");
        } else if (currentState === "Activity") {
            setCurrentState("Thankyou");
        }
    }

    return (
        <div className={"center background border contain"} id={"date-background"}>
            <div className={"center card contain shadow"} id={"date-card"}>
                <>
                    {currentState === "Question" &&
                        <div className={"center contain date-card-content"} id={"date-card-message"}>
                            <div className={"contain date-button"} id={"date-yes-button"} onClick={() => setCurrentState("Day")}></div>
                            <div className={"contain date-button"} id={"date-no-button"} onClick={() => navigate("/")}></div>
                        </div>
                    }
                    {currentState === "Day" &&
                        <div className={"center contain date-card-content"} id={"date-card-day"}>
                            <input type="date" className={"date-button responsive-text"} id={"day-input"} onChange={() => setDate(document.getElementById("day-input").value)}/>
                            <button className={"date-button responsive-text day-submit-button"} onClick={submitForm}>Submit</button>
                        </div>
                    }
                    {currentState === "Food" &&
                        <div className={"center contain date-card-content"} id={"date-card-food"}>
                            <div id={"date-checkbox"}>
                                <input type="checkbox" name={"hotpot"} onClick={() => selected.push("hotpot")}/>
                                <input type="checkbox" name={"korean"} onClick={() => selected.push("korean")}/>
                                <input type="checkbox" name={"seafood"} onClick={() => selected.push("seafood")}/>
                                <input type="checkbox" name={"sushi"} onClick={() => selected.push("sushi")}/>
                                <input type="checkbox" name={"thai"} onClick={() => selected.push("thai")}/>
                                <input type="checkbox" name={"yumcha"} onClick={() => selected.push("yumcha")}/>
                            </div>
                            <button className={"date-button responsive-text"} id={"submit-button"} onClick={submitForm}>Submit</button>
                        </div>
                    }
                    {currentState === "Dessert" &&
                        <div className={"center contain date-card-content"} id={"date-card-dessert"}>
                            <div id={"date-checkbox"}>
                                <input type="checkbox" onClick={() => selected.push("churros")}/>
                                <input type="checkbox" onClick={() => selected.push("fruitsalad")}/>
                                <input type="checkbox" onClick={() => selected.push("icecream")}/>
                                <input type="checkbox" onClick={() => selected.push("meetfresh")}/>
                                <input type="checkbox" onClick={() => selected.push("waffles")}/>
                                <input type="checkbox" onClick={() => selected.push("yochi")}/>
                            </div>
                            <button className={"date-button responsive-text"} id={"submit-button"} onClick={submitForm}>Submit</button>
                        </div>
                    }
                    {currentState === "Activity" &&
                        <div className={"center contain date-card-content"} id={"date-card-activity"}>
                            <div id={"date-checkbox"}>
                                <input type="checkbox" onClick={() => selected.push("arcade")}/>
                                <input type="checkbox" onClick={() => selected.push("cinema")}/>
                                <input type="checkbox" onClick={() => selected.push("karaoke")}/>
                                <input type="checkbox" onClick={() => selected.push("longdrive")}/>
                                <input type="checkbox" onClick={() => selected.push("movienight")}/>
                                <input type="checkbox" onClick={() => selected.push("photobooth")}/>
                            </div>
                            <button className={"date-button responsive-text"} id={"submit-button"} onClick={submitForm}>Submit</button>
                        </div>
                    }
                    {currentState === "Thankyou" &&
                        <div className={"center contain date-card-content"} id={"date-card-thankyou"}>
                            <button className={"date-button responsive-text day-submit-button"} id={"date-back-button"} onClick={() => navigate("/")}>Back</button>
                        </div>
                    }
                </>
            </div>
            <DialogueBox dialogue={dialogue} index={0} icon={"none"}/>
        </div>
    )
}

export default Date;
