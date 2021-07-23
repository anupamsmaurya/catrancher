import { useState } from "react";
import "./feedback-dialog.scss";

interface FeedbackProps {
    heading: string,
    message: string
}

const FeedbackDialog: React.FC<FeedbackProps> = ({heading, message}) => {

    const [hide, setHide] = useState(false)

    if(hide) return <></>
    return (
        <div className='feedback'>
            <h4>{heading}</h4>
            <div>{message}</div>
            <button onClick={()=> setHide(true)}>OK</button>
        </div>
    );
}

export default FeedbackDialog;