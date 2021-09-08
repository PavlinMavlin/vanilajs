import React, {useState} from 'react';
import {ModalQuestion} from "./ModalQuestion";

type ModalQuestionPropsType = {
    modalName: string
    disabled?: boolean
    onButtonModal: () => void
}

 export const ModalQuestionContainer = ({modalName, disabled, onButtonModal}: ModalQuestionPropsType) => {
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState(false);

    const setTrue = () => {
        //setAnswer(true);
        setShow(false);
        onButtonModal()
    };
    const setFalse = () => {
        setAnswer(false);
        setShow(false);
    };

    return (
        <>
            <div>
                <button onClick={() => setShow(true)} disabled={disabled}>{modalName}</button>
                {answer ? <span>Yes</span> : <span>No</span>}
            </div>

            <ModalQuestion
                show={show}

                setTrue={setTrue}
                setFalse={setFalse}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
            />
        </>
    );
};
