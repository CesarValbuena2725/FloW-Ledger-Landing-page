import styled from "styled-components"

const Title = styled.h2`
    width: 50%;
    height: auto;
    color: #FFD3D5;
    margin: 0;
`;

const Description = styled.p`
    margin: 0;
    padding: 0% 10% 10%;
    color: #0B3D91;
`;

const Image = styled.img`
    align-self: center;
    width: 35%;
    height: auto;
    border-radius: 8%;
    object-fit: fit;
`;

const Section = styled.section`
    margin: 0;
    display: flex;
    flex-direction: row;
    padding: 0% 4%;
    gap: 5%;
`;

export default function GeneralCard({ title, description, img }) {
    return (
        <>
            <Section>
                <Title>
                    {title}
                </Title>

                <Image
                    src={img}
                />
            </Section>

            <Description>
                {description}
            </Description>
        </>
    )
}