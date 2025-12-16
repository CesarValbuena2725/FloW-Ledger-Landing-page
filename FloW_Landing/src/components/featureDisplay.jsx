import styled from 'styled-components'

const DisplayContainer = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 5% 15%;
`;

const FeatureImage = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
`;

const DisplayedTitle = styled.h3`
    margin: 0%;
    color: #E49BA6;
    font-weight: bold;
    padding: 15% 0%;
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: fit;
`;

const DisplayedText = styled.p`
    margin: 0%;
    color: #E49BA6;
    font-size: 1.2rem;
`;

export default function FeatureDisplay ({img, title, text}){

    return (
        <DisplayContainer>

            <FeatureImage>
                <Image src={img} alt="" />
            </FeatureImage>
                
            <DisplayedTitle>
                {title}
            </DisplayedTitle>

            <DisplayedText>
                {text}
            </DisplayedText>

        </DisplayContainer>
    )
}