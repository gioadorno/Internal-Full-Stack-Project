import { OuterDiv, InnerDiv, TitleDiv, FormTitle, FormBody, InputBox, QuestionDiv, Question, DescriptionDiv, Description, InputDiv, Input, ButtonDiv, Button, EmptyDiv, ImageDiv, Img } from "./styles";
import FileBase from 'react-file-base64';
import CloseIcon from '@mui/icons-material/Close';
import { createBook } from "../../../../../../actions/books";
import { useState } from "react";
import { useDispatch } from "react-redux";


const BookForm = ({ questions, description, formTitle, classes, style, inputType, submit }) => {

    // Upload Photo
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


        // Get Input Values


        const [postBook, setPostBook] = useState({
            bookName: '',
            bookAuthor: '',
            bookLink: '',
            bookPhoto: '',
        });
    


        // Submit Form
        const dispatch = useDispatch();

        const handleSubmit = (e) => {
            console.log(postBook);
            dispatch(createBook(postBook))
        };


        // Close(X) Button
        const hoverRed = () => {
            document.querySelector('.closeButton').style.color = 'red';
        };


        const mouseOut = () => {
            document.querySelector('.closeButton').style.color = 'white';
        };

        const closeForm = () => {
            document.querySelector('.form').style.display = 'none';
        };

    return (
        <OuterDiv className={classes.outerDiv}>
            <CloseIcon className={classes.closeButton} style={style.closeButton} onMouseOver={hoverRed} onMouseOut={mouseOut} onClick={closeForm} />
            <InnerDiv>
                <TitleDiv>
                    <FormTitle> 
                        {formTitle}
                    </FormTitle>
                </TitleDiv>
                <FormBody onSubmit={handleSubmit}>
                    <InputBox>
                        <QuestionDiv>
                            <Question>
                                {questions.bookTitle}
                            </Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                            <Description>
                                {description.bookTitle}
                            </Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostBook({ ...postBook, bookName: e.target.value })}>
                            </Input>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>
                                {questions.bookAuthor}
                            </Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                            <Description>
                                {description.bookAuthor}
                            </Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.text} onChange={e => setPostBook({ ...postBook, bookAuthor: e.target.value })}>
                            </Input>
                        </InputDiv>
                    </InputBox>
                    <InputBox>
                        <QuestionDiv>
                            <Question>
                                {questions.bookLink}
                            </Question>
                        </QuestionDiv>
                        <DescriptionDiv>
                            <Description>
                                {description.bookLink}
                            </Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <Input type={inputType.url} onChange={e => setPostBook({ ...postBook, bookLink: e.target.value })}>
                            </Input>
                        </InputDiv>
                    </InputBox>
                    <InputBox  style={style.imageBox}>
                        <QuestionDiv>
                            <Question>
                                {questions.bookPhoto}
                            </Question>
                        </QuestionDiv>
                        <ImageDiv>
                            <Img src={postBook.bookPhoto} />
                        </ImageDiv>
                        <DescriptionDiv>
                            <Description>
                                {description.bookPhoto}
                            </Description>
                        </DescriptionDiv>
                        <InputDiv>
                            <FileBase type={inputType.file} onDone={({base64}) => setPostBook({ ...postBook, bookPhoto: base64  })} onChange={fileHandler} multiple={false}  />
                        </InputDiv>
                    </InputBox>
                    <ButtonDiv>
                        <Button>
                            {submit}
                        </Button>
                    </ButtonDiv>
                    <EmptyDiv />
                </FormBody>
            </InnerDiv>
        </OuterDiv>
    )
}


BookForm.defaultProps = {
    inputType: {
        file: 'file',
        text: 'text',
        url: 'url'
    },
    classes: {
        closeButton: 'closeButton',
        outerDiv: 'form',
    },
    formTitle: 'Submit a Book Recommendation',
    questions: {
        bookTitle: 'Book Title',
        bookAuthor: 'Book Author',
        bookLink: 'Link to Purchase Book',
        bookPhoto: 'Photo of Book'
    },
    description: {
        bookTitle: 'Title of the Book',
        bookAuthor: 'Author of Book',
        bookLink: 'Provide a link to purchase (Amazon, etc)',
        bookPhoto: 'Upload a photo of the book to be displayed on homepage'
    },
    style: {
        closeButton: {
            position: 'absolute',
            top: '1em',
            left: '1em',
            zIndex: "2",
            width: '2em',
            height: '2em',
            color: 'white'
        },
        imageBox: {
            height: '45em'
        }
    },
    submit: 'Submit',
    
}

export default BookForm
