import { OuterDiv, LeftDiv, RightDiv, LeftTitle, LeftBodyDiv, BookDiv, LeftImageDiv, BookImage, BookTitle, BookLink, By, Author, RightTitle, BookButton, RightInnerDiv, PostDiv, PostTitleDiv, PostTitle, Date, Post, NameDiv, Name, Market } from './styles';
import BookForm from './BookForm/BookForm';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../../../../actions/books';
import { getProps } from '../../../../../actions/properties';
import { getAnnouncements } from '../../../../../actions/announcements';

const TopRow = ({ title, by, button, bookLink }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    },[])

    useEffect(() => {
        dispatch(getProps());
    },[])

    useEffect(() => {
        dispatch(getAnnouncements());
    },[])

    const test = useSelector((state) => state);
    console.log(test)

    const books = useSelector((state) => state.books);


    const announcements = useSelector((state) => state.announcements);
    console.log(announcements)

    // Opens Book Form
    const openForm = () => {

        document.querySelector('.form').style.display = 'flex';
    }



    return (
        <OuterDiv>
            <BookForm />
            <LeftDiv>
                <LeftTitle>{title.leftTitle}</LeftTitle>
                <LeftBodyDiv>
                    {books.map((book) => {
                        return(
                        <BookDiv key={uuidv4()}>
                            <LeftImageDiv> 
                                <BookImage key={uuidv4()} src={book.bookPhoto}/>
                            </LeftImageDiv>
                            <BookTitle key={uuidv4()}> 
                                {book.bookName}
                            </BookTitle>
                            <By key={uuidv4()}>
                                {by}
                            </By>
                            <Author key={uuidv4()}>
                                {book.bookAuthor}
                            </Author>
                            <BookLink key={uuidv4()} href={book.bookLink} >
                                {bookLink}
                            </BookLink>
                        </BookDiv>
                            )
                    })}
                </LeftBodyDiv>
                <BookButton className={button.class} onClick={openForm}>
                    {button.placeholder}
                </BookButton>
            </LeftDiv>
            <RightDiv>
                <RightTitle>
                    {title.rightTitle}
                </RightTitle>
                <RightInnerDiv>
                    {announcements.map((announcement) => {
                        return (
                    <PostDiv key={uuidv4()}>
                        <PostTitleDiv key={uuidv4()}>
                            <PostTitle key={uuidv4()}>
                                {announcement.title}
                            </PostTitle>
                        </PostTitleDiv>
                        <Post key={uuidv4()}>
                            {announcement.description}
                        </Post>
                        <NameDiv key={uuidv4()}>
                            <Name key={uuidv4()}>
                                {announcement.name + ' - ' + announcement.department}
                            </Name>
                        </NameDiv>
                        <Date key={uuidv4()}>
                            {announcement.date}
                        </Date>
                    </PostDiv>
                        )
                    })}
                </RightInnerDiv>
            </RightDiv>
        </OuterDiv>
    )
}

TopRow.defaultProps = {
    title: {
        leftTitle: 'Book Recommendations',
        rightTitle: 'Announcements'
    },
    by: 'by',
    button: {
        placeholder: 'Submit a Book',
        class: 'book'
    },
    bookLink: 'Link to Purchase',
    announcement: {
        title: {
            potluck: 'Pot Luck'
        },
        date: {
            today: ' - 11/17/2021'
        },
        post: {
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    }
}

export default TopRow
