import styled from '@emotion/styled';

export const DeletedPerson = styled.button`
  color: brown;
  width: 18px;
  background-color: transparent;
  height: 15px;
  display: flex;
  align-items: center;
  :hover {
    background-color: #f3acac;
  }
`;

export const Person = styled.li`
  margin-bottom: 8px;
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(175, 168, 106);
`;
