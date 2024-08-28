import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const ChangeProfile = ()=>{
    const {username, setUsername} = useContext(AppContext);
const [newUserName, setNewUserName]= useState(username);

    return(
        <div>
            <input 
            type='text' 
            value={newUserName}
            onChange={(e)=>setNewUserName(e.target.value)}>
            </input>
            <button onClick={()=>setUsername(newUserName)}>Change username</button>
        </div>
    )
}


export default ChangeProfile;