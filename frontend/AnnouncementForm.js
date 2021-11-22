import { OuterDiv, InnerDiv, TitleDiv, FormTitle, FormBody, InputBox, QuestionDiv, Question, DescriptionDiv, Description, InputDiv, Input, ButtonDiv, Button, EmptyDiv, TextArea, Select } from "./styles";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createAnnouncement } from "../../../actions/announcements";
import dotenv from 'dotenv';
dotenv.config();



const AnnouncementForm = ({ formTitle, formQuestion, description,submit, inputType, department, classes, apiKey, style }) => {



        const [file, setFile] = useState('');

        const fileHandler = (e) => {
            console.log(e.target.files[0])
            setFile(e.target.files[0])
            let reader = new FileReader();
            reader.onload = function(e) {
              setFile(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        };

        let today = new Date();

        let date = parseInt(today.getMonth()+1) + '-' + today.getDate() + "-" + today.getFullYear();


            // Get Input Values


    const [postAnnouncementData, setAnnouncementData] = useState({
        title: '',
        description: '',
        name: '',
        department: '',
        date: date
    })


    const dispatch = useDispatch();

    


        // Submit Form
        const handleSubmit = (e) => {
            dispatch(createAnnouncement(postAnnouncementData))
        };







    return (
        <OuterDiv>
            <InnerDiv >
                <TitleDiv>
                    <FormTitle>{formTitle}</FormTitle>
                </TitleDiv>
                <FormBody onSubmit={handleSubmit} >
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.title}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.title}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setAnnouncementData({ ...postAnnouncementData, title: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.description}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.description}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <TextArea onChange={(e) => setAnnouncementData({ ...postAnnouncementData, description: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.name}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.name}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setAnnouncementData({ ...postAnnouncementData, name: e.target.value })} />
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>{formQuestion.department}</Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                        <Description>{description.department}</Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Select onChange={e => setAnnouncementData({ ...postAnnouncementData, department: e.target.value })}>
                                    <option />
                                    <option value={department.sales}>
                                        {department.sales}
                                    </option>
                                    <option value={department.itDepartment}>
                                        {department.itDepartment}
                                    </option>
                                    <option value={department.operations}>
                                        {department.operations}
                                    </option>
                                    <option value={department.hr}>
                                        {department.hr}
                                    </option>
                                    <option value={department.management}>
                                        {department.management}
                                    </option>
                            </Select>
                        </InputDiv>
                    </InputBox>
                    <ButtonDiv>
                        <Button type='submit'>
                            {submit}
                        </Button>
                        <EmptyDiv />
                    </ButtonDiv>
                    
                </FormBody>
            </InnerDiv>
        </OuterDiv>
    )
}

AnnouncementForm.defaultProps = {
    formTitle: 'Announcement Form (Homepage)',
    submit: 'Submit',
    classes: {
        address: 'address',
        outerDiv: 'form',
        closeButton: 'closeButton',
        phone: 'phone',
        phone2: 'phone2',
        vesting: 'vesting',
        contractPrice: 'contractPrice',
        emd: 'emd',
    },
    formQuestion: {
        title: 'Title/Topic',
        description: 'Your Description',
        name: 'Your Name',
        department: 'Department'
    },
    description: {
        title: 'Announcement Title or Topic',
        description: 'Type in your details/description',
        name: 'Type in your name',
        department: 'Select which department you are in'
    },
    inputType: {
        text: 'text',
        radio: 'radio',
        email: 'email',
        date: 'date',
        select: 'select',
        number: 'number',
        url: 'url',
        file: 'file',
        textArea: 'textarea'
    },
    department: {
        sales: 'Sales Department',
        itDepartment: 'IT Department',
        operations: 'Operations Department',
        hr: 'HR Department',
        management: 'Management'
    }
};

export default AnnouncementForm
