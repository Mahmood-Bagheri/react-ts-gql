import styled from "styled-components";
import tw from "twin.macro";

export const StyledForm = styled.form`
    & {
        ${tw`mt-2`};
        h1 {
            ${tw`text-4xl mb-2`};
        }
        button {
            ${tw`w-full bg-green-600 text-white rounded-lg p-2 mb-2`};
        }
    }
`;
export const StyledFormGroup = styled.div`
    input {
        height: 40px;
        outline: none;
        border: 1px solid #ebebeb;
        ${tw`w-full rounded-lg p-2 mb-2`};

        & + label {
        }
    }
`;
