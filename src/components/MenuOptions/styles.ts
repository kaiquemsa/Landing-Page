import styled from "styled-components";

export const Container = styled.li`
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: 500;
    transition: color 0.25s ease;

    a {
        color: #1E255E;
        &[data-selected="true"] {
            color: #D32034;
            
        }
        &:hover {
            color: #D32034;
            opacity: 0.7;
            cursor: pointer;
        }
    }


`;