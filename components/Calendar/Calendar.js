import "./Calendar.css";
import DialogueBox from "../DialogueBox/DialogueBox";
import Flowers from "./Flowers/Flowers";
import Fireworks from "./Fireworks/Fireworks";

function Calendar() {
    let anniversaryDate = new Date("May 20, 2023 21:30:00");
    let currentDate = new Date();

    function setTimeTogether() {
        let difference = currentDate.getTime() - anniversaryDate.getTime();
        let differenceDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        let differenceHours = Math.floor(difference / (1000 * 60 * 60) - (differenceDays * 24));
        let differenceMinutes = Math.floor(difference / (1000 * 60) - ((differenceDays * 24 * 60) + (differenceHours * 60)));
        let differenceSeconds = Math.floor(difference / (1000) - ((differenceDays * 24 * 60 * 60) + (differenceHours * 60 * 60) + (differenceMinutes * 60)));
        document.getElementById("days").innerText = differenceDays.toString() + " Days... ";
        document.getElementById("hours").innerHTML = differenceHours.toString() + " Hours... ";
        document.getElementById("minutes").innerHTML = differenceMinutes.toString() + " Minutes... ";
        document.getElementById("seconds").innerHTML = differenceSeconds.toString() + " Seconds";
        document.getElementById("calendar-text").classList.add('fade-in');
        document.getElementById("calendar-flowers").classList.add('fade-in');

        if (currentDate.getDate() === 20) {
            document.getElementById("calendar-fireworks").classList.add('fade-in');
        }
    }

    let dialogue = [
        "Hey, have you ever wondered how long it has been since our anniversary?",
        "Well, I have the perfect solution...",
        "Click to reveal!",
        "(And come back every 20th for a celebration!)"
    ];

    return (
        <div className={"center background border contain"} id={"calendar-background"}>
            <div className={"center card contain shadow green-text"} id={"calendar-card"} onClick={setTimeTogether}>
                <div id={"calendar-flowers"}>
                    <Flowers/>
                </div>
                <div id={"calendar-text"}>
                    <span id={"days"}></span>
                    <span id={"hours"}></span>
                    <span id={"minutes"}></span>
                    <span id={"seconds"}></span>
                </div>
                <div id={"calendar-fireworks"}>
                    <Fireworks/>
                </div>
            </div>
            <DialogueBox dialogue={dialogue} index={0} icon={"none"}/>
        </div>
    );
}

export default Calendar;