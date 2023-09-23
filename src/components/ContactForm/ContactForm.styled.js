import { styled } from 'styled-components';

export const Title = styled('h2')(() => {
  return {
    margin: '25px 0 10px',
    textAlign: 'center',
  };
});

export const Form = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '25px',
    width: '300px',
    borderRadius: '15px',
    margin: '0 auto',
    boxShadow: '0px 10px 20px 2px rgba(0, 0, 0, 0.25)',
  }
});

export const Label = styled('label')(()=>{
  return {
    marginBottom: '20px',
    fontWeight: '700',
    textAlign: 'center',
  }
})

export const Input = styled('input')(()=>{
  return {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    border: '1px solid grey'
  }
})

export const Btn = styled('button')(()=>{
  return {
    margin: '10px auto',
    width: '100%',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid lightblue',
    textTransform: 'uppercase',
    background: 'lightblue',
    fontWeight: '700',
    cursor: 'pointer',

    transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',

    '&:hover': {
      color: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
      transform: 'translateY(-2px)',
    },
  }
})
