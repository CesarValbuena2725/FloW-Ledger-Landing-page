import styled from "styled-components"
import { useRef, useEffect } from 'react'

const Section = styled.section`
    margin: 0;
    padding: 5% 6%; /* increased horizontal padding */
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr auto;
    /* Mobile: title and image in the first row, description spans full width below */
    grid-template-areas:
      "title image"
      "description description";
    align-items: start;

    @media (min-width: 768px) and (max-width: 1023px){
      /* Tablet: constrain image width and align center */
      padding: 4% 6%;
      grid-template-columns: 1fr 360px;
      grid-template-areas: "left image";
      gap: 1rem;
      align-items: center;
    }

    @media (min-width: 1024px){
      /* Desktop: image matches left column height */
      padding: 4% 8%;
      grid-template-columns: 1fr 520px;
      grid-template-areas: "left image";
      gap: 1.5rem;
      align-items: stretch;
    }
`;

const LeftColumn = styled.div`
  display: contents; /* transparent on mobile so grid placement of children stays the same */

  @media (min-width: 768px) and (max-width: 1023px){
    display: flex;
    flex-direction: column;
    grid-area: left;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (min-width: 1024px){
    display: flex;
    flex-direction: column;
    grid-area: left;
    justify-content: center;
    gap: 0.75rem;
  }
`;

const Title = styled.h2`
    grid-area: title;
    margin: 0;
    color: #153163;
    font-weight: 800;
    line-height: 1.05;

    @media (min-width: 768px) and (max-width: 1023px){
      /* inside LeftColumn on tablet */
      grid-area: none;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
    }

    @media (min-width: 1024px){
      grid-area: none;
      margin-bottom: 0.5rem;
      font-size: 2.4rem;
    }
`;

const Description = styled.p`
    grid-area: description;
    margin: 0;
    padding: 0.75rem 0 0 0;
    color: #0B3D91;
    font-size: 1rem;

    @media (min-width: 768px) and (max-width: 1023px){
      grid-area: none;
      padding: 0.5rem 0 0 0;
      font-size: 1rem;
    }

    @media (min-width: 1024px){
      grid-area: none;
      padding: 0.75rem 0 0 0;
      font-size: 1.05rem;
    }
`;

const Image = styled.img`
    grid-area: image;
    width: 140px;
    height: auto;
    border-radius: 8%;
    object-fit: fit;
    align-self: center;
    justify-self: center;
    /* never exceed the visual height of the left column (title + description) */
    max-height: var(--left-height, none);

    @media (min-width: 768px) and (max-width: 1023px){
      width: auto;
      max-width: 360px;
      height: auto;
      max-height: var(--left-height, 360px);
      align-self: center;
      justify-self: end;
    }

    @media (min-width: 1024px){
      width: auto;
      max-width: 520px;
      height: 80%; /* prefer to stretch but constrained by max-height */
      max-height: var(--left-height, 520px);
      align-self: stretch;
      justify-self: end;
    }
`;

export default function GeneralCard({ title, description, img }) {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const update = () => {
            const tH = titleRef.current ? titleRef.current.getBoundingClientRect().height : 0
            const dH = descRef.current ? descRef.current.getBoundingClientRect().height : 0
            const total = Math.ceil(tH + dH)
            sectionRef.current.style.setProperty('--left-height', `${total}px`)
        }

        update()

        // Observe size changes
        const ro = new (window.ResizeObserver || window.MutationObserver)((entries) => {
            update()
        })

        if (titleRef.current) ro.observe(titleRef.current)
        if (descRef.current) ro.observe(descRef.current)

        window.addEventListener('resize', update)

        return () => {
            try {
                if (titleRef.current) ro.unobserve(titleRef.current)
                if (descRef.current) ro.unobserve(descRef.current)
            } catch (e) {}
            window.removeEventListener('resize', update)
            if (ro && ro.disconnect) ro.disconnect()
        }
    }, [])

    return (
        <>
            <Section ref={sectionRef}>
                <LeftColumn>
                  <Title ref={titleRef}>
                      {title}
                  </Title>

                  <Description ref={descRef}>
                      {description}
                  </Description>
                </LeftColumn>

                <Image
                    src={img}
                    alt={title}
                    onLoad={() => { /* trigger the resize observer update via DOM mutation */
                        if (titleRef.current) titleRef.current.style.zoom = '1'
                    }}
                />
            </Section>
        </>
    )
} 
