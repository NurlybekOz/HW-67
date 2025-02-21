import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import { pinCode, pinDelete, pinEnter } from "./codeSlice.ts";

const Code = () => {
    const codeValue = useSelector((state: RootState) => state.code.value);
    const isAccessGranted = useSelector((state: RootState) => state.code.isAccessGranted);
    const dispatch = useDispatch();

    const inputStyle = {
        borderColor: isAccessGranted ? 'green' : codeValue === "Access Denied" ? 'red' : 'black',
        color: isAccessGranted ? 'green' : codeValue === "Access Denied" ? 'red' : 'black',
    };

    return (
        <div className='code'>
            <h3 className='pinCode' style={inputStyle}>{codeValue}</h3>

            <div className='buttons'>
                <button type='button' onClick={() => dispatch(pinCode('7'))}>7</button>
                <button type='button' onClick={() => dispatch(pinCode('8'))}>8</button>
                <button type='button' onClick={() => dispatch(pinCode('9'))}>9</button>
                <button type='button' onClick={() => dispatch(pinCode('4'))}>4</button>
                <button type='button' onClick={() => dispatch(pinCode('5'))}>5</button>
                <button type='button' onClick={() => dispatch(pinCode('6'))}>6</button>
                <button type='button' onClick={() => dispatch(pinCode('3'))}>3</button>
                <button type='button' onClick={() => dispatch(pinCode('2'))}>2</button>
                <button type='button' onClick={() => dispatch(pinCode('1'))}>1</button>
                <button type='button' onClick={() => dispatch(pinDelete())}>del</button>
                <button type='button' onClick={() => dispatch(pinCode('0'))}>0</button>
                <button type='button' onClick={() => dispatch(pinEnter())}>E</button>
            </div>
        </div>
    );
};

export default Code;
