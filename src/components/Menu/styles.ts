import styled from 'styled-components';

export const MenuList = styled.ul`
    margin-left:auto;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    align-items: center;
    border: 2px solid #f9f4f5;
    background-color: #f9f4f5;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    border-radius: 50px;
    height: 60px;
`;
export const ItemList = styled.li`
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: 500;
    transition: color 0.25s ease;

    &:hover {
        a {
            color: #D32034;
            cursor: pointer;
        }
    }
    
    a {
        color: #1E255E;
    }
    .selected {
        color: #D32034;
    }

`;