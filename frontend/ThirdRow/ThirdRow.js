import { useState } from "react";
import { OuterDiv, RefForm, RightDiv, FormTitle, RightTitle, Department, Position, InputDiv, Question, Input, Select, ButtonDiv, Button, Error } from "./styles";
import { useDispatch } from "react-redux";
import { createReferral } from "../../../../../actions/referrals";


const ThirdRow = ({ title, department, position, question, classes, submit, errorMessage }) => {

    const [referral, setReferral] = useState({
        employeeName: '',
        refName: '',
        refNumber: '',
        refEmail: '',
        department: ''
    });



        // Format Phone Number Field (Automated for users to input numbers and insert dashes/paranthesis automatically)
        const onKey = (e) => {
            const phone = document.querySelector('.phone');
    
            let regexpr0 = /\D/g
    
            let cNum = phone.value.replace(regexpr0, "");
    
        
            //Adds parenthesis and dashes to format phone number
            if (cNum.length < 3) {
                phone.value = cNum.substring(0)
            }
            if (3 < cNum.length && cNum.length <= 6) {
                phone.value = "(" + cNum.substring(0,3) + ")-" + cNum.substring(3)
            }
            if (7 <= cNum.length) {
                phone.value = "(" + cNum.substring(0,3) + ")-" + cNum.substring(3, 6) + "-" + cNum.substring(6)
            }
    
    
            let rawNumbers = phone.value.replace(regexpr0, "");
    
    
            if ( rawNumbers.length > 9 && e.key !== "Backspace") {
                e.preventDefault()
            };
    
        };

                // Error Message if Email Invalid
                const emailError = () => {

                    document.querySelector('.emailInput').value.includes('@') ? document.querySelector('.errorMessage').style.display = 'none' : document.querySelector('.errorMessage').style.display = 'flex';
                }
                
        
                const removeError = () => {
                        document.querySelector('.errorMessage').style.display = 'none';
                }


        const dispatch = useDispatch();

        // Submit Form
        const handleSubmit = () => {
            dispatch(createReferral(referral))
        };

    return (
        <OuterDiv>
            <RefForm onSubmit={handleSubmit}>
                <FormTitle>
                    {title.form}
                </FormTitle>
                <InputDiv>
                    <Question>
                        {question.employeeName}
                    </Question>
                    <Input onChange={e => setReferral({ ...referral, employeeName: e.target.value })} />
                </InputDiv>
                <InputDiv>
                    <Question>
                        {question.refName}
                    </Question>
                    <Input onChange={e => setReferral({ ...referral, refName: e.target.value })} />
                </InputDiv>
                <InputDiv>
                    <Question>
                        {question.refNumber}
                    </Question>
                    <Input className={classes.phone} onKeyDown={onKey} onChange={e => setReferral({ ...referral, refNumber: e.target.value })} />
                </InputDiv>
                <InputDiv>
                    <Question>
                        {question.refEmail}
                    </Question>
                    <Error className={classes.errorMessage}>
                        {errorMessage}
                    </Error>
                    <Input className={classes.emailInput} onBlur={emailError} onFocus={removeError}  onChange={e => setReferral({ ...referral, refEmail: e.target.value })} />
                </InputDiv>
                <InputDiv>
                    <Question>
                        {question.position}
                    </Question>
                <Select onChange={e => setReferral({ ...referral, department: e.target.value })} >
                    <option />
                    <option>
                        {department.sales}
                    </option>
                </Select>
                </InputDiv>
                <ButtonDiv>
                    <Button>
                        {submit}
                    </Button>
                </ButtonDiv>
            </RefForm>
            <RightDiv>
                <RightTitle>
                    {title.positions}
                </RightTitle>
                <Department>
                    {department.sales}
                </Department>
                <Position>
                    {position.dispo}
                </Position>
                <Position>
                    {position.acq}
                </Position>
            </RightDiv>
        </OuterDiv>
    )
}

ThirdRow.defaultProps = {
    title: {
        form: 'Employee Referral Form',
        positions: 'Positions Open for Hire'
    },
    department: {
        sales: 'Sales',
        it: 'IT',
        ops: 'Operations',
        hr: 'HR'
    },
    position: {
        dispo: 'Dispositions',
        acq: 'Acquisitions'
    },
    question: {
        employeeName: 'Your Name',
        refName: 'Referral Name',
        refNumber: "Referral's Phone Number",
        refEmail: "Referral's Email",
        position: 'Department Referring To'
    },
    classes: {
        phone: 'phone',
        emailInput: 'emailInput',
        errorMessage: 'errorMessage',
    },
    submit: 'Submit',
    errorMessage: 'Invalid: Email Address does not contain @'
}

export default ThirdRow
