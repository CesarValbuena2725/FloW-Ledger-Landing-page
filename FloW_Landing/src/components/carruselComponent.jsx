import styled from "styled-components";
import { useState } from "react";
import BasicButton from "./basicButton";
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';

const CommentBox = styled.h4`
    color: #0B3D91;
`;

const TitleBox = styled.p`
    color: #0B3D91;
    font-weight: bold;
`;

const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 35%;
    max-width: 160px;
    height: auto;
    border-radius: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 140px;
      margin: 1rem 0;
    }

    @media (min-width: 1024px) {
      width: 120px;
      margin: 0 1rem 0 0;
    }
`;

const Section = styled.section`
    padding: 0% 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px){
      padding: 0% 12%;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 2% 0%;
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
        picture: 'William.jpeg',
        charge: 'Co-Founder, COO & CFO',
        comment: 'As an undergraduate Industrial Engineering student specializing in Business Intelligence and Operations Optimization, I have worked with colleagues and employees whose sense of ownership was sometimes low due to a lack of integration within teams or organizations with misaligned goals (where employees` goals differ from the company`s mission and vision). This often creates a short-sighted perception of strong performance, while overlooking either requirements or costs. At FloW Ledger, we encourage coworkers to take initiative, go the extra mile, and care for the company’s resources, which should be used to serve people and support sustainable growth.'
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
                    onClick={handlePrevious}
                    ariaLabel={"Previous testimonial"}
                    backgroundCol={'#3069CB'}
                    borderCol={'#153163'}
                    text={<ArrowBigLeftDash />}
                />
                <BasicButton 
                    onClick={handleNext}
                    ariaLabel={"Next testimonial"}
                    backgroundCol={'#3069CB'}
                    borderCol={'#153163'}
                    text={<ArrowBigRightDash />}
                />
            </ButtonsContainer>
        </Section>
    )
}