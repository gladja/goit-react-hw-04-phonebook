import { styled } from 'styled-components';

export const List = styled('ul')(()=>{
  return {
    listStyle: 'none',
    padding: '0',
    width: '300px',
    margin: '0 auto',
    textAlign: 'center',
  }
})

export const Item = styled('div')(()=>{
  return {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
    borderRadius: '10px',

    '&:nth-child(2n)': {
      // background: 'lightgrey',
    },
  }
})

export const Row = styled('div')(()=>{
  return {
    fontSize: '16px',
    fontWeight: '700',
    padding: '10px 0',
  }
})

export const BtnDel = styled('button')(()=>{
  return {
    cursor: 'pointer',
    border: '0',
    background: 'white',
    padding: '0',
    transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',

    '&:hover': {
      transform: 'translateY(-2px)',
    },
  }
})
