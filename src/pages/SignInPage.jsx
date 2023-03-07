import { useState } from "react";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { RandomNameFormField } from "../components/RandomNameFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { getRandomName } from "../library/random";

export function SignInPage(props) {
    const [ formState, setFormState ] = useState(getRandomName());

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUserNameChange(value) {
        setFormState(value);
    }

    console.log(formState);

    return (
        <div className = 'sign-in-page'>
            <div className = 'card'>
                <form className = 'sign-in-form' onSubmit={handleSubmit}>
                    <InputFormField label ="Username" 
                    type="text"
                    onChange={handleUserNameChange}
                    value={formState} />
                    <RandomNameFormField onRandomName={handleUserNameChange}/>
                    <SubmitFormField label = "Sign in"/>
                    <FormField>
                        <RandomNameButton onRandomName={handleUserNameChange}/>
                    </FormField>
                    <FormField>
                      <Button type="submit" label="Sign in"/>
                    </FormField>
                    
                </form>
            </div>
        </div>
    );
};
