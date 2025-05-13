import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageBox = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 0.5rem;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0059c1;
  }

  &:disabled {
  opacity: 0.5;
  }
`;