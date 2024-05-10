import './App.css';
import Login from './components/Login/Login';
import Bedroom from './components/Bedroom/Bedroom';
import Calendar from './components/Calendar/Calendar';
import Date from './components/Date/Date';
import Hotpot from './components/Hotpot/Hotpot';
import Drive from "./components/Drive/Drive";

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HashRouter, Route, Routes} from "react-router-dom";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: 'AIzaSyDwlp49vvrrq25pd4JF5UUQmGTNfDFEGGk',
    authDomain: 'maze-heidi.firebaseapp.com',
    projectId: 'maze-heidi',
    storageBucket: "maze-heidi.appspot.com",
    messagingSenderId: '8889023647',
    appId: '1:8889023647:web:5aa9a220bb3c2eb6a7f6aa',
    databaseURL: "https://maze-heidi-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function App() {
    const [user, setUser] = useAuthState(auth);

    return (
        <div className={"center"}>
            <HashRouter>
                <Routes>
                    <Route index element={user ? <Bedroom /> : <Login auth={auth}/>}/>
                    <Route path="/calendar" element={<Calendar />}/>
                    <Route path="/date" element={<Date database={database}/>}/>
                    <Route path="/drive" element={<Drive/>}/>
                    <Route path="/hotpot" element={<Hotpot database={database}/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
