import "./DialogueBox.css";

function DialogueBox({dialogue, index, icon}) {
    const scrollDialogue = () => {
        if (index < dialogue.length - 1) {
            index++;
            document.getElementById("dialogue-box-text").innerText = dialogue[index];
        } else {
            document.getElementById("dialogue-container").style.display = "none";
        }
    };

    return (
        <div className={"center"} id={"dialogue-container"}>
            <div className={"contain"} id={"dialogue-icon"} style={{backgroundImage: icon}}></div>
            <div className={"center contain pink-text shadow responsive-text"} id={"dialogue-box"} onClick={scrollDialogue}>
                <p id={"dialogue-box-text"}>{dialogue[index]}</p>
                <div className={"bounce contain"} id={"next-dialogue-button"}></div>
            </div>
        </div>
    );
}

export default DialogueBox;