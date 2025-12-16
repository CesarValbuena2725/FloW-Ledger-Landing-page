import styled from "styled-components";
import { useState } from "react";
import BasicButton from "./basicButton";

const CommentBox = styled.h4`
    color: #FFD3D5;
`;

const TitleBox = styled.p`
    color: #E49BA6;
    font-weight: bold;
`;

const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 25%;
    height: auto;
    border-radius: 100%;
    object-fit: fit;
`;

const Section = styled.section`
    padding: 0% 15%;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 5% 0%;
`;

const Comments = [
    {
        name: 'Cesar Valbuena',
        picture: 'profilepic.jpg',
        charge: 'Co-Founder, CEO & CTO',
        comment: 'As a software engineer, I`ve experienced first-hand the stress that comes when costs start spiraling out of control. In today`s industry, increasing cloud infrastructure spending has become the norm—often without a clear reason, simply because "it just works". At FloW Ledger, we say NO. Just because something works doesn`t mean it`s the right solution. Our mission is to help your team make accountable decisions and eliminate unnecessary cloud expenses, so you can focus on what really matters: growing your business'
    },
    {
        name: 'William Avendaño',
        picture: 'profilepisc.jpg',
        charge: 'Co-Founder, COO & CFO',
        comment: 'Text here'
    }
]

export default function CarruselComponent() {

    const [index, setIndex] = useState(0)
    const comments = Comments[index]

    function handleNext() {
        setIndex((prevIndex) => (prevIndex + 1) % Comments.length)
    }

    function handlePrevious() {
        setIndex((prevIndex) =>
            prevIndex === 0 ? Comments.length - 1 : prevIndex - 1
        )
    }

    return (
        <Section>
            <CommentBox>
                "{comments.comment}"
            </CommentBox>
            <hr className="separator" style={{width: "20%", marginBottom: '5%'}}/>
            <Image
                src={comments.picture}
                alt="profile pic"
            />
            <TitleBox>
                {comments.name}, {comments.charge} of FloW Ledger
            </TitleBox>
            <ButtonsContainer>
                <BasicButton 
                    onClick={handleNext}
                    backgroundCol={'#92487A'}
                    borderCol={'#E49BA6'}
                    text={'<'}
                />
                <BasicButton 
                    onClick={handlePrevious}
                    backgroundCol={'#92487A'}
                    borderCol={'#E49BA6'}
                    text={'>'}
                />
            </ButtonsContainer>
        </Section>
    )
}