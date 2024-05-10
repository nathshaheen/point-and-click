import "./Bedroom.css";

import { useNavigate } from "react-router-dom";
import {useState} from "react";
import DialogueBox from "../DialogueBox/DialogueBox";

function Bedroom() {
    const navigate = useNavigate();

    const [dialogue, setDialogue] = useState([
        "Wow, now this is an upgrade!",
        "I wonder what else in new...",
        "Lets have a look around!"
    ]);

    const [dialogueIcon, setDialogueIcon] = useState("none");

    const poohMessage = () => {
        let dialogueLines = [
            "You're braver than you believe, stronger than you seem, and smarter than you think!",
            "Any day spent with you is my favorite day. So, today is my favorite day!",
            "What could be more important than a little something eat?",
            "The most important thing is, even when we're apart, I'll always be with you!",
            "Rivers know this: There is no hurry. We shall get there some day!",
            "How lucky am Ito have something that makes saying goodbye so hard!"
        ];

        setDialogue([dialogueLines[Math.floor(Math.random() * 6)]]);
        document.getElementById("dialogue-container").style.display = "flex";
        setDialogueIcon("url(https://firebasestorage.googleapis.com/v0/b/maze-heidi.appspot.com/o/images%2Fbedroom%2Fpooh-dialogue.png?alt=media&token=0257fb90-491c-4057-9f1c-a21ba927c467)");
    }

    return (
        <div className={"center background contain"} id={"bedroom-background"}>
            <div className={"bedroom-button contain"} id={"date-button"} onClick={() => navigate("/date")}></div>
            <div className={"bedroom-button contain"} id={"pooh-button"} onClick={poohMessage}></div>
            <div className={"bedroom-button contain"} id={"drive-button"} onClick={() => navigate("/drive")}></div>
            <div className={"bedroom-button contain"} id={"hotpot-button"} onClick={() => navigate("/hotpot")}></div>
            <div className={"bedroom-button contain"} id={"calendar-button"}
                 onClick={() => navigate("/calendar")}></div>
            <DialogueBox dialogue={dialogue} index={0} icon={dialogueIcon}/>
        </div>
    );
}

export default Bedroom;